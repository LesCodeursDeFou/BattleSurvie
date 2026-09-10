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
                                28
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

                                lives:
                                    1
                            }
                        ],

                        weight:
                            16,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        38
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
                            "Une rafale projette des braises partout. Le camp prend feu et {group} doivent évacuer en catastrophe.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            64,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_fire_large_neutral",

                        icon:
                            "🔥",

                        text:
                            "Le feu reste impressionnant mais consomme presque tout le bois disponible. {group} passent la nuit sans incident.",

                        effects:
                            [],

                        weight:
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        18
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
                                22
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

                        effects:
                            [],

                        weight:
                            48,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_night_watch",

                                    weight:
                                        30
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
                            "Le petit feu n'impressionne pas du tout les sangliers qui traversent le camp de {group}.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
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
                                        6
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "desert_fire_small_good",

                        icon:
                            "😌",

                        text:
                            "Le petit feu tient toute la nuit avec très peu de bois. {group} récupèrent un peu mieux que prévu.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10,

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
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 2 - BAIES
    // CLASSIQUE
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
                    "Elles sont très appétissantes.",

                consequences: [

                    {
                        id:
                            "desert_berries_red_good",

                        icon:
                            "😋",

                        text:
                            "Excellent choix. Les baies sont nutritives et redonnent un peu de force à {group}.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "desert_berries_red_bad",

                        icon:
                            "🤢",

                        text:
                            "Les baies étaient toxiques. {group} passent les prochaines heures dans un état lamentable.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            62
                    },

                    {
                        id:
                            "desert_berries_red_neutral",

                        icon:
                            "🫐",

                        text:
                            "Les baies sont comestibles mais presque sans goût et peu nourrissantes.",

                        effects:
                            [],

                        weight:
                            20
                    }

                ]

            },


            {
                id:
                    "desert_berries_blue",

                title:
                    "🔵 Prendre les baies bleues",

                description:
                    "Elles semblent beaucoup plus étranges, mais sentent très bon.",

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
                                    2
                            }
                        ],

                        weight:
                            10
                    },

                    {
                        id:
                            "desert_berries_blue_bad",

                        icon:
                            "🥴",

                        text:
                            "{group} comprennent rapidement pourquoi aucun animal de l'île ne mange ces baies.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -3
                            }
                        ],

                        weight:
                            75
                    },

                    {
                        id:
                            "desert_berries_blue_neutral",

                        icon:
                            "😐",

                        text:
                            "Le goût est étrange mais personne ne semble ressentir le moindre effet.",

                        effects:
                            [],

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
                    "Rapide et facile à manœuvrer.",

                narrative: {

                    setFlags: [
                        "judge_raft_built",
                        "judge_raft_light"
                    ],

                    removeFlags: [
                        "judge_raft_heavy"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_raft_route",

                            weight:
                                30
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
                            "Le radeau glisse parfaitement sur l'eau. {group} avancent rapidement.",

                        effects:
                            [],

                        weight:
                            34,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        42
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
                            "Le radeau commence à se désassembler en pleine mer. {group} doivent lutter pour rester à flot.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            56,

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
                            "La légèreté du radeau permet à {group} d'atteindre une zone de pêche riche en poissons.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10,

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
                    "Utiliser un maximum de bois pour sécuriser l'embarcation.",

                narrative: {

                    setFlags: [
                        "judge_raft_built",
                        "judge_raft_heavy"
                    ],

                    removeFlags: [
                        "judge_raft_light"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_judge_raft_route",

                            weight:
                                26
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
                            "Le radeau résiste parfaitement aux vagues et garde {group} au sec.",

                        effects:
                            [],

                        weight:
                            42,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        36
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
                            "Le radeau est tellement lourd qu'il s'enfonce dangereusement dès que {group} montent dessus.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            48,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_judge_raft_route",

                                    weight:
                                        6
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
                            "La solidité du radeau permet à {group} de transporter quelques provisions supplémentaires.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 4 - GROTTE
    // CLASSIQUE
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
                    "Un passage étroit qui descend profondément.",

                consequences: [

                    {
                        id:
                            "desert_cave_left_good",

                        icon:
                            "💧",

                        text:
                            "{group} découvrent une réserve d'eau douce.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "desert_cave_left_bad",

                        icon:
                            "🦇",

                        text:
                            "{group} tombent sur une énorme colonie de chauves-souris qui n'apprécient pas leur visite.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            63
                    },

                    {
                        id:
                            "desert_cave_left_neutral",

                        icon:
                            "🕯️",

                        text:
                            "Le tunnel descend longtemps avant de finir sur une impasse.",

                        effects:
                            [],

                        weight:
                            25
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
                            "Le tunnel débouche sur une partie inconnue de l'île remplie de ressources.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
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
                            "Un éboulement surprend {group} et bloque temporairement le passage.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            52
                    },

                    {
                        id:
                            "desert_cave_right_neutral",

                        icon:
                            "🌬️",

                        text:
                            "Le tunnel débouche finalement à l'extérieur, mais beaucoup plus loin que prévu.",

                        effects:
                            [],

                        weight:
                            30
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
                            36
                    },

                    {
                        id:
                            "night_watch_investigate_bad",

                        icon:
                            "🐗",

                        text:
                            "{actor} tombe nez à nez avec un sanglier. Le vacarme réveille {group} en catastrophe.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            54
                    },

                    {
                        id:
                            "night_watch_investigate_reward",

                        icon:
                            "🍌",

                        text:
                            "{actor} découvre que le bruit provenait d'un petit animal près de quelques fruits encore comestibles.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10
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
                            "Les bruits finissent par disparaître. La nuit se termine sans incident.",

                        effects:
                            [],

                        weight:
                            60
                    },

                    {
                        id:
                            "night_watch_stay_bad",

                        icon:
                            "🐒",

                        text:
                            "Pendant que {actor} surveille le feu, plusieurs singes passent derrière lui et fouillent les affaires de {group}.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
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
                            "{group} découvrent une petite plage accessible uniquement depuis la mer avec quelques ressources.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id:
                            "raft_route_coast_bad",

                        icon:
                            "🪨",

                        text:
                            "Le radeau heurte plusieurs rochers dissimulés sous l'eau.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            40
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
                            45
                    }

                ]

            },


            {
                id:
                    "raft_route_open_sea",

                title:
                    "🌊 Couper par le large",

                description:
                    "Un trajet beaucoup plus rapide, mais loin de la côte.",

                consequences: [

                    {
                        id:
                            "raft_route_open_good",

                        icon:
                            "💨",

                        text:
                            "Un courant favorable pousse le radeau et permet à {group} d'arriver bien plus vite que prévu.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            8
                    },

                    {
                        id:
                            "raft_route_open_bad",

                        icon:
                            "🌊",

                        text:
                            "Les vagues deviennent rapidement beaucoup trop fortes. {group} luttent pour ne pas chavirer.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            72
                    },

                    {
                        id:
                            "raft_route_open_neutral",

                        icon:
                            "🛶",

                        text:
                            "La mer reste suffisamment calme et le radeau poursuit sa route sans incident particulier.",

                        effects:
                            [],

                        weight:
                            20
                    }

                ]

            }

        ]

    }

];