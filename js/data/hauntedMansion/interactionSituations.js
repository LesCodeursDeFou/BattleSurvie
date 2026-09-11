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
                id: "mansion_ghost_warn",

                title:
                    "📢 Prévenir {target}",

                description:
                    "L'avertir immédiatement.",

                consequences: [

                    {
                        id: "mansion_ghost_warn_neutral",

                        text:
                            "{target} se retourne au bon moment. Les deux joueurs s'éloignent rapidement avant que l'apparition ne disparaisse.",

                        icon:
                            "🏃",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_ghost_warn_bad",

                        text:
                            "{actor} hurle tellement fort que {target} panique, recule et tombe dans l'escalier.",

                        icon:
                            "💥",

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
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_ghost_warn_good",

                        text:
                            "L'apparition disparaît immédiatement lorsqu'elle réalise qu'elle a été repérée. {target} remercie franchement {actor}.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    protection: 1
                                }
                            }
                        ],

                        weight: 17
                    }

                ]
            },


            {
                id: "mansion_ghost_silent",

                title:
                    "🤫 Ne rien dire",

                description:
                    "Observer ce qui va se passer.",

                consequences: [

                    {
                        id: "mansion_ghost_silent_neutral",

                        text:
                            "La silhouette s'arrête à quelques centimètres de {target}, puis disparaît sans jamais le toucher.",

                        icon:
                            "🌫️",

                        effects: [],

                        weight: 30
                    },

                    {
                        id: "mansion_ghost_silent_bad",

                        text:
                            "Le fantôme traverse {target}. Un froid glacial le paralyse pendant plusieurs secondes.",

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
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight: 55
                    },

                    {
                        id: "mansion_ghost_silent_possession",

                        text:
                            "La silhouette traverse {target} puis disparaît. Lorsque {target} relève les yeux, son expression n'est plus tout à fait la même.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    distrust: 2
                                }
                            }
                        ],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_ghost_face",

                title:
                    "🛡️ Faire face à l'apparition",

                description:
                    "{actor} refuse de laisser la chose approcher davantage de {target}.",

                condition: {
                    type: "status",
                    id: "courage"
                },

                consequences: [

                    {
                        id: "mansion_ghost_face_good",

                        text:
                            "{actor} avance directement vers la silhouette. Celle-ci recule puis se dissout dans le mur.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight: 80
                    },

                    {
                        id: "mansion_ghost_face_bad",

                        text:
                            "La silhouette traverse directement {actor} avant de disparaître.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 20
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
        id: "mansion_interaction_key",
        type: "interaction",
        baseWeight: 1,

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
                id: "mansion_key_give",

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
                        id: "mansion_key_give_good",

                        text:
                            "{target} avait raison. La clé ouvre une petite pièce contenant des notes sur le manoir.",

                        icon:
                            "📜",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_key_give_bad",

                        text:
                            "{target} ouvre une porte derrière laquelle quelque chose attendait visiblement depuis longtemps.",

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

                        weight: 47
                    },

                    {
                        id: "mansion_key_give_possession",

                        text:
                            "La porte s'ouvre sur une pièce vide. En ressortant, {target} garde pourtant la clé serrée dans sa main et refuse de la rendre.",

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

                        weight: 10
                    },

                    {
                        id: "mansion_key_give_neutral",

                        text:
                            "Après plusieurs essais, aucune porte proche ne correspond à la clé.",

                        icon:
                            "🔑",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_key_keep",

                title:
                    "🔒 Garder la clé",

                description:
                    "{actor} préfère décider lui-même où l'utiliser.",

                narrative: {
                    setFlags: [
                        "mansion_key_kept"
                    ],

                    removeFlags: [
                        "mansion_key_given"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_interaction_locked_door",
                            weight: 32
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_key_keep_neutral",

                        text:
                            "{actor} conserve la clé. {target} n'insiste pas, mais reste visiblement intrigué.",

                        icon:
                            "🗝️",

                        effects: [],

                        weight: 52,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_interaction_locked_door",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_key_keep_bad",

                        text:
                            "En testant plusieurs serrures, {actor} déclenche un mécanisme qui lui écrase les doigts.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 30,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_interaction_locked_door",
                                    weight: 8
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_key_keep_fear",

                        text:
                            "La clé devient glaciale dans la poche de {actor}. Elle semble vibrer lorsque certaines portes sont proches.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 18,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_interaction_locked_door",
                                    weight: 38
                                }
                            ]
                        }
                    }

                ]
            },


            {
                id: "mansion_key_trust_target",

                title:
                    "🤝 Lui confier la clé sans hésiter",

                description:
                    "Votre confiance rend son intuition beaucoup plus crédible.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

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
                        id: "mansion_key_trust_target_good",

                        text:
                            "{target} reconnaît réellement la serrure. Derrière la porte se trouve une petite pièce protégée des phénomènes du manoir.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
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
    // 3 - POUPÉE
    // =========================================================

    {
        id: "mansion_interaction_doll",
        type: "interaction",
        baseWeight: 1,

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
                id: "mansion_doll_throw",

                title:
                    "🔥 Lui demander de la jeter au feu",

                description:
                    "Cette chose ne devrait clairement pas rester avec vous.",

                consequences: [

                    {
                        id: "mansion_doll_throw_good",

                        text:
                            "La poupée brûle en poussant un cri surnaturel. Lorsque le silence revient, les deux joueurs se sentent étrangement plus calmes.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 28
                    },

                    {
                        id: "mansion_doll_throw_bad",

                        text:
                            "La poupée explose dans les flammes et projette des morceaux brûlants sur {target}.",

                        icon:
                            "💥",

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

                        weight: 47
                    },

                    {
                        id: "mansion_doll_throw_curse",

                        text:
                            "La poupée brûle, mais son ombre reste visible dans les flammes et se fixe sur {target}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 10
                    },

                    {
                        id: "mansion_doll_throw_reward",

                        text:
                            "Avant de brûler complètement, une petite clé et un morceau de papier tombent de la poupée.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_doll_keep",

                title:
                    "😈 Lui dire de la garder",

                description:
                    "Après tout, elle est presque mignonne.",

                consequences: [

                    {
                        id: "mansion_doll_keep_bad",

                        text:
                            "La poupée mord soudainement la main de {target}. Elle sourit ensuite à {actor}.",

                        icon:
                            "🩸",

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

                        weight: 42
                    },

                    {
                        id: "mansion_doll_keep_possessed",

                        text:
                            "{target} commence à parler à la poupée comme s'il entendait des réponses que {actor} ne peut pas entendre.",

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
                        id: "mansion_doll_keep_neutral",

                        text:
                            "La poupée ne bouge plus. Pour le moment.",

                        icon:
                            "🧸",

                        effects: [],

                        weight: 28
                    },

                    {
                        id: "mansion_doll_keep_good",

                        text:
                            "La poupée pointe mystérieusement vers un passage que personne n'avait remarqué.",

                        icon:
                            "👉",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "lucid",
                                    duration: 1
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
    // 4 - TRAPPE
    // =========================================================

    {
        id: "mansion_interaction_trapdoor",
        type: "interaction",
        baseWeight: 1,

        title:
            "{actor} trouve une trappe sous un tapis",

        category:
            "Interaction",

        icon:
            "🕳️",

        description:
            "{target} propose de descendre en premier pour explorer ce qui se trouve sous le manoir.",

        choices: [

            {
                id: "mansion_trapdoor_target",

                title:
                    "👇 Laisser {target} descendre",

                description:
                    "Quelqu'un doit bien y aller.",

                consequences: [

                    {
                        id: "mansion_trapdoor_target_good",

                        text:
                            "{target} découvre plusieurs notes abandonnées et remonte avec de précieuses informations.",

                        icon:
                            "📜",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_trapdoor_target_bad",

                        text:
                            "L'échelle casse et {target} chute dans l'obscurité.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_trapdoor_target_fear",

                        text:
                            "{target} descend. Quelques secondes plus tard, une voix parfaitement identique à la sienne appelle {actor} depuis le couloir derrière lui.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_trapdoor_target_neutral",

                        text:
                            "{target} descend puis remonte quelques minutes plus tard. Il n'y avait apparemment rien.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_trapdoor_actor",

                title:
                    "🦸 Descendre toi-même",

                description:
                    "{actor} préfère prendre le risque.",

                consequences: [

                    {
                        id: "mansion_trapdoor_actor_good",

                        text:
                            "{actor} découvre un passage vers une autre aile et revient prévenir {target}.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_trapdoor_actor_bad",

                        text:
                            "Une créature surgit du noir et attaque {actor}.",

                        icon:
                            "👹",

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

                        weight: 47
                    },

                    {
                        id: "mansion_trapdoor_actor_possession",

                        text:
                            "{actor} remonte lentement. Il affirme que tout va bien, mais {target} remarque que ses yeux ne clignent plus.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_trapdoor_actor_neutral",

                        text:
                            "Le sous-sol est vide et la trappe mène à une simple cave.",

                        icon:
                            "🕯️",

                        effects: [],

                        weight: 20
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
        id: "mansion_interaction_book",
        type: "interaction",
        baseWeight: 1,

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
                id: "mansion_book_stop",

                title:
                    "🛑 Lui arracher le livre",

                description:
                    "Interrompre la lecture immédiatement.",

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
                        id: "mansion_book_stop_neutral",

                        text:
                            "{actor} referme le livre. La pièce retrouve immédiatement son silence.",

                        icon:
                            "📕",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 48
                    },

                    {
                        id: "mansion_book_stop_bad",

                        text:
                            "{target} refuse de lâcher le livre et frappe accidentellement {actor} en tentant de continuer.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 32
                    },

                    {
                        id: "mansion_book_stop_possession",

                        text:
                            "Lorsque {actor} arrache le livre, {target} hurle avec une voix qui n'est clairement pas la sienne.",

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

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_book_continue",

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
                            id: "mansion_interaction_book_shadow",
                            weight: 30
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_book_continue_bad",

                        text:
                            "Une forme sombre s'échappe du livre et disparaît directement dans le mur.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_interaction_book_shadow",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_book_continue_curse",

                        text:
                            "Les lettres se déplacent jusqu'à former le nom de {target}. Une marque noire apparaît sur sa main.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "target",
                                status: "cursed"
                            }
                        ],

                        weight: 15,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_interaction_book_shadow",
                                    weight: 36
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_book_continue_neutral",

                        text:
                            "Le texte décrit un étrange rituel puis toutes les pages deviennent blanches.",

                        icon:
                            "📖",

                        effects: [],

                        weight: 28,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_interaction_book_shadow",
                                    weight: 20
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_book_continue_good",

                        text:
                            "Le livre révèle un symbole de protection avant de se refermer.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_book_decode",

                title:
                    "👁️ Déchiffrer le texte avec {target}",

                description:
                    "Ne lire aucun mot à voix haute et étudier uniquement les symboles.",

                condition: {
                    type: "status",
                    id: "lucid"
                },

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
                        id: "mansion_book_decode_good",

                        text:
                            "{actor} reconnaît plusieurs motifs dangereux et empêche {target} de prononcer l'incantation.",

                        icon:
                            "🧠",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
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
    // 6 - CHANDELIER
    // =========================================================

    {
        id: "mansion_interaction_chandelier",
        type: "interaction",
        baseWeight: 1,

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
                id: "mansion_chandelier_save",

                title:
                    "🏃 Pousser {target}",

                description:
                    "Le sortir de la trajectoire.",

                consequences: [

                    {
                        id: "mansion_chandelier_save_neutral",

                        text:
                            "{actor} pousse {target} juste à temps. Le chandelier explose au sol derrière eux.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_chandelier_save_bad",

                        text:
                            "{actor} sauve {target}, mais reçoit lui-même une partie du chandelier.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight: 38
                    },

                    {
                        id: "mansion_chandelier_save_good",

                        text:
                            "{actor} réalise un sauvetage parfait. Sous les débris, un petit médaillon protecteur apparaît.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true,
                                    protection: 2
                                }
                            }
                        ],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_chandelier_shout",

                title:
                    "📢 Crier",

                description:
                    "Espérer que {target} réagisse assez vite.",

                consequences: [

                    {
                        id: "mansion_chandelier_shout_neutral",

                        text:
                            "{target} bondit sur le côté au dernier moment.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 55
                    },

                    {
                        id: "mansion_chandelier_shout_bad",

                        text:
                            "{target} regarde vers le plafond au lieu de bouger. Le chandelier le percute partiellement.",

                        icon:
                            "💥",

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

                        weight: 45
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - CHAMBRE FROIDE
    // =========================================================

    {
        id: "mansion_interaction_cold_room",
        type: "interaction",
        baseWeight: 1,

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
                id: "mansion_room_break",

                title:
                    "🪓 Défoncer la porte",

                description:
                    "Utiliser toute ta force.",

                consequences: [

                    {
                        id: "mansion_room_break_neutral",

                        text:
                            "La porte finit par céder. {target} sort frigorifié mais indemne.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_room_break_bad",

                        text:
                            "{actor} se blesse sérieusement en frappant contre la porte.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_room_break_good",

                        text:
                            "La porte cède du premier coup. {target} réalise qu'une minute de plus aurait pu être dangereuse.",

                        icon:
                            "💪",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_room_key",

                title:
                    "🔑 Chercher la clé",

                description:
                    "Une solution un peu moins brutale.",

                consequences: [

                    {
                        id: "mansion_room_key_neutral",

                        text:
                            "{actor} finit par trouver la clé sous un vieux vase.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 48
                    },

                    {
                        id: "mansion_room_key_bad",

                        text:
                            "La recherche dure beaucoup trop longtemps. La voix de {target} devient de plus en plus faible derrière la porte.",

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
                                    amount: 1
                                }
                            }
                        ],

                        weight: 37
                    },

                    {
                        id: "mansion_room_key_ghost",

                        text:
                            "{actor} trouve la clé. Lorsqu'il ouvre la porte, une deuxième silhouette de {target} est debout derrière le véritable {target}.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
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
                    }

                ]
            },


            {
                id: "mansion_room_trusted",

                title:
                    "🤝 Guider {target} à travers la porte",

                description:
                    "{target} te fait suffisamment confiance pour suivre exactement tes instructions pendant que tu cherches le mécanisme.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "mansion_room_trusted_good",

                        text:
                            "{actor} repère un vieux loquet extérieur pendant que {target} reste calme. La porte s'ouvre sans violence.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
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
    // 8 - PASSAGE SECRET
    // =========================================================

    {
        id: "mansion_interaction_secret_passage",
        type: "interaction",
        baseWeight: 1,

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
                id: "mansion_passage_share",

                title:
                    "🤝 Montrer le passage",

                description:
                    "Explorer ensemble.",

                consequences: [

                    {
                        id: "mansion_passage_share_good",

                        text:
                            "{actor} et {target} trouvent des notes décrivant plusieurs pièges du manoir.",

                        icon:
                            "📜",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            },

                            {
                                target: "target",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_passage_share_bad",

                        text:
                            "Le passage s'effondre pendant leur exploration.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "target",
                                lives: -1
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_passage_share_fear",

                        text:
                            "Dans le passage, les deux entendent une conversation avec leurs propres voix venant de derrière le mur.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_passage_share_neutral",

                        text:
                            "Le passage mène simplement vers un autre couloir du manoir.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_passage_hide",

                title:
                    "🤫 Garder le secret",

                description:
                    "{actor} veut explorer seul.",

                consequences: [

                    {
                        id: "mansion_passage_hide_good",

                        text:
                            "{actor} trouve une pièce contenant plusieurs notes utiles.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_passage_hide_bad",

                        text:
                            "{actor} se retrouve bloqué seul lorsque le mur se referme derrière lui.",

                        icon:
                            "🧱",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_passage_hide_possessed",

                        text:
                            "Lorsque {actor} ressort enfin, {target} remarque que son ombre arrive une seconde après chacun de ses mouvements.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_passage_hide_neutral",

                        text:
                            "Le passage ne mène nulle part. {actor} revient sans rien dire.",

                        icon:
                            "😑",

                        effects: [],

                        weight: 25
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
        id: "mansion_interaction_locked_door",
        type: "interaction",
        baseWeight: 1,

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
            "La clé gardée par {actor} devient glaciale devant une vieille porte. {target} lui conseille de ne surtout pas l'ouvrir.",

        choices: [

            {
                id: "mansion_locked_door_open",

                title:
                    "🔓 Utiliser la clé",

                description:
                    "Tu as gardé cette clé pour une raison.",

                consequences: [

                    {
                        id: "mansion_locked_door_open_bad",

                        text:
                            "La serrure s'ouvre et une silhouette se jette immédiatement sur {actor}.",

                        icon:
                            "👹",

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

                        weight: 42
                    },

                    {
                        id: "mansion_locked_door_open_curse",

                        text:
                            "La pièce est vide, à l'exception d'une chaise portant une étiquette avec le nom de {actor}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        weight: 13
                    },

                    {
                        id: "mansion_locked_door_open_neutral",

                        text:
                            "La porte ouvre sur une chambre poussiéreuse totalement vide.",

                        icon:
                            "🛏️",

                        effects: [],

                        weight: 30
                    },

                    {
                        id: "mansion_locked_door_open_good",

                        text:
                            "La chambre contient un vieux journal expliquant plusieurs manifestations du manoir.",

                        icon:
                            "📖",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_locked_door_leave",

                title:
                    "🚪 Ne pas l'ouvrir",

                description:
                    "Faire confiance à {target}.",

                consequences: [

                    {
                        id: "mansion_locked_door_leave_neutral",

                        text:
                            "{actor} range la clé. {target} semble soulagé que son avis ait été entendu.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            },

                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 72
                    },

                    {
                        id: "mansion_locked_door_leave_bad",

                        text:
                            "Quelque chose frappe brutalement la porte de l'intérieur au moment où ils repartent.",

                        icon:
                            "👊",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 28
                    }

                ]
            },


            {
                id: "mansion_locked_door_trust",

                title:
                    "🤝 Faire confiance à {target} sans discuter",

                description:
                    "Votre relation vaut davantage qu'une vieille clé inquiétante.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "mansion_locked_door_trust_good",

                        text:
                            "{actor} range définitivement la clé. Au même instant, elle cesse d'être glaciale.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
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
    // 10 - OMBRE DU LIVRE
    // SUITE LIVRE
    // =========================================================

    {
        id: "mansion_interaction_book_shadow",
        type: "interaction",
        baseWeight: 1,

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
                id: "mansion_shadow_run",

                title:
                    "🏃 Courir",

                description:
                    "Quitter immédiatement la pièce.",

                consequences: [

                    {
                        id: "mansion_shadow_run_neutral",

                        text:
                            "Les deux atteignent le couloir. L'ombre s'arrête exactement au niveau de la porte.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_shadow_run_bad",

                        text:
                            "L'ombre traverse le mur et frappe {target} avant qu'il atteigne la porte.",

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
                                    amount: 1
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_shadow_run_possession",

                        text:
                            "L'ombre rattrape {target} et fusionne brièvement avec la sienne.",

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
            },


            {
                id: "mansion_shadow_book",

                title:
                    "📖 Utiliser le livre",

                description:
                    "Tenter de faire revenir l'ombre à l'intérieur.",

                consequences: [

                    {
                        id: "mansion_shadow_book_good",

                        text:
                            "L'ombre est aspirée dans les pages et le livre se referme brutalement.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_shadow_book_bad",

                        text:
                            "Le rituel échoue et l'ombre se jette sur {actor}.",

                        icon:
                            "👹",

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

                        weight: 47
                    },

                    {
                        id: "mansion_shadow_book_curse",

                        text:
                            "L'ombre disparaît dans le livre, mais une phrase apparaît immédiatement sur le bras de {actor}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_shadow_book_neutral",

                        text:
                            "L'ombre hésite puis disparaît dans le plafond.",

                        icon:
                            "🌫️",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_shadow_lucid",

                title:
                    "👁️ Reproduire le symbole du livre",

                description:
                    "{actor} se souvient exactement de la structure du symbole protecteur.",

                condition: {
                    type: "status",
                    id: "lucid"
                },

                consequences: [

                    {
                        id: "mansion_shadow_lucid_good",

                        text:
                            "{actor} trace rapidement le symbole. L'ombre recule, se contracte puis disparaît dans le livre.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
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
    // 11 - NOUVEAU : DOUBLE DE {target}
    // =========================================================

    {
        id: "mansion_interaction_double",
        type: "interaction",
        baseWeight: 1,

        title:
            "{actor} rencontre deux versions de {target}",

        category:
            "Interaction",

        icon:
            "👥",

        description:
            "Au bout du couloir, deux personnes absolument identiques à {target} affirment chacune être la véritable.",

        choices: [

            {
                id: "mansion_double_left",

                title:
                    "👈 Faire confiance à celui de gauche",

                description:
                    "Il semble plus calme et connaît plusieurs détails personnels.",

                consequences: [

                    {
                        id: "mansion_double_left_good",

                        text:
                            "Le faux {target} pousse un cri et disparaît dès que {actor} choisit correctement.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_double_left_bad",

                        text:
                            "{actor} choisit le mauvais. Le véritable {target} voit son double se rapprocher lentement de lui.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_double_left_possession",

                        text:
                            "Le faux disparaît en traversant le véritable {target}.",

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

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_double_right",

                title:
                    "👉 Faire confiance à celui de droite",

                description:
                    "Il insiste pour que {actor} se dépêche.",

                consequences: [

                    {
                        id: "mansion_double_right_good",

                        text:
                            "Le double de gauche disparaît brutalement. {actor} avait reconnu le véritable {target}.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_double_right_bad",

                        text:
                            "Le véritable {target} hurle à {actor} de ne pas approcher. Trop tard.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1
                                }
                            }
                        ],

                        weight: 50
                    },

                    {
                        id: "mansion_double_right_possession",

                        text:
                            "Le faux {target} se dissout en une fumée noire qui traverse le véritable.",

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

                        weight: 10
                    }

                ]
            },


            {
                id: "mansion_double_trust",

                title:
                    "🤝 Poser une question que seul le vrai {target} peut connaître",

                description:
                    "Votre relation vous permet de distinguer quelque chose qu'une copie ne pourrait pas reproduire.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "mansion_double_trust_good",

                        text:
                            "Le véritable {target} répond immédiatement. Le double tente d'imiter sa réponse une seconde trop tard avant de disparaître.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
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

                        weight: 100
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 12 - NOUVEAU : ESCALIER QUI CHANGE
    // =========================================================

    {
        id: "mansion_interaction_moving_stairs",
        type: "interaction",
        baseWeight: 1,

        title:
            "L'escalier se déforme entre {actor} et {target}",

        category:
            "Interaction",

        icon:
            "🪜",

        description:
            "{target} se trouve quelques marches plus bas lorsque l'escalier commence à s'allonger comme s'il était vivant.",

        choices: [

            {
                id: "mansion_stairs_reach",

                title:
                    "🤝 Tendre la main à {target}",

                description:
                    "Essayer de le tirer avant que la distance augmente.",

                consequences: [

                    {
                        id: "mansion_stairs_reach_good",

                        text:
                            "{actor} attrape la main de {target} juste avant que plusieurs marches ne disparaissent.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_stairs_reach_bad",

                        text:
                            "Une marche disparaît sous {actor}. Les deux parviennent à s'accrocher à la rambarde, mais de justesse.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "actor",
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

                        weight: 40
                    },

                    {
                        id: "mansion_stairs_reach_fear",

                        text:
                            "Le bras de {target} semble soudainement beaucoup trop long lorsqu'il tente d'attraper la main de {actor}.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_stairs_wait",

                title:
                    "🛑 Ne plus bouger",

                description:
                    "Attendre de comprendre la logique du phénomène.",

                consequences: [

                    {
                        id: "mansion_stairs_wait_good",

                        text:
                            "Dès que les deux cessent de bouger, l'escalier reprend lentement sa forme normale.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 50
                    },

                    {
                        id: "mansion_stairs_wait_bad",

                        text:
                            "L'escalier continue de s'étirer jusqu'à ce que {target} disparaisse derrière un angle impossible.",

                        icon:
                            "🌀",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 50
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 13 - NOUVEAU : PORTRAIT DE {target}
    // =========================================================

    {
        id: "mansion_interaction_target_portrait",
        type: "interaction",
        baseWeight: 0.9,

        title:
            "{actor} découvre un portrait de {target}",

        category:
            "Interaction",

        icon:
            "🖼️",

        description:
            "Au milieu d'une galerie ancienne se trouve un portrait extrêmement réaliste de {target}. Une date de décès est inscrite dessous : ce soir.",

        choices: [

            {
                id: "mansion_target_portrait_show",

                title:
                    "🖼️ Montrer le portrait à {target}",

                description:
                    "Il vaut peut-être mieux qu'il sache.",

                consequences: [

                    {
                        id: "mansion_target_portrait_show_bad",

                        text:
                            "{target} lit la date et pâlit immédiatement.",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_target_portrait_show_lucid",

                        text:
                            "{target} remarque que la peinture est encore humide. Quelqu'un ou quelque chose vient donc de réaliser le tableau.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "target",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_target_portrait_show_courage",

                        text:
                            "{target} regarde son propre portrait puis éclate de rire nerveusement : « Qu'il essaie. »",

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

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_target_portrait_hide",

                title:
                    "🤫 Ne rien dire",

                description:
                    "Épargner cette découverte à {target}.",

                consequences: [

                    {
                        id: "mansion_target_portrait_hide_safe",

                        text:
                            "{actor} retourne le tableau contre le mur. {target} ne remarque rien.",

                        icon:
                            "🤫",

                        effects: [],

                        weight: 50
                    },

                    {
                        id: "mansion_target_portrait_hide_found",

                        text:
                            "{target} découvre ensuite le portrait et apprend que {actor} le lui avait caché.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight: 50
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 14 - NOUVEAU : MAIN DANS LE MUR
    // =========================================================

    {
        id: "mansion_interaction_wall_hand",
        type: "interaction",
        baseWeight: 1,

        title:
            "Une main surgit du mur et saisit {target}",

        category:
            "Interaction",

        icon:
            "✋",

        description:
            "Une main pâle traverse soudainement le papier peint et agrippe fermement le poignet de {target}.",

        choices: [

            {
                id: "mansion_wall_hand_pull",

                title:
                    "💪 Tirer {target}",

                description:
                    "Empêcher la main de l'entraîner dans le mur.",

                consequences: [

                    {
                        id: "mansion_wall_hand_pull_good",

                        text:
                            "{actor} tire de toutes ses forces. La main finit par lâcher {target} et disparaît.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true,
                                    protection: 2
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_wall_hand_pull_bad",

                        text:
                            "Une deuxième main surgit et frappe {actor}, mais {target} parvient finalement à se libérer.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_wall_hand_pull_fear",

                        text:
                            "Pendant que {actor} tire, le mur devient mou et semble essayer d'absorber les deux joueurs.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

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
                id: "mansion_wall_hand_cut",

                title:
                    "🔨 Frapper la main",

                description:
                    "Attaquer directement ce qui retient {target}.",

                consequences: [

                    {
                        id: "mansion_wall_hand_cut_good",

                        text:
                            "Le coup fonctionne. La main relâche immédiatement {target}.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_wall_hand_cut_bad",

                        text:
                            "La main esquive le coup et tire brutalement {target} contre le mur.",

                        icon:
                            "🧱",

                        effects: [
                            {
                                target: "target",
                                lives: -1
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_wall_hand_cut_curse",

                        text:
                            "La main disparaît, mais laisse une marque noire autour du poignet de {target}.",

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
    // 15 - NOUVEAU : VOIX DE {actor}
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id: "mansion_interaction_voice",
        type: "interaction",
        baseWeight: 1,

        title:
            "{target} entend la voix de {actor} derrière une porte",

        category:
            "Interaction",

        icon:
            "👂",

        description:
            "Problème : le véritable {actor} se trouve juste à côté de {target}. Pourtant, une voix parfaitement identique appelle {target} depuis la pièce voisine.",

        choices: [

            {
                id: "mansion_voice_open",

                title:
                    "🚪 Ouvrir ensemble",

                description:
                    "Découvrir ce qui imite la voix de {actor}.",

                narrative: {
                    setFlags: [
                        "mansion_fake_voice_followed"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_interaction_voice_return",
                            weight: 32
                        }
                    ]
                },

                consequences: [

                    {
                        id: "mansion_voice_open_bad",

                        text:
                            "La pièce est vide, mais la voix continue maintenant depuis l'intérieur d'une armoire.",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

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
                                    id: "mansion_interaction_voice_return",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_voice_open_possession",

                        text:
                            "La porte s'ouvre sur une silhouette ayant exactement la forme de {actor}. Elle traverse brutalement {target}.",

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

                        weight: 18,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_interaction_voice_return",
                                    weight: 38
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_voice_open_neutral",

                        text:
                            "La pièce est totalement vide. La voix s'arrête dès que la porte est ouverte.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 25
                    },

                    {
                        id: "mansion_voice_open_good",

                        text:
                            "En entrant, {actor} remarque un ancien dispositif acoustique construit dans le mur. Tout n'était peut-être pas surnaturel.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 15
                    }

                ]
            },


            {
                id: "mansion_voice_ignore",

                title:
                    "🚶 S'éloigner",

                description:
                    "Il y a déjà un {actor}. Cela semble largement suffisant.",

                consequences: [

                    {
                        id: "mansion_voice_ignore_good",

                        text:
                            "La voix continue quelques secondes puis disparaît lorsque les deux joueurs quittent le couloir.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 70
                    },

                    {
                        id: "mansion_voice_ignore_bad",

                        text:
                            "La voix commence à les suivre de pièce en pièce, toujours derrière une porte différente.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 16 - NOUVEAU : RETOUR DE LA VOIX
    // SUITE
    // =========================================================

    {
        id: "mansion_interaction_voice_return",
        type: "interaction",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_fake_voice_followed"
            ]
        },

        title:
            "La fausse voix revient",

        category:
            "Suite",

        icon:
            "👂",

        description:
            "Plus tard, {actor} et {target} entendent de nouveau la voix. Cette fois, elle imite parfaitement {target} et appelle {actor}.",

        choices: [

            {
                id: "mansion_voice_return_answer",

                title:
                    "🗣️ Répondre à la voix",

                description:
                    "Essayer de comprendre ce qu'elle veut.",

                consequences: [

                    {
                        id: "mansion_voice_return_answer_good",

                        text:
                            "La voix répète une phrase précise : « Les miroirs ne montrent pas ce qui est derrière toi. »",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_voice_return_answer_bad",

                        text:
                            "La voix répond avec plusieurs secondes d'avance à chacune des phrases de {actor}.",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_voice_return_answer_possessed",

                        text:
                            "La voix demande à {actor} de répéter une phrase. Dès qu'il termine, son regard devient vide.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "possessed",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_voice_return_answer_neutral",

                        text:
                            "La voix cesse de répondre et disparaît.",

                        icon:
                            "🤫",

                        effects: [],

                        weight: 20
                    }

                ]
            },


            {
                id: "mansion_voice_return_trust",

                title:
                    "🤝 Se concentrer uniquement sur la vraie voix de {target}",

                description:
                    "Votre confiance doit vous permettre d'ignorer l'imitation.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "mansion_voice_return_trust_good",

                        text:
                            "{actor} fixe le véritable {target} et ignore totalement l'autre voix. L'imitation se déforme puis disparaît.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
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
    // 17 - NOUVEAU : CERCLE DE BOUGIES
    // =========================================================

    {
        id: "mansion_interaction_candle_circle",
        type: "interaction",
        baseWeight: 0.9,

        title:
            "{target} est au centre d'un cercle de bougies",

        category:
            "Interaction",

        icon:
            "🕯️",

        description:
            "{actor} entre dans une pièce et découvre {target} debout au centre d'un cercle rituel. {target} affirme ne pas se souvenir d'y être entré.",

        choices: [

            {
                id: "mansion_circle_pull",

                title:
                    "🤝 Tirer {target} hors du cercle",

                description:
                    "Le sortir immédiatement de là.",

                consequences: [

                    {
                        id: "mansion_circle_pull_good",

                        text:
                            "{actor} attrape {target} et le sort du cercle. Toutes les bougies s'éteignent simultanément.",

                        icon:
                            "🕯️",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_circle_pull_bad",

                        text:
                            "Au moment où {actor} traverse le cercle, une onde glaciale frappe les deux joueurs.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_circle_pull_curse",

                        text:
                            "{target} sort du cercle, mais un symbole noir reste imprimé sous ses pieds.",

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
                        id: "mansion_circle_pull_possessed",

                        text:
                            "{target} sort du cercle puis murmure : « Il est trop tard. »",

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
            },


            {
                id: "mansion_circle_wait",

                title:
                    "👁️ Observer avant d'agir",

                description:
                    "Comprendre le rituel pourrait éviter de l'aggraver.",

                consequences: [

                    {
                        id: "mansion_circle_wait_good",

                        text:
                            "{actor} remarque qu'une bougie est différente des autres. Lorsqu'il l'éteint, le cercle se brise.",

                        icon:
                            "🧠",

                        effects: [
                            {
                                target: "actor",

                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_circle_wait_bad",

                        text:
                            "Pendant que {actor} observe, les bougies s'allument plus fort et {target} commence à parler dans une langue inconnue.",

                        icon:
                            "😨",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_circle_wait_possessed",

                        text:
                            "{target} relève lentement la tête. Quelque chose semble désormais regarder à travers ses yeux.",

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

                        weight: 25
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 18 - NOUVEAU : LE CHOIX IMPOSSIBLE
    // =========================================================

    {
        id: "mansion_interaction_locked_pair",
        type: "interaction",
        baseWeight: 0.9,

        title:
            "{actor} et {target} sont enfermés dans deux pièces séparées",

        category:
            "Interaction",

        icon:
            "🔐",

        description:
            "Une voix annonce : « Une seule porte s'ouvrira. Choisissez qui sort en premier. » Deux leviers identiques apparaissent, un dans chaque pièce.",

        choices: [

            {
                id: "mansion_pair_actor",

                title:
                    "🚪 Demander à sortir en premier",

                description:
                    "{actor} actionne son propre mécanisme.",

                consequences: [

                    {
                        id: "mansion_pair_actor_good",

                        text:
                            "La porte de {actor} s'ouvre réellement. Il trouve ensuite le mécanisme permettant de libérer {target}.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_pair_actor_bad",

                        text:
                            "La porte de {actor} s'ouvre, mais celle de {target} se verrouille encore davantage.",

                        icon:
                            "🔒",

                        effects: [
                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: -1,
                                    distrust: 2
                                }
                            }
                        ],

                        weight: 45
                    },

                    {
                        id: "mansion_pair_actor_neutral",

                        text:
                            "Aucune porte ne bouge. La voix éclate simplement de rire.",

                        icon:
                            "😈",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 30
                    }

                ]
            },


            {
                id: "mansion_pair_target",

                title:
                    "🤝 Laisser {target} sortir d'abord",

                description:
                    "{actor} actionne le mécanisme censé libérer l'autre joueur.",

                consequences: [

                    {
                        id: "mansion_pair_target_good",

                        text:
                            "La porte de {target} s'ouvre. Il refuse de partir avant d'avoir trouvé comment libérer {actor}.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1,
                                    debt: true
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_pair_target_bad",

                        text:
                            "La voix avait menti. Le mécanisme envoie une décharge à {actor}.",

                        icon:
                            "⚡",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_pair_target_neutral",

                        text:
                            "Aucune porte ne s'ouvre. Au moins, {target} comprend clairement le choix de {actor}.",

                        icon:
                            "😐",

                        effects: [
                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 25
                    }

                ]
            },


            {
                id: "mansion_pair_trust",

                title:
                    "🤝 Actionner les deux leviers simultanément",

                description:
                    "Vous vous faites suffisamment confiance pour ignorer la règle imposée par la voix.",

                condition: {
                    type: "relation",
                    field: "trust",
                    operator: ">=",
                    value: 2
                },

                consequences: [

                    {
                        id: "mansion_pair_trust_good",

                        text:
                            "Les deux leviers sont actionnés exactement au même moment. Les deux portes s'ouvrent et la voix disparaît immédiatement.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "actor",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "target",

                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            },

                            {
                                target: "actor",

                                relation: {
                                    trust: 1
                                }
                            }
                        ],

                        weight: 100
                    }

                ]
            }

        ]
    }

];