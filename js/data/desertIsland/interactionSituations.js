export const INTERACTION_SITUATIONS = [

    // =========================================================
    // 1 - HAMAC + RUCHE
    // =========================================================

    {
        id: "interaction_hammock_bees",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} dort tranquillement sur un hamac",

        category:
            "Interaction",

        icon:
            "🐝",

        description:
            "{actor} aperçoit {target} profondément endormi sur un hamac. " +
            "Juste à côté se trouve une énorme ruche. Une idée absolument stupide commence à germer.",

        choices: [

            {
                id: "hammock_bees_yes",

                title:
                    "🐝 Envoyer la ruche",

                description:
                    "Une excellente manière de tester votre amitié.",

                consequences: [

                    {
                        id: "hammock_bees_yes_actor",

                        text:
                            "Les abeilles sont dérangées pendant le lancer et se retournent immédiatement contre {actor}. Karma extrêmement rapide.",

                        icon:
                            "🐝",

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            57
                    },

                    {
                        id: "hammock_bees_yes_target",

                        text:
                            "Lancer parfait. La ruche atterrit directement sur {target}. Il comprend très vite d'où elle vient.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "target",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            30
                    },

                    {
                        id: "hammock_bees_yes_neutral",

                        text:
                            "La ruche tombe à côté du hamac. {target} se réveille, fixe {actor} quelques secondes avec suspicion, puis se rendort.",

                        icon:
                            "👀",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            13
                    }

                ]
            },


            {
                id: "hammock_bees_no",

                title:
                    "😇 Le laisser tranquille",

                description:
                    "Résister exceptionnellement à l'appel du chaos.",

                consequences: [

                    {
                        id: "hammock_bees_no_safe",

                        text:
                            "{actor} éloigne discrètement la ruche du hamac. {target} se réveillera sans jamais savoir ce qui aurait pu arriver.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            72
                    },

                    {
                        id: "hammock_bees_no_rock",

                        text:
                            "{target} se réveille brusquement et lance une pierre sur {actor} en pensant qu'il préparait quelque chose.",

                        icon:
                            "🪨",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    distrust: 1
                                }
                            }
                        ],

                        weight:
                            28
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - DERNIÈRE NOIX DE COCO
    // =========================================================

    {
        id: "interaction_last_coconut",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} possède la dernière noix de coco",

        category:
            "Interaction",

        icon:
            "🥥",

        description:
            "{actor} meurt de faim et aperçoit {target} avec une magnifique noix de coco. " +
            "{target} n'a visiblement aucune intention de la partager spontanément.",

        choices: [

            {
                id: "coconut_steal",

                title:
                    "🥷 La voler",

                description:
                    "La survie justifie peut-être certains crimes.",

                consequences: [

                    {
                        id: "coconut_steal_success",

                        text:
                            "{actor} réalise un vol parfait et dévore discrètement une partie de la noix de coco.",

                        icon:
                            "😎",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "actor",
                                removeStatus: "hungry"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id: "coconut_steal_fail",

                        text:
                            "{target} surprend {actor} la main sur sa noix de coco. La discussion est courte et très peu diplomatique.",

                        icon:
                            "👋",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            62
                    },

                    {
                        id: "coconut_steal_neutral",

                        text:
                            "{actor} approche discrètement, mais {target} se retourne. Le vol est abandonné avant même de commencer.",

                        icon:
                            "😬",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    distrust: 1
                                }
                            }
                        ],

                        weight:
                            20
                    }

                ]
            },


            {
                id: "coconut_ask",

                title:
                    "🙏 Demander gentiment",

                description:
                    "Une approche presque civilisée.",

                consequences: [

                    {
                        id: "coconut_ask_yes",

                        text:
                            "{target} accepte finalement de partager. Cette île possède encore un peu d'humanité.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "actor",
                                removeStatus: "hungry"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id: "coconut_ask_no",

                        text:
                            "{target} refuse et mange lentement la noix de coco devant {actor}. C'est presque artistique.",

                        icon:
                            "😈",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            75
                    }

                ]
            },


            // =================================================
            // CHOIX DÉBLOQUÉ PAR CONFIANCE
            // =================================================

            {
                id: "coconut_share_trusted",

                title:
                    "🤝 Lui rappeler votre alliance",

                description:
                    "{target} et {actor} se font suffisamment confiance pour ne pas commencer une guerre pour une noix de coco.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "coconut_share_trusted_success",

                        text:
                            "{target} soupire puis coupe la noix en deux. Aucun marchandage, aucune bagarre. Presque émouvant.",

                        icon:
                            "🥥",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            },

                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],

                        weight:
                            100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 3 - SERPENT PRÈS DU SAC
    // =========================================================

    {
        id: "interaction_snake_bag",
        type: "interaction",
        baseWeight: 1,

        title:
            "Un serpent rôde près du sac de {target}",

        category:
            "Interaction",

        icon:
            "🐍",

        description:
            "{actor} remarque un serpent juste à côté des affaires de {target}. " +
            "{target} n'a absolument rien vu.",

        choices: [

            {
                id: "snake_warn",

                title:
                    "📢 Prévenir {target}",

                description:
                    "Éviter un potentiel drame.",

                consequences: [

                    {
                        id: "snake_warn_good",

                        text:
                            "{target} remercie {actor}. Ensemble, ils éloignent le serpent sans prendre de risque.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    protection: 2
                                }
                            }
                        ],

                        weight:
                            38
                    },

                    {
                        id: "snake_warn_bad",

                        text:
                            "{actor} hurle tellement fort que le serpent panique et lui mord la cheville.",

                        icon:
                            "🐍",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",
                                status: "poisoned"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            42
                    },

                    {
                        id: "snake_warn_neutral",

                        text:
                            "{target} recule lentement. Le serpent s'éloigne sans incident.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            20
                    }

                ]
            },


            {
                id: "snake_ignore",

                title:
                    "🤫 Ne rien dire",

                description:
                    "Ce n'est pas ton sac après tout.",

                consequences: [

                    {
                        id: "snake_ignore_target",

                        text:
                            "{target} ouvre son sac et se fait mordre. Il réalise ensuite que {actor} avait vu le serpent depuis plusieurs secondes.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            },

                            {
                                target: "target",
                                status: "poisoned"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            62
                    },

                    {
                        id: "snake_ignore_escape",

                        text:
                            "Le serpent finit par repartir. {target} ne saura jamais que {actor} avait envisagé de le laisser se faire mordre.",

                        icon:
                            "😶",

                        effects: [],

                        weight:
                            38
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 4 - PONT FRAGILE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "interaction_bridge",
        type: "interaction",
        baseWeight: 1,

        title:
            "{actor} et {target} arrivent devant un pont fragile",

        category:
            "Interaction",

        icon:
            "🌉",

        description:
            "Le vieux pont en bois semble pouvoir s'effondrer à tout moment. Quelqu'un doit tester le passage.",

        choices: [

            {
                id: "bridge_actor_first",

                title:
                    "🧗 Passer en premier",

                description:
                    "{actor} prend lui-même le risque.",

                narrative: {
                    setFlags: [
                        "interaction_bridge_crossed"
                    ],

                    removeFlags: [
                        "interaction_bridge_abandoned"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "interaction_bridge_return",
                            weight: 28
                        }
                    ]
                },

                consequences: [

                    {
                        id: "bridge_actor_success",

                        text:
                            "{actor} traverse sans problème puis aide {target} à trouver les planches les plus solides.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            35,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "interaction_bridge_return",
                                    weight: 40
                                }
                            ]
                        }
                    },

                    {
                        id: "bridge_actor_fail",

                        text:
                            "Le pont casse sous {actor}, qui termine plusieurs mètres plus bas.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],

                        weight:
                            55,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "interaction_bridge_return",
                                    weight: 6
                                }
                            ]
                        }
                    },

                    {
                        id: "bridge_actor_reward",

                        text:
                            "{actor} traverse et découvre quelques fruits de l'autre côté.",

                        icon:
                            "🍎",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            }
                        ],

                        weight:
                            10,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "interaction_bridge_return",
                                    weight: 44
                                }
                            ]
                        }
                    }

                ]
            },


            {
                id: "bridge_target_first",

                title:
                    "👉 Envoyer {target}",

                description:
                    "Pourquoi prendre le risque soi-même ?",

                narrative: {
                    setFlags: [
                        "interaction_target_crossed_bridge"
                    ],

                    removeFlags: [
                        "interaction_bridge_crossed"
                    ]
                },

                consequences: [

                    {
                        id: "bridge_target_success",

                        text:
                            "{target} traverse facilement mais n'oublie pas que {actor} l'a volontairement envoyé tester le pont.",

                        icon:
                            "👀",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            42
                    },

                    {
                        id: "bridge_target_fail",

                        text:
                            "Le pont s'effondre sous {target}. Le regard qu'il adresse à {actor} depuis le ravin est particulièrement clair.",

                        icon:
                            "🌊",

                        effects: [
                            {
                                target: "target",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            58
                    }

                ]
            },


            {
                id: "bridge_together",

                title:
                    "🪢 Sécuriser le passage ensemble",

                description:
                    "Vous vous faites suffisamment confiance pour utiliser une corde et avancer ensemble.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                narrative: {
                    setFlags: [
                        "interaction_bridge_crossed",
                        "interaction_bridge_teamwork"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "interaction_bridge_return",
                            weight: 45
                        }
                    ]
                },

                consequences: [

                    {
                        id: "bridge_together_success",

                        text:
                            "{actor} et {target} sécurisent les planches une par une et traversent sans incident.",

                        icon:
                            "🪢",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 5 - POISSON SUSPECT
    // =========================================================

    {
        id: "interaction_fish",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} prépare un poisson très suspect",

        category:
            "Interaction",

        icon:
            "🐟",

        description:
            "{target} vient de pêcher un poisson aux couleurs inquiétantes et propose à {actor} de partager le repas.",

        choices: [

            {
                id: "fish_eat",

                title:
                    "🍽️ Accepter",

                description:
                    "La faim est plus forte que la prudence.",

                consequences: [

                    {
                        id: "fish_eat_good",

                        text:
                            "Contre toute attente, le poisson est excellent. {actor} et {target} reprennent des forces.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            },

                            {
                                target: "actor",
                                removeStatus: "hungry"
                            },

                            {
                                target: "target",
                                removeStatus: "hungry"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id: "fish_eat_bad",

                        text:
                            "Le poisson était toxique. Très toxique. Les deux regrettent immédiatement cette décision collective.",

                        icon:
                            "🤮",

                        effects: [
                            {
                                target: "actor",
                                status: "poisoned"
                            },

                            {
                                target: "target",
                                status: "poisoned"
                            }
                        ],

                        weight:
                            62
                    },

                    {
                        id: "fish_eat_neutral",

                        text:
                            "Le poisson est affreusement mauvais mais apparemment comestible.",

                        icon:
                            "😖",

                        effects: [],

                        weight:
                            20
                    }

                ]
            },


            {
                id: "fish_refuse",

                title:
                    "❌ Refuser",

                description:
                    "Ces couleurs n'inspirent vraiment pas confiance.",

                consequences: [

                    {
                        id: "fish_refuse_good",

                        text:
                            "{target} goûte seul et tombe malade. Bonne intuition de {actor}.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target: "target",
                                status: "poisoned"
                            },

                            {
                                target: "actor",

                                relation: {
                                    insight: 1
                                }
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id: "fish_refuse_bad",

                        text:
                            "Le poisson était parfaitement comestible. {target} se régale seul.",

                        icon:
                            "😒",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id: "fish_refuse_neutral",

                        text:
                            "{target} goûte une bouchée, grimace et jette finalement le poisson.",

                        icon:
                            "🐟",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    insight: 1
                                }
                            }
                        ],

                        weight:
                            40
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - FEU DE CAMP
    // =========================================================

    {
        id: "interaction_campfire",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} s'est endormi près du feu",

        category:
            "Interaction",

        icon:
            "🔥",

        description:
            "{actor} remarque que {target} dort beaucoup trop près des flammes.",

        choices: [

            {
                id: "campfire_help",

                title:
                    "🧯 Le réveiller",

                description:
                    "Éviter que {target} ne finisse rôti.",

                consequences: [

                    {
                        id: "campfire_help_good",

                        text:
                            "{actor} réveille {target} juste à temps. Reconnaissant, {target} promet de lui rendre la pareille.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id: "campfire_help_bad",

                        text:
                            "{actor} trébuche en voulant aider et tombe dans les braises, mais {target} comprend parfaitement ce qu'il tentait de faire.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id: "campfire_help_neutral",

                        text:
                            "{target} se réveille, se décale de quelques mètres et remercie rapidement {actor}.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]
            },


            {
                id: "campfire_ignore",

                title:
                    "😴 Le laisser dormir",

                description:
                    "Après tout, {target} est assez grand.",

                consequences: [

                    {
                        id: "campfire_ignore_safe",

                        text:
                            "Le vent change de direction. Finalement, rien ne se passe et personne ne saura rien.",

                        icon:
                            "😌",

                        effects: [],

                        weight:
                            38
                    },

                    {
                        id: "campfire_ignore_bad",

                        text:
                            "Une braise brûle {target}. Il découvre ensuite que {actor} l'avait vu dormir dangereusement près du feu.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            62
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - PIÈGE À SANGLIER
    // =========================================================

    {
        id: "interaction_boar_trap",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} marche droit vers un piège",

        category:
            "Interaction",

        icon:
            "🪤",

        description:
            "{actor} aperçoit un vieux piège dissimulé sous les feuilles. {target} fonce droit dessus sans l'avoir remarqué.",

        choices: [

            {
                id: "trap_warn",

                title:
                    "⚠️ Prévenir {target}",

                description:
                    "L'avertir avant qu'il soit trop tard.",

                consequences: [

                    {
                        id: "trap_warn_success",

                        text:
                            "{target} s'arrête juste à temps et remercie franchement {actor}.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    protection: 1
                                }
                            }
                        ],

                        weight:
                            68
                    },

                    {
                        id: "trap_warn_fail",

                        text:
                            "{target} sursaute à cause du cri de {actor} et tombe directement dans le piège. L'intention était bonne, au moins.",

                        icon:
                            "🤦",

                        effects: [
                            {
                                target: "target",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            32
                    }

                ]
            },


            {
                id: "trap_silent",

                title:
                    "🤐 Ne rien dire",

                description:
                    "Observer la suite des événements.",

                consequences: [

                    {
                        id: "trap_silent_bad",

                        text:
                            "{target} marche en plein dans le piège puis comprend que {actor} l'avait vu venir.",

                        icon:
                            "🪤",

                        effects: [
                            {
                                target: "target",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            72
                    },

                    {
                        id: "trap_silent_good",

                        text:
                            "{target} remarque le piège tout seul et l'évite au dernier moment. {actor} garde son silence pour lui.",

                        icon:
                            "😎",

                        effects: [],

                        weight:
                            28
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - BANANE
    // =========================================================

    {
        id: "interaction_banana",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} possède une magnifique banane",

        category:
            "Interaction",

        icon:
            "🍌",

        description:
            "{actor} n'a rien mangé depuis des heures. La banane de {target} semble incroyablement appétissante.",

        choices: [

            {
                id: "banana_steal",

                title:
                    "🥷 Voler la banane",

                description:
                    "Discrétion maximale.",

                consequences: [

                    {
                        id: "banana_steal_good",

                        text:
                            "{actor} subtilise la banane sans être repéré et la dévore.",

                        icon:
                            "🍌",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "actor",
                                removeStatus: "hungry"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id: "banana_steal_bad",

                        text:
                            "{target} surprend {actor}. La dispute se termine assez mal pour le voleur.",

                        icon:
                            "🥊",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            62
                    },

                    {
                        id: "banana_steal_neutral",

                        text:
                            "{actor} abandonne son approche en voyant {target} surveiller constamment sa nourriture.",

                        icon:
                            "👀",

                        effects: [],

                        weight:
                            20
                    }

                ]
            },


            {
                id: "banana_trade",

                title:
                    "🤝 Proposer un échange",

                description:
                    "Tenter de négocier avec {target}.",

                consequences: [

                    {
                        id: "banana_trade_good",

                        text:
                            "{target} accepte de partager. Les deux repartent satisfaits.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id: "banana_trade_bad",

                        text:
                            "{target} refuse catégoriquement. Aucun accord ne sera trouvé aujourd'hui.",

                        icon:
                            "🙅",

                        effects: [],

                        weight:
                            75
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 9 - CHUTE D'UN ARBRE
    // =========================================================

    {
        id: "interaction_falling_tree",
        type: "interaction",
        baseWeight: 1,

        title:
            "Un arbre tombe vers {target}",

        category:
            "Interaction",

        icon:
            "🌳",

        description:
            "{actor} entend un énorme craquement. Un arbre commence à tomber exactement dans la direction de {target}.",

        choices: [

            {
                id: "tree_save",

                title:
                    "🏃 Sauver {target}",

                description:
                    "Courir pour le pousser hors de la trajectoire.",

                consequences: [

                    {
                        id: "tree_save_good",

                        text:
                            "{actor} pousse {target} juste à temps. Sauvetage héroïque.",

                        icon:
                            "🦸",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true,
                                    protection: 2
                                }
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id: "tree_save_bad",

                        text:
                            "{actor} sauve {target}, mais reçoit une grosse branche sur le dos. {target} n'oubliera probablement pas ça.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            50
                    },

                    {
                        id: "tree_save_neutral",

                        text:
                            "{actor} tire {target} par le bras. L'arbre s'écrase juste derrière eux.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]
            },


            {
                id: "tree_shout",

                title:
                    "📢 Crier",

                description:
                    "Prévenir {target} sans se mettre soi-même en danger.",

                consequences: [

                    {
                        id: "tree_shout_good",

                        text:
                            "{target} entend l'avertissement et plonge sur le côté au dernier moment.",

                        icon:
                            "💨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id: "tree_shout_bad",

                        text:
                            "{target} regarde {actor} sans comprendre... puis reçoit une branche.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target: "target",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            40
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 10 - EAU POTABLE
    // =========================================================

    {
        id: "interaction_water",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} possède une gourde presque pleine",

        category:
            "Interaction",

        icon:
            "💧",

        description:
            "{actor} est complètement déshydraté tandis que {target} possède encore beaucoup d'eau.",

        choices: [

            {
                id: "water_ask",

                title:
                    "🙏 Demander de l'eau",

                description:
                    "Faire appel à la générosité de {target}.",

                consequences: [

                    {
                        id: "water_ask_good",

                        text:
                            "{target} partage généreusement son eau avec {actor}.",

                        icon:
                            "💧",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            28
                    },

                    {
                        id: "water_ask_bad",

                        text:
                            "{target} refuse. {actor} repart aussi assoiffé qu'avant.",

                        icon:
                            "🏜️",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            72
                    }

                ]
            },


            {
                id: "water_steal",

                title:
                    "🫳 Voler la gourde",

                description:
                    "Attendre que {target} regarde ailleurs.",

                consequences: [

                    {
                        id: "water_steal_good",

                        text:
                            "{actor} vole quelques gorgées sans être repéré.",

                        icon:
                            "😏",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            16
                    },

                    {
                        id: "water_steal_bad",

                        text:
                            "{target} surprend {actor} et récupère sa gourde. La confiance, elle, ne revient pas.",

                        icon:
                            "🪵",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            64
                    },

                    {
                        id: "water_steal_neutral",

                        text:
                            "{actor} renonce au dernier moment lorsque {target} se retourne.",

                        icon:
                            "😬",

                        effects: [],

                        weight:
                            20
                    }

                ]
            },


            {
                id: "water_trusted",

                title:
                    "🤝 Demander sans négocier",

                description:
                    "Votre relation est suffisamment forte pour que cette demande semble évidente.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "water_trusted_success",

                        text:
                            "{target} tend directement sa gourde à {actor}. Aucun mot n'est nécessaire.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            }
                        ],

                        weight:
                            100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 11 - ROCHER
    // =========================================================

    {
        id: "interaction_rock_prank",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} passe sous un rocher",

        category:
            "Interaction",

        icon:
            "🪨",

        description:
            "{actor} se trouve en hauteur et remarque une pierre instable juste au-dessus de {target}.",

        choices: [

            {
                id: "rock_push",

                title:
                    "😈 Faire tomber la pierre",

                description:
                    "Une blague extrêmement discutable.",

                consequences: [

                    {
                        id: "rock_push_target",

                        text:
                            "La pierre rebondit et frappe directement {target}. La rivalité prend une tournure très concrète.",

                        icon:
                            "🎯",

                        effects: [
                            {
                                target: "target",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id: "rock_push_actor",

                        text:
                            "{actor} perd l'équilibre en poussant la pierre et dévale lui-même la pente.",

                        icon:
                            "🫨",

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            42
                    },

                    {
                        id: "rock_push_miss",

                        text:
                            "La pierre roule à côté de {target}, qui remarque tout de même le geste de {actor}.",

                        icon:
                            "👀",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            10
                    }

                ]
            },


            {
                id: "rock_leave",

                title:
                    "😇 Ne rien faire",

                description:
                    "Essayer de devenir quelqu'un de meilleur.",

                consequences: [

                    {
                        id: "rock_leave_good",

                        text:
                            "{target} passe tranquillement. {actor} résiste héroïquement à une idée objectivement stupide.",

                        icon:
                            "😌",

                        effects: [],

                        weight:
                            82
                    },

                    {
                        id: "rock_leave_bad",

                        text:
                            "La pierre tombe toute seule... sur le pied de {actor}. Karma préventif.",

                        icon:
                            "🦶",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            18
                    }

                ]
            },


            // =================================================
            // RIVALITÉ
            // =================================================

            {
                id: "rock_revenge",

                title:
                    "⚔️ Régler un vieux compte",

                description:
                    "Entre vous, la situation est déjà suffisamment mauvaise.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: "<=",
                    value: -2
                },

                consequences: [

                    {
                        id: "rock_revenge_hit",

                        text:
                            "{actor} fait volontairement tomber la pierre. {target} comprend immédiatement qu'il ne s'agissait pas d'un accident.",

                        icon:
                            "⚔️",

                        effects: [
                            {
                                target: "target",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            65
                    },

                    {
                        id: "rock_revenge_fail",

                        text:
                            "{actor} veut se venger, mais la pierre roule dans sa direction. L'univers refuse apparemment de prendre parti.",

                        icon:
                            "🤡",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            35
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 12 - SANGSUES
    // =========================================================

    {
        id: "interaction_leeches",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} est couvert de sangsues",

        category:
            "Interaction",

        icon:
            "🪱",

        description:
            "Après avoir traversé un marécage, {actor} remarque plusieurs sangsues accrochées au dos de {target}.",

        choices: [

            {
                id: "leeches_help",

                title:
                    "🩹 Aider {target}",

                description:
                    "Retirer les sangsues une par une.",

                consequences: [

                    {
                        id: "leeches_help_good",

                        text:
                            "{actor} retire toutes les sangsues. {target} lui doit clairement une faveur.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id: "leeches_help_bad",

                        text:
                            "Une sangsue décide que {actor} semble également très appétissant.",

                        icon:
                            "🪱",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            40
                    },

                    {
                        id: "leeches_help_neutral",

                        text:
                            "Les sangsues sont retirées sans incident. {target} remercie sérieusement {actor}.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            35
                    }

                ]
            },


            {
                id: "leeches_ignore",

                title:
                    "🤫 Ne rien dire",

                description:
                    "Ce problème finira bien par se résoudre tout seul.",

                consequences: [

                    {
                        id: "leeches_ignore_bad",

                        text:
                            "{target} découvre les sangsues beaucoup trop tard et apprend ensuite que {actor} les avait remarquées.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            65
                    },

                    {
                        id: "leeches_ignore_good",

                        text:
                            "{target} finit par les remarquer et les retire sans difficulté.",

                        icon:
                            "👍",

                        effects: [],

                        weight:
                            35
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 13 - RÉSERVE SECRÈTE
    // =========================================================

    {
        id: "interaction_fruit_stash",
        type: "interaction",
        baseWeight: 1,

        title:
            "{actor} découvre la réserve secrète de {target}",

        category:
            "Interaction",

        icon:
            "🍎",

        description:
            "Derrière quelques pierres, {actor} découvre que {target} cache une réserve entière de fruits.",

        choices: [

            {
                id: "fruit_take",

                title:
                    "🍎 Se servir",

                description:
                    "{target} n'avait qu'à mieux cacher sa réserve.",

                consequences: [

                    {
                        id: "fruit_take_good",

                        text:
                            "{actor} mange plusieurs fruits sans être découvert.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "actor",
                                removeStatus: "hungry"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id: "fruit_take_bad",

                        text:
                            "{target} surprend {actor} en plein festin. La dispute laisse une trace durable.",

                        icon:
                            "🥊",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "target",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id: "fruit_take_neutral",

                        text:
                            "{actor} goûte un fruit mais le trouve immangeable. Il remet tout en place avant d'être vu.",

                        icon:
                            "🤢",

                        effects: [],

                        weight:
                            25
                    }

                ]
            },


            {
                id: "fruit_confront",

                title:
                    "🗣️ Confronter {target}",

                description:
                    "Demander pourquoi cette nourriture est cachée.",

                consequences: [

                    {
                        id: "fruit_confront_good",

                        text:
                            "{target} culpabilise et décide de partager une partie de sa réserve.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id: "fruit_confront_bad",

                        text:
                            "{target} nie tout en bloc et déplace sa réserve pendant la nuit. La confiance n'en ressort pas grandie.",

                        icon:
                            "🤥",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            75
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 14 - SABLES MOUVANTS
    // =========================================================

    {
        id: "interaction_quicksand",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} est coincé dans des sables mouvants",

        category:
            "Interaction",

        icon:
            "🫧",

        description:
            "{actor} entend {target} appeler à l'aide. Il s'enfonce lentement dans des sables mouvants.",

        choices: [

            {
                id: "quicksand_help",

                title:
                    "🪢 Sauver {target}",

                description:
                    "Utiliser une branche pour le sortir.",

                consequences: [

                    {
                        id: "quicksand_help_good",

                        text:
                            "{actor} réussit à sortir {target}. Celui-ci lui doit littéralement sa survie.",

                        icon:
                            "🦸",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true,
                                    protection: 2
                                }
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id: "quicksand_help_bad",

                        text:
                            "{actor} s'approche trop près et tombe également dans les sables mouvants. Ils réussissent finalement à sortir, complètement épuisés.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id: "quicksand_help_neutral",

                        text:
                            "Après de longues minutes, {actor} parvient à tirer {target} hors du sable.",

                        icon:
                            "🥵",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]
            },


            {
                id: "quicksand_leave",

                title:
                    "🚶 Continuer son chemin",

                description:
                    "Chacun sa survie.",

                consequences: [

                    {
                        id: "quicksand_leave_bad",

                        text:
                            "{target} réussit finalement à sortir seul, mais découvre que {actor} l'a délibérément abandonné.",

                        icon:
                            "🥵",

                        effects: [
                            {
                                target: "target",
                                gauge: {
                                    id: "fatigue",
                                    amount: 2
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id: "quicksand_leave_karma",

                        text:
                            "{actor} repart fièrement... et tombe dans un second trou quelques mètres plus loin.",

                        icon:
                            "🤡",

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            28
                    },

                    {
                        id: "quicksand_leave_neutral",

                        text:
                            "{target} trouve une racine et réussit à sortir seul avant que {actor} ne soit trop loin.",

                        icon:
                            "🌿",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            12
                    }

                ]
            },


            {
                id: "quicksand_resourceful",

                title:
                    "🛠️ Construire un point d'appui",

                description:
                    "Créer rapidement un système de branches permettant à {target} de répartir son poids.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                consequences: [

                    {
                        id: "quicksand_resourceful_success",

                        text:
                            "{actor} assemble plusieurs branches et permet à {target} de sortir sans prendre le moindre risque supplémentaire.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 15 - MOUSTIQUAIRE
    // =========================================================

    {
        id: "interaction_mosquito_net",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} possède la seule moustiquaire",

        category:
            "Interaction",

        icon:
            "🦟",

        description:
            "La nuit tombe et une véritable armée de moustiques envahit le camp. " +
            "{target} possède la seule moustiquaire encore intacte.",

        choices: [

            {
                id: "mosquito_ask",

                title:
                    "🤝 Demander à partager",

                description:
                    "Se serrer un peu pour survivre à la nuit.",

                consequences: [

                    {
                        id: "mosquito_ask_good",

                        text:
                            "{target} accepte. La nuit est inconfortable mais supportable pour les deux joueurs.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            30
                    },

                    {
                        id: "mosquito_ask_bad",

                        text:
                            "{target} refuse catégoriquement et referme sa moustiquaire.",

                        icon:
                            "🦟",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            70
                    }

                ]
            },


            {
                id: "mosquito_steal",

                title:
                    "🥷 Voler la moustiquaire",

                description:
                    "Attendre que {target} s'endorme.",

                consequences: [

                    {
                        id: "mosquito_steal_good",

                        text:
                            "{actor} réussit à récupérer la moustiquaire quelques heures sans réveiller {target}.",

                        icon:
                            "😏",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id: "mosquito_steal_bad",

                        text:
                            "{target} se réveille pendant le vol. La tentative finit très mal pour {actor}.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -2
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            70
                    },

                    {
                        id: "mosquito_steal_neutral",

                        text:
                            "{actor} abandonne lorsque {target} bouge dans son sommeil.",

                        icon:
                            "👀",

                        effects: [],

                        weight:
                            15
                    }

                ]
            },


            {
                id: "mosquito_trusted",

                title:
                    "🤝 Dormir ensemble",

                description:
                    "Votre confiance mutuelle rend la question presque évidente.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "mosquito_trusted_good",

                        text:
                            "{target} ouvre directement la moustiquaire. Les deux joueurs passent une nuit étonnamment correcte.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ],

                        weight:
                            100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 16 - COFFRE LOURD
    // =========================================================

    {
        id: "interaction_heavy_chest",
        type: "interaction",
        baseWeight: 1,

        title:
            "{actor} et {target} découvrent un coffre",

        category:
            "Interaction",

        icon:
            "🧰",

        description:
            "Un coffre très lourd est coincé sous un rocher. Il faudra probablement être deux pour le récupérer.",

        choices: [

            {
                id: "chest_cooperate",

                title:
                    "🤝 Coopérer avec {target}",

                description:
                    "Soulever le rocher ensemble.",

                consequences: [

                    {
                        id: "chest_cooperate_good",

                        text:
                            "Le coffre contient plusieurs provisions. {actor} et {target} partagent équitablement le butin.",

                        icon:
                            "🎉",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id: "chest_cooperate_bad",

                        text:
                            "Le rocher glisse pendant l'effort et blesse les deux joueurs.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "target",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            50
                    },

                    {
                        id: "chest_cooperate_neutral",

                        text:
                            "Après de longues minutes d'effort, le coffre refuse toujours de bouger. Au moins, personne n'a abandonné l'autre.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]
            },


            {
                id: "chest_alone",

                title:
                    "💪 Essayer seul",

                description:
                    "{actor} veut garder tout le contenu.",

                consequences: [

                    {
                        id: "chest_alone_good",

                        text:
                            "Contre toute attente, {actor} réussit seul et garde les provisions. {target} apprécie assez peu le spectacle.",

                        icon:
                            "💪",

                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            8
                    },

                    {
                        id: "chest_alone_bad",

                        text:
                            "{actor} se bloque le dos en essayant de soulever le rocher seul.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],

                        weight:
                            72
                    },

                    {
                        id: "chest_alone_neutral",

                        text:
                            "{actor} pousse de toutes ses forces mais le coffre ne bouge pas d'un centimètre.",

                        icon:
                            "🥵",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],

                        weight:
                            20
                    }

                ]
            },


            {
                id: "chest_trusted",

                title:
                    "🤝 Organiser l'effort",

                description:
                    "Votre confiance permet de coordonner parfaitement le déplacement du rocher.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "chest_trusted_success",

                        text:
                            "{actor} et {target} synchronisent parfaitement leurs efforts. Le rocher bascule et le coffre s'ouvre.",

                        icon:
                            "🧰",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            }
                        ],

                        weight:
                            100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 17 - RETOUR AU PONT
    // SUITE DE interaction_bridge
    // =========================================================

    {
        id: "interaction_bridge_return",
        type: "interaction",
        baseWeight: 1,

        requirements: {
            all: [
                "interaction_bridge_crossed"
            ]
        },

        title:
            "{actor} et {target} doivent retraverser le pont",

        category:
            "Suite",

        icon:
            "🌉",

        description:
            "Le vieux pont est toujours là, mais plusieurs planches ont disparu depuis votre premier passage.",

        choices: [

            {
                id: "bridge_return_actor",

                title:
                    "🧗 Ouvrir la voie",

                description:
                    "{actor} traverse en premier pour montrer le chemin.",

                consequences: [

                    {
                        id: "bridge_return_actor_good",

                        text:
                            "{actor} repère les points solides et permet à {target} de traverser sans incident.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id: "bridge_return_actor_bad",

                        text:
                            "Une planche casse et {actor} manque de tomber dans le vide.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            52
                    }

                ]
            },


            {
                id: "bridge_return_target",

                title:
                    "👉 Envoyer encore {target}",

                description:
                    "Visiblement, certaines habitudes restent.",

                consequences: [

                    {
                        id: "bridge_return_target_bad",

                        text:
                            "{target} manque de tomber et commence sérieusement à comprendre le fonctionnement de votre relation.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target: "target",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id: "bridge_return_target_safe",

                        text:
                            "{target} traverse sans problème, mais se retourne immédiatement pour demander pourquoi c'est toujours lui qui teste les ponts.",

                        icon:
                            "🙄",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            40
                    }

                ]
            },


            {
                id: "bridge_return_team",

                title:
                    "🪢 Traverser attachés",

                description:
                    "Votre confiance permet de progresser en vous assurant mutuellement.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "bridge_return_team_good",

                        text:
                            "Vous traversez lentement, attachés à la même corde. Le pont tient jusqu'au dernier pas.",

                        icon:
                            "🪢",

                        effects: [],

                        weight:
                            100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 18 - NOUVEAU : NUIT DE GARDE
    // =========================================================

    {
        id: "interaction_night_watch",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} s'endort pendant son tour de garde",

        category:
            "Interaction",

        icon:
            "🌙",

        description:
            "{actor} découvre {target} profondément endormi alors qu'il devait surveiller le camp.",

        choices: [

            {
                id: "night_watch_replace",

                title:
                    "🛡️ Prendre sa place",

                description:
                    "Laisser {target} dormir et assurer la garde.",

                consequences: [

                    {
                        id: "night_watch_replace_good",

                        text:
                            "{actor} assure le reste de la garde. Au réveil, {target} réalise ce qu'il a fait et lui promet de lui rendre la pareille.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true,
                                    protection: 2
                                }
                            }
                        ],

                        weight:
                            75
                    },

                    {
                        id: "night_watch_replace_danger",

                        text:
                            "En remplaçant {target}, {actor} doit faire fuir un animal attiré par le camp.",

                        icon:
                            "🐗",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            25
                    }

                ]
            },


            {
                id: "night_watch_wake",

                title:
                    "📢 Réveiller {target}",

                description:
                    "Il avait une mission, qu'il l'assume.",

                consequences: [

                    {
                        id: "night_watch_wake_neutral",

                        text:
                            "{target} se réveille en sursaut et reprend sa garde, légèrement honteux.",

                        icon:
                            "😬",

                        effects: [],

                        weight:
                            70
                    },

                    {
                        id: "night_watch_wake_argument",

                        text:
                            "{target} prend très mal le réveil brutal et une dispute éclate.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 19 - NOUVEAU : ANTIDOTE UNIQUE
    // =========================================================

    {
        id: "interaction_antidote",
        type: "interaction",
        baseWeight: 0.8,

        title:
            "{actor} trouve une dose d'antidote",

        category:
            "Interaction",

        icon:
            "💉",

        description:
            "{actor} découvre une petite trousse contenant une seule dose d'un produit pouvant neutraliser certains poisons. " +
            "{target} semble en avoir sérieusement besoin.",

        choices: [

            {
                id: "antidote_give",

                title:
                    "💉 Donner l'antidote à {target}",

                description:
                    "Utiliser la seule dose pour l'aider.",

                consequences: [

                    {
                        id: "antidote_give_good",

                        text:
                            "Le produit fonctionne. {target} récupère progressivement et n'oublie pas le geste de {actor}.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target: "target",
                                removeStatus: "poisoned"
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            85
                    },

                    {
                        id: "antidote_give_neutral",

                        text:
                            "Le produit ne semble pas très efficace, mais {target} apprécie l'intention.",

                        icon:
                            "💉",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight:
                            15
                    }

                ]
            },


            {
                id: "antidote_keep",

                title:
                    "🎒 Garder l'antidote",

                description:
                    "Il pourrait servir à {actor} plus tard.",

                consequences: [

                    {
                        id: "antidote_keep_seen",

                        text:
                            "{target} voit clairement {actor} ranger l'antidote alors qu'il aurait pu l'aider.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id: "antidote_keep_secret",

                        text:
                            "{actor} cache discrètement l'antidote. {target} ne remarque rien.",

                        icon:
                            "🤫",

                        effects: [],

                        weight:
                            40
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 20 - NOUVEAU : CORDE AU-DESSUS DU RAVIN
    // =========================================================

    {
        id: "interaction_ravine_rope",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} est suspendu au-dessus d'un ravin",

        category:
            "Interaction",

        icon:
            "🪢",

        description:
            "Une vieille corde a cédé pendant la traversée. {target} est maintenant suspendu quelques mètres plus bas. " +
            "{actor} est la seule personne suffisamment proche pour intervenir.",

        choices: [

            {
                id: "ravine_pull",

                title:
                    "💪 Tirer {target}",

                description:
                    "Utiliser toute ta force pour le remonter.",

                consequences: [

                    {
                        id: "ravine_pull_good",

                        text:
                            "{actor} réussit à remonter {target}. Le sauvetage crée forcément un lien entre eux.",

                        icon:
                            "🦸",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true,
                                    protection: 2
                                }
                            }
                        ],

                        weight:
                            38
                    },

                    {
                        id: "ravine_pull_bad",

                        text:
                            "{actor} parvient à sauver {target}, mais se blesse sérieusement pendant l'effort.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            47
                    },

                    {
                        id: "ravine_pull_fail",

                        text:
                            "La corde glisse encore. {target} chute quelques mètres avant de s'accrocher à une corniche.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "target",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],

                        weight:
                            15
                    }

                ]
            },


            {
                id: "ravine_leave",

                title:
                    "🚶 Ne pas prendre le risque",

                description:
                    "Une chute supplémentaire pourrait entraîner {actor} avec lui.",

                consequences: [

                    {
                        id: "ravine_leave_escape",

                        text:
                            "{target} réussit finalement à remonter par une autre paroi. Son premier regard vers {actor} suffit à résumer la situation.",

                        icon:
                            "😠",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id: "ravine_leave_bad",

                        text:
                            "{target} chute sur une corniche plus basse avant de trouver une sortie.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "target",
                                lives: -2,
                                tags: ["physical"]
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight:
                            45
                    }

                ]
            },


            {
                id: "ravine_resourceful",

                title:
                    "🛠️ Créer un système de poulie",

                description:
                    "Utiliser un arbre et une seconde corde pour réduire fortement l'effort.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                consequences: [

                    {
                        id: "ravine_resourceful_success",

                        text:
                            "Le système improvisé fonctionne. {actor} remonte {target} progressivement et sans danger.",

                        icon:
                            "🪢",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight:
                            100
                    }

                ]
            }

        ]
    }

];