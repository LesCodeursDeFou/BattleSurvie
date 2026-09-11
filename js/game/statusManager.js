import {
    getThemeData
} from "../data/themeData.js";


export class StatusManager {

    constructor(
        game
    ) {

        this.game =
            game;

        this.maxPersonalStatuses =
            2;

    }


    // =====================================
    // CATALOGUE
    // =====================================

    getDefinitions() {

        const themeData =
            getThemeData(
                this.game.theme
            );


        return (
            themeData?.statuses ??
            []
        );

    }


    getDefinition(
        statusId
    ) {

        return (
            this.getDefinitions()
                .find(
                    status =>
                        status.id ===
                        statusId
                ) ??
            null
        );

    }


    // =====================================
    // DURÉE ALÉATOIRE
    // =====================================

    getRandomDuration(
        definition
    ) {

        if (
            !definition ||
            definition.permanentUntilRemoved
        ) {

            return null;

        }


        const min =
            Number(
                definition.duration?.min ??
                1
            );


        const max =
            Number(
                definition.duration?.max ??
                min
            );


        return (
            Math.floor(
                Math.random() *
                (
                    max -
                    min +
                    1
                )
            ) +
            min
        );

    }


    // =====================================
    // NOMBRE D'ÉTATS PERSONNELS
    // =====================================

    getLimitedStatuses(
        player
    ) {

        return player.statuses.filter(
            status => {

                const definition =
                    this.getDefinition(
                        status.id
                    );


                return (
                    definition
                        ?.countsTowardLimit !==
                    false
                );

            }
        );

    }


    // =====================================
    // AJOUT
    // =====================================

    addStatus(
        player,
        statusId,
        options = {}
    ) {

        if (
            !player ||
            !statusId
        ) {

            return false;

        }


        const definition =
            this.getDefinition(
                statusId
            );


        if (!definition) {

            console.warn(
                "État inconnu :",
                statusId
            );

            return false;

        }


        const existing =
            player.getStatus(
                statusId
            );


        if (existing) {

            // On peut rafraîchir la durée.

            if (
                !definition
                    .permanentUntilRemoved
            ) {

                existing.turnsRemaining =
                    options.duration ??
                    this.getRandomDuration(
                        definition
                    );

            }


            return true;

        }


        const countsTowardLimit =
            definition
                .countsTowardLimit !==
            false;


        if (
            countsTowardLimit &&
            !options.force &&
            this.getLimitedStatuses(
                player
            ).length >=
                this.maxPersonalStatuses
        ) {

            this.game.pushNotification({

                type:
                    "status_blocked",

                icon:
                    "⚠️",

                playerId:
                    player.id,

                title:
                    `${player.name} résiste`,

                text:
                    "Le joueur possède déjà le maximum de 2 états personnels."

            });


            return false;

        }


        const status = {

            id:
                definition.id,

            turnsRemaining:
                options.duration ??
                this.getRandomDuration(
                    definition
                ),

            source:
                options.source ??
                null,

            metadata:
                options.metadata ??
                {},

            // Empêche qu'un état obtenu
            // pendant le tour actuel perde
            // immédiatement un tour.
            fresh:
                true

        };


        player.addStatus(
            status
        );


        this.game.pushNotification({

            type:
                "status_added",

            icon:
                definition.icon,

            playerId:
                player.id,

            title:
                `${player.name} devient ${definition.name}`,

            text:
                definition.description,

            turnsRemaining:
                status.turnsRemaining

        });


        this.checkCombinations(
            player
        );


        return true;

    }


    // =====================================
    // SUPPRESSION
    // =====================================

    removeStatus(
        player,
        statusId,
        reason = null
    ) {

        if (!player) {

            return false;

        }


        const definition =
            this.getDefinition(
                statusId
            );


        const removed =
            player.removeStatus(
                statusId
            );


        if (
            removed &&
            definition
        ) {

            this.game.pushNotification({

                type:
                    "status_removed",

                icon:
                    "✨",

                playerId:
                    player.id,

                title:
                    `${definition.name} terminé`,

                text:
                    reason ??
                    `${player.name} n'est plus ${definition.name.toLowerCase()}.`

            });

        }


        return removed;

    }


    // =====================================
    // JAUGES
    // =====================================

    changeGauge(
        player,
        gaugeId,
        amount
    ) {

        if (!player) {

            return null;

        }


        const before =
            player.getGauge(
                gaugeId
            );


        const after =
            player.changeGauge(
                gaugeId,
                amount
            );


        if (
            before !==
            after
        ) {

            this.game.pushNotification({

                type:
                    "gauge",

                icon:
                    gaugeId === "fear"
                        ? "😰"
                        : "🥱",

                playerId:
                    player.id,

                title:
                    this.getGaugeLabel(
                        gaugeId,
                        after
                    ),

                text:
                    `${player.name} : ${before} → ${after}`,

                gauge:
                    gaugeId,

                value:
                    after

            });

        }


        this.checkGaugeThresholds(
            player
        );


        this.checkCombinations(
            player
        );


        return after;

    }


    getGaugeLabel(
        gaugeId,
        level
    ) {

        if (
            gaugeId ===
            "fatigue"
        ) {

            return [
                "Reposé",
                "Fatigué",
                "Très fatigué",
                "Épuisé"
            ][level] ??
            "Fatigue";

        }


        if (
            gaugeId ===
            "fear"
        ) {

            return [
                "Calme",
                "Inquiet",
                "Effrayé",
                "Terrifié"
            ][level] ??
            "Peur";

        }


        return gaugeId;

    }


    // =====================================
    // SEUILS
    // =====================================

    checkGaugeThresholds(
        player
    ) {

        if (
            player.getGauge(
                "fatigue"
            ) >= 3 &&
            !player.hasStatus(
                "exhausted"
            )
        ) {

            this.addStatus(
                player,
                "exhausted",
                {
                    force:
                        true
                }
            );

        }


        if (
            player.getGauge(
                "fear"
            ) >= 3 &&
            !player.hasStatus(
                "panic"
            )
        ) {

            this.addStatus(
                player,
                "panic",
                {
                    force:
                        true
                }
            );

        }

    }


    // =====================================
    // MODIFICATION D'UNE VARIATION DE VIE
    // =====================================

    modifyLifeAmount(
        player,
        amount,
        effect = {}
    ) {

        let finalAmount =
            Number(amount) || 0;


        if (
            !player ||
            finalAmount === 0
        ) {

            return finalAmount;

        }


        // =================================
        // FAIM
        // =================================

        if (
            finalAmount > 0 &&
            player.hasStatus(
                "hungry"
            )
        ) {

            finalAmount =
                Math.min(
                    finalAmount,
                    1
                );

        }


        // =================================
        // ÉPUISEMENT
        // =================================

        if (
            finalAmount < 0 &&
            player.hasStatus(
                "exhausted"
            ) &&
            Array.isArray(
                effect.tags
            ) &&
            effect.tags.includes(
                "physical"
            )
        ) {

            finalAmount -=
                1;

        }


        // =================================
        // COURAGE / PROTECTION
        // =================================

        if (
            finalAmount < 0
        ) {

            const protectiveStatus =
                player.statuses.find(
                    status => {

                        const definition =
                            this.getDefinition(
                                status.id
                            );


                        return (
                            definition
                                ?.cancelDamageOnce ===
                            true
                        );

                    }
                );


            if (
                protectiveStatus
            ) {

                const definition =
                    this.getDefinition(
                        protectiveStatus.id
                    );


                this.removeStatus(
                    player,
                    protectiveStatus.id,
                    `${definition.name} a annulé les dégâts.`
                );


                this.game.pushNotification({

                    type:
                        "damage_cancelled",

                    icon:
                        definition.icon,

                    playerId:
                        player.id,

                    title:
                        "Dégâts annulés",

                    text:
                        `${player.name} évite la perte de cœur grâce à ${definition.name}.`

                });


                return 0;

            }

        }


        return finalAmount;

    }


    // =====================================
    // FIN DU TOUR DU JOUEUR
    // =====================================

    processEndTurn(
        player
    ) {

        if (!player) {

            return;

        }


        const statusesCopy =
            [
                ...player.statuses
            ];


        statusesCopy.forEach(
            status => {

                const definition =
                    this.getDefinition(
                        status.id
                    );


                if (!definition) {

                    return;

                }


                // =============================
                // POISON
                // =============================

                if (
                    definition.endTurnDamage
                ) {

                    const amount =
                        -Math.abs(
                            definition
                                .endTurnDamage
                        );


                    const before =
                        player.lives;


                    player.changeLives(
                        amount
                    );


                    this.game.pushNotification({

                        type:
                            "status_damage",

                        icon:
                            definition.icon,

                        playerId:
                            player.id,

                        title:
                            definition.name,

                        text:
                            `${player.name} perd ${Math.abs(amount)} ❤️.`,

                        difference:
                            player.lives -
                            before

                    });

                }


                // =============================
                // MALÉDICTION
                // =============================

                if (
                    status.id ===
                    "cursed"
                ) {

                    this.processCurse(
                        player
                    );

                }


                // =============================
                // ÉTAT PERMANENT
                // =============================

                if (
                    definition
                        .permanentUntilRemoved
                ) {

                    return;

                }


                // =============================
                // VIENT D'ÊTRE AJOUTÉ
                // =============================

                if (
                    status.fresh
                ) {

                    status.fresh =
                        false;

                    return;

                }


                // =============================
                // DURÉE
                // =============================

                if (
                    typeof status
                        .turnsRemaining ===
                    "number"
                ) {

                    status.turnsRemaining--;


                    if (
                        status.turnsRemaining <=
                        0
                    ) {

                        this.removeStatus(
                            player,
                            status.id
                        );

                    }

                }

            }
        );


        this.checkCombinations(
            player
        );

    }


    // =====================================
    // MALÉDICTION
    // =====================================

    processCurse(
        player
    ) {

        const roll =
            Math.random() *
            100;


        let amount =
            0;


        let text =
            "La malédiction reste silencieuse.";


        if (
            roll < 50
        ) {

            amount =
                -1;

            text =
                "La malédiction frappe.";

        }

        else if (
            roll >= 80
        ) {

            amount =
                1;

            text =
                "La malédiction produit étrangement un effet bénéfique.";

        }


        const before =
            player.lives;


        player.changeLives(
            amount
        );


        this.game.pushNotification({

            type:
                "curse",

            icon:
                "🔮",

            playerId:
                player.id,

            title:
                "Malédiction",

            text:
                amount === 0
                    ? text
                    : `${text} ${amount > 0 ? "+" : ""}${amount} ❤️`,

            difference:
                player.lives -
                before

        });

    }


    // =====================================
    // COMBINAISONS
    // =====================================

    checkCombinations(
        player
    ) {

        // =================================
        // PEUR + COURAGE
        // =================================

        if (
            player.getGauge(
                "fear"
            ) > 0 &&
            player.hasStatus(
                "courage"
            )
        ) {

            player.setGauge(
                "fear",
                0
            );


            this.removeStatus(
                player,
                "courage",
                "Le courage a permis de surmonter la peur."
            );


            if (
                this.getDefinition(
                    "determined"
                )
            ) {

                this.addStatus(
                    player,
                    "determined",
                    {
                        force:
                            true
                    }
                );

            }


            return;

        }


        // =================================
        // FATIGUE + FAIM
        // =================================

        if (
            player.getGauge(
                "fatigue"
            ) >= 2 &&
            player.hasStatus(
                "hungry"
            ) &&
            this.getDefinition(
                "exhausted"
            )
        ) {

            this.addStatus(
                player,
                "exhausted",
                {
                    force:
                        true
                }
            );

        }

    }

}