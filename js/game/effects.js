export function applyLifeEffect(
    player,
    amount
) {

    const livesBefore =
        player.lives;


    player.changeLives(
        amount
    );


    return {

        playerId:
            player.id,

        playerName:
            player.name,

        livesBefore,

        livesAfter:
            player.lives,

        difference:
            player.lives - livesBefore

    };

}


// =====================================================
// APPLIQUER UNE CONSÉQUENCE
// =====================================================

export function applyConsequence(
    actorPlayer,
    targetPlayer,
    consequence,
    allPlayers = []
) {

    const appliedEffects = [];


    if (
        Array.isArray(
            consequence.effects
        )
    ) {

        consequence.effects.forEach(
            effect => {

                let affectedPlayers = [];


                // =====================================
                // ACTEUR
                // =====================================

                if (
                    effect.target ===
                    "actor"
                ) {

                    if (actorPlayer) {

                        affectedPlayers = [
                            actorPlayer
                        ];

                    }

                }


                // =====================================
                // CIBLE
                // =====================================

                else if (
                    effect.target ===
                    "target"
                ) {

                    if (targetPlayer) {

                        affectedPlayers = [
                            targetPlayer
                        ];

                    }

                }


                // =====================================
                // TOUS SAUF LA CIBLE
                // =====================================

                else if (
                    effect.target ===
                    "others"
                ) {

                    affectedPlayers =
                        allPlayers.filter(
                            player =>
                                player.alive &&
                                (
                                    !targetPlayer ||
                                    player.id !==
                                    targetPlayer.id
                                )
                        );

                }


                // =====================================
                // TOUS LES JOUEURS
                // =====================================

                else if (
                    effect.target ===
                    "all"
                ) {

                    affectedPlayers =
                        allPlayers.filter(
                            player =>
                                player.alive
                        );

                }


                // =====================================
                // APPLICATION DES VIES
                // =====================================

                affectedPlayers.forEach(
                    affectedPlayer => {

                        if (
                            typeof effect.lives !==
                            "number"
                        ) {

                            return;

                        }


                        const lifeEffect =
                            applyLifeEffect(
                                affectedPlayer,
                                effect.lives
                            );


                        appliedEffects.push(
                            lifeEffect
                        );

                    }
                );

            }
        );


        return appliedEffects;

    }


    // =====================================
    // COMPATIBILITÉ ANCIENNES QUESTIONS
    // =====================================

    if (
        typeof consequence.lives ===
        "number"
    ) {

        appliedEffects.push(
            applyLifeEffect(
                actorPlayer,
                consequence.lives
            )
        );

    }


    return appliedEffects;

}