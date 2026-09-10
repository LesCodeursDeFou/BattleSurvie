// =====================================
// MODIFICATION DES VIES
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
// APPLIQUER UNE CONSÉQUENCE
// =====================================

export function applyConsequence(
    actorPlayer,
    targetPlayer,
    consequence,
    allPlayers = []
) {

    const appliedEffects =
        [];


    if (!consequence) {

        console.error(
            "applyConsequence : conséquence absente"
        );

        return appliedEffects;

    }


    // =====================================
    // NOUVEAU FORMAT
    // effects: [...]
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


                let affectedPlayers =
                    [];


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
                // AUTRES
                //
                // Tous les vivants sauf targetPlayer.
                //
                // Pour judge_choice :
                // game.js passe actor comme
                // targetPlayer.
                //
                // Donc :
                // others = tous sauf X.
                // =====================================

                else if (
                    effect.target ===
                    "others"
                ) {

                    affectedPlayers =
                        allPlayers.filter(
                            player => {

                                if (
                                    !player.alive
                                ) {

                                    return false;

                                }


                                if (
                                    !targetPlayer
                                ) {

                                    return true;

                                }


                                return (
                                    player.id !==
                                    targetPlayer.id
                                );

                            }
                        );

                }


                // =====================================
                // TOUS
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
                // TARGET INCONNU
                // =====================================

                else {

                    console.warn(
                        "Type d'effet inconnu :",
                        effect.target
                    );

                    return;

                }


                // =====================================
                // PAS DE MODIFICATION DE VIE
                // =====================================

                if (
                    typeof effect.lives !==
                    "number"
                ) {

                    return;

                }


                // =====================================
                // APPLICATION
                // =====================================

                affectedPlayers.forEach(
                    affectedPlayer => {

                        const lifeEffect =
                            applyLifeEffect(
                                affectedPlayer,
                                effect.lives
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
        );


        return appliedEffects;

    }


    // =====================================
    // ANCIEN FORMAT
    //
    // {
    //     lives: -2
    // }
    //
    // Compatibilité avec les anciennes
    // situations.
    // =====================================

    if (
        typeof consequence.lives ===
        "number" &&
        actorPlayer
    ) {

        const lifeEffect =
            applyLifeEffect(
                actorPlayer,
                consequence.lives
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