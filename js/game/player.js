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


        this.statuses =
            [];

        this.items =
            [];

    }


    changeLives(amount) {

        this.lives +=
            amount;


        if (
            this.lives < 0
        ) {

            this.lives =
                0;

        }


        // =====================================
        // BATTLE ROYAL
        // =====================================

        if (
            this.eliminationEnabled &&
            this.lives === 0
        ) {

            this.alive =
                false;

        }


        // =====================================
        // SURVIVAL PARTY
        // =====================================

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

    addStatus(status) {

        if (!status) {

            return;

        }


        const alreadyExists =
            this.statuses.some(
                item =>
                    item.id === status.id
            );


        if (!alreadyExists) {

            this.statuses.push(status);

        }

    }


    removeStatus(statusId) {

        this.statuses =
            this.statuses.filter(
                status =>
                    status.id !== statusId
            );

    }


    addItem(item) {

        if (!item) {

            return;

        }


        this.items.push(item);

    }


    removeItem(itemId) {

        const index =
            this.items.findIndex(
                item =>
                    item.id === itemId
            );


        if (index !== -1) {

            this.items.splice(
                index,
                1
            );

        }

    }

}