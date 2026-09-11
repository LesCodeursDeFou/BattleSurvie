export const SECRET_SITUATIONS = [

    // =====================================================
    // 1 - CLÉ DORÉE
    // DÉBUT MINI-HISTOIRE
    // =====================================================

    {
        id: "mansion_secret_key",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_key_hide",
                secretValue: "hide",

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
                            id: "mansion_secret_golden_door",
                            weight: 32
                        }
                    ]
                }
            },

            {
                id: "mansion_key_share",
                secretValue: "share",

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
                    id: "mansion_key_guess_hide",
                    secretValue: "hide",

                    title:
                        "🤫 Il l'a gardée",

                    description:
                        "Vous pensez que {actor} cache la clé."
                },

                {
                    id: "mansion_key_guess_share",
                    secretValue: "share",

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
                        id: "mansion_key_hide_correct_bad",

                        text:
                            "Le groupe découvre la clé cachée dans les affaires de {actor}. La confrontation est immédiate.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 50,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_secret_golden_door",
                                    weight: 5
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_key_hide_correct_neutral",

                        text:
                            "{actor} est démasqué mais convainc le groupe de conserver la clé.",

                        icon:
                            "😬",

                        effects: [],

                        weight: 40,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_secret_golden_door",
                                    weight: 16
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_key_hide_correct_fear",

                        text:
                            "Lorsque le groupe récupère la clé, celle-ci se met à vibrer violemment et pointe vers un couloir sombre.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 10
                    }

                ]
            },

            hide_wrong: {

                title:
                    "Secret bien gardé",

                icon:
                    "🤫",

                variants: [

                    {
                        id: "mansion_key_hide_wrong_lucid",

                        text:
                            "Personne ne soupçonne {actor}. En observant la clé, il découvre un symbole identique gravé sur une porte d'une aile éloignée.",

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

                        weight: 25,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_secret_golden_door",
                                    weight: 48
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_key_hide_wrong_neutral",

                        text:
                            "La clé reste parfaitement cachée. Personne ne remarque quoi que ce soit.",

                        icon:
                            "🤫",

                        effects: [],

                        weight: 60,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_secret_golden_door",
                                    weight: 36
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_key_hide_wrong_fear",

                        text:
                            "Dans la poche de {actor}, la clé devient soudainement glaciale et commence à tourner toute seule.",

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

                        weight: 15
                    }

                ]
            },

            share_correct: {

                title:
                    "Confiance méritée",

                icon:
                    "🤝",

                variants: [

                    {
                        id: "mansion_key_share_correct_lucid",

                        text:
                            "En étudiant la clé ensemble, le groupe reconnaît plusieurs symboles utilisés ailleurs dans le manoir.",

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

                        weight: 25
                    },

                    {
                        id: "mansion_key_share_correct_courage",

                        text:
                            "Le groupe conserve collectivement la clé. Savoir qu'une nouvelle piste existe redonne un peu d'espoir.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "all",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_key_share_correct_neutral",

                        text:
                            "La clé est conservée collectivement, mais personne ne sait encore ce qu'elle ouvre.",

                        icon:
                            "🔑",

                        effects: [],

                        weight: 55
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
                        id: "mansion_key_share_wrong_bad",

                        text:
                            "{actor} voulait réellement partager sa découverte. La méfiance du groupe provoque une longue dispute.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target: "all",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_key_share_wrong_neutral",

                        text:
                            "Le groupe réalise finalement que {actor} disait la vérité.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 58
                    }

                ]
            }

        }
    },


    // =====================================================
    // 2 - LIVRE INTERDIT
    // DÉBUT MINI-HISTOIRE
    // =====================================================

    {
        id: "mansion_secret_book",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_book_open",
                secretValue: "open",

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
                            id: "mansion_secret_book_return",
                            weight: 30
                        }
                    ]
                }
            },

            {
                id: "mansion_book_leave",
                secretValue: "leave",

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
                    id: "mansion_book_guess_open",
                    secretValue: "open",

                    title:
                        "📖 Évidemment",

                    description:
                        "Vous pensez que {actor} n'a pas résisté."
                },

                {
                    id: "mansion_book_guess_leave",
                    secretValue: "leave",

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
                        id: "mansion_book_open_correct_fear",

                        text:
                            "Les pages se tournent seules et commencent à raconter exactement ce que {actor} est en train de faire.",

                        icon:
                            "📖",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 40,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_secret_book_return",
                                    weight: 42
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_book_open_correct_attack",

                        text:
                            "Une forme noire jaillit des pages et projette {actor} contre une étagère.",

                        icon:
                            "👻",

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

                        weight: 30
                    },

                    {
                        id: "mansion_book_open_correct_curse",

                        text:
                            "Le livre écrit le nom de {actor} sur une page jusque-là vide.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        weight: 15,

                        narrative: {
                            nextSituationBoosts: [
                                {
                                    id: "mansion_secret_book_return",
                                    weight: 48
                                }
                            ]
                        }
                    },

                    {
                        id: "mansion_book_open_correct_neutral",

                        text:
                            "Le groupe referme le livre avant que quelque chose de plus grave ne se produise.",

                        icon:
                            "📕",

                        effects: [],

                        weight: 15
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
                        id: "mansion_book_open_wrong_lucid",

                        text:
                            "Personne ne sait que {actor} a ouvert le livre. Il y découvre plusieurs règles étranges du manoir.",

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

                        weight: 18
                    },

                    {
                        id: "mansion_book_open_wrong_neutral",

                        text:
                            "Le livre contient surtout des pages incompréhensibles.",

                        icon:
                            "📖",

                        effects: [],

                        weight: 47
                    },

                    {
                        id: "mansion_book_open_wrong_fear",

                        text:
                            "Une ombre s'échappe silencieusement des pages et disparaît derrière {actor}.",

                        icon:
                            "👤",

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
                    },

                    {
                        id: "mansion_book_open_wrong_possession",

                        text:
                            "Pendant quelques secondes, {actor} continue de lire alors qu'il essaie pourtant de refermer le livre.",

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
                        id: "mansion_book_leave_correct_good",

                        text:
                            "En refusant d'ouvrir le livre, {actor} résiste à une étrange impulsion et reprend confiance.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_book_leave_correct_neutral",

                        text:
                            "{actor} n'a pas touché au livre. Rien ne se produit.",

                        icon:
                            "😌",

                        effects: [],

                        weight: 80
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
                        id: "mansion_book_leave_wrong_bad",

                        text:
                            "Les accusations autour du livre déclenchent une dispute dans une pièce déjà particulièrement oppressante.",

                        icon:
                            "😤",

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
                        id: "mansion_book_leave_wrong_neutral",

                        text:
                            "Tout le monde pensait que {actor} avait ouvert le livre. Il n'y avait pourtant même pas touché.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 65
                    }

                ]
            }

        }
    },


    // =====================================================
    // 3 - PASSAGE SECRET
    // =====================================================

    {
        id: "mansion_secret_passage",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_passage_alone",
                secretValue: "alone",

                title:
                    "🕯️ Explorer seul",

                description:
                    "Garder le passage secret et s'y aventurer discrètement."
            },

            {
                id: "mansion_passage_group",
                secretValue: "group",

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
                    id: "mansion_passage_guess_alone",
                    secretValue: "alone",

                    title:
                        "🕯️ Il est parti seul",

                    description:
                        "Vous pensez que {actor} a voulu garder la découverte."
                },

                {
                    id: "mansion_passage_guess_group",
                    secretValue: "group",

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
                    "🧱",

                variants: [

                    {
                        id: "mansion_passage_alone_correct_bad",

                        text:
                            "{actor} comptait explorer seul. Une partie du mur se referme alors qu'il tente de ressortir.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_passage_alone_correct_fear",

                        text:
                            "Le groupe retrouve {actor} dans le passage. Derrière lui, une deuxième silhouette identique disparaît au coin du couloir.",

                        icon:
                            "👥",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_passage_alone_correct_neutral",

                        text:
                            "Le groupe retrouve {actor} avant qu'il ne s'engage trop loin.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 30
                    }

                ]
            },

            alone_wrong: {

                title:
                    "Exploration discrète",

                icon:
                    "🤫",

                variants: [

                    {
                        id: "mansion_passage_alone_wrong_lucid",

                        text:
                            "{actor} découvre plusieurs inscriptions expliquant comment certains passages du manoir se déplacent.",

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
                        id: "mansion_passage_alone_wrong_possession",

                        text:
                            "Le passage mène à une petite pièce vide. Au retour, {actor} ne se souvient pourtant pas des dernières minutes.",

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
                        id: "mansion_passage_alone_wrong_bad",

                        text:
                            "Une partie du passage se referme sur le bras de {actor}.",

                        icon:
                            "🧱",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_passage_alone_wrong_neutral",

                        text:
                            "Le passage débouche simplement dans un autre couloir.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 40
                    }

                ]
            },

            group_correct: {

                title:
                    "Exploration collective",

                icon:
                    "🤝",

                variants: [

                    {
                        id: "mansion_passage_group_correct_lucid",

                        text:
                            "En explorant ensemble, le groupe découvre des notes anciennes sur la structure du manoir.",

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

                        weight: 25
                    },

                    {
                        id: "mansion_passage_group_correct_fear",

                        text:
                            "Le passage contient plusieurs portraits montrant le groupe avant même son arrivée dans le manoir.",

                        icon:
                            "🖼️",

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
                        id: "mansion_passage_group_correct_neutral",

                        text:
                            "Le passage mène simplement vers une autre partie du manoir.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 45
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
                        id: "mansion_passage_group_wrong_bad",

                        text:
                            "{actor} voulait réellement appeler tout le monde. La dispute fait perdre un temps précieux dans le passage.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target: "all",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_passage_group_wrong_neutral",

                        text:
                            "Le malentendu finit par être dissipé.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 60
                    }

                ]
            }

        }
    },


    // =====================================================
    // 4 - VIN
    // =====================================================

    {
        id: "mansion_secret_wine",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_wine_drink",
                secretValue: "drink",

                title:
                    "🍷 Boire un verre",

                description:
                    "Prendre le risque de goûter."
            },

            {
                id: "mansion_wine_refuse",
                secretValue: "refuse",

                title:
                    "🚫 Ne rien boire",

                description:
                    "Boire quelque chose trouvé ici ressemble objectivement à une idée catastrophique."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il bu ?",

            description:
                "À vous de deviner jusqu'où va son instinct de survie.",

            choices: [

                {
                    id: "mansion_wine_guess_drink",
                    secretValue: "drink",

                    title:
                        "🍷 Oui",

                    description:
                        "{actor} n'a certainement pas résisté."
                },

                {
                    id: "mansion_wine_guess_refuse",
                    secretValue: "refuse",

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
                    "🍷",

                variants: [

                    {
                        id: "mansion_wine_drink_correct_fear",

                        text:
                            "Le liquide a un goût normal. Puis le reflet de {actor} dans la bouteille se met à boire alors qu'il s'est déjà arrêté.",

                        icon:
                            "🪞",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_wine_drink_correct_bad",

                        text:
                            "Le verre tombe des mains de {actor}. Le liquide devient noir au contact du sol et lui brûle la peau.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_wine_drink_correct_curse",

                        text:
                            "Une inscription apparaît lentement au fond du verre : le prénom de {actor}.",

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
                        id: "mansion_wine_drink_correct_neutral",

                        text:
                            "Le goût est infect, mais aucun effet visible ne se manifeste.",

                        icon:
                            "😖",

                        effects: [],

                        weight: 15
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
                        id: "mansion_wine_drink_wrong_good",

                        text:
                            "Étrangement, une petite quantité du liquide semble apaiser {actor}.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_wine_drink_wrong_neutral",

                        text:
                            "{actor} a bu en secret. Le goût est terrible mais rien ne se passe.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 55
                    },

                    {
                        id: "mansion_wine_drink_wrong_fear",

                        text:
                            "Une voix murmure depuis l'intérieur de la bouteille : « Encore. »",

                        icon:
                            "👂",

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
                    },

                    {
                        id: "mansion_wine_drink_wrong_possessed",

                        text:
                            "{actor} repose le verre. Sa main le reprend immédiatement sans qu'il l'ait décidé.",

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

                        weight: 10
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
                        id: "mansion_wine_refuse_correct_good",

                        text:
                            "Quelques secondes plus tard, le liquide devient noir dans la bouteille. {actor} se félicite de sa prudence.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_wine_refuse_correct_neutral",

                        text:
                            "La bouteille reste intacte sur la table. Personne ne la touche.",

                        icon:
                            "🍷",

                        effects: [],

                        weight: 80
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
                        id: "mansion_wine_refuse_wrong_bad",

                        text:
                            "Tout le monde était persuadé que {actor} avait bu. Les accusations rendent l'atmosphère encore plus tendue.",

                        icon:
                            "😒",

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
                        id: "mansion_wine_refuse_wrong_neutral",

                        text:
                            "{actor} n'avait même pas touché à la bouteille.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 65
                    }

                ]
            }

        }
    },


    // =====================================================
    // 5 - POUPÉE
    // =====================================================

    {
        id: "mansion_secret_doll",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_doll_take",
                secretValue: "take",

                title:
                    "🧸 Prendre la poupée",

                description:
                    "La récupérer pour essayer d'obtenir la clé."
            },

            {
                id: "mansion_doll_leave",
                secretValue: "leave",

                title:
                    "🚪 Ne pas y toucher",

                description:
                    "Sortir immédiatement de la pièce."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il touché à la poupée ?",

            description:
                "À vous de juger son niveau de prudence.",

            choices: [

                {
                    id: "mansion_doll_guess_take",
                    secretValue: "take",

                    title:
                        "🧸 Il l'a prise",

                    description:
                        "Vous pensez que {actor} a récupéré la poupée."
                },

                {
                    id: "mansion_doll_guess_leave",
                    secretValue: "leave",

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
                    "🧸",

                variants: [

                    {
                        id: "mansion_secret_doll_take_bad",

                        text:
                            "La poupée tourne brusquement la tête et mord la main de {actor}.",

                        icon:
                            "🩸",

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
                        id: "mansion_secret_doll_take_possession",

                        text:
                            "La poupée murmure quelque chose que seul {actor} semble entendre. Il refuse ensuite de la lâcher.",

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

                        weight: 18
                    },

                    {
                        id: "mansion_secret_doll_take_fear",

                        text:
                            "La poupée reste immobile jusqu'à ce que {actor} détourne les yeux. Lorsqu'il regarde de nouveau, elle sourit.",

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

                        weight: 25
                    },

                    {
                        id: "mansion_secret_doll_take_neutral",

                        text:
                            "La poupée reste parfaitement immobile. La petite clé est malheureusement rouillée.",

                        icon:
                            "🗝️",

                        effects: [],

                        weight: 15
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
                        id: "mansion_secret_doll_wrong_lucid",

                        text:
                            "{actor} récupère la clé et découvre un numéro de chambre gravé dans son dos.",

                        icon:
                            "👁️",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 20
                    },

                    {
                        id: "mansion_secret_doll_wrong_fear",

                        text:
                            "{actor} récupère la clé. La poupée lui murmure alors : « Tu reviendras me chercher. »",

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

                        weight: 25
                    },

                    {
                        id: "mansion_secret_doll_wrong_neutral",

                        text:
                            "La clé ne semble correspondre à aucune serrure proche.",

                        icon:
                            "🔑",

                        effects: [],

                        weight: 55
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
                        id: "mansion_secret_doll_leave_good",

                        text:
                            "{actor} quitte la chambre sans toucher à la poupée et sent la tension retomber.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 55
                    },

                    {
                        id: "mansion_secret_doll_leave_bad",

                        text:
                            "Quelques mètres plus loin, une petite voix appelle {actor}. La poupée est maintenant assise au bout du couloir.",

                        icon:
                            "🧸",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_secret_doll_leave_neutral",

                        text:
                            "Rien ne suit {actor}. Pour le moment.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 20
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
                        id: "mansion_secret_doll_leave_wrong_bad",

                        text:
                            "Le groupe cherche pendant plusieurs minutes une poupée que {actor} n'avait même pas touchée.",

                        icon:
                            "🙄",

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
                        id: "mansion_secret_doll_leave_wrong_neutral",

                        text:
                            "{actor} n'avait même pas touché à la poupée.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 70
                    }

                ]
            }

        }
    },


    // =====================================================
    // 6 - COFFRE
    // =====================================================

    {
        id: "mansion_secret_chest",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_chest_force",
                secretValue: "force",

                title:
                    "🔨 Forcer le coffre",

                description:
                    "Essayer de l'ouvrir avant que les autres arrivent."
            },

            {
                id: "mansion_chest_wait",
                secretValue: "wait",

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
                    id: "mansion_chest_guess_force",
                    secretValue: "force",

                    title:
                        "🔨 Il l'a forcé",

                    description:
                        "{actor} a probablement essayé de l'ouvrir seul."
                },

                {
                    id: "mansion_chest_guess_wait",
                    secretValue: "wait",

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
                        id: "mansion_chest_force_correct_bad",

                        text:
                            "Le mécanisme du coffre se bloque et une lame cachée blesse {actor}.",

                        icon:
                            "🩸",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_chest_force_correct_fear",

                        text:
                            "Lorsque le coffre s'entrouvre, quelqu'un frappe depuis l'intérieur.",

                        icon:
                            "👊",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_chest_force_correct_neutral",

                        text:
                            "{actor} est interrompu avant d'avoir réussi à ouvrir le coffre.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 30
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
                        id: "mansion_chest_force_wrong_lucid",

                        text:
                            "Le coffre contient un ancien journal expliquant plusieurs manifestations du manoir.",

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

                        weight: 18
                    },

                    {
                        id: "mansion_chest_force_wrong_curse",

                        text:
                            "Le coffre ne contient qu'un morceau de papier portant le nom de {actor}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        weight: 12
                    },

                    {
                        id: "mansion_chest_force_wrong_bad",

                        text:
                            "Une lame dissimulée dans le mécanisme coupe la main de {actor}.",

                        icon:
                            "🩸",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_chest_force_wrong_neutral",

                        text:
                            "Le coffre contient uniquement des papiers moisis.",

                        icon:
                            "📜",

                        effects: [],

                        weight: 45
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
                        id: "mansion_chest_wait_good",

                        text:
                            "En examinant le coffre ensemble, le groupe trouve un mécanisme permettant de l'ouvrir sans danger.",

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

                        weight: 20
                    },

                    {
                        id: "mansion_chest_wait_fear",

                        text:
                            "Le coffre s'ouvre seul lorsque tout le monde approche. Il est totalement vide, mais un rire en sort.",

                        icon:
                            "😈",

                        effects: [
                            {
                                target: "all",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_chest_wait_neutral",

                        text:
                            "Le coffre ne contient presque rien.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 55
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
                        id: "mansion_chest_wait_wrong_bad",

                        text:
                            "{actor} n'avait rien fait. La méfiance du groupe transforme pourtant la découverte en dispute.",

                        icon:
                            "😤",

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
                        id: "mansion_chest_wait_wrong_neutral",

                        text:
                            "Le coffre était toujours parfaitement fermé.",

                        icon:
                            "🧰",

                        effects: [],

                        weight: 65
                    }

                ]
            }

        }
    },


    // =====================================================
    // 7 - VOIX
    // =====================================================

    {
        id: "mansion_secret_voice",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_voice_follow",
                secretValue: "follow",

                title:
                    "👣 Suivre la voix",

                description:
                    "Entrer dans la pièce pour découvrir qui l'appelle."
            },

            {
                id: "mansion_voice_run",
                secretValue: "run",

                title:
                    "🏃 Partir",

                description:
                    "Ne surtout pas découvrir ce qui se trouve derrière."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il suivi la voix ?",

            description:
                "À vous de deviner.",

            choices: [

                {
                    id: "mansion_voice_guess_follow",
                    secretValue: "follow",

                    title:
                        "👣 Il l'a suivie",

                    description:
                        "{actor} est certainement allé voir."
                },

                {
                    id: "mansion_voice_guess_run",
                    secretValue: "run",

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
                        id: "mansion_voice_follow_fear",

                        text:
                            "La pièce est vide. Pourtant, la voix vient maintenant de juste derrière {actor}.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 40
                    },

                    {
                        id: "mansion_voice_follow_bad",

                        text:
                            "Une silhouette surgit de l'obscurité et projette {actor} au sol.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_voice_follow_possession",

                        text:
                            "La voix demande à {actor} de fermer les yeux. Lorsqu'il les rouvre, plusieurs minutes ont disparu.",

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
                        id: "mansion_voice_follow_neutral",

                        text:
                            "La pièce est complètement vide et la voix cesse immédiatement.",

                        icon:
                            "🌑",

                        effects: [],

                        weight: 15
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
                        id: "mansion_voice_follow_wrong_lucid",

                        text:
                            "La voix donne à {actor} une indication étrangement précise sur une autre partie du manoir.",

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
                        id: "mansion_voice_follow_wrong_fear",

                        text:
                            "Une présence invisible traverse {actor} avant de disparaître.",

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

                        weight: 30
                    },

                    {
                        id: "mansion_voice_follow_wrong_neutral",

                        text:
                            "La voix disparaît dès que {actor} entre dans la pièce.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 55
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
                        id: "mansion_voice_run_good",

                        text:
                            "{actor} s'éloigne sans se retourner. La voix disparaît et une sensation de contrôle revient.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_voice_run_neutral",

                        text:
                            "Quelques secondes après le départ de {actor}, la porte se referme violemment derrière lui.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 75
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
                        id: "mansion_voice_run_wrong_bad",

                        text:
                            "En croyant que {actor} a suivi la voix, le groupe perd du temps à le chercher alors qu'il avait simplement quitté le couloir.",

                        icon:
                            "😤",

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
                        id: "mansion_voice_run_wrong_neutral",

                        text:
                            "{actor} avait déjà quitté le couloir depuis longtemps.",

                        icon:
                            "🏃",

                        effects: [],

                        weight: 70
                    }

                ]
            }

        }
    },


    // =====================================================
    // 8 - MÉDAILLON
    // =====================================================

    {
        id: "mansion_secret_medallion",
        type: "secret_choice",
        baseWeight: 1,

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
                id: "mansion_medallion_wear",
                secretValue: "wear",

                title:
                    "📿 Le porter",

                description:
                    "Tester s'il possède réellement un pouvoir."
            },

            {
                id: "mansion_medallion_leave",
                secretValue: "leave",

                title:
                    "🚫 Le laisser",

                description:
                    "Un bijou qui murmure peut très bien rester ici."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il porté le médaillon ?",

            description:
                "Curiosité ou prudence ?",

            choices: [

                {
                    id: "mansion_medallion_guess_wear",
                    secretValue: "wear",

                    title:
                        "📿 Oui",

                    description:
                        "{actor} l'a probablement essayé."
                },

                {
                    id: "mansion_medallion_guess_leave",
                    secretValue: "leave",

                    title:
                        "🚫 Non",

                    description:
                        "{actor} a probablement résisté."
                }

            ]
        },

        outcomes: {

            wear_correct: {

                title:
                    "Sans surprise",

                icon:
                    "📿",

                variants: [

                    {
                        id: "mansion_medallion_wear_correct_good",

                        text:
                            "Le médaillon devient chaud et la présence oppressante du manoir semble reculer autour de {actor}.",

                        icon:
                            "✨",

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
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_medallion_wear_correct_bad",

                        text:
                            "Le médaillon serre brutalement le cou de {actor} comme s'il essayait de s'enfoncer dans sa peau.",

                        icon:
                            "😖",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_medallion_wear_correct_curse",

                        text:
                            "Le symbole du médaillon apparaît directement sur la poitrine de {actor}.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        weight: 17
                    },

                    {
                        id: "mansion_medallion_wear_correct_neutral",

                        text:
                            "Le médaillon reste froid et silencieux.",

                        icon:
                            "📿",

                        effects: [],

                        weight: 30
                    }

                ]
            },

            wear_wrong: {

                title:
                    "Personne n'était au courant",

                icon:
                    "🤫",

                variants: [

                    {
                        id: "mansion_medallion_wear_wrong_lucid",

                        text:
                            "Le médaillon révèle brièvement plusieurs symboles invisibles sur les murs.",

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

                        weight: 22
                    },

                    {
                        id: "mansion_medallion_wear_wrong_possession",

                        text:
                            "Le murmure du médaillon devient une voix claire qui donne désormais des ordres à {actor}.",

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
                        id: "mansion_medallion_wear_wrong_fear",

                        text:
                            "Le médaillon murmure le prénom de chaque membre du groupe alors qu'aucun d'eux n'est présent.",

                        icon:
                            "👂",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 23
                    },

                    {
                        id: "mansion_medallion_wear_wrong_neutral",

                        text:
                            "Rien ne se produit pour le moment.",

                        icon:
                            "📿",

                        effects: [],

                        weight: 40
                    }

                ]
            },

            leave_correct: {

                title:
                    "Prudent",

                icon:
                    "😌",

                variants: [

                    {
                        id: "mansion_medallion_leave_correct_good",

                        text:
                            "Dès que {actor} s'éloigne, le murmure disparaît. Il réalise qu'il vient probablement d'éviter un piège.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_medallion_leave_correct_neutral",

                        text:
                            "Le médaillon reste dans sa boîte.",

                        icon:
                            "📿",

                        effects: [],

                        weight: 75
                    }

                ]
            },

            leave_wrong: {

                title:
                    "Accusé pour rien",

                icon:
                    "🙄",

                variants: [

                    {
                        id: "mansion_medallion_leave_wrong_bad",

                        text:
                            "La méfiance autour du médaillon provoque une nouvelle dispute alors que {actor} ne l'avait même pas touché.",

                        icon:
                            "😒",

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
                        id: "mansion_medallion_leave_wrong_neutral",

                        text:
                            "{actor} avait simplement laissé le médaillon où il était.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 70
                    }

                ]
            }

        }
    },


    // =====================================================
    // 9 - PORTE DORÉE
    // SUITE DE LA CLÉ
    // =====================================================

    {
        id: "mansion_secret_golden_door",
        type: "secret_choice",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_secret_key_hidden"
            ]
        },

        title:
            "{actor} retrouve la porte de la clé dorée",

        category:
            "Suite",

        icon:
            "🚪",

        description:
            "Dans une aile isolée du manoir, {actor} découvre une porte ornée exactement du même symbole que la clé dorée cachée plus tôt.",

        choices: [

            {
                id: "mansion_golden_door_open",
                secretValue: "open",

                title:
                    "🔓 Ouvrir",

                description:
                    "Utiliser secrètement la clé."
            },

            {
                id: "mansion_golden_door_leave",
                secretValue: "leave",

                title:
                    "🚪 Ne pas ouvrir",

                description:
                    "Résister à la curiosité."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il utilisé sa clé ?",

            description:
                "À vous de deviner.",

            choices: [

                {
                    id: "mansion_golden_door_guess_open",
                    secretValue: "open",

                    title:
                        "🔓 Oui",

                    description:
                        "{actor} a ouvert la porte."
                },

                {
                    id: "mansion_golden_door_guess_leave",
                    secretValue: "leave",

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
                        id: "mansion_golden_open_correct_fear",

                        text:
                            "La porte révèle une pièce remplie de silhouettes immobiles. Toutes tournent simultanément la tête vers {actor}.",

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

                        weight: 42
                    },

                    {
                        id: "mansion_golden_open_correct_attack",

                        text:
                            "Quelque chose frappe {actor} depuis l'intérieur avant même que la porte soit complètement ouverte.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 28
                    },

                    {
                        id: "mansion_golden_open_correct_neutral",

                        text:
                            "La pièce derrière la porte est totalement vide.",

                        icon:
                            "🌑",

                        effects: [],

                        weight: 30
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
                        id: "mansion_golden_open_wrong_lucid",

                        text:
                            "La pièce contient des plans annotés du manoir et plusieurs avertissements.",

                        icon:
                            "🗺️",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "lucid",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 18
                    },

                    {
                        id: "mansion_golden_open_wrong_courage",

                        text:
                            "Derrière la porte se trouve une petite pièce paisible où aucun phénomène ne semble pouvoir entrer.",

                        icon:
                            "🕯️",

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
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 12
                    },

                    {
                        id: "mansion_golden_open_wrong_curse",

                        text:
                            "Une chaise se trouve au centre de la pièce. Le nom de {actor} est gravé dessus.",

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
                        id: "mansion_golden_open_wrong_bad",

                        text:
                            "Une présence surgit derrière la porte et frappe {actor}.",

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

                        weight: 25
                    },

                    {
                        id: "mansion_golden_open_wrong_neutral",

                        text:
                            "La pièce ne contient rien d'intéressant.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 30
                    }

                ]
            },

            leave_correct: {

                title:
                    "Une curiosité maîtrisée",

                icon:
                    "🛡️",

                variants: [

                    {
                        id: "mansion_golden_leave_correct_good",

                        text:
                            "{actor} s'éloigne de la porte. La clé cesse immédiatement de vibrer.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_golden_leave_correct_neutral",

                        text:
                            "{actor} conserve la clé et continue son chemin.",

                        icon:
                            "🗝️",

                        effects: [],

                        weight: 65
                    }

                ]
            },

            leave_wrong: {

                title:
                    "Plus prudent que prévu",

                icon:
                    "😅",

                variants: [

                    {
                        id: "mansion_golden_leave_wrong_fear",

                        text:
                            "Alors que personne ne pensait {actor} capable de résister, il s'éloigne. Derrière lui, quelque chose gratte lentement la porte.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_golden_leave_wrong_neutral",

                        text:
                            "{actor} avait finalement décidé de ne pas ouvrir.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 75
                    }

                ]
            }

        }
    },


    // =====================================================
    // 10 - LE LIVRE REVIENT
    // SUITE DU LIVRE INTERDIT
    // =====================================================

    {
        id: "mansion_secret_book_return",
        type: "secret_choice",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_secret_book_opened"
            ],

            not: [
                "mansion_secret_book_closed"
            ]
        },

        title:
            "Le livre interdit réapparaît devant {actor}",

        category:
            "Suite",

        icon:
            "📖",

        description:
            "Plusieurs pièces plus loin, le même livre est posé sur une table. La chaîne noire a disparu et une nouvelle page est ouverte.",

        choices: [

            {
                id: "mansion_book_return_read",
                secretValue: "read",

                title:
                    "📖 Lire la nouvelle page",

                description:
                    "Découvrir pourquoi le livre est revenu.",

                narrative: {
                    setFlags: [
                        "mansion_secret_book_read_again"
                    ]
                }
            },

            {
                id: "mansion_book_return_destroy",
                secretValue: "destroy",

                title:
                    "🔥 Détruire le livre",

                description:
                    "Essayer de mettre définitivement fin à cette histoire.",

                narrative: {
                    setFlags: [
                        "mansion_secret_book_destroyed"
                    ]
                }
            }

        ],

        guess: {

            title:
                "Que va faire {actor} maintenant ?",

            description:
                "Continuer à lire ou enfin détruire le livre ?",

            choices: [

                {
                    id: "mansion_book_return_guess_read",
                    secretValue: "read",

                    title:
                        "📖 Continuer à lire",

                    description:
                        "{actor} ne résistera pas une deuxième fois."
                },

                {
                    id: "mansion_book_return_guess_destroy",
                    secretValue: "destroy",

                    title:
                        "🔥 Le détruire",

                    description:
                        "{actor} en a probablement assez."
                }

            ]
        },

        outcomes: {

            read_correct: {

                title:
                    "Toujours aussi curieux",

                icon:
                    "📖",

                variants: [

                    {
                        id: "mansion_book_return_read_correct_fear",

                        text:
                            "La nouvelle page raconte précisément les dernières minutes vécues par {actor}. La phrase suivante décrit ce qu'il fera dans quelques secondes.",

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

                        weight: 38
                    },

                    {
                        id: "mansion_book_return_read_correct_curse",

                        text:
                            "La dernière ligne indique : « Il appartient désormais au livre. »",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target: "actor",
                                status: "cursed"
                            }
                        ],

                        weight: 17
                    },

                    {
                        id: "mansion_book_return_read_correct_possession",

                        text:
                            "{actor} tente de refermer le livre, mais ses mains tournent seules la page suivante.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 15
                    },

                    {
                        id: "mansion_book_return_read_correct_neutral",

                        text:
                            "La page ne contient qu'une phrase : « Pas encore. »",

                        icon:
                            "📖",

                        effects: [],

                        weight: 30
                    }

                ]
            },

            read_wrong: {

                title:
                    "Il l'a encore ouvert",

                icon:
                    "🤦",

                variants: [

                    {
                        id: "mansion_book_return_read_wrong_lucid",

                        text:
                            "Personne ne pensait que {actor} relirait le livre. Pourtant, il y découvre un schéma permettant de reconnaître certaines illusions.",

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

                        weight: 18
                    },

                    {
                        id: "mansion_book_return_read_wrong_bad",

                        text:
                            "Une main noire sort brièvement de la page et saisit le poignet de {actor}.",

                        icon:
                            "✋",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_book_return_read_wrong_fear",

                        text:
                            "Les pages affichent maintenant les visages des autres joueurs, les yeux fermés.",

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

                        weight: 32
                    },

                    {
                        id: "mansion_book_return_read_wrong_neutral",

                        text:
                            "Aucune nouvelle information n'apparaît.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 20
                    }

                ]
            },

            destroy_correct: {

                title:
                    "Enfin !",

                icon:
                    "🔥",

                variants: [

                    {
                        id: "mansion_book_return_destroy_correct_good",

                        text:
                            "Le livre brûle complètement. Une pression qui suivait {actor} depuis son ouverture disparaît enfin.",

                        icon:
                            "✨",

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
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_book_return_destroy_correct_bad",

                        text:
                            "Les pages prennent feu mais une silhouette noire s'en échappe avant qu'elles disparaissent.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_book_return_destroy_correct_curse",

                        text:
                            "Le livre brûle. Son symbole apparaît cependant sur la main de {actor}.",

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
                        id: "mansion_book_return_destroy_correct_neutral",

                        text:
                            "Le livre se consume sans autre manifestation.",

                        icon:
                            "🔥",

                        effects: [],

                        weight: 15
                    }

                ]
            },

            destroy_wrong: {

                title:
                    "La curiosité avait ses limites",

                icon:
                    "🔥",

                variants: [

                    {
                        id: "mansion_book_return_destroy_wrong_good",

                        text:
                            "Contre toutes les attentes, {actor} détruit réellement le livre et reprend confiance.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_book_return_destroy_wrong_bad",

                        text:
                            "Le groupe ne croyait pas {actor} capable de détruire le livre. Pendant qu'ils discutent, les cendres commencent à écrire sur le sol.",

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
                        id: "mansion_book_return_destroy_wrong_neutral",

                        text:
                            "Le livre disparaît dans les flammes.",

                        icon:
                            "🔥",

                        effects: [],

                        weight: 40
                    }

                ]
            }

        }
    },


    // =====================================================
    // 11 - NOUVEAU : MIROIR COUVERT
    // =====================================================

    {
        id: "mansion_secret_covered_mirror",
        type: "secret_choice",
        baseWeight: 0.9,

        title:
            "{actor} découvre un miroir recouvert d'un drap",

        category:
            "Choix secret",

        icon:
            "🪞",

        description:
            "Un grand miroir est entièrement dissimulé sous un tissu noir. Une phrase est brodée dessus : « Ne regarde pas ton reflet après minuit. »",

        choices: [

            {
                id: "mansion_covered_mirror_reveal",
                secretValue: "reveal",

                title:
                    "🪞 Retirer le tissu",

                description:
                    "Vérifier ce que cache le miroir.",

                narrative: {
                    setFlags: [
                        "mansion_secret_mirror_seen"
                    ],

                    nextSituationBoosts: [
                        {
                            id: "mansion_secret_reflection_return",
                            weight: 30
                        }
                    ]
                }
            },

            {
                id: "mansion_covered_mirror_leave",
                secretValue: "leave",

                title:
                    "🚪 Le laisser couvert",

                description:
                    "Respecter pour une fois un avertissement parfaitement clair."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il regardé dans le miroir ?",

            description:
                "Vous commencez à connaître sa curiosité.",

            choices: [

                {
                    id: "mansion_covered_mirror_guess_reveal",
                    secretValue: "reveal",

                    title:
                        "🪞 Oui",

                    description:
                        "{actor} a retiré le tissu."
                },

                {
                    id: "mansion_covered_mirror_guess_leave",
                    secretValue: "leave",

                    title:
                        "🚪 Non",

                    description:
                        "{actor} a laissé le miroir tranquille."
                }

            ]
        },

        outcomes: {

            reveal_correct: {

                title:
                    "Évidemment",

                icon:
                    "🪞",

                variants: [

                    {
                        id: "mansion_mirror_reveal_correct_fear",

                        text:
                            "Le reflet de {actor} reste immobile alors qu'il recule du miroir.",

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
                        id: "mansion_mirror_reveal_correct_possession",

                        text:
                            "Le reflet sourit. {actor}, lui, ne sourit pas.",

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

                        weight: 18
                    },

                    {
                        id: "mansion_mirror_reveal_correct_neutral",

                        text:
                            "Le miroir semble parfaitement normal. Ce qui, dans ce manoir, n'est pas particulièrement rassurant.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 37
                    }

                ]
            },

            reveal_wrong: {

                title:
                    "Curiosité discrète",

                icon:
                    "🤫",

                variants: [

                    {
                        id: "mansion_mirror_reveal_wrong_lucid",

                        text:
                            "Dans le reflet, {actor} remarque une porte qui n'existe pas derrière lui et mémorise son symbole.",

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
                        id: "mansion_mirror_reveal_wrong_fear",

                        text:
                            "Le reflet de {actor} se rapproche de la glace alors que le véritable joueur recule.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 30
                    },

                    {
                        id: "mansion_mirror_reveal_wrong_neutral",

                        text:
                            "Rien ne se produit immédiatement.",

                        icon:
                            "🪞",

                        effects: [],

                        weight: 50
                    }

                ]
            },

            leave_correct: {

                title:
                    "La sagesse existe donc",

                icon:
                    "😌",

                variants: [

                    {
                        id: "mansion_mirror_leave_correct_good",

                        text:
                            "{actor} quitte la pièce sans regarder. Il se sent immédiatement plus calme.",

                        icon:
                            "🛡️",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
                                }
                            }
                        ],

                        weight: 35
                    },

                    {
                        id: "mansion_mirror_leave_correct_neutral",

                        text:
                            "Le miroir reste couvert.",

                        icon:
                            "🪞",

                        effects: [],

                        weight: 65
                    }

                ]
            },

            leave_wrong: {

                title:
                    "Pas si curieux",

                icon:
                    "😅",

                variants: [

                    {
                        id: "mansion_mirror_leave_wrong_bad",

                        text:
                            "Le groupe était persuadé que {actor} avait regardé. Pendant la discussion, quelque chose frappe doucement derrière le tissu.",

                        icon:
                            "👊",

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
                        id: "mansion_mirror_leave_wrong_neutral",

                        text:
                            "{actor} avait simplement laissé le miroir couvert.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 65
                    }

                ]
            }

        }
    },


    // =====================================================
    // 12 - NOUVEAU : LE REFLET REVIENT
    // SUITE DU MIROIR
    // =====================================================

    {
        id: "mansion_secret_reflection_return",
        type: "secret_choice",
        baseWeight: 1,

        requirements: {
            all: [
                "mansion_secret_mirror_seen"
            ]
        },

        title:
            "{actor} rencontre son propre reflet dans le couloir",

        category:
            "Suite",

        icon:
            "👤",

        description:
            "Au bout du couloir se tient une copie parfaite de {actor}. Elle lui fait signe de la suivre sans prononcer un seul mot.",

        choices: [

            {
                id: "mansion_reflection_follow",
                secretValue: "follow",

                title:
                    "👣 Suivre son double",

                description:
                    "Découvrir où il veut conduire {actor}."
            },

            {
                id: "mansion_reflection_refuse",
                secretValue: "refuse",

                title:
                    "🚫 Refuser",

                description:
                    "Faire demi-tour immédiatement."
            }

        ],

        guess: {

            title:
                "{actor} a-t-il suivi sa propre copie ?",

            description:
                "Décision parfaitement raisonnable en perspective.",

            choices: [

                {
                    id: "mansion_reflection_guess_follow",
                    secretValue: "follow",

                    title:
                        "👣 Oui",

                    description:
                        "{actor} a suivi son double."
                },

                {
                    id: "mansion_reflection_guess_refuse",
                    secretValue: "refuse",

                    title:
                        "🚫 Non",

                    description:
                        "{actor} a préféré partir."
                }

            ]
        },

        outcomes: {

            follow_correct: {

                title:
                    "Vous le connaissez beaucoup trop bien",

                icon:
                    "👥",

                variants: [

                    {
                        id: "mansion_reflection_follow_correct_bad",

                        text:
                            "Le double mène {actor} devant un miroir. Lorsqu'il regarde dedans, seul le double possède un reflet.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 2
                                }
                            }
                        ],

                        weight: 42
                    },

                    {
                        id: "mansion_reflection_follow_correct_possession",

                        text:
                            "Le double se retourne et traverse directement le corps de {actor}.",

                        icon:
                            "👿",

                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "possessed",
                                    duration: 2
                                }
                            }
                        ],

                        weight: 23
                    },

                    {
                        id: "mansion_reflection_follow_correct_neutral",

                        text:
                            "Le double disparaît au détour d'un couloir.",

                        icon:
                            "🌫️",

                        effects: [],

                        weight: 35
                    }

                ]
            },

            follow_wrong: {

                title:
                    "Le secret était presque parfait",

                icon:
                    "🤫",

                variants: [

                    {
                        id: "mansion_reflection_follow_wrong_lucid",

                        text:
                            "Le double mène {actor} devant un plan du manoir puis disparaît.",

                        icon:
                            "🗺️",

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
                        id: "mansion_reflection_follow_wrong_curse",

                        text:
                            "Le double s'arrête et murmure : « Maintenant nous sommes deux. »",

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
                        id: "mansion_reflection_follow_wrong_fear",

                        text:
                            "Le double marche à reculons sans jamais détourner les yeux de {actor}.",

                        icon:
                            "👁️",

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
                    },

                    {
                        id: "mansion_reflection_follow_wrong_neutral",

                        text:
                            "Le double disparaît sans rien révéler.",

                        icon:
                            "🌫️",

                        effects: [],

                        weight: 35
                    }

                ]
            },

            refuse_correct: {

                title:
                    "Pas cette fois",

                icon:
                    "🛡️",

                variants: [

                    {
                        id: "mansion_reflection_refuse_correct_good",

                        text:
                            "{actor} refuse de suivre son double. Celui-ci sourit puis disparaît. Résister à l'apparition lui redonne confiance.",

                        icon:
                            "💪",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: -1
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

                        weight: 40
                    },

                    {
                        id: "mansion_reflection_refuse_correct_fear",

                        text:
                            "Le double reste immobile au fond du couloir et observe {actor} partir sans jamais disparaître.",

                        icon:
                            "👤",

                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fear",
                                    amount: 1
                                }
                            }
                        ],

                        weight: 25
                    },

                    {
                        id: "mansion_reflection_refuse_correct_neutral",

                        text:
                            "{actor} quitte simplement le couloir.",

                        icon:
                            "🚪",

                        effects: [],

                        weight: 35
                    }

                ]
            },

            refuse_wrong: {

                title:
                    "Vous aviez parié sur la curiosité",

                icon:
                    "😅",

                variants: [

                    {
                        id: "mansion_reflection_refuse_wrong_bad",

                        text:
                            "Alors que tout le monde croyait {actor} parti derrière son double, plusieurs joueurs commencent à chercher inutilement dans le manoir.",

                        icon:
                            "😤",

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
                        id: "mansion_reflection_refuse_wrong_neutral",

                        text:
                            "{actor} avait simplement refusé de suivre l'apparition.",

                        icon:
                            "😐",

                        effects: [],

                        weight: 70
                    }

                ]
            }

        }
    }

];