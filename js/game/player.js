export class Player {

    constructor(id, name) {

        this.id =
            id;

        this.name =
            name;

        this.lives =
            10;

        this.alive =
            true;


        // =====================================
        // ÉLIMINATION
        // =====================================

        this.eliminationEnabled =
            true;


        // =====================================
        // ÉTATS PERSONNELS
        // =====================================

        this.statuses =
            [];


        // =====================================
        // JAUGES
        //
        // Certaines jauges ne seront utilisées
        // que selon le thème.
        // =====================================

        this.gauges = {

            fatigue:
                0,

            fear:
                0

        };


        // =====================================
        // OBJETS
        // =====================================

        this.items =
            [];


        // =====================================
        // STATISTIQUES
        // =====================================

        this.stats = {

            choicesMade:
                0,

            livesGained:
                0,

            damageTaken:
                0,

            healingGiven:
                0,

            riskyChoices:
                0,

            choiceTags:
                {}

        };

    }


    // =====================================
    // VIES
    // =====================================

    changeLives(amount) {

        this.lives +=
            amount;


        if (
            this.lives < 0
        ) {

            this.lives =
                0;

        }


        if (
            this.eliminationEnabled &&
            this.lives === 0
        ) {

            this.alive =
                false;

        }


        if (
            !this.eliminationEnabled
        ) {

            this.alive =
                true;

        }


        return this.lives;

    }


    setEliminationEnabled(
        enabled
    ) {

        this.eliminationEnabled =
            enabled;


        if (!enabled) {

            this.alive =
                true;

        }

    }


    // =====================================
    // ÉTATS
    // =====================================

    hasStatus(
        statusId
    ) {

        return this.statuses.some(
            status =>
                status.id ===
                statusId
        );

    }


    getStatus(
        statusId
    ) {

        return (
            this.statuses.find(
                status =>
                    status.id ===
                    statusId
            ) ?? null
        );

    }


    addStatus(
        status
    ) {

        if (
            !status ||
            !status.id
        ) {

            return false;

        }


        const existing =
            this.getStatus(
                status.id
            );


        if (existing) {

            return false;

        }


        this.statuses.push(
            status
        );


        return true;

    }


    removeStatus(
        statusId
    ) {

        const before =
            this.statuses.length;


        this.statuses =
            this.statuses.filter(
                status =>
                    status.id !==
                    statusId
            );


        return (
            before !==
            this.statuses.length
        );

    }


    // =====================================
    // JAUGES
    // =====================================

    getGauge(
        gaugeId
    ) {

        return Number(
            this.gauges[
                gaugeId
            ] ?? 0
        );

    }


    setGauge(
        gaugeId,
        value
    ) {

        const finalValue =
            Math.max(
                0,
                Math.min(
                    3,
                    Number(value) || 0
                )
            );


        this.gauges[
            gaugeId
        ] =
            finalValue;


        return finalValue;

    }


    changeGauge(
        gaugeId,
        amount
    ) {

        return this.setGauge(
            gaugeId,
            this.getGauge(
                gaugeId
            ) +
            Number(amount || 0)
        );

    }


    // =====================================
    // OBJETS
    // =====================================

    addItem(item) {

        if (!item) {

            return;

        }


        this.items.push(
            item
        );

    }


    removeItem(itemId) {

        const index =
            this.items.findIndex(
                item =>
                    item.id ===
                    itemId
            );


        if (
            index !==
            -1
        ) {

            this.items.splice(
                index,
                1
            );

        }

    }

}