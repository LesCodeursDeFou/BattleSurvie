export class Round {

    constructor(number) {

        this.number = number;

        this.results = [];

        this.completed = false;

        /*
        Stocke les situations par joueur.

        Exemple :

        {
            1: situationSinges,
            2: situationRequin,
            3: situationGrotte
        }
        */

        this.playerSituations = {};

    }


    // =====================================
    // ATTRIBUER UNE SITUATION
    // =====================================

    setPlayerSituation(
        playerId,
        situation
    ) {

        this.playerSituations[
            playerId
        ] = situation;

    }


    // =====================================
    // RÉCUPÉRER LA SITUATION D'UN JOUEUR
    // =====================================

    getPlayerSituation(
        playerId
    ) {

        return (
            this.playerSituations[
                playerId
            ] ?? null
        );

    }


    // =====================================
    // AJOUTER UN RÉSULTAT
    // =====================================

    addResult(result) {

        this.results.push(
            result
        );

    }


    // =====================================
    // FIN DU TOUR
    // =====================================

    complete() {

        this.completed = true;

    }


    // =====================================
    // RÉCAPITULATIF
    // =====================================

    getResults() {

        return this.results;

    }

}