import { Player } from "./player.js";
import { Round } from "./round.js";
import { applyConsequence } from "./effects.js";

import {
    getThemeData
} from "../data/themeData.js";


// =====================================================
// MODE TEST
// =====================================================

// null      = toutes les catégories
// "classic" = uniquement situations.js
// "judge"   = uniquement judgeSituations.js
// "secret"  = uniquement secretSituations.js
//
// Pendant le développement du nouveau système :
const TEST_POOL =
    null;


// =====================================================
// GAME
// =====================================================

export class Game {

    constructor() {

        // =================================================
        // JOUEURS
        // =================================================

        this.players =
            [];

        this.currentPlayerIndex =
            0;

        this.currentRound =
            null;

        this.roundNumber =
            0;


        // =================================================
        // CONFIGURATION
        // =================================================

        this.gameMode =
            "battle_royal";

        this.maxRounds =
            null;

        this.theme =
            "desert_island";


        // =================================================
        // QUESTIONS
        // =================================================

        this.availableSituations =
            [];

        this.usedSituationIds =
            [];


        // =================================================
        // HISTOIRE PERSONNELLE
        //
        // Exemple :
        //
        // {
        //     1: {
        //         flags: ["hut_entered"],
        //         boosts: {
        //             hut_inside: 25
        //         }
        //     }
        // }
        // =================================================

        this.playerNarratives =
            {};


        // =================================================
        // SECRET CHOICE
        // =================================================

        this.pendingSecretChoice =
            null;

    }


    // =====================================================
    // DÉMARRAGE
    // =====================================================

    start(
        playerNames,
        gameMode = "battle_royal",
        theme = "desert_island",
        maxRounds = null
    ) {

        this.gameMode =
            gameMode;

        this.theme =
            theme;


        this.maxRounds =
            gameMode === "survival_party"
                ? Number(maxRounds) || 5
                : null;


        const themeData =
            getThemeData(
                this.theme
            );


        if (!themeData) {

            console.error(
                "Thème introuvable :",
                this.theme
            );

            return false;

        }


        // =================================================
        // POOL DE TEST
        // =================================================

        if (
            TEST_POOL ===
            "classic"
        ) {

            this.availableSituations = [
                ...(themeData.situations ?? [])
            ];

        }

        else if (
            TEST_POOL ===
            "judge"
        ) {

            this.availableSituations = [
                ...(themeData.judgeSituations ?? [])
            ];

        }

        else if (
            TEST_POOL ===
            "secret"
        ) {

            this.availableSituations = [
                ...(themeData.secretSituations ?? [])
            ];

        }

        else {

            this.availableSituations = [

                ...(themeData.situations ?? []),

                ...(themeData.interactionSituations ?? []),

                ...(themeData.groupSituations ?? []),

                ...(themeData.secretSituations ?? []),

                ...(themeData.judgeSituations ?? [])

            ];

        }


        if (
            this.availableSituations.length ===
            0
        ) {

            console.error(
                "Aucune situation disponible."
            );

            return false;

        }


        // =================================================
        // JOUEURS
        // =================================================

        this.players =
            playerNames.map(
                (name, index) =>
                    new Player(
                        index + 1,
                        name
                    )
            );


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


        // =================================================
        // RESET
        // =================================================

        this.currentPlayerIndex =
            0;

        this.currentRound =
            null;

        this.roundNumber =
            0;

        this.usedSituationIds =
            [];

        this.pendingSecretChoice =
            null;

        this.playerNarratives =
            {};


        // =================================================
        // HISTOIRE DE CHAQUE JOUEUR
        // =================================================

        this.players.forEach(
            player => {

                this.playerNarratives[
                    player.id
                ] = {

                    flags:
                        [],

                    boosts:
                        {}

                };

            }
        );


        console.log(
            "Partie créée",
            {
                mode:
                    this.gameMode,

                theme:
                    this.theme,

                questions:
                    this.availableSituations.length,

                testPool:
                    TEST_POOL
            }
        );


        return this.startNewRound();

    }


    // =====================================================
    // TOUR
    // =====================================================

    startNewRound() {

        const alivePlayers =
            this.getAlivePlayers();


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
            alivePlayers.length ===
            0
        ) {

            return false;

        }


        if (
            this.gameMode !==
                "survival_party" &&

            this.getRemainingSituationCount() <
                alivePlayers.length
        ) {

            return false;

        }


        this.roundNumber++;


        this.currentRound =
            new Round(
                this.roundNumber
            );


        this.currentPlayerIndex =
            this.getFirstAlivePlayerIndex();


        if (
            this.currentPlayerIndex ===
            -1
        ) {

            return false;

        }


        return this.assignSituationToCurrentPlayer();

    }


    // =====================================================
    // QUESTIONS
    // =====================================================

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


    // =====================================================
    // HISTOIRE DU JOUEUR
    // =====================================================

    getPlayerNarrative(
        player
    ) {

        if (!player) {

            return {
                flags: [],
                boosts: {}
            };

        }


        if (
            !this.playerNarratives[
                player.id
            ]
        ) {

            this.playerNarratives[
                player.id
            ] = {
                flags: [],
                boosts: {}
            };

        }


        return this.playerNarratives[
            player.id
        ];

    }


    // =====================================================
    // CONDITIONS NARRATIVES
    // =====================================================

    meetsNarrativeRequirements(
        situation,
        player
    ) {

        const requirements =
            situation.requirements;


        if (!requirements) {

            return true;

        }


        const narrative =
            this.getPlayerNarrative(
                player
            );


        const flags =
            narrative.flags;


        // =================================================
        // ALL
        // Toutes les conditions sont obligatoires
        // =================================================

        if (
            Array.isArray(
                requirements.all
            )
        ) {

            const valid =
                requirements.all.every(
                    flag =>
                        flags.includes(
                            flag
                        )
                );


            if (!valid) {

                return false;

            }

        }


        // =================================================
        // ANY
        // Au moins une condition
        // =================================================

        if (
            Array.isArray(
                requirements.any
            ) &&
            requirements.any.length > 0
        ) {

            const valid =
                requirements.any.some(
                    flag =>
                        flags.includes(
                            flag
                        )
                );


            if (!valid) {

                return false;

            }

        }


        // =================================================
        // NOT
        // Ces flags rendent la situation impossible
        // =================================================

        if (
            Array.isArray(
                requirements.not
            )
        ) {

            const blocked =
                requirements.not.some(
                    flag =>
                        flags.includes(
                            flag
                        )
                );


            if (blocked) {

                return false;

            }

        }


        return true;

    }


    // =====================================================
    // COMPATIBILITÉ
    // =====================================================

    isSituationCompatible(
        situation,
        alivePlayers,
        unplayedPlayers,
        player = this.getCurrentPlayer()
    ) {

        if (
            !this.meetsNarrativeRequirements(
                situation,
                player
            )
        ) {

            return false;

        }


        if (
            situation.type ===
            "group_vs_one"
        ) {

            return (
                unplayedPlayers.length >=
                4
            );

        }


        if (
            situation.type ===
                "interaction" ||

            situation.type ===
                "secret_choice" ||

            situation.type ===
                "judge_choice"
        ) {

            return (
                alivePlayers.length >=
                2
            );

        }


        return true;

    }


    // =====================================================
    // TIRAGE PONDÉRÉ GÉNÉRIQUE
    // =====================================================

    getWeightedRandomItem(
        items,
        weightGetter
    ) {

        if (
            !Array.isArray(items) ||
            items.length === 0
        ) {

            return null;

        }


        const entries =
            items.map(
                item => {

                    let weight =
                        Number(
                            weightGetter(
                                item
                            )
                        );


                    if (
                        !Number.isFinite(
                            weight
                        ) ||
                        weight < 0
                    ) {

                        weight =
                            0;

                    }


                    return {
                        item,
                        weight
                    };

                }
            );


        const totalWeight =
            entries.reduce(
                (
                    total,
                    entry
                ) =>
                    total +
                    entry.weight,
                0
            );


        if (
            totalWeight <=
            0
        ) {

            return items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];

        }


        let random =
            Math.random() *
            totalWeight;


        for (
            const entry of
            entries
        ) {

            random -=
                entry.weight;


            if (
                random <= 0
            ) {

                return entry.item;

            }

        }


        return entries[
            entries.length - 1
        ].item;

    }


    // =====================================================
    // POIDS D'UNE SITUATION
    // =====================================================

    getSituationWeight(
        situation,
        player
    ) {

        const narrative =
            this.getPlayerNarrative(
                player
            );


        let weight =
            Number(
                situation.baseWeight ??
                1
            );


        if (
            !Number.isFinite(weight) ||
            weight <= 0
        ) {

            weight =
                1;

        }


        const narrativeBoost =
            Number(
                narrative.boosts[
                    situation.id
                ] ??
                0
            );


        if (
            Number.isFinite(
                narrativeBoost
            )
        ) {

            weight +=
                narrativeBoost;

        }


        return Math.max(
            weight,
            0.01
        );

    }


    // =====================================================
    // TIRAGE D'UNE SITUATION
    // =====================================================

    getRandomUnusedSituation(
        player = this.getCurrentPlayer()
    ) {

        if (!player) {

            return null;

        }


        const alivePlayers =
            this.getAlivePlayers();


        const unplayedPlayers =
            this.getUnplayedPlayers();


        let candidates =
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
                            unplayedPlayers,
                            player
                        )
                );


        // =================================================
        // SURVIVAL PARTY
        // =================================================

        if (
            candidates.length ===
                0 &&

            this.gameMode ===
                "survival_party"
        ) {

            this.usedSituationIds =
                [];


            candidates =
                this.availableSituations
                    .filter(
                        situation =>
                            this.isSituationCompatible(
                                situation,
                                alivePlayers,
                                unplayedPlayers,
                                player
                            )
                    );

        }


        if (
            candidates.length ===
            0
        ) {

            return null;

        }


        const situation =
            this.getWeightedRandomItem(
                candidates,
                candidate =>
                    this.getSituationWeight(
                        candidate,
                        player
                    )
            );


        if (!situation) {

            return null;

        }


        this.usedSituationIds.push(
            situation.id
        );


        console.log(
            "🎲 Situation",
            {
                player:
                    player.name,

                id:
                    situation.id,

                weight:
                    this.getSituationWeight(
                        situation,
                        player
                    ),

                narrative:
                    this.getPlayerNarrative(
                        player
                    )
            }
        );


        return situation;

    }


    // =====================================================
    // PROBABILITÉ DES CONSÉQUENCES
    // =====================================================

    getConsequenceWeight(
        consequence
    ) {

        if (
            typeof consequence.weight ===
            "number"
        ) {

            return Math.max(
                0,
                consequence.weight
            );

        }


        // =================================================
        // FALLBACK AUTOMATIQUE
        //
        // Si on adapte plus tard un ancien fichier
        // sans lui mettre de weight.
        //
        // Gain    = rare
        // Neutre  = moyen
        // Perte   = fréquente
        // =================================================

        const lives =
            Number(
                consequence.lives ??
                0
            );


        if (
            lives > 0
        ) {

            return 20;

        }


        if (
            lives === 0
        ) {

            return 35;

        }


        return 45;

    }


    getWeightedConsequence(
        consequences
    ) {

        return this.getWeightedRandomItem(
            consequences,
            consequence =>
                this.getConsequenceWeight(
                    consequence
                )
        );

    }


    // =====================================================
    // APPLIQUER UNE TRANSITION NARRATIVE
    // =====================================================

    applyNarrativeTransition(
        player,
        situation,
        choice,
        consequence
    ) {

        if (!player) {

            return;

        }


        const narrative =
            this.getPlayerNarrative(
                player
            );


        const sources = [

            situation?.narrative,

            choice?.narrative,

            consequence?.narrative

        ].filter(Boolean);


        // =================================================
        // FLAGS
        // =================================================

        sources.forEach(
            source => {

                // -----------------------------------------
                // AJOUT
                // -----------------------------------------

                if (
                    Array.isArray(
                        source.setFlags
                    )
                ) {

                    source.setFlags.forEach(
                        flag => {

                            if (
                                !narrative.flags
                                    .includes(
                                        flag
                                    )
                            ) {

                                narrative.flags.push(
                                    flag
                                );

                            }

                        }
                    );

                }


                // -----------------------------------------
                // SUPPRESSION
                // -----------------------------------------

                if (
                    Array.isArray(
                        source.removeFlags
                    )
                ) {

                    narrative.flags =
                        narrative.flags.filter(
                            flag =>
                                !source.removeFlags
                                    .includes(
                                        flag
                                    )
                        );

                }

            }
        );


        // =================================================
        // LES BOOSTS CONCERNENT LA PROCHAINE
        // ÉTAPE DE L'HISTOIRE.
        //
        // On repart donc d'une carte vide.
        // =================================================

        const newBoosts =
            {};


        sources.forEach(
            source => {

                if (
                    !Array.isArray(
                        source.nextSituationBoosts
                    )
                ) {

                    return;

                }


                source.nextSituationBoosts
                    .forEach(
                        boost => {

                            if (
                                !boost?.id
                            ) {

                                return;

                            }


                            const value =
                                Number(
                                    boost.weight ??
                                    0
                                );


                            if (
                                !Number.isFinite(
                                    value
                                )
                            ) {

                                return;

                            }


                            // IMPORTANT :
                            // La source suivante remplace
                            // la précédente.
                            //
                            // Situation
                            // ↓
                            // Choice
                            // ↓
                            // Consequence
                            //
                            // Donc une conséquence peut
                            // passer un boost de 25 à 3.
                            newBoosts[
                                boost.id
                            ] =
                                value;

                        }
                    );

            }
        );


        narrative.boosts =
            newBoosts;


        console.log(
            "🧭 Narration mise à jour",
            {
                player:
                    player.name,

                situation:
                    situation?.id,

                choice:
                    choice?.id,

                consequence:
                    consequence?.id,

                flags:
                    narrative.flags,

                boosts:
                    narrative.boosts
            }
        );

    }


    // =====================================================
    // ATTRIBUTION
    // =====================================================

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


        const existing =
            this.currentRound
                .getPlayerSituation(
                    player.id
                );


        if (existing) {

            return true;

        }


        const situation =
            this.getRandomUnusedSituation(
                player
            );


        if (!situation) {

            return false;

        }


        const assignedSituation = {
            ...situation
        };


        // =================================================
        // INTERACTION
        // =================================================

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


            assignedSituation
                .targetPlayerId =
                targetPlayer.id;

        }


        // =================================================
        // GROUPE VS 1
        // =================================================

        else if (
            situation.type ===
            "group_vs_one"
        ) {

            const unplayedPlayers =
                this.getUnplayedPlayers();


            if (
                unplayedPlayers.length <
                4
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
                possibleTargets.length ===
                0
            ) {

                return false;

            }


            const targetPlayer =
                possibleTargets[
                    Math.floor(
                        Math.random() *
                        possibleTargets.length
                    )
                ];


            const groupPlayers =
                unplayedPlayers.filter(
                    groupPlayer =>
                        groupPlayer.id !==
                        targetPlayer.id
                );


            assignedSituation
                .targetPlayerId =
                targetPlayer.id;


            assignedSituation
                .groupPlayerIds =
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


    // =====================================================
    // JOUEURS
    // =====================================================

    getCurrentPlayer() {

        return (
            this.players[
                this.currentPlayerIndex
            ] ?? null
        );

    }


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


    getRandomTargetPlayer(
        actorPlayer
    ) {

        const targets =
            this.players.filter(
                player =>
                    player.alive &&
                    player.id !==
                    actorPlayer.id
            );


        if (
            targets.length ===
            0
        ) {

            return null;

        }


        return targets[
            Math.floor(
                Math.random() *
                targets.length
            )
        ];

    }


    getSituationGroupPlayers(
        situation
    ) {

        if (
            !Array.isArray(
                situation
                    ?.groupPlayerIds
            )
        ) {

            return [];

        }


        return situation.groupPlayerIds
            .map(
                id =>
                    this.players.find(
                        player =>
                            player.id ===
                            id
                    )
            )
            .filter(Boolean);

    }


    getOtherAlivePlayers(
        player
    ) {

        return this.players.filter(
            otherPlayer =>
                otherPlayer.alive &&
                otherPlayer.id !==
                player.id
        );

    }


    // =====================================================
    // TEXTES
    // =====================================================

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
                    ?.name ??
                    "Le joueur"
            );


        result =
            result.replaceAll(
                "{target}",
                targetPlayer
                    ?.name ??
                    "l'autre joueur"
            );


        result =
            result.replaceAll(
                "{group}",
                groupPlayers.length
                    ? this.formatPlayerGroup(
                        groupPlayers
                    )
                    : "Les autres joueurs"
            );


        return result;

    }


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

            return `${names[0]} et ${names[1]}`;

        }


        return (
            names
                .slice(0, -1)
                .join(", ")
            +
            " et "
            +
            names[
                names.length - 1
            ]
        );

    }


    // =====================================================
    // CHOIX
    // =====================================================

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

            return null;

        }


        // =================================================
        // TARGET
        // =================================================

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
                    player =>
                        player.id ===
                        situation.targetPlayerId
                ) ?? null;

        }


        // =================================================
        // GROUP
        // =================================================

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

        else if (
            situation.type ===
            "judge_choice"
        ) {

            groupPlayers =
                this.getOtherAlivePlayers(
                    player
                );

        }


        const choice =
            situation.choices
                ?.find(
                    choice =>
                        choice.id ===
                        choiceId
                );


        if (!choice) {

            return null;

        }


        // =================================================
        // SECRET
        // =================================================

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


        if (
            !Array.isArray(
                choice.consequences
            ) ||
            choice.consequences.length ===
                0
        ) {

            return null;

        }


        // =================================================
        // CONSÉQUENCE PONDÉRÉE
        // =================================================

        const consequence =
            this.getWeightedConsequence(
                choice.consequences
            );


        if (!consequence) {

            return null;

        }


        // =================================================
        // JUDGE = TOUS SAUF X
        // =================================================

        const effectTargetPlayer =
            situation.type ===
                "judge_choice"
                ? player
                : targetPlayer;


        const effects =
            applyConsequence(
                player,
                effectTargetPlayer,
                consequence,
                this.players
            );


        // =================================================
        // QUI A JOUÉ ?
        // =================================================

        let playedPlayerIds;
        let playedPlayerNames;


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


        this.updateChoiceStats(
            playedPlayerIds
        );


        this.updateEffectStats(
            effects
        );


        // =================================================
        // NARRATION
        //
        // IMPORTANT :
        // choix + conséquence
        // modifient les suites possibles.
        // =================================================

        this.applyNarrativeTransition(
            player,
            situation,
            choice,
            consequence
        );


        const result = {

            playerId:
                player.id,

            playerName:
                player.name,

            playedPlayerIds,

            playedPlayerNames,

            targetPlayerId:
                targetPlayer?.id ??
                null,

            targetPlayerName:
                targetPlayer?.name ??
                null,

            groupPlayerIds:
                groupPlayers.map(
                    player =>
                        player.id
                ),

            groupPlayerNames:
                groupPlayers.map(
                    player =>
                        player.name
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
                this.renderPlayerText(
                    situation.title,
                    player,
                    targetPlayer,
                    groupPlayers
                ),

            situationDescription:
                this.renderPlayerText(
                    situation.description,
                    player,
                    targetPlayer,
                    groupPlayers
                ),

            situationIcon:
                situation.icon,

            situationCategory:
                situation.category,

            choiceId:
                choice.id,

            choiceTitle:
                this.renderPlayerText(
                    choice.title,
                    player,
                    targetPlayer,
                    groupPlayers
                ),

            choiceDescription:
                this.renderPlayerText(
                    choice.description,
                    player,
                    targetPlayer,
                    groupPlayers
                ),

            consequenceId:
                consequence.id,

            consequenceText:
                this.renderPlayerText(
                    consequence.text,
                    player,
                    targetPlayer,
                    groupPlayers
                ),

            consequenceIcon:
                consequence.icon,

            consequenceWeight:
                this.getConsequenceWeight(
                    consequence
                ),

            effects,

            remainingLives:
                player.lives,

            alive:
                player.alive

        };


        this.currentRound
            .addResult(
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


    // =====================================================
    // SECRET CHOICE
    // =====================================================

    startSecretChoice(
        player,
        situation,
        choice
    ) {

        if (
            !choice.secretValue
        ) {

            return null;

        }


        const otherPlayers =
            this.getOtherAlivePlayers(
                player
            );


        if (
            otherPlayers.length ===
            0
        ) {

            return null;

        }


        this.pendingSecretChoice = {

            playerId:
                player.id,

            choiceId:
                choice.id,

            secretValue:
                choice.secretValue,

            otherPlayerIds:
                otherPlayers.map(
                    player =>
                        player.id
                )

        };


        return {

            phase:
                "secret_waiting",

            player,

            situation,

            choice,

            otherPlayers

        };

    }


    resolveSecretGuess(
        guessId
    ) {

        const pending =
            this.pendingSecretChoice;


        if (!pending) {

            return null;

        }


        const player =
            this.players.find(
                player =>
                    player.id ===
                    pending.playerId
            );


        if (!player) {

            return null;

        }


        const situation =
            this.currentRound
                ?.getPlayerSituation(
                    player.id
                );


        if (
            !situation ||
            situation.type !==
                "secret_choice"
        ) {

            return null;

        }


        const secretChoice =
            situation.choices
                ?.find(
                    choice =>
                        choice.id ===
                        pending.choiceId
                );


        const guess =
            situation.guess
                ?.choices
                ?.find(
                    guess =>
                        guess.id ===
                        guessId
                );


        if (
            !secretChoice ||
            !guess
        ) {

            return null;

        }


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

            return null;

        }


        // =================================================
        // VARIANTE PONDÉRÉE
        // =================================================

        let resolvedOutcome =
            outcome;


        if (
            Array.isArray(
                outcome.variants
            ) &&
            outcome.variants.length > 0
        ) {

            const variant =
                this.getWeightedRandomItem(
                    outcome.variants,
                    item =>
                        Number(
                            item.weight ??
                            1
                        )
                );


            if (variant) {

                resolvedOutcome = {

                    ...outcome,
                    ...variant,

                    title:
                        variant.title ??
                        outcome.title,

                    icon:
                        variant.icon ??
                        outcome.icon

                };

            }

        }


        const otherPlayers =
            pending.otherPlayerIds
                .map(
                    id =>
                        this.players.find(
                            player =>
                                player.id ===
                                id
                        )
                )
                .filter(Boolean);


        // =================================================
        // EFFETS
        // =================================================

        const effects =
            applyConsequence(
                player,
                player,
                resolvedOutcome,
                this.players
            );


        this.updateChoiceStats(
            [player.id]
        );


        this.updateEffectStats(
            effects
        );


        // =================================================
        // NARRATION
        // =================================================

        this.applyNarrativeTransition(
            player,
            situation,
            secretChoice,
            resolvedOutcome
        );


        // =================================================
        // RÉSULTAT
        // =================================================

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
                    player =>
                        player.id
                ),

            groupPlayerNames:
                otherPlayers.map(
                    player =>
                        player.name
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
                resolvedOutcome.id ??
                outcomeKey,

            consequenceText:
                this.renderPlayerText(
                    resolvedOutcome.text,
                    player,
                    null,
                    otherPlayers
                ),

            consequenceIcon:
                resolvedOutcome.icon,

            consequenceWeight:
                resolvedOutcome.weight ??
                null,

            effects,

            remainingLives:
                player.lives,

            alive:
                player.alive

        };


        this.currentRound
            .addResult(
                result
            );


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
                resolvedOutcome,

            effects,

            result

        };

    }

    // =====================================================
    // STATS
    // =====================================================

    updateChoiceStats(
        playerIds
    ) {

        playerIds.forEach(
            playerId => {

                const player =
                    this.players.find(
                        player =>
                            player.id ===
                            playerId
                    );


                if (
                    player?.stats &&
                    typeof player.stats
                        .choicesMade ===
                        "number"
                ) {

                    player.stats
                        .choicesMade++;

                }

            }
        );

    }


    updateEffectStats(
        effects
    ) {

        if (
            !Array.isArray(
                effects
            )
        ) {

            return;

        }


        effects.forEach(
            effect => {

                const player =
                    this.players.find(
                        player =>
                            player.id ===
                            effect.playerId
                    );


                if (!player?.stats) {

                    return;

                }


                if (
                    effect.difference > 0
                ) {

                    player.stats
                        .livesGained +=
                        effect.difference;

                }


                if (
                    effect.difference < 0
                ) {

                    player.stats
                        .damageTaken +=
                        Math.abs(
                            effect.difference
                        );

                }

            }
        );

    }


    // =====================================================
    // JOUEUR SUIVANT
    // =====================================================

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


        if (
            !this.assignSituationToCurrentPlayer()
        ) {

            this.currentRound.complete();

            return false;

        }


        return true;

    }


    // =====================================================
    // UTILITAIRES
    // =====================================================

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


    getFirstAlivePlayerIndex() {

        return this.players.findIndex(
            player =>
                player.alive
        );

    }


    getAlivePlayers() {

        return this.players.filter(
            player =>
                player.alive
        );

    }


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


    isGameOver() {

        const alivePlayers =
            this.getAlivePlayers();


        if (
            this.gameMode ===
            "survival_party"
        ) {

            return (
                this.maxRounds !== null &&
                this.roundNumber >=
                    this.maxRounds &&
                this.currentRound
                    ?.isCompleted()
            );

        }


        if (
            this.getRemainingSituationCount() <
            alivePlayers.length
        ) {

            return true;

        }


        if (
            this.players.length ===
            1
        ) {

            return (
                this.players[0].lives <=
                0
            );

        }


        return (
            alivePlayers.length <=
            1
        );

    }


    getRoundResults() {

        return (
            this.currentRound
                ?.getResults() ??
            []
        );

    }


    getRanking() {

        return [
            ...this.players
        ].sort(
            (a, b) =>
                b.lives -
                a.lives
        );

    }


    // =====================================================
    // RESET
    // =====================================================

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

        this.playerNarratives =
            {};

        this.pendingSecretChoice =
            null;

    }

}