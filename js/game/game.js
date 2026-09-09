import { Player } from "./player.js";
import { Round } from "./round.js";
import { applyConsequence } from "./effects.js";

import {
    getThemeData
} from "../data/themeData.js";


// =====================================
// MODE TEST
// =====================================

// true  = uniquement les secret_choice
// false = toutes les situations

const TEST_ONLY_SECRET_CHOICES =
    false;


export class Game {

    constructor() {

        // =====================================
        // JOUEURS
        // =====================================

        this.players =
            [];

        this.currentPlayerIndex =
            0;

        this.currentRound =
            null;

        this.roundNumber =
            0;


        // =====================================
        // MODE
        // =====================================

        this.gameMode =
            "battle_royal";

        this.maxRounds =
            null;


        // =====================================
        // THÈME
        // =====================================

        this.theme =
            "desert_island";


        // =====================================
        // QUESTIONS
        // =====================================

        this.availableSituations =
            [];

        this.usedSituationIds =
            [];

        this.questionsExhausted =
            false;


        // =====================================
        // SECRET CHOICE
        // =====================================

        this.pendingSecretChoice =
            null;


        // =====================================
        // SURVIVAL PARTY
        // =====================================

        this.endBonuses =
            [];

        this.partyBonusesApplied =
            false;


        // =====================================
        // ÉTAT
        // =====================================

        this.started =
            false;

    }


    // =====================================
    // DÉMARRAGE
    // =====================================

    start(
        playerNames,
        gameMode = "battle_royal",
        theme = "desert_island",
        maxRounds = null
    ) {

        // =====================================
        // CONFIGURATION
        // =====================================

        this.gameMode =
            gameMode;

        this.theme =
            theme;


        this.maxRounds =
            gameMode === "survival_party"
                ? Number(maxRounds) || 5
                : null;


        // =====================================
        // DONNÉES DU THÈME
        // =====================================

        const themeData =
            getThemeData(
                this.theme
            );


        if (!themeData) {

            console.error(
                "Impossible de charger le thème :",
                this.theme
            );

            return false;

        }


        // =====================================
        // POOL DE QUESTIONS
        // =====================================

        if (
            TEST_ONLY_SECRET_CHOICES
        ) {

            this.availableSituations = [

                ...(
                    themeData.secretSituations ??
                    []
                )

            ];

        }

        else {

            this.availableSituations = [

                ...(
                    themeData.situations ??
                    []
                ),

                ...(
                    themeData.interactionSituations ??
                    []
                ),

                ...(
                    themeData.groupSituations ??
                    []
                ),

                ...(
                    themeData.secretSituations ??
                    []
                )

            ];

        }


        if (
            this.availableSituations.length === 0
        ) {

            console.error(
                "Aucune situation disponible pour :",
                this.theme
            );

            return false;

        }


        // =====================================
        // JOUEURS
        // =====================================

        this.players =
            playerNames.map(
                (name, index) => {

                    return new Player(
                        index + 1,
                        name
                    );

                }
            );


        // =====================================
        // SURVIVAL PARTY :
        // PAS D'ÉLIMINATION À 0
        // =====================================

        const eliminationEnabled =
            this.gameMode !==
            "survival_party";


        this.players.forEach(
            player => {

                if (
                    typeof player
                        .setEliminationEnabled ===
                    "function"
                ) {

                    player.setEliminationEnabled(
                        eliminationEnabled
                    );

                }

            }
        );


        // =====================================
        // RESET
        // =====================================

        this.currentPlayerIndex =
            0;

        this.currentRound =
            null;

        this.roundNumber =
            0;

        this.usedSituationIds =
            [];

        this.questionsExhausted =
            false;

        this.pendingSecretChoice =
            null;

        this.endBonuses =
            [];

        this.partyBonusesApplied =
            false;

        this.started =
            true;


        console.log(
            "Partie créée :",
            {
                gameMode:
                    this.gameMode,

                theme:
                    this.theme,

                maxRounds:
                    this.maxRounds,

                questions:
                    this.availableSituations.length,

                secretTest:
                    TEST_ONLY_SECRET_CHOICES
            }
        );


        return this.startNewRound();

    }


    // =====================================
    // NOUVEAU TOUR
    // =====================================

    startNewRound() {

        const alivePlayers =
            this.getAlivePlayers();


        // =====================================
        // SURVIVAL PARTY TERMINÉ
        // =====================================

        if (
            this.gameMode ===
                "survival_party" &&

            this.maxRounds !== null &&

            this.roundNumber >=
                this.maxRounds
        ) {

            return false;

        }


        if (
            alivePlayers.length === 0
        ) {

            return false;

        }


        const remainingQuestions =
            this.getRemainingSituationCount();


        // =====================================
        // BATTLE ROYAL :
        // TOUR COMPLET OBLIGATOIRE
        // =====================================

        if (
            this.gameMode !==
                "survival_party" &&

            remainingQuestions <
                alivePlayers.length
        ) {

            this.questionsExhausted =
                true;

            return false;

        }


        // =====================================
        // CRÉATION DU TOUR
        // =====================================

        this.roundNumber++;


        this.currentRound =
            new Round(
                this.roundNumber
            );


        this.currentPlayerIndex =
            this.getFirstAlivePlayerIndex();


        if (
            this.currentPlayerIndex === -1
        ) {

            return false;

        }


        return this.assignSituationToCurrentPlayer();

    }


    // =====================================
    // QUESTIONS RESTANTES
    // =====================================

    getRemainingSituationCount() {

        return this.availableSituations
            .filter(
                situation =>
                    !this.usedSituationIds
                        .includes(
                            situation.id
                        )
            )
            .length;

    }


    getUsedSituationCount() {

        return this.usedSituationIds.length;

    }


    // =====================================
    // QUESTIONS COMPATIBLES
    // =====================================

    isSituationCompatible(
        situation,
        alivePlayers,
        unplayedPlayers
    ) {

        if (
            situation.type ===
            "group_vs_one"
        ) {

            return (
                unplayedPlayers.length >= 4
            );

        }


        if (
            situation.type ===
            "interaction"
        ) {

            return (
                alivePlayers.length >= 2
            );

        }


        if (
            situation.type ===
            "secret_choice"
        ) {

            return (
                alivePlayers.length >= 2
            );

        }


        return true;

    }


    // =====================================
    // QUESTION ALÉATOIRE
    // =====================================

    getRandomUnusedSituation() {

        const alivePlayers =
            this.getAlivePlayers();


        const unplayedPlayers =
            this.getUnplayedPlayers();


        let availableSituations =
            this.availableSituations
                .filter(
                    situation =>
                        !this.usedSituationIds
                            .includes(
                                situation.id
                            )
                )
                .filter(
                    situation =>
                        this.isSituationCompatible(
                            situation,
                            alivePlayers,
                            unplayedPlayers
                        )
                );


        // =====================================
        // SURVIVAL PARTY :
        // RECYCLAGE DES QUESTIONS
        // =====================================

        if (
            availableSituations.length === 0 &&
            this.gameMode ===
                "survival_party"
        ) {

            this.usedSituationIds =
                [];


            availableSituations =
                this.availableSituations
                    .filter(
                        situation =>
                            this.isSituationCompatible(
                                situation,
                                alivePlayers,
                                unplayedPlayers
                            )
                    );

        }


        if (
            availableSituations.length === 0
        ) {

            return null;

        }


        const randomIndex =
            Math.floor(
                Math.random() *
                availableSituations.length
            );


        const situation =
            availableSituations[
                randomIndex
            ];


        this.usedSituationIds.push(
            situation.id
        );


        return situation;

    }


    // =====================================
    // ATTRIBUTION SITUATION
    // =====================================

    assignSituationToCurrentPlayer() {

        const player =
            this.getCurrentPlayer();


        if (
            !player ||
            !player.alive ||
            !this.currentRound
        ) {

            return false;

        }


        const existingSituation =
            this.currentRound
                .getPlayerSituation(
                    player.id
                );


        if (existingSituation) {

            return true;

        }


        const situation =
            this.getRandomUnusedSituation();


        if (!situation) {

            return false;

        }


        const assignedSituation = {
            ...situation
        };


        // =====================================
        // INTERACTION
        // =====================================

        if (
            situation.type ===
            "interaction"
        ) {

            const targetPlayer =
                this.getRandomTargetPlayer(
                    player
                );


            if (!targetPlayer) {

                return false;

            }


            assignedSituation.targetPlayerId =
                targetPlayer.id;

        }


        // =====================================
        // GROUPE VS 1
        // =====================================

        else if (
            situation.type ===
            "group_vs_one"
        ) {

            const unplayedPlayers =
                this.getUnplayedPlayers();


            if (
                unplayedPlayers.length < 4
            ) {

                return false;

            }


            const possibleTargets =
                unplayedPlayers.filter(
                    candidate =>
                        candidate.id !==
                        player.id
                );


            if (
                possibleTargets.length === 0
            ) {

                return false;

            }


            const randomIndex =
                Math.floor(
                    Math.random() *
                    possibleTargets.length
                );


            const targetPlayer =
                possibleTargets[
                    randomIndex
                ];


            const groupPlayers =
                unplayedPlayers.filter(
                    groupPlayer =>
                        groupPlayer.id !==
                        targetPlayer.id
                );


            assignedSituation.targetPlayerId =
                targetPlayer.id;


            assignedSituation.groupPlayerIds =
                groupPlayers.map(
                    groupPlayer =>
                        groupPlayer.id
                );

        }


        this.currentRound
            .setPlayerSituation(
                player.id,
                assignedSituation
            );


        return true;

    }


    // =====================================
    // JOUEUR ACTUEL
    // =====================================

    getCurrentPlayer() {

        return (
            this.players[
                this.currentPlayerIndex
            ] ?? null
        );

    }


    // =====================================
    // SITUATION ACTUELLE
    // =====================================

    getCurrentSituation() {

        if (!this.currentRound) {

            return null;

        }


        const player =
            this.getCurrentPlayer();


        if (!player) {

            return null;

        }


        return this.currentRound
            .getPlayerSituation(
                player.id
            );

    }


    // =====================================
    // CIBLE INTERACTION
    // =====================================

    getRandomTargetPlayer(
        actorPlayer
    ) {

        const possibleTargets =
            this.players.filter(
                player =>
                    player.alive &&
                    player.id !==
                    actorPlayer.id
            );


        if (
            possibleTargets.length === 0
        ) {

            return null;

        }


        const randomIndex =
            Math.floor(
                Math.random() *
                possibleTargets.length
            );


        return possibleTargets[
            randomIndex
        ];

    }


    // =====================================
    // JOUEURS DU GROUPE
    // =====================================

    getSituationGroupPlayers(
        situation
    ) {

        if (
            !situation ||
            !Array.isArray(
                situation.groupPlayerIds
            )
        ) {

            return [];

        }


        return situation.groupPlayerIds
            .map(
                playerId =>
                    this.players.find(
                        player =>
                            player.id ===
                            playerId
                    )
            )
            .filter(Boolean);

    }


    // =====================================
    // TEXTE DYNAMIQUE
    // =====================================

    renderPlayerText(
        text,
        actorPlayer,
        targetPlayer,
        groupPlayers = []
    ) {

        if (!text) {

            return "";

        }


        let result =
            text;


        result =
            result.replaceAll(
                "{actor}",
                actorPlayer
                    ? actorPlayer.name
                    : "Le joueur"
            );


        result =
            result.replaceAll(
                "{target}",
                targetPlayer
                    ? targetPlayer.name
                    : "l'autre joueur"
            );


        const groupText =
            groupPlayers.length > 0
                ? this.formatPlayerGroup(
                    groupPlayers
                )
                : "Les autres joueurs";


        result =
            result.replaceAll(
                "{group}",
                groupText
            );


        return result;

    }


    // =====================================
    // FORMAT GROUPE
    // =====================================

    formatPlayerGroup(
        players
    ) {

        const names =
            players.map(
                player =>
                    player.name
            );


        if (
            names.length === 0
        ) {

            return "Les autres joueurs";

        }


        if (
            names.length === 1
        ) {

            return names[0];

        }


        if (
            names.length === 2
        ) {

            return (
                `${names[0]} et ${names[1]}`
            );

        }


        return (
            names
                .slice(
                    0,
                    -1
                )
                .join(", ")
            +
            " et "
            +
            names[
                names.length - 1
            ]
        );

    }


    // =====================================
    // CHOIX
    // =====================================

    makeChoice(
        choiceId
    ) {

        const player =
            this.getCurrentPlayer();


        const situation =
            this.getCurrentSituation();


        if (
            !player ||
            !situation ||
            !player.alive
        ) {

            console.error(
                "makeChoice : données invalides",
                {
                    player,
                    situation
                }
            );

            return null;

        }


        // =====================================
        // CIBLE
        // =====================================

        let targetPlayer =
            null;


        if (
            situation.type ===
                "interaction" ||

            situation.type ===
                "group_vs_one"
        ) {

            targetPlayer =
                this.players.find(
                    item =>
                        item.id ===
                        situation.targetPlayerId
                ) ?? null;

        }


        // =====================================
        // GROUPE
        // =====================================

        let groupPlayers =
            [];


        if (
            situation.type ===
            "group_vs_one"
        ) {

            groupPlayers =
                this.getSituationGroupPlayers(
                    situation
                );

        }


        // =====================================
        // CHOIX
        // =====================================

        const choice =
            situation.choices?.find(
                item =>
                    item.id ===
                    choiceId
            );


        if (!choice) {

            console.error(
                "Choix introuvable :",
                choiceId
            );

            return null;

        }


        // =====================================
        // !!!!! SECRET CHOICE !!!!!
        //
        // DOIT ÊTRE AVANT
        // choice.consequences
        // =====================================

        if (
            situation.type ===
            "secret_choice"
        ) {

            return this.startSecretChoice(
                player,
                situation,
                choice
            );

        }


        // =====================================
        // SITUATION NORMALE
        // =====================================

        if (
            !Array.isArray(
                choice.consequences
            ) ||
            choice.consequences.length === 0
        ) {

            console.error(
                "Aucune conséquence :",
                choice
            );

            return null;

        }


        // =====================================
        // CONSÉQUENCE ALÉATOIRE
        // =====================================

        const randomIndex =
            Math.floor(
                Math.random() *
                choice.consequences.length
            );


        const consequence =
            choice.consequences[
                randomIndex
            ];


        const effects =
            applyConsequence(
                player,
                targetPlayer,
                consequence,
                this.players
            );


        // =====================================
        // JOUEURS AYANT JOUÉ
        // =====================================

        let playedPlayerIds =
            [];

        let playedPlayerNames =
            [];


        if (
            situation.type ===
            "group_vs_one"
        ) {

            playedPlayerIds =
                groupPlayers.map(
                    item =>
                        item.id
                );


            playedPlayerNames =
                groupPlayers.map(
                    item =>
                        item.name
                );

        }

        else {

            playedPlayerIds = [
                player.id
            ];

            playedPlayerNames = [
                player.name
            ];

        }


        // =====================================
        // STATISTIQUES
        // =====================================

        playedPlayerIds.forEach(
            playerId => {

                const playedPlayer =
                    this.players.find(
                        item =>
                            item.id ===
                            playerId
                    );


                if (
                    playedPlayer?.stats
                ) {

                    playedPlayer.stats
                        .choicesMade++;

                }

            }
        );


        effects.forEach(
            effect => {

                const affectedPlayer =
                    this.players.find(
                        item =>
                            item.id ===
                            effect.playerId
                    );


                if (
                    !affectedPlayer?.stats
                ) {

                    return;

                }


                if (
                    effect.difference > 0
                ) {

                    affectedPlayer.stats
                        .livesGained +=
                        effect.difference;

                }


                if (
                    effect.difference < 0
                ) {

                    affectedPlayer.stats
                        .damageTaken +=
                        Math.abs(
                            effect.difference
                        );

                }

            }
        );


        // =====================================
        // TEXTES
        // =====================================

        const renderedSituationTitle =
            this.renderPlayerText(
                situation.title,
                player,
                targetPlayer,
                groupPlayers
            );


        const renderedSituationDescription =
            this.renderPlayerText(
                situation.description,
                player,
                targetPlayer,
                groupPlayers
            );


        const renderedChoiceTitle =
            this.renderPlayerText(
                choice.title,
                player,
                targetPlayer,
                groupPlayers
            );


        const renderedChoiceDescription =
            this.renderPlayerText(
                choice.description,
                player,
                targetPlayer,
                groupPlayers
            );


        const renderedConsequenceText =
            this.renderPlayerText(
                consequence.text,
                player,
                targetPlayer,
                groupPlayers
            );


        // =====================================
        // RÉSULTAT
        // =====================================

        const result = {

            playerId:
                player.id,

            playerName:
                player.name,


            playedPlayerIds,

            playedPlayerNames,


            targetPlayerId:
                targetPlayer
                    ? targetPlayer.id
                    : null,

            targetPlayerName:
                targetPlayer
                    ? targetPlayer.name
                    : null,


            groupPlayerIds:
                groupPlayers.map(
                    item =>
                        item.id
                ),

            groupPlayerNames:
                groupPlayers.map(
                    item =>
                        item.name
                ),


            gameMode:
                this.gameMode,

            theme:
                this.theme,


            situationId:
                situation.id,

            situationType:
                situation.type ??
                "classic",

            situationTitle:
                renderedSituationTitle,

            situationDescription:
                renderedSituationDescription,

            situationIcon:
                situation.icon,

            situationCategory:
                situation.category,


            choiceId:
                choice.id,

            choiceTitle:
                renderedChoiceTitle,

            choiceDescription:
                renderedChoiceDescription,


            consequenceId:
                consequence.id,

            consequenceText:
                renderedConsequenceText,

            consequenceIcon:
                consequence.icon,


            effects,


            remainingLives:
                player.lives,

            alive:
                player.alive

        };


        this.currentRound.addResult(
            result
        );


        if (
            situation.type ===
            "group_vs_one"
        ) {

            this.currentRound
                .markPlayersPlayed(
                    playedPlayerIds
                );

        }

        else {

            this.currentRound
                .markPlayerPlayed(
                    player.id
                );

        }


        return {

            player,

            targetPlayer,

            groupPlayers,

            situation,

            choice,

            consequence,

            effects,

            result

        };

    }


    // =====================================
    // SECRET CHOICE :
    // PHASE 1
    // =====================================

    startSecretChoice(
        player,
        situation,
        choice
    ) {

        if (
            !choice.secretValue
        ) {

            console.error(
                "secretValue absent :",
                choice
            );

            return null;

        }


        const otherPlayers =
            this.players.filter(
                otherPlayer =>
                    otherPlayer.alive &&
                    otherPlayer.id !==
                    player.id
            );


        if (
            otherPlayers.length === 0
        ) {

            console.error(
                "Secret choice impossible avec un seul joueur."
            );

            return null;

        }


        this.pendingSecretChoice = {

            playerId:
                player.id,

            situationId:
                situation.id,

            choiceId:
                choice.id,

            secretValue:
                choice.secretValue,

            otherPlayerIds:
                otherPlayers.map(
                    item =>
                        item.id
                )

        };


        console.log(
            "Choix secret enregistré."
        );


        return {

            phase:
                "secret_waiting",

            player,

            situation,

            choice,

            otherPlayers

        };

    }


    // =====================================
    // SECRET CHOICE :
    // PHASE 2
    // =====================================

    resolveSecretGuess(
        guessId
    ) {

        if (
            !this.pendingSecretChoice
        ) {

            console.error(
                "Aucun choix secret en attente."
            );

            return null;

        }


        const pending =
            this.pendingSecretChoice;


        const player =
            this.players.find(
                item =>
                    item.id ===
                    pending.playerId
            );


        if (!player) {

            return null;

        }


        const situation =
            this.currentRound
                .getPlayerSituation(
                    player.id
                );


        if (
            !situation ||
            situation.type !==
                "secret_choice"
        ) {

            console.error(
                "Situation secrète invalide."
            );

            return null;

        }


        const secretChoice =
            situation.choices.find(
                choice =>
                    choice.id ===
                    pending.choiceId
            );


        const guess =
            situation.guess
                ?.choices
                ?.find(
                    item =>
                        item.id ===
                        guessId
                );


        if (
            !secretChoice ||
            !guess
        ) {

            console.error(
                "Choix secret ou devinette introuvable."
            );

            return null;

        }


        // =====================================
        // RÉSULTAT DE LA DEVINETTE
        // =====================================

        const correct =
            guess.secretValue ===
            pending.secretValue;


        const outcomeKey =
            `${pending.secretValue}_${correct ? "correct" : "wrong"}`;


        const outcome =
            situation.outcomes?.[
                outcomeKey
            ];


        if (!outcome) {

            console.error(
                "Outcome introuvable :",
                outcomeKey
            );

            return null;

        }


        const otherPlayers =
            pending.otherPlayerIds
                .map(
                    id =>
                        this.players.find(
                            item =>
                                item.id ===
                                id
                        )
                )
                .filter(Boolean);


        // =====================================
        // EFFETS
        //
        // targetPlayer = player
        // => "others" = tous sauf X
        // =====================================

        const effects =
            applyConsequence(
                player,
                player,
                outcome,
                this.players
            );


        // =====================================
        // STATS
        // =====================================

        if (
            player.stats
        ) {

            player.stats
                .choicesMade++;

        }


        effects.forEach(
            effect => {

                const affectedPlayer =
                    this.players.find(
                        item =>
                            item.id ===
                            effect.playerId
                    );


                if (
                    !affectedPlayer?.stats
                ) {

                    return;

                }


                if (
                    effect.difference > 0
                ) {

                    affectedPlayer.stats
                        .livesGained +=
                        effect.difference;

                }


                if (
                    effect.difference < 0
                ) {

                    affectedPlayer.stats
                        .damageTaken +=
                        Math.abs(
                            effect.difference
                        );

                }

            }
        );


        // =====================================
        // RÉSULTAT
        // =====================================

        const result = {

            playerId:
                player.id,

            playerName:
                player.name,


            playedPlayerIds: [
                player.id
            ],

            playedPlayerNames: [
                player.name
            ],


            groupPlayerIds:
                otherPlayers.map(
                    item =>
                        item.id
                ),

            groupPlayerNames:
                otherPlayers.map(
                    item =>
                        item.name
                ),


            gameMode:
                this.gameMode,

            theme:
                this.theme,


            situationId:
                situation.id,

            situationType:
                "secret_choice",

            situationTitle:
                this.renderPlayerText(
                    situation.title,
                    player,
                    null,
                    otherPlayers
                ),

            situationDescription:
                this.renderPlayerText(
                    situation.description,
                    player,
                    null,
                    otherPlayers
                ),

            situationIcon:
                situation.icon,

            situationCategory:
                situation.category,


            choiceId:
                secretChoice.id,

            choiceTitle:
                this.renderPlayerText(
                    secretChoice.title,
                    player,
                    null,
                    otherPlayers
                ),


            guessId:
                guess.id,

            guessTitle:
                this.renderPlayerText(
                    guess.title,
                    player,
                    null,
                    otherPlayers
                ),

            guessCorrect:
                correct,


            consequenceId:
                outcomeKey,

            consequenceText:
                this.renderPlayerText(
                    outcome.text,
                    player,
                    null,
                    otherPlayers
                ),

            consequenceIcon:
                outcome.icon,


            effects,


            remainingLives:
                player.lives,

            alive:
                player.alive

        };


        this.currentRound.addResult(
            result
        );


        // =====================================
        // IMPORTANT :
        // SEUL X CONSOMME SON TOUR
        // =====================================

        this.currentRound
            .markPlayerPlayed(
                player.id
            );


        this.pendingSecretChoice =
            null;


        return {

            phase:
                "secret_resolved",

            player,

            otherPlayers,

            situation,

            choice:
                secretChoice,

            guess,

            consequence:
                outcome,

            effects,

            result

        };

    }


    // =====================================
    // JOUEUR SUIVANT
    // =====================================

    nextPlayer() {

        if (!this.currentRound) {

            return false;

        }


        const nextPlayer =
            this.players.find(
                player =>
                    player.alive &&
                    !this.currentRound
                        .hasPlayerPlayed(
                            player.id
                        )
            );


        if (!nextPlayer) {

            this.currentRound.complete();

            return false;

        }


        this.currentPlayerIndex =
            this.players.findIndex(
                player =>
                    player.id ===
                    nextPlayer.id
            );


        const questionAvailable =
            this.assignSituationToCurrentPlayer();


        if (!questionAvailable) {

            this.currentRound.complete();

            return false;

        }


        return true;

    }


    // =====================================
    // NON JOUÉS
    // =====================================

    getUnplayedPlayers() {

        if (!this.currentRound) {

            return [];

        }


        return this.players.filter(
            player =>
                player.alive &&
                !this.currentRound
                    .hasPlayerPlayed(
                        player.id
                    )
        );

    }


    // =====================================
    // PREMIER VIVANT
    // =====================================

    getFirstAlivePlayerIndex() {

        return this.players.findIndex(
            player =>
                player.alive
        );

    }


    // =====================================
    // VIVANTS
    // =====================================

    getAlivePlayers() {

        return this.players.filter(
            player =>
                player.alive
        );

    }


    // =====================================
    // QUESTIONS ÉPUISÉES
    // =====================================

    areQuestionsExhausted() {

        if (
            this.gameMode ===
            "survival_party"
        ) {

            return false;

        }


        return (
            this.getRemainingSituationCount() <
            this.getAlivePlayers().length
        );

    }


    // =====================================
    // FIN PARTIE
    // =====================================

    isGameOver() {

        const alivePlayers =
            this.getAlivePlayers();


        // =====================================
        // SURVIVAL PARTY
        // =====================================

        if (
            this.gameMode ===
            "survival_party"
        ) {

            return (
                this.maxRounds !== null &&
                this.roundNumber >=
                    this.maxRounds &&
                this.currentRound?.isCompleted()
            );

        }


        // =====================================
        // BATTLE ROYAL
        // =====================================

        if (
            this.getRemainingSituationCount() <
            alivePlayers.length
        ) {

            return true;

        }


        if (
            this.players.length === 1
        ) {

            return (
                this.players[0].lives <= 0
            );

        }


        return (
            alivePlayers.length <= 1
        );

    }


    // =====================================
    // RÉSULTATS TOUR
    // =====================================

    getRoundResults() {

        if (!this.currentRound) {

            return [];

        }


        return this.currentRound
            .getResults();

    }


    // =====================================
    // CLASSEMENT
    // =====================================

    getRanking() {

        return [
            ...this.players
        ].sort(
            (a, b) =>
                b.lives -
                a.lives
        );

    }


    // =====================================
    // RESET
    // =====================================

    reset() {

        this.players =
            [];

        this.currentPlayerIndex =
            0;

        this.currentRound =
            null;

        this.roundNumber =
            0;

        this.gameMode =
            "battle_royal";

        this.maxRounds =
            null;

        this.theme =
            "desert_island";

        this.availableSituations =
            [];

        this.usedSituationIds =
            [];

        this.questionsExhausted =
            false;

        this.pendingSecretChoice =
            null;

        this.endBonuses =
            [];

        this.partyBonusesApplied =
            false;

        this.started =
            false;

    }

}