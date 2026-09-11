export const JUDGE_SITUATIONS = [

    // =========================================================
    // 1 - PORTES
    // DÉBUT MINI-HISTOIRE PORTE ROUGE
    // =========================================================

    {
        id: "mansion_judge_doors",
        type: "judge_choice",
        baseWeight: 1,

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
                id: "mansion_door_red",

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
                            id: "mansion_judge_red_room",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_door_red_safe",

                        icon:
                            "🕯️",

                        text:
                            "La porte mène à une chambre silencieuse. Pour quelques minutes, aucun phénomène ne semble capable de suivre {group}.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 28,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_judge_red_room",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_door_red_creature",

                        icon:
                            "👹",

                        text:
                            "La porte s'ouvre sur une créature qui attendait visiblement depuis très longtemps.",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            },

                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 42,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_judge_red_room",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_door_red_fear",

                        icon:
                            "👁️",

                        text:
                            "La pièce semble vide. Pourtant, tous les murs sont couverts de portraits représentant {group} en train d'entrer dans la chambre.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 20,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_judge_red_room",
                                    weight: 34
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_door_red_good",

                        icon:
                            "🩹",

                        text:
                            "Une petite trousse médicale encore intacte est trouvée sous un meuble.",

                        effects: [
                            {
                                target: "others",
                                lives: 1
                            }
                        ],

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_door_black",

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
                        id: "mansion_door_black_good",

                        icon:
                            "🗝️",

                        text:
                            "Le mur pivote et révèle un passage secret permettant à {group} d'éviter plusieurs pièces dangereuses.",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_door_black_drop",

                        icon:
                            "🕳️",

                        text:
                            "{group} découvrent un détail important : il n'y a presque aucun sol derrière cette porte.",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_door_black_fear",

                        icon:
                            "🌑",

                        text:
                            "Derrière la porte se trouve une obscurité parfaite. Lorsque {group} reculent, plusieurs respirations continuent depuis l'intérieur.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 27
                    },

                    {
                        id: "mansion_door_black_neutral",

                        icon:
                            "🚪",

                        text:
                            "Le passage mène à un couloir sombre mais apparemment vide.",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_door_lucid",

                title:
                    "👁️ Examiner les deux portes",

                description:
                    "{actor} prend le temps d'observer les griffures, les traces au sol et la disposition des murs.",

                condition: {
                    type: "status",
                    id: "lucid"
                },

                narrative: {
                    setFlags: [
                        "mansion_judge_red_door"
                    ],

                    removeFlags: [
                        "mansion_judge_black_door"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_judge_red_room",
                            weight: 42
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_door_lucid_good",

                        icon:
                            "🧠",

                        text:
                            "{actor} remarque que les griffures de la porte rouge vont vers l'extérieur, pas vers l'intérieur. {group} choisissent donc le passage le moins suspect.",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - ESCALIERS
    // =========================================================

    {
        id: "mansion_judge_stairs",
        type: "judge_choice",
        baseWeight: 1,

        title:
            "{actor} décide où envoyer {group}",

        category:
            "Décision de groupe",

        icon:
            "🪜",

        description:
            "Deux escaliers quittent le hall. {actor} doit choisir le chemin emprunté par {group}.",

        choices: [

            {
                id: "mansion_stairs_up",

                title:
                    "⬆️ Monter à l'étage",

                description:
                    "Des bruits de pas viennent du plafond.",

                consequences: [

                    {
                        id: "mansion_stairs_up_good",

                        icon:
                            "🛏️",

                        text:
                            "{group} trouvent plusieurs chambres calmes et peuvent reprendre leurs esprits.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_stairs_up_bad",

                        icon:
                            "👻",

                        text:
                            "Les bruits de pas avaient effectivement un propriétaire. Il attend {group} en haut de l'escalier.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_stairs_up_attack",

                        icon:
                            "💥",

                        text:
                            "Une silhouette pousse plusieurs membres de {group} alors qu'ils montent.",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_stairs_up_neutral",

                        icon:
                            "🚪",

                        text:
                            "L'étage est désert. {group} progressent sans incident.",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_stairs_down",

                title:
                    "⬇️ Descendre à la cave",

                description:
                    "Un courant d'air glacial remonte des marches.",

                consequences: [

                    {
                        id: "mansion_stairs_down_good",

                        icon:
                            "🔦",

                        text:
                            "{group} trouvent une vieille lampe, plusieurs plans du sous-sol et quelques notes utiles.",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_stairs_down_bad",

                        icon:
                            "🩸",

                        text:
                            "{group} comprennent assez vite pourquoi la cave était verrouillée depuis l'extérieur.",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            },

                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_stairs_down_fear",

                        icon:
                            "👂",

                        text:
                            "À mesure que {group} descendent, quelqu'un descend exactement une marche derrière eux.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_stairs_down_neutral",

                        icon:
                            "🕯️",

                        text:
                            "La cave est inquiétante mais rien ne se manifeste immédiatement.",

                        effects: [],

                        weight: 15
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
        id: "mansion_judge_mirror",
        type: "judge_choice",
        baseWeight: 1,

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
                id: "mansion_mirror_break",

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
                            id: "mansion_judge_mirror_shards",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_mirror_break_neutral",

                        icon:
                            "💥",

                        text:
                            "Le miroir éclate. Pendant quelques secondes, chaque morceau continue de refléter {group}.",

                        effects: [],

                        weight: 28,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_judge_mirror_shards",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_mirror_break_bad",

                        icon:
                            "🩸",

                        text:
                            "Les éclats sont projetés dans toute la pièce.",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 36,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_judge_mirror_shards",
                                    weight: 10
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_mirror_break_fear",

                        icon:
                            "👥",

                        text:
                            "Chaque éclat montre une version différente de {group}. Certaines continuent de bouger alors que les vrais joueurs restent immobiles.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 24,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_judge_mirror_shards",
                                    weight: 46
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_mirror_break_good",

                        icon:
                            "✨",

                        text:
                            "Le miroir éclate et une étrange pression disparaît immédiatement de la pièce.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 12
                    }

                ]
            },


            {
                id: "mansion_mirror_cover",

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
                        id: "mansion_mirror_cover_good",

                        icon:
                            "😌",

                        text:
                            "Dès que le miroir disparaît sous le tissu, les phénomènes cessent.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 48
                    },

                    {
                        id: "mansion_mirror_cover_bad",

                        icon:
                            "👤",

                        text:
                            "Le tissu tombe. Les reflets ont disparu du miroir... et sont maintenant debout derrière {group}.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 37
                    },

                    {
                        id: "mansion_mirror_cover_possession",

                        icon:
                            "👿",

                        text:
                            "Le miroir devient totalement noir sous le tissu. Plusieurs secondes plus tard, certains membres de {group} entendent leur propre voix murmurer dans leur tête.",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_mirror_lucid",

                title:
                    "👁️ Observer les reflets sans agir",

                description:
                    "{actor} essaie de comprendre ce que les reflets tentent réellement de provoquer.",

                condition: {
                    type: "status",
                    id: "lucid"
                },

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
                        id: "mansion_mirror_lucid_good",

                        icon:
                            "🧠",

                        text:
                            "{actor} comprend que le miroir réagit uniquement à la peur. {group} évitent son regard et quittent la pièce sans incident.",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 100
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
        id: "mansion_judge_red_room",
        type: "judge_choice",
        baseWeight: 1,

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
                id: "mansion_red_room_wardrobe",

                title:
                    "🚪 Ouvrir l'armoire",

                description:
                    "Quelque chose gratte légèrement à l'intérieur.",

                consequences: [

                    {
                        id: "mansion_red_room_wardrobe_bad",

                        text:
                            "Une silhouette se jette sur {group} dès l'ouverture.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            },

                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_red_room_wardrobe_fear",

                        text:
                            "L'armoire est vide, sauf pour plusieurs vêtements qui semblent contenir des personnes invisibles.",

                        icon:
                            "🧥",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 23
                    },

                    {
                        id: "mansion_red_room_wardrobe_neutral",

                        text:
                            "L'armoire est vide, à part quelques vêtements moisis.",

                        icon:
                            "🧥",

                        effects: [],

                        weight: 25
                    },

                    {
                        id: "mansion_red_room_wardrobe_good",

                        text:
                            "Une petite boîte médicale est cachée derrière les vêtements.",

                        icon:
                            "🩹",

                        effects: [
                            {
                                target: "others",
                                lives: 1
                            }
                        ],

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_red_room_trapdoor",

                title:
                    "🕳️ Examiner la trappe",

                description:
                    "Elle semble descendre entre les murs.",

                consequences: [

                    {
                        id: "mansion_red_room_trapdoor_bad",

                        text:
                            "Le plancher cède autour de la trappe et plusieurs membres de {group} chutent lourdement.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_red_room_trapdoor_fear",

                        text:
                            "Une voix monte du conduit et récite lentement les prénoms de tous les membres de {group}.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 27
                    },

                    {
                        id: "mansion_red_room_trapdoor_good",

                        text:
                            "La trappe mène à un ancien conduit technique permettant de contourner plusieurs pièces.",

                        icon:
                            "🧠",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_red_room_trapdoor_neutral",

                        text:
                            "La trappe mène simplement à un ancien conduit de maintenance condamné.",

                        icon:
                            "🔧",

                        effects: [],

                        weight: 20
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
        id: "mansion_judge_mirror_shards",
        type: "judge_choice",
        baseWeight: 1,

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
            "Les morceaux du miroir vibrent sur le sol et montrent maintenant des images différentes de {group}.",

        choices: [

            {
                id: "mansion_shards_collect",

                title:
                    "🧤 Ramasser les morceaux",

                description:
                    "Éviter qu'ils restent dispersés.",

                consequences: [

                    {
                        id: "mansion_shards_collect_bad",

                        text:
                            "Plusieurs éclats se déplacent brusquement et coupent {group}.",

                        icon:
                            "🩸",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_shards_collect_fear",

                        text:
                            "Chaque morceau montre désormais une personne de {group} morte d'une manière différente.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_shards_collect_neutral",

                        text:
                            "Les morceaux cessent de bouger dès qu'ils sont enfermés dans un tissu.",

                        icon:
                            "😮‍💨",

                        effects: [],

                        weight: 25
                    },

                    {
                        id: "mansion_shards_collect_good",

                        text:
                            "Un symbole protecteur apparaît brièvement dans l'un des éclats.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_shards_leave",

                title:
                    "🚪 Quitter la pièce",

                description:
                    "Laisser les éclats où ils sont.",

                consequences: [

                    {
                        id: "mansion_shards_leave_good",

                        text:
                            "{group} quittent la pièce et referment la porte. Les vibrations cessent immédiatement.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 58
                    },

                    {
                        id: "mansion_shards_leave_bad",

                        text:
                            "Plusieurs éclats glissent sous la porte et continuent de suivre {group}.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 27
                    },

                    {
                        id: "mansion_shards_leave_possession",

                        text:
                            "Un éclat reflète soudainement quelqu'un qui n'est pas dans le groupe. Quelques secondes plus tard, cette silhouette apparaît derrière eux.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - NOUVEAU : HORLOGE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_judge_clock",
        type: "judge_choice",
        baseWeight: 1,

        title:
            "{actor} décide quoi faire avec l'horloge",

        category:
            "Décision de groupe",

        icon:
            "🕰️",

        description:
            "Une immense horloge s'arrête à 3 h 13. Toutes les autres horloges du manoir font exactement la même chose.",

        choices: [

            {
                id: "mansion_clock_restart",

                title:
                    "🔧 Relancer le mécanisme",

                description:
                    "Faire repartir le temps normalement.",

                narrative: {
                    setFlags: [
                        "mansion_judge_clock_touched"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_judge_clock_chime",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_clock_restart_good",

                        text:
                            "Le mécanisme repart normalement. Toutes les autres horloges suivent quelques secondes plus tard.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_clock_restart_bad",

                        text:
                            "L'horloge repart brutalement à l'envers. Les aiguilles de toutes les autres pièces font de même.",

                        icon:
                            "🌀",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_clock_restart_curse",

                        text:
                            "Le cadran affiche pendant une seconde les noms de {group} à la place des chiffres.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "others",
                                status: "cursed"
                            }
                        ],

                        weight: 12
                    },

                    {
                        id: "mansion_clock_restart_neutral",

                        text:
                            "Le mécanisme refuse de repartir.",

                        icon:
                            "🕰️",

                        effects: [],

                        weight: 28
                    }

                ]
            },


            {
                id: "mansion_clock_break",

                title:
                    "🔨 Détruire l'horloge",

                description:
                    "Empêcher toute nouvelle sonnerie.",

                narrative: {
                    setFlags: [
                        "mansion_judge_clock_destroyed"
                    ],

                    removeFlags: [
                        "mansion_judge_clock_touched"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_clock_break_good",

                        text:
                            "Le mécanisme se brise. Toutes les autres horloges reprennent immédiatement une heure différente.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_clock_break_bad",

                        text:
                            "Au premier coup, toutes les horloges du manoir se mettent à sonner simultanément.",

                        icon:
                            "🔔",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_clock_break_neutral",

                        text:
                            "L'horloge est détruite, mais les autres continuent d'afficher 3 h 13.",

                        icon:
                            "🕰️",

                        effects: [],

                        weight: 20
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - NOUVEAU : TREIZIÈME SONNERIE
    // SUITE HORLOGE
    // =========================================================

    {
        id: "mansion_judge_clock_chime",
        type: "judge_choice",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_judge_clock_touched"
            ],

            not: [
                "mansion_judge_clock_destroyed"
            ]
        },

        title:
            "L'horloge sonne une treizième fois",

        category:
            "Suite",

        icon:
            "🔔",

        description:
            "Alors que personne ne touche à l'horloge, une treizième sonnerie résonne. Une porte jusque-là invisible apparaît dans le mur.",

        choices: [

            {
                id: "mansion_clock_chime_open",

                title:
                    "🚪 Ouvrir la porte",

                description:
                    "Voir ce que la treizième sonnerie vient de révéler.",

                consequences: [

                    {
                        id: "mansion_clock_chime_open_good",

                        text:
                            "La porte mène à une petite pièce contenant plusieurs documents sur l'histoire du manoir.",

                        icon:
                            "📜",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_clock_chime_open_bad",

                        text:
                            "La porte ouvre sur une pièce remplie d'horloges. Chacune affiche une heure de mort différente pour chaque membre de {group}.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_clock_chime_open_curse",

                        text:
                            "Les aiguilles de plusieurs horloges se tournent simultanément vers {group}. Une marque noire apparaît sur leurs poignets.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "others",
                                status: "cursed"
                            }
                        ],

                        weight: 12
                    },

                    {
                        id: "mansion_clock_chime_open_neutral",

                        text:
                            "La pièce est vide, à l'exception d'une horloge arrêtée depuis des décennies.",

                        icon:
                            "🕰️",

                        effects: [],

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_clock_chime_leave",

                title:
                    "🚶 Ignorer la porte",

                description:
                    "Une treizième sonnerie semble être un assez bon avertissement.",

                consequences: [

                    {
                        id: "mansion_clock_chime_leave_good",

                        text:
                            "{group} quittent le hall. Derrière eux, la porte disparaît progressivement du mur.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 65
                    },

                    {
                        id: "mansion_clock_chime_leave_bad",

                        text:
                            "La porte disparaît. La sonnerie, elle, continue dans toutes les pièces traversées.",

                        icon:
                            "🔔",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 35
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - NOUVEAU : PORTRAITS
    // =========================================================

    {
        id: "mansion_judge_portraits",
        type: "judge_choice",
        baseWeight: 0.9,

        title:
            "{actor} choisit comment traverser la galerie",

        category:
            "Décision de groupe",

        icon:
            "🖼️",

        description:
            "Des centaines de portraits couvrent les murs. Tous les visages suivent {group} du regard.",

        choices: [

            {
                id: "mansion_portraits_fast",

                title:
                    "🏃 Traverser rapidement",

                description:
                    "Ne pas leur laisser le temps de faire quoi que ce soit.",

                consequences: [

                    {
                        id: "mansion_portraits_fast_good",

                        text:
                            "{group} atteignent l'autre porte avant que quoi que ce soit ne se produise.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 38
                    },

                    {
                        id: "mansion_portraits_fast_bad",

                        text:
                            "Les personnages peints commencent tous à sortir leurs bras des cadres lorsque {group} passent devant eux.",

                        icon:
                            "✋",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 32
                    },

                    {
                        id: "mansion_portraits_fast_fear",

                        text:
                            "Les portraits montrent soudainement {group} plusieurs secondes avant chacun de leurs mouvements.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 30
                    }

                ]
            },


            {
                id: "mansion_portraits_examine",

                title:
                    "👁️ Examiner les tableaux",

                description:
                    "Chercher un indice dans les peintures.",

                consequences: [

                    {
                        id: "mansion_portraits_examine_good",

                        text:
                            "Une série de tableaux montre toujours le même passage secret derrière un rideau.",

                        icon:
                            "🧠",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_portraits_examine_bad",

                        text:
                            "Les portraits changent progressivement pour représenter les membres de {group} morts dans cette même galerie.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_portraits_examine_possession",

                        text:
                            "L'un des portraits de {group} cligne des yeux. Quelques secondes plus tard, plusieurs survivants ont l'impression de regarder la pièce depuis l'intérieur des cadres.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_portraits_examine_neutral",

                        text:
                            "La galerie ne révèle rien d'autre que des dizaines de regards particulièrement désagréables.",

                        icon:
                            "🖼️",

                        effects: [],

                        weight: 20
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 9 - NOUVEAU : CHAPELLE
    // =========================================================

    {
        id: "mansion_judge_chapel",
        type: "judge_choice",
        baseWeight: 0.85,

        title:
            "{actor} décide quoi faire dans la chapelle",

        category:
            "Décision de groupe",

        icon:
            "🕯️",

        description:
            "{group} découvrent une petite chapelle où l'air semble beaucoup plus calme que dans le reste du manoir.",

        choices: [

            {
                id: "mansion_chapel_rest",

                title:
                    "😌 Se reposer",

                description:
                    "Profiter de cet endroit apparemment protégé.",

                consequences: [

                    {
                        id: "mansion_chapel_rest_good",

                        text:
                            "Pendant plusieurs minutes, aucun bruit ni manifestation n'atteint {group}.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            }
                        ],

                        weight: 55
                    },

                    {
                        id: "mansion_chapel_rest_courage",

                        text:
                            "La sensation de sécurité redonne confiance à {group}.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_chapel_rest_bad",

                        text:
                            "Toutes les bougies s'éteignent. Une silhouette est maintenant assise au premier rang.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_chapel_book",

                title:
                    "📖 Examiner le livre sur l'autel",

                description:
                    "Il semble avoir été posé là récemment.",

                consequences: [

                    {
                        id: "mansion_chapel_book_good",

                        text:
                            "Le livre décrit plusieurs symboles capables de neutraliser les illusions du manoir.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 22
                    },

                    {
                        id: "mansion_chapel_book_bad",

                        text:
                            "Une phrase apparaît lentement : « Vous auriez dû rester dehors. »",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_chapel_book_curse",

                        text:
                            "Tous les noms écrits dans le livre s'effacent sauf ceux de {group}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "others",
                                status: "cursed"
                            }
                        ],

                        weight: 13
                    },

                    {
                        id: "mansion_chapel_book_neutral",

                        text:
                            "Le livre est totalement vide.",

                        icon:
                            "📖",

                        effects: [],

                        weight: 30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 10 - NOUVEAU : CHAMBRE AUX BOUGIES
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_judge_candles",
        type: "judge_choice",
        baseWeight: 0.9,

        title:
            "{actor} doit choisir quelles bougies éteindre",

        category:
            "Décision de groupe",

        icon:
            "🕯️",

        description:
            "Une pièce contient deux cercles de bougies : l'un blanc, l'autre noir. Un message indique : « Un seul doit rester allumé. »",

        choices: [

            {
                id: "mansion_candles_white",

                title:
                    "⚪ Éteindre les bougies noires",

                description:
                    "Conserver uniquement le cercle blanc.",

                narrative: {
                    setFlags: [
                        "mansion_white_candles"
                    ],

                    removeFlags: [
                        "mansion_black_candles"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_judge_candle_aftermath",
                            weight: 28
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_candles_white_good",

                        text:
                            "Le cercle blanc reste allumé et diffuse une lumière étonnamment rassurante.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 32
                    },

                    {
                        id: "mansion_candles_white_bad",

                        text:
                            "Lorsque la dernière bougie noire s'éteint, plusieurs silhouettes apparaissent juste derrière le cercle blanc.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_candles_white_neutral",

                        text:
                            "La pièce devient plus lumineuse, mais rien d'autre ne semble se produire.",

                        icon:
                            "🕯️",

                        effects: [],

                        weight: 30
                    }

                ]
            },


            {
                id: "mansion_candles_black",

                title:
                    "⚫ Éteindre les bougies blanches",

                description:
                    "Conserver uniquement le cercle noir.",

                narrative: {
                    setFlags: [
                        "mansion_black_candles"
                    ],

                    removeFlags: [
                        "mansion_white_candles"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_judge_candle_aftermath",
                            weight: 34
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_candles_black_good",

                        text:
                            "Le cercle noir révèle plusieurs symboles invisibles dans la lumière normale.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_candles_black_bad",

                        text:
                            "Les ombres de {group} quittent lentement leurs pieds et se déplacent seules.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_candles_black_possession",

                        text:
                            "Une des ombres fusionne brutalement avec son propriétaire.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_candles_black_neutral",

                        text:
                            "La pièce devient presque entièrement noire mais reste silencieuse.",

                        icon:
                            "🌑",

                        effects: [],

                        weight: 25
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 11 - NOUVEAU : APRÈS LES BOUGIES
    // =========================================================

    {
        id: "mansion_judge_candle_aftermath",
        type: "judge_choice",
        baseWeight: 1,

        requirements: {
            any: [
                "mansion_white_candles",
                "mansion_black_candles"
            ]
        },

        title:
            "Les bougies se rallument derrière {group}",

        category:
            "Suite",

        icon:
            "🕯️",

        description:
            "Alors que {group} quittent la pièce, toutes les bougies précédemment éteintes se rallument. Un murmure demande : « Pourquoi avez-vous choisi ? »",

        choices: [

            {
                id: "mansion_candle_aftermath_answer",

                title:
                    "🗣️ Répondre",

                description:
                    "Expliquer le choix effectué.",

                consequences: [

                    {
                        id: "mansion_candle_aftermath_answer_good",

                        text:
                            "Le murmure répond simplement : « Intéressant. » Puis toutes les flammes s'éteignent.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_candle_aftermath_answer_bad",

                        text:
                            "Toutes les voix de la pièce répètent la réponse de {actor} avec un ton moqueur.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_candle_aftermath_answer_curse",

                        text:
                            "Le murmure répond : « Alors assumez. » Plusieurs flammes deviennent noires.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "others",
                                status: "cursed"
                            }
                        ],

                        weight: 12
                    },

                    {
                        id: "mansion_candle_aftermath_answer_neutral",

                        text:
                            "Personne ne répond au-delà du murmure initial.",

                        icon:
                            "🕯️",

                        effects: [],

                        weight: 18
                    }

                ]
            },


            {
                id: "mansion_candle_aftermath_ignore",

                title:
                    "🚶 Ignorer la question",

                description:
                    "Ne pas participer à cette conversation.",

                consequences: [

                    {
                        id: "mansion_candle_aftermath_ignore_good",

                        text:
                            "{group} continuent leur route. Les bougies disparaissent progressivement derrière eux.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 55
                    },

                    {
                        id: "mansion_candle_aftermath_ignore_bad",

                        text:
                            "Le murmure continue de suivre {group} de pièce en pièce.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 45
                    }

                ]
            }

        ]
    }

];