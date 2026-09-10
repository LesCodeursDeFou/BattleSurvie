export const SECRET_SITUATIONS = [

    // =====================================================
    // 1 - CLÉ DORÉE
    // DÉBUT MINI-HISTOIRE
    // =====================================================

    {
        id:
            "mansion_secret_key",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre une clé dorée",

        category:
            "Choix secret",

        icon:
            "🗝️",

        description:
            "{actor} trouve une vieille clé dorée dissimulée sous un tapis. Personne d'autre ne semble l'avoir remarquée.",

        choices: [

            {
                id:
                    "mansion_key_hide",

                secretValue:
                    "hide",

                title:
                    "🤫 Garder la clé secrète",

                description:
                    "La cacher et découvrir seul ce qu'elle pourrait ouvrir.",

                narrative: {

                    setFlags: [
                        "mansion_secret_key_hidden"
                    ],

                    removeFlags: [
                        "mansion_secret_key_shared"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_secret_golden_door",

                            weight:
                                30
                        }
                    ]

                }
            },


            {
                id:
                    "mansion_key_share",

                secretValue:
                    "share",

                title:
                    "🗣️ Prévenir les autres",

                description:
                    "Montrer immédiatement la clé au groupe.",

                narrative: {

                    setFlags: [
                        "mansion_secret_key_shared"
                    ],

                    removeFlags: [
                        "mansion_secret_key_hidden"
                    ]

                }
            }

        ],


        guess: {

            title:
                "Qu'a décidé {actor} ?",

            description:
                "A-t-il partagé sa découverte ou préféré garder la clé pour lui ?",

            choices: [

                {
                    id:
                        "mansion_key_guess_hide",

                    secretValue:
                        "hide",

                    title:
                        "🤫 Il l'a gardée",

                    description:
                        "Vous pensez que {actor} cache la clé."
                },

                {
                    id:
                        "mansion_key_guess_share",

                    secretValue:
                        "share",

                    title:
                        "🗣️ Il voulait la partager",

                    description:
                        "Vous pensez que {actor} comptait prévenir tout le monde."
                }

            ]

        },


        outcomes: {

            hide_correct: {

                title:
                    "Pris sur le fait",

                icon:
                    "👁️",

                variants: [

                    {
                        id:
                            "mansion_key_hide_correct_bad",

                        text:
                            "Les autres découvrent que {actor} cachait la clé et la lui retirent.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            60,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_secret_golden_door",

                                    weight:
                                        4
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_key_hide_correct_neutral",

                        text:
                            "{actor} est découvert mais parvient à convaincre le groupe de lui laisser la clé.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            40,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_secret_golden_door",

                                    weight:
                                        14
                                }
                            ]

                        }
                    }

                ]

            },


            hide_wrong: {

                title:
                    "Secret bien gardé",

                icon:
                    "😈",

                variants: [

                    {
                        id:
                            "mansion_key_hide_wrong_good",

                        text:
                            "Personne ne soupçonne {actor}. La clé semble vibrer près d'une aile du manoir.",

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
                            15,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_secret_golden_door",

                                    weight:
                                        44
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_key_hide_wrong_neutral",

                        text:
                            "La clé reste parfaitement cachée et personne ne remarque quoi que ce soit.",

                        icon:
                            "🤫",

                        effects:
                            [],

                        weight:
                            85,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_secret_golden_door",

                                    weight:
                                        35
                                }
                            ]

                        }
                    }

                ]

            },


            share_correct: {

                title:
                    "Confiance récompensée",

                icon:
                    "🤝",

                variants: [

                    {
                        id:
                            "mansion_key_share_correct_good",

                        text:
                            "Le groupe examine ensemble la clé et découvre une inscription utile.",

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
                            15
                    },

                    {
                        id:
                            "mansion_key_share_correct_neutral",

                        text:
                            "La clé est conservée collectivement, mais personne ne sait encore ce qu'elle ouvre.",

                        icon:
                            "🔑",

                        effects:
                            [],

                        weight:
                            85
                    }

                ]

            },


            share_wrong: {

                title:
                    "Soupçonné à tort",

                icon:
                    "💔",

                variants: [

                    {
                        id:
                            "mansion_key_share_wrong_bad",

                        text:
                            "{actor} voulait réellement partager mais les accusations provoquent une dispute.",

                        icon:
                            "😤",

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
                    },

                    {
                        id:
                            "mansion_key_share_wrong_neutral",

                        text:
                            "Le groupe réalise finalement que {actor} disait la vérité.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            55
                    }

                ]

            }

        }

    },


    // =====================================================
    // 2 - LIVRE MAUDIT
    // DÉBUT MINI-HISTOIRE
    // =====================================================

    {
        id:
            "mansion_secret_book",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre un livre interdit",

        category:
            "Choix secret",

        icon:
            "📖",

        description:
            "Dans une bibliothèque poussiéreuse, {actor} trouve un livre fermé par une chaîne noire. Une inscription dit : « Ne pas ouvrir ».",

        choices: [

            {
                id:
                    "mansion_book_open",

                secretValue:
                    "open",

                title:
                    "📖 L'ouvrir",

                description:
                    "Ignorer l'avertissement et découvrir ce qu'il contient.",

                narrative: {

                    setFlags: [
                        "mansion_secret_book_opened"
                    ],

                    removeFlags: [
                        "mansion_secret_book_closed"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "mansion_secret_book_return",

                            weight:
                                28
                        }
                    ]

                }
            },

            {
                id:
                    "mansion_book_leave",

                secretValue:
                    "leave",

                title:
                    "🔒 Le laisser fermé",

                description:
                    "Décider que certains secrets doivent rester enterrés.",

                narrative: {

                    setFlags: [
                        "mansion_secret_book_closed"
                    ],

                    removeFlags: [
                        "mansion_secret_book_opened"
                    ]

                }
            }

        ],


        guess: {

            title:
                "{actor} a-t-il ouvert le livre ?",

            description:
                "À vous de juger son niveau de curiosité.",

            choices: [

                {
                    id:
                        "mansion_book_guess_open",

                    secretValue:
                        "open",

                    title:
                        "📖 Évidemment",

                    description:
                        "Vous pensez que {actor} n'a pas résisté."
                },

                {
                    id:
                        "mansion_book_guess_leave",

                    secretValue:
                        "leave",

                    title:
                        "🔒 Il l'a laissé fermé",

                    description:
                        "Vous pensez qu'il a été raisonnable."
                }

            ]

        },


        outcomes: {

            open_correct: {

                title:
                    "Vous le connaissez trop bien",

                icon:
                    "👹",

                variants: [

                    {
                        id:
                            "mansion_book_open_correct_bad",

                        text:
                            "Le livre libère une présence sombre qui frappe {actor}.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            68,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_secret_book_return",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "mansion_book_open_correct_neutral",

                        text:
                            "Le groupe referme le livre avant qu'autre chose ne sorte des pages.",

                        icon:
                            "📕",

                        effects:
                            [],

                        weight:
                            32,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "mansion_secret_book_return",

                                    weight:
                                        10
                                }
                            ]

                        }
                    }

                ]

            },


            open_wrong: {

                title:
                    "Curiosité bien cachée",

                icon:
                    "😈",

                variants: [

                    {
                        id:
                            "mansion_book_open_wrong_good",

                        text:
                            "Personne ne sait que {actor} a ouvert le livre. Il découvre un symbole de protection.",

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
                            "mansion_book_open_wrong_neutral",

                        text:
                            "Le livre contient surtout des pages incompréhensibles.",

                        icon:
                            "📖",

                        effects:
                            [],

                        weight:
                            68
                    },

                    {
                        id:
                            "mansion_book_open_wrong_bad",

                        text:
                            "Une ombre s'échappe discrètement des pages sans que personne ne la remarque.",

                        icon:
                            "👤",

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

            },


            leave_correct: {

                title:
                    "Enfin raisonnable",

                icon:
                    "🧠",

                variants: [

                    {
                        id:
                            "mansion_book_leave_correct_neutral",

                        text:
                            "{actor} n'a pas touché au livre. Rien ne se produit.",

                        icon:
                            "😌",

                        effects:
                            [],

                        weight:
                            90
                    },

                    {
                        id:
                            "mansion_book_leave_correct_good",

                        text:
                            "En laissant le livre fermé, {actor} remarque une petite clé cachée sous celui-ci.",

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


            leave_wrong: {

                title:
                    "Quelle réputation",

                icon:
                    "😑",

                variants: [

                    {
                        id:
                            "mansion_book_leave_wrong_neutral",

                        text:
                            "Tout le monde pensait que {actor} avait ouvert le livre. Il n'y avait pourtant même pas touché.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            72
                    },

                    {
                        id:
                            "mansion_book_leave_wrong_bad",

                        text:
                            "La dispute autour du livre fait perdre un temps précieux.",

                        icon:
                            "😤",

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

        }

    },


    // =====================================================
    // 3 - PASSAGE SECRET
    // =====================================================

    {
        id:
            "mansion_secret_passage",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre un passage secret",

        category:
            "Choix secret",

        icon:
            "🧱",

        description:
            "Un pan du mur s'ouvre devant {actor}. Derrière se trouve un passage étroit que personne d'autre n'a remarqué.",

        choices: [

            {
                id:
                    "mansion_passage_alone",

                secretValue:
                    "alone",

                title:
                    "🕯️ Explorer seul",

                description:
                    "Garder le passage secret et s'y aventurer discrètement."
            },

            {
                id:
                    "mansion_passage_group",

                secretValue:
                    "group",

                title:
                    "📣 Appeler les autres",

                description:
                    "Prévenir immédiatement le groupe."
            }

        ],

        guess: {

            title:
                "Qu'a fait {actor} ?",

            description:
                "A-t-il tenté l'exploration en solitaire ?",

            choices: [

                {
                    id:
                        "mansion_passage_guess_alone",

                    secretValue:
                        "alone",

                    title:
                        "🕯️ Il est parti seul",

                    description:
                        "Vous pensez que {actor} a voulu garder la découverte."
                },

                {
                    id:
                        "mansion_passage_guess_group",

                    secretValue:
                        "group",

                    title:
                        "📣 Il vous a appelés",

                    description:
                        "Vous pensez qu'il comptait partager sa découverte."
                }

            ]

        },

        outcomes: {

            alone_correct: {

                title:
                    "Plan démasqué",

                icon:
                    "🕳️",

                variants: [

                    {
                        id:
                            "mansion_passage_alone_correct_bad",

                        text:
                            "{actor} comptait explorer seul et finit coincé derrière une partie du mur.",

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
                            68
                    },

                    {
                        id:
                            "mansion_passage_alone_correct_neutral",

                        text:
                            "Le groupe retrouve {actor} avant qu'il ne s'engage trop loin.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            32
                    }

                ]

            },


            alone_wrong: {

                title:
                    "Exploration discrète",

                icon:
                    "🎁",

                variants: [

                    {
                        id:
                            "mansion_passage_alone_wrong_good",

                        text:
                            "{actor} découvre une petite cache contenant quelques soins.",

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
                            "mansion_passage_alone_wrong_neutral",

                        text:
                            "Le passage débouche simplement dans un autre couloir.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            72
                    },

                    {
                        id:
                            "mansion_passage_alone_wrong_bad",

                        text:
                            "Une partie du mur se referme brutalement sur {actor}.",

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
                            20
                    }

                ]

            },


            group_correct: {

                title:
                    "Expédition collective",

                icon:
                    "🤝",

                variants: [

                    {
                        id:
                            "mansion_passage_group_correct_good",

                        text:
                            "Le passage mène vers une petite pièce contenant quelques objets utiles.",

                        icon:
                            "🎁",

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
                            "mansion_passage_group_correct_neutral",

                        text:
                            "Le passage mène simplement vers une autre partie du manoir.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            88
                    }

                ]

            },


            group_wrong: {

                title:
                    "Paranoïa collective",

                icon:
                    "🙄",

                variants: [

                    {
                        id:
                            "mansion_passage_group_wrong_bad",

                        text:
                            "{actor} voulait prévenir les autres, mais la dispute bloque l'exploration pendant longtemps.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            42
                    },

                    {
                        id:
                            "mansion_passage_group_wrong_neutral",

                        text:
                            "Le malentendu finit par être dissipé.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            58
                    }

                ]

            }

        }

    },


    // =====================================================
    // 4 - VIN
    // =====================================================

    {
        id:
            "mansion_secret_wine",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve une bouteille encore pleine",

        category:
            "Choix secret",

        icon:
            "🍷",

        description:
            "Une bouteille parfaitement intacte repose sur une table. À côté, plusieurs verres semblent attendre les invités.",

        choices: [

            {
                id:
                    "mansion_wine_drink",

                secretValue:
                    "drink",

                title:
                    "🍷 Boire un verre",

                description:
                    "Prendre le risque de goûter."
            },

            {
                id:
                    "mansion_wine_refuse",

                secretValue:
                    "refuse",

                title:
                    "🚫 Ne rien boire",

                description:
                    "Décider que boire quelque chose trouvé ici est une idée catastrophique."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il bu ?",

            description:
                "À vous de deviner jusqu'où va son instinct de survie.",

            choices: [

                {
                    id:
                        "mansion_wine_guess_drink",

                    secretValue:
                        "drink",

                    title:
                        "🍷 Oui",

                    description:
                        "{actor} n'a certainement pas résisté."
                },

                {
                    id:
                        "mansion_wine_guess_refuse",

                    secretValue:
                        "refuse",

                    title:
                        "🚫 Non",

                    description:
                        "Vous pensez qu'il a préféré rester prudent."
                }

            ]

        },

        outcomes: {

            drink_correct: {

                title:
                    "Prévisible",

                icon:
                    "🤢",

                variants: [

                    {
                        id:
                            "mansion_wine_drink_correct_bad",

                        text:
                            "Le liquide était beaucoup trop ancien.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            75
                    },

                    {
                        id:
                            "mansion_wine_drink_correct_neutral",

                        text:
                            "Le vin est infect mais ne semble pas dangereux.",

                        icon:
                            "😖",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]

            },


            drink_wrong: {

                title:
                    "Santé",

                icon:
                    "🍷",

                variants: [

                    {
                        id:
                            "mansion_wine_drink_wrong_good",

                        text:
                            "Étrangement, une petite quantité du vin semble redonner des forces à {actor}.",

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
                            "mansion_wine_drink_wrong_neutral",

                        text:
                            "{actor} a bu en secret. Le goût est terrible mais aucun effet ne se manifeste.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            68
                    },

                    {
                        id:
                            "mansion_wine_drink_wrong_bad",

                        text:
                            "{actor} commence à avoir de violents vertiges.",

                        icon:
                            "🌀",

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

            },


            refuse_correct: {

                title:
                    "Instinct de survie",

                icon:
                    "🧠",

                variants: [

                    {
                        id:
                            "mansion_wine_refuse_correct_neutral",

                        text:
                            "Quelques secondes plus tard, le liquide devient noir dans la bouteille.",

                        icon:
                            "🖤",

                        effects:
                            [],

                        weight:
                            90
                    },

                    {
                        id:
                            "mansion_wine_refuse_correct_good",

                        text:
                            "En reposant la bouteille, {actor} découvre une petite clé sous celle-ci.",

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


            refuse_wrong: {

                title:
                    "Finalement raisonnable",

                icon:
                    "😅",

                variants: [

                    {
                        id:
                            "mansion_wine_refuse_wrong_neutral",

                        text:
                            "Tout le monde pensait que {actor} boirait, mais il n'avait même pas touché à la bouteille.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            80
                    },

                    {
                        id:
                            "mansion_wine_refuse_wrong_bad",

                        text:
                            "Les accusations créent une dispute complètement inutile.",

                        icon:
                            "😒",

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

        }

    },


    // =====================================================
    // 5 - POUPÉE
    // =====================================================

    {
        id:
            "mansion_secret_doll",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve une poupée inquiétante",

        category:
            "Choix secret",

        icon:
            "🧸",

        description:
            "Une vieille poupée est assise sur un lit. Une petite clé dépasse de sa poche.",

        choices: [

            {
                id:
                    "mansion_doll_take",

                secretValue:
                    "take",

                title:
                    "🧸 Prendre la poupée",

                description:
                    "La récupérer pour essayer d'obtenir la clé."
            },

            {
                id:
                    "mansion_doll_leave",

                secretValue:
                    "leave",

                title:
                    "🚪 Ne pas y toucher",

                description:
                    "Sortir de la pièce immédiatement."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il touché à la poupée ?",

            description:
                "À vous de juger son niveau de prudence.",

            choices: [

                {
                    id:
                        "mansion_doll_guess_take",

                    secretValue:
                        "take",

                    title:
                        "🧸 Il l'a prise",

                    description:
                        "Vous pensez que {actor} a récupéré la poupée."
                },

                {
                    id:
                        "mansion_doll_guess_leave",

                    secretValue:
                        "leave",

                    title:
                        "🚪 Il est parti",

                    description:
                        "Vous pensez qu'il n'a rien touché."
                }

            ]

        },

        outcomes: {

            take_correct: {

                title:
                    "On savait que tu le ferais",

                icon:
                    "😱",

                variants: [

                    {
                        id:
                            "mansion_secret_doll_take_bad",

                        text:
                            "La poupée mord violemment la main de {actor}.",

                        icon:
                            "🩸",

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
                            "mansion_secret_doll_take_neutral",

                        text:
                            "La poupée reste parfaitement immobile. La clé est malheureusement rouillée.",

                        icon:
                            "🗝️",

                        effects:
                            [],

                        weight:
                            28
                    }

                ]

            },


            take_wrong: {

                title:
                    "Personne ne s'en doutait",

                icon:
                    "🗝️",

                variants: [

                    {
                        id:
                            "mansion_secret_doll_wrong_good",

                        text:
                            "{actor} récupère discrètement la petite clé.",

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
                            15
                    },

                    {
                        id:
                            "mansion_secret_doll_wrong_neutral",

                        text:
                            "La clé ne semble correspondre à aucune serrure proche.",

                        icon:
                            "🔑",

                        effects:
                            [],

                        weight:
                            85
                    }

                ]

            },


            leave_correct: {

                title:
                    "Bonne décision",

                icon:
                    "😌",

                variants: [

                    {
                        id:
                            "mansion_secret_doll_leave_neutral",

                        text:
                            "La poupée tourne la tête quelques secondes après le départ de {actor}.",

                        icon:
                            "🧸",

                        effects:
                            [],

                        weight:
                            90
                    },

                    {
                        id:
                            "mansion_secret_doll_leave_bad",

                        text:
                            "Une petite voix appelle {actor} depuis la chambre alors qu'il repart.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            10
                    }

                ]

            },


            leave_wrong: {

                title:
                    "Vous l'avez sous-estimé",

                icon:
                    "😂",

                variants: [

                    {
                        id:
                            "mansion_secret_doll_leave_wrong_neutral",

                        text:
                            "{actor} n'avait même pas touché à la poupée.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            80
                    },

                    {
                        id:
                            "mansion_secret_doll_leave_wrong_bad",

                        text:
                            "Les autres perdent un temps fou à chercher une poupée que {actor} n'avait même pas prise.",

                        icon:
                            "🙄",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            20
                    }

                ]

            }

        }

    },


    // =====================================================
    // 6 - COFFRE
    // =====================================================

    {
        id:
            "mansion_secret_chest",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre un coffre verrouillé",

        category:
            "Choix secret",

        icon:
            "🧰",

        description:
            "Un vieux coffre repose derrière un rideau. Le cadenas est presque entièrement rouillé.",

        choices: [

            {
                id:
                    "mansion_chest_force",

                secretValue:
                    "force",

                title:
                    "🔨 Forcer le coffre",

                description:
                    "Essayer de l'ouvrir avant que les autres arrivent."
            },

            {
                id:
                    "mansion_chest_wait",

                secretValue:
                    "wait",

                title:
                    "🤝 Attendre le groupe",

                description:
                    "Ne rien ouvrir sans les autres."
            }

        ],

        guess: {

            title:
                "Qu'a fait {actor} avec le coffre ?",

            description:
                "Tentative discrète ou esprit d'équipe ?",

            choices: [

                {
                    id:
                        "mansion_chest_guess_force",

                    secretValue:
                        "force",

                    title:
                        "🔨 Il l'a forcé",

                    description:
                        "{actor} a probablement essayé de l'ouvrir seul."
                },

                {
                    id:
                        "mansion_chest_guess_wait",

                    secretValue:
                        "wait",

                    title:
                        "🤝 Il a attendu",

                    description:
                        "Vous pensez qu'il n'a rien touché."
                }

            ]

        },

        outcomes: {

            force_correct: {

                title:
                    "Démasqué",

                icon:
                    "💥",

                variants: [

                    {
                        id:
                            "mansion_chest_force_correct_bad",

                        text:
                            "Le mécanisme se bloque et blesse {actor}.",

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
                            65
                    },

                    {
                        id:
                            "mansion_chest_force_correct_neutral",

                        text:
                            "{actor} est interrompu avant d'avoir réussi à ouvrir le coffre.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            35
                    }

                ]

            },


            force_wrong: {

                title:
                    "Coup discret",

                icon:
                    "💎",

                variants: [

                    {
                        id:
                            "mansion_chest_force_wrong_good",

                        text:
                            "Le coffre contient quelques objets utiles.",

                        icon:
                            "🎁",

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
                            "mansion_chest_force_wrong_neutral",

                        text:
                            "Le coffre contient uniquement des papiers moisis.",

                        icon:
                            "📜",

                        effects:
                            [],

                        weight:
                            72
                    },

                    {
                        id:
                            "mansion_chest_force_wrong_bad",

                        text:
                            "Une lame dissimulée dans le mécanisme coupe la main de {actor}.",

                        icon:
                            "🩸",

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

            },


            wait_correct: {

                title:
                    "Travail d'équipe",

                icon:
                    "🤝",

                variants: [

                    {
                        id:
                            "mansion_chest_wait_good",

                        text:
                            "Le groupe ouvre le coffre et partage quelques objets utiles.",

                        icon:
                            "🎁",

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
                            "mansion_chest_wait_neutral",

                        text:
                            "Le coffre ne contient presque rien.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            88
                    }

                ]

            },


            wait_wrong: {

                title:
                    "Encore soupçonné",

                icon:
                    "😒",

                variants: [

                    {
                        id:
                            "mansion_chest_wait_wrong_bad",

                        text:
                            "La méfiance du groupe provoque une dispute inutile.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            40
                    },

                    {
                        id:
                            "mansion_chest_wait_wrong_neutral",

                        text:
                            "Le coffre était toujours parfaitement fermé.",

                        icon:
                            "🧰",

                        effects:
                            [],

                        weight:
                            60
                    }

                ]

            }

        }

    },


    // =====================================================
    // 7 - VOIX
    // =====================================================

    {
        id:
            "mansion_secret_voice",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "Une voix appelle {actor} depuis un couloir",

        category:
            "Choix secret",

        icon:
            "👻",

        description:
            "Une voix familière murmure le nom de {actor} depuis une pièce plongée dans l'obscurité.",

        choices: [

            {
                id:
                    "mansion_voice_follow",

                secretValue:
                    "follow",

                title:
                    "👣 Suivre la voix",

                description:
                    "Entrer dans la pièce pour découvrir qui l'appelle."
            },

            {
                id:
                    "mansion_voice_run",

                secretValue:
                    "run",

                title:
                    "🏃 Partir",

                description:
                    "Ne surtout pas découvrir ce qu'il y a derrière."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il suivi la voix ?",

            description:
                "À vous de deviner.",

            choices: [

                {
                    id:
                        "mansion_voice_guess_follow",

                    secretValue:
                        "follow",

                    title:
                        "👣 Il l'a suivie",

                    description:
                        "{actor} est certainement allé voir."
                },

                {
                    id:
                        "mansion_voice_guess_run",

                    secretValue:
                        "run",

                    title:
                        "🏃 Il est parti",

                    description:
                        "{actor} a préféré fuir."
                }

            ]

        },

        outcomes: {

            follow_correct: {

                title:
                    "On le savait",

                icon:
                    "👻",

                variants: [

                    {
                        id:
                            "mansion_voice_follow_bad",

                        text:
                            "Une silhouette surgit de l'obscurité et frappe {actor}.",

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
                            70
                    },

                    {
                        id:
                            "mansion_voice_follow_neutral",

                        text:
                            "La pièce est complètement vide.",

                        icon:
                            "🌑",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]

            },


            follow_wrong: {

                title:
                    "Curiosité cachée",

                icon:
                    "🕯️",

                variants: [

                    {
                        id:
                            "mansion_voice_follow_wrong_good",

                        text:
                            "{actor} découvre une petite pièce calme contenant une lampe.",

                        icon:
                            "🔦",

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
                            "mansion_voice_follow_wrong_bad",

                        text:
                            "Une présence invisible traverse {actor}.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            28
                    },

                    {
                        id:
                            "mansion_voice_follow_wrong_neutral",

                        text:
                            "La voix disparaît dès que {actor} entre dans la pièce.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            60
                    }

                ]

            },


            run_correct: {

                title:
                    "Instinct intact",

                icon:
                    "🏃",

                variants: [

                    {
                        id:
                            "mansion_voice_run_neutral",

                        text:
                            "Quelques secondes après le départ de {actor}, la porte se referme violemment derrière lui.",

                        icon:
                            "🚪",

                        effects:
                            [],

                        weight:
                            90
                    },

                    {
                        id:
                            "mansion_voice_run_good",

                        text:
                            "{actor} trouve rapidement une pièce plus calme.",

                        icon:
                            "😌",

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


            run_wrong: {

                title:
                    "Pas si courageux",

                icon:
                    "😂",

                variants: [

                    {
                        id:
                            "mansion_voice_run_wrong_neutral",

                        text:
                            "{actor} avait déjà quitté le couloir depuis longtemps.",

                        icon:
                            "🏃",

                        effects:
                            [],

                        weight:
                            80
                    },

                    {
                        id:
                            "mansion_voice_run_wrong_bad",

                        text:
                            "Dans sa fuite, {actor} trébuche dans l'escalier.",

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
                            20
                    }

                ]

            }

        }

    },


    // =====================================================
    // 8 - MÉDAILLON
    // =====================================================

    {
        id:
            "mansion_secret_medallion",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve un étrange médaillon",

        category:
            "Choix secret",

        icon:
            "📿",

        description:
            "Un médaillon ancien repose dans une petite boîte. Lorsqu'il s'en approche, {actor} entend un léger murmure.",

        choices: [

            {
                id:
                    "mansion_medallion_keep",

                secretValue:
                    "keep",

                title:
                    "📿 Le garder",

                description:
                    "Prendre le médaillon et ne rien dire aux autres."
            },

            {
                id:
                    "mansion_medallion_destroy",

                secretValue:
                    "destroy",

                title:
                    "🔨 Le détruire",

                description:
                    "Ne prendre aucun risque avec cet objet."
            }

        ],

        guess: {

            title:
                "Qu'a fait {actor} du médaillon ?",

            description:
                "Objet mystérieux conservé ou détruit immédiatement ?",

            choices: [

                {
                    id:
                        "mansion_medallion_guess_keep",

                    secretValue:
                        "keep",

                    title:
                        "📿 Il l'a gardé",

                    description:
                        "Vous pensez que {actor} a conservé l'objet."
                },

                {
                    id:
                        "mansion_medallion_guess_destroy",

                    secretValue:
                        "destroy",

                    title:
                        "🔨 Il l'a détruit",

                    description:
                        "Vous pensez qu'il n'a pris aucun risque."
                }

            ]

        },

        outcomes: {

            keep_correct: {

                title:
                    "Objet maudit",

                icon:
                    "🩸",

                variants: [

                    {
                        id:
                            "mansion_medallion_keep_bad",

                        text:
                            "Le médaillon se resserre brutalement autour du cou de {actor}.",

                        icon:
                            "🩸",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            70
                    },

                    {
                        id:
                            "mansion_medallion_keep_neutral",

                        text:
                            "Le groupe récupère le médaillon avant qu'il ne se produise quoi que ce soit.",

                        icon:
                            "📿",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]

            },


            keep_wrong: {

                title:
                    "Pouvoir caché",

                icon:
                    "✨",

                variants: [

                    {
                        id:
                            "mansion_medallion_wrong_good",

                        text:
                            "Le médaillon semble brièvement protéger {actor}.",

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
                            15
                    },

                    {
                        id:
                            "mansion_medallion_wrong_neutral",

                        text:
                            "Le médaillon reste parfaitement silencieux.",

                        icon:
                            "📿",

                        effects:
                            [],

                        weight:
                            65
                    },

                    {
                        id:
                            "mansion_medallion_wrong_bad",

                        text:
                            "Une douleur glaciale traverse soudainement {actor}.",

                        icon:
                            "🥶",

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

            },


            destroy_correct: {

                title:
                    "Bonne intuition",

                icon:
                    "💥",

                variants: [

                    {
                        id:
                            "mansion_medallion_destroy_neutral",

                        text:
                            "Une fumée noire s'échappe du médaillon puis disparaît.",

                        icon:
                            "🌫️",

                        effects:
                            [],

                        weight:
                            85
                    },

                    {
                        id:
                            "mansion_medallion_destroy_good",

                        text:
                            "L'atmosphère semble légèrement plus calme après la destruction de l'objet.",

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
                            15
                    }

                ]

            },


            destroy_wrong: {

                title:
                    "Finalement prudent",

                icon:
                    "👏",

                variants: [

                    {
                        id:
                            "mansion_medallion_destroy_wrong_neutral",

                        text:
                            "Tout le monde pensait que {actor} garderait l'objet, mais il l'avait détruit.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            80
                    },

                    {
                        id:
                            "mansion_medallion_destroy_wrong_bad",

                        text:
                            "La méfiance provoque une dispute inutile.",

                        icon:
                            "😒",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            20
                    }

                ]

            }

        }

    },


    // =====================================================
    // 9 - PORTE DORÉE
    // SUITE CLÉ DORÉE
    // =====================================================

    {
        id:
            "mansion_secret_golden_door",

        type:
            "secret_choice",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_secret_key_hidden"
            ]

        },

        title:
            "{actor} trouve une porte correspondant à sa clé",

        category:
            "Suite",

        icon:
            "🚪",

        description:
            "Dans une aile isolée du manoir, {actor} découvre une porte ornée du même symbole que la clé dorée cachée plus tôt.",

        choices: [

            {
                id:
                    "mansion_golden_door_open",

                secretValue:
                    "open",

                title:
                    "🔓 Ouvrir",

                description:
                    "Utiliser la clé sans prévenir personne."
            },

            {
                id:
                    "mansion_golden_door_leave",

                secretValue:
                    "leave",

                title:
                    "🚪 Ne pas ouvrir",

                description:
                    "Continuer son chemin."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il utilisé sa clé ?",

            description:
                "À vous de deviner.",

            choices: [

                {
                    id:
                        "mansion_golden_door_guess_open",

                    secretValue:
                        "open",

                    title:
                        "🔓 Oui",

                    description:
                        "{actor} a ouvert la porte."
                },

                {
                    id:
                        "mansion_golden_door_guess_leave",

                    secretValue:
                        "leave",

                    title:
                        "🚪 Non",

                    description:
                        "{actor} a résisté."
                }

            ]

        },

        outcomes: {

            open_correct: {

                title:
                    "Curiosité prévisible",

                icon:
                    "👁️",

                variants: [

                    {
                        id:
                            "golden_door_open_correct_bad",

                        text:
                            "La porte révèle une pièce remplie de silhouettes immobiles qui se tournent toutes vers {actor}.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            70
                    },

                    {
                        id:
                            "golden_door_open_correct_neutral",

                        text:
                            "La pièce derrière la porte est totalement vide.",

                        icon:
                            "🌑",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]

            },


            open_wrong: {

                title:
                    "Personne n'était au courant",

                icon:
                    "🤫",

                variants: [

                    {
                        id:
                            "golden_door_open_wrong_good",

                        text:
                            "Une petite cache contient quelques soins anciens mais encore utilisables.",

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
                            "golden_door_open_wrong_bad",

                        text:
                            "Une présence frappe {actor} dès qu'il entre.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            32
                    },

                    {
                        id:
                            "golden_door_open_wrong_neutral",

                        text:
                            "La pièce ne contient rien d'intéressant.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            60
                    }

                ]

            },


            leave_correct: {

                title:
                    "Résistance inattendue",

                icon:
                    "🚪",

                variants: [

                    {
                        id:
                            "golden_door_leave_neutral",

                        text:
                            "{actor} range la clé et s'éloigne.",

                        icon:
                            "😌",

                        effects:
                            [],

                        weight:
                            90
                    },

                    {
                        id:
                            "golden_door_leave_bad",

                        text:
                            "Des coups violents retentissent derrière la porte au moment où {actor} s'éloigne.",

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
                            10
                    }

                ]

            },


            leave_wrong: {

                title:
                    "Finalement prudent",

                icon:
                    "😅",

                variants: [

                    {
                        id:
                            "golden_door_leave_wrong_neutral",

                        text:
                            "Tout le monde pensait que {actor} ouvrirait la porte. Il ne l'a pourtant même pas touchée.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            100
                    }

                ]

            }

        }

    },


    // =====================================================
    // 10 - LE LIVRE REVIENT
    // SUITE LIVRE MAUDIT
    // =====================================================

    {
        id:
            "mansion_secret_book_return",

        type:
            "secret_choice",

        baseWeight:
            1,

        requirements: {

            all: [
                "mansion_secret_book_opened"
            ],

            not: [
                "mansion_secret_book_closed"
            ]

        },

        title:
            "Le livre maudit apparaît de nouveau devant {actor}",

        category:
            "Suite",

        icon:
            "📖",

        description:
            "Alors que {actor} avait laissé le livre derrière lui, celui-ci repose maintenant sur une table quelques pièces plus loin.",

        choices: [

            {
                id:
                    "mansion_book_return_read",

                secretValue:
                    "read",

                title:
                    "📖 Lire la nouvelle page",

                description:
                    "Une page qui n'existait pas auparavant est maintenant ouverte."
            },

            {
                id:
                    "mansion_book_return_burn",

                secretValue:
                    "burn",

                title:
                    "🔥 Brûler le livre",

                description:
                    "Cette fois, terminer le problème définitivement."
            }

        ],

        guess: {

            title:
                "Qu'a fait {actor} avec le livre revenu ?",

            description:
                "Curiosité ou destruction ?",

            choices: [

                {
                    id:
                        "mansion_book_return_guess_read",

                    secretValue:
                        "read",

                    title:
                        "📖 Lire",

                    description:
                        "{actor} n'a sûrement pas résisté."
                },

                {
                    id:
                        "mansion_book_return_guess_burn",

                    secretValue:
                        "burn",

                    title:
                        "🔥 Le brûler",

                    description:
                        "{actor} a voulu en finir."
                }

            ]

        },

        outcomes: {

            read_correct: {

                title:
                    "Encore curieux",

                icon:
                    "📖",

                variants: [

                    {
                        id:
                            "book_return_read_bad",

                        text:
                            "Les nouvelles lignes mentionnent le nom de {actor}. Une ombre sort immédiatement de la page.",

                        icon:
                            "👤",

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
                            "book_return_read_neutral",

                        text:
                            "Les nouvelles pages deviennent blanches dès que {actor} commence à lire.",

                        icon:
                            "📄",

                        effects:
                            [],

                        weight:
                            28
                    }

                ]

            },


            read_wrong: {

                title:
                    "Curiosité secrète",

                icon:
                    "🤫",

                variants: [

                    {
                        id:
                            "book_return_read_wrong_good",

                        text:
                            "Le texte révèle brièvement un symbole protecteur.",

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
                    },

                    {
                        id:
                            "book_return_read_wrong_bad",

                        text:
                            "Une douleur glaciale traverse {actor} à la dernière ligne.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            30
                    },

                    {
                        id:
                            "book_return_read_wrong_neutral",

                        text:
                            "Le texte est incompréhensible.",

                        icon:
                            "📖",

                        effects:
                            [],

                        weight:
                            60
                    }

                ]

            },


            burn_correct: {

                title:
                    "Cette fois c'est fini",

                icon:
                    "🔥",

                variants: [

                    {
                        id:
                            "book_return_burn_good",

                        text:
                            "Le livre brûle entièrement et l'atmosphère du manoir semble brièvement plus légère.",

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
                            12
                    },

                    {
                        id:
                            "book_return_burn_bad",

                        text:
                            "Une fumée noire remplit brutalement la pièce.",

                        icon:
                            "🌫️",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            28
                    },

                    {
                        id:
                            "book_return_burn_neutral",

                        text:
                            "Le livre se consume sans autre manifestation.",

                        icon:
                            "🔥",

                        effects:
                            [],

                        weight:
                            60
                    }

                ]

            },


            burn_wrong: {

                title:
                    "Plus raisonnable que prévu",

                icon:
                    "🔥",

                variants: [

                    {
                        id:
                            "book_return_burn_wrong_neutral",

                        text:
                            "Tout le monde pensait que {actor} lirait encore. Le livre est pourtant déjà réduit en cendres.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            80
                    },

                    {
                        id:
                            "book_return_burn_wrong_bad",

                        text:
                            "La fumée du livre brûlé fait tousser {actor}.",

                        icon:
                            "🌫️",

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

        }

    }

];