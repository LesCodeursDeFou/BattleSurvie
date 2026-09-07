import { Player } from "./player.js";
import { Round } from "./round.js";
import { applyConsequence } from "./effects.js";

import { SITUATIONS } from "../data/situations.js";
import { INTERACTION_SITUATIONS } from "../data/interactionSituations.js";
import { GROUP_SITUATIONS } from "../data/groupSituations.js";

const AVAILABLE_SITUATIONS = [

    /*
    =====================================================
    TEST INTERACTIONS

    Les situations classiques sont
    temporairement désactivées.
    =====================================================
    */

    ...SITUATIONS,
    ...INTERACTION_SITUATIONS,
    ...GROUP_SITUATIONS

];

export class Game {

    constructor() {

        this.players = [];

        this.currentPlayerIndex = 0;

        this.currentRound = null;

        this.roundNumber = 0;


        /*
        Toutes les situations déjà utilisées
        pendant toute la partie.
        */

        this.usedSituationIds = [];


        /*
        Devient true lorsque toutes
        les situations ont été utilisées.
        */

        this.questionsExhausted = false;


        this.started = false;

    }


    // =====================================
    // DÉMARRAGE DE LA PARTIE
    // =====================================

    start(playerNames) {

        this.players =
            playerNames.map(
                (name, index) => {

                    return new Player(
                        index + 1,
                        name
                    );

                }
            );


        this.currentPlayerIndex = 0;

        this.currentRound = null;

        this.roundNumber = 0;

        this.usedSituationIds = [];

        this.questionsExhausted = false;

        this.started = true;


        this.startNewRound();

    }


    // =====================================
    // NOUVEAU TOUR
    // =====================================

    startNewRound() {

        const alivePlayers =
            this.getAlivePlayers();
    
    
        const remainingQuestions =
            this.getRemainingSituationCount();
    
    
        /*
        =====================================
        PAS ASSEZ DE QUESTIONS
        POUR FAIRE UN TOUR COMPLET
        =====================================
        */
    
        if (
            remainingQuestions <
            alivePlayers.length
        ) {
    
            this.questionsExhausted = true;
    
            return false;
    
        }
    
    
        /*
        =====================================
        NOUVEAU TOUR
        =====================================
        */
    
        this.roundNumber++;
    
    
        this.currentRound =
            new Round(
                this.roundNumber
            );
    
    
        this.currentPlayerIndex =
            this.getFirstAlivePlayerIndex();
    
    
        /*
        Attribution de la première
        question du tour.
        */
    
        return this.assignSituationToCurrentPlayer();
    
    }


    // =====================================
    // NOMBRE DE QUESTIONS RESTANTES
    // =====================================

    getRemainingSituationCount() {

        return AVAILABLE_SITUATIONS.filter(
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
    
    
        let availableSituations =
            AVAILABLE_SITUATIONS.filter(
                situation =>
                    !this.usedSituationIds.includes(
                        situation.id
                    )
            );
    
    
        availableSituations =
            availableSituations.filter(
                situation => {
    
    
                    // =============================
                    // 1 VS TOUS LES AUTRES
                    // =============================
    
                    if (
                        situation.type ===
                        "group_vs_one"
                    ) {
    
                        /*
                        Il faut au minimum :
    
                        1 cible
                        +
                        3 joueurs dans le groupe
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
    
    
                    return true;
    
                }
            );
    
    
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
            !player.alive
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
    
    
        // IMPORTANT :
        // on crée une copie indépendante
    
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
    
            /*
            Tous ceux qui n'ont pas encore
            joué participent potentiellement.
            */
    
            const unplayedPlayers =
                this.getUnplayedPlayers();
    
    
            /*
            Sécurité :
            il faut au moins 4 joueurs
            pour faire 3 VS 1.
            */
    
            if (
                unplayedPlayers.length < 4
            ) {
                return false;
            }
    
    
            /*
            On choisit UNE cible parmi
            les joueurs n'ayant pas joué.
    
            On évite de choisir le joueur
            actuellement utilisé par le moteur
            afin qu'il fasse partie du groupe.
            */
    
            const possibleTargets =
                unplayedPlayers.filter(
                    candidate =>
                        candidate.id !== player.id
                );
    
    
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

    getRandomTargetPlayer(
        actorPlayer
    ) {
    
        /*
        On récupère tous les joueurs vivants
        sauf celui qui est en train de jouer.
        */
    
        const possibleTargets =
            this.players.filter(
                player =>
                    player.alive &&
                    player.id !== actorPlayer.id
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
    // REMPLACER {actor} ET {target}
    // PAR LES NOMS DES JOUEURS
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
    
    
        let result = text;
    
    
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

    getGroupPlayers(
        targetPlayer
    ) {
    
        return this.players.filter(
            player =>
                player.alive &&
                (
                    !targetPlayer ||
                    player.id !== targetPlayer.id
                )
        );
    
    }

    formatPlayerGroup(players) {

        const names =
            players.map(
                player => player.name
            );
    
    
        if (names.length === 0) {
            return "Les autres joueurs";
        }
    
    
        if (names.length === 1) {
            return names[0];
        }
    
    
        if (names.length === 2) {
    
            return (
                `${names[0]} et ${names[1]}`
            );
        }
    
    
        return (
            names.slice(0, -1).join(", ")
            +
            " et "
            +
            names[names.length - 1]
        );
    }

    // =====================================
    // FAIRE UN CHOIX
    // =====================================

    makeChoice(choiceId) {

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
    
        let targetPlayer = null;
    
    
        if (
            situation.type === "interaction" ||
            situation.type === "group_vs_one"
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
    
        let groupPlayers = [];
    
    
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
                    item.id === choiceId
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
    
        let playedPlayerIds = [];
    
        let playedPlayerNames = [];
    
    
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
        // RÉSULTAT DU TOUR
        // =====================================
    
        const result = {
    
            // ---------------------------------
            // JOUEUR ACTIF INTERNE
            // ---------------------------------
    
            playerId:
                player.id,
    
            playerName:
                player.name,
    
    
            // ---------------------------------
            // JOUEURS AYANT RÉELLEMENT JOUÉ
            // ---------------------------------
    
            playedPlayerIds:
                playedPlayerIds,
    
            playedPlayerNames:
                playedPlayerNames,
    
    
            // ---------------------------------
            // CIBLE
            // ---------------------------------
    
            targetPlayerId:
                targetPlayer
                    ? targetPlayer.id
                    : null,
    
            targetPlayerName:
                targetPlayer
                    ? targetPlayer.name
                    : null,
    
    
            // ---------------------------------
            // GROUPE
            // ---------------------------------
    
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
    
    
            // ---------------------------------
            // SITUATION
            // ---------------------------------
    
            situationId:
                situation.id,
    
            situationType:
                situation.type ?? "classic",
    
            situationTitle:
                renderedSituationTitle,
    
            situationDescription:
                renderedSituationDescription,
    
            situationIcon:
                situation.icon,
    
            situationCategory:
                situation.category,
    
    
            // ---------------------------------
            // CHOIX
            // ---------------------------------
    
            choiceId:
                choice.id,
    
            choiceTitle:
                renderedChoiceTitle,
    
            choiceDescription:
                renderedChoiceDescription,
    
    
            // ---------------------------------
            // CONSÉQUENCE
            // ---------------------------------
    
            consequenceId:
                consequence.id,
    
            consequenceText:
                renderedConsequenceText,
    
            consequenceIcon:
                consequence.icon,
    
    
            // ---------------------------------
            // EFFETS
            // ---------------------------------
    
            effects:
                effects,
    
    
            // ---------------------------------
            // ÉTAT DU JOUEUR ACTIF
            // ---------------------------------
    
            remainingLives:
                player.lives,
    
            alive:
                player.alive
    
        };
    
    
        // =====================================
        // AJOUT AU RÉCAP DU TOUR
        // =====================================
    
        this.currentRound
            .addResult(
                result
            );
    
    
        // =====================================
        // MARQUER LES JOUEURS COMME AYANT JOUÉ
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
        // RETOUR POUR L'ÉCRAN CONSÉQUENCE
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

        // =====================================
        // CHERCHER QUI N'A PAS ENCORE JOUÉ
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
        // POSITION DU PROCHAIN JOUEUR
        // =====================================
    
        this.currentPlayerIndex =
            this.players.findIndex(
                player =>
                    player.id ===
                    nextPlayer.id
            );
    
    
        // =====================================
        // QUESTION
        // =====================================
    
        const questionAvailable =
            this.assignSituationToCurrentPlayer();
    
    
        if (!questionAvailable) {
    
            this.currentRound.complete();
    
            return false;
    
        }
    
    
        return true;
    
    }


    getUnplayedPlayers() {

        if (!this.currentRound) {
    
            return [];
        }
    
    
        return this.players.filter(
            player =>
                player.alive &&
                !this.currentRound.hasPlayerPlayed(
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
    
    
        /*
        =====================================
        PLUS ASSEZ DE QUESTIONS
        POUR UN TOUR COMPLET
        =====================================
        */
    
        if (
            remainingQuestions <
            alivePlayers.length
        ) {
    
            return true;
    
        }
    
    
        /*
        =====================================
        MODE SOLO
        =====================================
        */
    
        if (
            this.players.length === 1
        ) {
    
            return (
                this.players[0].lives <= 0
            );
    
        }
    
    
        /*
        =====================================
        DERNIER SURVIVANT
        =====================================
        */
    
        if (
            alivePlayers.length <= 1
        ) {
    
            return true;
    
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
                b.lives - a.lives
        );

    }


    // =====================================
    // RESET
    // =====================================

    reset() {

        this.players = [];

        this.currentPlayerIndex = 0;

        this.currentRound = null;

        this.roundNumber = 0;

        this.usedSituationIds = [];

        this.questionsExhausted = false;

        this.started = false;

    }

}