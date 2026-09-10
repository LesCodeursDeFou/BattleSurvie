export const JUDGE_SITUATIONS = [

    // =========================================================
    // 1 - PORTES
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "mansion_judge_doors",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} choisit la porte de {group}",

        category:
            "Décision de groupe",

        icon:
            "🚪",

        description:
            "{group} sont bloqués devant deux portes. {actor} est le seul à pouvoir décider laquelle ouvrir.",

        choices: [

            {
                id:
                    "mansion_door_red",

                title:
                    "🔴 Ouvrir la porte rouge",

                description:
                    "Elle est couverte de vieilles griffures.",

                narrative: {

                    setFlags: [
                        "mansion_judge_red_door"
                    ],

                    removeFlags: [
                        "mansion_judge_black_door"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_judge_red_room",

                            weight:
                                28
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_door_red_neutral",

                        icon:
                            "🕯️",

                        text:
                            "La porte mène à une chambre silencieuse où {group} peuvent reprendre leurs esprits.",

                        effects:
                            [],

                        weight:
                            38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_judge_red_room",

                                    weight:
                                        40
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_door_red_bad",

                        icon:
                            "👹",

                        text:
                            "La porte s'ouvre sur une créature qui attendait visiblement depuis très longtemps.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -3
                            }
                        ],

                        weight:
                            54,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_judge_red_room",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_door_red_good",

                        icon:
                            "🩹",

                        text:
                            "La chambre contient une petite trousse de secours encore intacte.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            8
                    }

                ]

            },


            {
                id:
                    "mansion_door_black",

                title:
                    "⚫ Ouvrir la porte noire",

                description:
                    "Elle ne possède aucune poignée visible.",

                narrative: {

                    setFlags: [
                        "mansion_judge_black_door"
                    ],

                    removeFlags: [
                        "mansion_judge_red_door"
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_door_black_good",

                        icon:
                            "🗝️",

                        text:
                            "La porte révèle un passage permettant à {group} d'éviter une partie dangereuse du manoir.",

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
                            "mansion_door_black_bad",

                        icon:
                            "🕳️",

                        text:
                            "{group} découvrent un détail important : il n'y a pas de sol derrière cette porte.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            67
                    },

                    {
                        id:
                            "mansion_door_black_neutral",

                        icon:
                            "🌑",

                        text:
                            "La porte mène à un couloir sombre mais apparemment vide.",

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
    // 2 - ESCALIERS
    // =========================================================

    {
        id:
            "mansion_judge_stairs",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} décide où envoyer {group}",

        category:
            "Décision de groupe",

        icon:
            "🪜",

        description:
            "Deux escaliers quittent le hall. {actor} doit décider du chemin emprunté par {group}.",

        choices: [

            {
                id:
                    "mansion_stairs_up",

                title:
                    "⬆️ Monter à l'étage",

                description:
                    "Des bruits de pas viennent du plafond.",

                consequences: [

                    {
                        id:
                            "mansion_stairs_up_good",

                        icon:
                            "🛏️",

                        text:
                            "{group} trouvent plusieurs chambres abandonnées mais encore utilisables.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_stairs_up_bad",

                        icon:
                            "👻",

                        text:
                            "Les bruits de pas avaient effectivement un propriétaire.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            58
                    },

                    {
                        id:
                            "mansion_stairs_up_neutral",

                        icon:
                            "🚪",

                        text:
                            "L'étage est désert. {group} progressent sans incident.",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]

            },


            {
                id:
                    "mansion_stairs_down",

                title:
                    "⬇️ Descendre à la cave",

                description:
                    "Un courant d'air glacial remonte des marches.",

                consequences: [

                    {
                        id:
                            "mansion_stairs_down_good",

                        icon:
                            "🔦",

                        text:
                            "{group} découvrent quelques outils encore fonctionnels.",

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
                            "mansion_stairs_down_bad",

                        icon:
                            "🩸",

                        text:
                            "{group} comprennent pourquoi la porte de la cave était verrouillée depuis l'extérieur.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -3
                            }
                        ],

                        weight:
                            72
                    },

                    {
                        id:
                            "mansion_stairs_down_neutral",

                        icon:
                            "🕯️",

                        text:
                            "La cave est inquiétante mais rien ne se manifeste.",

                        effects:
                            [],

                        weight:
                            20
                    }

                ]

            }

        ]

    },


    // =========================================================
    // 3 - MIROIR
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "mansion_judge_mirror",

        type:
            "judge_choice",

        baseWeight:
            1,

        title:
            "{actor} doit agir sur l'étrange miroir",

        category:
            "Décision de groupe",

        icon:
            "🪞",

        description:
            "Les reflets de {group} ne reproduisent plus leurs mouvements. {actor} doit décider quoi faire.",

        choices: [

            {
                id:
                    "mansion_mirror_break",

                title:
                    "🔨 Briser le miroir",

                description:
                    "Détruire immédiatement cette chose.",

                narrative: {

                    setFlags: [
                        "mansion_judge_mirror_broken"
                    ],

                    removeFlags: [
                        "mansion_judge_mirror_covered"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_judge_mirror_shards",

                            weight:
                                28
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_mirror_break_neutral",

                        icon:
                            "💥",

                        text:
                            "Le miroir éclate. Pendant quelques secondes, chaque morceau continue de refléter {group}.",

                        effects:
                            [],

                        weight:
                            32,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_judge_mirror_shards",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_mirror_break_bad",

                        icon:
                            "🩸",

                        text:
                            "Les éclats sont projetés dans toute la pièce.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            58,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_judge_mirror_shards",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_mirror_break_good",

                        icon:
                            "✨",

                        text:
                            "Le miroir éclate et une étrange pression disparaît immédiatement de la pièce.",

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
                    "mansion_mirror_cover",

                title:
                    "🛏️ Recouvrir le miroir",

                description:
                    "Empêcher les reflets de voir la pièce.",

                narrative: {

                    setFlags: [
                        "mansion_judge_mirror_covered"
                    ],

                    removeFlags: [
                        "mansion_judge_mirror_broken"
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_mirror_cover_neutral",

                        icon:
                            "😌",

                        text:
                            "Dès que le miroir disparaît sous le tissu, les phénomènes cessent.",

                        effects:
                            [],

                        weight:
                            55
                    },

                    {
                        id:
                            "mansion_mirror_cover_bad",

                        icon:
                            "👤",

                        text:
                            "Le tissu tombe. Les reflets ont disparu du miroir... et sont maintenant derrière {group}.",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -3
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
    // 4 - CHAMBRE ROUGE
    // SUITE PORTE ROUGE
    // =========================================================

    {
        id:
            "mansion_judge_red_room",

        type:
            "judge_choice",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_judge_red_door"
            ]

        },

        title:
            "{actor} décide comment fouiller la chambre rouge",

        category:
            "Suite",

        icon:
            "🛏️",

        description:
            "La pièce derrière la porte rouge est toujours accessible. {group} remarquent une armoire fermée et une vieille trappe sous le lit.",

        choices: [

            {
                id:
                    "mansion_red_room_wardrobe",

                title:
                    "🚪 Ouvrir l'armoire",

                description:
                    "Quelque chose gratte légèrement à l'intérieur.",

                consequences: [

                    {
                        id:
                            "mansion_red_room_wardrobe_bad",

                        text:
                            "Une silhouette se jette sur {group} dès l'ouverture.",

                        icon:
                            "👹",

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
                            "mansion_red_room_wardrobe_neutral",

                        text:
                            "L'armoire est vide, sauf pour quelques vêtements moisis.",

                        icon:
                            "🧥",

                        effects:
                            [],

                        weight:
                            30
                    },

                    {
                        id:
                            "mansion_red_room_wardrobe_good",

                        text:
                            "Une petite boîte médicale se trouve derrière les vêtements.",

                        icon:
                            "🩹",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            8
                    }

                ]
            },


            {
                id:
                    "mansion_red_room_trapdoor",

                title:
                    "🕳️ Examiner la trappe",

                description:
                    "Elle semble descendre entre les murs.",

                consequences: [

                    {
                        id:
                            "mansion_red_room_trapdoor_bad",

                        text:
                            "Le plancher cède autour de la trappe.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            58
                    },

                    {
                        id:
                            "mansion_red_room_trapdoor_neutral",

                        text:
                            "La trappe mène simplement à un ancien conduit de maintenance.",

                        icon:
                            "🔧",

                        effects:
                            [],

                        weight:
                            42
                    }

                ]
            }

        ]

    },


    // =========================================================
    // 5 - ÉCLATS DU MIROIR
    // SUITE MIROIR BRISÉ
    // =========================================================

    {
        id:
            "mansion_judge_mirror_shards",

        type:
            "judge_choice",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_judge_mirror_broken"
            ],

            not: [
                "mansion_judge_mirror_covered"
            ]

        },

        title:
            "Les éclats du miroir commencent à bouger",

        category:
            "Suite",

        icon:
            "🪞",

        description:
            "Les morceaux du miroir brisé vibrent sur le sol et montrent maintenant des images différentes de {group}.",

        choices: [

            {
                id:
                    "mansion_shards_collect",

                title:
                    "🧤 Ramasser les morceaux",

                description:
                    "Éviter qu'ils restent dispersés.",

                consequences: [

                    {
                        id:
                            "mansion_shards_collect_bad",

                        text:
                            "Plusieurs éclats se déplacent brusquement et coupent {group}.",

                        icon:
                            "🩸",

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
                            "mansion_shards_collect_neutral",

                        text:
                            "Les morceaux cessent de bouger dès qu'ils sont enfermés dans un tissu.",

                        icon:
                            "😮‍💨",

                        effects:
                            [],

                        weight:
                            30
                    },

                    {
                        id:
                            "mansion_shards_collect_good",

                        text:
                            "Un symbole protecteur apparaît brièvement dans l'un des éclats.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            8
                    }

                ]
            },


            {
                id:
                    "mansion_shards_leave",

                title:
                    "🚪 Quitter la pièce",

                description:
                    "Laisser les éclats où ils sont.",

                consequences: [

                    {
                        id:
                            "mansion_shards_leave_neutral",

                        text:
                            "{group} quittent la pièce et ferment la porte derrière eux.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            68
                    },

                    {
                        id:
                            "mansion_shards_leave_bad",

                        text:
                            "Plusieurs éclats glissent sous la porte et suivent {group} dans le couloir.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            32
                    }

                ]
            }

        ]

    }

];