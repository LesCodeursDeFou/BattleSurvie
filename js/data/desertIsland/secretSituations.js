export const SECRET_SITUATIONS = [

    // =====================================================
    // 1 - RÉSERVE DE NOURRITURE
    // CLASSIQUE
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
                "Les autres survivants doivent maintenant deviner la décision de {actor}.",

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

            // =================================================
            // GARDE + GROUPE DEVINE
            // =================================================

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
                            "Le groupe comprend immédiatement que {actor} voulait cacher les provisions. La confrontation tourne mal pour lui.",

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
                            "food_keep_correct_neutral",

                        icon:
                            "😬",

                        text:
                            "{actor} est démasqué, mais rend la nourriture avant que la dispute ne dégénère.",

                        effects:
                            [],

                        weight:
                            27
                    },

                    {
                        id:
                            "food_keep_correct_twist",

                        icon:
                            "🥫",

                        text:
                            "Le groupe trouve la cachette de {actor}. Une petite partie des provisions reste néanmoins exploitable par tout le monde.",

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


            // =================================================
            // GARDE + GROUPE SE TROMPE
            // =================================================

            keep_wrong: {

                icon:
                    "😏",

                title:
                    "Bluff réussi !",

                variants: [

                    {
                        id:
                            "food_keep_wrong_good",

                        icon:
                            "😏",

                        text:
                            "Personne ne soupçonne {actor}, qui profite discrètement de sa réserve.",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "food_keep_wrong_small",

                        icon:
                            "🥫",

                        text:
                            "{actor} réussit son bluff, mais une bonne partie de la nourriture est déjà périmée.",

                        effects: [
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
                            "food_keep_wrong_neutral",

                        icon:
                            "😐",

                        text:
                            "Le groupe ne découvre rien, mais la nourriture cachée se révèle presque inutilisable.",

                        effects:
                            [],

                        weight:
                            68
                    }

                ]

            },


            // =================================================
            // PARTAGE + GROUPE DEVINE
            // =================================================

            share_correct: {

                icon:
                    "🤝",

                title:
                    "Confiance !",

                variants: [

                    {
                        id:
                            "food_share_correct_good",

                        icon:
                            "😋",

                        text:
                            "Le groupe avait raison de faire confiance à {actor}. Quelques bonnes conserves permettent à tout le monde de reprendre des forces.",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "food_share_correct_neutral",

                        icon:
                            "🥫",

                        text:
                            "{actor} partage bien la caisse, mais il reste trop peu de nourriture pour réellement améliorer la situation.",

                        effects:
                            [],

                        weight:
                            67
                    },

                    {
                        id:
                            "food_share_correct_bad",

                        icon:
                            "🤢",

                        text:
                            "La bonne intention de {actor} ne suffit pas : plusieurs conserves étaient périmées.",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            15
                    }

                ]

            },


            // =================================================
            // PARTAGE + GROUPE SE TROMPE
            // =================================================

            share_wrong: {

                icon:
                    "💔",

                title:
                    "Accusé à tort !",

                variants: [

                    {
                        id:
                            "food_share_wrong_bad",

                        icon:
                            "😡",

                        text:
                            "{actor} voulait réellement partager, mais la méfiance provoque une énorme dispute.",

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

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "food_share_wrong_neutral",

                        icon:
                            "😒",

                        text:
                            "Après de longues accusations, le groupe comprend finalement que {actor} disait la vérité.",

                        effects:
                            [],

                        weight:
                            45
                    }

                ]

            }

        }

    },


    // =====================================================
    // 2 - SOURCE D'EAU
    // CLASSIQUE
    // =====================================================

    {
        id:
            "desert_secret_water",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} découvre une source d'eau potable",

        category:
            "Choix secret",

        icon:
            "💧",

        description:
            "Derrière plusieurs rochers, {actor} découvre une petite source d'eau parfaitement claire.",

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
                "{actor} vous a-t-il parlé de la source ?",

            description:
                "À vous de deviner ce que {actor} a réellement décidé.",

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
                        "{actor} comptait vous montrer la source."
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
                            "Les autres retrouvent {actor} près de la source et comprennent immédiatement son plan.",

                        icon:
                            "😡",

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
                            "water_hide_correct_neutral",

                        text:
                            "{actor} est démasqué avant d'avoir réellement profité de la source.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            30
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
                            "{actor} profite tranquillement de sa source secrète et récupère des forces.",

                        icon:
                            "💧",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "water_hide_wrong_small",

                        text:
                            "{actor} réussit à garder l'endroit secret et boit suffisamment pour se sentir un peu mieux.",

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
                            22
                    },

                    {
                        id:
                            "water_hide_wrong_neutral",

                        text:
                            "Personne ne découvre la source, mais son débit est beaucoup trop faible pour être réellement utile.",

                        icon:
                            "💧",

                        effects:
                            [],

                        weight:
                            66
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
                            "{actor} comptait bien partager l'eau. La source permet à tout le monde de reprendre un peu de force.",

                        icon:
                            "💧",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "water_reveal_correct_neutral",

                        text:
                            "Le groupe suit {actor}, mais la source produit juste assez d'eau pour remplir quelques gourdes.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            67
                    },

                    {
                        id:
                            "water_reveal_correct_bad",

                        text:
                            "En approchant tous ensemble de la source, le groupe dérange un énorme nid d'insectes.",

                        icon:
                            "🐝",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            15
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
                            "Les accusations font perdre beaucoup de temps au groupe alors que {actor} voulait réellement partager.",

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
                            48
                    },

                    {
                        id:
                            "water_reveal_wrong_neutral",

                        text:
                            "Le groupe finit par comprendre que {actor} disait vrai. Personne n'en tire cependant de bénéfice immédiat.",

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
                        "secret_backpack_left"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "desert_secret_medicine",

                            weight:
                                24
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
                "Le groupe doit décider s'il fait confiance à {actor}.",

            choices: [

                {
                    id:
                        "desert_backpack_guess_search",

                    secretValue:
                        "search",

                    title:
                        "🎒 Il l'a fouillé",

                    description:
                        "Vous pensez que {actor} s'est servi avant vous."
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
                    "Grillé !",

                variants: [

                    {
                        id:
                            "backpack_search_correct_bad",

                        text:
                            "Le groupe comprend que {actor} a fouillé le sac avant tout le monde et récupère ce qu'il avait pris.",

                        icon:
                            "😡",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            65,

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
                            "{actor} avoue immédiatement avoir fouillé le sac. Le groupe laisse tomber l'affaire.",

                        icon:
                            "😬",

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
                            "backpack_search_wrong_good",

                        text:
                            "Personne ne soupçonne {actor}, qui récupère discrètement du matériel encore utile.",

                        icon:
                            "🎒",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            10,

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
                            "backpack_search_wrong_small",

                        text:
                            "{actor} trouve seulement quelques objets utiles au fond du sac.",

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
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_medicine",

                                    weight:
                                        34
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "backpack_search_wrong_neutral",

                        text:
                            "Personne ne soupçonne {actor}, mais le sac contient surtout des vêtements détruits par l'humidité.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            70,

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
                            "Le groupe avait raison de faire confiance à {actor}. Quelques objets sont encore utilisables.",

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
                            16
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
                            84
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
                            "{actor} n'avait rien pris, mais les accusations déclenchent une dispute inutile.",

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
                            "backpack_call_wrong_neutral",

                        text:
                            "Le malentendu est finalement dissipé avant que la situation ne dégénère.",

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
                                20
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
                                16
                        }
                    ]

                }
            }

        ],


        guess: {

            title:
                "Quel était le plan de {actor} ?",

            description:
                "Tentative d'évasion en solitaire ou véritable projet collectif ?",

            choices: [

                {
                    id:
                        "desert_raft_guess_escape",

                    secretValue:
                        "escape",

                    title:
                        "🏃 Partir seul",

                    description:
                        "{actor} comptait vous abandonner."
                },

                {
                    id:
                        "desert_raft_guess_team",

                    secretValue:
                        "team",

                    title:
                        "🤝 Construire ensemble",

                    description:
                        "{actor} comptait proposer son idée au groupe."
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
                            "Le groupe découvre le projet d'évasion de {actor} et démonte une partie de son radeau.",

                        icon:
                            "💥",

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
                            32,

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
                    "Plan parfait",

                variants: [

                    {
                        id:
                            "raft_escape_wrong_good",

                        text:
                            "Personne ne soupçonne les véritables intentions de {actor}. Le radeau commence réellement à prendre forme.",

                        icon:
                            "🛶",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            16,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare",

                                    weight:
                                        34
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "raft_escape_wrong_neutral",

                        text:
                            "Le secret reste intact, mais construire seul un radeau s'avère beaucoup plus compliqué que prévu.",

                        icon:
                            "🪵",

                        effects:
                            [],

                        weight:
                            84,

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
                            "Le groupe avait raison de faire confiance à {actor}. Le projet avance rapidement.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "raft_team_correct_neutral",

                        text:
                            "Tout le monde accepte de travailler sur le radeau. La construction progresse lentement mais sûrement.",

                        icon:
                            "🛶",

                        effects:
                            [],

                        weight:
                            82
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
                            "{actor} voulait aider tout le monde, mais les accusations font perdre une grande partie de la journée.",

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
                            48
                    },

                    {
                        id:
                            "raft_team_wrong_neutral",

                        text:
                            "Après de longues explications, tout le monde finit par comprendre le véritable projet de {actor}.",

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
    // CLASSIQUE
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
            "Un arbre porte de gros fruits inconnus. Ils semblent délicieux... mais personne ne sait s'ils sont comestibles.",

        choices: [

            {
                id:
                    "desert_fruit_eat",

                secretValue:
                    "eat",

                title:
                    "😋 En manger",

                description:
                    "Tester personnellement les fruits."
            },

            {
                id:
                    "desert_fruit_others",

                secretValue:
                    "others",

                title:
                    "😈 Les proposer aux autres",

                description:
                    "Laisser quelqu'un d'autre servir de cobaye."
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
                        "{actor} comptait goûter les fruits."
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
                            "{actor} avait réellement décidé de tester les fruits. Contre toute attente, ils sont délicieux.",

                        icon:
                            "😋",

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
                    },

                    {
                        id:
                            "fruit_eat_correct_bad",

                        text:
                            "{actor} avait réellement décidé de servir de cobaye. Malheureusement, les fruits sont toxiques.",

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
                            70
                    },

                    {
                        id:
                            "fruit_eat_correct_neutral",

                        text:
                            "Les fruits ont un goût terrible mais ne semblent provoquer aucun effet.",

                        icon:
                            "😖",

                        effects:
                            [],

                        weight:
                            20
                    }

                ]

            },


            eat_wrong: {

                icon:
                    "😤",

                title:
                    "Injustement soupçonné",

                variants: [

                    {
                        id:
                            "fruit_eat_wrong_bad",

                        text:
                            "{actor} était prêt à prendre le risque lui-même, mais la méfiance du groupe provoque une dispute.",

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
                            45
                    },

                    {
                        id:
                            "fruit_eat_wrong_neutral",

                        text:
                            "Le groupe découvre finalement que {actor} disait vrai. Personne ne goûte aux fruits.",

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
                            "Tout le monde comprend que {actor} cherchait un cobaye. Personne n'apprécie vraiment l'idée.",

                        icon:
                            "😡",

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
                            "fruit_others_correct_neutral",

                        text:
                            "{actor} est démasqué avant que quelqu'un ne goûte au fruit.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            30
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

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            75
                    },

                    {
                        id:
                            "fruit_others_wrong_neutral",

                        text:
                            "Le groupe goûte les fruits avec confiance. Ils sont infects, mais heureusement sans effet.",

                        icon:
                            "😖",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]

            }

        }

    },


    // =====================================================
    // 6 - FUSÉE DE DÉTRESSE
    // PEUT ÊTRE BOOSTÉE PAR LE RADEAU
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
                    "La cacher pour attendre une meilleure occasion.",

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
                                34
                        }
                    ]

                }
            }

        ],


        guess: {

            title:
                "Qu'a décidé {actor} ?",

            description:
                "Utiliser la seule fusée ou la conserver ?",

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
                        "{actor} voulait la garder pour plus tard."
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
                            "La fusée monte très haut dans le ciel. Au loin, une lumière semble répondre au signal.",

                        icon:
                            "🚢",

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
                            "flare_now_correct_neutral",

                        text:
                            "La fusée illumine parfaitement le ciel, mais personne ne semble l'avoir remarquée.",

                        icon:
                            "🚨",

                        effects:
                            [],

                        weight:
                            70
                    },

                    {
                        id:
                            "flare_now_correct_bad",

                        text:
                            "La fusée retombe beaucoup trop près du camp et déclenche un petit incendie.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            18
                    }

                ]

            },


            now_wrong: {

                icon:
                    "💥",

                title:
                    "Surprise !",

                variants: [

                    {
                        id:
                            "flare_now_wrong_bad",

                        text:
                            "La fusée surprend tout le monde et provoque un départ de feu près du camp.",

                        icon:
                            "🔥",

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
                            "flare_now_wrong_neutral",

                        text:
                            "Alors que personne ne s'y attendait, {actor} tire la fusée. Aucun bateau ne répond.",

                        icon:
                            "🚨",

                        effects:
                            [],

                        weight:
                            60
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
                            "Le groupe avait compris que {actor} préférait conserver la fusée pour une meilleure occasion.",

                        icon:
                            "📦",

                        effects:
                            [],

                        weight:
                            90,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare_night",

                                    weight:
                                        30
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "flare_save_correct_good",

                        text:
                            "Le groupe approuve l'idée de conserver la fusée et la protège soigneusement.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            10,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "desert_secret_flare_night",

                                    weight:
                                        42
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
                            "Personne ne sait que {actor} possède désormais la seule fusée de détresse.",

                        icon:
                            "🤫",

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
                                        38
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "flare_save_wrong_good",

                        text:
                            "{actor} cache parfaitement la fusée dans un endroit sûr.",

                        icon:
                            "📦",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    1
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

            }

        }

    },


    // =====================================================
    // 7 - ABRI
    // CLASSIQUE
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
                            "Le groupe retrouve l'abri secret de {actor}. La confrontation l'empêche complètement de profiter de sa trouvaille.",

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
                            55
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
                            45
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

                                lives:
                                    2
                            }
                        ],

                        weight:
                            12
                    },

                    {
                        id:
                            "shelter_keep_wrong_small",

                        text:
                            "{actor} dort tranquillement plusieurs heures avant que l'humidité ne devienne gênante.",

                        icon:
                            "🌙",

                        effects: [
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
                            "shelter_keep_wrong_neutral",

                        text:
                            "L'abri est calme, mais beaucoup moins confortable que prévu.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            68
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
                            "{actor} comptait bien inviter tout le monde. Le groupe passe une excellente nuit.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            }
                        ],

                        weight:
                            18
                    },

                    {
                        id:
                            "shelter_group_correct_neutral",

                        text:
                            "Tout le monde trouve une place, même si l'abri est rapidement beaucoup moins confortable.",

                        icon:
                            "⛺",

                        effects:
                            [],

                        weight:
                            82
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
                            "{actor} voulait partager, mais les accusations font perdre un temps précieux avant la nuit.",

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
                            "shelter_group_wrong_neutral",

                        text:
                            "Le malentendu finit par être dissipé et le groupe rejoint finalement l'abri.",

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
    // 8 - DERNIER MÉDICAMENT
    // PEUT ÊTRE BOOSTÉ PAR LE SAC À DOS
    // =====================================================

    {
        id:
            "desert_secret_medicine",

        type:
            "secret_choice",

        baseWeight:
            1,

        // Volontairement PAS de requirements.
        //
        // Le médicament peut apparaître normalement.
        // Le sac à dos augmente seulement sa probabilité.

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
                    "❤️ Le réserver aux autres",

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
                        "{actor} le garderait pour quelqu'un d'autre."
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
                            "Le groupe avait vu juste. {actor} comptait effectivement garder le médicament et doit maintenant se justifier.",

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
                            55
                    },

                    {
                        id:
                            "medicine_take_correct_neutral",

                        text:
                            "{actor} est démasqué mais accepte finalement de remettre le médicament dans la trousse.",

                        icon:
                            "💊",

                        effects:
                            [],

                        weight:
                            45
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
                            "Le groupe faisait confiance à {actor}, qui garde discrètement le médicament et l'utilise au meilleur moment.",

                        icon:
                            "❤️‍🩹",

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
                    },

                    {
                        id:
                            "medicine_take_wrong_small",

                        text:
                            "{actor} garde le médicament. Il est utile, mais beaucoup moins puissant qu'espéré.",

                        icon:
                            "💊",

                        effects: [
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
                            "medicine_take_wrong_neutral",

                        text:
                            "Personne ne découvre le choix de {actor}, mais le médicament ne semble finalement pas très utile.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            70
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
                            "Le groupe avait raison : {actor} voulait réserver le médicament à quelqu'un qui en aurait besoin.",

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
                            18
                    },

                    {
                        id:
                            "medicine_give_correct_neutral",

                        text:
                            "Le médicament est conservé pour une urgence future. Pour l'instant, personne ne l'utilise.",

                        icon:
                            "💊",

                        effects:
                            [],

                        weight:
                            82
                    }

                ]

            },


            give_wrong: {

                title:
                    "Quelle réputation...",

                icon:
                    "🥺",

                variants: [

                    {
                        id:
                            "medicine_give_wrong_bad",

                        text:
                            "{actor} voulait aider, mais les accusations provoquent une dispute inutile.",

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
                            42
                    },

                    {
                        id:
                            "medicine_give_wrong_neutral",

                        text:
                            "Le groupe réalise finalement que {actor} avait réellement de bonnes intentions.",

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
    // 9 - FUSÉE CONSERVÉE POUR LA NUIT
    // SUITE CONDITIONNELLE DE desert_secret_flare
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
            "En pleine nuit, {actor} distingue une lumière qui semble appartenir à un bateau. " +
            "La fusée de détresse conservée plus tôt est toujours disponible.",

        choices: [

            {
                id:
                    "desert_flare_night_fire",

                secretValue:
                    "fire",

                title:
                    "🚨 Tirer la fusée",

                description:
                    "Cette occasion est peut-être la bonne.",

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
                    "desert_flare_night_wait",

                secretValue:
                    "wait",

                title:
                    "🤫 Attendre encore",

                description:
                    "La lumière pourrait ne pas être un bateau.",

                narrative: {

                    setFlags: [
                        "secret_flare_saved_again"
                    ]

                }
            }

        ],


        guess: {

            title:
                "Qu'a décidé {actor} en voyant la lumière ?",

            description:
                "A-t-il enfin utilisé la fusée conservée ?",

            choices: [

                {
                    id:
                        "desert_flare_night_guess_fire",

                    secretValue:
                        "fire",

                    title:
                        "🚨 La tirer",

                    description:
                        "{actor} a tenté sa chance."
                },

                {
                    id:
                        "desert_flare_night_guess_wait",

                    secretValue:
                        "wait",

                    title:
                        "🤫 La conserver encore",

                    description:
                        "{actor} n'a toujours pas utilisé la fusée."
                }

            ]

        },


        outcomes: {

            fire_correct: {

                title:
                    "Le signal part",

                icon:
                    "🚨",

                variants: [

                    {
                        id:
                            "flare_night_fire_correct_good",

                        text:
                            "La lumière au large change immédiatement de direction après le signal.",

                        icon:
                            "🚢",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    2
                            }
                        ],

                        weight:
                            8
                    },

                    {
                        id:
                            "flare_night_fire_correct_neutral",

                        text:
                            "La fusée illumine toute la zone, mais la lumière au loin continue sa route.",

                        icon:
                            "🌌",

                        effects:
                            [],

                        weight:
                            72
                    },

                    {
                        id:
                            "flare_night_fire_correct_bad",

                        text:
                            "La fusée tombe dans la végétation sèche et provoque un départ de feu.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            20
                    }

                ]

            },


            fire_wrong: {

                title:
                    "Personne ne s'y attendait",

                icon:
                    "💥",

                variants: [

                    {
                        id:
                            "flare_night_fire_wrong_bad",

                        text:
                            "La fusée surprend complètement le groupe et retombe dangereusement près du camp.",

                        icon:
                            "🔥",

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
                            "flare_night_fire_wrong_neutral",

                        text:
                            "Le signal part dans le ciel mais ne reçoit aucune réponse.",

                        icon:
                            "🚨",

                        effects:
                            [],

                        weight:
                            55
                    }

                ]

            },


            wait_correct: {

                title:
                    "Encore un peu de patience",

                icon:
                    "🌙",

                variants: [

                    {
                        id:
                            "flare_night_wait_correct_neutral",

                        text:
                            "La lumière finit par disparaître derrière l'horizon. Impossible de savoir s'il s'agissait réellement d'un bateau.",

                        icon:
                            "🌌",

                        effects:
                            [],

                        weight:
                            85
                    },

                    {
                        id:
                            "flare_night_wait_correct_bad",

                        text:
                            "Au lever du jour, {actor} réalise que la lumière provenait probablement d'un bateau passé à proximité.",

                        icon:
                            "🚢",

                        effects: [
                            {
                                target:
                                    "actor",

                                lives:
                                    -1
                            }
                        ],

                        weight:
                            15
                    }

                ]

            },


            wait_wrong: {

                title:
                    "La fusée est toujours là",

                icon:
                    "📦",

                variants: [

                    {
                        id:
                            "flare_night_wait_wrong_neutral",

                        text:
                            "Le groupe pensait que {actor} avait utilisé la fusée. Elle est pourtant toujours parfaitement cachée.",

                        icon:
                            "🤫",

                        effects:
                            [],

                        weight:
                            88
                    },

                    {
                        id:
                            "flare_night_wait_wrong_good",

                        text:
                            "En inspectant la fusée conservée, {actor} remarque qu'elle est encore en excellent état.",

                        icon:
                            "🚨",

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
                    }

                ]

            }

        }

    },


    // =====================================================
    // 10 - BOÎTE ÉTANCHE
    // CLASSIQUE
    // =====================================================

    {
        id:
            "desert_secret_locked_box",

        type:
            "secret_choice",

        baseWeight:
            1,

        title:
            "{actor} trouve une petite boîte étanche",

        category:
            "Choix secret",

        icon:
            "📦",

        description:
            "Une petite boîte métallique est coincée entre deux rochers. Elle est encore parfaitement fermée.",

        choices: [

            {
                id:
                    "desert_box_open",

                secretValue:
                    "open",

                title:
                    "🔓 L'ouvrir seul",

                description:
                    "Découvrir son contenu avant tout le monde."
            },

            {
                id:
                    "desert_box_group",

                secretValue:
                    "group",

                title:
                    "📣 Appeler les autres",

                description:
                    "Ouvrir la boîte devant tout le groupe."
            }

        ],


        guess: {

            title:
                "Qu'a fait {actor} avec la boîte ?",

            description:
                "Le groupe doit maintenant deviner s'il a attendu les autres.",

            choices: [

                {
                    id:
                        "desert_box_guess_open",

                    secretValue:
                        "open",

                    title:
                        "🔓 Il l'a ouverte",

                    description:
                        "{actor} a regardé le contenu en secret."
                },

                {
                    id:
                        "desert_box_guess_group",

                    secretValue:
                        "group",

                    title:
                        "📣 Il vous a attendus",

                    description:
                        "{actor} a laissé la boîte fermée."
                }

            ]

        },


        outcomes: {

            open_correct: {

                title:
                    "Pris la main dans la boîte",

                icon:
                    "🫵",

                variants: [

                    {
                        id:
                            "box_open_correct_bad",

                        text:
                            "Le groupe retrouve {actor} devant la boîte ouverte et récupère immédiatement son contenu.",

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
                            55
                    },

                    {
                        id:
                            "box_open_correct_neutral",

                        text:
                            "La boîte était presque vide. La découverte de la tricherie ne provoque finalement qu'une dispute.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            45
                    }

                ]

            },


            open_wrong: {

                title:
                    "Secret parfait",

                icon:
                    "😏",

                variants: [

                    {
                        id:
                            "box_open_wrong_good",

                        text:
                            "La boîte contient une petite trousse de survie encore intacte.",

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
                            10
                    },

                    {
                        id:
                            "box_open_wrong_small",

                        text:
                            "{actor} récupère quelques objets utiles sans être repéré.",

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
                            18
                    },

                    {
                        id:
                            "box_open_wrong_neutral",

                        text:
                            "Personne ne découvre ce qu'a fait {actor}. Malheureusement, la boîte ne contenait presque rien.",

                        icon:
                            "📦",

                        effects:
                            [],

                        weight:
                            72
                    }

                ]

            },


            group_correct: {

                title:
                    "Bonne réputation",

                icon:
                    "🤝",

                variants: [

                    {
                        id:
                            "box_group_correct_good",

                        text:
                            "La boîte contient quelques ressources qui sont réparties équitablement.",

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
                            15
                    },

                    {
                        id:
                            "box_group_correct_neutral",

                        text:
                            "Tout le monde ouvre la boîte ensemble. Elle ne contient que quelques objets sans grande utilité.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            85
                    }

                ]

            },


            group_wrong: {

                title:
                    "Toujours cette confiance",

                icon:
                    "🙄",

                variants: [

                    {
                        id:
                            "box_group_wrong_bad",

                        text:
                            "{actor} avait attendu tout le monde mais personne ne le croyait. La dispute fait perdre un temps précieux.",

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
                            40
                    },

                    {
                        id:
                            "box_group_wrong_neutral",

                        text:
                            "Le groupe découvre finalement que la boîte était toujours fermée.",

                        icon:
                            "📦",

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