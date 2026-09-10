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

                title:
                    "🚪 Essayer de la rouvrir",

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
                            "La porte finit par s'ouvrir après plusieurs tentatives. Rien ne semble se trouver derrière.",

                        lives: 0,
                        icon: "😮‍💨",
                        weight: 45
                    },

                    {
                        id: "mansion_door_open_bad",

                        text:
                            "La poignée devient glaciale et quelque chose te saisit le poignet de l'autre côté.",

                        lives: -2,
                        icon: "👻",
                        weight: 45
                    },

                    {
                        id: "mansion_door_open_good",

                        text:
                            "La porte s'ouvre et tu découvres une vieille trousse médicale oubliée derrière un meuble.",

                        lives: 1,
                        icon: "🩹",
                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_door_continue",

                title:
                    "🕯️ Continuer dans le couloir",

                description:
                    "Tu préfères ne pas savoir ce qu'il y a derrière.",

                narrative: {

                    setFlags: [
                        "mansion_corridor_followed"
                    ],

                    removeFlags: [
                        "mansion_corridor_abandoned"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_corridor_doors",

                            weight:
                                32
                        }
                    ]

                },

                consequences: [

                    {
                        id: "mansion_door_continue_neutral",

                        text:
                            "Le couloir continue sur plusieurs dizaines de mètres. Deux nouvelles portes apparaissent devant toi.",

                        lives: 0,
                        icon: "🚪",
                        weight: 55,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_corridor_doors",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_door_continue_bad",

                        text:
                            "Le couloir semble s'allonger à mesure que tu avances. Tu finis complètement épuisé.",

                        lives: -1,
                        icon: "🌀",
                        weight: 35,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_corridor_doors",

                                    weight:
                                        6
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_door_continue_good",

                        text:
                            "Tu trouves rapidement une petite zone éclairée où tu peux reprendre tes esprits.",

                        lives: 1,
                        icon: "🕯️",
                        weight: 10,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_corridor_doors",

                                    weight:
                                        38
                                }
                            ]

                        }
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - MIROIR
    // CLASSIQUE
    // =========================================================

    {
        id: "mansion_mirror",
        title: "Ton reflet ne reproduit plus tes mouvements",
        category: "Paranormal",
        icon: "🪞",
        baseWeight: 1,

        description:
            "Tu passes devant un immense miroir. Ton reflet reste immobile alors que tu continues d'avancer.",

        choices: [

            {
                id: "mansion_mirror_touch",

                title:
                    "✋ Toucher le miroir",

                description:
                    "Tu veux vérifier si tu hallucines.",

                consequences: [

                    {
                        id: "mansion_mirror_touch_good",

                        text:
                            "Le miroir redevient brièvement normal et révèle derrière lui une petite cache.",

                        lives: 1,
                        icon: "🎁",
                        weight: 12
                    },

                    {
                        id: "mansion_mirror_touch_bad",

                        text:
                            "Ton reflet pose sa main contre la tienne puis te tire violemment vers la glace.",

                        lives: -2,
                        icon: "😱",
                        weight: 73
                    },

                    {
                        id: "mansion_mirror_touch_neutral",

                        text:
                            "La surface devient froide sous ta main, puis ton reflet reprend simplement tes mouvements.",

                        lives: 0,
                        icon: "🪞",
                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_mirror_leave",

                title:
                    "🏃 Partir immédiatement",

                description:
                    "Il existe des situations où la curiosité est clairement une mauvaise idée.",

                consequences: [

                    {
                        id: "mansion_mirror_leave_neutral",

                        text:
                            "Tu quittes la pièce avant que quoi que ce soit d'autre ne se produise.",

                        lives: 0,
                        icon: "😮‍💨",
                        weight: 72
                    },

                    {
                        id: "mansion_mirror_leave_bad",

                        text:
                            "En partant, tu vois ton reflet sourire alors que tu ne souris pas. Tu paniques et te cognes contre le mur.",

                        lives: -1,
                        icon: "💥",
                        weight: 28
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 3 - PIANO
    // CLASSIQUE
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

                title:
                    "🎹 Jouer quelques notes",

                description:
                    "Peut-être que quelqu'un essaie de communiquer.",

                consequences: [

                    {
                        id: "mansion_piano_play_good",

                        text:
                            "La mélodie change et un petit compartiment secret s'ouvre.",

                        lives: 1,
                        icon: "🗝️",
                        weight: 12
                    },

                    {
                        id: "mansion_piano_play_bad",

                        text:
                            "Une note extrêmement grave retentit et le couvercle du piano se referme violemment sur tes doigts.",

                        lives: -2,
                        icon: "🤕",
                        weight: 68
                    },

                    {
                        id: "mansion_piano_play_neutral",

                        text:
                            "Le piano répond à tes notes pendant quelques secondes puis s'arrête brutalement.",

                        lives: 0,
                        icon: "🎶",
                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_piano_stop",

                title:
                    "🛑 Refermer le piano",

                description:
                    "Cette musique commence sérieusement à t'agacer.",

                consequences: [

                    {
                        id: "mansion_piano_stop_neutral",

                        text:
                            "La musique s'arrête. Le silence revient enfin.",

                        lives: 0,
                        icon: "😌",
                        weight: 70
                    },

                    {
                        id: "mansion_piano_stop_bad",

                        text:
                            "La musique continue alors que le clavier est fermé. Tu recules et renverses une lourde statue.",

                        lives: -1,
                        icon: "🗿",
                        weight: 30
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
            "Une odeur humide remonte du sous-sol. Tu entends également quelque chose gratter contre le sol.",

        choices: [

            {
                id: "mansion_stairs_down",

                title:
                    "🔦 Descendre",

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
                            id:
                                "mansion_basement",

                            weight:
                                30
                        }
                    ]

                },

                consequences: [

                    {
                        id: "mansion_stairs_down_neutral",

                        text:
                            "Tu atteins le bas de l'escalier. Une immense cave s'étend devant toi.",

                        lives: 0,
                        icon: "🔦",
                        weight: 52,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_basement",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_stairs_down_bad",

                        text:
                            "Une marche pourrie cède sous tes pieds et tu dévales une partie de l'escalier.",

                        lives: -2,
                        icon: "💥",
                        weight: 38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_basement",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_stairs_down_good",

                        text:
                            "Tu trouves quelques vieilles bouteilles d'eau encore fermées au pied de l'escalier.",

                        lives: 1,
                        icon: "💧",
                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_stairs_block",

                title:
                    "🪑 Bloquer la porte",

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
                            "Tu condamnes l'accès avec plusieurs meubles et continues ton chemin.",

                        lives: 0,
                        icon: "🔒",
                        weight: 75
                    },

                    {
                        id: "mansion_stairs_block_bad",

                        text:
                            "Quelques secondes plus tard, quelque chose frappe violemment la porte et fait tomber l'un des meubles sur toi.",

                        lives: -1,
                        icon: "👊",
                        weight: 25
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

                title:
                    "🧸 La ramasser",

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
                            id:
                                "mansion_child_room",

                            weight:
                                30
                        }
                    ]

                },

                consequences: [

                    {
                        id: "mansion_doll_take_neutral",

                        text:
                            "La poupée reste parfaitement immobile dans tes mains. Une petite étiquette porte un numéro de chambre.",

                        lives: 0,
                        icon: "🏷️",
                        weight: 52,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_child_room",

                                    weight:
                                        40
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_doll_take_bad",

                        text:
                            "La poupée tourne brusquement la tête vers toi et pousse un cri strident.",

                        lives: -2,
                        icon: "😱",
                        weight: 38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_child_room",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_doll_take_good",

                        text:
                            "Une petite clé tombe de la poche de la poupée.",

                        lives: 1,
                        icon: "🗝️",
                        weight: 10,

                        narrative: {

                            setFlags: [
                                "mansion_doll_key"
                            ],

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_child_room",

                                    weight:
                                        45
                                }
                            ]

                        }
                    }

                ]
            },


            {
                id: "mansion_doll_ignore",

                title:
                    "🚶 Passer à côté",

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
                            "Tu quittes le couloir sans incident.",

                        lives: 0,
                        icon: "😌",
                        weight: 72
                    },

                    {
                        id: "mansion_doll_ignore_bad",

                        text:
                            "Quelques mètres plus loin, la poupée est de nouveau devant toi. Tu sursautes et te blesses contre le mur.",

                        lives: -1,
                        icon: "🧱",
                        weight: 28
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - TABLE SERVIE
    // CLASSIQUE
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

                title:
                    "🍗 Manger",

                description:
                    "Tu commences vraiment à avoir faim.",

                consequences: [

                    {
                        id: "mansion_dinner_eat_good",

                        text:
                            "Le repas est inexplicablement délicieux et te redonne de l'énergie.",

                        lives: 2,
                        icon: "😋",
                        weight: 8
                    },

                    {
                        id: "mansion_dinner_eat_bad",

                        text:
                            "La nourriture se transforme en matière noire et visqueuse dès que tu l'avales.",

                        lives: -3,
                        icon: "🤮",
                        weight: 77
                    },

                    {
                        id: "mansion_dinner_eat_neutral",

                        text:
                            "Le repas est froid et sans goût mais ne semble pas dangereux.",

                        lives: 0,
                        icon: "😐",
                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_dinner_refuse",

                title:
                    "🚫 Ne rien toucher",

                description:
                    "Un repas chaud dans un manoir abandonné ? Beaucoup trop suspect.",

                consequences: [

                    {
                        id: "mansion_dinner_refuse_neutral",

                        text:
                            "Les aliments commencent à pourrir sous tes yeux. Tu continues ton chemin.",

                        lives: 0,
                        icon: "😮‍💨",
                        weight: 72
                    },

                    {
                        id: "mansion_dinner_refuse_bad",

                        text:
                            "Tu continues l'exploration le ventre vide et ton énergie diminue.",

                        lives: -1,
                        icon: "🥱",
                        weight: 28
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - PORTRAIT
    // CLASSIQUE
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

                title:
                    "🖼️ Décrocher le tableau",

                description:
                    "Tu veux voir ce qu'il cache.",

                consequences: [

                    {
                        id: "mansion_portrait_remove_good",

                        text:
                            "Tu découvres une petite cache murale contenant quelques objets utiles.",

                        lives: 1,
                        icon: "🎁",
                        weight: 12
                    },

                    {
                        id: "mansion_portrait_remove_bad",

                        text:
                            "Le portrait tombe brutalement sur toi. Il est beaucoup plus lourd qu'il n'en avait l'air.",

                        lives: -2,
                        icon: "💥",
                        weight: 68
                    },

                    {
                        id: "mansion_portrait_remove_neutral",

                        text:
                            "Il n'y avait absolument rien derrière le tableau.",

                        lives: 0,
                        icon: "😑",
                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_portrait_talk",

                title:
                    "🗣️ Lui parler",

                description:
                    "À ce stade, pourquoi pas.",

                consequences: [

                    {
                        id: "mansion_portrait_talk_good",

                        text:
                            "Une voix murmure : « Bibliothèque... troisième livre... ».",

                        lives: 1,
                        icon: "📚",
                        weight: 15
                    },

                    {
                        id: "mansion_portrait_talk_bad",

                        text:
                            "Le personnage hurle soudainement depuis le tableau et tu tombes en arrière.",

                        lives: -1,
                        icon: "😱",
                        weight: 45
                    },

                    {
                        id: "mansion_portrait_talk_neutral",

                        text:
                            "Tu parles pendant plusieurs secondes. Le portrait continue simplement de te fixer.",

                        lives: 0,
                        icon: "😐",
                        weight: 40
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

                title:
                    "📖 Lire à voix haute",

                description:
                    "Les symboles ressemblent étrangement à une phrase.",

                narrative: {

                    setFlags: [
                        "mansion_library_spell"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_library_passage",

                            weight:
                                26
                        }
                    ]

                },

                consequences: [

                    {
                        id: "mansion_library_read_neutral",

                        text:
                            "Une partie de la bibliothèque coulisse lentement. Un passage sombre apparaît derrière.",

                        lives: 0,
                        icon: "🚪",
                        weight: 38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_library_passage",

                                    weight:
                                        44
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_library_read_bad",

                        text:
                            "Toutes les bougies s'éteignent et quelque chose commence à respirer derrière toi.",

                        lives: -2,
                        icon: "🌑",
                        weight: 52,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_library_passage",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id: "mansion_library_read_good",

                        text:
                            "Le livre révèle un symbole de protection avant que l'étagère ne s'ouvre.",

                        lives: 1,
                        icon: "✨",
                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_library_close",

                title:
                    "📕 Refermer le livre",

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
                            "Rien ne se produit. C'était probablement la meilleure décision possible.",

                        lives: 0,
                        icon: "😌",
                        weight: 72
                    },

                    {
                        id: "mansion_library_close_bad",

                        text:
                            "Le livre se rouvre tout seul et une étagère s'effondre derrière toi.",

                        lives: -1,
                        icon: "📚",
                        weight: 28
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
        id:
            "mansion_corridor_doors",

        title:
            "Deux portes t'attendent au bout du couloir",

        category:
            "Suite",

        icon:
            "🚪",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_corridor_followed"
            ]

        },

        description:
            "Après avoir continué dans le long couloir, tu atteins enfin deux portes : l'une blanche, l'autre noire.",

        choices: [

            {
                id:
                    "mansion_corridor_white",

                title:
                    "⚪ Porte blanche",

                description:
                    "Elle semble presque trop propre pour cet endroit.",

                consequences: [

                    {
                        id:
                            "mansion_corridor_white_neutral",

                        text:
                            "La porte ouvre sur une chambre totalement vide.",

                        lives: 0,
                        icon: "🛏️",
                        weight: 45
                    },

                    {
                        id:
                            "mansion_corridor_white_bad",

                        text:
                            "Une silhouette assise sur le lit tourne lentement la tête vers toi.",

                        lives: -2,
                        icon: "👤",
                        weight: 45
                    },

                    {
                        id:
                            "mansion_corridor_white_good",

                        text:
                            "Tu trouves une lampe encore fonctionnelle sur une table.",

                        lives: 1,
                        icon: "🔦",
                        weight: 10
                    }

                ]
            },


            {
                id:
                    "mansion_corridor_black",

                title:
                    "⚫ Porte noire",

                description:
                    "Une faible respiration semble venir de derrière.",

                consequences: [

                    {
                        id:
                            "mansion_corridor_black_bad",

                        text:
                            "Quelque chose tire brutalement la porte de l'autre côté et te projette au sol.",

                        lives: -2,
                        icon: "👹",
                        weight: 70
                    },

                    {
                        id:
                            "mansion_corridor_black_neutral",

                        text:
                            "La pièce est vide. La respiration s'arrête dès que tu entres.",

                        lives: 0,
                        icon: "🌑",
                        weight: 22
                    },

                    {
                        id:
                            "mansion_corridor_black_good",

                        text:
                            "Tu découvres une petite réserve cachée dans une armoire.",

                        lives: 2,
                        icon: "🎁",
                        weight: 8
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
        id:
            "mansion_basement",

        title:
            "Tu explores enfin la cave du manoir",

        category:
            "Suite",

        icon:
            "🕯️",

        baseWeight:
            1,

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
                id:
                    "mansion_basement_boiler",

                title:
                    "🔥 Examiner la chaudière",

                description:
                    "Elle ne devrait clairement pas fonctionner toute seule.",

                narrative: {

                    setFlags: [
                        "mansion_boiler_found"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_boiler",

                            weight:
                                30
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_basement_boiler_neutral",

                        text:
                            "La chaudière vibre étrangement mais semble encore stable.",

                        lives: 0,
                        icon: "🔥",
                        weight: 52,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_boiler",

                                    weight:
                                        40
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_basement_boiler_bad",

                        text:
                            "Une conduite explose et projette de la vapeur brûlante.",

                        lives: -2,
                        icon: "💨",
                        weight: 38,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_boiler",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_basement_boiler_good",

                        text:
                            "Tu trouves près de la chaudière une petite boîte contenant des outils encore utilisables.",

                        lives: 1,
                        icon: "🛠️",
                        weight: 10
                    }

                ]
            },


            {
                id:
                    "mansion_basement_leave",

                title:
                    "↩️ Remonter",

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
                        id:
                            "mansion_basement_leave_neutral",

                        text:
                            "Tu remontes sans difficulté.",

                        lives: 0,
                        icon: "🪜",
                        weight: 80
                    },

                    {
                        id:
                            "mansion_basement_leave_bad",

                        text:
                            "La dernière marche cède lorsque tu remontes.",

                        lives: -1,
                        icon: "💥",
                        weight: 20
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
        id:
            "mansion_child_room",

        title:
            "Tu retrouves la chambre liée à la poupée",

        category:
            "Suite",

        icon:
            "🧸",

        baseWeight:
            1,

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
                id:
                    "mansion_child_room_enter",

                title:
                    "🚪 Entrer",

                description:
                    "Tu veux comprendre ce qui relie la poupée à cette pièce.",

                consequences: [

                    {
                        id:
                            "mansion_child_room_enter_bad",

                        text:
                            "Tous les jouets tournent simultanément la tête vers toi.",

                        lives: -2,
                        icon: "😱",
                        weight: 65
                    },

                    {
                        id:
                            "mansion_child_room_enter_neutral",

                        text:
                            "La pièce reste parfaitement silencieuse. Rien ne bouge.",

                        lives: 0,
                        icon: "🧸",
                        weight: 27
                    },

                    {
                        id:
                            "mansion_child_room_enter_good",

                        text:
                            "La petite clé trouvée avec la poupée ouvre une boîte contenant quelques médicaments.",

                        lives: 2,
                        icon: "🩹",
                        weight: 8
                    }

                ]
            },


            {
                id:
                    "mansion_child_room_leave",

                title:
                    "🏃 Faire demi-tour",

                description:
                    "Tu n'aimes absolument pas la façon dont les jouets te regardent.",

                consequences: [

                    {
                        id:
                            "mansion_child_room_leave_neutral",

                        text:
                            "Tu refermes doucement la porte et t'éloignes.",

                        lives: 0,
                        icon: "😮‍💨",
                        weight: 78
                    },

                    {
                        id:
                            "mansion_child_room_leave_bad",

                        text:
                            "Une petite voix derrière la porte murmure ton nom. Tu pars en courant et chutes dans le couloir.",

                        lives: -1,
                        icon: "👻",
                        weight: 22
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
        id:
            "mansion_boiler",

        title:
            "La chaudière se met à cogner violemment",

        category:
            "Suite",

        icon:
            "🔥",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_boiler_found"
            ],

            not: [
                "mansion_basement_left"
            ]

        },

        description:
            "La vieille chaudière inspectée plus tôt tremble désormais de plus en plus fort. La pression semble dangereusement élevée.",

        choices: [

            {
                id:
                    "mansion_boiler_stop",

                title:
                    "🔧 Tenter de l'arrêter",

                description:
                    "Tu cherches une vanne ou un système de coupure.",

                consequences: [

                    {
                        id:
                            "mansion_boiler_stop_good",

                        text:
                            "Tu réussis à fermer la bonne vanne juste à temps.",

                        lives: 1,
                        icon: "🔧",
                        weight: 15
                    },

                    {
                        id:
                            "mansion_boiler_stop_bad",

                        text:
                            "Tu ouvres la mauvaise vanne et une énorme quantité de vapeur s'échappe.",

                        lives: -2,
                        icon: "💨",
                        weight: 60
                    },

                    {
                        id:
                            "mansion_boiler_stop_neutral",

                        text:
                            "Après plusieurs tentatives, la chaudière ralentit suffisamment pour devenir stable.",

                        lives: 0,
                        icon: "😮‍💨",
                        weight: 25
                    }

                ]
            },


            {
                id:
                    "mansion_boiler_run",

                title:
                    "🏃 Remonter immédiatement",

                description:
                    "Tu ne veux pas être là si cette chose explose.",

                consequences: [

                    {
                        id:
                            "mansion_boiler_run_neutral",

                        text:
                            "Tu atteins l'étage avant que la chaudière ne se stabilise toute seule.",

                        lives: 0,
                        icon: "🏃",
                        weight: 60
                    },

                    {
                        id:
                            "mansion_boiler_run_bad",

                        text:
                            "Une canalisation éclate derrière toi et te projette contre l'escalier.",

                        lives: -2,
                        icon: "💥",
                        weight: 40
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 13 - PASSAGE DE LA BIBLIOTHÈQUE
    // SUITE BIBLIOTHÈQUE
    // =========================================================

    {
        id:
            "mansion_library_passage",

        title:
            "Le passage derrière la bibliothèque est toujours ouvert",

        category:
            "Suite",

        icon:
            "🧱",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_library_spell"
            ],

            not: [
                "mansion_library_closed"
            ]

        },

        description:
            "Derrière l'étagère déplacée se cache un passage étroit descendant dans les murs du manoir.",

        choices: [

            {
                id:
                    "mansion_library_passage_enter",

                title:
                    "🕯️ Entrer",

                description:
                    "Tu t'engages entre les murs.",

                consequences: [

                    {
                        id:
                            "mansion_library_passage_good",

                        text:
                            "Le passage mène à une petite pièce contenant des outils et une lampe.",

                        lives: 1,
                        icon: "🔦",
                        weight: 12
                    },

                    {
                        id:
                            "mansion_library_passage_bad",

                        text:
                            "Une partie du mur se referme brutalement sur ton bras.",

                        lives: -2,
                        icon: "🧱",
                        weight: 63
                    },

                    {
                        id:
                            "mansion_library_passage_neutral",

                        text:
                            "Le passage débouche finalement dans un autre couloir désert.",

                        lives: 0,
                        icon: "🚪",
                        weight: 25
                    }

                ]
            },


            {
                id:
                    "mansion_library_passage_close",

                title:
                    "📚 Refermer l'étagère",

                description:
                    "Tu préfères ne pas découvrir où mène ce passage.",

                consequences: [

                    {
                        id:
                            "mansion_library_passage_close_neutral",

                        text:
                            "L'étagère reprend sa place et le passage disparaît.",

                        lives: 0,
                        icon: "📚",
                        weight: 85
                    },

                    {
                        id:
                            "mansion_library_passage_close_bad",

                        text:
                            "Le mécanisme se déclenche trop vite et te coince les doigts.",

                        lives: -1,
                        icon: "🤕",
                        weight: 15
                    }

                ]
            }

        ]
    }

];