export const INTERACTION_SITUATIONS = [

    // =========================================================
    // 1 - FANTÔME
    // =========================================================

    {
        id: "mansion_interaction_ghost",
        type: "interaction",
        baseWeight: 1,

        title:
            "Une silhouette apparaît derrière {target}",

        category:
            "Interaction",

        icon:
            "👻",

        description:
            "{actor} voit clairement une silhouette blanche se rapprocher de {target}, qui n'a encore rien remarqué.",

        choices: [

            {
                id:
                    "mansion_ghost_warn",

                title:
                    "📢 Prévenir {target}",

                description:
                    "L'avertir immédiatement.",

                consequences: [

                    {
                        id:
                            "mansion_ghost_warn_neutral",

                        text:
                            "{target} se retourne et les deux joueurs s'éloignent rapidement.",

                        icon:
                            "🏃",

                        effects:
                            [],

                        weight:
                            48
                    },

                    {
                        id:
                            "mansion_ghost_warn_bad",

                        text:
                            "{actor} hurle tellement fort que {target} panique et tombe dans l'escalier.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            42
                    },

                    {
                        id:
                            "mansion_ghost_warn_good",

                        text:
                            "L'apparition disparaît immédiatement lorsqu'elle réalise qu'elle a été repérée.",

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
                    }

                ]
            },


            {
                id:
                    "mansion_ghost_silent",

                title:
                    "🤫 Ne rien dire",

                description:
                    "Observer ce qui va se passer.",

                consequences: [

                    {
                        id:
                            "mansion_ghost_silent_neutral",

                        text:
                            "La silhouette disparaît avant d'atteindre {target}.",

                        icon:
                            "🌫️",

                        effects:
                            [],

                        weight:
                            35
                    },

                    {
                        id:
                            "mansion_ghost_silent_bad",

                        text:
                            "Le fantôme traverse {target}, qui s'effondre de froid.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            65
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - CLÉ
    // DÉBUT HISTOIRE CLÉ
    // =========================================================

    {
        id:
            "mansion_interaction_key",

        type:
            "interaction",

        baseWeight:
            1,

        title:
            "{actor} trouve une clé ancienne",

        category:
            "Interaction",

        icon:
            "🗝️",

        description:
            "{target} affirme savoir exactement quelle porte cette clé peut ouvrir.",

        choices: [

            {
                id:
                    "mansion_key_give",

                title:
                    "🤝 Donner la clé à {target}",

                description:
                    "Faire confiance à son intuition.",

                narrative: {

                    setFlags: [
                        "mansion_key_given"
                    ],

                    removeFlags: [
                        "mansion_key_kept"
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_key_give_good",

                        text:
                            "{target} ouvre une petite pièce contenant quelques objets utiles.",

                        icon:
                            "🎁",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_key_give_bad",

                        text:
                            "{target} ouvre une porte derrière laquelle quelque chose attendait depuis longtemps.",

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
                            63
                    },

                    {
                        id:
                            "mansion_key_give_neutral",

                        text:
                            "La clé ne correspond finalement à aucune des portes proches.",

                        icon:
                            "🔑",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]
            },


            {
                id:
                    "mansion_key_keep",

                title:
                    "🔒 Garder la clé",

                description:
                    "Tu préfères décider toi-même où l'utiliser.",

                narrative: {

                    setFlags: [
                        "mansion_key_kept"
                    ],

                    removeFlags: [
                        "mansion_key_given"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_interaction_locked_door",

                            weight:
                                32
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_key_keep_neutral",

                        text:
                            "{actor} conserve la clé sans savoir encore ce qu'elle ouvre.",

                        icon:
                            "🗝️",

                        effects:
                            [],

                        weight:
                            55,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_interaction_locked_door",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_key_keep_bad",

                        text:
                            "En fouillant plusieurs portes, {actor} déclenche un mécanisme qui lui écrase les doigts.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            35,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_interaction_locked_door",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_key_keep_good",

                        text:
                            "La clé semble vibrer légèrement près d'une aile encore inexplorée.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target:
                                    "actor",

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
    // 3 - POUPÉE
    // =========================================================

    {
        id:
            "mansion_interaction_doll",

        type:
            "interaction",

        baseWeight:
            1,

        title:
            "{target} tient une poupée inquiétante",

        category:
            "Interaction",

        icon:
            "🧸",

        description:
            "{target} affirme avoir trouvé cette poupée dans une chambre. {actor} remarque qu'elle vient de tourner la tête.",

        choices: [

            {
                id:
                    "mansion_doll_throw",

                title:
                    "🔥 Lui demander de la jeter au feu",

                description:
                    "Cette chose ne devrait clairement pas rester avec vous.",

                consequences: [

                    {
                        id:
                            "mansion_doll_throw_good",

                        text:
                            "La poupée brûle et un cri surnaturel résonne. Puis plus rien.",

                        icon:
                            "🔥",

                        effects:
                            [],

                        weight:
                            34
                    },

                    {
                        id:
                            "mansion_doll_throw_bad",

                        text:
                            "La poupée explose dans les flammes et projette des morceaux brûlants sur {target}.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            56
                    },

                    {
                        id:
                            "mansion_doll_throw_reward",

                        text:
                            "Une petite clé tombe de la poupée avant qu'elle ne brûle.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target:
                                    "actor",

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
                    "mansion_doll_keep",

                title:
                    "😈 Lui dire de la garder",

                description:
                    "Après tout, elle est presque mignonne.",

                consequences: [

                    {
                        id:
                            "mansion_doll_keep_bad",

                        text:
                            "La poupée mord soudainement la main de {target}.",

                        icon:
                            "🩸",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            68
                    },

                    {
                        id:
                            "mansion_doll_keep_neutral",

                        text:
                            "La poupée ne bouge plus. Pour le moment.",

                        icon:
                            "🧸",

                        effects:
                            [],

                        weight:
                            24
                    },

                    {
                        id:
                            "mansion_doll_keep_good",

                        text:
                            "La poupée pointe mystérieusement vers un couloir que personne n'avait remarqué.",

                        icon:
                            "👉",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            8
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 4 - TRAPPE
    // =========================================================

    {
        id:
            "mansion_interaction_trapdoor",

        type:
            "interaction",

        baseWeight:
            1,

        title:
            "{actor} trouve une trappe sous un tapis",

        category:
            "Interaction",

        icon:
            "🕳️",

        description:
            "{target} propose de descendre en premier pour explorer ce qui se trouve sous la maison.",

        choices: [

            {
                id:
                    "mansion_trapdoor_target",

                title:
                    "👇 Laisser {target} descendre",

                description:
                    "Quelqu'un doit bien y aller.",

                consequences: [

                    {
                        id:
                            "mansion_trapdoor_target_good",

                        text:
                            "{target} trouve quelques provisions au fond.",

                        icon:
                            "🥫",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_trapdoor_target_bad",

                        text:
                            "L'échelle casse et {target} chute dans l'obscurité.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            63
                    },

                    {
                        id:
                            "mansion_trapdoor_target_neutral",

                        text:
                            "{target} descend puis remonte quelques minutes plus tard. Il n'y avait rien.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]
            },


            {
                id:
                    "mansion_trapdoor_actor",

                title:
                    "🦸 Descendre toi-même",

                description:
                    "{actor} préfère prendre le risque.",

                consequences: [

                    {
                        id:
                            "mansion_trapdoor_actor_good",

                        text:
                            "{actor} découvre un passage vers une autre aile du manoir.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_trapdoor_actor_bad",

                        text:
                            "Une créature surgit du noir et attaque {actor}.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            63
                    },

                    {
                        id:
                            "mansion_trapdoor_actor_neutral",

                        text:
                            "Le sous-sol est vide et la trappe mène à une simple cave.",

                        icon:
                            "🕯️",

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
    // 5 - LIVRE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "mansion_interaction_book",

        type:
            "interaction",

        baseWeight:
            1,

        title:
            "{target} commence à lire un livre étrange",

        category:
            "Interaction",

        icon:
            "📖",

        description:
            "{actor} remarque que les lettres du livre semblent bouger pendant que {target} lit à voix haute.",

        choices: [

            {
                id:
                    "mansion_book_stop",

                title:
                    "🛑 Lui arracher le livre",

                description:
                    "Cela semble être une excellente idée.",

                narrative: {

                    setFlags: [
                        "mansion_interaction_book_stopped"
                    ],

                    removeFlags: [
                        "mansion_interaction_book_read"
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_book_stop_neutral",

                        text:
                            "{actor} referme le livre. La pièce redevient silencieuse.",

                        icon:
                            "📕",

                        effects:
                            [],

                        weight:
                            55
                    },

                    {
                        id:
                            "mansion_book_stop_bad",

                        text:
                            "{target} refuse de lâcher le livre et frappe accidentellement {actor}.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            45
                    }

                ]
            },


            {
                id:
                    "mansion_book_continue",

                title:
                    "👀 Le laisser continuer",

                description:
                    "Peut-être que le livre contient une information utile.",

                narrative: {

                    setFlags: [
                        "mansion_interaction_book_read"
                    ],

                    removeFlags: [
                        "mansion_interaction_book_stopped"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_interaction_book_shadow",

                            weight:
                                30
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "mansion_book_continue_bad",

                        text:
                            "Une forme sombre s'échappe brièvement du livre avant de disparaître dans le mur.",

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
                            58,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_interaction_book_shadow",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_book_continue_neutral",

                        text:
                            "Le texte révèle un étrange rituel puis les pages deviennent entièrement blanches.",

                        icon:
                            "📖",

                        effects:
                            [],

                        weight:
                            32,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_interaction_book_shadow",

                                    weight:
                                        20
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_book_continue_good",

                        text:
                            "Le livre révèle un symbole protecteur avant de se refermer.",

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
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - CHANDELIER
    // =========================================================

    {
        id:
            "mansion_interaction_chandelier",

        type:
            "interaction",

        baseWeight:
            1,

        title:
            "Le chandelier au-dessus de {target} commence à tomber",

        category:
            "Interaction",

        icon:
            "🕯️",

        description:
            "{actor} voit les chaînes du chandelier céder juste au-dessus de {target}.",

        choices: [

            {
                id:
                    "mansion_chandelier_save",

                title:
                    "🏃 Pousser {target}",

                description:
                    "Le sortir de la trajectoire.",

                consequences: [

                    {
                        id:
                            "mansion_chandelier_save_neutral",

                        text:
                            "{actor} pousse {target} juste à temps.",

                        icon:
                            "😮‍💨",

                        effects:
                            [],

                        weight:
                            45
                    },

                    {
                        id:
                            "mansion_chandelier_save_bad",

                        text:
                            "{actor} pousse {target}, mais reçoit lui-même une partie du chandelier.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "mansion_chandelier_save_good",

                        text:
                            "{actor} réalise un sauvetage parfait et retrouve un objet utile sous les débris.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target:
                                    "actor",

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
                    "mansion_chandelier_shout",

                title:
                    "📢 Crier",

                description:
                    "Espérer que {target} réagisse assez vite.",

                consequences: [

                    {
                        id:
                            "mansion_chandelier_shout_neutral",

                        text:
                            "{target} bondit sur le côté au dernier moment.",

                        icon:
                            "😮‍💨",

                        effects:
                            [],

                        weight:
                            55
                    },

                    {
                        id:
                            "mansion_chandelier_shout_bad",

                        text:
                            "{target} regarde vers le plafond au lieu de bouger.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
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
    // 7 - CHAMBRE FROIDE
    // =========================================================

    {
        id:
            "mansion_interaction_cold_room",

        type:
            "interaction",

        baseWeight:
            1,

        title:
            "{target} est enfermé dans une chambre",

        category:
            "Interaction",

        icon:
            "🥶",

        description:
            "{actor} entend {target} frapper derrière une porte verrouillée tandis que la température chute rapidement.",

        choices: [

            {
                id:
                    "mansion_room_break",

                title:
                    "🪓 Défoncer la porte",

                description:
                    "Utiliser toute ta force.",

                consequences: [

                    {
                        id:
                            "mansion_room_break_neutral",

                        text:
                            "La porte finit par céder. {target} sort frigorifié mais indemne.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            42
                    },

                    {
                        id:
                            "mansion_room_break_bad",

                        text:
                            "{actor} se blesse sérieusement en frappant contre la porte.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id:
                            "mansion_room_break_good",

                        text:
                            "La porte cède du premier coup et {target} sort avant que le froid ne devienne dangereux.",

                        icon:
                            "💪",

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
                    }

                ]
            },


            {
                id:
                    "mansion_room_key",

                title:
                    "🔑 Chercher la clé",

                description:
                    "Une solution un peu moins brutale.",

                consequences: [

                    {
                        id:
                            "mansion_room_key_neutral",

                        text:
                            "{actor} finit par trouver la clé sous un vieux vase.",

                        icon:
                            "🗝️",

                        effects:
                            [],

                        weight:
                            58
                    },

                    {
                        id:
                            "mansion_room_key_bad",

                        text:
                            "La recherche dure trop longtemps et {target} souffre du froid.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            42
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - PASSAGE SECRET
    // =========================================================

    {
        id:
            "mansion_interaction_secret_passage",

        type:
            "interaction",

        baseWeight:
            1,

        title:
            "{actor} découvre un passage secret",

        category:
            "Interaction",

        icon:
            "🧱",

        description:
            "Le passage est étroit. {actor} doit décider s'il révèle immédiatement sa découverte à {target}.",

        choices: [

            {
                id:
                    "mansion_passage_share",

                title:
                    "🤝 Montrer le passage",

                description:
                    "Explorer ensemble.",

                consequences: [

                    {
                        id:
                            "mansion_passage_share_good",

                        text:
                            "{actor} et {target} trouvent quelques objets utiles.",

                        icon:
                            "🎁",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "target",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_passage_share_bad",

                        text:
                            "Le passage s'effondre pendant leur exploration.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            },

                            {
                                target:
                                    "target",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            58
                    },

                    {
                        id:
                            "mansion_passage_share_neutral",

                        text:
                            "Le passage mène simplement vers un autre couloir du manoir.",

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
                    "mansion_passage_hide",

                title:
                    "🤫 Garder le secret",

                description:
                    "{actor} veut explorer seul.",

                consequences: [

                    {
                        id:
                            "mansion_passage_hide_good",

                        text:
                            "{actor} trouve une petite cache contenant des médicaments.",

                        icon:
                            "🩹",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            8
                    },

                    {
                        id:
                            "mansion_passage_hide_bad",

                        text:
                            "{actor} se retrouve bloqué seul lorsque le mur se referme derrière lui.",

                        icon:
                            "🧱",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            72
                    },

                    {
                        id:
                            "mansion_passage_hide_neutral",

                        text:
                            "Le passage ne mène finalement nulle part.",

                        icon:
                            "😑",

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
    // 9 - PORTE VERROUILLÉE
    // SUITE CLÉ
    // =========================================================

    {
        id:
            "mansion_interaction_locked_door",

        type:
            "interaction",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_key_kept"
            ]

        },

        title:
            "La clé de {actor} réagit devant une porte verrouillée",

        category:
            "Suite",

        icon:
            "🗝️",

        description:
            "La clé gardée par {actor} devient glaciale lorsqu'il passe devant une vieille porte. {target} lui conseille de ne surtout pas l'ouvrir.",

        choices: [

            {
                id:
                    "mansion_locked_door_open",

                title:
                    "🔓 Utiliser la clé",

                description:
                    "Tu as gardé cette clé pour une raison.",

                consequences: [

                    {
                        id:
                            "mansion_locked_door_open_bad",

                        text:
                            "La serrure s'ouvre et une silhouette se jette immédiatement sur {actor}.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            62
                    },

                    {
                        id:
                            "mansion_locked_door_open_neutral",

                        text:
                            "La porte ouvre sur une chambre poussiéreuse totalement vide.",

                        icon:
                            "🛏️",

                        effects:
                            [],

                        weight:
                            28
                    },

                    {
                        id:
                            "mansion_locked_door_open_good",

                        text:
                            "La chambre contient une vieille trousse médicale encore intacte.",

                        icon:
                            "🩹",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            10
                    }

                ]
            },


            {
                id:
                    "mansion_locked_door_leave",

                title:
                    "🚪 Ne pas l'ouvrir",

                description:
                    "Faire confiance à {target}.",

                consequences: [

                    {
                        id:
                            "mansion_locked_door_leave_neutral",

                        text:
                            "{actor} range la clé et les deux continuent leur chemin.",

                        icon:
                            "😌",

                        effects:
                            [],

                        weight:
                            80
                    },

                    {
                        id:
                            "mansion_locked_door_leave_bad",

                        text:
                            "Quelque chose frappe brutalement la porte de l'intérieur au moment où ils repartent.",

                        icon:
                            "👊",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
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
    // 10 - OMBRE DU LIVRE
    // SUITE LIVRE
    // =========================================================

    {
        id:
            "mansion_interaction_book_shadow",

        type:
            "interaction",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_interaction_book_read"
            ],

            not: [
                "mansion_interaction_book_stopped"
            ]

        },

        title:
            "L'ombre libérée par le livre revient",

        category:
            "Suite",

        icon:
            "👤",

        description:
            "{actor} et {target} reconnaissent la forme noire sortie du livre. Elle se déplace maintenant sur les murs autour d'eux.",

        choices: [

            {
                id:
                    "mansion_shadow_run",

                title:
                    "🏃 Courir",

                description:
                    "Quitter immédiatement la pièce.",

                consequences: [

                    {
                        id:
                            "mansion_shadow_run_neutral",

                        text:
                            "Les deux atteignent le couloir et l'ombre ne les suit pas.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            48
                    },

                    {
                        id:
                            "mansion_shadow_run_bad",

                        text:
                            "L'ombre traverse le mur et frappe {target} avant qu'il atteigne la porte.",

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
                            52
                    }

                ]
            },


            {
                id:
                    "mansion_shadow_book",

                title:
                    "📖 Utiliser le livre",

                description:
                    "Tenter de faire revenir l'ombre à l'intérieur.",

                consequences: [

                    {
                        id:
                            "mansion_shadow_book_good",

                        text:
                            "L'ombre est aspirée dans les pages et le livre se referme brutalement.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "mansion_shadow_book_bad",

                        text:
                            "Le rituel échoue et l'ombre se jette sur {actor}.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            68
                    },

                    {
                        id:
                            "mansion_shadow_book_neutral",

                        text:
                            "L'ombre hésite puis disparaît dans le plafond.",

                        icon:
                            "🌫️",

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