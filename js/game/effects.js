// =====================================
// JOUEURS TOUCHÉS
// =====================================

function getAffectedPlayers(
    effect,
    actorPlayer,
    targetPlayer,
    allPlayers
) {

    if (
        effect.target ===
        "actor"
    ) {

        return actorPlayer
            ? [actorPlayer]
            : [];

    }


    if (
        effect.target ===
        "target"
    ) {

        return targetPlayer
            ? [targetPlayer]
            : [];

    }


    if (
        effect.target ===
        "others"
    ) {

        return allPlayers.filter(
            player =>
                player.alive &&
                (
                    !targetPlayer ||
                    player.id !==
                        targetPlayer.id
                )
        );

    }


    if (
        effect.target ===
        "all"
    ) {

        return allPlayers.filter(
            player =>
                player.alive
        );

    }


    return [];

}


// =====================================
// VIE
// =====================================

export function applyLifeEffect(
    player,
    amount
) {

    if (
        !player ||
        typeof amount !==
            "number"
    ) {

        return null;

    }


    const livesBefore =
        player.lives;


    player.changeLives(
        amount
    );


    return {

        kind:
            "life",

        playerId:
            player.id,

        playerName:
            player.name,

        livesBefore,

        livesAfter:
            player.lives,

        difference:
            player.lives -
            livesBefore

    };

}


// =====================================
// CONSÉQUENCE
// =====================================

export function applyConsequence(
    actorPlayer,
    targetPlayer,
    consequence,
    allPlayers = [],
    context = {}
) {

    const appliedEffects =
        [];


    if (!consequence) {

        return appliedEffects;

    }


    const statusManager =
        context.statusManager ??
        null;


    const relationshipManager =
        context.relationshipManager ??
        null;


    // =====================================
    // FORMAT effects[]
    // =====================================

    if (
        Array.isArray(
            consequence.effects
        )
    ) {

        consequence.effects.forEach(
            effect => {

                if (!effect) {

                    return;

                }


                const affectedPlayers =
                    getAffectedPlayers(
                        effect,
                        actorPlayer,
                        targetPlayer,
                        allPlayers
                    );


                // =================================
                // VIES
                // =================================

                if (
                    typeof effect.lives ===
                    "number"
                ) {

                    affectedPlayers.forEach(
                        player => {

                            let amount =
                                effect.lives;


                            if (
                                statusManager
                            ) {

                                amount =
                                    statusManager
                                        .modifyLifeAmount(
                                            player,
                                            amount,
                                            effect
                                        );

                            }


                            const lifeEffect =
                                applyLifeEffect(
                                    player,
                                    amount
                                );


                            if (
                                lifeEffect
                            ) {

                                appliedEffects.push(
                                    lifeEffect
                                );

                            }

                        }
                    );

                }


                // =================================
                // AJOUT ÉTAT
                // =================================

                if (
                    effect.status &&
                    statusManager
                ) {

                    affectedPlayers.forEach(
                        player => {

                            const statusId =
                                typeof effect.status ===
                                    "string"
                                    ? effect.status
                                    : effect.status.id;


                            const duration =
                                typeof effect.status ===
                                    "object"
                                    ? effect.status.duration
                                    : undefined;


                            statusManager.addStatus(
                                player,
                                statusId,
                                {
                                    duration,
                                    source:
                                        consequence.id
                                }
                            );

                        }
                    );

                }


                // =================================
                // SUPPRESSION ÉTAT
                // =================================

                if (
                    effect.removeStatus &&
                    statusManager
                ) {

                    affectedPlayers.forEach(
                        player => {

                            statusManager
                                .removeStatus(
                                    player,
                                    effect.removeStatus,
                                    "L'effet a été dissipé."
                                );

                        }
                    );

                }


                // =================================
                // JAUGE
                // =================================

                if (
                    effect.gauge &&
                    statusManager
                ) {

                    affectedPlayers.forEach(
                        player => {

                            statusManager
                                .changeGauge(
                                    player,
                                    effect.gauge.id,
                                    Number(
                                        effect.gauge.amount ??
                                        0
                                    )
                                );

                        }
                    );

                }


                // =================================
                // RELATION
                // =================================

                if (
                    effect.relation &&
                    relationshipManager &&
                    actorPlayer &&
                    targetPlayer
                ) {

                    const relation =
                        effect.relation;


                    if (
                        typeof relation.trust ===
                        "number"
                    ) {

                        relationshipManager
                            .changeTrust(
                                actorPlayer,
                                targetPlayer,
                                relation.trust
                            );

                    }


                    if (
                        relation.debt ===
                        true
                    ) {

                        relationshipManager
                            .addDebt(
                                targetPlayer,
                                actorPlayer
                            );

                    }


                    if (
                        relation.protection
                    ) {

                        relationshipManager
                            .addProtection(
                                actorPlayer,
                                targetPlayer,
                                Number(
                                    relation.protection
                                )
                            );

                    }


                    if (
                        relation.distrust
                    ) {

                        relationshipManager
                            .addDistrust(
                                actorPlayer,
                                targetPlayer,
                                Number(
                                    relation.distrust
                                )
                            );

                    }


                    if (
                        typeof relation.insight ===
                        "number"
                    ) {

                        relationshipManager
                            .changeInsight(
                                actorPlayer,
                                targetPlayer,
                                relation.insight
                            );

                    }

                }

            }
        );


        return appliedEffects;

    }


    // =====================================
    // ANCIEN FORMAT lives
    // =====================================

    if (
        typeof consequence.lives ===
        "number" &&
        actorPlayer
    ) {

        let amount =
            consequence.lives;


        if (
            statusManager
        ) {

            amount =
                statusManager
                    .modifyLifeAmount(
                        actorPlayer,
                        amount,
                        consequence
                    );

        }


        const lifeEffect =
            applyLifeEffect(
                actorPlayer,
                amount
            );


        if (
            lifeEffect
        ) {

            appliedEffects.push(
                lifeEffect
            );

        }

    }


    return appliedEffects;

}