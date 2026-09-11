export const GROUP_SITUATIONS = [

    // =========================================================
    // 1 - CHAMBRE SÉCURISÉE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_group_safe_room",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "{group} trouvent une chambre qui semble sécurisée",

        category:
            "Conflit de groupe",

        icon:
            "🛏️",

        description:
            "{group} découvrent une chambre dont la porte peut être verrouillée. " +
            "{target} arrive dans le couloir et demande à les rejoindre.",

        choices: [

            {
                id: "mansion_group_room_accept",

                title:
                    "🤝 Accepter {target}",

                description:
                    "Faire une place supplémentaire.",

                narrative: {
                    setFlags: [
                        "mansion_group_safe_room_used",
                        "mansion_group_safe_room_shared"
                    ],

                    removeFlags: [
                        "mansion_group_safe_room_refused"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_safe_room_night",
                            weight: 32
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_room_accept_good",

                        text:
                            "{target} découvre une seconde serrure dissimulée derrière une tapisserie. " +
                            "La pièce devient étonnamment silencieuse.",

                        icon:
                            "🔒",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 24,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_safe_room_night",
                                    weight: 46
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_room_accept_bad",

                        text:
                            "{target} ouvre accidentellement une armoire. " +
                            "À l'intérieur, une silhouette était recroquevillée face au mur.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 38,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_safe_room_night",
                                    weight: 12
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_room_accept_possession",

                        text:
                            "Lorsque l'armoire s'ouvre, une ombre traverse la pièce et disparaît dans {target}. " +
                            "Il affirme immédiatement que tout va bien.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 13,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_safe_room_night",
                                    weight: 38
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_room_accept_neutral",

                        text:
                            "Tout le monde entre, verrouille la porte et attend. " +
                            "Aucun bruit ne semble venir de cette chambre.",

                        icon:
                            "😌",

                        effects: [],

                        weight: 25,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_safe_room_night",
                                    weight: 30
                                }
                            ]
                        }
                    }

                ]
            },


            {
                id: "mansion_group_room_refuse",

                title:
                    "🚫 Refuser",

                description:
                    "Verrouiller la porte sans {target}.",

                narrative: {
                    setFlags: [
                        "mansion_group_safe_room_used",
                        "mansion_group_safe_room_refused"
                    ],

                    removeFlags: [
                        "mansion_group_safe_room_shared"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_safe_room_night",
                            weight: 24
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_room_refuse_neutral",

                        text:
                            "{group} ferment la porte. {target} s'éloigne et trouve finalement une autre pièce.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 42
                    },

                    {
                        id: "mansion_group_room_refuse_bad",

                        text:
                            "Quelques minutes plus tard, un cri de {target} retentit dans le couloir. " +
                            "Lorsqu'il revient enfin, il est complètement terrifié.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 33
                    },

                    {
                        id: "mansion_group_room_refuse_attack",

                        text:
                            "{target} reste seul dans le couloir lorsqu'une silhouette surgit derrière lui.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_room_refuse_good",

                        text:
                            "La nuit reste parfaitement calme. {group} profitent enfin de quelques minutes sans manifestation.",

                        icon:
                            "🕯️",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 10
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - RITUEL
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_group_ritual",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "{group} découvrent un cercle rituel",

        category:
            "Décision de groupe",

        icon:
            "🕯️",

        description:
            "Un ancien livre indique qu'une seule personne doit entrer dans le cercle. " +
            "{group} regardent immédiatement {target}.",

        choices: [

            {
                id: "mansion_group_ritual_target",

                title:
                    "😈 Envoyer {target}",

                description:
                    "Quelqu'un doit tester le rituel.",

                narrative: {
                    setFlags: [
                        "mansion_group_ritual_used"
                    ],

                    removeFlags: [
                        "mansion_group_ritual_destroyed"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_ritual_aftermath",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_ritual_target_good",

                        text:
                            "Les symboles brillent doucement autour de {target}. " +
                            "Une sensation de calme remplace progressivement la peur.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            },

                            {
                                target: "target",

                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 12
                    },

                    {
                        id: "mansion_group_ritual_target_bad",

                        text:
                            "Une présence invisible frappe violemment {target} au centre du cercle.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 43,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_ritual_aftermath",
                                    weight: 44
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_ritual_target_curse",

                        text:
                            "Les bougies deviennent noires. Une marque sombre apparaît lentement sur le bras de {target}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 18,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_ritual_aftermath",
                                    weight: 48
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_ritual_target_possession",

                        text:
                            "{target} ferme les yeux. Lorsqu'il les rouvre, il récite une phrase que personne ne comprend.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 12,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_ritual_aftermath",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_ritual_target_neutral",

                        text:
                            "Les bougies s'éteignent toutes seules. Rien d'autre ne semble se produire.",

                        icon:
                            "🌑",

                        effects: [],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_group_ritual_destroy",

                title:
                    "🔥 Détruire le cercle",

                description:
                    "Personne ne participera à ce rituel.",

                narrative: {
                    setFlags: [
                        "mansion_group_ritual_destroyed"
                    ],

                    removeFlags: [
                        "mansion_group_ritual_used"
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_ritual_destroy_good",

                        text:
                            "Les symboles s'effacent progressivement. Une chaleur rassurante traverse la pièce.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 22
                    },

                    {
                        id: "mansion_group_ritual_destroy_bad",

                        text:
                            "Briser le cercle libère brutalement une onde sombre qui traverse toute la pièce.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 43
                    },

                    {
                        id: "mansion_group_ritual_destroy_attack",

                        text:
                            "Une silhouette jaillit du cercle au moment où les symboles sont effacés.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_group_ritual_destroy_neutral",

                        text:
                            "Les inscriptions disparaissent. Rien ne semble avoir été libéré.",

                        icon:
                            "😌",

                        effects: [],

                        weight: 15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 3 - NOURRITURE
    // =========================================================

    {
        id: "mansion_group_food",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "{group} trouvent une réserve de nourriture",

        category:
            "Conflit de groupe",

        icon:
            "🥫",

        description:
            "Dans une cuisine condamnée, {group} trouvent quelques provisions étrangement bien conservées. " +
            "{target} arrive juste au moment du partage.",

        choices: [

            {
                id: "mansion_group_food_share",

                title:
                    "🍽️ Partager",

                description:
                    "Donner également une part à {target}.",

                consequences: [

                    {
                        id: "mansion_group_food_share_good",

                        text:
                            "Contre toute attente, les aliments sont parfaitement consommables. " +
                            "Le repas rassure un peu tout le monde.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target: "all",
                                lives: 1
                            },

                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_food_share_bad",

                        text:
                            "À peine le repas commencé, la nourriture se transforme en matière noire et visqueuse.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_group_food_share_curse",

                        text:
                            "Chaque assiette porte soudainement le nom de la personne qui mange dedans.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 13
                    },

                    {
                        id: "mansion_group_food_share_neutral",

                        text:
                            "La nourriture est comestible mais sans goût. " +
                            "Personne ne comprend comment elle peut encore être fraîche.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 30
                    }

                ]
            },


            {
                id: "mansion_group_food_keep",

                title:
                    "🔒 Garder pour {group}",

                description:
                    "Ne rien donner à {target}.",

                consequences: [

                    {
                        id: "mansion_group_food_keep_good",

                        text:
                            "{group} mangent quelques aliments encore corrects sans incident.",

                        icon:
                            "🥫",

                        effects: [
                            {
                                target: "others",
                                lives: 1
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_food_keep_target",

                        text:
                            "{target} découvre une autre réserve. Celle-ci semble encore meilleure.",

                        icon:
                            "😏",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            },

                            {
                                target: "target",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_food_keep_fear",

                        text:
                            "Lorsque {group} commencent à manger, toutes les chaises vides de la cuisine reculent simultanément.",

                        icon:
                            "🪑",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_group_food_keep_neutral",

                        text:
                            "Les provisions conservées par {group} sont finalement presque inutilisables.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 40
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 4 - FANTÔME
    // =========================================================

    {
        id: "mansion_group_ghost_attack",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "Une apparition se dirige vers {target}",

        category:
            "Décision de groupe",

        icon:
            "👻",

        description:
            "{group} voient un spectre se rapprocher rapidement de {target}. " +
            "Celui-ci ne semble pas encore l'avoir remarqué.",

        choices: [

            {
                id: "mansion_group_ghost_help",

                title:
                    "🛡️ Aider {target}",

                description:
                    "Attirer collectivement l'attention de l'apparition.",

                consequences: [

                    {
                        id: "mansion_group_ghost_help_good",

                        text:
                            "{group} crient et avancent ensemble. Le spectre recule puis disparaît dans le plafond.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 23
                    },

                    {
                        id: "mansion_group_ghost_help_bad",

                        text:
                            "Le spectre se divise en plusieurs silhouettes qui foncent dans toutes les directions.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_group_ghost_help_attack",

                        text:
                            "L'apparition réagit violemment aux cris et traverse plusieurs membres de {group}.",

                        icon:
                            "🥶",

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

                        weight: 25
                    },

                    {
                        id: "mansion_group_ghost_help_reward",

                        text:
                            "Le spectre disparaît et laisse derrière lui une chaleur étrange mais rassurante.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_group_ghost_ignore",

                title:
                    "👀 Ne pas intervenir",

                description:
                    "Laisser {target} gérer seul.",

                consequences: [

                    {
                        id: "mansion_group_ghost_ignore_bad",

                        text:
                            "L'apparition traverse {target}. Il reste figé plusieurs secondes, incapable de parler.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 48
                    },

                    {
                        id: "mansion_group_ghost_ignore_possession",

                        text:
                            "Le spectre fusionne avec {target}. Lorsqu'il relève la tête, son sourire semble inhabituel.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 17
                    },

                    {
                        id: "mansion_group_ghost_ignore_neutral",

                        text:
                            "{target} traverse l'apparition sans conséquence visible. Le spectre disparaît.",

                        icon:
                            "😮‍💨",

                        effects: [],

                        weight: 25
                    },

                    {
                        id: "mansion_group_ghost_ignore_good",

                        text:
                            "{target} se retourne, fixe l'apparition et refuse de reculer. Le spectre finit par disparaître.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 10
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 5 - POSSIBLE SORTIE
    // =========================================================

    {
        id: "mansion_group_exit",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "{group} découvrent une possible sortie",

        category:
            "Conflit de groupe",

        icon:
            "🚪",

        description:
            "Une vieille porte semble mener dehors. " +
            "Le passage derrière est très étroit et {target} arrive au même moment.",

        choices: [

            {
                id: "mansion_group_exit_together",

                title:
                    "🤝 Attendre {target}",

                description:
                    "Essayer de sortir tous ensemble.",

                narrative: {
                    setFlags: [
                        "mansion_group_exit_attempted"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_false_exit",
                            weight: 22
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_exit_together_good",

                        text:
                            "La porte mène vers une cour intérieure éclairée par la lune. " +
                            "Pour quelques minutes, le manoir semble loin.",

                        icon:
                            "🌙",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            }
                        ],

                        weight: 16
                    },

                    {
                        id: "mansion_group_exit_together_bad",

                        text:
                            "Le passage se referme derrière tout le monde. " +
                            "Lorsqu'ils regardent devant eux, ils sont revenus exactement dans le hall.",

                        icon:
                            "🌀",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 44,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_false_exit",
                                    weight: 38
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_exit_together_attack",

                        text:
                            "Une porte coupe brutalement le groupe pendant le passage et frappe plusieurs survivants.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_group_exit_together_neutral",

                        text:
                            "La porte mène simplement vers une autre aile du manoir.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_group_exit_leave",

                title:
                    "🏃 Partir sans {target}",

                description:
                    "Ne pas risquer de perdre du temps.",

                narrative: {
                    setFlags: [
                        "mansion_group_exit_attempted"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_false_exit",
                            weight: 18
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_exit_leave_good",

                        text:
                            "{group} traversent rapidement et atteignent un couloir étrangement calme.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 28
                    },

                    {
                        id: "mansion_group_exit_leave_target",

                        text:
                            "{target} prend une autre direction et trouve une fenêtre donnant réellement sur l'extérieur.",

                        icon:
                            "🪟",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            },

                            {
                                target: "target",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 12
                    },

                    {
                        id: "mansion_group_exit_leave_loss",

                        text:
                            "La porte se referme sur {group}. Le petit vestibule commence immédiatement à rétrécir.",

                        icon:
                            "🧱",

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
                        id: "mansion_group_exit_leave_attack",

                        text:
                            "Le plafond du vestibule s'effondre partiellement.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 20
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - TROUSSE MÉDICALE
    // =========================================================

    {
        id: "mansion_group_medkit",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "{group} trouvent une ancienne trousse médicale",

        category:
            "Conflit de groupe",

        icon:
            "🩹",

        description:
            "{target} affirme être blessé et demande à utiliser les médicaments trouvés par {group}.",

        choices: [

            {
                id: "mansion_group_medkit_share",

                title:
                    "🩹 Soigner {target}",

                description:
                    "Utiliser une partie des médicaments.",

                consequences: [

                    {
                        id: "mansion_group_medkit_share_good",

                        text:
                            "Un désinfectant et quelques bandages sont encore parfaitement utilisables.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target: "target",
                                lives: 2
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_medkit_share_bad",

                        text:
                            "Le contenu est beaucoup trop ancien. {target} souffre rapidement d'une violente réaction.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_group_medkit_share_fear",

                        text:
                            "Lorsque la trousse s'ouvre, tous les instruments à l'intérieur sont parfaitement propres... et encore humides.",

                        icon:
                            "🩸",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_group_medkit_share_neutral",

                        text:
                            "Les produits n'ont plus réellement d'effet.",

                        icon:
                            "💊",

                        effects: [],

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_group_medkit_keep",

                title:
                    "🔒 Garder les médicaments",

                description:
                    "Les conserver pour {group}.",

                consequences: [

                    {
                        id: "mansion_group_medkit_keep_good",

                        text:
                            "{group} trouvent quelques bandages encore propres et peuvent soigner leurs blessures légères.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target: "others",
                                lives: 1
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_medkit_keep_bad",

                        text:
                            "{target} récupère discrètement la trousse. " +
                            "Lorsqu'elle est retrouvée plus tard, son contenu a presque entièrement disparu.",

                        icon:
                            "🥷",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_group_medkit_keep_haunted",

                        text:
                            "Pendant que personne ne regarde, la trousse s'ouvre toute seule et les instruments tombent un à un sur le sol.",

                        icon:
                            "👻",

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
                    },

                    {
                        id: "mansion_group_medkit_keep_neutral",

                        text:
                            "Personne n'utilise finalement la vieille trousse.",

                        icon:
                            "🩹",

                        effects: [],

                        weight: 30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - PORTE MAUDITE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_group_cursed_door",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "{group} trouvent une porte couverte de symboles",

        category:
            "Décision de groupe",

        icon:
            "🚪",

        description:
            "La porte pourrait permettre de progresser. " +
            "{target} propose de l'ouvrir pendant que {group} restent à distance.",

        choices: [

            {
                id: "mansion_group_door_target",

                title:
                    "👉 Laisser {target} ouvrir",

                description:
                    "Laisser une seule personne prendre le risque.",

                narrative: {
                    setFlags: [
                        "mansion_group_cursed_door_opened"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_cursed_corridor",
                            weight: 24
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_door_target_good",

                        text:
                            "{target} ouvre la porte et découvre un passage parfaitement calme.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_group_door_target_bad",

                        text:
                            "Une décharge surnaturelle traverse {target} lorsqu'il touche la poignée.",

                        icon:
                            "⚡",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 37
                    },

                    {
                        id: "mansion_group_door_target_curse",

                        text:
                            "La porte s'ouvre, mais les symboles disparaissent du bois et réapparaissent sur la peau de {target}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_group_door_target_neutral",

                        text:
                            "La porte ouvre sur un simple couloir. Aucun phénomène immédiat ne se produit.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_group_door_together",

                title:
                    "🤝 Ouvrir ensemble",

                description:
                    "Partager le risque.",

                narrative: {
                    setFlags: [
                        "mansion_group_cursed_door_opened"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_cursed_corridor",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_door_together_good",

                        text:
                            "Lorsque plusieurs mains touchent la porte, les symboles s'éteignent et le passage s'ouvre.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_door_together_bad",

                        text:
                            "Une onde glaciale traverse toutes les personnes présentes.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 43
                    },

                    {
                        id: "mansion_group_door_together_attack",

                        text:
                            "La porte s'ouvre brutalement et projette tout le monde en arrière.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            }
                        ],

                        weight: 22
                    },

                    {
                        id: "mansion_group_door_together_neutral",

                        text:
                            "La porte s'ouvre lentement sur un simple couloir.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 20
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - BIBLIOTHÈQUE EN FEU
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_group_library_fire",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "La bibliothèque commence à brûler",

        category:
            "Décision de groupe",

        icon:
            "🔥",

        description:
            "{target} est encore à l'intérieur tandis que {group} sont déjà près de la sortie. " +
            "Les flammes gagnent rapidement les étagères.",

        choices: [

            {
                id: "mansion_group_fire_save",

                title:
                    "🧯 Retourner chercher {target}",

                description:
                    "Ne pas l'abandonner.",

                narrative: {
                    setFlags: [
                        "mansion_library_fire_survived"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_burned_library",
                            weight: 24
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_fire_save_neutral",

                        text:
                            "{group} retrouvent {target} derrière une étagère. " +
                            "Tout le monde rejoint la sortie quelques secondes avant que le plafond ne commence à céder.",

                        icon:
                            "🏃",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 32
                    },

                    {
                        id: "mansion_group_fire_save_bad",

                        text:
                            "Une poutre enflammée s'effondre pendant le sauvetage.",

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
                        id: "mansion_group_fire_save_fear",

                        text:
                            "À travers les flammes, plusieurs silhouettes restent assises à des tables et regardent le groupe courir.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_group_fire_save_good",

                        text:
                            "Tout le monde sort à temps. {target} avait réussi à récupérer un vieux journal avant de fuir.",

                        icon:
                            "📖",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 10,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_burned_library",
                                    weight: 40
                                }
                            ]
                        }
                    }

                ]
            },


            {
                id: "mansion_group_fire_leave",

                title:
                    "🚪 Fermer la porte",

                description:
                    "Sauver {group} et laisser {target} chercher une autre sortie.",

                narrative: {
                    setFlags: [
                        "mansion_library_fire_survived"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_burned_library",
                            weight: 18
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_fire_leave_neutral",

                        text:
                            "{target} découvre une fenêtre et rejoint le groupe quelques minutes plus tard.",

                        icon:
                            "🪟",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_group_fire_leave_bad",

                        text:
                            "{target} reste bloqué dans la fumée et ressort finalement gravement blessé.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_group_fire_leave_fear",

                        text:
                            "Derrière la porte fermée, {group} entendent {target} les appeler. " +
                            "Puis une deuxième voix identique se met à appeler depuis l'autre côté du couloir.",

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

                        weight: 25
                    },

                    {
                        id: "mansion_group_fire_leave_good",

                        text:
                            "{target} connaît une seconde sortie et réapparaît quelques instants plus tard totalement indemne.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 10
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 9 - NUIT DANS LA CHAMBRE
    // SUITE CHAMBRE SÉCURISÉE
    // =========================================================

    {
        id: "mansion_group_safe_room_night",
        type: "group_vs_one",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_group_safe_room_used"
            ]
        },

        title:
            "Quelque chose frappe à la porte de la chambre",

        category:
            "Suite",

        icon:
            "🚪",

        description:
            "{group} se trouvent encore dans la chambre sécurisée lorsque trois coups résonnent. " +
            "Une voix imite parfaitement celle de {target}.",

        choices: [

            {
                id: "mansion_safe_room_open",

                title:
                    "🔓 Ouvrir",

                description:
                    "Vérifier qui se trouve derrière.",

                consequences: [

                    {
                        id: "mansion_safe_room_open_bad",

                        text:
                            "La voix n'appartenait pas à {target}. " +
                            "Une silhouette extrêmement grande se penche pour entrer dans la chambre.",

                        icon:
                            "👹",

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
                        id: "mansion_safe_room_open_attack",

                        text:
                            "Une main traverse immédiatement l'ouverture et frappe les survivants les plus proches.",

                        icon:
                            "✋",

                        effects: [
                            {
                                target: "others",
                                lives: -1
                            }
                        ],

                        weight: 23
                    },

                    {
                        id: "mansion_safe_room_open_neutral",

                        text:
                            "Le couloir est totalement vide.",

                        icon:
                            "🌑",

                        effects: [],

                        weight: 25
                    },

                    {
                        id: "mansion_safe_room_open_good",

                        text:
                            "Une petite boîte contenant un médaillon et plusieurs notes a été déposée devant la porte.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "others",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_safe_room_ignore",

                title:
                    "🤫 Ne pas répondre",

                description:
                    "Personne n'ouvre cette porte.",

                consequences: [

                    {
                        id: "mansion_safe_room_ignore_good",

                        text:
                            "Les coups cessent après quelques minutes. " +
                            "Le calme revient enfin dans la chambre.",

                        icon:
                            "😮‍💨",

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
                        id: "mansion_safe_room_ignore_bad",

                        text:
                            "La porte commence à se déformer sous des coups de plus en plus violents.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "others",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_safe_room_ignore_possession",

                        text:
                            "Les coups s'arrêtent. Puis l'un des membres de {group} se lève silencieusement et commence lui-même à déverrouiller la porte.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

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
    // 10 - APRÈS LE RITUEL
    // =========================================================

    {
        id: "mansion_group_ritual_aftermath",
        type: "group_vs_one",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_group_ritual_used"
            ],

            not: [
                "mansion_group_ritual_destroyed"
            ]
        },

        title:
            "Le cercle rituel s'allume de nouveau",

        category:
            "Suite",

        icon:
            "🕯️",

        description:
            "Alors que personne ne touche au cercle, les bougies se rallument toutes seules. " +
            "Une silhouette apparaît lentement au centre.",

        choices: [

            {
                id: "mansion_ritual_aftermath_run",

                title:
                    "🏃 Quitter la pièce",

                description:
                    "Ne surtout pas recommencer le rituel.",

                consequences: [

                    {
                        id: "mansion_ritual_aftermath_run_good",

                        text:
                            "{group} et {target} quittent immédiatement la pièce. " +
                            "La silhouette ne semble pas capable de franchir le cercle.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_ritual_aftermath_run_bad",

                        text:
                            "La silhouette traverse le cercle et atteint {target} avant la sortie.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 37
                    },

                    {
                        id: "mansion_ritual_aftermath_run_possession",

                        text:
                            "La silhouette disparaît juste avant la porte. " +
                            "{target} s'arrête pourtant de courir et se retourne lentement.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_ritual_aftermath_run_neutral",

                        text:
                            "Tout le monde quitte la pièce. Les bougies continuent simplement de brûler derrière eux.",

                        icon:
                            "🕯️",

                        effects: [],

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_ritual_aftermath_finish",

                title:
                    "🕯️ Terminer le rituel",

                description:
                    "Essayer de comprendre ce qu'il réclame.",

                consequences: [

                    {
                        id: "mansion_ritual_aftermath_finish_good",

                        text:
                            "Les derniers symboles sont correctement reproduits. " +
                            "La silhouette disparaît et le cercle s'éteint définitivement.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            },

                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_ritual_aftermath_finish_bad",

                        text:
                            "Le rituel se retourne contre toutes les personnes présentes.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            },

                            {
                                target: "all",
                                lives: -1
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_ritual_aftermath_finish_curse",

                        text:
                            "La silhouette disparaît, mais les symboles se déplacent sur le sol jusqu'aux pieds de {target}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_ritual_aftermath_finish_neutral",

                        text:
                            "Rien ne se passe pendant plusieurs secondes. Puis toutes les bougies s'éteignent.",

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
    // 11 - NOUVEAU : FAUSSE SORTIE
    // SUITE DE mansion_group_exit
    // =========================================================

    {
        id: "mansion_group_false_exit",
        type: "group_vs_one",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_group_exit_attempted"
            ]
        },

        title:
            "La porte extérieure réapparaît",

        category:
            "Suite",

        icon:
            "🌙",

        description:
            "Quelques pièces plus loin, {group} et {target} retrouvent exactement la même porte. " +
            "De l'air frais semble réellement passer sous celle-ci.",

        choices: [

            {
                id: "mansion_false_exit_open",

                title:
                    "🚪 Essayer encore",

                description:
                    "Cette fois, la sortie semble réelle.",

                consequences: [

                    {
                        id: "mansion_false_exit_open_good",

                        text:
                            "La porte s'ouvre réellement sur le jardin. " +
                            "L'air extérieur permet à tout le monde de reprendre ses esprits.",

                        icon:
                            "🌙",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -2
                                }
                            },

                            {
                                target: "all",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_false_exit_open_bad",

                        text:
                            "Derrière la porte se trouve exactement le même couloir. " +
                            "En se retournant, le groupe découvre une seconde version de lui-même devant la porte précédente.",

                        icon:
                            "👥",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 47
                    },

                    {
                        id: "mansion_false_exit_open_possession",

                        text:
                            "La porte mène au jardin. Mais lorsque {target} franchit le seuil, son reflet reste à l'intérieur.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_false_exit_open_neutral",

                        text:
                            "La porte s'ouvre sur une autre pièce du manoir. Encore une fausse piste.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_false_exit_mark",

                title:
                    "✏️ Marquer la porte et repartir",

                description:
                    "Vérifier plus tard si le manoir déplace réellement ses pièces.",

                consequences: [

                    {
                        id: "mansion_false_exit_mark_good",

                        text:
                            "Lorsque le groupe se retourne quelques secondes plus tard, la marque se trouve désormais sur le mur opposé. " +
                            "Au moins, une règle vient d'être découverte.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_false_exit_mark_bad",

                        text:
                            "Le symbole tracé sur la porte apparaît simultanément sur les mains de tous les survivants.",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_false_exit_mark_neutral",

                        text:
                            "La porte reste exactement à sa place. Rien ne permet de comprendre ce qui se passe.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 25
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 12 - NOUVEAU : COULOIR MAUDIT
    // SUITE PORTE MAUDITE
    // =========================================================

    {
        id: "mansion_group_cursed_corridor",
        type: "group_vs_one",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_group_cursed_door_opened"
            ]
        },

        title:
            "Le couloir derrière la porte semble sans fin",

        category:
            "Suite",

        icon:
            "🌀",

        description:
            "Après plusieurs minutes de marche, {group} et {target} comprennent qu'ils repassent devant le même tableau encore et encore.",

        choices: [

            {
                id: "mansion_cursed_corridor_continue",

                title:
                    "🚶 Continuer tout droit",

                description:
                    "Le couloir finira forcément quelque part.",

                consequences: [

                    {
                        id: "mansion_cursed_corridor_continue_good",

                        text:
                            "Après un nouveau passage devant le tableau, celui-ci a changé : une porte y est désormais dessinée. " +
                            "Quelques mètres plus loin, cette porte existe réellement.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_cursed_corridor_continue_bad",

                        text:
                            "Le couloir continue encore et encore. " +
                            "La sensation d'être prisonnier devient presque insupportable.",

                        icon:
                            "🌀",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 52
                    },

                    {
                        id: "mansion_cursed_corridor_continue_neutral",

                        text:
                            "Après une très longue marche, tout le monde revient exactement au point de départ.",

                        icon:
                            "🖼️",

                        effects: [],

                        weight: 30
                    }

                ]
            },


            {
                id: "mansion_cursed_corridor_reverse",

                title:
                    "↩️ Marcher à reculons",

                description:
                    "Si le couloir réagit aux déplacements, autant essayer quelque chose d'absurde.",

                consequences: [

                    {
                        id: "mansion_cursed_corridor_reverse_good",

                        text:
                            "À la surprise générale, le tableau disparaît. Un escalier est maintenant visible derrière le groupe.",

                        icon:
                            "🪜",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_cursed_corridor_reverse_bad",

                        text:
                            "Toutes les peintures se retournent simultanément pour regarder le groupe marcher.",

                        icon:
                            "👀",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_cursed_corridor_reverse_neutral",

                        text:
                            "La méthode est ridicule et ne produit absolument aucun changement.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 20
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 13 - NOUVEAU : RESTES DE LA BIBLIOTHÈQUE
    // SUITE BIBLIOTHÈQUE EN FEU
    // =========================================================

    {
        id: "mansion_group_burned_library",
        type: "group_vs_one",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_library_fire_survived"
            ]
        },

        title:
            "Le groupe retourne près de la bibliothèque brûlée",

        category:
            "Suite",

        icon:
            "📚",

        description:
            "Les flammes ont disparu. Pourtant, au milieu des cendres, un seul livre est parfaitement intact.",

        choices: [

            {
                id: "mansion_burned_library_book",

                title:
                    "📖 Récupérer le livre",

                description:
                    "Un objet ayant survécu à cet incendie mérite peut-être d'être étudié.",

                consequences: [

                    {
                        id: "mansion_burned_library_book_good",

                        text:
                            "Le livre contient les plans d'une ancienne partie du manoir et plusieurs notes sur ses phénomènes.",

                        icon:
                            "🗺️",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_burned_library_book_bad",

                        text:
                            "Lorsque le livre est ouvert, toute la bibliothèque apparaît intacte pendant quelques secondes. " +
                            "Des dizaines de silhouettes lisent silencieusement autour du groupe.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_burned_library_book_curse",

                        text:
                            "Le livre contient une liste de noms. Celui de {target} s'écrit tout seul à la dernière ligne.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_burned_library_book_neutral",

                        text:
                            "Toutes les pages sont totalement noires sauf une, qui ne contient qu'une date impossible à interpréter.",

                        icon:
                            "📖",

                        effects: [],

                        weight: 23
                    }

                ]
            },


            {
                id: "mansion_burned_library_leave",

                title:
                    "🚪 Ne toucher à rien",

                description:
                    "Quelque chose a voulu préserver ce livre. Ce n'est pas forcément une invitation.",

                consequences: [

                    {
                        id: "mansion_burned_library_leave_good",

                        text:
                            "Le groupe quitte les lieux. Plus ils s'éloignent, plus l'atmosphère devient légère.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 65
                    },

                    {
                        id: "mansion_burned_library_leave_bad",

                        text:
                            "En quittant la bibliothèque, tout le monde entend une page se tourner derrière eux.",

                        icon:
                            "📖",

                        effects: [
                            {
                                target: "all",

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
    // 14 - NOUVEAU : ASCENSEUR
    // =========================================================

    {
        id: "mansion_group_elevator",
        type: "group_vs_one",
        baseWeight: 1,

        title:
            "{group} trouvent un ancien ascenseur",

        category:
            "Décision de groupe",

        icon:
            "🛗",

        description:
            "L'ascenseur semble fonctionner malgré l'âge du manoir. " +
            "La cabine est petite et {target} hésite à monter avec {group}.",

        choices: [

            {
                id: "mansion_group_elevator_all",

                title:
                    "🛗 Monter tous ensemble",

                description:
                    "Personne ne reste seul.",

                narrative: {
                    setFlags: [
                        "mansion_elevator_used"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_elevator_stop",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_elevator_all_good",

                        text:
                            "L'ascenseur monte normalement et ouvre sur un étage que personne n'avait encore exploré.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_group_elevator_all_bad",

                        text:
                            "La cabine chute brutalement de plusieurs mètres avant de s'arrêter.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            },

                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 37
                    },

                    {
                        id: "mansion_group_elevator_all_fear",

                        text:
                            "Pendant la montée, l'indicateur affiche successivement des étages négatifs : -1, -2, -3, -4...",

                        icon:
                            "🔻",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 25,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_group_elevator_stop",
                                    weight: 44
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_group_elevator_all_neutral",

                        text:
                            "La cabine grince énormément mais finit par ouvrir ses portes.",

                        icon:
                            "🛗",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_group_elevator_target",

                title:
                    "👉 Envoyer {target} en premier",

                description:
                    "Tester l'ascenseur avec une seule personne.",

                narrative: {
                    setFlags: [
                        "mansion_elevator_used"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_elevator_stop",
                            weight: 20
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_elevator_target_good",

                        text:
                            "{target} descend puis revient sans problème. L'ascenseur semble réellement fonctionner.",

                        icon:
                            "👍",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 28
                    },

                    {
                        id: "mansion_group_elevator_target_bad",

                        text:
                            "Les portes se ferment sur {target}. L'indicateur descend alors jusqu'à un étage qui n'existe pas.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_group_elevator_target_possession",

                        text:
                            "L'ascenseur revient plusieurs minutes plus tard. " +
                            "{target} en sort calmement mais ne se souvient de rien.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_elevator_target_neutral",

                        text:
                            "La cabine revient vide. Quelques secondes plus tard, {target} apparaît au bout du couloir sans savoir comment il est arrivé là.",

                        icon:
                            "🌀",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
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
    // 15 - NOUVEAU : ASCENSEUR BLOQUÉ
    // SUITE
    // =========================================================

    {
        id: "mansion_group_elevator_stop",
        type: "group_vs_one",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_elevator_used"
            ]
        },

        title:
            "L'ascenseur s'arrête entre deux étages",

        category:
            "Suite",

        icon:
            "🛗",

        description:
            "Les lumières s'éteignent. Une voix dans le haut-parleur demande calmement : " +
            "« Lequel d'entre vous ne devrait pas être ici ? »",

        choices: [

            {
                id: "mansion_elevator_stop_silent",

                title:
                    "🤫 Ne répondre à personne",

                description:
                    "Ignorer complètement la voix.",

                consequences: [

                    {
                        id: "mansion_elevator_stop_silent_good",

                        text:
                            "Après une longue minute de silence, les lumières se rallument et l'ascenseur repart.",

                        icon:
                            "💡",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_elevator_stop_silent_bad",

                        text:
                            "La voix répète la question avec les voix de chacun des survivants, les unes après les autres.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_elevator_stop_silent_neutral",

                        text:
                            "Rien ne se passe pendant plusieurs minutes avant que les portes ne s'ouvrent manuellement.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_elevator_stop_target",

                title:
                    "👉 Désigner {target}",

                description:
                    "Répondre à la voix et espérer qu'elle accepte.",

                consequences: [

                    {
                        id: "mansion_elevator_stop_target_bad",

                        text:
                            "La voix répond : « Merci. » Toutes les lumières s'éteignent autour de {target}.",

                        icon:
                            "🌑",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_elevator_stop_target_possession",

                        text:
                            "La voix murmure : « Exact. » {target} ferme alors les yeux et reste parfaitement immobile.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_elevator_stop_target_neutral",

                        text:
                            "La voix éclate de rire et les portes s'ouvrent enfin.",

                        icon:
                            "😈",

                        effects: [],

                        weight: 38
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 16 - NOUVEAU : SÉANCE DE SPIRITISME
    // =========================================================

    {
        id: "mansion_group_seance",
        type: "group_vs_one",
        baseWeight: 0.9,

        title:
            "{group} découvrent une table de spiritisme",

        category:
            "Décision de groupe",

        icon:
            "🔮",

        description:
            "Les lettres de l'alphabet entourent une vieille planchette. " +
            "{target} affirme qu'il pourrait essayer de contacter l'esprit qui hante le manoir.",

        choices: [

            {
                id: "mansion_group_seance_try",

                title:
                    "🔮 Tenter la séance",

                description:
                    "Essayer d'obtenir des réponses.",

                narrative: {
                    setFlags: [
                        "mansion_seance_attempted"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_group_seance_answer",
                            weight: 28
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_group_seance_try_good",

                        text:
                            "La planchette écrit lentement : « CHAPELLE ». " +
                            "Puis elle indique une direction précise.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_group_seance_try_bad",

                        text:
                            "La planchette accélère brutalement et écrit encore et encore : « PARTEZ ».",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_group_seance_try_possession",

                        text:
                            "La planchette s'arrête devant {target}. Celui-ci commence alors à parler avec une voix inconnue.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_group_seance_try_neutral",

                        text:
                            "La planchette ne bouge absolument pas.",

                        icon:
                            "🔮",

                        effects: [],

                        weight: 22
                    }

                ]
            },


            {
                id: "mansion_group_seance_destroy",

                title:
                    "🔥 Détruire la planchette",

                description:
                    "Ne donner aucune chance au phénomène de commencer.",

                consequences: [

                    {
                        id: "mansion_group_seance_destroy_good",

                        text:
                            "La planchette se brise. L'atmosphère de la pièce devient immédiatement plus légère.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 55
                    },

                    {
                        id: "mansion_group_seance_destroy_bad",

                        text:
                            "Une fois brisée, chaque morceau de la planchette se met à bouger seul sur la table.",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_group_seance_destroy_curse",

                        text:
                            "Un morceau de bois porte désormais le nom de {target}, gravé profondément dans la matière.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 17 - NOUVEAU : RÉPONSE DE LA SÉANCE
    // =========================================================

    {
        id: "mansion_group_seance_answer",
        type: "group_vs_one",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_seance_attempted"
            ]
        },

        title:
            "La planchette bouge de nouveau sans personne autour",

        category:
            "Suite",

        icon:
            "🔮",

        description:
            "Alors que tout le monde s'apprête à quitter la pièce, la planchette se déplace seule et écrit : " +
            "« UN DE VOUS MENT ».",

        choices: [

            {
                id: "mansion_seance_answer_target",

                title:
                    "👉 Soupçonner {target}",

                description:
                    "La présence désigne peut-être la personne isolée du groupe.",

                consequences: [

                    {
                        id: "mansion_seance_answer_target_bad",

                        text:
                            "La planchette écrit immédiatement : « NON ». Toutes les bougies s'éteignent.",

                        icon:
                            "🌑",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 48
                    },

                    {
                        id: "mansion_seance_answer_target_possession",

                        text:
                            "La planchette écrit : « OUI ». {target} sourit pourtant comme s'il attendait cette réponse.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 17
                    },

                    {
                        id: "mansion_seance_answer_target_neutral",

                        text:
                            "La planchette cesse complètement de bouger.",

                        icon:
                            "🔮",

                        effects: [],

                        weight: 35
                    }

                ]
            },


            {
                id: "mansion_seance_answer_refuse",

                title:
                    "🤝 Refuser de désigner quelqu'un",

                description:
                    "Ne pas laisser une présence inconnue retourner le groupe contre lui-même.",

                consequences: [

                    {
                        id: "mansion_seance_answer_refuse_good",

                        text:
                            "La planchette tremble puis se casse en deux. " +
                            "Le groupe refuse manifestement de jouer selon les règles du manoir.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_seance_answer_refuse_bad",

                        text:
                            "Les lettres sur la table commencent à écrire le prénom de chaque joueur à tour de rôle.",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 37
                    },

                    {
                        id: "mansion_seance_answer_refuse_neutral",

                        text:
                            "La planchette reste immobile. Personne ne répond à la provocation.",

                        icon:
                            "🤫",

                        effects: [],

                        weight: 25
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 18 - NOUVEAU : PIÈCE DES PORTRAITS
    // =========================================================

    {
        id: "mansion_group_portrait_room",
        type: "group_vs_one",
        baseWeight: 0.9,

        title:
            "{group} entrent dans une galerie remplie de leurs portraits",

        category:
            "Paranormal",

        icon:
            "🖼️",

        description:
            "Chaque survivant possède désormais son propre portrait sur les murs. " +
            "Celui de {target} est le seul dont les yeux sont fermés.",

        choices: [

            {
                id: "mansion_group_portrait_wake",

                title:
                    "👁️ Examiner le portrait de {target}",

                description:
                    "Comprendre pourquoi il est différent.",

                consequences: [

                    {
                        id: "mansion_group_portrait_wake_good",

                        text:
                            "Derrière le cadre, {group} découvrent plusieurs annotations expliquant comment certaines illusions du manoir fonctionnent.",

                        icon:
                            "📜",

                        effects: [
                            {
                                target: "all",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_group_portrait_wake_bad",

                        text:
                            "Les yeux peints de {target} s'ouvrent brutalement. Tous les autres portraits font de même.",

                        icon:
                            "👀",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_group_portrait_wake_curse",

                        text:
                            "Sous le portrait est inscrite une date correspondant exactement à aujourd'hui.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_group_portrait_wake_neutral",

                        text:
                            "Le portrait ne semble avoir aucune particularité supplémentaire.",

                        icon:
                            "🖼️",

                        effects: [],

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_group_portrait_destroy",

                title:
                    "🔥 Détruire les portraits",

                description:
                    "Ne laisser aucune copie du groupe sur ces murs.",

                consequences: [

                    {
                        id: "mansion_group_portrait_destroy_good",

                        text:
                            "Lorsque les cadres sont brisés, l'atmosphère oppressante de la galerie disparaît.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_group_portrait_destroy_bad",

                        text:
                            "À chaque tableau détruit, la personne représentée ressent une violente douleur.",

                        icon:
                            "😖",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_group_portrait_destroy_fear",

                        text:
                            "Les portraits détruits réapparaissent immédiatement sur le mur opposé, désormais souriants.",

                        icon:
                            "😈",

                        effects: [
                            {
                                target: "all",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 30
                    }

                ]
            }

        ]
    }

];