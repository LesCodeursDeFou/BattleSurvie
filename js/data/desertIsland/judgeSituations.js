export const JUDGE_SITUATIONS = [

    // =========================================================
    // 1 - FEU DE CAMP
    // DÉBUT MINI-HISTOIRE FEU
    // =========================================================

    {
        id:
            "desert_judge_fire",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} doit protéger le camp",

        category:
            "Décision de groupe",

        icon:
            "🔥",

        description:
            "{group} dorment déjà. {actor} est responsable du feu de camp pour le reste de la nuit.",

        choices: [

            {
                id:
                    "desert_fire_large",

                title:
                    "🔥 Faire un immense feu",

                description:
                    "Créer un feu suffisamment grand pour éloigner les animaux.",

                narrative: {

                    setFlags: [
                        "judge_fire_large"
                    ],

                    removeFlags: [
                        "judge_fire_small"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_night_watch",

                            weight:
                                30
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_fire_large_success",

                        icon:
                            "🛡️",

                        text:
                            "Le feu reste parfaitement sous contrôle. Aucun prédateur n'ose approcher et {group} passent une excellente nuit.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            18,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_fire_large_failure",

                        icon:
                            "💥",

                        text:
                            "Une rafale projette les braises dans le camp. {group} doivent évacuer en catastrophe et lutter pour éteindre les flammes.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            57,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        6
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_fire_large_wood",

                        icon:
                            "🪵",

                        text:
                            "Le feu tient parfaitement, mais consomme presque tout le bois sec disponible. {group} dorment sans incident.",

                        effects:
                            [],

                        weight:
                            25,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        20
                                }
                            ]

                        }
                    }

                ]

            },


            {
                id:
                    "desert_fire_small",

                title:
                    "🕯️ Garder un petit feu",

                description:
                    "Rester discret et économiser le bois.",

                narrative: {

                    setFlags: [
                        "judge_fire_small"
                    ],

                    removeFlags: [
                        "judge_fire_large"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_night_watch",

                            weight:
                                24
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_fire_small_success",

                        icon:
                            "🌙",

                        text:
                            "La discrétion fonctionne parfaitement. Aucun danger ne remarque le camp et {group} récupèrent tranquillement.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            43,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        34
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_fire_small_failure",

                        icon:
                            "🐗",

                        text:
                            "Le petit feu n'impressionne pas du tout les sangliers qui traversent le camp en pleine nuit.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            42,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        8
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_fire_small_courage",

                        icon:
                            "😌",

                        text:
                            "Le petit feu tient jusqu'au matin. {group} se réveillent étonnamment reposés et rassurés.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            15,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        36
                                }
                            ]

                        }
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 2 - BAIES
    // =========================================================

    {
        id:
            "desert_judge_berries",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} choisit le repas de {group}",

        category:
            "Décision de groupe",

        icon:
            "🫐",

        description:
            "{group} ont faim. {actor} découvre deux variétés de baies inconnues et doit choisir lesquelles rapporter.",

        choices: [

            {
                id:
                    "desert_berries_red",

                title:
                    "🔴 Prendre les baies rouges",

                description:
                    "Elles ressemblent vaguement à quelque chose de comestible.",

                consequences: [

                    {
                        id:
                            "desert_berries_red_good",

                        icon:
                            "😋",

                        text:
                            "Excellent choix. Les baies sont nutritives et permettent à {group} de manger correctement.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id:
                            "desert_berries_red_bad",

                        icon:
                            "🤢",

                        text:
                            "Les baies étaient toxiques. Plusieurs membres de {group} commencent rapidement à avoir des vertiges.",

                        effects: [
                            {
                                target:
                                    "others",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id:
                            "desert_berries_red_neutral",

                        icon:
                            "🫐",

                        text:
                            "Les baies sont comestibles mais presque sans goût et beaucoup trop peu nourrissantes.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]

            },


            {
                id:
                    "desert_berries_blue",

                title:
                    "🔵 Prendre les baies bleues",

                description:
                    "Elles sont très étranges, mais sentent incroyablement bon.",

                consequences: [

                    {
                        id:
                            "desert_berries_blue_good",

                        icon:
                            "✨",

                        text:
                            "Ces baies sont incroyablement énergétiques. {group} reprennent rapidement des forces.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "desert_berries_blue_bad",

                        icon:
                            "☠️",

                        text:
                            "{group} comprennent rapidement pourquoi aucun animal de l'île ne semble toucher à ces baies.",

                        effects: [
                            {
                                target:
                                    "others",

                                status:
                                    "poisoned"
                            },

                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            63
                    },

                    {
                        id:
                            "desert_berries_blue_neutral",

                        icon:
                            "😐",

                        text:
                            "Le goût est étrange, mais personne ne ressent le moindre effet. Positif ou négatif.",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]

            },


            // =================================================
            // DÉBROUILLARDISE DE L'ACTEUR
            // =================================================

            {
                id:
                    "desert_berries_test",

                title:
                    "🧪 Tester les baies avant",

                description:
                    "Observer la sève, les graines et les traces laissées par les animaux avant de les donner au groupe.",

                condition: {
                    type:
                        "status",

                    id:
                        "resourceful"
                },

                consequences: [

                    {
                        id:
                            "desert_berries_test_safe",

                        icon:
                            "🧠",

                        text:
                            "{actor} identifie les baies les moins risquées et évite les fruits les plus suspects. {group} mangent sans problème.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            85
                    },

                    {
                        id:
                            "desert_berries_test_reward",

                        icon:
                            "😋",

                        text:
                            "{actor} trouve même une variété particulièrement nourrissante. {group} récupèrent mieux que prévu.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            15
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 3 - RADEAU
    // DÉBUT MINI-HISTOIRE RADEAU
    // =========================================================

    {
        id:
            "desert_judge_raft",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} prépare le radeau de {group}",

        category:
            "Décision de groupe",

        icon:
            "🛶",

        description:
            "{group} doivent rejoindre une petite île voisine. {actor} est chargé de préparer leur embarcation.",

        choices: [

            {
                id:
                    "desert_raft_light",

                title:
                    "🪵 Faire un radeau léger",

                description:
                    "Rapide à construire et facile à manœuvrer.",

                narrative: {

                    setFlags: [
                        "judge_raft_built",
                        "judge_raft_light"
                    ],

                    removeFlags: [
                        "judge_raft_heavy",
                        "judge_raft_reinforced"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_raft_route",

                            weight:
                                32
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_raft_light_good",

                        icon:
                            "🌊",

                        text:
                            "Le radeau glisse parfaitement sur l'eau. {group} avancent rapidement et sans trop d'effort.",

                        effects:
                            [],

                        weight:
                            32,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        44
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_raft_light_bad",

                        icon:
                            "🦈",

                        text:
                            "Le radeau commence à se désassembler en pleine mer. {group} doivent nager et maintenir les morceaux ensemble.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            53,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_raft_light_reward",

                        icon:
                            "🐟",

                        text:
                            "La légèreté du radeau permet à {group} d'atteindre une zone où les poissons sont particulièrement nombreux.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            15,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        40
                                }
                            ]

                        }
                    }

                ]

            },


            {
                id:
                    "desert_raft_heavy",

                title:
                    "⚓ Faire un radeau très solide",

                description:
                    "Utiliser beaucoup plus de bois pour maximiser la résistance.",

                narrative: {

                    setFlags: [
                        "judge_raft_built",
                        "judge_raft_heavy"
                    ],

                    removeFlags: [
                        "judge_raft_light",
                        "judge_raft_reinforced"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_raft_route",

                            weight:
                                28
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_raft_heavy_good",

                        icon:
                            "💪",

                        text:
                            "Le radeau résiste parfaitement aux vagues. {group} restent au sec malgré une mer agitée.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        38
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_raft_heavy_bad",

                        icon:
                            "🌊",

                        text:
                            "Le radeau est tellement lourd que {group} doivent pagayer sans interruption pour éviter de dériver.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            47,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        10
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_raft_heavy_reward",

                        icon:
                            "🥫",

                        text:
                            "La solidité du radeau permet de transporter davantage de provisions.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            15
                    }

                ]

            },


            // =================================================
            // DÉBROUILLARDISE
            // =================================================

            {
                id:
                    "desert_raft_reinforced",

                title:
                    "🛠️ Construire un radeau renforcé",

                description:
                    "Utiliser des traverses, des lianes croisées et plusieurs flotteurs indépendants.",

                condition: {
                    type:
                        "status",

                    id:
                        "resourceful"
                },

                narrative: {

                    setFlags: [
                        "judge_raft_built",
                        "judge_raft_reinforced"
                    ],

                    removeFlags: [
                        "judge_raft_light",
                        "judge_raft_heavy"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_raft_route",

                            weight:
                                48
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_raft_reinforced_good",

                        icon:
                            "🛶",

                        text:
                            "Le radeau paraît artisanal, mais sa structure est excellente. {group} partent avec une embarcation stable et maniable.",

                        effects:
                            [],

                        weight:
                            82
                    },

                    {
                        id:
                            "desert_raft_reinforced_bonus",

                        icon:
                            "🎣",

                        text:
                            "En plus d'être solide, le radeau possède suffisamment d'espace pour transporter du matériel et quelques provisions.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            18
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 4 - GROTTE
    // =========================================================

    {
        id:
            "desert_judge_cave",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} guide {group} dans la grotte",

        category:
            "Décision de groupe",

        icon:
            "🕳️",

        description:
            "La grotte se divise en deux tunnels. {actor} doit décider où envoyer {group}.",

        choices: [

            {
                id:
                    "desert_cave_left",

                title:
                    "⬅️ Tunnel de gauche",

                description:
                    "Un passage étroit descend profondément sous terre.",

                consequences: [

                    {
                        id:
                            "desert_cave_left_good",

                        icon:
                            "💧",

                        text:
                            "{group} découvrent une réserve d'eau douce et prennent quelques minutes pour récupérer.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "desert_cave_left_bad",

                        icon:
                            "🦇",

                        text:
                            "{group} tombent sur une immense colonie de chauves-souris et doivent ressortir en courant.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            52
                    },

                    {
                        id:
                            "desert_cave_left_neutral",

                        icon:
                            "🕯️",

                        text:
                            "Le tunnel descend longtemps avant de finir sur une impasse. Le retour est interminable.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]

            },


            {
                id:
                    "desert_cave_right",

                title:
                    "➡️ Tunnel de droite",

                description:
                    "Un courant d'air frais vient de cette direction.",

                consequences: [

                    {
                        id:
                            "desert_cave_right_good",

                        icon:
                            "🌴",

                        text:
                            "Le tunnel débouche sur une petite vallée inconnue remplie de plantes et de matériaux utiles.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "desert_cave_right_bad",

                        icon:
                            "🪨",

                        text:
                            "Un éboulement surprend {group}. Tout le monde doit courir avant que le passage ne se referme.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            47
                    },

                    {
                        id:
                            "desert_cave_right_neutral",

                        icon:
                            "🌬️",

                        text:
                            "Le tunnel débouche finalement à l'extérieur, beaucoup plus loin que prévu.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            35
                    }

                ]

            },


            {
                id:
                    "desert_cave_marks",

                title:
                    "🛠️ Étudier les traces",

                description:
                    "{actor} prend le temps d'observer les courants d'air, les traces d'animaux et les marques sur les parois.",

                condition: {
                    type:
                        "status",

                    id:
                        "resourceful"
                },

                consequences: [

                    {
                        id:
                            "desert_cave_marks_good",

                        icon:
                            "🧭",

                        text:
                            "{actor} identifie un petit passage latéral beaucoup plus sûr. {group} traversent la grotte sans incident.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
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
    // 5 - GARDE DE NUIT
    // SUITE DE desert_judge_fire
    // =========================================================

    {
        id:
            "desert_judge_night_watch",

        type:
            "judge_choice",

        baseWeight:
            1,

        requirements: {

            any: [
                "judge_fire_large",
                "judge_fire_small"
            ]

        },

        title:
            "{actor} prend le dernier tour de garde",

        category:
            "Suite",

        icon:
            "🌙",

        description:
            "Après la gestion du feu plus tôt dans la nuit, {group} dorment profondément. " +
            "{actor} entend maintenant des bruits se rapprocher dans les buissons.",

        choices: [

            {
                id:
                    "night_watch_investigate",

                title:
                    "🔦 Aller voir",

                description:
                    "Quitter le feu quelques instants pour inspecter les alentours.",

                consequences: [

                    {
                        id:
                            "night_watch_investigate_good",

                        icon:
                            "🐇",

                        text:
                            "Ce n'était qu'un petit animal. {actor} revient au camp sans réveiller personne.",

                        effects:
                            [],

                        weight:
                            37
                    },

                    {
                        id:
                            "night_watch_investigate_bad",

                        icon:
                            "🐗",

                        text:
                            "{actor} tombe nez à nez avec un sanglier. Le vacarme réveille {group}, qui doivent quitter leur abri en urgence.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id:
                            "night_watch_investigate_reward",

                        icon:
                            "🍌",

                        text:
                            "{actor} découvre que le bruit provenait d'un petit animal près de plusieurs fruits encore comestibles.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            15
                    }

                ]

            },


            {
                id:
                    "night_watch_stay",

                title:
                    "🔥 Rester près du feu",

                description:
                    "Ne pas quitter le camp et attendre.",

                consequences: [

                    {
                        id:
                            "night_watch_stay_neutral",

                        icon:
                            "😌",

                        text:
                            "Les bruits finissent par disparaître. {group} ne se réveillent même pas.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "night_watch_stay_bad",

                        icon:
                            "🐒",

                        text:
                            "Pendant que {actor} fixe les buissons, plusieurs singes passent derrière lui et pillent les réserves du camp.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            45
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 6 - ROUTE DU RADEAU
    // SUITE DE desert_judge_raft
    // =========================================================

    {
        id:
            "desert_judge_raft_route",

        type:
            "judge_choice",

        baseWeight:
            1,

        requirements: {

            all: [
                "judge_raft_built"
            ]

        },

        title:
            "{actor} choisit la route du radeau",

        category:
            "Suite",

        icon:
            "🧭",

        description:
            "Le radeau préparé plus tôt est enfin sur l'eau. Deux itinéraires semblent possibles pour {group}. " +
            "{actor} doit décider lequel emprunter.",

        choices: [

            {
                id:
                    "raft_route_coast",

                title:
                    "🏝️ Longer la côte",

                description:
                    "Rester près de l'île même si le trajet sera plus long.",

                consequences: [

                    {
                        id:
                            "raft_route_coast_good",

                        icon:
                            "🥥",

                        text:
                            "{group} découvrent une petite plage inaccessible depuis la jungle et trouvent plusieurs ressources.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "raft_route_coast_bad",

                        icon:
                            "🪨",

                        text:
                            "Le radeau heurte plusieurs rochers dissimulés sous l'eau. {group} doivent descendre pour le dégager.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id:
                            "raft_route_coast_tired",

                        icon:
                            "🥵",

                        text:
                            "Le trajet est beaucoup plus long que prévu. {group} pagaient pendant des heures.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            32
                    },

                    {
                        id:
                            "raft_route_coast_neutral",

                        icon:
                            "🌊",

                        text:
                            "Le trajet est lent mais relativement calme. {group} atteignent finalement leur destination.",

                        effects:
                            [],

                        weight:
                            15
                    }

                ]

            },


            {
                id:
                    "raft_route_open_sea",

                title:
                    "🌊 Couper par le large",

                description:
                    "Un trajet beaucoup plus rapide, mais très loin de la côte.",

                consequences: [

                    {
                        id:
                            "raft_route_open_good",

                        icon:
                            "💨",

                        text:
                            "Un courant favorable pousse le radeau. {group} arrivent bien plus vite que prévu et prennent confiance.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "raft_route_open_bad",

                        icon:
                            "🌊",

                        text:
                            "Les vagues deviennent rapidement trop fortes. {group} luttent pendant de longues minutes pour ne pas chavirer.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            63
                    },

                    {
                        id:
                            "raft_route_open_neutral",

                        icon:
                            "🛶",

                        text:
                            "La mer reste suffisamment calme et le radeau traverse sans incident particulier.",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]

            },


            // =================================================
            // SI RADEAU RENFORCÉ
            // =================================================

            {
                id:
                    "raft_route_current",

                title:
                    "🧭 Suivre le courant",

                description:
                    "Faire confiance à la construction et utiliser le courant plutôt que de pagayer en permanence.",

                consequences: [

                    {
                        id:
                            "raft_route_current_good",

                        icon:
                            "🌊",

                        text:
                            "Le courant entraîne le radeau exactement dans la bonne direction. {group} économisent énormément d'énergie.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            30
                    },

                    {
                        id:
                            "raft_route_current_bad",

                        icon:
                            "🌀",

                        text:
                            "Le courant entraîne le radeau vers une zone agitée. {group} doivent pagayer brutalement pour s'en dégager.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "raft_route_current_neutral",

                        icon:
                            "🛶",

                        text:
                            "Le courant n'aide pas vraiment, mais ne provoque aucun problème particulier.",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 7 - NOUVEAU : DISTRIBUTION DES RATIONS
    // =========================================================

    {
        id:
            "desert_judge_rations",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} doit gérer les dernières rations",

        category:
            "Décision de groupe",

        icon:
            "🥫",

        description:
            "Les réserves diminuent dangereusement. {group} attendent que {actor} décide comment organiser les prochains repas.",

        choices: [

            {
                id:
                    "desert_rations_normal",

                title:
                    "🍽️ Faire un vrai repas",

                description:
                    "Manger correctement aujourd'hui quitte à réduire fortement les réserves.",

                narrative: {

                    setFlags: [
                        "judge_rations_consumed"
                    ],

                    removeFlags: [
                        "judge_rations_saved"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_empty_supplies",

                            weight:
                                28
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_rations_normal_good",

                        icon:
                            "😋",

                        text:
                            "{group} mangent enfin correctement et récupèrent une partie de leurs forces.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            30
                    },

                    {
                        id:
                            "desert_rations_normal_bad",

                        icon:
                            "🥫",

                        text:
                            "Une grande partie des provisions s'avère déjà abîmée. Les réserves disparaissent beaucoup plus vite que prévu.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            35,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_empty_supplies",

                                    weight:
                                        44
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_rations_normal_neutral",

                        icon:
                            "🍽️",

                        text:
                            "Le repas permet de tenir la journée, mais les réserves sont maintenant presque vides.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            35
                    }

                ]

            },


            {
                id:
                    "desert_rations_reduce",

                title:
                    "🥄 Réduire les portions",

                description:
                    "Faire durer les réserves aussi longtemps que possible.",

                narrative: {

                    setFlags: [
                        "judge_rations_saved"
                    ],

                    removeFlags: [
                        "judge_rations_consumed"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_empty_supplies",

                            weight:
                                16
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_rations_reduce_neutral",

                        icon:
                            "🥄",

                        text:
                            "Les portions sont minuscules, mais les réserves tiendront probablement plusieurs jours.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id:
                            "desert_rations_reduce_good",

                        icon:
                            "📦",

                        text:
                            "{actor} organise parfaitement les portions et découvre même plusieurs conserves oubliées au fond d'une caisse.",

                        effects:
                            [],

                        weight:
                            20
                    },

                    {
                        id:
                            "desert_rations_reduce_bad",

                        icon:
                            "😵",

                        text:
                            "Les portions sont beaucoup trop faibles. {group} commencent à manquer sérieusement d'énergie.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        3
                                }
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            20
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 8 - NOUVEAU : RÉSERVES VIDES
    // SUITE DES RATIONS
    // =========================================================

    {
        id:
            "desert_judge_empty_supplies",

        type:
            "judge_choice",

        baseWeight:
            1,

        requirements: {

            any: [
                "judge_rations_consumed",
                "judge_rations_saved"
            ]

        },

        title:
            "Les réserves du camp touchent à leur fin",

        category:
            "Suite",

        icon:
            "📦",

        description:
            "Après les décisions prises concernant les rations, il ne reste presque plus rien. {actor} doit envoyer {group} chercher de la nourriture.",

        choices: [

            {
                id:
                    "desert_empty_supplies_jungle",

                title:
                    "🌴 Fouiller la jungle",

                description:
                    "Chercher des fruits, racines ou petits animaux.",

                consequences: [

                    {
                        id:
                            "desert_empty_jungle_good",

                        icon:
                            "🍌",

                        text:
                            "{group} trouvent plusieurs arbres fruitiers et rapportent suffisamment de nourriture pour quelques jours.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id:
                            "desert_empty_jungle_bad",

                        icon:
                            "🐍",

                        text:
                            "La végétation est dense et plusieurs serpents se cachent sous les feuilles.",

                        effects: [
                            {
                                target:
                                    "others",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            43
                    },

                    {
                        id:
                            "desert_empty_jungle_tired",

                        icon:
                            "🥵",

                        text:
                            "{group} cherchent pendant des heures sans presque rien trouver.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            },

                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            35
                    }

                ]

            },


            {
                id:
                    "desert_empty_supplies_fishing",

                title:
                    "🎣 Pêcher",

                description:
                    "Passer la journée près des rochers et tenter de ramener du poisson.",

                consequences: [

                    {
                        id:
                            "desert_empty_fishing_good",

                        icon:
                            "🐟",

                        text:
                            "{group} trouvent un excellent endroit et attrapent suffisamment de poissons pour manger correctement.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "desert_empty_fishing_neutral",

                        icon:
                            "🎣",

                        text:
                            "Quelques petits poissons sont attrapés. Ce n'est pas grand-chose, mais cela évite le pire.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id:
                            "desert_empty_fishing_bad",

                        icon:
                            "🌊",

                        text:
                            "Une grosse vague surprend {group} sur les rochers. Le matériel est perdu et tout le monde rentre épuisé.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            45
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 9 - NOUVEAU : PLUIE TORRENTIELLE
    // =========================================================

    {
        id:
            "desert_judge_flood",

        type:
            "judge_choice",

        baseWeight:
            0.9,

        title:
            "{actor} doit déplacer le camp avant la montée des eaux",

        category:
            "Décision de groupe",

        icon:
            "🌧️",

        description:
            "Une pluie torrentielle tombe depuis plusieurs heures. L'eau commence à envahir le camp et {group} attendent la décision de {actor}.",

        choices: [

            {
                id:
                    "desert_flood_hill",

                title:
                    "⛰️ Monter sur les hauteurs",

                description:
                    "Abandonner une partie du matériel et rejoindre une zone rocheuse.",

                consequences: [

                    {
                        id:
                            "desert_flood_hill_good",

                        icon:
                            "⛰️",

                        text:
                            "{group} atteignent les hauteurs avant que la rivière ne déborde complètement.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            32
                    },

                    {
                        id:
                            "desert_flood_hill_tired",

                        icon:
                            "🥵",

                        text:
                            "La montée sous la pluie est interminable. {group} arrivent en sécurité, mais complètement épuisés.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id:
                            "desert_flood_hill_bad",

                        icon:
                            "🪨",

                        text:
                            "Le terrain détrempé provoque plusieurs chutes pendant l'ascension.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            20
                    }

                ]

            },


            {
                id:
                    "desert_flood_stay",

                title:
                    "🛖 Renforcer le camp",

                description:
                    "Essayer de détourner l'eau plutôt que d'abandonner les ressources.",

                consequences: [

                    {
                        id:
                            "desert_flood_stay_good",

                        icon:
                            "🛠️",

                        text:
                            "Les rigoles improvisées fonctionnent étonnamment bien. Le camp reste presque entièrement sec.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "desert_flood_stay_bad",

                        icon:
                            "🌊",

                        text:
                            "Le niveau monte brutalement. {group} doivent finalement évacuer dans l'urgence en abandonnant leurs affaires.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            57
                    },

                    {
                        id:
                            "desert_flood_stay_neutral",

                        icon:
                            "🌧️",

                        text:
                            "Le camp est trempé mais reste debout. Personne ne dormira vraiment cette nuit.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            25
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 10 - NOUVEAU : EXPÉDITION AU SOMMET
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "desert_judge_peak",

        type:
            "judge_choice",

        baseWeight:
            0.9,

        title:
            "{actor} organise une expédition vers le sommet",

        category:
            "Exploration",

        icon:
            "🏔️",

        description:
            "Depuis la plage, un sommet rocheux domine toute l'île. {group} pourraient y repérer une sortie, un bateau ou simplement mieux comprendre les environs.",

        choices: [

            {
                id:
                    "desert_peak_direct",

                title:
                    "🧗 Monter directement",

                description:
                    "Prendre le chemin le plus court à travers la pente rocheuse.",

                narrative: {

                    setFlags: [
                        "judge_peak_attempted",
                        "judge_peak_direct"
                    ],

                    removeFlags: [
                        "judge_peak_jungle"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_peak_top",

                            weight:
                                30
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_peak_direct_good",

                        icon:
                            "🏔️",

                        text:
                            "La pente est raide mais praticable. {group} progressent beaucoup plus vite que prévu.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_peak_top",

                                    weight:
                                        44
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_peak_direct_bad",

                        icon:
                            "🪨",

                        text:
                            "Une partie de la pente s'effondre sous les pieds de {group}.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            50,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_peak_top",

                                    weight:
                                        6
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_peak_direct_tired",

                        icon:
                            "🥵",

                        text:
                            "La pente semble interminable. {group} continuent, mais l'effort est considérable.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            30,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_peak_top",

                                    weight:
                                        20
                                }
                            ]

                        }
                    }

                ]

            },


            {
                id:
                    "desert_peak_jungle",

                title:
                    "🌴 Chercher un passage dans la jungle",

                description:
                    "Contourner la pente la plus raide en suivant une montée plus progressive.",

                narrative: {

                    setFlags: [
                        "judge_peak_attempted",
                        "judge_peak_jungle"
                    ],

                    removeFlags: [
                        "judge_peak_direct"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_peak_top",

                            weight:
                                24
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "desert_peak_jungle_good",

                        icon:
                            "🌿",

                        text:
                            "Un ancien sentier traverse la végétation et permet à {group} de progresser sans trop d'effort.",

                        effects:
                            [],

                        weight:
                            38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_peak_top",

                                    weight:
                                        38
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_peak_jungle_poison",

                        icon:
                            "🐍",

                        text:
                            "Le passage traverse une zone remplie de serpents et d'insectes agressifs.",

                        effects: [
                            {
                                target:
                                    "others",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            32,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_peak_top",

                                    weight:
                                        8
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_peak_jungle_tired",

                        icon:
                            "🌿",

                        text:
                            "La végétation est beaucoup plus dense que prévu et ralentit considérablement la progression.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
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
    // 11 - NOUVEAU : SOMMET DE L'ÎLE
    // SUITE DE desert_judge_peak
    // =========================================================

    {
        id:
            "desert_judge_peak_top",

        type:
            "judge_choice",

        baseWeight:
            1,

        requirements: {

            all: [
                "judge_peak_attempted"
            ]

        },

        title:
            "{group} atteignent enfin les hauteurs de l'île",

        category:
            "Suite",

        icon:
            "🔭",

        description:
            "Depuis un plateau rocheux, l'horizon est enfin visible. {actor} doit décider où concentrer les recherches.",

        choices: [

            {
                id:
                    "desert_peak_top_sea",

                title:
                    "🔭 Observer la mer",

                description:
                    "Chercher des bateaux, des lumières ou une autre île.",

                consequences: [

                    {
                        id:
                            "desert_peak_top_sea_good",

                        icon:
                            "🚢",

                        text:
                            "Au loin, {group} distinguent clairement ce qui ressemble à une route maritime. Pour la première fois, une véritable piste de secours apparaît.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id:
                            "desert_peak_top_sea_neutral",

                        icon:
                            "🌊",

                        text:
                            "L'océan semble vide dans toutes les directions. Au moins, {group} connaissent maintenant mieux leur position.",

                        effects:
                            [],

                        weight:
                            65
                    },

                    {
                        id:
                            "desert_peak_top_sea_bad",

                        icon:
                            "🌧️",

                        text:
                            "Une masse nuageuse énorme apparaît au large. Une nouvelle tempête semble se diriger directement vers l'île.",

                        effects:
                            [],

                        weight:
                            20
                    }

                ]

            },


            {
                id:
                    "desert_peak_top_island",

                title:
                    "🗺️ Observer l'île",

                description:
                    "Chercher des zones inconnues, de l'eau ou des traces humaines.",

                consequences: [

                    {
                        id:
                            "desert_peak_top_island_good",

                        icon:
                            "💧",

                        text:
                            "{group} repèrent une vallée verte traversée par ce qui ressemble à un cours d'eau.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "desert_peak_top_island_neutral",

                        icon:
                            "🗺️",

                        text:
                            "Le point de vue permet de mémoriser plusieurs chemins et d'éviter certaines zones dangereuses.",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            52
                    },

                    {
                        id:
                            "desert_peak_top_island_bad",

                        icon:
                            "🌧️",

                        text:
                            "La météo change brutalement et force {group} à redescendre avant d'avoir terminé leur observation.",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]

            }

        ]

    }

];