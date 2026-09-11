export class ConditionManager {

    constructor(
        game
    ) {

        this.game =
            game;

    }


    // =====================================
    // CONDITION
    // =====================================

    evaluate(
        condition,
        context
    ) {

        if (!condition) {

            return true;

        }


        if (
            Array.isArray(
                condition.all
            )
        ) {

            return condition.all.every(
                item =>
                    this.evaluate(
                        item,
                        context
                    )
            );

        }


        if (
            Array.isArray(
                condition.any
            )
        ) {

            return condition.any.some(
                item =>
                    this.evaluate(
                        item,
                        context
                    )
            );

        }


        if (
            condition.not
        ) {

            return !this.evaluate(
                condition.not,
                context
            );

        }


        const actor =
            context.actor;


        const target =
            context.target;


        // =================================
        // ÉTAT
        // =================================

        if (
            condition.type ===
            "status"
        ) {

            const player =
                condition.target ===
                    "target"
                    ? target
                    : actor;


            return (
                player?.hasStatus(
                    condition.id
                ) ??
                false
            );

        }


        // =================================
        // JAUGE
        // =================================

        if (
            condition.type ===
            "gauge"
        ) {

            const player =
                condition.target ===
                    "target"
                    ? target
                    : actor;


            if (!player) {

                return false;

            }


            return this.compare(
                player.getGauge(
                    condition.id
                ),
                condition.operator ??
                    ">=",
                Number(
                    condition.value ??
                    0
                )
            );

        }


        // =================================
        // RELATION
        // =================================

        if (
            condition.type ===
            "relation"
        ) {

            if (
                !actor ||
                !target
            ) {

                return false;

            }


            const relation =
                this.game
                    .relationshipManager
                    .getRelation(
                        actor,
                        target
                    );


            const value =
                Number(
                    relation[
                        condition.field
                    ] ??
                    0
                );


            return this.compare(
                value,
                condition.operator ??
                    ">=",
                Number(
                    condition.value ??
                    0
                )
            );

        }


        // =================================
        // VIES
        // =================================

        if (
            condition.type ===
            "lives"
        ) {

            return this.compare(
                actor?.lives ?? 0,
                condition.operator ??
                    ">=",
                Number(
                    condition.value ??
                    0
                )
            );

        }


        return true;

    }


    compare(
        value,
        operator,
        expected
    ) {

        switch (
            operator
        ) {

            case ">":
                return value > expected;

            case ">=":
                return value >= expected;

            case "<":
                return value < expected;

            case "<=":
                return value <= expected;

            case "==":
                return value === expected;

            case "!=":
                return value !== expected;

            default:
                return false;

        }

    }

}