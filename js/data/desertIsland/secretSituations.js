export const SECRET_SITUATIONS = [

    // =====================================================
    // 1 - RÉSERVE DE NOURRITURE
    // =====================================================

    {
        id:
            "desert_secret_food",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve une réserve de nourriture",

        category:
            "Choix secret",

        icon:
            "🥫",

        description:
            "{actor} découvre une caisse remplie de nourriture. Personne d'autre ne semble l'avoir remarquée.",

        choices: [

            {
                id:
                    "desert_food_keep",

                secretValue:
                    "keep",

                title:
                    "😈 Tout garder",

                description:
                    "Cacher les provisions et ne rien dire.",

                narrative: {

                    setFlags: [
                        "secret_food_hidden"
                    ],

                    removeFlags: [
                        "secret_food_shared"
                    ]

                }
            },

            {
                id:
                    "desert_food_share",

                secretValue:
                    "share",

                title:
                    "🤝 Partager",

                description:
                    "Prévenir les autres et partager les provisions.",

                narrative: {

                    setFlags: [
                        "secret_food_shared"
                    ],

                    removeFlags: [
                        "secret_food_hidden"
                    ]

                }
            }

        ],


        guess: {

            title:
                "Qu'a choisi {actor} ?",

            description:
                "Les autres survivants doivent deviner si {actor} a pensé au groupe... ou uniquement à lui-même.",

            choices: [

                {
                    id:
                        "desert_food_guess_keep",

                    secretValue:
                        "keep",

                    title:
                        "😈 Tout garder",

                    description:
                        "Vous pensez que {actor} a caché la nourriture."
                },

                {
                    id:
                        "desert_food_guess_share",

                    secretValue:
                        "share",

                    title:
                        "🤝 Partager",

                    description:
                        "Vous pensez que {actor} a décidé de partager."
                }

            ]

        },


        outcomes: {

            keep_correct: {

                icon:
                    "🎯",

                title:
                    "Démasqué !",

                variants: [

                    {
                        id:
                            "food_keep_correct_bad",

                        icon:
                            "😡",

                        text:
                            "Le groupe découvre la cachette de {actor}. La confrontation dégénère et {actor} ressort assez mal de l'histoire.",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            },

                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            52
                    },

                    {
                        id:
                            "food_keep_correct_neutral",

                        icon:
                            "😬",

                        text:
                            "{actor} est démasqué mais restitue immédiatement la nourriture avant que la situation ne dégénère.",

                        effects:
                            [],

                        weight:
                            38
                    },

                    {
                        id:
                            "food_keep_correct_group",

                        icon:
                            "🥫",

                        text:
                            "Le groupe récupère les provisions cachées et découvre qu'une petite partie est encore parfaitement consommable.",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            10
                    }

                ]

            },


            keep_wrong: {

                icon:
                    "😏",

                title:
                    "Bluff réussi",

                variants: [

                    {
                        id:
                            "food_keep_wrong_good",

                        icon:
                            "😋",

                        text:
                            "Personne ne soupçonne {actor}, qui profite discrètement de plusieurs conserves encore parfaitement consommables.",

                        effects: [
                            {
                                target:
                                    "actor",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "actor",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "food_keep_wrong_small",

                        icon:
                            "🥫",

                        text:
                            "{actor} garde la caisse pour lui, mais les portions sont beaucoup plus petites que prévu.",

                        effects: [
                            {
                                target:
                                    "actor",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id:
                            "food_keep_wrong_bad",

                        icon:
                            "🤢",

                        text:
                            "Le secret fonctionne parfaitement. La nourriture, beaucoup moins : plusieurs conserves sont avariées.",

                        effects: [
                            {
                                target:
                                    "actor",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "food_keep_wrong_neutral",

                        icon:
                            "😐",

                        text:
                            "Personne ne découvre la cachette, mais la plupart des provisions sont déjà inutilisables.",

                        effects:
                            [],

                        weight:
                            35
                    }

                ]

            },


            share_correct: {

                icon:
                    "🤝",

                title:
                    "Confiance méritée",

                variants: [

                    {
                        id:
                            "food_share_correct_good",

                        icon:
                            "😋",

                        text:
                            "Le groupe avait raison de faire confiance à {actor}. Les meilleures conserves sont partagées équitablement.",

                        effects: [
                            {
                                target:
                                    "all",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "food_share_correct_neutral",

                        icon:
                            "🥫",

                        text:
                            "{actor} partage réellement la caisse, mais les quantités sont trop faibles pour faire une différence importante.",

                        effects: [
                            {
                                target:
                                    "all",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            50
                    },

                    {
                        id:
                            "food_share_correct_bad",

                        icon:
                            "🤢",

                        text:
                            "La bonne intention de {actor} ne suffit pas : une partie des conserves était avariée.",

                        effects: [
                            {
                                target:
                                    "all",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            30
                    }

                ]

            },


            share_wrong: {

                icon:
                    "💔",

                title:
                    "Accusé à tort",

                variants: [

                    {
                        id:
                            "food_share_wrong_bad",

                        icon:
                            "😡",

                        text:
                            "{actor} voulait réellement partager, mais les accusations provoquent une dispute interminable et épuisante.",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            52
                    },

                    {
                        id:
                            "food_share_wrong_neutral",

                        icon:
                            "😒",

                        text:
                            "Après de longues explications, le groupe comprend finalement que {actor} disait la vérité.",

                        effects:
                            [],

                        weight:
                            48
                    }

                ]

            }

        }

    },


    // =====================================================
    // 2 - SOURCE D'EAU
    // =====================================================

    {
        id:
            "desert_secret_water",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre une source d'eau",

        category:
            "Choix secret",

        icon:
            "💧",

        description:
            "Derrière plusieurs rochers, {actor} découvre une petite source à l'eau parfaitement claire.",

        choices: [

            {
                id:
                    "desert_water_hide",

                secretValue:
                    "hide",

                title:
                    "🤫 Garder l'endroit secret",

                description:
                    "Profiter seul de la source.",

                narrative: {

                    setFlags: [
                        "secret_water_hidden"
                    ],

                    removeFlags: [
                        "secret_water_shared"
                    ]

                }
            },

            {
                id:
                    "desert_water_reveal",

                secretValue:
                    "reveal",

                title:
                    "📣 Prévenir les autres",

                description:
                    "Ramener tout le monde jusqu'à la source.",

                narrative: {

                    setFlags: [
                        "secret_water_shared"
                    ],

                    removeFlags: [
                        "secret_water_hidden"
                    ]

                }
            }

        ],


        guess: {

            title:
                "{actor} vous aurait-il réellement parlé de la source ?",

            description:
                "À vous de deviner sa décision.",

            choices: [

                {
                    id:
                        "desert_water_guess_hide",

                    secretValue:
                        "hide",

                    title:
                        "🤫 Il l'a cachée",

                    description:
                        "{actor} comptait garder l'eau pour lui."
                },

                {
                    id:
                        "desert_water_guess_reveal",

                    secretValue:
                        "reveal",

                    title:
                        "💧 Il voulait partager",

                    description:
                        "{actor} comptait montrer la source."
                }

            ]

        },


        outcomes: {

            hide_correct: {

                icon:
                    "👀",

                title:
                    "Pris sur le fait",

                variants: [

                    {
                        id:
                            "water_hide_correct_bad",

                        text:
                            "Les autres retrouvent {actor} en train de boire près de la source. La discussion est particulièrement tendue.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "water_hide_correct_neutral",

                        text:
                            "{actor} est démasqué avant d'avoir réellement profité de la source et accepte finalement de la partager.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            45
                    }

                ]

            },


            hide_wrong: {

                icon:
                    "😎",

                title:
                    "Personne n'a rien vu",

                variants: [

                    {
                        id:
                            "water_hide_wrong_good",

                        text:
                            "{actor} profite seul de la source et récupère après plusieurs heures sous le soleil.",

                        icon:
                            "💧",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -2
                                }
                            },

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
                            "water_hide_wrong_small",

                        text:
                            "{actor} boit tranquillement et reprend un peu d'énergie.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            30
                    },

                    {
                        id:
                            "water_hide_wrong_poison",

                        text:
                            "Personne ne découvre la source... mais quelques heures plus tard, {actor} commence à se sentir sérieusement malade.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "actor",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "water_hide_wrong_neutral",

                        text:
                            "Le secret est parfaitement gardé, mais le débit est trop faible pour que la source soit réellement utile.",

                        icon:
                            "💧",

                        effects:
                            [],

                        weight:
                            35
                    }

                ]

            },


            reveal_correct: {

                icon:
                    "💦",

                title:
                    "Bonne intuition",

                variants: [

                    {
                        id:
                            "water_reveal_correct_good",

                        text:
                            "{actor} comptait effectivement partager. Tout le monde peut boire et récupérer.",

                        icon:
                            "💧",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            28
                    },

                    {
                        id:
                            "water_reveal_correct_neutral",

                        text:
                            "La source produit juste assez d'eau pour remplir les gourdes. C'est peu, mais cela reste précieux.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            52
                    },

                    {
                        id:
                            "water_reveal_correct_bad",

                        text:
                            "En approchant tous ensemble, le groupe dérange un immense nid d'insectes.",

                        icon:
                            "🐝",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            20
                    }

                ]

            },


            reveal_wrong: {

                icon:
                    "😒",

                title:
                    "Quelle confiance...",

                variants: [

                    {
                        id:
                            "water_reveal_wrong_bad",

                        text:
                            "Les accusations font perdre beaucoup de temps alors que {actor} voulait réellement partager sa découverte.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id:
                            "water_reveal_wrong_neutral",

                        text:
                            "Le groupe finit par comprendre que {actor} disait vrai et rejoint finalement la source.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            52
                    }

                ]

            }

        }

    },


    // =====================================================
    // 3 - SAC À DOS
    // DÉBUT MINI-HISTOIRE
    // =====================================================

    {
        id:
            "desert_secret_backpack",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre le sac d'un ancien naufragé",

        category:
            "Choix secret",

        icon:
            "🎒",

        description:
            "À moitié enterré dans le sable, un vieux sac contient encore plusieurs objets.",

        choices: [

            {
                id:
                    "desert_backpack_search",

                secretValue:
                    "search",

                title:
                    "🎒 Fouiller le sac",

                description:
                    "Prendre discrètement ce qui pourrait servir.",

                narrative: {

                    setFlags: [
                        "secret_backpack_opened"
                    ],

                    removeFlags: [
                        "secret_backpack_shared"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_secret_medicine",

                            weight:
                                28
                        }
                    ]

                }
            },

            {
                id:
                    "desert_backpack_call",

                secretValue:
                    "call",

                title:
                    "📣 Appeler les autres",

                description:
                    "Attendre tout le monde avant de l'ouvrir.",

                narrative: {

                    setFlags: [
                        "secret_backpack_shared"
                    ],

                    removeFlags: [
                        "secret_backpack_opened"
                    ]

                }
            }

        ],


        guess: {

            title:
                "Qu'a fait {actor} avec le sac ?",

            description:
                "Le groupe doit décider s'il lui fait confiance.",

            choices: [

                {
                    id:
                        "desert_backpack_guess_search",

                    secretValue:
                        "search",

                    title:
                        "🎒 Il l'a fouillé",

                    description:
                        "Vous pensez que {actor} s'est servi avant les autres."
                },

                {
                    id:
                        "desert_backpack_guess_call",

                    secretValue:
                        "call",

                    title:
                        "📣 Il vous a appelés",

                    description:
                        "Vous pensez que {actor} a attendu le groupe."
                }

            ]

        },


        outcomes: {

            search_correct: {

                icon:
                    "🫵",

                title:
                    "Grillé",

                variants: [

                    {
                        id:
                            "backpack_search_correct_bad",

                        text:
                            "Le groupe comprend que {actor} a fouillé le sac seul et récupère presque tout ce qu'il avait pris.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            55,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_medicine",

                                    weight:
                                        5
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "backpack_search_correct_neutral",

                        text:
                            "{actor} avoue immédiatement et rend les objets. Le groupe laisse tomber l'affaire.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            45,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_medicine",

                                    weight:
                                        12
                                }
                            ]

                        }
                    }

                ]

            },


            search_wrong: {

                icon:
                    "🎁",

                title:
                    "Butin discret",

                variants: [

                    {
                        id:
                            "backpack_search_wrong_tools",

                        text:
                            "Personne ne soupçonne {actor}, qui récupère quelques outils encore utilisables.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            25,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_medicine",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "backpack_search_wrong_food",

                        text:
                            "{actor} trouve une petite ration protégée de l'humidité.",

                        icon:
                            "🥫",

                        effects: [
                            {
                                target:
                                    "actor",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_medicine",

                                    weight:
                                        32
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "backpack_search_wrong_bad",

                        text:
                            "Une araignée s'était installée au fond du sac et mord {actor} lorsqu'il plonge la main à l'intérieur.",

                        icon:
                            "🕷️",

                        effects: [
                            {
                                target:
                                    "actor",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_medicine",

                                    weight:
                                        36
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "backpack_search_wrong_neutral",

                        text:
                            "Le sac contient surtout des vêtements détruits par l'humidité.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            35,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_medicine",

                                    weight:
                                        18
                                }
                            ]

                        }
                    }

                ]

            },


            call_correct: {

                icon:
                    "👏",

                title:
                    "Esprit d'équipe",

                variants: [

                    {
                        id:
                            "backpack_call_correct_good",

                        text:
                            "Le groupe avait raison de faire confiance à {actor}. Plusieurs outils sont encore utilisables.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id:
                            "backpack_call_correct_food",

                        text:
                            "Une petite ration est partagée entre les survivants.",

                        icon:
                            "🥫",

                        effects: [
                            {
                                target:
                                    "all",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "backpack_call_correct_neutral",

                        text:
                            "Tout le monde ouvre le sac ensemble, mais son contenu n'a rien d'exceptionnel.",

                        icon:
                            "🎒",

                        effects:
                            [],

                        weight:
                            60
                    }

                ]

            },


            call_wrong: {

                icon:
                    "😑",

                title:
                    "Sympa la confiance",

                variants: [

                    {
                        id:
                            "backpack_call_wrong_bad",

                        text:
                            "{actor} n'avait rien pris, mais les accusations font perdre une bonne partie de la journée.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "backpack_call_wrong_neutral",

                        text:
                            "Le malentendu est dissipé avant que la situation ne dégénère.",

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
    // 4 - RADEAU
    // DÉBUT MINI-HISTOIRE
    // =====================================================

    {
        id:
            "desert_secret_raft",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} pense pouvoir construire un radeau",

        category:
            "Choix secret",

        icon:
            "🛶",

        description:
            "{actor} remarque suffisamment de bois et de cordes pour tenter de fabriquer un petit radeau.",

        choices: [

            {
                id:
                    "desert_raft_escape",

                secretValue:
                    "escape",

                title:
                    "🏃 Partir seul",

                description:
                    "Construire discrètement un radeau pour tenter sa chance.",

                narrative: {

                    setFlags: [
                        "secret_raft_project",
                        "secret_raft_solo"
                    ],

                    removeFlags: [
                        "secret_raft_team"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_secret_flare",

                            weight:
                                22
                        }
                    ]

                }
            },

            {
                id:
                    "desert_raft_team",

                secretValue:
                    "team",

                title:
                    "🪵 Construire ensemble",

                description:
                    "Présenter l'idée au groupe.",

                narrative: {

                    setFlags: [
                        "secret_raft_project",
                        "secret_raft_team"
                    ],

                    removeFlags: [
                        "secret_raft_solo"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_secret_flare",

                            weight:
                                18
                        }
                    ]

                }
            }

        ],


        guess: {

            title:
                "Quel était le véritable plan de {actor} ?",

            description:
                "Tentative d'évasion en solitaire ou projet collectif ?",

            choices: [

                {
                    id:
                        "desert_raft_guess_escape",

                    secretValue:
                        "escape",

                    title:
                        "🏃 Partir seul",

                    description:
                        "{actor} comptait abandonner le groupe."
                },

                {
                    id:
                        "desert_raft_guess_team",

                    secretValue:
                        "team",

                    title:
                        "🤝 Construire ensemble",

                    description:
                        "{actor} comptait proposer son idée à tout le monde."
                }

            ]

        },


        outcomes: {

            escape_correct: {

                icon:
                    "🌊",

                title:
                    "Plan découvert",

                variants: [

                    {
                        id:
                            "raft_escape_correct_bad",

                        text:
                            "Le groupe découvre le radeau secret et démonte une partie de la construction.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            60,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare",

                                    weight:
                                        4
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "raft_escape_correct_neutral",

                        text:
                            "{actor} est démasqué avant d'avoir terminé son radeau.",

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
                                        "desert_secret_flare",

                                    weight:
                                        8
                                }
                            ]

                        }
                    }

                ]

            },


            escape_wrong: {

                icon:
                    "⛵",

                title:
                    "Plan secret",

                variants: [

                    {
                        id:
                            "raft_escape_wrong_good",

                        text:
                            "Personne ne soupçonne {actor}. Le radeau commence réellement à prendre forme.",

                        icon:
                            "🛶",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare",

                                    weight:
                                        36
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "raft_escape_wrong_tired",

                        text:
                            "Construire seul prend énormément de temps. Le projet avance, mais {actor} termine épuisé.",

                        icon:
                            "🥵",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            45,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare",

                                    weight:
                                        24
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "raft_escape_wrong_neutral",

                        text:
                            "Le secret reste intact, mais la construction est beaucoup plus complexe que prévu.",

                        icon:
                            "🪵",

                        effects:
                            [],

                        weight:
                            35,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare",

                                    weight:
                                        18
                                }
                            ]

                        }
                    }

                ]

            },


            team_correct: {

                icon:
                    "🪵",

                title:
                    "Tous ensemble",

                variants: [

                    {
                        id:
                            "raft_team_correct_good",

                        text:
                            "Le groupe avait raison de faire confiance à {actor}. En travaillant ensemble, le radeau progresse très rapidement.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id:
                            "raft_team_correct_neutral",

                        text:
                            "Tout le monde accepte de travailler. La construction progresse lentement mais sûrement.",

                        icon:
                            "🛶",

                        effects:
                            [],

                        weight:
                            55
                    },

                    {
                        id:
                            "raft_team_correct_tired",

                        text:
                            "Le travail collectif fonctionne, mais plusieurs heures sont nécessaires pour assembler la structure.",

                        icon:
                            "🥵",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            20
                    }

                ]

            },


            team_wrong: {

                icon:
                    "🤦",

                title:
                    "Paranoïa collective",

                variants: [

                    {
                        id:
                            "raft_team_wrong_bad",

                        text:
                            "{actor} voulait réellement aider tout le monde, mais les accusations font perdre une grande partie de la journée.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            48
                    },

                    {
                        id:
                            "raft_team_wrong_neutral",

                        text:
                            "Après de longues explications, tout le monde comprend finalement le véritable projet de {actor}.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            52
                    }

                ]

            }

        }

    },


    // =====================================================
    // 5 - FRUITS ÉTRANGES
    // =====================================================

    {
        id:
            "desert_secret_fruit",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre des fruits inconnus",

        category:
            "Choix secret",

        icon:
            "🍈",

        description:
            "Un arbre porte de gros fruits inconnus. Ils semblent délicieux, mais personne ne sait s'ils sont comestibles.",

        choices: [

            {
                id:
                    "desert_fruit_eat",

                secretValue:
                    "eat",

                title:
                    "😋 Les tester soi-même",

                description:
                    "Prendre personnellement le risque."
            },

            {
                id:
                    "desert_fruit_others",

                secretValue:
                    "others",

                title:
                    "😈 Les proposer aux autres",

                description:
                    "Laisser le groupe servir de cobaye."
            }

        ],


        guess: {

            title:
                "Qui {actor} comptait-il utiliser comme cobaye ?",

            description:
                "À vous de juger son courage... ou sa fourberie.",

            choices: [

                {
                    id:
                        "desert_fruit_guess_eat",

                    secretValue:
                        "eat",

                    title:
                        "😋 Lui-même",

                    description:
                        "{actor} comptait goûter le fruit."
                },

                {
                    id:
                        "desert_fruit_guess_others",

                    secretValue:
                        "others",

                    title:
                        "😈 Les autres",

                    description:
                        "{actor} comptait vous laisser tester."
                }

            ]

        },


        outcomes: {

            eat_correct: {

                icon:
                    "🍈",

                title:
                    "Courage reconnu",

                variants: [

                    {
                        id:
                            "fruit_eat_correct_good",

                        text:
                            "{actor} avait réellement décidé de servir de cobaye. Les fruits sont excellents.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target:
                                    "actor",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "fruit_eat_correct_bad",

                        text:
                            "{actor} avait réellement décidé de prendre le risque. Malheureusement, le fruit est toxique.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "actor",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "fruit_eat_correct_neutral",

                        text:
                            "Le fruit a un goût terrible mais ne semble provoquer aucun effet.",

                        icon:
                            "😖",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            27
                    }

                ]

            },


            eat_wrong: {

                icon:
                    "😤",

                title:
                    "Soupçonné à tort",

                variants: [

                    {
                        id:
                            "fruit_eat_wrong_bad",

                        text:
                            "{actor} était prêt à prendre le risque lui-même. La méfiance du groupe provoque une longue dispute.",

                        icon:
                            "😒",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "fruit_eat_wrong_neutral",

                        text:
                            "Le groupe découvre finalement que {actor} disait vrai. Personne ne touche aux fruits.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            55
                    }

                ]

            },


            others_correct: {

                icon:
                    "🫵",

                title:
                    "On te connaît trop bien",

                variants: [

                    {
                        id:
                            "fruit_others_correct_bad",

                        text:
                            "Tout le monde comprend immédiatement que {actor} cherchait un cobaye. Personne ne touche au fruit.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "fruit_others_correct_neutral",

                        text:
                            "{actor} est démasqué avant que quelqu'un ne mange quoi que ce soit.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            45
                    }

                ]

            },


            others_wrong: {

                icon:
                    "🤢",

                title:
                    "Le piège parfait",

                variants: [

                    {
                        id:
                            "fruit_others_wrong_bad",

                        text:
                            "Le groupe faisait confiance à {actor}. Mauvaise idée : les fruits étaient toxiques.",

                        icon:
                            "🤮",

                        effects: [
                            {
                                target:
                                    "others",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            62
                    },

                    {
                        id:
                            "fruit_others_wrong_good",

                        text:
                            "Le groupe goûte prudemment. Contre toute attente, les fruits sont parfaitement comestibles.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id:
                            "fruit_others_wrong_neutral",

                        text:
                            "Les fruits sont infects mais heureusement sans danger.",

                        icon:
                            "😖",

                        effects:
                            [],

                        weight:
                            23
                    }

                ]

            }

        }

    },


    // =====================================================
    // 6 - FUSÉE DE DÉTRESSE
    // =====================================================

    {
        id:
            "desert_secret_flare",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve une fusée de détresse",

        category:
            "Choix secret",

        icon:
            "🚨",

        description:
            "Une seule fusée de détresse encore utilisable apparaît dans une vieille caisse.",

        choices: [

            {
                id:
                    "desert_flare_now",

                secretValue:
                    "now",

                title:
                    "🚨 La tirer maintenant",

                description:
                    "Tenter immédiatement d'attirer l'attention.",

                narrative: {

                    setFlags: [
                        "secret_flare_used"
                    ],

                    removeFlags: [
                        "secret_flare_saved"
                    ]

                }
            },

            {
                id:
                    "desert_flare_save",

                secretValue:
                    "save",

                title:
                    "🤫 La conserver",

                description:
                    "Attendre une meilleure occasion.",

                narrative: {

                    setFlags: [
                        "secret_flare_saved"
                    ],

                    removeFlags: [
                        "secret_flare_used"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_secret_flare_night",

                            weight:
                                38
                        }
                    ]

                }
            }

        ],


        guess: {

            title:
                "Qu'a décidé {actor} ?",

            description:
                "Utiliser l'unique fusée immédiatement ou la conserver ?",

            choices: [

                {
                    id:
                        "desert_flare_guess_now",

                    secretValue:
                        "now",

                    title:
                        "🚨 La tirer",

                    description:
                        "{actor} voulait l'utiliser immédiatement."
                },

                {
                    id:
                        "desert_flare_guess_save",

                    secretValue:
                        "save",

                    title:
                        "📦 La conserver",

                    description:
                        "{actor} voulait attendre."
                }

            ]

        },


        outcomes: {

            now_correct: {

                icon:
                    "✨",

                title:
                    "Même idée",

                variants: [

                    {
                        id:
                            "flare_now_correct_good",

                        text:
                            "La fusée monte très haut dans le ciel. Au loin, une lumière semble brièvement répondre.",

                        icon:
                            "🚢",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "flare_now_correct_neutral",

                        text:
                            "La fusée illumine parfaitement le ciel, mais personne ne semble avoir remarqué le signal.",

                        icon:
                            "🚨",

                        effects:
                            [],

                        weight:
                            68
                    },

                    {
                        id:
                            "flare_now_correct_bad",

                        text:
                            "La fusée retombe beaucoup trop près du camp et oblige tout le monde à éteindre un départ de feu.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            20
                    }

                ]

            },


            now_wrong: {

                icon:
                    "💥",

                title:
                    "Surprise",

                variants: [

                    {
                        id:
                            "flare_now_wrong_bad",

                        text:
                            "Personne ne s'attendait au tir. La fusée retombe près du camp et déclenche un petit incendie.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            },

                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id:
                            "flare_now_wrong_neutral",

                        text:
                            "{actor} tire la fusée alors que personne ne s'y attendait. Aucun bateau ne répond.",

                        icon:
                            "🚨",

                        effects:
                            [],

                        weight:
                            65
                    }

                ]

            },


            save_correct: {

                icon:
                    "📦",

                title:
                    "Décision prévisible",

                variants: [

                    {
                        id:
                            "flare_save_correct_neutral",

                        text:
                            "Le groupe avait compris que {actor} préférait attendre une occasion plus favorable.",

                        icon:
                            "📦",

                        effects:
                            [],

                        weight:
                            82,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare_night",

                                    weight:
                                        34
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "flare_save_correct_good",

                        text:
                            "Le groupe approuve la prudence de {actor} et protège soigneusement la fusée.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            18,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare_night",

                                    weight:
                                        45
                                }
                            ]

                        }
                    }

                ]

            },


            save_wrong: {

                icon:
                    "🤐",

                title:
                    "Secret bien gardé",

                variants: [

                    {
                        id:
                            "flare_save_wrong_neutral",

                        text:
                            "Personne ne sait que {actor} possède désormais l'unique fusée de détresse.",

                        icon:
                            "🤫",

                        effects:
                            [],

                        weight:
                            80,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare_night",

                                    weight:
                                        40
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "flare_save_wrong_good",

                        text:
                            "{actor} cache parfaitement la fusée dans un endroit protégé de l'humidité.",

                        icon:
                            "📦",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare_night",

                                    weight:
                                        48
                                }
                            ]

                        }
                    }

                ]

            }

        }

    },


    // =====================================================
    // 7 - ABRI
    // =====================================================

    {
        id:
            "desert_secret_shelter",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve un abri parfait",

        category:
            "Choix secret",

        icon:
            "⛺",

        description:
            "Une petite cavité sèche et protégée du vent pourrait servir d'excellent abri pour la nuit.",

        choices: [

            {
                id:
                    "desert_shelter_keep",

                secretValue:
                    "keep",

                title:
                    "😴 Dormir seul",

                description:
                    "Garder cet endroit confortable pour soi."
            },

            {
                id:
                    "desert_shelter_group",

                secretValue:
                    "group",

                title:
                    "📣 Appeler le groupe",

                description:
                    "Partager l'abri avec les autres."
            }

        ],


        guess: {

            title:
                "{actor} partagerait-il vraiment son abri ?",

            description:
                "Le groupe doit trancher.",

            choices: [

                {
                    id:
                        "desert_shelter_guess_keep",

                    secretValue:
                        "keep",

                    title:
                        "😴 Certainement pas",

                    description:
                        "{actor} comptait dormir tranquillement seul."
                },

                {
                    id:
                        "desert_shelter_guess_group",

                    secretValue:
                        "group",

                    title:
                        "🤝 Évidemment",

                    description:
                        "{actor} comptait accueillir tout le monde."
                }

            ]

        },


        outcomes: {

            keep_correct: {

                title:
                    "Sans surprise",

                icon:
                    "😡",

                variants: [

                    {
                        id:
                            "shelter_keep_correct_bad",

                        text:
                            "Le groupe retrouve l'abri secret de {actor}. La confrontation empêche finalement tout le monde de dormir correctement.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            52
                    },

                    {
                        id:
                            "shelter_keep_correct_neutral",

                        text:
                            "{actor} est démasqué et finit par laisser tout le monde s'installer.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            48
                    }

                ]

            },


            keep_wrong: {

                title:
                    "Bonne nuit",

                icon:
                    "😴",

                variants: [

                    {
                        id:
                            "shelter_keep_wrong_good",

                        text:
                            "Personne ne retrouve {actor}, qui profite seul d'une excellente nuit.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -2
                                }
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id:
                            "shelter_keep_wrong_neutral",

                        text:
                            "{actor} profite seul de l'abri, mais le vent devient si fort que la nuit reste assez mauvaise.",

                        icon:
                            "🌬️",

                        effects:
                            [],

                        weight:
                            45
                    },

                    {
                        id:
                            "shelter_keep_wrong_bad",

                        text:
                            "Une infiltration transforme rapidement l'abri parfait en piège humide.",

                        icon:
                            "🌧️",

                        effects: [
                            {
                                target:
                                    "actor",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            20
                    }

                ]

            },


            group_correct: {

                title:
                    "Une nuit au sec",

                icon:
                    "🏕️",

                variants: [

                    {
                        id:
                            "shelter_group_correct_good",

                        text:
                            "{actor} comptait réellement inviter tout le monde. L'abri permet à chacun de récupérer.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            60
                    },

                    {
                        id:
                            "shelter_group_correct_neutral",

                        text:
                            "Tout le monde trouve une place. C'est serré, mais beaucoup mieux que de dormir dehors.",

                        icon:
                            "⛺",

                        effects:
                            [],

                        weight:
                            40
                    }

                ]

            },


            group_wrong: {

                title:
                    "Vous êtes sérieux ?",

                icon:
                    "🙄",

                variants: [

                    {
                        id:
                            "shelter_group_wrong_bad",

                        text:
                            "{actor} voulait réellement partager l'abri. Le temps perdu à l'accuser oblige finalement tout le monde à s'installer en pleine nuit.",

                        icon:
                            "🥱",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "shelter_group_wrong_neutral",

                        text:
                            "Le malentendu est dissipé et tout le monde finit par rejoindre l'abri.",

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
    // 8 - DERNIER MÉDICAMENT
    // BOOST POSSIBLE DEPUIS LE SAC
    // =====================================================

    {
        id:
            "desert_secret_medicine",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve le dernier médicament",

        category:
            "Choix secret",

        icon:
            "💊",

        description:
            "Au fond d'une petite trousse de secours, {actor} découvre un unique médicament encore utilisable.",

        choices: [

            {
                id:
                    "desert_medicine_take",

                secretValue:
                    "take",

                title:
                    "💊 Le garder",

                description:
                    "Conserver le médicament pour sa propre survie."
            },

            {
                id:
                    "desert_medicine_give",

                secretValue:
                    "give",

                title:
                    "❤️ Le réserver au groupe",

                description:
                    "Le conserver pour quelqu'un qui en aurait davantage besoin."
            }

        ],


        guess: {

            title:
                "Que ferait {actor} du dernier médicament ?",

            description:
                "Le groupe doit décider si {actor} privilégierait sa propre survie.",

            choices: [

                {
                    id:
                        "desert_medicine_guess_take",

                    secretValue:
                        "take",

                    title:
                        "💊 Le garder",

                    description:
                        "{actor} privilégierait sa propre survie."
                },

                {
                    id:
                        "desert_medicine_guess_give",

                    secretValue:
                        "give",

                    title:
                        "❤️ Le réserver",

                    description:
                        "{actor} le garderait pour une urgence collective."
                }

            ]

        },


        outcomes: {

            take_correct: {

                title:
                    "Prévisible",

                icon:
                    "😬",

                variants: [

                    {
                        id:
                            "medicine_take_correct_bad",

                        text:
                            "Le groupe avait vu juste. {actor} comptait effectivement garder le médicament et doit maintenant le restituer.",

                        icon:
                            "😡",

                        effects:
                            [],

                        weight:
                            60
                    },

                    {
                        id:
                            "medicine_take_correct_poison",

                        text:
                            "{actor} avoue vouloir le garder, puis découvre que le produit était périmé depuis des années.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "actor",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id:
                            "medicine_take_correct_neutral",

                        text:
                            "{actor} est démasqué avant d'utiliser quoi que ce soit. Le médicament retourne dans la trousse.",

                        icon:
                            "💊",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]

            },


            take_wrong: {

                title:
                    "Personne ne le saura",

                icon:
                    "🤫",

                variants: [

                    {
                        id:
                            "medicine_take_wrong_good",

                        text:
                            "Le groupe faisait confiance à {actor}, qui garde discrètement le médicament et l'utilise pour récupérer.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "actor",

                                removeStatus:
                                    "poisoned"
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "medicine_take_wrong_small",

                        text:
                            "{actor} garde le produit. Il est assez efficace pour neutraliser un éventuel poison.",

                        icon:
                            "💊",

                        effects: [
                            {
                                target:
                                    "actor",

                                removeStatus:
                                    "poisoned"
                            }
                        ],

                        weight:
                            27
                    },

                    {
                        id:
                            "medicine_take_wrong_neutral",

                        text:
                            "Personne ne découvre le choix de {actor}, mais le médicament ne semble finalement pas très utile.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            55
                    }

                ]

            },


            give_correct: {

                title:
                    "Belle confiance",

                icon:
                    "❤️",

                variants: [

                    {
                        id:
                            "medicine_give_correct_good",

                        text:
                            "Le groupe avait raison : {actor} voulait conserver le médicament pour une urgence. Un survivant empoisonné peut en profiter immédiatement.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "poisoned"
                            }
                        ],

                        weight:
                            28
                    },

                    {
                        id:
                            "medicine_give_correct_neutral",

                        text:
                            "Le médicament est conservé collectivement pour une future urgence.",

                        icon:
                            "💊",

                        effects:
                            [],

                        weight:
                            72
                    }

                ]

            },


            give_wrong: {

                title:
                    "Soupçonné à tort",

                icon:
                    "😒",

                variants: [

                    {
                        id:
                            "medicine_give_wrong_bad",

                        text:
                            "{actor} voulait aider le groupe, mais les accusations font perdre un temps précieux.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            42
                    },

                    {
                        id:
                            "medicine_give_wrong_neutral",

                        text:
                            "Le groupe finit par comprendre que {actor} comptait réellement garder le médicament pour une urgence.",

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
    // 9 - FUSÉE CONSERVÉE : BATEAU DE NUIT
    // SUITE DE LA FUSÉE
    // =====================================================

    {
        id:
            "desert_secret_flare_night",

        type:
            "secret_choice",

        baseWeight:
            1,

        requirements: {

            all: [
                "secret_flare_saved"
            ],

            not: [
                "secret_flare_used"
            ]

        },

        title:
            "{actor} aperçoit une lumière au large",

        category:
            "Suite",

        icon:
            "🌌",

        description:
            "En pleine nuit, une lumière se déplace lentement à l'horizon. Cela pourrait être un bateau. {actor} possède toujours la fusée de détresse.",

        choices: [

            {
                id:
                    "desert_flare_night_fire",

                secretValue:
                    "fire",

                title:
                    "🚨 Tirer la fusée",

                description:
                    "Cette occasion semble meilleure que la précédente.",

                narrative: {

                    setFlags: [
                        "secret_flare_used",
                        "secret_flare_night_fired"
                    ],

                    removeFlags: [
                        "secret_flare_saved"
                    ]

                }
            },

            {
                id:
                    "desert_flare_night_keep",

                secretValue:
                    "keep",

                title:
                    "🤫 Encore attendre",

                description:
                    "La lumière est trop éloignée pour être certain qu'il s'agit d'un bateau.",

                narrative: {

                    setFlags: [
                        "secret_flare_saved_again"
                    ],

                    removeFlags: [
                        "secret_flare_night_fired"
                    ]

                }
            }

        ],


        guess: {

            title:
                "{actor} a-t-il enfin utilisé la fusée ?",

            description:
                "Le groupe doit deviner s'il a saisi cette occasion.",

            choices: [

                {
                    id:
                        "desert_flare_night_guess_fire",

                    secretValue:
                        "fire",

                    title:
                        "🚨 Il l'a tirée",

                    description:
                        "Vous pensez que {actor} a utilisé la fusée."
                },

                {
                    id:
                        "desert_flare_night_guess_keep",

                    secretValue:
                        "keep",

                    title:
                        "📦 Il l'a encore gardée",

                    description:
                        "Vous pensez que {actor} a préféré attendre."
                }

            ]

        },


        outcomes: {

            fire_correct: {

                title:
                    "Maintenant ou jamais",

                icon:
                    "🚨",

                variants: [

                    {
                        id:
                            "flare_night_fire_correct_good",

                        text:
                            "La fusée éclaire tout le ciel. Quelques secondes plus tard, la lumière au large change clairement de direction.",

                        icon:
                            "🚢",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "flare_night_fire_correct_neutral",

                        text:
                            "La fusée est parfaitement visible. La lumière continue cependant sa trajectoire sans réaction évidente.",

                        icon:
                            "🌌",

                        effects:
                            [],

                        weight:
                            65
                    },

                    {
                        id:
                            "flare_night_fire_correct_bad",

                        text:
                            "La vieille fusée fonctionne mal et explose presque immédiatement après son lancement.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            15
                    }

                ]

            },


            fire_wrong: {

                title:
                    "Il l'a vraiment fait",

                icon:
                    "😮",

                variants: [

                    {
                        id:
                            "flare_night_fire_wrong_good",

                        text:
                            "Personne ne pensait que {actor} utiliserait la fusée. Pourtant, le signal semble être repéré au loin.",

                        icon:
                            "🚢",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            15
                    },

                    {
                        id:
                            "flare_night_fire_wrong_neutral",

                        text:
                            "{actor} tire la fusée sans prévenir. Elle illumine l'horizon, mais aucune réponse n'arrive.",

                        icon:
                            "🚨",

                        effects:
                            [],

                        weight:
                            85
                    }

                ]

            },


            keep_correct: {

                title:
                    "Toujours prudent",

                icon:
                    "📦",

                variants: [

                    {
                        id:
                            "flare_night_keep_correct_neutral",

                        text:
                            "{actor} conserve encore la fusée. Quelques minutes plus tard, la lumière disparaît derrière l'horizon.",

                        icon:
                            "🌌",

                        effects:
                            [],

                        weight:
                            75
                    },

                    {
                        id:
                            "flare_night_keep_correct_bad",

                        text:
                            "La lumière disparaît. Personne ne saura si le groupe vient de manquer sa meilleure occasion de secours.",

                        icon:
                            "💔",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            25
                    }

                ]

            },


            keep_wrong: {

                title:
                    "Il n'a toujours pas tiré",

                icon:
                    "🤐",

                variants: [

                    {
                        id:
                            "flare_night_keep_wrong_neutral",

                        text:
                            "Alors que tout le monde pensait que {actor} utiliserait la fusée, il décide encore d'attendre.",

                        icon:
                            "📦",

                        effects:
                            [],

                        weight:
                            70
                    },

                    {
                        id:
                            "flare_night_keep_wrong_bad",

                        text:
                            "Les autres découvrent finalement que {actor} possédait toujours la fusée. La discussion dure une bonne partie de la nuit.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            30
                    }

                ]

            }

        }

    },


    // =====================================================
    // 10 - NOUVEAU : COUTEAU DE SURVIE
    // =====================================================

    {
        id:
            "desert_secret_knife",

        type:
            "secret_choice",

        baseWeight:
            0.9,

        title:
            "{actor} découvre un excellent couteau de survie",

        category:
            "Choix secret",

        icon:
            "🔪",

        description:
            "Sous plusieurs débris, {actor} trouve un couteau robuste encore en excellent état. Sur l'île, cet objet peut valoir extrêmement cher.",

        choices: [

            {
                id:
                    "desert_knife_hide",

                secretValue:
                    "hide",

                title:
                    "🤫 Le garder secret",

                description:
                    "Conserver l'outil pour soi."
            },

            {
                id:
                    "desert_knife_share",

                secretValue:
                    "share",

                title:
                    "🛠️ Le mettre en commun",

                description:
                    "L'utiliser comme outil collectif."
            }

        ],


        guess: {

            title:
                "Qu'a fait {actor} du couteau ?",

            description:
                "Objet personnel ou outil du camp ?",

            choices: [

                {
                    id:
                        "desert_knife_guess_hide",

                    secretValue:
                        "hide",

                    title:
                        "🤫 Il l'a gardé",

                    description:
                        "{actor} a certainement caché l'outil."
                },

                {
                    id:
                        "desert_knife_guess_share",

                    secretValue:
                        "share",

                    title:
                        "🛠️ Il l'a partagé",

                    description:
                        "{actor} l'a probablement mis à disposition du groupe."
                }

            ]

        },


        outcomes: {

            hide_correct: {

                title:
                    "Encore une cachette",

                icon:
                    "👀",

                variants: [

                    {
                        id:
                            "knife_hide_correct_bad",

                        text:
                            "Le groupe retrouve le couteau dans les affaires de {actor}. L'objet est immédiatement récupéré.",

                        icon:
                            "😡",

                        effects:
                            [],

                        weight:
                            65
                    },

                    {
                        id:
                            "knife_hide_correct_neutral",

                        text:
                            "{actor} admet l'avoir caché et accepte finalement de le mettre en commun.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            35
                    }

                ]

            },


            hide_wrong: {

                title:
                    "Un excellent outil personnel",

                icon:
                    "🔪",

                variants: [

                    {
                        id:
                            "knife_hide_wrong_good",

                        text:
                            "Personne ne découvre le couteau. {actor} l'utilise discrètement pour améliorer plusieurs outils improvisés.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "knife_hide_wrong_neutral",

                        text:
                            "{actor} cache parfaitement le couteau mais n'a pas encore l'occasion de s'en servir.",

                        icon:
                            "🤫",

                        effects:
                            [],

                        weight:
                            45
                    }

                ]

            },


            share_correct: {

                title:
                    "Outil collectif",

                icon:
                    "🤝",

                variants: [

                    {
                        id:
                            "knife_share_correct_good",

                        text:
                            "Grâce au couteau, le groupe améliore plusieurs outils et prépare plus efficacement le camp.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "knife_share_correct_neutral",

                        text:
                            "Le couteau est rangé avec le matériel commun et servira lorsque ce sera nécessaire.",

                        icon:
                            "🔪",

                        effects:
                            [],

                        weight:
                            55
                    }

                ]

            },


            share_wrong: {

                title:
                    "Encore accusé",

                icon:
                    "🙄",

                variants: [

                    {
                        id:
                            "knife_share_wrong_bad",

                        text:
                            "{actor} voulait réellement partager le couteau. La dispute autour de sa supposée cachette fait perdre un temps précieux.",

                        icon:
                            "😤",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            40
                    },

                    {
                        id:
                            "knife_share_wrong_neutral",

                        text:
                            "Le groupe réalise finalement que le couteau était bien destiné au matériel collectif.",

                        icon:
                            "😐",

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
    // 11 - NOUVEAU : CARTE DE L'ÎLE
    // DÉBUT MINI-HISTOIRE
    // =====================================================

    {
        id:
            "desert_secret_map",

        type:
            "secret_choice",

        baseWeight:
            0.9,

        title:
            "{actor} trouve une vieille carte de l'île",

        category:
            "Choix secret",

        icon:
            "🗺️",

        description:
            "Une carte très abîmée indique plusieurs zones de l'île, dont un symbole mystérieux près d'une falaise.",

        choices: [

            {
                id:
                    "desert_map_secret",

                secretValue:
                    "secret",

                title:
                    "🤫 Garder la carte",

                description:
                    "Explorer seul les informations qu'elle contient.",

                narrative: {

                    setFlags: [
                        "secret_map_hidden"
                    ],

                    removeFlags: [
                        "secret_map_shared"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_secret_map_cache",

                            weight:
                                34
                        }
                    ]

                }
            },

            {
                id:
                    "desert_map_share",

                secretValue:
                    "share",

                title:
                    "🗺️ Montrer la carte",

                description:
                    "Étudier les indications avec tout le groupe.",

                narrative: {

                    setFlags: [
                        "secret_map_shared"
                    ],

                    removeFlags: [
                        "secret_map_hidden"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_secret_map_cache",

                            weight:
                                24
                        }
                    ]

                }
            }

        ],


        guess: {

            title:
                "Qu'a fait {actor} de la carte ?",

            description:
                "A-t-il partagé cette découverte ?",

            choices: [

                {
                    id:
                        "desert_map_guess_secret",

                    secretValue:
                        "secret",

                    title:
                        "🤫 Il l'a gardée",

                    description:
                        "{actor} compte certainement explorer seul."
                },

                {
                    id:
                        "desert_map_guess_share",

                    secretValue:
                        "share",

                    title:
                        "🗺️ Il l'a montrée",

                    description:
                        "{actor} compte sûrement utiliser la carte avec vous."
                }

            ]

        },


        outcomes: {

            secret_correct: {

                title:
                    "Secret découvert",

                icon:
                    "🗺️",

                variants: [

                    {
                        id:
                            "map_secret_correct_bad",

                        text:
                            "Le groupe découvre la carte cachée et décide de la conserver collectivement.",

                        icon:
                            "😒",

                        effects:
                            [],

                        weight:
                            70,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_map_cache",

                                    weight:
                                        8
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "map_secret_correct_neutral",

                        text:
                            "{actor} est démasqué mais réussit tout de même à mémoriser une partie des indications.",

                        icon:
                            "🧠",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            30,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_map_cache",

                                    weight:
                                        18
                                }
                            ]

                        }
                    }

                ]

            },


            secret_wrong: {

                title:
                    "Une longueur d'avance",

                icon:
                    "🤫",

                variants: [

                    {
                        id:
                            "map_secret_wrong_good",

                        text:
                            "Personne ne soupçonne {actor}. Il étudie longuement la carte et mémorise plusieurs itinéraires.",

                        icon:
                            "🧭",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            50,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_map_cache",

                                    weight:
                                        46
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "map_secret_wrong_neutral",

                        text:
                            "La carte est difficile à lire, mais le symbole près de la falaise semble suffisamment clair.",

                        icon:
                            "🗺️",

                        effects:
                            [],

                        weight:
                            50,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_map_cache",

                                    weight:
                                        38
                                }
                            ]

                        }
                    }

                ]

            },


            share_correct: {

                title:
                    "Exploration collective",

                icon:
                    "🤝",

                variants: [

                    {
                        id:
                            "map_share_correct_good",

                        text:
                            "En étudiant la carte ensemble, le groupe repère plusieurs passages utiles à travers l'île.",

                        icon:
                            "🧭",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            40,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_map_cache",

                                    weight:
                                        36
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "map_share_correct_neutral",

                        text:
                            "Une grande partie de la carte est effacée, mais le symbole près de la falaise reste visible.",

                        icon:
                            "🗺️",

                        effects:
                            [],

                        weight:
                            60,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_map_cache",

                                    weight:
                                        28
                                }
                            ]

                        }
                    }

                ]

            },


            share_wrong: {

                title:
                    "Paranoïa inutile",

                icon:
                    "😑",

                variants: [

                    {
                        id:
                            "map_share_wrong_bad",

                        text:
                            "{actor} voulait réellement partager. Les accusations retardent l'expédition jusqu'à la fin de la journée.",

                        icon:
                            "🌅",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "map_share_wrong_neutral",

                        text:
                            "Le groupe finit par examiner la carte avec {actor}.",

                        icon:
                            "🗺️",

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
    // 12 - NOUVEAU : CACHE DE LA CARTE
    // SUITE DE LA CARTE
    // =====================================================

    {
        id:
            "desert_secret_map_cache",

        type:
            "secret_choice",

        baseWeight:
            1,

        requirements: {

            any: [
                "secret_map_hidden",
                "secret_map_shared"
            ]

        },

        title:
            "{actor} trouve l'endroit indiqué sur la carte",

        category:
            "Suite",

        icon:
            "❌",

        description:
            "Sous un amas de pierres près de la falaise, {actor} découvre une vieille boîte métallique correspondant exactement au symbole de la carte.",

        choices: [

            {
                id:
                    "desert_cache_open",

                secretValue:
                    "open",

                title:
                    "🔓 L'ouvrir immédiatement",

                description:
                    "Découvrir seul ce qu'elle contient."
            },

            {
                id:
                    "desert_cache_wait",

                secretValue:
                    "wait",

                title:
                    "📣 Attendre le groupe",

                description:
                    "Ne pas ouvrir la boîte sans les autres."
            }

        ],


        guess: {

            title:
                "Qu'a fait {actor} devant la cache ?",

            description:
                "A-t-il résisté à la curiosité ?",

            choices: [

                {
                    id:
                        "desert_cache_guess_open",

                    secretValue:
                        "open",

                    title:
                        "🔓 Il l'a ouverte",

                    description:
                        "{actor} a probablement regardé seul."
                },

                {
                    id:
                        "desert_cache_guess_wait",

                    secretValue:
                        "wait",

                    title:
                        "📣 Il a attendu",

                    description:
                        "{actor} a probablement attendu tout le monde."
                }

            ]

        },


        outcomes: {

            open_correct: {

                title:
                    "Curiosité prévisible",

                icon:
                    "👀",

                variants: [

                    {
                        id:
                            "cache_open_correct_bad",

                        text:
                            "Le groupe arrive au moment où {actor} ouvre la boîte. À l'intérieur, un vieux mécanisme libère une nuée d'insectes agressifs.",

                        icon:
                            "🐝",

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
                            "cache_open_correct_neutral",

                        text:
                            "Le groupe surprend {actor} juste avant qu'il ne puisse inspecter le contenu.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            55
                    }

                ]

            },


            open_wrong: {

                title:
                    "Personne n'a rien vu",

                icon:
                    "🎁",

                variants: [

                    {
                        id:
                            "cache_open_wrong_tools",

                        text:
                            "La boîte contient plusieurs petits outils protégés de l'humidité.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target:
                                    "actor",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            28
                    },

                    {
                        id:
                            "cache_open_wrong_medicine",

                        text:
                            "Une petite trousse médicale est encore intacte dans la boîte.",

                        icon:
                            "💊",

                        effects: [
                            {
                                target:
                                    "actor",

                                removeStatus:
                                    "poisoned"
                            },

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
                            "cache_open_wrong_poison",

                        text:
                            "La boîte contenait d'anciens produits chimiques. Une fiole se brise lorsque {actor} l'ouvre.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target:
                                    "actor",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id:
                            "cache_open_wrong_neutral",

                        text:
                            "La boîte contient principalement des papiers détruits par l'humidité.",

                        icon:
                            "📜",

                        effects:
                            [],

                        weight:
                            35
                    }

                ]

            },


            wait_correct: {

                title:
                    "Patience récompensée",

                icon:
                    "🤝",

                variants: [

                    {
                        id:
                            "cache_wait_correct_good",

                        text:
                            "En ouvrant la boîte ensemble, le groupe récupère plusieurs outils utilisables.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            30
                    },

                    {
                        id:
                            "cache_wait_correct_neutral",

                        text:
                            "La boîte contient surtout de vieux documents, mais quelques indications pourraient servir plus tard.",

                        icon:
                            "📜",

                        effects:
                            [],

                        weight:
                            70
                    }

                ]

            },


            wait_wrong: {

                title:
                    "Vous l'avez mal jugé",

                icon:
                    "🙄",

                variants: [

                    {
                        id:
                            "cache_wait_wrong_bad",

                        text:
                            "{actor} avait attendu le groupe, mais les accusations provoquent une dispute en plein soleil.",

                        icon:
                            "🥵",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        1
                                }
                            }
                        ],

                        weight:
                            40
                    },

                    {
                        id:
                            "cache_wait_wrong_neutral",

                        text:
                            "Le malentendu est finalement dissipé et la boîte est ouverte collectivement.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            60
                    }

                ]

            }

        }

    }

];