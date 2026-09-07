export class Round {

    constructor(number) {

        this.number = number;

        this.results = [];

        this.completed = false;

        this.playerSituations = {};

        // Joueurs ayant déjà consommé leur tour
        this.playedPlayerIds = [];

    }


    // =====================================
    // SITUATIONS
    // =====================================

    setPlayerSituation(playerId, situation) {

        this.playerSituations[playerId] =
            situation;

    }


    getPlayerSituation(playerId) {

        return (
            this.playerSituations[playerId]
            ?? null
        );

    }


    // =====================================
    // JOUEURS AYANT JOUÉ
    // =====================================

    markPlayerPlayed(playerId) {

        if (
            !this.playedPlayerIds.includes(
                playerId
            )
        ) {

            this.playedPlayerIds.push(
                playerId
            );

        }

    }


    markPlayersPlayed(playerIds) {

        playerIds.forEach(
            playerId => {

                this.markPlayerPlayed(
                    playerId
                );

            }
        );

    }


    hasPlayerPlayed(playerId) {

        return this.playedPlayerIds.includes(
            playerId
        );

    }


    // =====================================
    // RÉSULTATS
    // =====================================

    addResult(result) {

        this.results.push(
            result
        );

    }


    getResults() {

        return this.results;

    }


    // =====================================
    // FIN
    // =====================================

    complete() {

        this.completed = true;

    }


    isCompleted() {

        return this.completed;

    }

}