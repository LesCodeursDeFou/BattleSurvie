export const SITUATIONS = [

    // =========================================================
    // 1 - PORTE QUI CLAQUE
    // DÉBUT MINI-HISTOIRE COULOIR
    // =========================================================

    {
        id: "mansion_slammed_door",
        title: "Une porte claque derrière toi",
        category: "Paranormal",
        icon: "🚪",
        baseWeight: 1,

        description:
            "Tu viens d'entrer dans un long couloir lorsque la porte derrière toi se ferme brutalement toute seule.",

        choices: [

            {
                id: "mansion_door_open",
                title: "🚪 Essayer de la rouvrir",
                description:
                    "Tu refuses d'être enfermé ici.",

                narrative: {
                    setFlags: [
                        "mansion_corridor_backtracked"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_door_open_neutral",
                        text:
                            "Après plusieurs tentatives, la serrure cède. Le couloir derrière toi est exactement comme tu l'avais laissé.",
                        icon: "😮‍💨",
                        weight: 42,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_door_open_bad",
                        text:
                            "La poignée devient glaciale. Une main invisible referme ses doigts autour de ton poignet de l'autre côté.",
                        icon: "👻",
                        weight: 43,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_door_open_good",
                        text:
                            "La porte s'ouvre et dévoile derrière un meuble une vieille trousse médicale encore intacte.",
                        icon: "🩹",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_door_continue",
                title: "🕯️ Continuer dans le couloir",
                description:
                    "Tu préfères découvrir ce qui t'attend devant plutôt que derrière.",

                narrative: {
                    setFlags: [
                        "mansion_corridor_followed"
                    ],

                    removeFlags: [
                        "mansion_corridor_abandoned"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_corridor_doors",
                            weight: 32
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_door_continue_neutral",
                        text:
                            "Le couloir continue pendant une éternité avant de se terminer devant deux nouvelles portes.",
                        icon: "🚪",
                        weight: 50,
                        effects: [],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_corridor_doors",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_door_continue_bad",
                        text:
                            "À chaque pas, le couloir semble s'allonger. Tu commences à entendre des pas derrière les tiens.",
                        icon: "🌀",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_corridor_doors",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_door_continue_good",
                        text:
                            "Tu atteins une alcôve éclairée par une bougie encore chaude. Cet endroit étrangement calme te permet de reprendre tes esprits.",
                        icon: "🕯️",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_corridor_doors",
                                    weight: 38
                                }
                            ]
                        }
                    }

                ]
            },


            {
                id: "mansion_door_face",
                title: "🛡️ Défier ce qui a fermé la porte",
                description:
                    "Si quelque chose veut t'effrayer, tu comptes bien lui répondre.",

                condition: {
                    type: "status",
                    id: "courage"
                },

                consequences: [

                    {
                        id: "mansion_door_face_success",
                        text:
                            "Tu frappes contre la porte et ordonnes à la présence de se montrer. Le froid disparaît immédiatement.",
                        icon: "🛡️",
                        weight: 75,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_door_face_bad",
                        text:
                            "Une voix murmure juste derrière ton oreille : « Tu n'aurais pas dû faire ça. »",
                        icon: "👤",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 2 - MIROIR
    // =========================================================

    {
        id: "mansion_mirror",
        title: "Ton reflet ne reproduit plus tes mouvements",
        category: "Paranormal",
        icon: "🪞",
        baseWeight: 1,

        description:
            "Tu passes devant un immense miroir. Ton reflet reste parfaitement immobile alors que tu continues d'avancer.",

        choices: [

            {
                id: "mansion_mirror_touch",
                title: "✋ Toucher le miroir",
                description:
                    "Tu veux vérifier si tu hallucines.",

                consequences: [

                    {
                        id: "mansion_mirror_touch_good",
                        text:
                            "Le miroir redevient normal et révèle brièvement un symbole lumineux gravé derrière la glace.",
                        icon: "✨",
                        weight: 12,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_mirror_touch_bad",
                        text:
                            "Ton reflet pose sa main contre la tienne puis tente brutalement de t'attirer à travers la glace.",
                        icon: "😱",
                        weight: 58,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_mirror_touch_possession",
                        text:
                            "Ton reflet sourit. Pendant une seconde, tu as l'impression que quelque chose traverse la surface et entre en toi.",
                        icon: "👿",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_mirror_touch_neutral",
                        text:
                            "La surface devient glaciale sous ta main. Ton reflet reprend ensuite tes mouvements comme si rien ne s'était passé.",
                        icon: "🪞",
                        weight: 15,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_mirror_leave",
                title: "🏃 Partir immédiatement",
                description:
                    "Il existe des situations où la curiosité est clairement une mauvaise idée.",

                consequences: [

                    {
                        id: "mansion_mirror_leave_neutral",
                        text:
                            "Tu quittes la pièce sans te retourner. Lorsque tu franchis la porte, la sensation d'être observé disparaît.",
                        icon: "😮‍💨",
                        weight: 62,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_mirror_leave_bad",
                        text:
                            "Au moment de sortir, tu vois ton reflet sourire alors que ton visage reste immobile.",
                        icon: "😨",
                        weight: 38,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_mirror_observe",
                title: "👁️ Observer les détails",
                description:
                    "Ne touche à rien. Analyse simplement ce qui ne correspond pas à la réalité.",

                condition: {
                    type: "status",
                    id: "lucid"
                },

                consequences: [

                    {
                        id: "mansion_mirror_observe_good",
                        text:
                            "Tu comprends que le reflet cherche surtout à provoquer une réaction. En l'ignorant consciemment, tu reprends le contrôle.",
                        icon: "🧠",
                        weight: 80,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_mirror_observe_clue",
                        text:
                            "Dans le reflet, une porte apparaît derrière toi alors qu'elle n'existe pas dans la pièce. Tu mémorises le symbole gravé dessus.",
                        icon: "🚪",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
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
    // 3 - PIANO
    // =========================================================

    {
        id: "mansion_piano",
        title: "Un piano se met à jouer tout seul",
        category: "Mystère",
        icon: "🎹",
        baseWeight: 1,

        description:
            "Une mélodie résonne dans le salon. Les touches du vieux piano bougent alors que personne n'est assis devant.",

        choices: [

            {
                id: "mansion_piano_play",
                title: "🎹 Jouer quelques notes",
                description:
                    "Peut-être que quelqu'un essaie de communiquer.",

                consequences: [

                    {
                        id: "mansion_piano_play_good",
                        text:
                            "La mélodie change pour suivre la tienne. Un compartiment secret s'ouvre sous le clavier.",
                        icon: "🗝️",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_piano_play_bad",
                        text:
                            "Une note extrêmement grave résonne. Le couvercle se referme brutalement sur tes doigts.",
                        icon: "🤕",
                        weight: 50,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ]
                    },

                    {
                        id: "mansion_piano_play_fear",
                        text:
                            "Le piano répète exactement les notes que tu viens de jouer, puis ajoute une dernière note alors que tes mains ne touchent plus le clavier.",
                        icon: "🎶",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_piano_play_courage",
                        text:
                            "La mélodie devient étrangement apaisante. Pendant quelques secondes, le manoir paraît presque normal.",
                        icon: "🎼",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_piano_stop",
                title: "🛑 Refermer le piano",
                description:
                    "Cette musique commence sérieusement à t'agacer.",

                consequences: [

                    {
                        id: "mansion_piano_stop_neutral",
                        text:
                            "La musique s'arrête dès que le clavier est refermé.",
                        icon: "😌",
                        weight: 62,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_piano_stop_bad",
                        text:
                            "La musique continue alors que le clavier est fermé. Tu recules brutalement et fais tomber une lourde statue.",
                        icon: "🗿",
                        weight: 38,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 4 - ESCALIER VERS LA CAVE
    // DÉBUT MINI-HISTOIRE CAVE
    // =========================================================

    {
        id: "mansion_stairs",
        title: "Un escalier descend vers une cave plongée dans le noir",
        category: "Exploration",
        icon: "🪜",
        baseWeight: 1,

        description:
            "Une odeur humide remonte du sous-sol. Tu entends quelque chose gratter lentement contre le sol.",

        choices: [

            {
                id: "mansion_stairs_down",
                title: "🔦 Descendre",
                description:
                    "Tu veux savoir ce que le manoir cache sous terre.",

                narrative: {
                    setFlags: [
                        "mansion_basement_entered"
                    ],

                    removeFlags: [
                        "mansion_basement_blocked"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_basement",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_stairs_down_neutral",
                        text:
                            "Tu atteins le bas de l'escalier. Une immense cave s'étend devant toi.",
                        icon: "🔦",
                        weight: 48,
                        effects: [],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_basement",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_stairs_down_bad",
                        text:
                            "Une marche pourrie cède sous tes pieds et tu dévales une partie de l'escalier.",
                        icon: "💥",
                        weight: 32,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_basement",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_stairs_down_fear",
                        text:
                            "À mi-chemin, le bruit de grattement s'arrête. Puis il reprend exactement sous tes pieds.",
                        icon: "👂",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_basement",
                                    weight: 20
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_stairs_down_good",
                        text:
                            "Au pied de l'escalier, tu trouves un ancien médaillon gravé d'un symbole rassurant.",
                        icon: "✨",
                        weight: 5,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_stairs_block",
                title: "🪑 Bloquer la porte",
                description:
                    "Ce qui vit en dessous peut très bien y rester.",

                narrative: {
                    setFlags: [
                        "mansion_basement_blocked"
                    ],

                    removeFlags: [
                        "mansion_basement_entered"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_stairs_block_neutral",
                        text:
                            "Tu condamnes l'accès avec plusieurs meubles. Les bruits finissent par s'arrêter.",
                        icon: "🔒",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_stairs_block_bad",
                        text:
                            "Quelques secondes plus tard, quelque chose frappe violemment la porte. L'un des meubles est projeté dans ta direction.",
                        icon: "👊",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_stairs_block_fear",
                        text:
                            "La porte ne bouge plus. En revanche, quelqu'un commence à gratter lentement depuis l'intérieur.",
                        icon: "🚪",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 5 - POUPÉE
    // DÉBUT MINI-HISTOIRE POUPÉE
    // =========================================================

    {
        id: "mansion_doll",
        title: "Une vieille poupée est assise au milieu du couloir",
        category: "Mystère",
        icon: "🧸",
        baseWeight: 1,

        description:
            "La poupée semble t'observer. Tu es presque certain qu'elle n'était pas là il y a une minute.",

        choices: [

            {
                id: "mansion_doll_take",
                title: "🧸 La ramasser",
                description:
                    "Tu veux comprendre pourquoi elle est là.",

                narrative: {
                    setFlags: [
                        "mansion_doll_taken"
                    ],

                    removeFlags: [
                        "mansion_doll_abandoned"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_child_room",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_doll_take_neutral",
                        text:
                            "La poupée reste immobile dans tes mains. Une petite étiquette porte un numéro de chambre.",
                        icon: "🏷️",
                        weight: 42,
                        effects: [],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_child_room",
                                    weight: 40
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_doll_take_bad",
                        text:
                            "La poupée tourne brusquement la tête vers toi et murmure ton prénom.",
                        icon: "😱",
                        weight: 33,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_child_room",
                                    weight: 15
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_doll_take_possessed",
                        text:
                            "La poupée te fixe. Pendant quelques secondes, ton bras refuse de la lâcher malgré tes efforts.",
                        icon: "👿",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_child_room",
                                    weight: 35
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_doll_take_good",
                        text:
                            "Une petite clé tombe de la poche de la poupée.",
                        icon: "🗝️",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        narrative: {
                            setFlags: [
                                "mansion_doll_key"
                            ],

                            nextSituationBoosts: [
                                {
                                    id: "mansion_child_room",
                                    weight: 45
                                }
                            ]
                        }
                    }

                ]
            },


            {
                id: "mansion_doll_ignore",
                title: "🚶 Passer à côté",
                description:
                    "Tu n'as aucune intention de toucher ça.",

                narrative: {
                    setFlags: [
                        "mansion_doll_abandoned"
                    ],

                    removeFlags: [
                        "mansion_doll_taken",
                        "mansion_doll_key"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_doll_ignore_neutral",
                        text:
                            "Tu quittes le couloir sans incident et sans regarder derrière toi.",
                        icon: "😌",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_doll_ignore_bad",
                        text:
                            "Quelques mètres plus loin, la poupée est assise devant toi. Tu es pourtant certain de l'avoir laissée derrière.",
                        icon: "🧸",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_doll_command",
                title: "🛡️ Lui ordonner de te laisser tranquille",
                description:
                    "Tu refuses de te laisser intimider par un jouet de trente centimètres.",

                condition: {
                    type: "status",
                    id: "courage"
                },

                narrative: {
                    setFlags: [
                        "mansion_doll_taken"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_child_room",
                            weight: 40
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_doll_command_good",
                        text:
                            "Les yeux de la poupée se ferment lentement. Une petite clé tombe de sa manche.",
                        icon: "🗝️",
                        weight: 75,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        narrative: {
                            setFlags: [
                                "mansion_doll_key"
                            ]
                        }
                    },

                    {
                        id: "mansion_doll_command_bad",
                        text:
                            "La poupée ouvre soudainement la bouche et pousse un rire aigu qui résonne dans tout l'étage.",
                        icon: "😈",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 6 - TABLE SERVIE
    // =========================================================

    {
        id: "mansion_dinner",
        title: "Un immense dîner est servi dans la salle à manger",
        category: "Survie",
        icon: "🍽️",
        baseWeight: 1,

        description:
            "Une table entière est couverte de nourriture encore chaude, alors que le manoir semble abandonné depuis des décennies.",

        choices: [

            {
                id: "mansion_dinner_eat",
                title: "🍗 Manger",
                description:
                    "Tu n'as rien mangé depuis longtemps.",

                consequences: [

                    {
                        id: "mansion_dinner_eat_good",
                        text:
                            "Le repas est inexplicablement délicieux et te redonne des forces.",
                        icon: "😋",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_dinner_eat_bad",
                        text:
                            "À la première bouchée, la nourriture se transforme en matière noire et visqueuse.",
                        icon: "🤮",
                        weight: 50,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_dinner_eat_curse",
                        text:
                            "Le goût est délicieux. Beaucoup trop délicieux. Une voix murmure depuis ton assiette : « Maintenant, tu es invité. »",
                        icon: "🕯️",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ]
                    },

                    {
                        id: "mansion_dinner_eat_neutral",
                        text:
                            "Le repas est froid et sans goût. Rien ne se produit, ce qui est presque suspect dans ce manoir.",
                        icon: "😐",
                        weight: 25,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_dinner_refuse",
                title: "🚫 Ne rien toucher",
                description:
                    "Un repas chaud dans un manoir abandonné ? Beaucoup trop suspect.",

                consequences: [

                    {
                        id: "mansion_dinner_refuse_neutral",
                        text:
                            "Les aliments commencent à pourrir sous tes yeux dès que tu t'éloignes de la table.",
                        icon: "😮‍💨",
                        weight: 68,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_dinner_refuse_fear",
                        text:
                            "Toutes les assiettes pivotent lentement pour rester orientées vers toi pendant que tu traverses la pièce.",
                        icon: "🍽️",
                        weight: 32,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 7 - PORTRAIT
    // =========================================================

    {
        id: "mansion_portrait",
        title: "Les yeux d'un portrait semblent te suivre",
        category: "Paranormal",
        icon: "🖼️",
        baseWeight: 1,

        description:
            "Un homme sévère est représenté sur un immense tableau. Ses yeux suivent chacun de tes déplacements.",

        choices: [

            {
                id: "mansion_portrait_remove",
                title: "🖼️ Décrocher le tableau",
                description:
                    "Tu veux voir ce qu'il cache.",

                consequences: [

                    {
                        id: "mansion_portrait_remove_good",
                        text:
                            "Derrière la toile, tu découvres un symbole de protection dessiné directement sur le mur.",
                        icon: "✨",
                        weight: 15,

                        effects: [
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
                        id: "mansion_portrait_remove_bad",
                        text:
                            "Le portrait tombe brutalement sur toi. Lorsque tu te relèves, le personnage peint a changé de position.",
                        icon: "💥",
                        weight: 55,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_portrait_remove_neutral",
                        text:
                            "Il n'y avait absolument rien derrière le tableau. En revanche, l'homme peint regarde maintenant vers la porte.",
                        icon: "😑",
                        weight: 30,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_portrait_talk",
                title: "🗣️ Lui parler",
                description:
                    "À ce stade, pourquoi pas.",

                consequences: [

                    {
                        id: "mansion_portrait_talk_good",
                        text:
                            "Une voix murmure : « Bibliothèque... troisième livre... ne lis pas la dernière ligne. »",
                        icon: "📚",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_portrait_talk_bad",
                        text:
                            "Le personnage hurle soudainement depuis le tableau. Le cri semble continuer à l'intérieur de ta tête.",
                        icon: "😱",
                        weight: 40,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_portrait_talk_neutral",
                        text:
                            "Tu parles pendant plusieurs secondes. Le portrait continue simplement de te fixer.",
                        icon: "😐",
                        weight: 40,
                        effects: []
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - BIBLIOTHÈQUE
    // DÉBUT MINI-HISTOIRE BIBLIOTHÈQUE
    // =========================================================

    {
        id: "mansion_library",
        title: "Un livre semble avoir été volontairement laissé ouvert",
        category: "Mystère",
        icon: "📖",
        baseWeight: 1,

        description:
            "Au milieu d'une immense bibliothèque poussiéreuse, un seul livre est parfaitement propre et ouvert sur une page remplie de symboles.",

        choices: [

            {
                id: "mansion_library_read",
                title: "📖 Lire à voix haute",
                description:
                    "Les symboles ressemblent étrangement à une phrase.",

                narrative: {
                    setFlags: [
                        "mansion_library_spell"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_library_passage",
                            weight: 26
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_library_read_neutral",
                        text:
                            "Une partie de la bibliothèque coulisse. Un passage étroit apparaît derrière les étagères.",
                        icon: "🚪",
                        weight: 32,
                        effects: [],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_library_passage",
                                    weight: 44
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_library_read_bad",
                        text:
                            "Toutes les bougies s'éteignent. Quelque chose commence à respirer juste derrière toi.",
                        icon: "🌑",
                        weight: 38,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_library_passage",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_library_read_curse",
                        text:
                            "Les lettres se déplacent sur la page et forment ton prénom. Une marque noire apparaît brièvement sur ta main.",
                        icon: "☠️",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_library_passage",
                                    weight: 25
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_library_read_good",
                        text:
                            "Le texte décrit un symbole permettant de résister aux manifestations du manoir.",
                        icon: "✨",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_library_close",
                title: "📕 Refermer le livre",
                description:
                    "Tu as lu suffisamment d'histoires pour savoir comment ça finit.",

                narrative: {
                    setFlags: [
                        "mansion_library_closed"
                    ],

                    removeFlags: [
                        "mansion_library_spell"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_library_close_neutral",
                        text:
                            "Le livre reste fermé. Pour une fois, une décision raisonnable produit exactement le résultat attendu.",
                        icon: "😌",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_library_close_bad",
                        text:
                            "Le livre se rouvre tout seul et toutes les pages se tournent jusqu'à s'arrêter sur un dessin de ton visage.",
                        icon: "📚",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_library_analyse",
                title: "👁️ Étudier les symboles sans les lire",
                description:
                    "Observer la structure du texte plutôt que prononcer les mots.",

                condition: {
                    type: "status",
                    id: "lucid"
                },

                narrative: {
                    setFlags: [
                        "mansion_library_spell"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_library_passage",
                            weight: 42
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_library_analyse_good",
                        text:
                            "Tu comprends le mécanisme sans prononcer l'incantation. Une étagère coulisse silencieusement.",
                        icon: "🧠",
                        weight: 100,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 9 - DEUX PORTES DANS LE COULOIR
    // SUITE PORTE QUI CLAQUE
    // =========================================================

    {
        id: "mansion_corridor_doors",
        title: "Deux portes t'attendent au bout du couloir",
        category: "Suite",
        icon: "🚪",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_corridor_followed"
            ]
        },

        description:
            "Après avoir suivi le long couloir, tu atteins enfin deux portes : l'une blanche, l'autre noire.",

        choices: [

            {
                id: "mansion_corridor_white",
                title: "⚪ Porte blanche",
                description:
                    "Elle semble presque trop propre pour cet endroit.",

                consequences: [

                    {
                        id: "mansion_corridor_white_neutral",
                        text:
                            "La porte ouvre sur une chambre totalement vide. Le silence y est presque rassurant.",
                        icon: "🛏️",
                        weight: 42,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_corridor_white_bad",
                        text:
                            "Une silhouette assise sur le lit tourne lentement la tête vers toi.",
                        icon: "👤",
                        weight: 43,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_corridor_white_good",
                        text:
                            "Une lampe encore fonctionnelle repose sur la table. Sa lumière rend immédiatement le manoir moins oppressant.",
                        icon: "🔦",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_corridor_black",
                title: "⚫ Porte noire",
                description:
                    "Une faible respiration semble venir de derrière.",

                consequences: [

                    {
                        id: "mansion_corridor_black_bad",
                        text:
                            "Quelque chose tire brutalement la porte de l'autre côté. Pendant une seconde, tu aperçois un visage sans yeux.",
                        icon: "👹",
                        weight: 50,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_corridor_black_possessed",
                        text:
                            "La pièce est vide. Pourtant, lorsque tu ressors, tes jambes continuent d'avancer seules pendant plusieurs secondes.",
                        icon: "👿",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_corridor_black_neutral",
                        text:
                            "La pièce est vide. La respiration s'arrête dès que tu entres.",
                        icon: "🌑",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_corridor_black_good",
                        text:
                            "Derrière une armoire, tu trouves un médaillon couvert de symboles protecteurs.",
                        icon: "✨",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
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
    // 10 - CAVE
    // SUITE ESCALIER
    // =========================================================

    {
        id: "mansion_basement",
        title: "Tu explores enfin la cave du manoir",
        category: "Suite",
        icon: "🕯️",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_basement_entered"
            ],

            not: [
                "mansion_basement_blocked"
            ]
        },

        description:
            "Le sous-sol est immense. Des tuyaux rouillés longent les murs et une vieille chaudière fonctionne encore au fond de la pièce.",

        choices: [

            {
                id: "mansion_basement_boiler",
                title: "🔥 Examiner la chaudière",
                description:
                    "Elle ne devrait clairement pas fonctionner toute seule.",

                narrative: {
                    setFlags: [
                        "mansion_boiler_found"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_boiler",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_basement_boiler_neutral",
                        text:
                            "La chaudière vibre étrangement mais semble encore stable.",
                        icon: "🔥",
                        weight: 45,
                        effects: [],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_boiler",
                                    weight: 40
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_basement_boiler_bad",
                        text:
                            "Une conduite explose et projette une masse de vapeur brûlante.",
                        icon: "💨",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                lives: -2
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_boiler",
                                    weight: 5
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_basement_boiler_fear",
                        text:
                            "À travers les vibrations du métal, tu entends distinctement quelqu'un frapper depuis l'intérieur de la chaudière.",
                        icon: "👂",
                        weight: 12,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_boiler",
                                    weight: 35
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_basement_boiler_good",
                        text:
                            "Une petite boîte à outils est encore utilisable près de la chaudière. Tu comprends mieux son fonctionnement.",
                        icon: "🛠️",
                        weight: 8,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_basement_leave",
                title: "↩️ Remonter",
                description:
                    "Tu as suffisamment vu le sous-sol.",

                narrative: {
                    setFlags: [
                        "mansion_basement_left"
                    ],

                    removeFlags: [
                        "mansion_boiler_found"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_basement_leave_neutral",
                        text:
                            "Tu remontes sans difficulté. La porte de la cave se referme derrière toi.",
                        icon: "🪜",
                        weight: 72,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_basement_leave_bad",
                        text:
                            "La dernière marche cède lorsque tu remontes.",
                        icon: "💥",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ]
                    },

                    {
                        id: "mansion_basement_leave_fear",
                        text:
                            "Lorsque tu refermes la porte, trois coups résonnent immédiatement de l'autre côté.",
                        icon: "🚪",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 11 - CHAMBRE D'ENFANT
    // SUITE POUPÉE
    // =========================================================

    {
        id: "mansion_child_room",
        title: "Tu retrouves la chambre liée à la poupée",
        category: "Suite",
        icon: "🧸",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_doll_taken"
            ],

            not: [
                "mansion_doll_abandoned"
            ]
        },

        description:
            "Le numéro trouvé sur la poupée correspond à une chambre d'enfant au dernier étage. Des dizaines de jouets sont alignés face à la porte.",

        choices: [

            {
                id: "mansion_child_room_enter",
                title: "🚪 Entrer",
                description:
                    "Tu veux comprendre ce qui relie la poupée à cette pièce.",

                narrative: {
                    setFlags: [
                        "mansion_child_room_entered"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_music_box",
                            weight: 28
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_child_room_enter_bad",
                        text:
                            "Tous les jouets tournent simultanément la tête vers toi.",
                        icon: "😱",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_music_box",
                                    weight: 12
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_child_room_enter_neutral",
                        text:
                            "La pièce reste parfaitement silencieuse. Au fond, une petite boîte à musique est posée sur un bureau.",
                        icon: "🧸",
                        weight: 35,
                        effects: [],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_music_box",
                                    weight: 40
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_child_room_enter_good",
                        text:
                            "La clé de la poupée ouvre un tiroir contenant un vieux journal et un médaillon protecteur.",
                        icon: "✨",
                        weight: 12,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            },
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
                                    id: "mansion_music_box",
                                    weight: 45
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_child_room_enter_curse",
                        text:
                            "Une phrase apparaît lentement sur le mur : « Merci de l'avoir ramenée. » Une marque sombre apparaît sur ton poignet.",
                        icon: "☠️",
                        weight: 8,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_music_box",
                                    weight: 36
                                }
                            ]
                        }
                    }

                ]
            },


            {
                id: "mansion_child_room_leave",
                title: "🏃 Faire demi-tour",
                description:
                    "Tu n'aimes absolument pas la façon dont les jouets te regardent.",

                consequences: [

                    {
                        id: "mansion_child_room_leave_neutral",
                        text:
                            "Tu refermes doucement la porte et t'éloignes.",
                        icon: "😮‍💨",
                        weight: 70,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_child_room_leave_bad",
                        text:
                            "Une petite voix derrière la porte murmure ton prénom. Lorsque tu te retournes, la poignée commence à tourner.",
                        icon: "👻",
                        weight: 30,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 12 - CHAUDIÈRE
    // FIN MINI-HISTOIRE CAVE
    // =========================================================

    {
        id: "mansion_boiler",
        title: "La chaudière se met à cogner violemment",
        category: "Suite",
        icon: "🔥",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_boiler_found"
            ],

            not: [
                "mansion_basement_left"
            ]
        },

        description:
            "La vieille chaudière inspectée plus tôt tremble maintenant de plus en plus fort. La pression semble dangereusement élevée.",

        choices: [

            {
                id: "mansion_boiler_stop",
                title: "🔧 Tenter de l'arrêter",
                description:
                    "Chercher la vanne ou le système de coupure.",

                consequences: [

                    {
                        id: "mansion_boiler_stop_good",
                        text:
                            "Tu identifies la bonne vanne. Le vacarme cesse progressivement.",
                        icon: "🔧",
                        weight: 22,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_boiler_stop_bad",
                        text:
                            "Tu ouvres la mauvaise vanne et une énorme quantité de vapeur s'échappe.",
                        icon: "💨",
                        weight: 53,

                        effects: [
                            {
                                target: "actor",
                                lives: -2
                            }
                        ]
                    },

                    {
                        id: "mansion_boiler_stop_fear",
                        text:
                            "La chaudière s'arrête brusquement. Depuis l'intérieur, quelqu'un frappe trois fois contre le métal.",
                        icon: "👊",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_boiler_stop_courage",
                        text:
                            "Après plusieurs essais, tu stabilises complètement la pression. Réussir quelque chose de concret dans ce manoir te rassure.",
                        icon: "💪",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_boiler_run",
                title: "🏃 Remonter immédiatement",
                description:
                    "Tu ne veux pas être là si cette chose explose.",

                consequences: [

                    {
                        id: "mansion_boiler_run_neutral",
                        text:
                            "Tu atteins l'étage. Quelques secondes plus tard, le bruit cesse tout seul.",
                        icon: "🏃",
                        weight: 58,
                        effects: []
                    },

                    {
                        id: "mansion_boiler_run_bad",
                        text:
                            "Une canalisation éclate derrière toi et te projette contre l'escalier.",
                        icon: "💥",
                        weight: 32,

                        effects: [
                            {
                                target: "actor",
                                lives: -2
                            }
                        ]
                    },

                    {
                        id: "mansion_boiler_run_fear",
                        text:
                            "Pendant ta fuite, toutes les lumières du sous-sol s'allument une par une derrière toi.",
                        icon: "💡",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_boiler_analyse",
                title: "👁️ Observer le cycle de pression",
                description:
                    "Tu prends quelques secondes pour comprendre exactement ce qui se produit.",

                condition: {
                    type: "status",
                    id: "lucid"
                },

                consequences: [

                    {
                        id: "mansion_boiler_analyse_good",
                        text:
                            "Tu repères immédiatement la soupape responsable et relâches la pression sans danger.",
                        icon: "🧠",
                        weight: 100,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 13 - PASSAGE DE LA BIBLIOTHÈQUE
    // =========================================================

    {
        id: "mansion_library_passage",
        title: "Le passage derrière la bibliothèque est toujours ouvert",
        category: "Suite",
        icon: "🧱",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_library_spell"
            ],

            not: [
                "mansion_library_closed"
            ]
        },

        description:
            "Derrière l'étagère déplacée se cache un passage étroit descendant entre les murs du manoir.",

        choices: [

            {
                id: "mansion_library_passage_enter",
                title: "🕯️ Entrer",
                description:
                    "Tu t'engages dans l'étroit passage.",

                narrative: {
                    setFlags: [
                        "mansion_secret_wall_entered"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_whispering_wall",
                            weight: 26
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_library_passage_good",
                        text:
                            "Le passage mène à une petite pièce contenant une lampe et plusieurs notes manuscrites sur le manoir.",
                        icon: "🔦",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_whispering_wall",
                                    weight: 40
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_library_passage_bad",
                        text:
                            "Une partie du mur se referme brutalement sur ton bras.",
                        icon: "🧱",
                        weight: 42,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_whispering_wall",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_library_passage_fear",
                        text:
                            "À travers le mur, plusieurs voix commencent à répéter exactement tes pensées.",
                        icon: "👂",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_whispering_wall",
                                    weight: 38
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_library_passage_neutral",
                        text:
                            "Le passage débouche finalement dans un autre couloir désert.",
                        icon: "🚪",
                        weight: 15,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_library_passage_close",
                title: "📚 Refermer l'étagère",
                description:
                    "Tu préfères ne pas découvrir où mène ce passage.",

                consequences: [

                    {
                        id: "mansion_library_passage_close_neutral",
                        text:
                            "L'étagère reprend sa place. Le silence revient.",
                        icon: "📚",
                        weight: 80,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_library_passage_close_bad",
                        text:
                            "Alors que l'étagère se referme, une main surgit du passage et manque de t'attraper.",
                        icon: "✋",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 14 - NOUVEAU : BOÎTE À MUSIQUE
    // SUITE CHAMBRE D'ENFANT
    // =========================================================

    {
        id: "mansion_music_box",
        title: "La boîte à musique se met à jouer toute seule",
        category: "Suite",
        icon: "🎶",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_child_room_entered"
            ]
        },

        description:
            "La petite boîte posée sur le bureau s'ouvre seule. Une figurine tourne lentement tandis qu'une mélodie déformée remplit la chambre.",

        choices: [

            {
                id: "mansion_music_box_open",
                title: "🎶 Observer le mécanisme",
                description:
                    "Quelque chose semble caché sous la figurine.",

                consequences: [

                    {
                        id: "mansion_music_box_open_good",
                        text:
                            "Sous le mécanisme, tu trouves une photographie annotée : « Elle déteste les miroirs. »",
                        icon: "📷",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_music_box_open_bad",
                        text:
                            "La figurine se retourne brusquement vers toi et la musique accélère jusqu'à devenir insupportable.",
                        icon: "😱",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_music_box_open_possession",
                        text:
                            "La mélodie s'arrête. Lorsque tu relèves les yeux, tes mains remontent la boîte toutes seules.",
                        icon: "👿",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_music_box_open_neutral",
                        text:
                            "Le mécanisme termine sa mélodie puis s'immobilise.",
                        icon: "🎵",
                        weight: 20,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_music_box_break",
                title: "🔨 Détruire la boîte",
                description:
                    "Cette musique ne mérite pas de finir son morceau.",

                consequences: [

                    {
                        id: "mansion_music_box_break_good",
                        text:
                            "La musique s'arrête immédiatement. La température de la pièce remonte de plusieurs degrés.",
                        icon: "💥",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_music_box_break_bad",
                        text:
                            "La boîte se brise mais la mélodie continue désormais directement dans ta tête.",
                        icon: "🧠",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_music_box_break_curse",
                        text:
                            "Sous le bois brisé, un symbole noir pulse une dernière fois avant de disparaître dans ta peau.",
                        icon: "☠️",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 15 - NOUVEAU : MUR QUI CHUCHOTE
    // SUITE PASSAGE BIBLIOTHÈQUE
    // =========================================================

    {
        id: "mansion_whispering_wall",
        title: "Le mur commence à te parler",
        category: "Suite",
        icon: "🧱",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_secret_wall_entered"
            ]
        },

        description:
            "Dans le passage entre les murs, plusieurs voix murmurent ton prénom. Certaines semblent même appartenir aux autres joueurs.",

        choices: [

            {
                id: "mansion_whisper_listen",
                title: "👂 Écouter",
                description:
                    "Essayer de distinguer ce que les voix racontent.",

                consequences: [

                    {
                        id: "mansion_whisper_listen_good",
                        text:
                            "Parmi les murmures, une voix répète un itinéraire précis permettant d'éviter une partie du manoir.",
                        icon: "🧭",
                        weight: 18,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_whisper_listen_bad",
                        text:
                            "Les voix commencent à réciter chacune de tes peurs avec une précision impossible.",
                        icon: "😨",
                        weight: 52,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_whisper_listen_possession",
                        text:
                            "Une voix te demande simplement : « Laisse-moi parler à ta place. » Tu réponds oui avant même de réfléchir.",
                        icon: "👿",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_whisper_listen_neutral",
                        text:
                            "Les murmures deviennent incompréhensibles puis cessent complètement.",
                        icon: "🤫",
                        weight: 15,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_whisper_ignore",
                title: "🚶 Ignorer les voix",
                description:
                    "Continuer sans leur accorder la moindre attention.",

                consequences: [

                    {
                        id: "mansion_whisper_ignore_good",
                        text:
                            "À mesure que tu refuses d'écouter, les voix perdent progressivement en intensité.",
                        icon: "😌",
                        weight: 70,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_whisper_ignore_bad",
                        text:
                            "Une seule voix reste audible : la tienne. Elle te supplie de te retourner.",
                        icon: "👤",
                        weight: 30,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 16 - NOUVEAU : TÉLÉPHONE ANCIEN
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_phone",
        title: "Un vieux téléphone se met à sonner",
        category: "Mystère",
        icon: "☎️",
        baseWeight: 1,

        description:
            "Dans un bureau couvert de poussière, un téléphone à cadran sonne alors qu'aucun câble n'est branché.",

        choices: [

            {
                id: "mansion_phone_answer",
                title: "☎️ Décrocher",
                description:
                    "Quelqu'un insiste énormément.",

                narrative: {
                    setFlags: [
                        "mansion_phone_answered"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_phone_second_call",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_phone_answer_good",
                        text:
                            "Une voix calme murmure : « Ne descends pas quand l'horloge sonnera trois fois. » Puis la ligne coupe.",
                        icon: "🧠",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_phone_second_call",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_phone_answer_bad",
                        text:
                            "Tu entends seulement ta propre respiration. Puis une seconde respiration apparaît derrière toi.",
                        icon: "😱",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_phone_second_call",
                                    weight: 36
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_phone_answer_curse",
                        text:
                            "Une voix prononce ton nom complet, puis murmure : « Contrat accepté. »",
                        icon: "☠️",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_phone_second_call",
                                    weight: 40
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_phone_answer_neutral",
                        text:
                            "Aucune voix. Seulement un bruit de pluie, alors qu'il ne pleut pas dehors.",
                        icon: "🌧️",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_phone_ignore",
                title: "🚫 Ne pas décrocher",
                description:
                    "Les téléphones sans câble ne méritent aucune réponse.",

                narrative: {
                    setFlags: [
                        "mansion_phone_ignored"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_phone_ignore_good",
                        text:
                            "Après neuf sonneries exactement, le téléphone s'arrête.",
                        icon: "😌",
                        weight: 70,

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
                        id: "mansion_phone_ignore_bad",
                        text:
                            "Le téléphone arrête de sonner. Quelques secondes plus tard, une sonnerie identique retentit depuis ta poche.",
                        icon: "📞",
                        weight: 30,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 17 - NOUVEAU : SECOND APPEL
    // SUITE TÉLÉPHONE
    // =========================================================

    {
        id: "mansion_phone_second_call",
        title: "Le téléphone sonne une seconde fois",
        category: "Suite",
        icon: "☎️",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_phone_answered"
            ]
        },

        description:
            "Plus tard, un autre téléphone identique sonne dans une pièce différente. Cette fois, il n'y a même pas de cadran.",

        choices: [

            {
                id: "mansion_phone_second_answer",
                title: "☎️ Répondre encore",
                description:
                    "La première voix semblait peut-être vouloir t'aider.",

                consequences: [

                    {
                        id: "mansion_phone_second_answer_good",
                        text:
                            "La voix murmure : « Bien. Tu apprends. Quand les lumières s'éteindront, ne bouge surtout pas. »",
                        icon: "👁️",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_phone_second_answer_bad",
                        text:
                            "La voix est désormais la tienne. Elle dit simplement : « Je suis déjà derrière toi. »",
                        icon: "👤",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_phone_second_answer_possession",
                        text:
                            "La voix te demande de fermer les yeux. Lorsque tu les rouvres, plusieurs minutes ont disparu.",
                        icon: "👿",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_phone_second_answer_neutral",
                        text:
                            "Tu décroches. La ligne reste silencieuse, puis coupe.",
                        icon: "☎️",
                        weight: 15,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_phone_second_break",
                title: "🔨 Détruire le téléphone",
                description:
                    "Deux appels surnaturels suffisent largement.",

                consequences: [

                    {
                        id: "mansion_phone_second_break_good",
                        text:
                            "Le téléphone éclate. Toutes les horloges proches s'arrêtent simultanément.",
                        icon: "💥",
                        weight: 55,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_phone_second_break_bad",
                        text:
                            "Même brisé, le combiné continue de sonner sur le sol.",
                        icon: "☎️",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 18 - NOUVEAU : HORLOGE
    // =========================================================

    {
        id: "mansion_grandfather_clock",
        title: "Une immense horloge s'arrête à 3 h 13",
        category: "Paranormal",
        icon: "🕰️",
        baseWeight: 1,

        description:
            "Toutes les aiguilles du hall s'immobilisent au même instant. Une vieille horloge commence alors à sonner, bien qu'elle indique 3 h 13.",

        choices: [

            {
                id: "mansion_clock_open",
                title: "🕰️ Ouvrir le mécanisme",
                description:
                    "Quelque chose bouge derrière le cadran.",

                consequences: [

                    {
                        id: "mansion_clock_open_good",
                        text:
                            "Tu trouves derrière le mécanisme une page arrachée d'un journal décrivant plusieurs phénomènes du manoir.",
                        icon: "📜",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_clock_open_bad",
                        text:
                            "Lorsque tu ouvres l'horloge, une main desséchée surgit du mécanisme.",
                        icon: "✋",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_clock_open_curse",
                        text:
                            "À l'intérieur, ton nom est gravé sur l'un des engrenages. L'inscription est récente.",
                        icon: "☠️",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ]
                    },

                    {
                        id: "mansion_clock_open_neutral",
                        text:
                            "Le mécanisme est totalement vide. Pourtant, les aiguilles recommencent à tourner.",
                        icon: "🕰️",
                        weight: 20,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_clock_leave",
                title: "🚶 Quitter le hall",
                description:
                    "Tu n'as aucune envie de savoir ce qui arrive à la treizième sonnerie.",

                consequences: [

                    {
                        id: "mansion_clock_leave_good",
                        text:
                            "Tu quittes le hall avant la dernière sonnerie. Dès que la porte se ferme, le bruit disparaît.",
                        icon: "😮‍💨",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_clock_leave_bad",
                        text:
                            "L'horloge continue de sonner derrière toi alors que tu traverses plusieurs pièces.",
                        icon: "🔔",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 19 - NOUVEAU : BAIN
    // =========================================================

    {
        id: "mansion_bathroom",
        title: "Une baignoire est remplie d'eau noire",
        category: "Paranormal",
        icon: "🛁",
        baseWeight: 0.9,

        description:
            "Dans une salle de bain parfaitement propre, une vieille baignoire déborde d'une eau noire immobile. Quelque chose brille au fond.",

        choices: [

            {
                id: "mansion_bathroom_reach",
                title: "✋ Récupérer l'objet",
                description:
                    "Il semble s'agir d'une petite clé argentée.",

                consequences: [

                    {
                        id: "mansion_bathroom_reach_good",
                        text:
                            "Tu récupères réellement une petite clé. L'eau reste parfaitement immobile.",
                        icon: "🗝️",
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
                        id: "mansion_bathroom_reach_bad",
                        text:
                            "Au moment où ta main touche l'eau, quelque chose saisit ton poignet depuis le fond.",
                        icon: "😱",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_bathroom_reach_possession",
                        text:
                            "Ton reflet apparaît dans l'eau noire. Il ouvre les yeux avant toi.",
                        icon: "👿",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_bathroom_reach_neutral",
                        text:
                            "Ce que tu prenais pour une clé n'est qu'un vieux morceau de métal.",
                        icon: "😑",
                        weight: 22,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_bathroom_drain",
                title: "🚿 Vider la baignoire",
                description:
                    "Chercher le bouchon sans mettre la main dans l'eau.",

                consequences: [

                    {
                        id: "mansion_bathroom_drain_good",
                        text:
                            "L'eau disparaît progressivement. Au fond, aucun corps, aucun monstre, seulement la petite clé.",
                        icon: "🗝️",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_bathroom_drain_bad",
                        text:
                            "L'eau commence à descendre puis remonte brutalement par toutes les canalisations de la pièce.",
                        icon: "🌊",
                        weight: 35,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_bathroom_drain_neutral",
                        text:
                            "Le bouchon semble complètement bloqué. Rien d'autre ne se produit.",
                        icon: "🚿",
                        weight: 30,
                        effects: []
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 20 - NOUVEAU : CONFESSIONNAL
    // =========================================================

    {
        id: "mansion_confessional",
        title: "Un confessionnal se trouve au milieu d'une chambre",
        category: "Mystère",
        icon: "🪑",
        baseWeight: 0.9,

        description:
            "Le meuble n'a rien à faire ici. Derrière la grille, quelqu'un semble respirer doucement.",

        choices: [

            {
                id: "mansion_confessional_enter",
                title: "🪑 S'asseoir",
                description:
                    "Écouter ce que la présence veut dire.",

                narrative: {
                    setFlags: [
                        "mansion_confession_heard"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_red_door_personal",
                            weight: 28
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_confessional_good",
                        text:
                            "Une voix murmure : « La porte rouge ment. La bleue aussi. Cherche celle qui n'existe pas. »",
                        icon: "👁️",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_red_door_personal",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_confessional_bad",
                        text:
                            "La voix commence à raconter des souvenirs que tu n'as jamais confiés à personne.",
                        icon: "😨",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_red_door_personal",
                                    weight: 15
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_confessional_curse",
                        text:
                            "La voix demande : « Acceptes-tu de porter ce qui reste ici ? » Tu ne réponds pas. Elle murmure tout de même : « Oui. »",
                        icon: "☠️",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_red_door_personal",
                                    weight: 32
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_confessional_neutral",
                        text:
                            "Tu attends plusieurs secondes. La respiration s'arrête et personne ne parle.",
                        icon: "🤫",
                        weight: 20,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_confessional_leave",
                title: "🚪 Quitter la pièce",
                description:
                    "Les meubles qui respirent sont rarement de bon conseil.",

                consequences: [

                    {
                        id: "mansion_confessional_leave_good",
                        text:
                            "Tu quittes la pièce et te sens immédiatement plus calme.",
                        icon: "😌",
                        weight: 70,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_confessional_leave_bad",
                        text:
                            "Au moment de fermer la porte, une voix derrière toi murmure : « Tu reviendras. »",
                        icon: "👤",
                        weight: 30,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 21 - NOUVEAU : TROIS PORTES
    // SUITE CONFESSIONNAL
    // =========================================================

    {
        id: "mansion_red_door_personal",
        title: "Trois portes apparaissent dans un couloir",
        category: "Suite",
        icon: "🚪",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_confession_heard"
            ]
        },

        description:
            "Tu arrives devant une porte rouge, une porte bleue et un pan de mur sur lequel une poignée semble avoir été dessinée à la craie.",

        choices: [

            {
                id: "mansion_three_red",
                title: "🔴 Porte rouge",
                description:
                    "La voix avait pourtant affirmé qu'elle mentait.",

                consequences: [

                    {
                        id: "mansion_three_red_bad",
                        text:
                            "Derrière la porte, tu retrouves exactement la même pièce. Puis une deuxième porte rouge. Puis une troisième.",
                        icon: "🌀",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_three_red_neutral",
                        text:
                            "La pièce est vide. Lorsque tu ressors, la porte bleue a disparu.",
                        icon: "🚪",
                        weight: 35,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_three_blue",
                title: "🔵 Porte bleue",
                description:
                    "La voix avait également affirmé que celle-ci mentait.",

                consequences: [

                    {
                        id: "mansion_three_blue_bad",
                        text:
                            "La pièce semble normale jusqu'à ce que tu réalises que toutes les fenêtres montrent le même couloir.",
                        icon: "🪟",
                        weight: 55,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_three_blue_possessed",
                        text:
                            "Quelqu'un t'attend dans la pièce. Il a exactement ton visage.",
                        icon: "👿",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_three_blue_neutral",
                        text:
                            "La pièce est totalement vide et débouche sur un autre couloir.",
                        icon: "🚪",
                        weight: 25,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_three_wall",
                title: "✋ Tourner la poignée dessinée",
                description:
                    "La porte qui n'existe pas.",

                consequences: [

                    {
                        id: "mansion_three_wall_good",
                        text:
                            "À ta surprise, une véritable ouverture apparaît dans le mur. Derrière se trouve une petite pièce éclairée et parfaitement calme.",
                        icon: "✨",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_three_wall_bad",
                        text:
                            "Ta main traverse brièvement le mur. Quelque chose la saisit de l'autre côté avant de te relâcher.",
                        icon: "✋",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_three_wall_courage",
                        text:
                            "Le mur s'ouvre sur un escalier éclairé. Pour la première fois, tu as l'impression d'avoir compris une règle du manoir.",
                        icon: "🧠",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
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
    // 22 - NOUVEAU : PIÈCE SANS OMBRE
    // =========================================================

    {
        id: "mansion_shadowless_room",
        title: "Ton ombre a disparu",
        category: "Paranormal",
        icon: "👤",
        baseWeight: 1,

        description:
            "Tu entres dans une pièce éclairée par plusieurs bougies. Tous les meubles ont une ombre. Toi, non.",

        choices: [

            {
                id: "mansion_shadow_search",
                title: "🔦 Chercher ton ombre",
                description:
                    "Cela ressemble à une phrase absurde, mais la situation l'est encore davantage.",

                consequences: [

                    {
                        id: "mansion_shadow_search_bad",
                        text:
                            "Ton ombre apparaît finalement... sur le plafond. Elle commence ensuite à marcher sans toi.",
                        icon: "😱",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_shadow_search_possessed",
                        text:
                            "L'ombre redescend lentement le long du mur puis fusionne de nouveau avec toi. Quelque chose semble avoir changé.",
                        icon: "👿",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_shadow_search_neutral",
                        text:
                            "Lorsque tu passes devant une autre bougie, ton ombre réapparaît normalement.",
                        icon: "😐",
                        weight: 25,
                        effects: []
                    },

                    {
                        id: "mansion_shadow_search_good",
                        text:
                            "Tu réalises que l'absence d'ombre dépend d'un symbole peint au sol. Tu évites soigneusement de marcher dessus.",
                        icon: "👁️",
                        weight: 10,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_shadow_leave",
                title: "🚪 Sortir immédiatement",
                description:
                    "Ton ombre pourra éventuellement te rattraper plus tard.",

                consequences: [

                    {
                        id: "mansion_shadow_leave_good",
                        text:
                            "À peine sorti, ton ombre réapparaît sous tes pieds.",
                        icon: "😮‍💨",
                        weight: 75,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_shadow_leave_bad",
                        text:
                            "Ton ombre réapparaît dans le couloir... mais quelques secondes avant chacun de tes mouvements.",
                        icon: "👤",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
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
    // 23 - NOUVEAU : CHAPELLE
    // RESPIRATION / RISQUE
    // =========================================================

    {
        id: "mansion_chapel",
        title: "Tu découvres une petite chapelle",
        category: "Mystère",
        icon: "🕯️",
        baseWeight: 0.8,

        description:
            "Contrairement au reste du manoir, cette pièce semble calme. Plusieurs bougies brûlent devant un autel couvert de poussière.",

        choices: [

            {
                id: "mansion_chapel_rest",
                title: "🕯️ Rester quelques instants",
                description:
                    "Profiter du calme tant qu'il existe.",

                consequences: [

                    {
                        id: "mansion_chapel_rest_good",
                        text:
                            "Pendant quelques minutes, aucun bruit ne vient du manoir. Tu récupères réellement ton calme.",
                        icon: "😌",
                        weight: 65,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_chapel_rest_courage",
                        text:
                            "Une sensation de sécurité inhabituelle t'envahit. Tu te sens capable d'affronter la suite.",
                        icon: "✨",
                        weight: 20,

                        effects: [
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
                        id: "mansion_chapel_rest_bad",
                        text:
                            "Toutes les bougies s'éteignent simultanément. Une silhouette est maintenant assise au premier rang.",
                        icon: "👤",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_chapel_altar",
                title: "📖 Examiner l'autel",
                description:
                    "Un petit livre fermé repose sous une couche de poussière.",

                consequences: [

                    {
                        id: "mansion_chapel_altar_good",
                        text:
                            "Le livre contient plusieurs notes décrivant les phénomènes du manoir et comment les reconnaître.",
                        icon: "📖",
                        weight: 25,

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_chapel_altar_curse",
                        text:
                            "Lorsque tu touches le livre, tous les noms écrits à l'intérieur disparaissent sauf le tien.",
                        icon: "☠️",
                        weight: 20,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ]
                    },

                    {
                        id: "mansion_chapel_altar_bad",
                        text:
                            "Une voix derrière toi murmure : « Tu n'as rien à faire ici. »",
                        icon: "👻",
                        weight: 30,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_chapel_altar_neutral",
                        text:
                            "Le livre est totalement vide.",
                        icon: "📖",
                        weight: 25,
                        effects: []
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 24 - NOUVEAU : PORTE QUI RESPIRE
    // =========================================================

    {
        id: "mansion_breathing_door",
        title: "Une porte semble respirer",
        category: "Paranormal",
        icon: "🚪",
        baseWeight: 1,

        description:
            "Le bois gonfle et se rétracte lentement comme une poitrine. De l'autre côté, quelque chose gratte doucement.",

        choices: [

            {
                id: "mansion_breathing_open",
                title: "🚪 Ouvrir",
                description:
                    "Il est probablement trop tard pour devenir raisonnable.",

                consequences: [

                    {
                        id: "mansion_breathing_open_good",
                        text:
                            "La porte s'ouvre sur une pièce parfaitement normale. Dès que tu entres, le bois cesse de bouger.",
                        icon: "😮‍💨",
                        weight: 25,

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
                        id: "mansion_breathing_open_bad",
                        text:
                            "La porte s'ouvre comme une bouche et tente de se refermer autour de ton bras.",
                        icon: "😱",
                        weight: 45,

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_breathing_open_curse",
                        text:
                            "Derrière la porte, il n'y a qu'un mur portant ton nom gravé des dizaines de fois.",
                        icon: "☠️",
                        weight: 15,

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ]
                    },

                    {
                        id: "mansion_breathing_open_neutral",
                        text:
                            "La porte mène à un simple débarras. Elle cesse immédiatement de respirer.",
                        icon: "🧹",
                        weight: 15,
                        effects: []
                    }

                ]
            },


            {
                id: "mansion_breathing_leave",
                title: "🚶 L'ignorer",
                description:
                    "Une porte avec des poumons imaginaires peut rester fermée.",

                consequences: [

                    {
                        id: "mansion_breathing_leave_good",
                        text:
                            "Tu t'éloignes. Le bruit cesse derrière toi.",
                        icon: "😌",
                        weight: 68,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "mansion_breathing_leave_bad",
                        text:
                            "Alors que tu avances, toutes les portes du couloir commencent à respirer en même temps.",
                        icon: "🚪",
                        weight: 32,

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    }

];