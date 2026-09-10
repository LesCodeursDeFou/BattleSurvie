export const GROUP_SITUATIONS = [

    // =========================================================
    // 1 - CHAMBRE SÉCURISÉE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "mansion_group_safe_room",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} trouvent une chambre qui semble sécurisée",

        category:
            "Conflit de groupe",

        icon:
            "🛏️",

        description:
            "{group} découvrent une chambre dont la porte peut être verrouillée. {target} demande à les rejoindre.",

        choices: [

            {
                id:
                    "mansion_group_room_accept",

                title:
                    "🤝 Accepter {target}",

                description:
                    "Faire une place supplémentaire.",

                narrative: {

                    setFlags: [
                        "mansion_group_safe_room_used"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_group_safe_room_night",

                            weight:
                                28
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_group_room_accept_good",

                        text:
                            "{target} découvre une seconde serrure et sécurise parfaitement la pièce.",

                        icon:
                            "🔒",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_group_safe_room_night",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_group_room_accept_bad",

                        text:
                            "{target} ouvre accidentellement une armoire contenant une présence hostile.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            58,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_group_safe_room_night",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_group_room_accept_neutral",

                        text:
                            "Tout le monde entre et verrouille la porte. La pièce semble calme.",

                        icon:
                            "😌",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            },


            {
                id:
                    "mansion_group_room_refuse",

                title:
                    "🚫 Refuser",

                description:
                    "Verrouiller la porte sans {target}.",

                narrative: {

                    setFlags: [
                        "mansion_group_safe_room_used"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_group_safe_room_night",

                            weight:
                                20
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_group_room_refuse_neutral",

                        text:
                            "{group} ferment la porte tandis que {target} cherche un autre endroit.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            55
                    },

                    {
                        id:
                            "mansion_group_room_refuse_bad",

                        text:
                            "{target} reste seul dans le couloir et quelque chose l'attaque dans l'obscurité.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id:
                            "mansion_group_room_refuse_good",

                        text:
                            "La chambre est parfaitement silencieuse et {group} récupèrent un peu.",

                        icon:
                            "😴",

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
    // 2 - RITUEL
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "mansion_group_ritual",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} découvrent un cercle rituel",

        category:
            "Décision de groupe",

        icon:
            "🕯️",

        description:
            "Un ancien livre indique qu'une seule personne doit entrer dans le cercle. {group} regardent immédiatement {target}.",

        choices: [

            {
                id:
                    "mansion_group_ritual_target",

                title:
                    "😈 Envoyer {target}",

                description:
                    "Quelqu'un doit tester le rituel.",

                narrative: {

                    setFlags: [
                        "mansion_group_ritual_used"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_group_ritual_aftermath",

                            weight:
                                26
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_group_ritual_target_good",

                        text:
                            "Le rituel fonctionne et une faible énergie entoure {target}.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10
                    },

                    {
                        id:
                            "mansion_group_ritual_target_bad",

                        text:
                            "Une présence frappe violemment {target} au centre du cercle.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -3
                            }
                        ],

                        weight:
                            70,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_group_ritual_aftermath",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_group_ritual_target_neutral",

                        text:
                            "Les bougies s'éteignent. Rien ne semble se produire.",

                        icon:
                            "🌑",

                        effects:
                            [],

                        weight:
                            20
                    }

                ]
            },


            {
                id:
                    "mansion_group_ritual_destroy",

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
                        id:
                            "mansion_group_ritual_destroy_neutral",

                        text:
                            "Les symboles disparaissent sans provoquer de réaction.",

                        icon:
                            "😌",

                        effects:
                            [],

                        weight:
                            45
                    },

                    {
                        id:
                            "mansion_group_ritual_destroy_bad",

                        text:
                            "Briser le cercle libère brutalement ce qu'il contenait.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            55
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 3 - NOURRITURE
    // =========================================================

    {
        id:
            "mansion_group_food",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} trouvent une réserve de nourriture",

        category:
            "Conflit de groupe",

        icon:
            "🥫",

        description:
            "{group} trouvent des provisions encore consommables. {target} arrive juste au moment du partage.",

        choices: [

            {
                id:
                    "mansion_group_food_share",

                title:
                    "🍽️ Partager",

                description:
                    "Donner également une part à {target}.",

                consequences: [

                    {
                        id:
                            "mansion_group_food_share_good",

                        text:
                            "Une petite partie des provisions est encore parfaitement consommable.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_group_food_share_bad",

                        text:
                            "Une partie de la nourriture était contaminée.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            58
                    },

                    {
                        id:
                            "mansion_group_food_share_neutral",

                        text:
                            "La nourriture est mangeable mais presque sans valeur nutritive.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            },


            {
                id:
                    "mansion_group_food_keep",

                title:
                    "🔒 Garder pour le groupe",

                description:
                    "Ne rien donner à {target}.",

                consequences: [

                    {
                        id:
                            "mansion_group_food_keep_good",

                        text:
                            "{group} trouvent quelques aliments encore corrects.",

                        icon:
                            "🥫",

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
                            "mansion_group_food_keep_bad",

                        text:
                            "{target} trouve ailleurs une meilleure réserve et se sert seul.",

                        icon:
                            "😏",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "mansion_group_food_keep_neutral",

                        text:
                            "Les provisions conservées par {group} sont finalement presque inutilisables.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            70
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 4 - FANTÔME
    // =========================================================

    {
        id:
            "mansion_group_ghost_attack",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "Une apparition se dirige vers {target}",

        category:
            "Décision de groupe",

        icon:
            "👻",

        description:
            "{group} voient un spectre se rapprocher rapidement de {target}.",

        choices: [

            {
                id:
                    "mansion_group_ghost_help",

                title:
                    "🛡️ Aider {target}",

                description:
                    "Attirer l'attention de l'apparition.",

                consequences: [

                    {
                        id:
                            "mansion_group_ghost_help_good",

                        text:
                            "{group} parviennent à faire disparaître le spectre.",

                        icon:
                            "✨",

                        effects:
                            [],

                        weight:
                            30
                    },

                    {
                        id:
                            "mansion_group_ghost_help_bad",

                        text:
                            "Le spectre se divise en plusieurs silhouettes et attaque tout le monde.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id:
                            "mansion_group_ghost_help_reward",

                        text:
                            "Le spectre disparaît et laisse derrière lui une étrange chaleur protectrice.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target:
                                    "all",

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
                    "mansion_group_ghost_ignore",

                title:
                    "👀 Ne pas intervenir",

                description:
                    "Laisser {target} gérer seul.",

                consequences: [

                    {
                        id:
                            "mansion_group_ghost_ignore_bad",

                        text:
                            "L'apparition frappe violemment {target}.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -3
                            }
                        ],

                        weight:
                            72
                    },

                    {
                        id:
                            "mansion_group_ghost_ignore_neutral",

                        text:
                            "{target} traverse l'apparition, qui disparaît soudainement.",

                        icon:
                            "😮‍💨",

                        effects:
                            [],

                        weight:
                            28
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 5 - SORTIE
    // =========================================================

    {
        id:
            "mansion_group_exit",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} découvrent une possible sortie",

        category:
            "Conflit de groupe",

        icon:
            "🚪",

        description:
            "Une vieille porte semble mener dehors, mais le passage est très étroit. {target} arrive au même moment.",

        choices: [

            {
                id:
                    "mansion_group_exit_together",

                title:
                    "🤝 Attendre {target}",

                description:
                    "Essayer de sortir tous ensemble.",

                consequences: [

                    {
                        id:
                            "mansion_group_exit_together_good",

                        text:
                            "La porte mène vers une cour extérieure relativement calme.",

                        icon:
                            "🌙",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_group_exit_together_bad",

                        text:
                            "La porte était un piège. Le couloir se referme derrière tout le monde.",

                        icon:
                            "🧱",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            58
                    },

                    {
                        id:
                            "mansion_group_exit_together_neutral",

                        text:
                            "La porte mène simplement vers une autre aile du manoir.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            },


            {
                id:
                    "mansion_group_exit_leave",

                title:
                    "🏃 Partir sans {target}",

                description:
                    "Ne pas perdre de temps.",

                consequences: [

                    {
                        id:
                            "mansion_group_exit_leave_good",

                        text:
                            "{group} atteignent un couloir relativement calme.",

                        icon:
                            "😮‍💨",

                        effects:
                            [],

                        weight:
                            45
                    },

                    {
                        id:
                            "mansion_group_exit_leave_bad",

                        text:
                            "{target} découvre que la véritable sortie était dans la direction opposée.",

                        icon:
                            "😏",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            10
                    },

                    {
                        id:
                            "mansion_group_exit_leave_loss",

                        text:
                            "La porte se referme sur {group} et les enferme dans un petit vestibule.",

                        icon:
                            "🧱",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
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
    // 6 - MÉDICAMENTS
    // =========================================================

    {
        id:
            "mansion_group_medkit",

        type:
            "group_vs_one",

        baseWeight:
            1,

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
                id:
                    "mansion_group_medkit_share",

                title:
                    "🩹 Soigner {target}",

                description:
                    "Utiliser une partie des médicaments.",

                consequences: [

                    {
                        id:
                            "mansion_group_medkit_share_good",

                        text:
                            "L'un des médicaments fonctionne encore correctement.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            10
                    },

                    {
                        id:
                            "mansion_group_medkit_share_bad",

                        text:
                            "Les médicaments sont beaucoup trop anciens et rendent {target} malade.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id:
                            "mansion_group_medkit_share_neutral",

                        text:
                            "Les produits n'ont plus réellement d'effet.",

                        icon:
                            "💊",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            },


            {
                id:
                    "mansion_group_medkit_keep",

                title:
                    "🔒 Garder les médicaments",

                description:
                    "Les conserver pour {group}.",

                consequences: [

                    {
                        id:
                            "mansion_group_medkit_keep_good",

                        text:
                            "{group} utilisent une petite partie des soins avec succès.",

                        icon:
                            "❤️‍🩹",

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
                            "mansion_group_medkit_keep_bad",

                        text:
                            "{target} vole discrètement la trousse quelques minutes plus tard.",

                        icon:
                            "🥷",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id:
                            "mansion_group_medkit_keep_neutral",

                        text:
                            "Personne n'utilise finalement la vieille trousse.",

                        icon:
                            "🩹",

                        effects:
                            [],

                        weight:
                            40
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - PORTE MAUDITE
    // =========================================================

    {
        id:
            "mansion_group_cursed_door",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} trouvent une porte couverte de symboles",

        category:
            "Décision de groupe",

        icon:
            "🚪",

        description:
            "La porte pourrait permettre de progresser. {target} propose de l'ouvrir pendant que {group} restent à distance.",

        choices: [

            {
                id:
                    "mansion_group_door_target",

                title:
                    "👉 Laisser {target} ouvrir",

                description:
                    "Une idée parfaitement équitable.",

                consequences: [

                    {
                        id:
                            "mansion_group_door_target_good",

                        text:
                            "{target} ouvre la porte et découvre une pièce calme.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            38
                    },

                    {
                        id:
                            "mansion_group_door_target_bad",

                        text:
                            "Une décharge surnaturelle traverse {target} lorsqu'il touche la poignée.",

                        icon:
                            "⚡",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -3
                            }
                        ],

                        weight:
                            62
                    }

                ]
            },


            {
                id:
                    "mansion_group_door_together",

                title:
                    "🤝 Ouvrir ensemble",

                description:
                    "Partager le risque.",

                consequences: [

                    {
                        id:
                            "mansion_group_door_together_good",

                        text:
                            "La porte révèle quelques ressources utiles.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10
                    },

                    {
                        id:
                            "mansion_group_door_together_bad",

                        text:
                            "Une onde surnaturelle frappe toutes les personnes présentes.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            65
                    },

                    {
                        id:
                            "mansion_group_door_together_neutral",

                        text:
                            "La porte s'ouvre lentement sur un simple couloir.",

                        icon:
                            "🚪",

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
    // 8 - BIBLIOTHÈQUE EN FEU
    // =========================================================

    {
        id:
            "mansion_group_library_fire",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "La bibliothèque commence à brûler",

        category:
            "Décision de groupe",

        icon:
            "🔥",

        description:
            "{target} est encore à l'intérieur tandis que {group} sont déjà près de la sortie.",

        choices: [

            {
                id:
                    "mansion_group_fire_save",

                title:
                    "🧯 Retourner chercher {target}",

                description:
                    "Ne pas l'abandonner.",

                consequences: [

                    {
                        id:
                            "mansion_group_fire_save_neutral",

                        text:
                            "{group} retrouvent {target} et tout le monde rejoint la sortie.",

                        icon:
                            "🏃",

                        effects:
                            [],

                        weight:
                            40
                    },

                    {
                        id:
                            "mansion_group_fire_save_bad",

                        text:
                            "Une poutre enflammée s'effondre pendant le sauvetage.",

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
                            50
                    },

                    {
                        id:
                            "mansion_group_fire_save_good",

                        text:
                            "Tout le monde sort à temps et récupère même une petite caisse utile.",

                        icon:
                            "📦",

                        effects: [
                            {
                                target:
                                    "all",

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
                    "mansion_group_fire_leave",

                title:
                    "🚪 Fermer la porte",

                description:
                    "Sauver le groupe et laisser {target} trouver une autre sortie.",

                consequences: [

                    {
                        id:
                            "mansion_group_fire_leave_neutral",

                        text:
                            "{target} découvre une fenêtre et parvient à sortir seul.",

                        icon:
                            "🪟",

                        effects:
                            [],

                        weight:
                            38
                    },

                    {
                        id:
                            "mansion_group_fire_leave_bad",

                        text:
                            "{target} reste bloqué au milieu de la fumée.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -3
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
    // 9 - NUIT DANS LA CHAMBRE
    // SUITE CHAMBRE SÛRE
    // =========================================================

    {
        id:
            "mansion_group_safe_room_night",

        type:
            "group_vs_one",

        baseWeight:
            1,

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
            "{group} se trouvent encore dans la chambre sécurisée lorsque trois coups résonnent. Une voix imite parfaitement celle de {target}.",

        choices: [

            {
                id:
                    "mansion_safe_room_open",

                title:
                    "🔓 Ouvrir",

                description:
                    "Vérifier qui se trouve derrière.",

                consequences: [

                    {
                        id:
                            "mansion_safe_room_open_bad",

                        text:
                            "La voix n'appartenait pas du tout à {target}. Une silhouette entre immédiatement.",

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
                            70
                    },

                    {
                        id:
                            "mansion_safe_room_open_neutral",

                        text:
                            "Le couloir est vide.",

                        icon:
                            "🌑",

                        effects:
                            [],

                        weight:
                            25
                    },

                    {
                        id:
                            "mansion_safe_room_open_good",

                        text:
                            "Une petite boîte contenant quelques soins a été laissée devant la porte.",

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
                            5
                    }

                ]
            },


            {
                id:
                    "mansion_safe_room_ignore",

                title:
                    "🤫 Ne pas répondre",

                description:
                    "Personne n'ouvre cette porte.",

                consequences: [

                    {
                        id:
                            "mansion_safe_room_ignore_neutral",

                        text:
                            "Les coups cessent après quelques minutes.",

                        icon:
                            "😮‍💨",

                        effects:
                            [],

                        weight:
                            72
                    },

                    {
                        id:
                            "mansion_safe_room_ignore_bad",

                        text:
                            "La porte commence à se déformer sous des coups de plus en plus violents.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
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
    // 10 - APRÈS LE RITUEL
    // =========================================================

    {
        id:
            "mansion_group_ritual_aftermath",

        type:
            "group_vs_one",

        baseWeight:
            1,

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
            "Alors que personne ne touche au cercle, les bougies se rallument toutes seules et une silhouette apparaît au centre.",

        choices: [

            {
                id:
                    "mansion_ritual_aftermath_run",

                title:
                    "🏃 Quitter la pièce",

                description:
                    "Ne surtout pas recommencer le rituel.",

                consequences: [

                    {
                        id:
                            "mansion_ritual_aftermath_run_neutral",

                        text:
                            "{group} quittent la pièce avant que la silhouette ne réagisse.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            60
                    },

                    {
                        id:
                            "mansion_ritual_aftermath_run_bad",

                        text:
                            "La silhouette traverse la pièce et atteint {target} avant la sortie.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            40
                    }

                ]
            },


            {
                id:
                    "mansion_ritual_aftermath_finish",

                title:
                    "🕯️ Terminer le rituel",

                description:
                    "Essayer de comprendre ce qu'il réclame.",

                consequences: [

                    {
                        id:
                            "mansion_ritual_aftermath_finish_good",

                        text:
                            "La silhouette disparaît et les bougies s'éteignent définitivement.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10
                    },

                    {
                        id:
                            "mansion_ritual_aftermath_finish_bad",

                        text:
                            "Le rituel se retourne contre toutes les personnes présentes.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            70
                    },

                    {
                        id:
                            "mansion_ritual_aftermath_finish_neutral",

                        text:
                            "Rien ne se passe pendant plusieurs secondes, puis toutes les bougies s'éteignent.",

                        icon:
                            "🌑",

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