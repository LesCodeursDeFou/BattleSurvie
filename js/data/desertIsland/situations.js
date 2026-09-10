export const SITUATIONS = [

    // =========================================================
    // 1 - HORDE DE SINGES
    // CLASSIQUE
    // =========================================================

    {
        id: "monkey_horde",
        title: "Une horde de singes arrive !",
        category: "Danger",
        icon: "🐒",
        baseWeight: 1,

        description:
            "Des cris retentissent derrière toi. Une horde entière de singes fonce dans ta direction.",

        choices: [

            {
                id: "monkey_run",
                title: "🏃 Courir",
                description:
                    "Tes jambes vont devoir faire le travail.",

                consequences: [

                    {
                        id: "monkey_run_bad",
                        text:
                            "Tu découvres brutalement que ton cardio n'est pas au niveau. Les singes te rattrapent.",
                        lives: -1,
                        icon: "🥵",
                        weight: 65
                    },

                    {
                        id: "monkey_run_neutral",
                        text:
                            "Tu trouves un passage étroit entre deux rochers. Les singes abandonnent la poursuite.",
                        lives: 0,
                        icon: "😮‍💨",
                        weight: 35
                    }

                ]
            },

            {
                id: "monkey_fight",
                title: "💪 Se battre",
                description:
                    "Tu regardes tes biceps. Ça devrait suffire.",

                consequences: [

                    {
                        id: "monkey_fight_win",
                        text:
                            "Contre toute logique, tu mets la horde en déroute. Tu vas raconter ça pendant des années.",
                        lives: 2,
                        icon: "💪",
                        weight: 10
                    },

                    {
                        id: "monkey_fight_lose",
                        text:
                            "Les singes étaient plus nombreux, plus rapides et apparemment mieux entraînés.",
                        lives: -2,
                        icon: "💀",
                        weight: 90
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - NOIX DE COCO
    // CLASSIQUE
    // =========================================================

    {
        id: "coconut",
        title: "Une noix de coco tombe devant toi",
        category: "Survie",
        icon: "🥥",
        baseWeight: 1,

        description:
            "Tu n'as rien mangé depuis des heures. Une noix de coco vient de tomber à quelques centimètres de toi.",

        choices: [

            {
                id: "coconut_eat",
                title: "😋 La manger",
                description:
                    "De la nourriture gratuite, que demander de plus ?",

                consequences: [

                    {
                        id: "coconut_eat_good",
                        text:
                            "Elle est parfaite. Tu récupères un peu d'énergie.",
                        lives: 1,
                        icon: "😋",
                        weight: 15
                    },

                    {
                        id: "coconut_eat_bad",
                        text:
                            "Elle était complètement pourrie. Ton estomac déclare immédiatement la guerre.",
                        lives: -1,
                        icon: "🤢",
                        weight: 85
                    }

                ]
            },

            {
                id: "coconut_leave",
                title: "🚶 L'ignorer",
                description:
                    "Ça paraît beaucoup trop facile.",

                consequences: [

                    {
                        id: "coconut_leave_neutral",
                        text:
                            "Tu poursuis simplement ton chemin. Au moins, ton estomac reste tranquille.",
                        lives: 0,
                        icon: "😌",
                        weight: 82
                    },

                    {
                        id: "coconut_leave_good",
                        text:
                            "Un énorme singe arrive pour récupérer la noix. Ton instinct vient probablement de te sauver.",
                        lives: 1,
                        icon: "🐒",
                        weight: 18
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 3 - GROTTE
    // DÉBUT HISTOIRE GROTTE
    // =========================================================

    {
        id: "cave",
        title: "Tu découvres une immense grotte",
        category: "Exploration",
        icon: "⛰️",
        baseWeight: 1,

        description:
            "La nuit approche. La grotte pourrait constituer un excellent abri, mais son entrée disparaît rapidement dans l'obscurité.",

        choices: [

            {
                id: "cave_enter",
                title: "🔦 Entrer",
                description:
                    "Tu décides d'explorer l'intérieur.",

                narrative: {

                    setFlags: [
                        "cave_entered"
                    ],

                    removeFlags: [
                        "cave_abandoned"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "cave_deeper",
                            weight: 28
                        }
                    ]

                },

                consequences: [

                    {
                        id: "cave_enter_ok",
                        text:
                            "L'entrée semble calme. Tu trouves même quelques traces montrant que quelqu'un est déjà passé par ici.",
                        lives: 0,
                        icon: "👣",
                        weight: 55,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "cave_deeper",
                                    weight: 38
                                }
                            ]

                        }
                    },

                    {
                        id: "cave_enter_bad",
                        text:
                            "Un sanglier caché dans l'obscurité te surprend et te force à reculer précipitamment.",
                        lives: -2,
                        icon: "🐗",
                        weight: 45,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "cave_deeper",
                                    weight: 4
                                }
                            ]

                        }
                    }

                ]
            },

            {
                id: "cave_outside",
                title: "🏕️ Rester dehors",
                description:
                    "Tu préfères ne pas découvrir ce qui vit là-dedans.",

                narrative: {

                    setFlags: [
                        "cave_abandoned"
                    ],

                    removeFlags: [
                        "cave_entered",
                        "cave_deep_path"
                    ]

                },

                consequences: [

                    {
                        id: "cave_outside_neutral",
                        text:
                            "La nuit est inconfortable mais relativement calme.",
                        lives: 0,
                        icon: "🌙",
                        weight: 70
                    },

                    {
                        id: "cave_outside_bad",
                        text:
                            "Une pluie torrentielle tombe toute la nuit. Tu ne dors pratiquement pas.",
                        lives: -1,
                        icon: "🌧️",
                        weight: 30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 4 - SERPENT
    // CLASSIQUE
    // =========================================================

    {
        id: "snake",
        title: "Un serpent bloque le passage",
        category: "Danger",
        icon: "🐍",
        baseWeight: 1,

        description:
            "Un énorme serpent est enroulé juste devant toi et semble particulièrement attentif à tes mouvements.",

        choices: [

            {
                id: "snake_pass",
                title: "🥷 Passer doucement",
                description:
                    "Tu avances le plus lentement possible.",

                consequences: [

                    {
                        id: "snake_pass_neutral",
                        text:
                            "Tu passes sans faire de bruit. Le serpent ne bouge même pas.",
                        lives: 0,
                        icon: "😮‍💨",
                        weight: 55
                    },

                    {
                        id: "snake_pass_bad",
                        text:
                            "Une branche craque sous ton pied. Le serpent apprécie moyennement.",
                        lives: -2,
                        icon: "🐍",
                        weight: 45
                    }

                ]
            },

            {
                id: "snake_throw",
                title: "🪨 Lui jeter une pierre",
                description:
                    "La négociation n'est visiblement pas ton fort.",

                consequences: [

                    {
                        id: "snake_throw_good",
                        text:
                            "La pierre tombe juste devant lui et le fait fuir.",
                        lives: 1,
                        icon: "🎯",
                        weight: 20
                    },

                    {
                        id: "snake_throw_bad",
                        text:
                            "Tu rates le serpent mais réussis parfaitement à l'énerver.",
                        lives: -2,
                        icon: "😬",
                        weight: 80
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 5 - CABANE
    // DÉBUT HISTOIRE CABANE
    // =========================================================

    {
        id: "abandoned_hut",
        title: "Tu trouves une cabane abandonnée",
        category: "Exploration",
        icon: "🛖",
        baseWeight: 1,

        description:
            "Une vieille cabane apparaît derrière les arbres. La porte est entrouverte et l'intérieur est plongé dans l'obscurité.",

        choices: [

            {
                id: "hut_enter",
                title: "🚪 Entrer",
                description:
                    "Quel est le pire qui puisse arriver ?",

                narrative: {

                    setFlags: [
                        "hut_entered"
                    ],

                    removeFlags: [
                        "hut_abandoned"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "hut_inside",
                            weight: 30
                        }
                    ]

                },

                consequences: [

                    {
                        id: "hut_enter_good",
                        text:
                            "Tu trouves quelques conserves, une vieille lampe et plusieurs objets encore utilisables.",
                        lives: 1,
                        icon: "🥫",
                        weight: 20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "hut_inside",
                                    weight: 42
                                }
                            ]

                        }
                    },

                    {
                        id: "hut_enter_bad",
                        text:
                            "Le plancher cède sous ton pied. Tu réussis à ressortir, légèrement moins enthousiaste qu'avant.",
                        lives: -2,
                        icon: "🕳️",
                        weight: 80,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "hut_inside",
                                    weight: 5
                                }
                            ]

                        }
                    }

                ]
            },

            {
                id: "hut_ignore",
                title: "🚶 Continuer",
                description:
                    "Tu as vu suffisamment de films d'horreur.",

                narrative: {

                    setFlags: [
                        "hut_abandoned"
                    ],

                    removeFlags: [
                        "hut_entered",
                        "hut_floor_checked",
                        "hut_key"
                    ]

                },

                consequences: [

                    {
                        id: "hut_ignore_neutral",
                        text:
                            "Tu laisses la cabane derrière toi et continues ton exploration.",
                        lives: 0,
                        icon: "😌",
                        weight: 85
                    },

                    {
                        id: "hut_ignore_bad",
                        text:
                            "En voulant contourner la cabane, tu te retrouves dans une végétation extrêmement dense.",
                        lives: -1,
                        icon: "🌿",
                        weight: 15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - TEMPÊTE
    // CLASSIQUE
    // =========================================================

    {
        id: "storm",
        title: "Une énorme tempête approche",
        category: "Météo",
        icon: "⛈️",
        baseWeight: 1,

        description:
            "Le ciel devient noir et le vent commence à souffler extrêmement fort.",

        choices: [

            {
                id: "storm_tree",
                title: "🌳 S'abriter sous un arbre",
                description:
                    "C'est l'abri le plus proche.",

                consequences: [

                    {
                        id: "storm_tree_neutral",
                        text:
                            "L'arbre résiste et te protège d'une bonne partie de la pluie.",
                        lives: 0,
                        icon: "🌳",
                        weight: 35
                    },

                    {
                        id: "storm_tree_bad",
                        text:
                            "Une énorme branche tombe à quelques centimètres de toi. Enfin... pas suffisamment loin.",
                        lives: -2,
                        icon: "🪵",
                        weight: 65
                    }

                ]
            },

            {
                id: "storm_rocks",
                title: "⛰️ Chercher un abri rocheux",
                description:
                    "Tu cours vers une zone de rochers.",

                consequences: [

                    {
                        id: "storm_rocks_good",
                        text:
                            "Tu trouves une petite cavité parfaitement protégée.",
                        lives: 1,
                        icon: "😌",
                        weight: 22
                    },

                    {
                        id: "storm_rocks_bad",
                        text:
                            "Tu glisses sur la roche mouillée et termines quelques mètres plus bas.",
                        lives: -1,
                        icon: "🤕",
                        weight: 78
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - RIVIÈRE
    // DÉBUT HISTOIRE RIVIÈRE
    // =========================================================

    {
        id: "river",
        title: "Une rivière bloque ton chemin",
        category: "Exploration",
        icon: "🌊",
        baseWeight: 1,

        description:
            "Le courant est puissant. Tu peux tenter de traverser ou suivre la rivière pour découvrir où elle mène.",

        choices: [

            {
                id: "river_swim",
                title: "🏊 Traverser",
                description:
                    "Quelques mètres seulement... normalement.",

                narrative: {

                    setFlags: [
                        "river_crossed"
                    ],

                    removeFlags: [
                        "river_followed"
                    ]

                },

                consequences: [

                    {
                        id: "river_swim_good",
                        text:
                            "Tu réussis à atteindre l'autre rive.",
                        lives: 1,
                        icon: "🏊",
                        weight: 20
                    },

                    {
                        id: "river_swim_bad",
                        text:
                            "Le courant t'emporte et te projette contre plusieurs rochers.",
                        lives: -2,
                        icon: "🌊",
                        weight: 80
                    }

                ]
            },

            {
                id: "river_follow",
                title: "🥾 Suivre la rivière",
                description:
                    "Une rivière mène forcément quelque part.",

                narrative: {

                    setFlags: [
                        "river_followed"
                    ],

                    removeFlags: [
                        "river_crossed"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "waterfall",
                            weight: 30
                        }
                    ]

                },

                consequences: [

                    {
                        id: "river_follow_neutral",
                        text:
                            "Le chemin longeant la rivière est étonnamment facile à suivre.",
                        lives: 0,
                        icon: "🌿",
                        weight: 70,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "waterfall",
                                    weight: 40
                                }
                            ]

                        }
                    },

                    {
                        id: "river_follow_bad",
                        text:
                            "La végétation devient extrêmement dense et ralentit fortement ta progression.",
                        lives: -1,
                        icon: "🌿",
                        weight: 30,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "waterfall",
                                    weight: 7
                                }
                            ]

                        }
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - SANGLIER
    // CLASSIQUE
    // =========================================================

    {
        id: "boar",
        title: "Un sanglier te charge",
        category: "Danger",
        icon: "🐗",
        baseWeight: 1,

        description:
            "Tu entends un grognement puis vois un énorme sanglier foncer droit vers toi.",

        choices: [

            {
                id: "boar_tree",
                title: "🌴 Grimper à un arbre",
                description:
                    "Il faut juste être plus rapide que lui.",

                consequences: [

                    {
                        id: "boar_tree_neutral",
                        text:
                            "Tu atteins une branche juste à temps. Le sanglier finit par repartir.",
                        lives: 0,
                        icon: "😮‍💨",
                        weight: 55
                    },

                    {
                        id: "boar_tree_bad",
                        text:
                            "Tu découvres que grimper à un arbre demande un minimum de technique.",
                        lives: -1,
                        icon: "😵",
                        weight: 45
                    }

                ]
            },

            {
                id: "boar_dodge",
                title: "💨 L'esquiver",
                description:
                    "Tu te prends soudainement pour un torero.",

                consequences: [

                    {
                        id: "boar_dodge_good",
                        text:
                            "Esquive parfaite. Le sanglier termine sa course dans un buisson.",
                        lives: 1,
                        icon: "😎",
                        weight: 18
                    },

                    {
                        id: "boar_dodge_bad",
                        text:
                            "Tu avais oublié un détail essentiel : tu n'es effectivement pas torero.",
                        lives: -2,
                        icon: "💥",
                        weight: 82
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 9 - INTÉRIEUR DE LA CABANE
    // SUITE CABANE
    // =========================================================

    {
        id: "hut_inside",
        title: "Tu explores plus sérieusement la cabane",
        category: "Suite",
        icon: "🛖",
        baseWeight: 1,

        requirements: {

            all: [
                "hut_entered"
            ],

            not: [
                "hut_abandoned"
            ]

        },

        description:
            "Quelque chose dans cette cabane continue de t'intriguer. Tu décides d'inspecter les lieux plus attentivement.",

        choices: [

            {
                id: "hut_inside_floor",
                title: "🪵 Inspecter le plancher",
                description:
                    "Certaines lattes semblent avoir été déplacées.",

                narrative: {

                    setFlags: [
                        "hut_floor_checked"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "hut_trapdoor",
                            weight: 32
                        }
                    ]

                },

                consequences: [

                    {
                        id: "hut_inside_floor_good",
                        text:
                            "Sous une latte, tu découvres une petite clé rouillée.",
                        lives: 0,
                        icon: "🗝️",
                        weight: 55,

                        narrative: {

                            setFlags: [
                                "hut_key"
                            ],

                            nextSituationBoosts: [
                                {
                                    id: "hut_trapdoor",
                                    weight: 45
                                }
                            ]

                        }
                    },

                    {
                        id: "hut_inside_floor_bad",
                        text:
                            "Une latte casse et ta jambe traverse brutalement le plancher.",
                        lives: -1,
                        icon: "🤕",
                        weight: 45,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "hut_trapdoor",
                                    weight: 8
                                }
                            ]

                        }
                    }

                ]
            },

            {
                id: "hut_inside_leave",
                title: "🚪 Quitter la cabane",
                description:
                    "Tu as déjà suffisamment tenté ta chance.",

                narrative: {

                    setFlags: [
                        "hut_abandoned"
                    ],

                    removeFlags: [
                        "hut_entered",
                        "hut_floor_checked",
                        "hut_key"
                    ]

                },

                consequences: [

                    {
                        id: "hut_inside_leave_neutral",
                        text:
                            "Tu quittes définitivement la cabane sans incident.",
                        lives: 0,
                        icon: "🚶",
                        weight: 88
                    },

                    {
                        id: "hut_inside_leave_bad",
                        text:
                            "Une planche du toit se détache au moment où tu passes la porte.",
                        lives: -1,
                        icon: "🪵",
                        weight: 12
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 10 - ABEILLES
    // CLASSIQUE
    // =========================================================

    {
        id: "bees",
        title: "Tu trouves une énorme ruche",
        category: "Nourriture",
        icon: "🐝",
        baseWeight: 1,

        description:
            "La ruche déborde de miel. Elle déborde également d'abeilles.",

        choices: [

            {
                id: "bees_honey",
                title: "🍯 Prendre du miel",
                description:
                    "Le risque semble acceptable.",

                consequences: [

                    {
                        id: "bees_honey_good",
                        text:
                            "Tu réussis à récupérer un peu de miel sans provoquer la colonie.",
                        lives: 2,
                        icon: "🍯",
                        weight: 12
                    },

                    {
                        id: "bees_honey_bad",
                        text:
                            "Les abeilles ne semblent absolument pas d'accord avec ton concept du partage.",
                        lives: -2,
                        icon: "🐝",
                        weight: 88
                    }

                ]
            },

            {
                id: "bees_leave",
                title: "🚶 Partir",
                description:
                    "Tu tiens beaucoup à ton visage actuel.",

                consequences: [

                    {
                        id: "bees_leave_neutral",
                        text:
                            "Tu t'éloignes tranquillement. Pour une fois, une décision raisonnable.",
                        lives: 0,
                        icon: "😌",
                        weight: 85
                    },

                    {
                        id: "bees_leave_bad",
                        text:
                            "Une abeille particulièrement rancunière te suit quand même.",
                        lives: -1,
                        icon: "😑",
                        weight: 15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 11 - PLUS PROFOND DANS LA GROTTE
    // SUITE GROTTE
    // =========================================================

    {
        id: "cave_deeper",
        title: "Un passage s'enfonce plus profondément dans la grotte",
        category: "Suite",
        icon: "🕯️",
        baseWeight: 1,

        requirements: {

            all: [
                "cave_entered"
            ],

            not: [
                "cave_abandoned"
            ]

        },

        description:
            "Tu reconnais l'endroit exploré précédemment. Cette fois, tu remarques une galerie étroite qui descend encore plus profondément.",

        choices: [

            {
                id: "cave_deeper_continue",
                title: "🕯️ Continuer",
                description:
                    "Tu veux savoir ce qui se trouve au fond.",

                narrative: {

                    setFlags: [
                        "cave_deep_path"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "cave_lake",
                            weight: 28
                        }
                    ]

                },

                consequences: [

                    {
                        id: "cave_deeper_continue_neutral",
                        text:
                            "La galerie est étroite mais praticable. Tu entends de l'eau couler quelque part plus loin.",
                        lives: 0,
                        icon: "💧",
                        weight: 62,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "cave_lake",
                                    weight: 42
                                }
                            ]

                        }
                    },

                    {
                        id: "cave_deeper_continue_bad",
                        text:
                            "Une partie du plafond s'effondre derrière toi. Tu réussis à passer, mais de justesse.",
                        lives: -1,
                        icon: "🪨",
                        weight: 38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "cave_lake",
                                    weight: 6
                                }
                            ]

                        }
                    }

                ]
            },

            {
                id: "cave_deeper_leave",
                title: "↩️ Faire demi-tour",
                description:
                    "Tu as déjà poussé l'exploration suffisamment loin.",

                narrative: {

                    setFlags: [
                        "cave_abandoned"
                    ],

                    removeFlags: [
                        "cave_entered",
                        "cave_deep_path"
                    ]

                },

                consequences: [

                    {
                        id: "cave_deeper_leave_neutral",
                        text:
                            "Tu retrouves l'extérieur sans difficulté.",
                        lives: 0,
                        icon: "☀️",
                        weight: 90
                    },

                    {
                        id: "cave_deeper_leave_bad",
                        text:
                            "Tu te cognes violemment contre une paroi dans l'obscurité.",
                        lives: -1,
                        icon: "💫",
                        weight: 10
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 12 - FEU AU CAMP
    // CLASSIQUE
    // =========================================================

    {
        id: "fire",
        title: "Ton camp commence à brûler",
        category: "Urgence",
        icon: "🔥",
        baseWeight: 1,

        description:
            "Une braise a mis le feu aux feuilles autour de ton camp.",

        choices: [

            {
                id: "fire_water",
                title: "💧 Chercher de l'eau",
                description:
                    "La solution la plus logique.",

                consequences: [

                    {
                        id: "fire_water_good",
                        text:
                            "Tu reviens suffisamment vite et maîtrises l'incendie.",
                        lives: 1,
                        icon: "🪣",
                        weight: 25
                    },

                    {
                        id: "fire_water_bad",
                        text:
                            "À ton retour, le feu a déjà dévoré une partie de tes affaires.",
                        lives: -1,
                        icon: "🔥",
                        weight: 75
                    }

                ]
            },

            {
                id: "fire_stomp",
                title: "🥾 Écraser les flammes",
                description:
                    "Tes chaussures devraient survivre... probablement.",

                consequences: [

                    {
                        id: "fire_stomp_good",
                        text:
                            "Aussi étonnant que cela puisse paraître, ton plan fonctionne.",
                        lives: 1,
                        icon: "🥾",
                        weight: 12
                    },

                    {
                        id: "fire_stomp_bad",
                        text:
                            "Tu comprends rapidement pourquoi les pompiers n'utilisent pas cette technique.",
                        lives: -2,
                        icon: "🔥",
                        weight: 88
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 13 - FALAISE
    // CLASSIQUE
    // =========================================================

    {
        id: "cliff",
        title: "Une falaise coupe ton itinéraire",
        category: "Exploration",
        icon: "⛰️",
        baseWeight: 1,

        description:
            "Tu dois soit descendre la paroi, soit faire un long détour à travers la jungle.",

        choices: [

            {
                id: "cliff_climb",
                title: "🧗 Descendre",
                description:
                    "Tu trouves quelques prises dans la roche.",

                consequences: [

                    {
                        id: "cliff_climb_good",
                        text:
                            "Tu descends parfaitement et gagnes beaucoup de temps.",
                        lives: 1,
                        icon: "🧗",
                        weight: 18
                    },

                    {
                        id: "cliff_climb_bad",
                        text:
                            "Une pierre se détache et tu termines la descente beaucoup plus vite que prévu.",
                        lives: -2,
                        icon: "😵",
                        weight: 82
                    }

                ]
            },

            {
                id: "cliff_detour",
                title: "🌿 Faire le détour",
                description:
                    "Long mais beaucoup moins risqué.",

                consequences: [

                    {
                        id: "cliff_detour_neutral",
                        text:
                            "Le détour est fatigant mais sans incident.",
                        lives: 0,
                        icon: "👍",
                        weight: 72
                    },

                    {
                        id: "cliff_detour_bad",
                        text:
                            "Tu passes plusieurs heures à te frayer un chemin dans la végétation.",
                        lives: -1,
                        icon: "🌿",
                        weight: 28
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 14 - CASCADE
    // SUITE RIVIÈRE
    // =========================================================

    {
        id: "waterfall",
        title: "Le grondement d'une cascade résonne devant toi",
        category: "Suite",
        icon: "🏞️",
        baseWeight: 1,

        requirements: {

            all: [
                "river_followed"
            ]

        },

        description:
            "En suivant la rivière, tu finis par déboucher devant une immense cascade. L'eau semble fraîche et claire.",

        choices: [

            {
                id: "waterfall_drink",
                title: "💧 Boire directement",
                description:
                    "Tu es complètement déshydraté.",

                consequences: [

                    {
                        id: "waterfall_drink_good",
                        text:
                            "L'eau est parfaitement potable et te redonne de l'énergie.",
                        lives: 2,
                        icon: "💧",
                        weight: 12
                    },

                    {
                        id: "waterfall_drink_bad",
                        text:
                            "L'eau était beaucoup moins pure qu'elle n'en avait l'air.",
                        lives: -2,
                        icon: "🤢",
                        weight: 88
                    }

                ]
            },

            {
                id: "waterfall_explore",
                title: "👀 Explorer derrière la cascade",
                description:
                    "Tu distingues une cavité derrière le rideau d'eau.",

                narrative: {

                    setFlags: [
                        "waterfall_explored"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "hidden_lagoon",
                            weight: 24
                        }
                    ]

                },

                consequences: [

                    {
                        id: "waterfall_explore_neutral",
                        text:
                            "Le passage existe réellement. Tu découvres des traces menant plus loin.",
                        lives: 0,
                        icon: "👣",
                        weight: 68,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "hidden_lagoon",
                                    weight: 38
                                }
                            ]

                        }
                    },

                    {
                        id: "waterfall_explore_bad",
                        text:
                            "Les rochers sont extrêmement glissants et tu chutes lourdement.",
                        lives: -1,
                        icon: "🤕",
                        weight: 32,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "hidden_lagoon",
                                    weight: 5
                                }
                            ]

                        }
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 15 - CRABE GÉANT
    // CLASSIQUE
    // =========================================================

    {
        id: "giant_crab",
        title: "Un crabe gigantesque protège la plage",
        category: "Danger",
        icon: "🦀",
        baseWeight: 1,

        description:
            "Un crabe anormalement gros se tient entre toi et une zone remplie de coquillages comestibles.",

        choices: [

            {
                id: "crab_fight",
                title: "🥊 L'affronter",
                description:
                    "Ce n'est qu'un crabe... techniquement.",

                consequences: [

                    {
                        id: "crab_fight_good",
                        text:
                            "Tu remportes ce duel profondément ridicule et récupères de la nourriture.",
                        lives: 2,
                        icon: "🏆",
                        weight: 10
                    },

                    {
                        id: "crab_fight_bad",
                        text:
                            "Une pince géante se referme sur ton pied. Tu regrettes immédiatement ton arrogance.",
                        lives: -2,
                        icon: "🦀",
                        weight: 90
                    }

                ]
            },

            {
                id: "crab_distract",
                title: "🥥 Le distraire",
                description:
                    "Tu lui lances une noix de coco.",

                consequences: [

                    {
                        id: "crab_distract_good",
                        text:
                            "Le crabe suit la noix de coco. Tu passes tranquillement.",
                        lives: 1,
                        icon: "😎",
                        weight: 22
                    },

                    {
                        id: "crab_distract_bad",
                        text:
                            "Le crabe ignore totalement la noix et semble maintenant encore plus énervé.",
                        lives: -1,
                        icon: "😬",
                        weight: 78
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 16 - SAC À DOS
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "backpack",
        title: "Tu trouves un sac à dos abandonné",
        category: "Mystère",
        icon: "🎒",
        baseWeight: 1,

        description:
            "Un sac à dos en bon état se trouve au milieu du chemin. Il semble avoir été abandonné récemment.",

        choices: [

            {
                id: "backpack_open",
                title: "🎒 L'ouvrir",
                description:
                    "Il pourrait contenir quelque chose d'utile.",

                narrative: {

                    setFlags: [
                        "backpack_opened"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "backpack_tracks",
                            weight: 18
                        }
                    ]

                },

                consequences: [

                    {
                        id: "backpack_open_good",
                        text:
                            "Tu trouves quelques outils et une carte dessinée à la main.",
                        lives: 1,
                        icon: "🗺️",
                        weight: 18,

                        narrative: {

                            setFlags: [
                                "backpack_map"
                            ],

                            nextSituationBoosts: [
                                {
                                    id: "backpack_tracks",
                                    weight: 34
                                }
                            ]

                        }
                    },

                    {
                        id: "backpack_open_bad",
                        text:
                            "Une colonie d'insectes avait transformé le sac en appartement.",
                        lives: -1,
                        icon: "🪳",
                        weight: 82,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "backpack_tracks",
                                    weight: 3
                                }
                            ]

                        }
                    }

                ]
            },

            {
                id: "backpack_leave",
                title: "🚫 Ne pas y toucher",
                description:
                    "Un sac abandonné au milieu de nulle part ? Suspect.",

                narrative: {

                    setFlags: [
                        "backpack_ignored"
                    ],

                    removeFlags: [
                        "backpack_opened",
                        "backpack_map"
                    ]

                },

                consequences: [

                    {
                        id: "backpack_leave_neutral",
                        text:
                            "Tu continues simplement ton chemin.",
                        lives: 0,
                        icon: "🚶",
                        weight: 82
                    },

                    {
                        id: "backpack_leave_good",
                        text:
                            "Quelques instants plus tard, tu vois un serpent sortir du sac.",
                        lives: 1,
                        icon: "🐍",
                        weight: 18
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 17 - VIEILLE BARQUE
    // DÉBUT HISTOIRE BARQUE
    // =========================================================

    {
        id: "old_boat",
        title: "Tu découvres une vieille barque",
        category: "Exploration",
        icon: "🛶",
        baseWeight: 1,

        description:
            "Une petite barque abandonnée repose sur la plage. Malgré son âge, elle semble encore utilisable.",

        choices: [

            {
                id: "old_boat_use",
                title: "🛶 Partir avec",
                description:
                    "Explorer la côte depuis la mer.",

                narrative: {

                    setFlags: [
                        "old_boat_used"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "hidden_cove",
                            weight: 25
                        }
                    ]

                },

                consequences: [

                    {
                        id: "old_boat_use_neutral",
                        text:
                            "La barque flotte correctement et tu commences à longer la côte.",
                        lives: 0,
                        icon: "🌊",
                        weight: 58,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "hidden_cove",
                                    weight: 38
                                }
                            ]

                        }
                    },

                    {
                        id: "old_boat_use_bad",
                        text:
                            "Tu découvres un petit trou dans la coque après quelques minutes.",
                        lives: -1,
                        icon: "🫧",
                        weight: 42,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "hidden_cove",
                                    weight: 5
                                }
                            ]

                        }
                    }

                ]
            },

            {
                id: "old_boat_break",
                title: "🪵 La démonter",
                description:
                    "Le bois pourrait être utile pour ton camp.",

                narrative: {

                    setFlags: [
                        "old_boat_destroyed"
                    ],

                    removeFlags: [
                        "old_boat_used"
                    ]

                },

                consequences: [

                    {
                        id: "old_boat_break_good",
                        text:
                            "Tu récupères assez de bois pour améliorer fortement ton abri.",
                        lives: 1,
                        icon: "🛖",
                        weight: 20
                    },

                    {
                        id: "old_boat_break_bad",
                        text:
                            "Un morceau de bois pourri casse et te tombe dessus.",
                        lives: -1,
                        icon: "🤕",
                        weight: 80
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 18 - FRUIT INCONNU
    // CLASSIQUE
    // =========================================================

    {
        id: "strange_fruit",
        title: "Tu trouves un fruit totalement inconnu",
        category: "Survie",
        icon: "🍈",
        baseWeight: 1,

        description:
            "Il ressemble vaguement à un mélange entre une mangue et une grenade radioactive.",

        choices: [

            {
                id: "fruit_eat",
                title: "🍴 Le manger",
                description:
                    "Il sent plutôt bon.",

                consequences: [

                    {
                        id: "fruit_eat_good",
                        text:
                            "Incroyable : c'est probablement le meilleur fruit que tu aies mangé.",
                        lives: 2,
                        icon: "🤩",
                        weight: 10
                    },

                    {
                        id: "fruit_eat_bad",
                        text:
                            "Ton corps te confirme rapidement que cette couleur étrange était un avertissement.",
                        lives: -2,
                        icon: "🤮",
                        weight: 90
                    }

                ]
            },

            {
                id: "fruit_leave",
                title: "❌ Ne pas y toucher",
                description:
                    "Tu fais confiance à ton instinct de survie.",

                consequences: [

                    {
                        id: "fruit_leave_neutral",
                        text:
                            "Tu continues ta route sans avoir à tester ton système digestif.",
                        lives: 0,
                        icon: "😌",
                        weight: 80
                    },

                    {
                        id: "fruit_leave_good",
                        text:
                            "Un oiseau en mange puis tombe de sa branche. Bonne intuition.",
                        lives: 1,
                        icon: "🐦",
                        weight: 20
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 19 - TRAPPE DE LA CABANE
    // FIN HISTOIRE CABANE
    // =========================================================

    {
        id: "hut_trapdoor",
        title: "Tu découvres une trappe sous la cabane",
        category: "Suite",
        icon: "🚪",
        baseWeight: 1,

        requirements: {

            all: [
                "hut_floor_checked"
            ],

            not: [
                "hut_abandoned"
            ]

        },

        description:
            "Sous les vieilles planches se trouve une petite trappe. Une forte odeur d'humidité remonte de l'ouverture.",

        choices: [

            {
                id: "hut_trapdoor_open",
                title: "🔓 L'ouvrir",
                description:
                    "Tu es allé trop loin pour renoncer maintenant.",

                consequences: [

                    {
                        id: "hut_trapdoor_open_good",
                        text:
                            "Tu découvres une petite réserve étanche contenant de l'eau et du matériel médical.",
                        lives: 2,
                        icon: "🎁",
                        weight: 15
                    },

                    {
                        id: "hut_trapdoor_open_bad",
                        text:
                            "Une nuée d'insectes jaillit de la trappe dès son ouverture.",
                        lives: -2,
                        icon: "🪳",
                        weight: 85
                    }

                ]
            },

            {
                id: "hut_trapdoor_close",
                title: "🔒 La refermer",
                description:
                    "Certains secrets peuvent rester enterrés.",

                consequences: [

                    {
                        id: "hut_trapdoor_close_neutral",
                        text:
                            "Tu remets les planches en place et quittes la cabane.",
                        lives: 0,
                        icon: "😌",
                        weight: 90
                    },

                    {
                        id: "hut_trapdoor_close_bad",
                        text:
                            "En reculant, tu te cognes violemment contre une poutre basse.",
                        lives: -1,
                        icon: "💫",
                        weight: 10
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 20 - REQUIN
    // CLASSIQUE
    // =========================================================

    {
        id: "shark",
        title: "Un aileron apparaît près de toi",
        category: "Danger",
        icon: "🦈",
        baseWeight: 1,

        description:
            "Tu es dans l'eau lorsque tu aperçois un aileron tourner lentement dans ta direction.",

        choices: [

            {
                id: "shark_swim",
                title: "🏊 Nager vers la plage",
                description:
                    "Record personnel de natation en approche.",

                consequences: [

                    {
                        id: "shark_swim_good",
                        text:
                            "Tu atteins la plage à une vitesse que tu ne te connaissais pas.",
                        lives: 1,
                        icon: "🏖️",
                        weight: 10
                    },

                    {
                        id: "shark_swim_bad",
                        text:
                            "Le requin nage légèrement plus vite qu'un humain. Quelle surprise.",
                        lives: -3,
                        icon: "🦈",
                        weight: 90
                    }

                ]
            },

            {
                id: "shark_still",
                title: "🧍 Ne plus bouger",
                description:
                    "Peut-être qu'il ne t'a pas remarqué.",

                consequences: [

                    {
                        id: "shark_still_neutral",
                        text:
                            "L'aileron finit par s'éloigner.",
                        lives: 0,
                        icon: "😮‍💨",
                        weight: 55
                    },

                    {
                        id: "shark_still_bad",
                        text:
                            "Il t'avait parfaitement remarqué.",
                        lives: -2,
                        icon: "😬",
                        weight: 45
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 21 - LAC SOUTERRAIN
    // FIN HISTOIRE GROTTE
    // =========================================================

    {
        id: "cave_lake",
        title: "Tu découvres un lac souterrain",
        category: "Suite",
        icon: "💧",
        baseWeight: 1,

        requirements: {

            all: [
                "cave_deep_path"
            ],

            not: [
                "cave_abandoned"
            ]

        },

        description:
            "La galerie débouche sur une immense cavité remplie d'une eau parfaitement immobile.",

        choices: [

            {
                id: "cave_lake_drink",
                title: "💧 Goûter l'eau",
                description:
                    "Elle semble incroyablement pure.",

                consequences: [

                    {
                        id: "cave_lake_drink_good",
                        text:
                            "L'eau est fraîche et parfaitement potable.",
                        lives: 2,
                        icon: "✨",
                        weight: 15
                    },

                    {
                        id: "cave_lake_drink_bad",
                        text:
                            "L'eau contenait manifestement quelque chose que ton organisme n'apprécie pas.",
                        lives: -2,
                        icon: "🤢",
                        weight: 85
                    }

                ]
            },

            {
                id: "cave_lake_leave",
                title: "↩️ Ne pas y toucher",
                description:
                    "Une eau parfaitement immobile sous terre ne t'inspire pas confiance.",

                consequences: [

                    {
                        id: "cave_lake_leave_neutral",
                        text:
                            "Tu observes quelques instants puis décides de repartir.",
                        lives: 0,
                        icon: "🧠",
                        weight: 88
                    },

                    {
                        id: "cave_lake_leave_bad",
                        text:
                            "En repartant, tu glisses sur une pierre humide.",
                        lives: -1,
                        icon: "🤕",
                        weight: 12
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 22 - BATEAU AU LOIN
    // CLASSIQUE
    // =========================================================

    {
        id: "boat",
        title: "Tu aperçois un bateau au loin",
        category: "Espoir",
        icon: "🚢",
        baseWeight: 1,

        description:
            "Un petit bateau passe au large. Il pourrait s'agir de ta meilleure chance d'être repéré.",

        choices: [

            {
                id: "boat_fire",
                title: "🔥 Faire un grand feu",
                description:
                    "Créer un maximum de fumée.",

                consequences: [

                    {
                        id: "boat_fire_good",
                        text:
                            "Le bateau semble changer légèrement de direction. Il t'a peut-être repéré.",
                        lives: 2,
                        icon: "🚢",
                        weight: 12
                    },

                    {
                        id: "boat_fire_bad",
                        text:
                            "Le feu devient beaucoup trop important et tu dois lutter pour le maîtriser.",
                        lives: -1,
                        icon: "🔥",
                        weight: 88
                    }

                ]
            },

            {
                id: "boat_swim",
                title: "🏊 Nager vers lui",
                description:
                    "Une idée objectivement très ambitieuse.",

                consequences: [

                    {
                        id: "boat_swim_good",
                        text:
                            "Contre toute attente, le bateau te remarque rapidement.",
                        lives: 3,
                        icon: "🙌",
                        weight: 5
                    },

                    {
                        id: "boat_swim_bad",
                        text:
                            "Après plusieurs minutes, tu réalises que le bateau est énormément plus loin qu'il n'en avait l'air.",
                        lives: -3,
                        icon: "🥵",
                        weight: 95
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 23 - TRACES DU SAC À DOS
    // SUITE SAC À DOS
    // =========================================================

    {
        id: "backpack_tracks",
        title: "Tu remarques des traces près de l'endroit où était le sac",
        category: "Suite",
        icon: "👣",
        baseWeight: 1,

        requirements: {

            all: [
                "backpack_opened"
            ],

            not: [
                "backpack_ignored"
            ]

        },

        description:
            "En examinant les alentours, tu remarques des empreintes qui quittent le chemin et s'enfoncent dans la végétation.",

        choices: [

            {
                id: "backpack_tracks_follow",
                title: "👣 Suivre les traces",
                description:
                    "Peut-être que le propriétaire n'est pas loin.",

                consequences: [

                    {
                        id: "backpack_tracks_follow_good",
                        text:
                            "Les traces mènent vers un ancien camp abandonné contenant quelques provisions.",
                        lives: 2,
                        icon: "⛺",
                        weight: 12
                    },

                    {
                        id: "backpack_tracks_follow_bad",
                        text:
                            "Les traces étaient celles d'un animal. Un très gros animal.",
                        lives: -2,
                        icon: "🐾",
                        weight: 88
                    }

                ]
            },

            {
                id: "backpack_tracks_ignore",
                title: "🚶 Ne pas les suivre",
                description:
                    "Tu as déjà suffisamment fouillé dans les affaires des autres.",

                consequences: [

                    {
                        id: "backpack_tracks_ignore_neutral",
                        text:
                            "Tu reprends tranquillement ton exploration.",
                        lives: 0,
                        icon: "😌",
                        weight: 88
                    },

                    {
                        id: "backpack_tracks_ignore_bad",
                        text:
                            "Tu te retournes plusieurs fois, convaincu d'entendre quelqu'un te suivre.",
                        lives: -1,
                        icon: "👀",
                        weight: 12
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 24 - TRÉSOR
    // CLASSIQUE
    // =========================================================

    {
        id: "treasure",
        title: "Tu découvres un coffre enterré",
        category: "Mystère",
        icon: "🧰",
        baseWeight: 1,

        description:
            "Un vieux coffre dépasse légèrement du sable. Il semble fermé depuis très longtemps.",

        choices: [

            {
                id: "treasure_open",
                title: "🔓 Forcer le coffre",
                description:
                    "Tu ne vas quand même pas partir maintenant.",

                consequences: [

                    {
                        id: "treasure_open_good",
                        text:
                            "Le coffre contient du matériel, des provisions et une véritable trousse de secours.",
                        lives: 3,
                        icon: "💰",
                        weight: 8
                    },

                    {
                        id: "treasure_open_bad",
                        text:
                            "Le coffre est rempli de déchets rouillés et tu réussis à te couper en fouillant.",
                        lives: -2,
                        icon: "🩸",
                        weight: 92
                    }

                ]
            },

            {
                id: "treasure_leave",
                title: "🚶 Le laisser",
                description:
                    "Les coffres mystérieux n'apportent jamais rien de bon dans les films.",

                consequences: [

                    {
                        id: "treasure_leave_neutral",
                        text:
                            "Tu continues ta route. Le mystère restera entier.",
                        lives: 0,
                        icon: "🤔",
                        weight: 82
                    },

                    {
                        id: "treasure_leave_good",
                        text:
                            "Quelques secondes plus tard, tu entends un mécanisme se déclencher derrière toi. Excellente décision.",
                        lives: 1,
                        icon: "😎",
                        weight: 18
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 25 - LAGON CACHÉ
    // FIN HISTOIRE RIVIÈRE / CASCADE
    // =========================================================

    {
        id: "hidden_lagoon",
        title: "Le passage mène vers un lagon caché",
        category: "Suite",
        icon: "🏝️",
        baseWeight: 1,

        requirements: {

            all: [
                "waterfall_explored"
            ]

        },

        description:
            "Après avoir suivi le passage derrière la cascade, tu débouches devant un petit lagon complètement isolé.",

        choices: [

            {
                id: "lagoon_search",
                title: "🔍 Explorer les alentours",
                description:
                    "Un endroit aussi isolé pourrait cacher des ressources.",

                consequences: [

                    {
                        id: "lagoon_search_good",
                        text:
                            "Tu trouves plusieurs arbres fruitiers et de l'eau douce.",
                        lives: 2,
                        icon: "🍌",
                        weight: 15
                    },

                    {
                        id: "lagoon_search_bad",
                        text:
                            "Tu déranges un énorme nid de guêpes installé dans les rochers.",
                        lives: -2,
                        icon: "🐝",
                        weight: 85
                    }

                ]
            },

            {
                id: "lagoon_rest",
                title: "😴 Se reposer",
                description:
                    "Pour une fois, ne rien faire semble être une excellente idée.",

                consequences: [

                    {
                        id: "lagoon_rest_neutral",
                        text:
                            "Tu récupères tranquillement sans incident.",
                        lives: 0,
                        icon: "🌴",
                        weight: 78
                    },

                    {
                        id: "lagoon_rest_good",
                        text:
                            "Le calme te permet réellement de récupérer des forces.",
                        lives: 1,
                        icon: "😌",
                        weight: 22
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 26 - CRIQUE CACHÉE
    // SUITE BARQUE
    // =========================================================

    {
        id: "hidden_cove",
        title: "Tu atteins une crique inaccessible depuis la terre",
        category: "Suite",
        icon: "🏖️",
        baseWeight: 1,

        requirements: {

            all: [
                "old_boat_used"
            ],

            not: [
                "old_boat_destroyed"
            ]

        },

        description:
            "En longeant la côte avec la vieille barque, tu aperçois une petite plage dissimulée entre deux falaises.",

        choices: [

            {
                id: "hidden_cove_land",
                title: "🏖️ Accoster",
                description:
                    "Cette plage semble n'avoir jamais été explorée.",

                narrative: {

                    setFlags: [
                        "cove_explored"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "shipwreck",
                            weight: 24
                        }
                    ]

                },

                consequences: [

                    {
                        id: "hidden_cove_land_neutral",
                        text:
                            "Tu accostes sans problème et remarques des débris plus loin sur la plage.",
                        lives: 0,
                        icon: "👀",
                        weight: 70,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "shipwreck",
                                    weight: 38
                                }
                            ]

                        }
                    },

                    {
                        id: "hidden_cove_land_bad",
                        text:
                            "La barque heurte violemment un rocher caché sous l'eau.",
                        lives: -1,
                        icon: "🪨",
                        weight: 30,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id: "shipwreck",
                                    weight: 5
                                }
                            ]

                        }
                    }

                ]
            },

            {
                id: "hidden_cove_continue",
                title: "🛶 Continuer à longer la côte",
                description:
                    "La plage est peut-être jolie, mais tu préfères ne pas t'arrêter.",

                narrative: {

                    removeFlags: [
                        "cove_explored"
                    ]

                },

                consequences: [

                    {
                        id: "hidden_cove_continue_neutral",
                        text:
                            "Tu poursuis ton trajet sans incident.",
                        lives: 0,
                        icon: "🌊",
                        weight: 80
                    },

                    {
                        id: "hidden_cove_continue_bad",
                        text:
                            "Le courant devient beaucoup plus fort et t'éloigne de la côte.",
                        lives: -1,
                        icon: "🌊",
                        weight: 20
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 27 - BRUIT DANS LES BUISSONS
    // CLASSIQUE
    // =========================================================

    {
        id: "bush_noise",
        title: "Quelque chose bouge dans les buissons",
        category: "Mystère",
        icon: "🌿",
        baseWeight: 1,

        description:
            "Les feuilles bougent fortement juste devant toi. Impossible de voir ce qui se cache derrière.",

        choices: [

            {
                id: "bush_check",
                title: "👀 Aller voir",
                description:
                    "La curiosité est visiblement plus forte que ton instinct.",

                consequences: [

                    {
                        id: "bush_check_good",
                        text:
                            "Ce n'était qu'un petit animal qui abandonne derrière lui quelques fruits.",
                        lives: 1,
                        icon: "🐇",
                        weight: 20
                    },

                    {
                        id: "bush_check_bad",
                        text:
                            "Un énorme varan surgit du buisson et te mord avant de repartir.",
                        lives: -2,
                        icon: "🦎",
                        weight: 80
                    }

                ]
            },

            {
                id: "bush_run",
                title: "🏃 Partir",
                description:
                    "Tu ne veux absolument pas savoir.",

                consequences: [

                    {
                        id: "bush_run_neutral",
                        text:
                            "Tu t'éloignes rapidement sans découvrir ce qui était caché.",
                        lives: 0,
                        icon: "😮‍💨",
                        weight: 70
                    },

                    {
                        id: "bush_run_bad",
                        text:
                            "Tu trébuches en courant alors qu'il n'y avait qu'un petit lapin.",
                        lives: -1,
                        icon: "🐇",
                        weight: 30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 28 - ÉPAVE
    // FIN HISTOIRE BARQUE
    // =========================================================

    {
        id: "shipwreck",
        title: "Tu découvres les restes d'un ancien naufrage",
        category: "Suite",
        icon: "⚓",
        baseWeight: 1,

        requirements: {

            all: [
                "cove_explored"
            ]

        },

        description:
            "Les débris aperçus sur la plage proviennent d'un ancien bateau presque entièrement détruit.",

        choices: [

            {
                id: "shipwreck_search",
                title: "🔍 Fouiller l'épave",
                description:
                    "Il reste peut-être quelque chose d'utile.",

                consequences: [

                    {
                        id: "shipwreck_search_good",
                        text:
                            "Dans une caisse encore fermée, tu trouves des provisions parfaitement conservées.",
                        lives: 3,
                        icon: "📦",
                        weight: 8
                    },

                    {
                        id: "shipwreck_search_bad",
                        text:
                            "Une partie instable de l'épave s'effondre pendant que tu fouilles.",
                        lives: -2,
                        icon: "💥",
                        weight: 92
                    }

                ]
            },

            {
                id: "shipwreck_leave",
                title: "🚶 Ne rien toucher",
                description:
                    "L'épave tient à peine debout.",

                consequences: [

                    {
                        id: "shipwreck_leave_neutral",
                        text:
                            "Tu observes les lieux puis repars sans prendre de risque.",
                        lives: 0,
                        icon: "😌",
                        weight: 88
                    },

                    {
                        id: "shipwreck_leave_bad",
                        text:
                            "Une planche cachée dans le sable te coupe légèrement le pied.",
                        lives: -1,
                        icon: "🩸",
                        weight: 12
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 29 - CANICULE
    // CLASSIQUE
    // =========================================================

    {
        id: "heat_wave",
        title: "La chaleur devient insupportable",
        category: "Météo",
        icon: "☀️",
        baseWeight: 1,

        description:
            "Le soleil est au plus haut et tu sens que continuer à avancer devient difficile.",

        choices: [

            {
                id: "heat_continue",
                title: "🥾 Continuer à marcher",
                description:
                    "Tu veux absolument profiter de la journée.",

                consequences: [

                    {
                        id: "heat_continue_good",
                        text:
                            "Tu tombes rapidement sur une zone ombragée et gagnes du temps.",
                        lives: 1,
                        icon: "🌴",
                        weight: 15
                    },

                    {
                        id: "heat_continue_bad",
                        text:
                            "La chaleur finit par avoir raison de toi et tu dois t'arrêter complètement épuisé.",
                        lives: -2,
                        icon: "🥵",
                        weight: 85
                    }

                ]
            },

            {
                id: "heat_rest",
                title: "🌴 Chercher de l'ombre",
                description:
                    "Attendre que le soleil descende.",

                consequences: [

                    {
                        id: "heat_rest_neutral",
                        text:
                            "Tu passes plusieurs heures à l'ombre avant de pouvoir repartir.",
                        lives: 0,
                        icon: "😌",
                        weight: 82
                    },

                    {
                        id: "heat_rest_bad",
                        text:
                            "Tu choisis malheureusement un arbre rempli de fourmis particulièrement agressives.",
                        lives: -1,
                        icon: "🐜",
                        weight: 18
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 30 - BRUIT PENDANT LA NUIT
    // CLASSIQUE
    // =========================================================

    {
        id: "night_noise",
        title: "Un bruit te réveille en pleine nuit",
        category: "Mystère",
        icon: "🌙",
        baseWeight: 1,

        description:
            "Quelque chose tourne autour de ton camp. Tu entends régulièrement des branches craquer dans l'obscurité.",

        choices: [

            {
                id: "night_noise_check",
                title: "🔦 Aller voir",
                description:
                    "Impossible de dormir sans savoir ce qui se passe.",

                consequences: [

                    {
                        id: "night_noise_check_good",
                        text:
                            "Tu surprends un petit animal qui laisse tomber quelques fruits avant de fuir.",
                        lives: 1,
                        icon: "🍌",
                        weight: 18
                    },

                    {
                        id: "night_noise_check_bad",
                        text:
                            "Tu tombes nez à nez avec un prédateur beaucoup plus gros que prévu.",
                        lives: -2,
                        icon: "😨",
                        weight: 82
                    }

                ]
            },

            {
                id: "night_noise_ignore",
                title: "😴 Rester couché",
                description:
                    "Ce problème appartient au toi de demain.",

                consequences: [

                    {
                        id: "night_noise_ignore_neutral",
                        text:
                            "Le bruit finit par disparaître et tu réussis à te rendormir.",
                        lives: 0,
                        icon: "💤",
                        weight: 65
                    },

                    {
                        id: "night_noise_ignore_bad",
                        text:
                            "Au réveil, une partie de tes affaires a été complètement retournée.",
                        lives: -1,
                        icon: "😑",
                        weight: 35
                    }

                ]
            }

        ]
    }

];