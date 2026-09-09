import { Player } from "./player.js";
import { Round } from "./round.js";
import { applyConsequence } from "./effects.js";

import {
    getThemeData
} from "../data/themeData.js";


export class Game {

    constructor() {

        // =====================================
        // JOUEURS
        // =====================================

        this.players = [];

        this.currentPlayerIndex = 0;

        this.currentRound = null;

        this.roundNumber = 0;


        // =====================================
        // MODE DE JEU
        // =====================================

        this.gameMode =
            "battle_royal";


        // =====================================
        // CONFIGURATION DU MODE
        // =====================================

        this.maxRounds =
            null;


        // =====================================
        // BONUS DE FIN
        // =====================================

        this.endBonuses =
            [];

        this.partyBonusesApplied =
            false;
        
        // =====================================
        // THÈME
        // =====================================

        this.theme =
            "desert_island";


        // =====================================
        // SITUATIONS DU THÈME ACTUEL
        // =====================================

        this.availableSituations =
            [];


        // =====================================
        // SITUATIONS DÉJÀ UTILISÉES
        // =====================================

        this.usedSituationIds =
            [];


        // =====================================
        // FIN DES QUESTIONS
        // =====================================

        this.questionsExhausted =
            false;


        // =====================================
        // ÉTAT DU JEU
        // =====================================

        this.started =
            false;

    }


    // =====================================
    // DÉMARRAGE DE LA PARTIE
    // =====================================

    start(
        playerNames,
        gameMode = "battle_royal",
        theme = "desert_island",
        maxRounds = null
    ) {

        // =====================================
        // MODE ET THÈME
        // =====================================

        this.gameMode =
            gameMode;

        this.theme =
            theme;
        
        this.maxRounds =
            gameMode === "survival_party"
                ? Number(maxRounds) || 5
                : null;


        this.endBonuses =
            [];


        this.partyBonusesApplied =
            false;


        // =====================================
        // CHARGEMENT DES DONNÉES DU THÈME
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
        // CONSTRUCTION DU POOL DE QUESTIONS
        // =====================================

        this.availableSituations = [

            ...(
                themeData.situations ?? []
            ),

            ...(
                themeData.interactionSituations ?? []
            ),

            ...(
                themeData.groupSituations ?? []
            )

        ];


        // =====================================
        // VÉRIFICATION
        // =====================================

        if (
            this.availableSituations.length === 0
        ) {

            console.error(
                "Le thème ne contient aucune situation :",
                this.theme
            );

            return false;

        }


        console.log(
            "Thème chargé :",
            this.theme
        );


        console.log(
            "Mode chargé :",
            this.gameMode
        );


        console.log(
            "Nombre de situations disponibles :",
            this.availableSituations.length
        );


        // =====================================
        // CRÉATION DES JOUEURS
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
        
        const eliminationEnabled =
            this.gameMode !==
            "survival_party";


        this.players.forEach(
            player => {

                player.setEliminationEnabled(
                    eliminationEnabled
                );

            }
        );

        // =====================================
        // RESET DE LA PARTIE
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

        this.started =
            true;


        // =====================================
        // PREMIER TOUR
        // =====================================

        return this.startNewRound();

    }


    // =====================================
    // NOUVEAU TOUR
    // =====================================

    startNewRound() {

        const alivePlayers =
            this.getAlivePlayers();


        const remainingQuestions =
            this.getRemainingSituationCount();


        // =====================================
        // PLUS AUCUN JOUEUR VIVANT
        // =====================================

        if (
            alivePlayers.length === 0
        ) {

            return false;

        }


        // =====================================
        // PAS ASSEZ DE QUESTIONS
        // POUR UN TOUR COMPLET
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
        // NOUVEAU TOUR
        // =====================================

        this.roundNumber++;


        this.currentRound =
            new Round(
                this.roundNumber
            );


        // =====================================
        // PREMIER JOUEUR VIVANT
        // =====================================

        this.currentPlayerIndex =
            this.getFirstAlivePlayerIndex();


        if (
            this.currentPlayerIndex === -1
        ) {

            return false;

        }


        // =====================================
        // PREMIÈRE QUESTION
        // =====================================

        return this.assignSituationToCurrentPlayer();

    }


    // =====================================
    // NOMBRE DE QUESTIONS RESTANTES
    // =====================================

    getRemainingSituationCount() {

        return this.availableSituations.filter(
            situation =>
                !this.usedSituationIds.includes(
                    situation.id
                )
        ).length;

    }


    // =====================================
    // NOMBRE DE QUESTIONS UTILISÉES
    // =====================================

    getUsedSituationCount() {

        return this.usedSituationIds.length;

    }


    // =====================================
    // QUESTION ALÉATOIRE UNIQUE
    // =====================================

    getRandomUnusedSituation() {

        const alivePlayers =
            this.getAlivePlayers();


        const unplayedPlayers =
            this.getUnplayedPlayers();


        // =====================================
        // QUESTIONS NON UTILISÉES
        // =====================================

        let availableSituations =
            this.availableSituations.filter(
                situation =>
                    !this.usedSituationIds.includes(
                        situation.id
                    )
            );


        // =====================================
        // FILTRAGE SELON LE TYPE
        // =====================================

        availableSituations =
            availableSituations.filter(
                situation => {


                    // =============================
                    // GROUPE VS 1
                    // =============================

                    if (
                        situation.type ===
                        "group_vs_one"
                    ) {

                        /*
                        Minimum :

                        3 joueurs dans le groupe
                        +
                        1 cible
                        */

                        return (
                            unplayedPlayers.length >= 4
                        );

                    }


                    // =============================
                    // INTERACTION 1 VS 1
                    // =============================

                    if (
                        situation.type ===
                        "interaction"
                    ) {

                        return (
                            alivePlayers.length >= 2
                        );

                    }


                    // =============================
                    // SITUATION CLASSIQUE
                    // =============================

                    return true;

                }
            );

        
        // =====================================
        // PLUS AUCUNE QUESTION POSSIBLE
        // =====================================

        if (
            availableSituations.length === 0 &&
            this.gameMode ===
                "survival_party"
        ) {

            // Toutes les questions compatibles
            // ont été utilisées.
            // On réinitialise le pool.

            this.usedSituationIds =
                [];


            availableSituations =
                this.availableSituations.filter(
                    situation => {

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


                        return true;

                    }
                );

        }


        if (
            availableSituations.length === 0
        ) {

            return null;

        }


        // =====================================
        // TIRAGE ALÉATOIRE
        // =====================================

        const randomIndex =
            Math.floor(
                Math.random() *
                availableSituations.length
            );


        const situation =
            availableSituations[
                randomIndex
            ];


        // =====================================
        // MARQUER COMME UTILISÉE
        // =====================================

        this.usedSituationIds.push(
            situation.id
        );


        return situation;

    }


    // =====================================
    // CIBLE ALÉATOIRE POUR UN GROUPE
    // =====================================

    getRandomGroupTarget(
        actorPlayer
    ) {

        const possibleTargets =
            this.getUnplayedPlayers()
                .filter(
                    player =>
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
    // RÉCUPÉRER LES JOUEURS DU GROUPE
    // =====================================

    getSituationGroupPlayers(
        situation
    ) {

        if (!situation) {

            return [];

        }


        if (
            !Array.isArray(
                situation.groupPlayerIds
            )
        ) {

            return [];

        }


        return situation.groupPlayerIds
            .map(
                playerId => {

                    return this.players.find(
                        player =>
                            player.id ===
                            playerId
                    );

                }
            )
            .filter(Boolean);

    }


    // =====================================
    // ATTRIBUER UNE QUESTION
    // AU JOUEUR ACTUEL
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


        // =====================================
        // SITUATION DÉJÀ ATTRIBUÉE ?
        // =====================================

        const existingSituation =
            this.currentRound
                .getPlayerSituation(
                    player.id
                );


        if (existingSituation) {

            return true;

        }


        // =====================================
        // TIRAGE
        // =====================================

        const situation =
            this.getRandomUnusedSituation();


        if (!situation) {

            return false;

        }


        // =====================================
        // COPIE INDÉPENDANTE
        // =====================================

        const assignedSituation = {
            ...situation
        };


        // =====================================
        // INTERACTION 1 VS 1
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


            // =====================================
            // MINIMUM 4 JOUEURS DISPONIBLES
            // =====================================

            if (
                unplayedPlayers.length < 4
            ) {

                return false;

            }


            // =====================================
            // CIBLES POSSIBLES
            // =====================================

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


            // =====================================
            // CIBLE ALÉATOIRE
            // =====================================

            const randomIndex =
                Math.floor(
                    Math.random() *
                    possibleTargets.length
                );


            const targetPlayer =
                possibleTargets[
                    randomIndex
                ];


            // =====================================
            // GROUPE = TOUS SAUF LA CIBLE
            // =====================================

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


        // =====================================
        // ENREGISTREMENT
        // =====================================

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

        if (
            this.currentPlayerIndex < 0
        ) {

            return null;

        }


        return (
            this.players[
                this.currentPlayerIndex
            ] ?? null
        );

    }


    // =====================================
    // QUESTION DU JOUEUR ACTUEL
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
    // CIBLE ALÉATOIRE 1 VS 1
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
    // REMPLACEMENT DES VARIABLES TEXTE
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


        // =====================================
        // ACTEUR
        // =====================================

        result = result.replaceAll(
            "{actor}",
            actorPlayer
                ? actorPlayer.name
                : "Le joueur"
        );


        // =====================================
        // CIBLE
        // =====================================

        result = result.replaceAll(
            "{target}",
            targetPlayer
                ? targetPlayer.name
                : "l'autre joueur"
        );


        // =====================================
        // GROUPE
        // =====================================

        const groupText =
            groupPlayers.length > 0
                ? this.formatPlayerGroup(
                    groupPlayers
                )
                : "Les autres joueurs";


        result = result.replaceAll(
            "{group}",
            groupText
        );


        return result;

    }


    // =====================================
    // GROUPE SAUF CIBLE
    // =====================================

    getGroupPlayers(
        targetPlayer
    ) {

        return this.players.filter(
            player =>
                player.alive &&
                (
                    !targetPlayer ||
                    player.id !==
                    targetPlayer.id
                )
        );

    }


    // =====================================
    // FORMATER UNE LISTE DE JOUEURS
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
    // FAIRE UN CHOIX
    // =====================================

    makeChoice(
        choiceId
    ) {

        // =====================================
        // JOUEUR ACTUEL
        // =====================================

        const player =
            this.getCurrentPlayer();


        // =====================================
        // SITUATION ACTUELLE
        // =====================================

        const situation =
            this.getCurrentSituation();


        if (
            !player ||
            !situation ||
            !player.alive
        ) {

            console.error(
                "makeChoice : joueur ou situation invalide",
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
                    playerItem =>
                        playerItem.id ===
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
            situation.choices.find(
                item =>
                    item.id ===
                    choiceId
            );


        if (!choice) {

            console.error(
                "makeChoice : choix introuvable",
                choiceId
            );

            return null;

        }


        if (
            !Array.isArray(
                choice.consequences
            ) ||
            choice.consequences.length === 0
        ) {

            console.error(
                "makeChoice : aucune conséquence",
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


        // =====================================
        // APPLICATION DES EFFETS
        // =====================================

        const effects =
            applyConsequence(
                player,
                targetPlayer,
                consequence,
                this.players
            );


        // =====================================
        // TEXTES RENDUS
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
        // QUI A JOUÉ ?
        // =====================================

        let playedPlayerIds =
            [];

        let playedPlayerNames =
            [];

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
                    playedPlayer
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
                    !affectedPlayer
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


        effects.forEach(
            effect => {

                if (
                    effect.difference <= 0
                ) {

                    return;

                }


                if (
                    playedPlayerIds.includes(
                        effect.playerId
                    )
                ) {

                    return;

                }


                playedPlayerIds.forEach(
                    playerId => {

                        const helper =
                            this.players.find(
                                item =>
                                    item.id ===
                                    playerId
                            );


                        if (
                            helper
                        ) {

                            helper.stats
                                .healingGiven +=
                                effect.difference;

                        }

                    }
                );

            }
        );


        if (
            situation.type ===
            "group_vs_one"
        ) {

            playedPlayerIds =
                groupPlayers.map(
                    groupPlayer =>
                        groupPlayer.id
                );


            playedPlayerNames =
                groupPlayers.map(
                    groupPlayer =>
                        groupPlayer.name
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
        // RÉSULTAT
        // =====================================

        const result = {

            // =================================
            // JOUEUR INTERNE
            // =================================

            playerId:
                player.id,

            playerName:
                player.name,


            // =================================
            // JOUEURS AYANT JOUÉ
            // =================================

            playedPlayerIds,

            playedPlayerNames,


            // =================================
            // CIBLE
            // =================================

            targetPlayerId:
                targetPlayer
                    ? targetPlayer.id
                    : null,

            targetPlayerName:
                targetPlayer
                    ? targetPlayer.name
                    : null,


            // =================================
            // GROUPE
            // =================================

            groupPlayerIds:
                groupPlayers.map(
                    groupPlayer =>
                        groupPlayer.id
                ),

            groupPlayerNames:
                groupPlayers.map(
                    groupPlayer =>
                        groupPlayer.name
                ),


            // =================================
            // MODE / THÈME
            // =================================

            gameMode:
                this.gameMode,

            theme:
                this.theme,


            // =================================
            // SITUATION
            // =================================

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


            // =================================
            // CHOIX
            // =================================

            choiceId:
                choice.id,

            choiceTitle:
                renderedChoiceTitle,

            choiceDescription:
                renderedChoiceDescription,


            // =================================
            // CONSÉQUENCE
            // =================================

            consequenceId:
                consequence.id,

            consequenceText:
                renderedConsequenceText,

            consequenceIcon:
                consequence.icon,


            // =================================
            // EFFETS
            // =================================

            effects,


            // =================================
            // ÉTAT ACTEUR
            // =================================

            remainingLives:
                player.lives,

            alive:
                player.alive

        };


        // =====================================
        // AJOUT AU RÉCAP
        // =====================================

        this.currentRound
            .addResult(
                result
            );


        // =====================================
        // MARQUER COMME AYANT JOUÉ
        // =====================================

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


        // =====================================
        // DEBUG
        // =====================================

        console.log(
            "Résultat ajouté au round :",
            result
        );


        console.log(
            "Résultats du tour :",
            this.currentRound.getResults()
        );


        // =====================================
        // RETOUR UI
        // =====================================

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
    // JOUEUR SUIVANT
    // =====================================

    nextPlayer() {

        if (!this.currentRound) {

            return false;

        }


        // =====================================
        // CHERCHER QUI N'A PAS JOUÉ
        // =====================================

        const nextPlayer =
            this.players.find(
                player =>
                    player.alive &&
                    !this.currentRound
                        .hasPlayerPlayed(
                            player.id
                        )
            );


        // =====================================
        // TOUT LE MONDE A JOUÉ
        // =====================================

        if (!nextPlayer) {

            this.currentRound.complete();

            return false;

        }


        // =====================================
        // INDEX
        // =====================================

        this.currentPlayerIndex =
            this.players.findIndex(
                player =>
                    player.id ===
                    nextPlayer.id
            );


        // =====================================
        // ATTRIBUER QUESTION
        // =====================================

        const questionAvailable =
            this.assignSituationToCurrentPlayer();


        if (!questionAvailable) {

            this.currentRound.complete();

            return false;

        }


        return true;

    }


    // =====================================
    // JOUEURS N'AYANT PAS ENCORE JOUÉ
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
    // PREMIER JOUEUR VIVANT
    // =====================================

    getFirstAlivePlayerIndex() {

        return this.players.findIndex(
            player =>
                player.alive
        );

    }


    // =====================================
    // JOUEURS VIVANTS
    // =====================================

    getAlivePlayers() {

        return this.players.filter(
            player =>
                player.alive
        );

    }


    // =====================================
    // QUESTIONS ÉPUISÉES ?
    // =====================================

    areQuestionsExhausted() {

        if (
            this.gameMode ===
            "survival_party"
        ) {

            return false;

        }


        const alivePlayers =
            this.getAlivePlayers();


        const remainingQuestions =
            this.getRemainingSituationCount();


        return (
            remainingQuestions <
            alivePlayers.length
        );

    }


    // =====================================
    // FIN DE PARTIE
    // =====================================

    isGameOver() {

        const alivePlayers =
            this.getAlivePlayers();


        const remainingQuestions =
            this.getRemainingSituationCount();


        // =====================================
        // PLUS ASSEZ DE QUESTIONS
        // =====================================

        if (
            remainingQuestions <
            alivePlayers.length
        ) {

            return true;

        }


        // =====================================
        // MODE SOLO
        // =====================================

        if (
            this.players.length === 1
        ) {

            return (
                this.players[0].lives <= 0
            );

        }


        // =====================================
        // DERNIER SURVIVANT
        // =====================================

        if (
            alivePlayers.length <= 1
        ) {

            return true;

        }

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
                this.currentRound &&
                this.currentRound.isCompleted()
            );

        }


        return false;

    }


    // =====================================
    // RÉSULTATS DU TOUR
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

    applyPartyBonuses() {

        if (
            this.gameMode !==
                "survival_party" ||
            this.partyBonusesApplied
        ) {

            return this.endBonuses;

        }


        this.partyBonusesApplied =
            true;

        this.endBonuses =
            [];


        const bonusDefinitions = [

            {
                id:
                    "bonus_gain",

                icon:
                    "✨",

                name:
                    "Cœur du Chanceux",

                description:
                    "A gagné le plus de cœurs pendant la partie.",

                stat:
                    "livesGained"
            },


            {
                id:
                    "bonus_resilience",

                icon:
                    "🛡️",

                name:
                    "Cœur de la Résilience",

                description:
                    "A encaissé le plus de dégâts et a continué l'aventure.",

                stat:
                    "damageTaken"
            },


            {
                id:
                    "bonus_help",

                icon:
                    "🤝",

                name:
                    "Cœur de l'Entraide",

                description:
                    "A offert le plus de soins ou de cœurs aux autres.",

                stat:
                    "healingGiven"
            }

        ];


        bonusDefinitions.forEach(
            bonus => {

                const maximum =
                    Math.max(
                        ...this.players.map(
                            player =>
                                player.stats[
                                    bonus.stat
                                ] ?? 0
                        )
                    );


                // Pas de bonus complètement vide
                if (
                    maximum <= 0
                ) {

                    return;

                }


                const winners =
                    this.players.filter(
                        player =>
                            (
                                player.stats[
                                    bonus.stat
                                ] ?? 0
                            ) === maximum
                    );


                winners.forEach(
                    player => {

                        player.changeLives(
                            2
                        );

                    }
                );


                this.endBonuses.push({

                    ...bonus,

                    amount:
                        2,

                    value:
                        maximum,

                    playerIds:
                        winners.map(
                            player =>
                                player.id
                        ),

                    playerNames:
                        winners.map(
                            player =>
                                player.name
                        )

                });

            }
        );


        return this.endBonuses;

    }


    getEndBonuses() {

        return this.endBonuses;

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

        this.theme =
            "desert_island";


        this.availableSituations =
            [];

        this.usedSituationIds =
            [];

        this.questionsExhausted =
            false;

        this.started =
            false;

    }

}