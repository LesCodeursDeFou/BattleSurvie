export const SITUATIONS = [

    // =========================================================
    // 1 - HORDE DE SINGES
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
                            "Tu cours jusqu'à ne plus sentir tes jambes, mais les singes finissent tout de même par te rattraper.",
                        icon: "🥵",
                        weight: 60,

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
                        ]
                    },

                    {
                        id: "monkey_run_neutral",
                        text:
                            "Tu trouves un passage étroit entre deux rochers. Les singes abandonnent finalement la poursuite.",
                        icon: "😮‍💨",
                        weight: 40,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
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
                            "Contre toute logique, tu mets la horde en déroute. Même toi, tu ne comprends pas vraiment comment.",
                        icon: "💪",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "monkey_fight_lose",
                        text:
                            "Les singes étaient plus nombreux, plus rapides et apparemment bien mieux entraînés.",
                        icon: "💀",
                        weight: 90,

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            },

            {
                id: "monkey_trap",
                title: "🛠️ Improviser un piège",
                description:
                    "Utiliser une liane et une branche pour détourner la horde.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                consequences: [

                    {
                        id: "monkey_trap_success",
                        text:
                            "Ton piège improvisé fait suffisamment de bruit pour détourner toute la horde. Tu repars tranquillement.",
                        icon: "🛠️",
                        weight: 100,
                        effects: []
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - NOIX DE COCO
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
                            "Elle est parfaite. Tu récupères un peu d'énergie et ton ventre arrête enfin de protester.",
                        icon: "😋",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    },

                    {
                        id: "coconut_eat_bad",
                        text:
                            "Elle était complètement pourrie. Ton estomac déclare immédiatement la guerre.",
                        icon: "🤢",
                        weight: 62,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "hungry",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "coconut_eat_neutral",
                        text:
                            "Elle est à moitié sèche mais comestible. Ce n'est pas un festin, mais ça fera l'affaire.",
                        icon: "🥥",
                        weight: 20,
                        effects: []
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
                        icon: "😌",
                        weight: 80,
                        effects: []
                    },

                    {
                        id: "coconut_leave_good",
                        text:
                            "Un énorme singe arrive pour récupérer la noix. Ton instinct vient probablement de te sauver.",
                        icon: "🐒",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ]
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
                        icon: "👣",
                        weight: 55,
                        effects: [],

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
                        icon: "🐗",
                        weight: 45,

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
                        icon: "🌙",
                        weight: 65,
                        effects: []
                    },

                    {
                        id: "cave_outside_bad",
                        text:
                            "Une pluie torrentielle tombe toute la nuit. Tu ne dors pratiquement pas.",
                        icon: "🌧️",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 4 - SERPENT
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
                        icon: "😮‍💨",
                        weight: 58,
                        effects: []
                    },

                    {
                        id: "snake_pass_bad",
                        text:
                            "Une branche craque sous ton pied. Le serpent apprécie moyennement et te mord avant de disparaître.",
                        icon: "🐍",
                        weight: 42,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                status: "poisoned"
                            }
                        ]
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
                            "La pierre tombe juste devant lui et le fait fuir. Tu prends soudainement un peu trop confiance en toi.",
                        icon: "🎯",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "snake_throw_bad",
                        text:
                            "Tu rates le serpent mais réussis parfaitement à l'énerver. Il te mord avant de s'éloigner.",
                        icon: "😬",
                        weight: 80,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                status: "poisoned"
                            }
                        ]
                    }

                ]
            },

            {
                id: "snake_diversion",
                title: "🛠️ Créer une diversion",
                description:
                    "Utiliser une longue branche pour attirer son attention ailleurs.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                consequences: [
                    {
                        id: "snake_diversion_success",
                        text:
                            "Tu déplaces lentement une branche à distance. Le serpent suit le mouvement et libère le passage.",
                        icon: "🛠️",
                        weight: 100,
                        effects: []
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
                        icon: "🥫",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ],

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
                        icon: "🕳️",
                        weight: 62,

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

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "hut_inside",
                                    weight: 5
                                }
                            ]
                        }
                    },

                    {
                        id: "hut_enter_neutral",
                        text:
                            "La cabane semble vide. Tu décides tout de même de regarder rapidement autour de toi.",
                        icon: "🔦",
                        weight: 20,
                        effects: []
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
                        icon: "😌",
                        weight: 82,
                        effects: []
                    },

                    {
                        id: "hut_ignore_bad",
                        text:
                            "En voulant contourner la cabane, tu te retrouves dans une végétation extrêmement dense.",
                        icon: "🌿",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - TEMPÊTE
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
                        icon: "🌳",
                        weight: 35,
                        effects: []
                    },

                    {
                        id: "storm_tree_bad",
                        text:
                            "Une énorme branche tombe à quelques centimètres de toi. Enfin... pas suffisamment loin.",
                        icon: "🪵",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
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
                            "Tu trouves une petite cavité parfaitement protégée et peux enfin reprendre ton souffle.",
                        icon: "😌",
                        weight: 22,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "storm_rocks_bad",
                        text:
                            "Tu glisses sur la roche mouillée et termines quelques mètres plus bas.",
                        icon: "🤕",
                        weight: 78,

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            },

            {
                id: "storm_shelter",
                title: "🛠️ Construire un abri rapide",
                description:
                    "Quelques branches et de grandes feuilles devraient suffire.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                consequences: [

                    {
                        id: "storm_shelter_success",
                        text:
                            "Ton abri improvisé résiste suffisamment longtemps pour laisser passer le pire de la tempête.",
                        icon: "🛖",
                        weight: 100,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
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
                            "Tu réussis à atteindre l'autre rive, complètement trempé mais satisfait.",
                        icon: "🏊",
                        weight: 22,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "river_swim_bad",
                        text:
                            "Le courant t'emporte et te projette contre plusieurs rochers.",
                        icon: "🌊",
                        weight: 78,

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
                        ]
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
                        icon: "🌿",
                        weight: 68,
                        effects: [],

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
                        icon: "🌿",
                        weight: 32,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],

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
            },

            {
                id: "river_build_raft",
                title: "🛠️ Fabriquer un petit radeau",
                description:
                    "Quelques branches et lianes peuvent t'éviter une baignade très risquée.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                narrative: {
                    setFlags: [
                        "river_crossed",
                        "river_raft_used"
                    ],
                    removeFlags: [
                        "river_followed"
                    ]
                },

                consequences: [

                    {
                        id: "river_build_raft_success",
                        text:
                            "Ton radeau est laid, bancal et absolument pas homologué. Mais il traverse la rivière sans problème.",
                        icon: "🛶",
                        weight: 100,
                        effects: []
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - SANGLIER
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
                        icon: "😮‍💨",
                        weight: 52,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "boar_tree_bad",
                        text:
                            "Tu découvres que grimper à un arbre demande un minimum de technique.",
                        icon: "😵",
                        weight: 48,

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ]
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
                            "Esquive parfaite. Le sanglier termine sa course dans un buisson et ton ego vient de doubler de volume.",
                        icon: "😎",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "boar_dodge_bad",
                        text:
                            "Tu avais oublié un détail essentiel : tu n'es effectivement pas torero.",
                        icon: "💥",
                        weight: 82,

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
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
                            "Sous une latte, tu découvres une petite clé rouillée et quelques outils encore utilisables.",
                        icon: "🗝️",
                        weight: 52,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ],

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
                        icon: "🤕",
                        weight: 48,

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],

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
                        icon: "🚶",
                        weight: 88,
                        effects: []
                    },

                    {
                        id: "hut_inside_leave_bad",
                        text:
                            "Une planche du toit se détache au moment où tu passes la porte.",
                        icon: "🪵",
                        weight: 12,

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 10 - ABEILLES
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
                            "Tu réussis à récupérer du miel sans provoquer la colonie. Un miracle statistique.",
                        icon: "🍯",
                        weight: 14,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    },

                    {
                        id: "bees_honey_bad",
                        text:
                            "Les abeilles ne semblent absolument pas d'accord avec ton concept du partage.",
                        icon: "🐝",
                        weight: 86,

                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
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
                        icon: "😌",
                        weight: 85,
                        effects: []
                    },

                    {
                        id: "bees_leave_bad",
                        text:
                            "Une abeille particulièrement rancunière te suit quand même.",
                        icon: "😑",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ]
                    }

                ]
            },

            {
                id: "bees_smoke",
                title: "🌫️ Fabriquer de la fumée",
                description:
                    "Utiliser de la végétation humide pour calmer temporairement les abeilles.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                consequences: [
                    {
                        id: "bees_smoke_good",
                        text:
                            "La fumée fonctionne. Tu récupères un peu de miel sans subir la moindre piqûre.",
                        icon: "🍯",
                        weight: 100,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 11 - PLUS PROFOND DANS LA GROTTE
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
                        icon: "💧",
                        weight: 55,
                        effects: [],

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
                            "Tu dois ramper pendant de longues minutes entre les rochers. Lorsque le passage s'élargit enfin, tu es épuisé.",
                        icon: "🥵",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "cave_lake",
                                    weight: 18
                                }
                            ]
                        }
                    },

                    {
                        id: "cave_deeper_continue_good",
                        text:
                            "Tu découvres des marques gravées dans la roche qui t'aident à repérer le chemin le plus sûr.",
                        icon: "🧭",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "cave_lake",
                                    weight: 45
                                }
                            ]
                        }
                    }

                ]
            },

            {
                id: "cave_deeper_return",
                title: "↩️ Faire demi-tour",
                description:
                    "Tu préfères ne pas t'enfoncer davantage.",

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
                        id: "cave_deeper_return_safe",
                        text:
                            "Tu retrouves l'entrée sans difficulté et décides d'oublier cette grotte.",
                        icon: "🌤️",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 12 - LAC SOUTERRAIN
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
                "cave_entered",
                "cave_deep_path"
            ],
            not: [
                "cave_abandoned"
            ]
        },

        description:
            "La galerie débouche sur une immense cavité. Une eau parfaitement claire remplit presque toute la salle.",

        choices: [

            {
                id: "cave_lake_drink",
                title: "💧 Boire",
                description:
                    "L'eau semble beaucoup trop propre pour être naturelle.",

                consequences: [

                    {
                        id: "cave_lake_drink_good",
                        text:
                            "L'eau est fraîche et parfaitement potable. Tu récupères enfin.",
                        icon: "😌",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "cave_lake_drink_bad",
                        text:
                            "L'eau était claire, certes. Potable, beaucoup moins.",
                        icon: "🤢",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                status: "poisoned"
                            }
                        ]
                    },

                    {
                        id: "cave_lake_drink_neutral",
                        text:
                            "Le goût est étrange mais aucun effet immédiat ne se manifeste.",
                        icon: "😐",
                        weight: 20,
                        effects: []
                    }

                ]
            },

            {
                id: "cave_lake_leave",
                title: "🚶 Ne rien toucher",
                description:
                    "Un lac souterrain inconnu n'est pas exactement une fontaine publique.",

                narrative: {
                    setFlags: [
                        "cave_completed"
                    ]
                },

                consequences: [
                    {
                        id: "cave_lake_leave_safe",
                        text:
                            "Tu mémorises l'endroit puis retournes vers la surface.",
                        icon: "🧭",
                        weight: 100,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ]
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 13 - CASCADE
    // SUITE RIVIÈRE
    // =========================================================

    {
        id: "waterfall",
        title: "Le bruit d'une immense cascade se rapproche",
        category: "Suite",
        icon: "🏞️",
        baseWeight: 1,

        requirements: {
            all: [
                "river_followed"
            ]
        },

        description:
            "Après avoir longé la rivière, tu arrives au sommet d'une cascade. Une petite corniche permet peut-être de descendre.",

        choices: [

            {
                id: "waterfall_climb",
                title: "🧗 Descendre la paroi",
                description:
                    "Ça paraît faisable... de loin.",

                narrative: {
                    setFlags: [
                        "waterfall_descended"
                    ],
                    nextSituationBoosts: [
                        {
                            id: "waterfall_pool",
                            weight: 28
                        }
                    ]
                },

                consequences: [

                    {
                        id: "waterfall_climb_neutral",
                        text:
                            "La descente est lente mais tu atteins le bas sans incident.",
                        icon: "😮‍💨",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "waterfall_pool",
                                    weight: 38
                                }
                            ]
                        }
                    },

                    {
                        id: "waterfall_climb_bad",
                        text:
                            "Une pierre se détache. Tu termines la descente beaucoup plus rapidement que prévu.",
                        icon: "💥",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "waterfall_pool",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "waterfall_climb_good",
                        text:
                            "Tu repères naturellement les meilleurs appuis et descends avec une facilité surprenante.",
                        icon: "🧗",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "waterfall_pool",
                                    weight: 42
                                }
                            ]
                        }
                    }

                ]
            },

            {
                id: "waterfall_turn",
                title: "↩️ Rebrousser chemin",
                description:
                    "Cette randonnée improvisée est déjà assez longue.",

                narrative: {
                    setFlags: [
                        "river_abandoned"
                    ],
                    removeFlags: [
                        "river_followed"
                    ]
                },

                consequences: [
                    {
                        id: "waterfall_turn_neutral",
                        text:
                            "Tu repars dans la direction du camp sans prendre davantage de risques.",
                        icon: "🥾",
                        weight: 100,
                        effects: []
                    }
                ]
            },

            {
                id: "waterfall_rope",
                title: "🛠️ Fabriquer une corde",
                description:
                    "Des lianes solides pourraient rendre la descente beaucoup plus sûre.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                narrative: {
                    setFlags: [
                        "waterfall_descended"
                    ],
                    nextSituationBoosts: [
                        {
                            id: "waterfall_pool",
                            weight: 45
                        }
                    ]
                },

                consequences: [
                    {
                        id: "waterfall_rope_success",
                        text:
                            "Ton système de corde improvisé tient parfaitement. Tu atteins le bas sans difficulté.",
                        icon: "🪢",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 14 - BASSIN DE LA CASCADE
    // =========================================================

    {
        id: "waterfall_pool",
        title: "Un bassin turquoise s'étend sous la cascade",
        category: "Suite",
        icon: "💦",
        baseWeight: 1,

        requirements: {
            all: [
                "waterfall_descended"
            ]
        },

        description:
            "Au pied de la cascade, l'eau est calme. Tu distingues même plusieurs poissons près des rochers.",

        choices: [

            {
                id: "waterfall_pool_fish",
                title: "🐟 Essayer de pêcher",
                description:
                    "Un vrai repas commence à devenir urgent.",

                consequences: [

                    {
                        id: "waterfall_pool_fish_good",
                        text:
                            "Après beaucoup trop de tentatives, tu attrapes enfin un poisson.",
                        icon: "🐟",
                        weight: 28,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    },

                    {
                        id: "waterfall_pool_fish_bad",
                        text:
                            "Tu glisses dans le bassin en essayant d'attraper un poisson à mains nues.",
                        icon: "💦",
                        weight: 42,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "waterfall_pool_fish_neutral",
                        text:
                            "Les poissons se révèlent beaucoup plus intelligents que prévu.",
                        icon: "😑",
                        weight: 30,
                        effects: []
                    }

                ]
            },

            {
                id: "waterfall_pool_rest",
                title: "😴 Se reposer",
                description:
                    "Pour une fois, le lieu semble presque paisible.",

                consequences: [
                    {
                        id: "waterfall_pool_rest_good",
                        text:
                            "Tu restes quelques instants près de l'eau et récupères réellement.",
                        icon: "😌",
                        weight: 100,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -2
                                }
                            }
                        ]
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 15 - TRAPPE DE LA CABANE
    // =========================================================

    {
        id: "hut_trapdoor",
        title: "Une trappe est cachée sous le plancher",
        category: "Suite",
        icon: "🚪",
        baseWeight: 1,

        requirements: {
            all: [
                "hut_entered",
                "hut_floor_checked"
            ],
            not: [
                "hut_abandoned"
            ]
        },

        description:
            "Sous plusieurs lattes déplacées, tu découvres une petite trappe métallique. Elle semble verrouillée.",

        choices: [

            {
                id: "hut_trapdoor_force",
                title: "💪 Forcer la trappe",
                description:
                    "Une serrure rouillée ne devrait pas résister longtemps.",

                consequences: [

                    {
                        id: "hut_trapdoor_force_bad",
                        text:
                            "La serrure résiste. Ton outil improvisé, beaucoup moins.",
                        icon: "🤕",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ]
                    },

                    {
                        id: "hut_trapdoor_force_neutral",
                        text:
                            "Après plusieurs minutes, la serrure cède enfin.",
                        icon: "🔓",
                        weight: 35,
                        effects: [],

                        narrative: {
                            setFlags: [
                                "hut_trapdoor_open"
                            ],
                            nextSituationBoosts: [
                                {
                                    id: "hut_cellar",
                                    weight: 35
                                }
                            ]
                        }
                    }

                ]
            },

            {
                id: "hut_trapdoor_key",
                title: "🗝️ Utiliser la clé",
                description:
                    "La petite clé trouvée sous le plancher pourrait enfin servir.",

                condition: {
                    all: [
                        {
                            type: "status",
                            id: "resourceful"
                        }
                    ]
                },

                narrative: {
                    setFlags: [
                        "hut_trapdoor_open"
                    ],
                    nextSituationBoosts: [
                        {
                            id: "hut_cellar",
                            weight: 45
                        }
                    ]
                },

                consequences: [
                    {
                        id: "hut_trapdoor_key_good",
                        text:
                            "Après quelques ajustements, tu réussis à utiliser la vieille clé et la trappe s'ouvre.",
                        icon: "🔓",
                        weight: 100,
                        effects: []
                    }
                ]
            },

            {
                id: "hut_trapdoor_leave",
                title: "🚪 Laisser la trappe",
                description:
                    "Tu n'as aucune obligation morale d'explorer chaque trou de cette île.",

                narrative: {
                    setFlags: [
                        "hut_abandoned"
                    ]
                },

                consequences: [
                    {
                        id: "hut_trapdoor_leave_safe",
                        text:
                            "Tu quittes la cabane et continues ton chemin.",
                        icon: "🚶",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 16 - CAVE DE LA CABANE
    // =========================================================

    {
        id: "hut_cellar",
        title: "Une petite cave se trouve sous la cabane",
        category: "Suite",
        icon: "🕳️",
        baseWeight: 1,

        requirements: {
            all: [
                "hut_trapdoor_open"
            ]
        },

        description:
            "Une échelle descend vers une pièce étroite. Des étagères couvertes de poussière longent les murs.",

        choices: [

            {
                id: "hut_cellar_search",
                title: "🔦 Fouiller la cave",
                description:
                    "Quelqu'un a stocké quelque chose ici autrefois.",

                consequences: [

                    {
                        id: "hut_cellar_search_good",
                        text:
                            "Tu trouves plusieurs outils encore fonctionnels. Sur cette île, c'est pratiquement un trésor.",
                        icon: "🛠️",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "hut_cellar_search_food",
                        text:
                            "Quelques conserves sont encore fermées et semblent consommables.",
                        icon: "🥫",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    },

                    {
                        id: "hut_cellar_search_bad",
                        text:
                            "Une araignée de taille beaucoup trop respectable était cachée derrière les boîtes.",
                        icon: "🕷️",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                status: "poisoned"
                            }
                        ]
                    },

                    {
                        id: "hut_cellar_search_neutral",
                        text:
                            "La plupart des objets ont été détruits par l'humidité.",
                        icon: "😐",
                        weight: 20,
                        effects: []
                    }

                ]
            },

            {
                id: "hut_cellar_leave",
                title: "⬆️ Remonter",
                description:
                    "L'air devient franchement désagréable ici-dessous.",

                consequences: [
                    {
                        id: "hut_cellar_leave_safe",
                        text:
                            "Tu remontes et refermes la trappe derrière toi.",
                        icon: "🪜",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 17 - NOUVEAU : CHALEUR ÉCRASANTE
    // =========================================================

    {
        id: "desert_heatwave",
        title: "La chaleur devient insupportable",
        category: "Météo",
        icon: "☀️",
        baseWeight: 1,

        description:
            "Le soleil frappe sans interruption. Chaque mouvement devient plus difficile que le précédent.",

        choices: [

            {
                id: "heatwave_continue",
                title: "🥾 Continuer d'avancer",
                description:
                    "Tu veux profiter de la lumière tant qu'elle est là.",

                consequences: [

                    {
                        id: "heatwave_continue_bad",
                        text:
                            "Tu surestimes clairement ton endurance. Tes jambes commencent à trembler.",
                        icon: "🥵",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "heatwave_continue_neutral",
                        text:
                            "Tu progresses lentement en économisant tes forces.",
                        icon: "☀️",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "heatwave_rest",
                title: "🌴 Chercher de l'ombre",
                description:
                    "Il est peut-être temps de respecter les lois de la thermodynamique.",

                consequences: [

                    {
                        id: "heatwave_rest_good",
                        text:
                            "Tu trouves un endroit ombragé et récupères pendant que le soleil descend.",
                        icon: "😌",
                        weight: 75,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "heatwave_rest_hungry",
                        text:
                            "Le repos aide, mais ton ventre te rappelle brutalement que tu n'as presque rien mangé.",
                        icon: "🍖",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "hungry",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 18 - NOUVEAU : FRUITS INCONNUS
    // =========================================================

    {
        id: "desert_unknown_fruits",
        title: "Tu découvres des fruits inconnus",
        category: "Nourriture",
        icon: "🍈",
        baseWeight: 1,

        description:
            "Un arbuste est couvert de fruits violets que tu n'as jamais vus auparavant.",

        choices: [

            {
                id: "unknown_fruits_eat",
                title: "😋 En goûter un",
                description:
                    "Ton estomac vote très clairement pour cette option.",

                consequences: [

                    {
                        id: "unknown_fruits_eat_good",
                        text:
                            "Ils sont délicieux et particulièrement nourrissants.",
                        icon: "😋",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    },

                    {
                        id: "unknown_fruits_eat_poison",
                        text:
                            "Après quelques bouchées, tes lèvres commencent à picoter. Ce n'est probablement pas bon signe.",
                        icon: "☠️",
                        weight: 57,

                        effects: [
                            {
                                target: "actor",
                                status: "poisoned"
                            }
                        ]
                    },

                    {
                        id: "unknown_fruits_eat_neutral",
                        text:
                            "Le goût est absolument infect, mais tu ne sembles pas malade.",
                        icon: "🤢",
                        weight: 25,
                        effects: []
                    }

                ]
            },

            {
                id: "unknown_fruits_test",
                title: "🛠️ Tester les fruits",
                description:
                    "Observer la sève, l'odeur et les traces laissées par les animaux.",

                condition: {
                    type: "status",
                    id: "resourceful"
                },

                consequences: [
                    {
                        id: "unknown_fruits_test_success",
                        text:
                            "Plusieurs indices montrent que les fruits sont toxiques. Tu évites de les manger.",
                        icon: "🧠",
                        weight: 100,
                        effects: []
                    }
                ]
            },

            {
                id: "unknown_fruits_leave",
                title: "🚶 Continuer",
                description:
                    "Survivre consiste parfois simplement à ne rien mettre dans sa bouche.",

                consequences: [
                    {
                        id: "unknown_fruits_leave_safe",
                        text:
                            "Tu continues ton chemin sans tenter l'expérience.",
                        icon: "😌",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 19 - NOUVEAU : ÉPAVE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "desert_shipwreck",
        title: "Une épave apparaît à marée basse",
        category: "Exploration",
        icon: "🚢",
        baseWeight: 1,

        description:
            "À quelques dizaines de mètres du rivage, une vieille épave vient d'être révélée par la marée descendante.",

        choices: [

            {
                id: "shipwreck_explore",
                title: "🚢 Explorer l'épave",
                description:
                    "Il pourrait rester du matériel utilisable à l'intérieur.",

                narrative: {
                    setFlags: [
                        "shipwreck_entered"
                    ],
                    nextSituationBoosts: [
                        {
                            id: "desert_shipwreck_hold",
                            weight: 34
                        }
                    ]
                },

                consequences: [

                    {
                        id: "shipwreck_explore_good",
                        text:
                            "Tu récupères une corde, un couteau émoussé et quelques outils.",
                        icon: "🛠️",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "desert_shipwreck_hold",
                                    weight: 45
                                }
                            ]
                        }
                    },

                    {
                        id: "shipwreck_explore_bad",
                        text:
                            "Une vague soulève brutalement l'épave et te projette contre la coque.",
                        icon: "🌊",
                        weight: 50,

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

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "desert_shipwreck_hold",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "shipwreck_explore_neutral",
                        text:
                            "L'intérieur est presque vide, mais une ouverture mène vers la cale.",
                        icon: "🕳️",
                        weight: 30,
                        effects: []
                    }

                ]
            },

            {
                id: "shipwreck_leave",
                title: "🏖️ Rester sur la plage",
                description:
                    "La marée ne restera pas basse éternellement.",

                narrative: {
                    setFlags: [
                        "shipwreck_abandoned"
                    ]
                },

                consequences: [
                    {
                        id: "shipwreck_leave_safe",
                        text:
                            "Tu observes l'épave de loin jusqu'à ce que la mer la recouvre à nouveau.",
                        icon: "🌊",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 20 - NOUVEAU : CALE DE L'ÉPAVE
    // =========================================================

    {
        id: "desert_shipwreck_hold",
        title: "Une cale sombre se trouve sous le pont de l'épave",
        category: "Suite",
        icon: "⚓",
        baseWeight: 1,

        requirements: {
            all: [
                "shipwreck_entered"
            ],
            not: [
                "shipwreck_abandoned"
            ]
        },

        description:
            "L'eau commence déjà à remonter autour de l'épave. La cale pourrait contenir quelque chose, mais tu n'as probablement que quelques minutes.",

        choices: [

            {
                id: "shipwreck_hold_search",
                title: "🔦 Fouiller rapidement",
                description:
                    "Quelques minutes de plus. Pas davantage.",

                consequences: [

                    {
                        id: "shipwreck_hold_food",
                        text:
                            "Tu trouves un compartiment étanche avec quelques rations encore exploitables.",
                        icon: "🥫",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    },

                    {
                        id: "shipwreck_hold_tool",
                        text:
                            "Tu récupères plusieurs outils avant que l'eau ne monte davantage.",
                        icon: "🛠️",
                        weight: 22,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "shipwreck_hold_bad",
                        text:
                            "Une partie de la coque se déplace et te coince quelques secondes sous l'eau.",
                        icon: "🌊",
                        weight: 45,

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
                        ]
                    },

                    {
                        id: "shipwreck_hold_neutral",
                        text:
                            "La cale est vide. Tu repars avant que la marée ne te bloque à l'intérieur.",
                        icon: "😮‍💨",
                        weight: 15,
                        effects: []
                    }

                ]
            },

            {
                id: "shipwreck_hold_leave",
                title: "🏃 Sortir immédiatement",
                description:
                    "Le bruit de l'eau qui monte suffit à te convaincre.",

                consequences: [
                    {
                        id: "shipwreck_hold_leave_safe",
                        text:
                            "Tu rejoins la plage juste avant que les vagues ne recouvrent de nouveau l'épave.",
                        icon: "🏖️",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =========================================================
    // 21 - NOUVEAU : NUIT GLACIALE
    // =========================================================

    {
        id: "desert_cold_night",
        title: "La température chute brutalement pendant la nuit",
        category: "Survie",
        icon: "🥶",
        baseWeight: 1,

        description:
            "La chaleur de la journée disparaît complètement. Ton abri laisse passer un vent glacial.",

        choices: [

            {
                id: "cold_night_fire",
                title: "🔥 Entretenir un feu",
                description:
                    "Tu sacrifies une partie de ton sommeil pour rester au chaud.",

                consequences: [

                    {
                        id: "cold_night_fire_safe",
                        text:
                            "Le feu tient toute la nuit. Tu dors peu mais évites le pire.",
                        icon: "🔥",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "cold_night_fire_good",
                        text:
                            "Le feu tient parfaitement et tu réussis même à dormir quelques heures.",
                        icon: "😴",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "cold_night_fire_bad",
                        text:
                            "Le feu s'éteint au milieu de la nuit et tu passes des heures à trembler.",
                        icon: "🥶",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "cold_night_sleep",
                title: "😴 Essayer de dormir",
                description:
                    "Tu t'enroules dans tout ce que tu trouves.",

                consequences: [

                    {
                        id: "cold_night_sleep_bad",
                        text:
                            "Tu passes une nuit catastrophique et te réveilles complètement épuisé.",
                        icon: "🥱",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "cold_night_sleep_neutral",
                        text:
                            "La nuit est difficile mais tu réussis à dormir par intermittence.",
                        icon: "🌙",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 22 - NOUVEAU : JOURNÉE CALME
    // RESPIRATION / ÉQUILIBRAGE
    // =========================================================

    {
        id: "desert_quiet_day",
        title: "Pour une fois, l'île semble calme",
        category: "Repos",
        icon: "🌴",
        baseWeight: 0.8,

        description:
            "Aucun animal ne te poursuit, rien ne s'effondre et personne ne semble vouloir te tuer. Une situation presque inquiétante.",

        choices: [

            {
                id: "quiet_day_rest",
                title: "😴 Se reposer",
                description:
                    "Profiter de l'occasion pendant qu'elle existe.",

                consequences: [

                    {
                        id: "quiet_day_rest_good",
                        text:
                            "Tu récupères réellement et te sens beaucoup plus reposé.",
                        icon: "😌",
                        weight: 70,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -2
                                }
                            }
                        ]
                    },

                    {
                        id: "quiet_day_rest_neutral",
                        text:
                            "Tu somnoles un moment sans vraiment parvenir à dormir.",
                        icon: "😴",
                        weight: 30,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "quiet_day_prepare",
                title: "🛠️ Préparer du matériel",
                description:
                    "Profiter du calme pour fabriquer quelques outils simples.",

                consequences: [

                    {
                        id: "quiet_day_prepare_good",
                        text:
                            "Avec du temps et un peu de patience, tu fabriques plusieurs outils improvisés.",
                        icon: "🛠️",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "quiet_day_prepare_tired",
                        text:
                            "Tu obtiens quelques outils corrects, mais tu y passes beaucoup plus d'énergie que prévu.",
                        icon: "🥱",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    }

];