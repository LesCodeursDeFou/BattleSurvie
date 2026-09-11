import {
    Player
} from "./player.js";

import {
    Round
} from "./round.js";

import {
    applyConsequence
} from "./effects.js";

import {
    StatusManager
} from "./statusManager.js";

import {
    RelationshipManager
} from "./relationshipManager.js";

import {
    ConditionManager
} from "./conditionManager.js";

import {
    getThemeData
} from "../data/themeData.js";


// =====================================================
// MODE TEST
// =====================================================
//
// null      = toutes les catégories
// "classic" = uniquement situations.js
// "judge"   = uniquement judgeSituations.js
// "secret"  = uniquement secretSituations.js
// "interaction" = uniquement interactions
// "group"       = uniquement group_vs_one
//
// =====================================================

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
        // {
        //     1: {
        //         flags: [],
        //         boosts: {}
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


        // =================================================
        // ÉTATS / RELATIONS
        // =================================================

        this.notifications =
            [];


        this.lastResolvedPlayerIds =
            [];


        this.statusManager =
            new StatusManager(
                this
            );


        this.relationshipManager =
            new RelationshipManager(
                this
            );


        this.conditionManager =
            new ConditionManager(
                this
            );

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
            gameMode ===
                "survival_party"
                ? Number(
                    maxRounds
                ) || 5
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
        // POOL DE QUESTIONS
        // =================================================

        if (
            TEST_POOL ===
            "classic"
        ) {

            this.availableSituations = [

                ...(
                    themeData.situations ??
                    []
                )

            ];

        }

        else if (
            TEST_POOL ===
            "interaction"
        ) {

            this.availableSituations = [

                ...(
                    themeData
                        .interactionSituations ??
                    []
                )

            ];

        }

        else if (
            TEST_POOL ===
            "group"
        ) {

            this.availableSituations = [

                ...(
                    themeData
                        .groupSituations ??
                    []
                )

            ];

        }

        else if (
            TEST_POOL ===
            "judge"
        ) {

            this.availableSituations = [

                ...(
                    themeData
                        .judgeSituations ??
                    []
                )

            ];

        }

        else if (
            TEST_POOL ===
            "secret"
        ) {

            this.availableSituations = [

                ...(
                    themeData
                        .secretSituations ??
                    []
                )

            ];

        }

        else {

            this.availableSituations = [

                ...(
                    themeData
                        .situations ??
                    []
                ),

                ...(
                    themeData
                        .interactionSituations ??
                    []
                ),

                ...(
                    themeData
                        .groupSituations ??
                    []
                ),

                ...(
                    themeData
                        .secretSituations ??
                    []
                ),

                ...(
                    themeData
                        .judgeSituations ??
                    []
                )

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
                (
                    name,
                    index
                ) =>
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

                    player
                        .setEliminationEnabled(
                            eliminationEnabled
                        );

                }

            }
        );


        // =================================================
        // RESET PARTIE
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

        this.notifications =
            [];

        this.lastResolvedPlayerIds =
            [];


        this.relationshipManager
            .reset();


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
            "🎮 Partie créée",
            {

                mode:
                    this.gameMode,

                theme:
                    this.theme,

                questions:
                    this.availableSituations
                        .length,

                testPool:
                    TEST_POOL

            }
        );


        return this.startNewRound();

    }


    // =====================================================
    // NOUVEAU TOUR
    // =====================================================

    startNewRound() {

        const alivePlayers =
            this.getAlivePlayers();


        // =================================================
        // SURVIVAL PARTY :
        // LIMITE DE TOURS
        // =================================================

        if (
            this.gameMode ===
                "survival_party" &&

            this.maxRounds !==
                null &&

            this.roundNumber >=
                this.maxRounds
        ) {

            return false;

        }


        // =================================================
        // PLUS AUCUN JOUEUR
        // =================================================

        if (
            alivePlayers.length ===
            0
        ) {

            return false;

        }


        // =================================================
        // BATTLE ROYAL :
        // ASSEZ DE QUESTIONS POUR UN TOUR COMPLET
        // =================================================

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
    // QUESTIONS RESTANTES
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

        return this.usedSituationIds
            .length;

    }


    // =====================================================
    // HISTOIRE DU JOUEUR
    // =====================================================

    getPlayerNarrative(
        player
    ) {

        if (!player) {

            return {

                flags:
                    [],

                boosts:
                    {}

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

                flags:
                    [],

                boosts:
                    {}

            };

        }


        return this.playerNarratives[
            player.id
        ];

    }


    // =====================================================
    // CONDITIONS NARRATIVES DES SITUATIONS
    //
    // requirements: {
    //     all: [],
    //     any: [],
    //     not: []
    // }
    // =====================================================

    meetsNarrativeRequirements(
        situation,
        player
    ) {

        const requirements =
            situation
                ?.requirements;


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
        // =================================================

        if (
            Array.isArray(
                requirements.all
            )
        ) {

            const valid =
                requirements.all
                    .every(
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
        // =================================================

        if (
            Array.isArray(
                requirements.any
            ) &&
            requirements.any.length >
                0
        ) {

            const valid =
                requirements.any
                    .some(
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
        // =================================================

        if (
            Array.isArray(
                requirements.not
            )
        ) {

            const blocked =
                requirements.not
                    .some(
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
    // COMPATIBILITÉ D'UNE SITUATION
    // =====================================================

    isSituationCompatible(
        situation,
        alivePlayers,
        unplayedPlayers,
        player =
            this.getCurrentPlayer()
    ) {

        if (
            !this.meetsNarrativeRequirements(
                situation,
                player
            )
        ) {

            return false;

        }


        // =================================================
        // GROUP VS ONE
        //
        // Minimum 4 joueurs encore disponibles
        // dans le tour.
        // =================================================

        if (
            situation.type ===
            "group_vs_one"
        ) {

            return (
                unplayedPlayers.length >=
                4
            );

        }


        // =================================================
        // TYPES MULTIJOUEURS
        // =================================================

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
        weightGetter =
            item =>
                item?.weight ??
                1
    ) {

        if (
            !Array.isArray(
                items
            ) ||
            items.length ===
                0
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


        // =================================================
        // TOUS LES POIDS À 0
        // =================================================

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
                random <=
                0
            ) {

                return entry.item;

            }

        }


        return entries[
            entries.length -
            1
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
            !Number.isFinite(
                weight
            ) ||
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
        player =
            this.getCurrentPlayer()
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
        //
        // Les questions peuvent être remises
        // dans le pool si toutes ont été utilisées.
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
            "🎲 Situation tirée",
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
            typeof consequence
                ?.weight ===
            "number"
        ) {

            return Math.max(
                0,
                consequence.weight
            );

        }


        // =================================================
        // ANCIEN FORMAT
        //
        // Gain    = rare
        // Neutre  = moyen
        // Perte   = fréquente
        // =================================================

        const lives =
            Number(
                consequence?.lives ??
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
    // TRANSITION NARRATIVE
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

                // =========================================
                // AJOUT
                // =========================================

                if (
                    Array.isArray(
                        source.setFlags
                    )
                ) {

                    source.setFlags
                        .forEach(
                            flag => {

                                if (
                                    !narrative.flags
                                        .includes(
                                            flag
                                        )
                                ) {

                                    narrative
                                        .flags
                                        .push(
                                            flag
                                        );

                                }

                            }
                        );

                }


                // =========================================
                // SUPPRESSION
                // =========================================

                if (
                    Array.isArray(
                        source.removeFlags
                    )
                ) {

                    narrative.flags =
                        narrative.flags
                            .filter(
                                flag =>
                                    !source
                                        .removeFlags
                                        .includes(
                                            flag
                                        )
                            );

                }

            }
        );


        // =================================================
        // BOOSTS POUR LA PROCHAINE SITUATION
        //
        // Conséquence > choix > situation
        // grâce à l'ordre des sources.
        // =================================================

        const newBoosts =
            {};


        sources.forEach(
            source => {

                if (
                    !Array.isArray(
                        source
                            .nextSituationBoosts
                    )
                ) {

                    return;

                }


                source
                    .nextSituationBoosts
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
    // ATTRIBUTION D'UNE SITUATION
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
        // GROUP VS ONE
        //
        // Tous les joueurs encore disponibles
        // sauf la cible = groupe.
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
                unplayedPlayers
                    .filter(
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
                unplayedPlayers
                    .filter(
                        groupPlayer =>
                            groupPlayer.id !==
                            targetPlayer.id
                    );


            assignedSituation
                .targetPlayerId =
                targetPlayer.id;


            assignedSituation
                .groupPlayerIds =
                groupPlayers
                    .map(
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
    // JOUEUR ACTUEL
    // =====================================================

    getCurrentPlayer() {

        return (
            this.players[
                this.currentPlayerIndex
            ] ??
            null
        );

    }


    // =====================================================
    // SITUATION ACTUELLE
    // =====================================================

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


    // =====================================================
    // CIBLE D'UNE SITUATION
    // =====================================================

    getSituationTargetPlayer(
        situation =
            this.getCurrentSituation()
    ) {

        if (
            !situation
                ?.targetPlayerId
        ) {

            return null;

        }


        return (
            this.players.find(
                player =>
                    player.id ===
                    situation
                        .targetPlayerId
            ) ??
            null
        );

    }


    // =====================================================
    // CIBLE ALÉATOIRE
    // =====================================================

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


    // =====================================================
    // GROUPE D'UNE SITUATION
    // =====================================================

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


        return situation
            .groupPlayerIds
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
    // QUI PREND LA DÉCISION ?
    //
    // Normal :
    // le joueur joue lui-même.
    //
    // Possédé :
    // un autre joueur prend sa décision.
    // =====================================================

    getDecisionPlayer(
        player
    ) {

        if (
            !player ||
            typeof player.hasStatus !==
                "function" ||
            !player.hasStatus(
                "possessed"
            )
        ) {

            return player;

        }


        const candidates =
            this.players.filter(
                candidate =>
                    candidate.alive &&
                    candidate.id !==
                    player.id
            );


        if (
            candidates.length ===
            0
        ) {

            return player;

        }


        const status =
            player.getStatus(
                "possessed"
            );


        let controller =
            candidates.find(
                candidate =>
                    candidate.id ===
                    status
                        ?.metadata
                        ?.controllerPlayerId
            );


        if (!controller) {

            controller =
                candidates[
                    Math.floor(
                        Math.random() *
                        candidates.length
                    )
                ];


            status.metadata = {

                ...(
                    status.metadata ??
                    {}
                ),

                controllerPlayerId:
                    controller.id

            };

        }


        return controller;

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
            names.length ===
            0
        ) {

            return "Les autres joueurs";

        }


        if (
            names.length ===
            1
        ) {

            return names[0];

        }


        if (
            names.length ===
            2
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
                .join(
                    ", "
                )
            +
            " et "
            +
            names[
                names.length -
                1
            ]
        );

    }


    // =====================================================
    // CHOIX CONDITIONNELS
    //
    // choice.condition peut tester :
    // - status
    // - gauge
    // - relation
    // - vies
    // =====================================================

    getAvailableChoices(
        situation,
        actorPlayer,
        targetPlayer = null
    ) {

        if (
            !Array.isArray(
                situation
                    ?.choices
            )
        ) {

            return [];

        }


        return situation
            .choices
            .filter(
                choice =>
                    this.conditionManager
                        .evaluate(
                            choice.condition,
                            {

                                actor:
                                    actorPlayer,

                                target:
                                    targetPlayer,

                                situation

                            }
                        )
            );

    }


    // =====================================================
    // FAIRE UN CHOIX
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

            console.error(
                "makeChoice : joueur ou situation invalide."
            );

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
                this.getSituationTargetPlayer(
                    situation
                );

        }


        // =================================================
        // GROUPE
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


        // =================================================
        // SEULEMENT LES CHOIX AUTORISÉS
        // =================================================

        const availableChoices =
            this.getAvailableChoices(
                situation,
                player,
                targetPlayer
            );


        const choice =
            availableChoices
                .find(
                    item =>
                        item.id ===
                        choiceId
                );


        if (!choice) {

            console.warn(
                "Choix introuvable ou verrouillé :",
                choiceId
            );

            return null;

        }


        // =================================================
        // SECRET CHOICE
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
            choice.consequences
                .length ===
                0
        ) {

            console.error(
                "Aucune conséquence pour :",
                choice.id
            );

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
        // JUDGE
        //
        // Pour "others", effects.js exclut
        // targetPlayer.
        //
        // On passe donc l'acteur comme target
        // afin que "others" = tout le monde sauf X.
        // =================================================

        const effectTargetPlayer =
            situation.type ===
                "judge_choice"
                ? player
                : targetPlayer;


        // =================================================
        // EFFETS
        // =================================================

        const effects =
            applyConsequence(
                player,
                effectTargetPlayer,
                consequence,
                this.players,
                {

                    statusManager:
                        this.statusManager,

                    relationshipManager:
                        this
                            .relationshipManager

                }
            );


        // =================================================
        // QUI CONSOMME SON TOUR ?
        // =================================================

        let playedPlayerIds;
        let playedPlayerNames;


        if (
            situation.type ===
            "group_vs_one"
        ) {

            playedPlayerIds =
                groupPlayers
                    .map(
                        item =>
                            item.id
                    );


            playedPlayerNames =
                groupPlayers
                    .map(
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


        // =================================================
        // STATS
        // =================================================

        this.updateChoiceStats(
            playedPlayerIds
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
            choice,
            consequence
        );


        // =================================================
        // NOTIFICATIONS PRODUITES PAR :
        //
        // - nouvel état
        // - jauge
        // - relation
        // - protection
        // etc.
        // =================================================

        const stateEvents =
            this.consumeNotifications();


        // =================================================
        // RÉSULTAT
        // =================================================

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
                groupPlayers
                    .map(
                        groupPlayer =>
                            groupPlayer.id
                    ),

            groupPlayerNames:
                groupPlayers
                    .map(
                        groupPlayer =>
                            groupPlayer.name
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

            stateEvents,


            remainingLives:
                player.lives,

            alive:
                player.alive

        };


        this.currentRound
            .addResult(
                result
            );


        // =================================================
        // MARQUER LES JOUEURS COMME AYANT JOUÉ
        // =================================================

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


        // =================================================
        // JOUEURS POUR LES EFFETS DE FIN DE TOUR
        // =================================================

        this.lastResolvedPlayerIds = [

            ...playedPlayerIds

        ];


        return {

            player,

            targetPlayer,

            groupPlayers,

            situation,

            choice,

            consequence,

            effects,

            stateEvents,

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
                otherPlayers
                    .map(
                        otherPlayer =>
                            otherPlayer.id
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


    // =====================================================
    // RÉSOLUTION SECRET CHOICE
    // =====================================================

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
                item =>
                    item.id ===
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
                    guessChoice =>
                        guessChoice.id ===
                        guessId
                );


        if (
            !secretChoice ||
            !guess
        ) {

            return null;

        }


        // =================================================
        // BONNE / MAUVAISE DEVINETTE
        // =================================================

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
                "Outcome secret introuvable :",
                outcomeKey
            );

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
            outcome.variants.length >
                0
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
                            candidate =>
                                candidate.id ===
                                id
                        )
                )
                .filter(Boolean);


        // =================================================
        // EFFETS
        //
        // targetPlayer = actor
        // permet à "others" de signifier
        // tous sauf le joueur secret.
        // =================================================

        const effects =
            applyConsequence(
                player,
                player,
                resolvedOutcome,
                this.players,
                {

                    statusManager:
                        this.statusManager,

                    relationshipManager:
                        this
                            .relationshipManager

                }
            );


        // =================================================
        // STATS
        // =================================================

        this.updateChoiceStats(
            [
                player.id
            ]
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
        // NOTIFICATIONS
        // =================================================

        const stateEvents =
            this.consumeNotifications();


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
                otherPlayers
                    .map(
                        item =>
                            item.id
                    ),

            groupPlayerNames:
                otherPlayers
                    .map(
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

            stateEvents,


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


        // =================================================
        // FIN SECRET
        // =================================================

        this.pendingSecretChoice =
            null;


        this.lastResolvedPlayerIds = [
            player.id
        ];


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

            stateEvents,

            result

        };

    }


    // =====================================================
    // NOTIFICATIONS DE GAMEPLAY
    // =====================================================

    pushNotification(
        notification
    ) {

        if (!notification) {

            return;

        }


        this.notifications.push(
            notification
        );

    }


    consumeNotifications() {

        const notifications = [

            ...this.notifications

        ];


        this.notifications =
            [];


        return notifications;

    }


    // =====================================================
    // EFFETS APRÈS LE TOUR D'UN JOUEUR
    //
    // Poison
    // Malédiction
    // Durée des états
    // Relations temporaires
    // etc.
    // =====================================================

    processAfterCurrentTurn() {

        if (
            !Array.isArray(
                this.lastResolvedPlayerIds
            ) ||
            this.lastResolvedPlayerIds
                .length ===
                0
        ) {

            return [];

        }


        // Éviter deux traitements du même joueur.
        const uniquePlayerIds = [

            ...new Set(
                this.lastResolvedPlayerIds
            )

        ];


        uniquePlayerIds.forEach(
            playerId => {

                const player =
                    this.players.find(
                        item =>
                            item.id ===
                            playerId
                    );


                if (!player) {

                    return;

                }


                this.statusManager
                    .processEndTurn(
                        player
                    );


                this.relationshipManager
                    .processPlayerTurn(
                        player
                    );

            }
        );


        this.lastResolvedPlayerIds =
            [];


        return this.consumeNotifications();

    }


    // =====================================================
    // STATS
    // =====================================================

    updateChoiceStats(
        playerIds
    ) {

        if (
            !Array.isArray(
                playerIds
            )
        ) {

            return;

        }


        playerIds.forEach(
            playerId => {

                const player =
                    this.players.find(
                        item =>
                            item.id ===
                            playerId
                    );


                if (
                    player?.stats &&
                    typeof player
                        .stats
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

                // Un effet d'état ou de relation
                // peut ne pas avoir difference.

                if (
                    typeof effect
                        ?.difference !==
                    "number"
                ) {

                    return;

                }


                const player =
                    this.players.find(
                        item =>
                            item.id ===
                            effect.playerId
                    );


                if (!player?.stats) {

                    return;

                }


                if (
                    effect.difference >
                    0
                ) {

                    player.stats
                        .livesGained +=
                        effect.difference;

                }


                if (
                    effect.difference <
                    0
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

            this.currentRound
                .complete();


            return false;

        }


        this.currentPlayerIndex =
            this.players
                .findIndex(
                    player =>
                        player.id ===
                        nextPlayer.id
                );


        if (
            !this.assignSituationToCurrentPlayer()
        ) {

            this.currentRound
                .complete();


            return false;

        }


        return true;

    }


    // =====================================================
    // JOUEURS NON JOUÉS
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


    // =====================================================
    // PREMIER JOUEUR VIVANT
    // =====================================================

    getFirstAlivePlayerIndex() {

        return this.players
            .findIndex(
                player =>
                    player.alive
            );

    }


    // =====================================================
    // JOUEURS VIVANTS
    // =====================================================

    getAlivePlayers() {

        return this.players
            .filter(
                player =>
                    player.alive
            );

    }


    // =====================================================
    // QUESTIONS ÉPUISÉES
    // =====================================================

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


    // =====================================================
    // FIN DE PARTIE
    // =====================================================

    isGameOver() {

        const alivePlayers =
            this.getAlivePlayers();


        // =================================================
        // SURVIVAL PARTY
        // =================================================

        if (
            this.gameMode ===
            "survival_party"
        ) {

            return (

                this.maxRounds !==
                    null &&

                this.roundNumber >=
                    this.maxRounds &&

                this.currentRound
                    ?.isCompleted()

            );

        }


        // =================================================
        // QUESTIONS INSUFFISANTES
        // =================================================

        if (
            this.getRemainingSituationCount() <
            alivePlayers.length
        ) {

            return true;

        }


        // =================================================
        // SOLO
        // =================================================

        if (
            this.players.length ===
            1
        ) {

            return (
                this.players[0]
                    .lives <=
                0
            );

        }


        // =================================================
        // MULTI
        // =================================================

        return (
            alivePlayers.length <=
            1
        );

    }


    // =====================================================
    // RÉSULTATS DU TOUR
    // =====================================================

    getRoundResults() {

        return (
            this.currentRound
                ?.getResults() ??
            []
        );

    }


    // =====================================================
    // CLASSEMENT
    // =====================================================

    getRanking() {

        return [

            ...this.players

        ].sort(
            (
                a,
                b
            ) =>
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


        this.notifications =
            [];

        this.lastResolvedPlayerIds =
            [];


        this.relationshipManager
            .reset();

    }

}