export const GROUP_SITUATIONS = [

    // =========================================================
    // 1 - PROVISIONS
    // =========================================================

    {
        id:
            "group_supplies_exclusion",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} trouvent une caisse de provisions",

        category:
            "Conflit de groupe",

        icon:
            "🥫",

        description:
            "{group} découvrent une caisse remplie de nourriture. {target} arrive juste au moment où commence le partage.",

        choices: [

            {
                id:
                    "group_supplies_share",

                title:
                    "🤝 Partager avec {target}",

                description:
                    "Même sur cette île, il reste quelques règles de civilisation.",

                consequences: [

                    {
                        id:
                            "group_supplies_share_good",

                        text:
                            "{target} apprécie le geste et révèle une petite réserve d'eau qu'il avait repérée plus tôt.",

                        icon:
                            "💧",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "all",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "group_supplies_share_bad",

                        text:
                            "Une partie des conserves était avariée. Le repas collectif tourne rapidement au désastre.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            35
                    },

                    {
                        id:
                            "group_supplies_share_neutral",

                        text:
                            "Les provisions sont mangeables, mais trop faibles pour réellement changer la situation.",

                        icon:
                            "🥫",

                        effects:
                            [],

                        weight:
                            45
                    }

                ]
            },


            {
                id:
                    "group_supplies_keep",

                title:
                    "😈 Exclure {target}",

                description:
                    "Garder la caisse uniquement pour {group}.",

                consequences: [

                    {
                        id:
                            "group_supplies_keep_good",

                        text:
                            "{group} mangent suffisamment pour reprendre un peu de force tandis que {target} repart chercher de la nourriture ailleurs.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "target",

                                status: {
                                    id:
                                        "hungry",

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
                            "group_supplies_keep_bad",

                        text:
                            "{target} revient pendant la nuit et détruit une partie du stock avant de disparaître.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target:
                                    "others",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            50
                    },

                    {
                        id:
                            "group_supplies_keep_neutral",

                        text:
                            "{target} repart sans discuter. Le contenu de la caisse se révèle finalement assez médiocre.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - ABRI
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "group_shelter",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} construisent un abri",

        category:
            "Conflit de groupe",

        icon:
            "🛖",

        description:
            "{group} ont construit un abri étonnamment solide. {target} demande à venir dormir avec eux.",

        choices: [

            {
                id:
                    "group_shelter_accept",

                title:
                    "🤝 Accepter {target}",

                description:
                    "Faire une place supplémentaire.",

                narrative: {

                    setFlags: [
                        "group_shelter_shared"
                    ],

                    removeFlags: [
                        "group_shelter_refused"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "group_storm_after_shelter",

                            weight:
                                32
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "group_shelter_accept_good",

                        text:
                            "{target} connaît quelques techniques utiles et renforce la toiture. Tout le monde récupère correctement.",

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
                            25,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "group_storm_after_shelter",

                                    weight:
                                        45
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "group_shelter_accept_bad",

                        text:
                            "L'abri devient beaucoup trop serré. Personne ne dort correctement et le réveil est difficile.",

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
                            40,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "group_storm_after_shelter",

                                    weight:
                                        12
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "group_shelter_accept_neutral",

                        text:
                            "Tout le monde trouve une place. Ce n'est pas confortable, mais cela fera l'affaire.",

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
                                        "group_storm_after_shelter",

                                    weight:
                                        25
                                }
                            ]

                        }
                    }

                ]
            },


            {
                id:
                    "group_shelter_refuse",

                title:
                    "🚫 Refuser",

                description:
                    "Laisser {target} dormir dehors.",

                narrative: {

                    setFlags: [
                        "group_shelter_refused"
                    ],

                    removeFlags: [
                        "group_shelter_shared"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "group_storm_after_shelter",

                            weight:
                                22
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "group_shelter_refuse_good",

                        text:
                            "La nuit reste parfaitement calme. {group} profitent de tout l'espace disponible.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id:
                            "group_shelter_refuse_bad",

                        text:
                            "Une pluie violente s'abat pendant la nuit. {target} passe des heures dehors sans pouvoir dormir.",

                        icon:
                            "🌧️",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -1
                            },

                            {
                                target:
                                    "target",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            48,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "group_storm_after_shelter",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "group_shelter_refuse_neutral",

                        text:
                            "{target} trouve un coin relativement sec sous plusieurs palmiers. Personne ne gagne réellement à cette décision.",

                        icon:
                            "🌴",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 3 - FEU DE CAMP
    // =========================================================

    {
        id:
            "group_campfire",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} contrôlent le feu de camp",

        category:
            "Conflit de groupe",

        icon:
            "🔥",

        description:
            "{target} arrive frigorifié et demande à rejoindre le feu entretenu par {group}.",

        choices: [

            {
                id:
                    "group_fire_accept",

                title:
                    "🔥 Le laisser venir",

                description:
                    "Partager la chaleur.",

                consequences: [

                    {
                        id:
                            "group_fire_accept_good",

                        text:
                            "{target} rapporte plusieurs branches parfaitement sèches. Le feu tient toute la nuit.",

                        icon:
                            "🪵",

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
                            25
                    },

                    {
                        id:
                            "group_fire_accept_bad",

                        text:
                            "{target} renverse accidentellement une gourde sur les braises. Tout le monde passe une partie de la nuit à reconstruire le feu.",

                        icon:
                            "💦",

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
                            "group_fire_accept_neutral",

                        text:
                            "{target} se réchauffe quelques minutes puis s'installe tranquillement près du groupe.",

                        icon:
                            "🔥",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            },


            {
                id:
                    "group_fire_refuse",

                title:
                    "❄️ Refuser",

                description:
                    "Garder le feu pour {group}.",

                consequences: [

                    {
                        id:
                            "group_fire_refuse_good",

                        text:
                            "{group} gardent toute la chaleur et profitent d'une nuit étonnamment reposante.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "group_fire_refuse_bad",

                        text:
                            "{target} revient discrètement dans la nuit et récupère une grande partie du bois sec.",

                        icon:
                            "🥷",

                        effects: [
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
                            50
                    },

                    {
                        id:
                            "group_fire_refuse_target",

                        text:
                            "{target} repart dans le froid et passe une nuit particulièrement difficile.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -1
                            },

                            {
                                target:
                                    "target",

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

        ]
    },


    // =========================================================
    // 4 - SOURCE D'EAU
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "group_water_source",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} trouvent une source d'eau potable",

        category:
            "Conflit de groupe",

        icon:
            "💧",

        description:
            "{group} découvrent une source d'eau apparemment potable. {target} arrive avec sa gourde complètement vide.",

        choices: [

            {
                id:
                    "group_water_share",

                title:
                    "💧 Partager",

                description:
                    "Laisser {target} boire.",

                narrative: {

                    setFlags: [
                        "group_water_camp"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "group_crocodile_at_source",

                            weight:
                                30
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "group_water_share_good",

                        text:
                            "{target} aide ensuite à remplir toutes les gourdes et à sécuriser l'accès à la source.",

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
                            20,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "group_crocodile_at_source",

                                    weight:
                                        42
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "group_water_share_bad",

                        text:
                            "L'eau n'était pas aussi pure qu'elle le paraissait. Plusieurs survivants commencent à se sentir mal.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "all",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            30,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "group_crocodile_at_source",

                                    weight:
                                        8
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "group_water_share_neutral",

                        text:
                            "Tout le monde boit quelques gorgées. Aucun effet particulier, mais personne n'est plus assoiffé.",

                        icon:
                            "💧",

                        effects:
                            [],

                        weight:
                            50
                    }

                ]
            },


            {
                id:
                    "group_water_block",

                title:
                    "🚫 Interdire l'accès",

                description:
                    "Garder la source pour {group}.",

                narrative: {

                    setFlags: [
                        "group_water_camp"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "group_crocodile_at_source",

                            weight:
                                22
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "group_water_block_good",

                        text:
                            "{group} conservent suffisamment d'eau pour récupérer tranquillement.",

                        icon:
                            "💧",

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
                            "group_water_block_bad",

                        text:
                            "{target} trouve une autre source quelques centaines de mètres plus loin et récupère seul.",

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
                            25
                    },

                    {
                        id:
                            "group_water_block_neutral",

                        text:
                            "{target} repart chercher de l'eau ailleurs. La tension monte, mais rien ne se produit immédiatement.",

                        icon:
                            "😐",

                        effects:
                            [],

                        weight:
                            57
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 5 - FRUITS
    // =========================================================

    {
        id:
            "group_fruits",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} trouvent un arbre rempli de fruits",

        category:
            "Conflit de groupe",

        icon:
            "🍎",

        description:
            "{group} trouvent des dizaines de fruits. {target} arrive juste au moment de la récolte.",

        choices: [

            {
                id:
                    "group_fruits_share",

                title:
                    "🍎 Partager",

                description:
                    "Donner également des fruits à {target}.",

                consequences: [

                    {
                        id:
                            "group_fruits_share_good",

                        text:
                            "Les fruits sont délicieux et suffisamment nourrissants pour tout le monde.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    1
                            },

                            {
                                target:
                                    "all",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id:
                            "group_fruits_share_bad",

                        text:
                            "Plusieurs fruits étaient toxiques. Quelques minutes plus tard, personne ne se sent très bien.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "all",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            38
                    },

                    {
                        id:
                            "group_fruits_share_neutral",

                        text:
                            "Les fruits sont comestibles mais pratiquement sans valeur nutritive.",

                        icon:
                            "🍏",

                        effects:
                            [],

                        weight:
                            40
                    }

                ]
            },


            {
                id:
                    "group_fruits_keep",

                title:
                    "😈 Tout garder",

                description:
                    "Ne rien donner à {target}.",

                consequences: [

                    {
                        id:
                            "group_fruits_keep_good",

                        text:
                            "{group} profitent de toute la récolte tandis que {target} repart le ventre vide.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target:
                                    "others",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "target",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            22
                    },

                    {
                        id:
                            "group_fruits_keep_bad",

                        text:
                            "{target} attire volontairement une bande de singes vers le stock. La récolte devient le centre d'une bataille chaotique.",

                        icon:
                            "🐒",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            53
                    },

                    {
                        id:
                            "group_fruits_keep_neutral",

                        text:
                            "{target} repart vexé. {group} conservent les fruits, mais beaucoup sont déjà trop mûrs.",

                        icon:
                            "😒",

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
    // 6 - RADEAU
    // =========================================================

    {
        id:
            "group_raft",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} terminent un radeau",

        category:
            "Conflit de groupe",

        icon:
            "🛶",

        description:
            "{group} viennent d'achever un radeau. Le problème : il reste à peine suffisamment de place pour {target}.",

        choices: [

            {
                id:
                    "group_raft_take",

                title:
                    "🛶 Embarquer {target}",

                description:
                    "Prendre le risque d'être trop nombreux.",

                consequences: [

                    {
                        id:
                            "group_raft_take_good",

                        text:
                            "Le radeau supporte tout le monde et atteint une autre partie de la côte sans difficulté.",

                        icon:
                            "🌊",

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
                            18
                    },

                    {
                        id:
                            "group_raft_take_bad",

                        text:
                            "Le poids est trop important. Le radeau se retourne et tout le monde doit rejoindre la rive à la nage.",

                        icon:
                            "💦",

                        effects: [
                            {
                                target:
                                    "all",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            },

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
                            57
                    },

                    {
                        id:
                            "group_raft_take_neutral",

                        text:
                            "Le radeau avance très lentement, mais finit par atteindre la rive opposée.",

                        icon:
                            "🛶",

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


            {
                id:
                    "group_raft_leave",

                title:
                    "👋 Partir sans {target}",

                description:
                    "Garantir la stabilité du radeau.",

                consequences: [

                    {
                        id:
                            "group_raft_leave_good",

                        text:
                            "{group} naviguent rapidement et atteignent leur destination sans incident.",

                        icon:
                            "😎",

                        effects:
                            [],

                        weight:
                            30
                    },

                    {
                        id:
                            "group_raft_leave_bad",

                        text:
                            "{target} découvre quelques minutes plus tard une vieille barque échouée et rejoint la destination avant eux.",

                        icon:
                            "🚤",

                        effects: [
                            {
                                target:
                                    "target",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id:
                            "group_raft_leave_storm",

                        text:
                            "En mer, {group} rencontrent un courant violent. Une paire de bras supplémentaire aurait peut-être été utile.",

                        icon:
                            "🌊",

                        effects: [
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
                            45
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - GROTTE
    // =========================================================

    {
        id:
            "group_cave",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} découvrent une grotte protégée",

        category:
            "Conflit de groupe",

        icon:
            "🪨",

        description:
            "{target} demande à rejoindre {group} dans une grotte qui semble parfaitement protégée du vent et de la pluie.",

        choices: [

            {
                id:
                    "group_cave_accept",

                title:
                    "🤝 Accepter",

                description:
                    "Faire entrer {target}.",

                consequences: [

                    {
                        id:
                            "group_cave_accept_good",

                        text:
                            "{target} découvre au fond de la grotte un petit passage menant à plusieurs ressources utiles.",

                        icon:
                            "🥫",

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
                            "group_cave_accept_bad",

                        text:
                            "{target} dérange accidentellement une colonie de chauves-souris. Tout le monde doit fuir dans l'obscurité.",

                        icon:
                            "🦇",

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
                            47
                    },

                    {
                        id:
                            "group_cave_accept_neutral",

                        text:
                            "{target} s'installe avec le groupe. La nuit est calme mais peu confortable.",

                        icon:
                            "🌙",

                        effects:
                            [],

                        weight:
                            35
                    }

                ]
            },


            {
                id:
                    "group_cave_refuse",

                title:
                    "🚫 Refuser",

                description:
                    "Fermer l'accès à {target}.",

                consequences: [

                    {
                        id:
                            "group_cave_refuse_good",

                        text:
                            "{group} passent une nuit parfaitement tranquille et récupèrent correctement.",

                        icon:
                            "😴",

                        effects: [
                            {
                                target:
                                    "others",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -1
                                }
                            }
                        ],

                        weight:
                            20
                    },

                    {
                        id:
                            "group_cave_refuse_bad",

                        text:
                            "{target} découvre une seconde grotte contenant d'anciens outils de survie.",

                        icon:
                            "🛠️",

                        effects: [
                            {
                                target:
                                    "target",

                                status: {
                                    id:
                                        "resourceful",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            25
                    },

                    {
                        id:
                            "group_cave_refuse_neutral",

                        text:
                            "{target} trouve un autre endroit pour dormir. La nuit passe sans événement.",

                        icon:
                            "🌙",

                        effects:
                            [],

                        weight:
                            55
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - SANGLIER
    // =========================================================

    {
        id:
            "group_boar",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "Un sanglier charge {target}",

        category:
            "Décision de groupe",

        icon:
            "🐗",

        description:
            "{group} voient un énorme sanglier foncer droit vers {target}. Ils ont quelques secondes pour décider.",

        choices: [

            {
                id:
                    "group_boar_help",

                title:
                    "🛡️ Aider {target}",

                description:
                    "Attaquer le sanglier ensemble.",

                consequences: [

                    {
                        id:
                            "group_boar_help_good",

                        text:
                            "{group} encerclent le sanglier et réussissent à le faire fuir avant qu'il n'atteigne {target}.",

                        icon:
                            "🏆",

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
                            20
                    },

                    {
                        id:
                            "group_boar_help_bad",

                        text:
                            "Le sanglier change brusquement de direction et traverse le groupe comme une boule de démolition.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            52
                    },

                    {
                        id:
                            "group_boar_help_neutral",

                        text:
                            "Les cris du groupe suffisent à faire hésiter le sanglier, qui finit par repartir dans la forêt.",

                        icon:
                            "😮‍💨",

                        effects:
                            [],

                        weight:
                            28
                    }

                ]
            },


            {
                id:
                    "group_boar_leave",

                title:
                    "👀 Ne pas intervenir",

                description:
                    "Laisser {target} gérer seul.",

                consequences: [

                    {
                        id:
                            "group_boar_leave_bad",

                        text:
                            "{target} tente d'esquiver mais se fait violemment percuter.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            65
                    },

                    {
                        id:
                            "group_boar_leave_good",

                        text:
                            "{target} réalise une esquive parfaite et le sanglier disparaît dans la végétation.",

                        icon:
                            "😎",

                        effects: [
                            {
                                target:
                                    "target",

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
                            "group_boar_leave_neutral",

                        text:
                            "Le sanglier change finalement de direction avant d'atteindre {target}.",

                        icon:
                            "🐗",

                        effects:
                            [],

                        weight:
                            15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 9 - TEMPÊTE APRÈS L'ABRI
    // SUITE DE group_shelter
    // =========================================================

    {
        id:
            "group_storm_after_shelter",

        type:
            "group_vs_one",

        baseWeight:
            1,

        requirements: {

            any: [
                "group_shelter_shared",
                "group_shelter_refused"
            ]

        },

        title:
            "La tempête annoncée atteint enfin le camp",

        category:
            "Suite",

        icon:
            "⛈️",

        description:
            "Le vent arrache des branches et la pluie tombe horizontalement. L'abri construit plus tôt est maintenant mis à l'épreuve.",

        choices: [

            {
                id:
                    "group_storm_reinforce",

                title:
                    "🪵 Renforcer l'abri",

                description:
                    "Sortir sous la pluie pour consolider la structure.",

                consequences: [

                    {
                        id:
                            "group_storm_reinforce_good",

                        text:
                            "Les renforts tiennent. Lorsque la tempête se calme, tout le monde est encore au sec.",

                        icon:
                            "🛖",

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
                            24
                    },

                    {
                        id:
                            "group_storm_reinforce_bad",

                        text:
                            "Une rafale arrache une partie du toit alors que {group} tentent de le maintenir.",

                        icon:
                            "🌪️",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
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
                            51
                    },

                    {
                        id:
                            "group_storm_reinforce_neutral",

                        text:
                            "L'abri tient de justesse, mais l'effort nécessaire laisse tout le monde complètement épuisé.",

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
                            25
                    }

                ]
            },


            {
                id:
                    "group_storm_wait",

                title:
                    "🏠 Rester à l'intérieur",

                description:
                    "Faire confiance à la construction initiale.",

                consequences: [

                    {
                        id:
                            "group_storm_wait_good",

                        text:
                            "L'abri résiste étonnamment bien. La tempête finit par passer.",

                        icon:
                            "😌",

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
                            35
                    },

                    {
                        id:
                            "group_storm_wait_bad",

                        text:
                            "Une partie du toit s'effondre brutalement pendant la nuit.",

                        icon:
                            "💥",

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
                            45
                    },

                    {
                        id:
                            "group_storm_wait_neutral",

                        text:
                            "L'abri fuit de partout, mais tient jusqu'au matin.",

                        icon:
                            "🌧️",

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
            }

        ]
    },


    // =========================================================
    // 10 - CROCODILE À LA SOURCE
    // SUITE DE group_water_source
    // =========================================================

    {
        id:
            "group_crocodile_at_source",

        type:
            "group_vs_one",

        baseWeight:
            1,

        requirements: {

            all: [
                "group_water_camp"
            ]

        },

        title:
            "Un crocodile apparaît près de la source",

        category:
            "Suite",

        icon:
            "🐊",

        description:
            "Alors que tout le monde revient chercher de l'eau, un crocodile surgit entre la source et {target}.",

        choices: [

            {
                id:
                    "group_crocodile_help",

                title:
                    "🪵 Aider {target}",

                description:
                    "Faire diversion pour lui permettre de fuir.",

                consequences: [

                    {
                        id:
                            "group_crocodile_help_good",

                        text:
                            "{group} frappent des branches contre les rochers. Le crocodile hésite suffisamment longtemps pour permettre à {target} de fuir.",

                        icon:
                            "🏃",

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
                            20
                    },

                    {
                        id:
                            "group_crocodile_help_bad",

                        text:
                            "Le crocodile se détourne de {target}... et fonce directement vers {group}.",

                        icon:
                            "🐊",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "group_crocodile_help_neutral",

                        text:
                            "Après quelques secondes de tension, le crocodile retourne lentement dans l'eau.",

                        icon:
                            "🌊",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]
            },


            {
                id:
                    "group_crocodile_leave",

                title:
                    "🚶 S'éloigner",

                description:
                    "Laisser {target} chercher lui-même une sortie.",

                consequences: [

                    {
                        id:
                            "group_crocodile_leave_good",

                        text:
                            "{target} parvient miraculeusement à reculer lentement jusqu'à un arbre.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target:
                                    "target",

                                status: {
                                    id:
                                        "courage",

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
                            "group_crocodile_leave_bad",

                        text:
                            "{target} tente de fuir et le crocodile le rattrape avant qu'il n'atteigne la végétation.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            55
                    },

                    {
                        id:
                            "group_crocodile_leave_tired",

                        text:
                            "{target} réussit à grimper sur un rocher après une course épuisante.",

                        icon:
                            "🥵",

                        effects: [
                            {
                                target:
                                    "target",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        2
                                }
                            }
                        ],

                        weight:
                            15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 11 - BANANES
    // =========================================================

    {
        id:
            "group_bananas",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} trouvent un énorme régime de bananes",

        category:
            "Conflit de groupe",

        icon:
            "🍌",

        description:
            "{target} arrive alors que {group} viennent de récupérer une quantité impressionnante de bananes.",

        choices: [

            {
                id:
                    "group_bananas_share",

                title:
                    "🍌 Partager",

                description:
                    "Donner quelques bananes à {target}.",

                consequences: [

                    {
                        id:
                            "group_bananas_share_good",

                        text:
                            "Les bananes sont excellentes. Tout le monde mange suffisamment.",

                        icon:
                            "😋",

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
                            "group_bananas_share_bad",

                        text:
                            "L'odeur attire une bande de singes qui revendiquent immédiatement la propriété de la récolte.",

                        icon:
                            "🐒",

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
                            50
                    },

                    {
                        id:
                            "group_bananas_share_neutral",

                        text:
                            "Les bananes sont petites et peu nourrissantes. Au moins, personne ne repart complètement affamé.",

                        icon:
                            "🍌",

                        effects: [
                            {
                                target:
                                    "all",

                                removeStatus:
                                    "hungry"
                            }
                        ],

                        weight:
                            30
                    }

                ]
            },


            {
                id:
                    "group_bananas_keep",

                title:
                    "🙅 Ne rien donner",

                description:
                    "Conserver toute la récolte pour {group}.",

                consequences: [

                    {
                        id:
                            "group_bananas_keep_good",

                        text:
                            "{group} se partagent la récolte et récupèrent correctement.",

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
                            28
                    },

                    {
                        id:
                            "group_bananas_keep_bad",

                        text:
                            "{target} lance une banane dans la forêt. Quelques secondes plus tard, des dizaines de singes apparaissent.",

                        icon:
                            "🐒",

                        effects: [
                            {
                                target:
                                    "others",

                                lives:
                                    -2,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            47
                    },

                    {
                        id:
                            "group_bananas_keep_neutral",

                        text:
                            "{target} repart sans discuter. {group} découvrent ensuite que la moitié des bananes est déjà trop mûre.",

                        icon:
                            "😐",

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
    // 12 - NOUVEAU : FIÈVRE DE {target}
    // =========================================================

    {
        id:
            "group_target_fever",

        type:
            "group_vs_one",

        baseWeight:
            0.9,

        title:
            "{target} tombe gravement malade",

        category:
            "Décision de groupe",

        icon:
            "🤒",

        description:
            "{target} tremble, transpire et peine à tenir debout. {group} doivent décider combien de ressources consacrer à son état.",

        choices: [

            {
                id:
                    "group_fever_help",

                title:
                    "🩹 S'occuper de {target}",

                description:
                    "Sacrifier du temps et des ressources pour l'aider.",

                consequences: [

                    {
                        id:
                            "group_fever_help_good",

                        text:
                            "Le repos, l'eau et les soins fonctionnent. {target} récupère progressivement.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target:
                                    "target",

                                removeStatus:
                                    "poisoned"
                            },

                            {
                                target:
                                    "target",

                                removeStatus:
                                    "hungry"
                            },

                            {
                                target:
                                    "target",

                                lives:
                                    1
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
                            45
                    },

                    {
                        id:
                            "group_fever_help_neutral",

                        text:
                            "{target} se stabilise, mais les soins demandent presque toute la journée.",

                        icon:
                            "🤒",

                        effects: [
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
                            40
                    },

                    {
                        id:
                            "group_fever_help_bad",

                        text:
                            "Malgré les efforts, l'état de {target} empire temporairement.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target:
                                    "target",

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
                            15
                    }

                ]
            },


            {
                id:
                    "group_fever_isolate",

                title:
                    "🚫 Isoler {target}",

                description:
                    "Éviter de prendre des risques pour le reste du groupe.",

                consequences: [

                    {
                        id:
                            "group_fever_isolate_good",

                        text:
                            "{target} se repose seul et finit par récupérer sans intervention.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target:
                                    "target",

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
                            "group_fever_isolate_bad",

                        text:
                            "Sans aide, {target} manque d'eau pendant plusieurs heures et son état se dégrade.",

                        icon:
                            "🏜️",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2
                            }
                        ],

                        weight:
                            50
                    },

                    {
                        id:
                            "group_fever_isolate_neutral",

                        text:
                            "{target} passe la journée seul. Son état reste stable mais ne s'améliore pas.",

                        icon:
                            "😐",

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
    // 13 - NOUVEAU : FALAISE ET CORDE
    // =========================================================

    {
        id:
            "group_cliff_rope",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{target} doit descendre une falaise",

        category:
            "Décision de groupe",

        icon:
            "🪢",

        description:
            "Une corde improvisée permet d'atteindre une plage située en contrebas. {target} doit descendre en premier pendant que {group} tiennent la corde.",

        choices: [

            {
                id:
                    "group_cliff_hold",

                title:
                    "🪢 Maintenir la corde",

                description:
                    "Sécuriser sérieusement la descente.",

                consequences: [

                    {
                        id:
                            "group_cliff_hold_good",

                        text:
                            "{group} coordonnent parfaitement leur effort et {target} atteint la plage sans incident.",

                        icon:
                            "🤝",

                        effects: [
                            {
                                target:
                                    "target",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
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
                            40
                    },

                    {
                        id:
                            "group_cliff_hold_bad",

                        text:
                            "La corde glisse brutalement entre les mains de {group}. {target} chute sur les derniers mètres.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -1,

                                tags: [
                                    "physical"
                                ]
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
                            40
                    },

                    {
                        id:
                            "group_cliff_hold_neutral",

                        text:
                            "La descente est très lente mais finit par réussir.",

                        icon:
                            "🧗",

                        effects: [
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
                            20
                    }

                ]
            },


            {
                id:
                    "group_cliff_quick",

                title:
                    "⚡ Faire vite",

                description:
                    "Laisser filer la corde progressivement pour économiser les forces.",

                consequences: [

                    {
                        id:
                            "group_cliff_quick_good",

                        text:
                            "{target} descend rapidement et touche le sol sans problème.",

                        icon:
                            "😎",

                        effects:
                            [],

                        weight:
                            22
                    },

                    {
                        id:
                            "group_cliff_quick_bad",

                        text:
                            "La corde part beaucoup trop vite. {target} percute violemment la paroi.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target:
                                    "target",

                                lives:
                                    -2,

                                tags: [
                                    "physical"
                                ]
                            }
                        ],

                        weight:
                            63
                    },

                    {
                        id:
                            "group_cliff_quick_neutral",

                        text:
                            "{target} termine la descente en glissant sur les derniers mètres mais s'en sort indemne.",

                        icon:
                            "😬",

                        effects:
                            [],

                        weight:
                            15
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 14 - NOUVEAU : CHAMPIGNONS
    // =========================================================

    {
        id:
            "group_mushrooms",

        type:
            "group_vs_one",

        baseWeight:
            0.9,

        title:
            "{group} trouvent des champignons inconnus",

        category:
            "Nourriture",

        icon:
            "🍄",

        description:
            "{group} ont très faim. {target} affirme reconnaître les champignons et assure qu'ils sont parfaitement comestibles.",

        choices: [

            {
                id:
                    "group_mushrooms_trust",

                title:
                    "🍄 Faire confiance à {target}",

                description:
                    "Préparer les champignons pour tout le monde.",

                consequences: [

                    {
                        id:
                            "group_mushrooms_trust_good",

                        text:
                            "{target} avait raison. Le repas est parfaitement comestible et assez nourrissant.",

                        icon:
                            "😋",

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
                            18
                    },

                    {
                        id:
                            "group_mushrooms_trust_bad",

                        text:
                            "{target} était absolument certain. Malheureusement, il avait absolument tort.",

                        icon:
                            "☠️",

                        effects: [
                            {
                                target:
                                    "all",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            57
                    },

                    {
                        id:
                            "group_mushrooms_trust_neutral",

                        text:
                            "Les champignons ont un goût terrible mais ne semblent provoquer aucun effet particulier.",

                        icon:
                            "😖",

                        effects:
                            [],

                        weight:
                            25
                    }

                ]
            },


            {
                id:
                    "group_mushrooms_leave",

                title:
                    "🚫 Ne pas les manger",

                description:
                    "La confiance a ses limites.",

                consequences: [

                    {
                        id:
                            "group_mushrooms_leave_safe",

                        text:
                            "Quelques minutes plus tard, un petit animal goûte un champignon et s'enfuit immédiatement. Décision probablement raisonnable.",

                        icon:
                            "🐒",

                        effects:
                            [],

                        weight:
                            75
                    },

                    {
                        id:
                            "group_mushrooms_leave_hunger",

                        text:
                            "Le groupe poursuit sa route le ventre vide.",

                        icon:
                            "🍖",

                        effects: [
                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            25
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 15 - NOUVEAU : SIGNAL DE DÉTRESSE
    // DÉBUT MINI-HISTOIRE
    // =========================================================

    {
        id:
            "group_signal_fire",

        type:
            "group_vs_one",

        baseWeight:
            1,

        title:
            "{group} aperçoivent un bateau au loin",

        category:
            "Espoir",

        icon:
            "🚢",

        description:
            "Un minuscule bateau apparaît à l'horizon. {target} veut immédiatement utiliser tout le bois sec pour créer un gigantesque signal de fumée.",

        choices: [

            {
                id:
                    "group_signal_big",

                title:
                    "🔥 Utiliser tout le bois",

                description:
                    "Créer le plus grand signal possible.",

                narrative: {

                    setFlags: [
                        "group_signal_attempted",
                        "group_signal_big"
                    ],

                    removeFlags: [
                        "group_signal_small"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "group_signal_aftermath",

                            weight:
                                35
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "group_signal_big_good",

                        text:
                            "Le feu produit une immense colonne de fumée. Le bateau semble légèrement modifier sa trajectoire.",

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
                            15,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "group_signal_aftermath",

                                    weight:
                                        50
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "group_signal_big_bad",

                        text:
                            "Une rafale disperse immédiatement la fumée. Tout le stock de bois sec vient d'être gaspillé.",

                        icon:
                            "💨",

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
                            55,

                        narrative: {

                            nextSituationBoosts: [
                                {
                                    id:
                                        "group_signal_aftermath",

                                    weight:
                                        10
                                }
                            ]

                        }
                    },

                    {
                        id:
                            "group_signal_big_neutral",

                        text:
                            "La fumée monte correctement, mais le bateau est beaucoup trop loin pour savoir s'il l'a remarquée.",

                        icon:
                            "🌫️",

                        effects:
                            [],

                        weight:
                            30
                    }

                ]
            },


            {
                id:
                    "group_signal_small",

                title:
                    "🌫️ Économiser le bois",

                description:
                    "Créer un signal plus faible sans sacrifier toutes les ressources.",

                narrative: {

                    setFlags: [
                        "group_signal_attempted",
                        "group_signal_small"
                    ],

                    removeFlags: [
                        "group_signal_big"
                    ],

                    nextSituationBoosts: [
                        {
                            id:
                                "group_signal_aftermath",

                            weight:
                                22
                        }
                    ]

                },

                consequences: [

                    {
                        id:
                            "group_signal_small_good",

                        text:
                            "Le vent est parfait. Malgré sa taille, le signal produit une colonne de fumée visible très loin.",

                        icon:
                            "🌫️",

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
                            12
                    },

                    {
                        id:
                            "group_signal_small_bad",

                        text:
                            "Le signal est beaucoup trop faible. Le bateau continue sa route sans réagir.",

                        icon:
                            "🚢",

                        effects:
                            [],

                        weight:
                            48
                    },

                    {
                        id:
                            "group_signal_small_neutral",

                        text:
                            "Impossible de savoir si quelqu'un a aperçu la fumée.",

                        icon:
                            "👀",

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
    // 16 - SUITE : SIGNAL DE DÉTRESSE
    // =========================================================

    {
        id:
            "group_signal_aftermath",

        type:
            "group_vs_one",

        baseWeight:
            1,

        requirements: {

            all: [
                "group_signal_attempted"
            ]

        },

        title:
            "Un bruit de moteur résonne au large",

        category:
            "Suite",

        icon:
            "🔭",

        description:
            "Plus tard dans la journée, {group} et {target} entendent distinctement un moteur. Un bateau semble être quelque part derrière la côte rocheuse.",

        choices: [

            {
                id:
                    "group_signal_run",

                title:
                    "🏃 Courir jusqu'à la falaise",

                description:
                    "Essayer d'atteindre un point visible avant que le bateau ne disparaisse.",

                consequences: [

                    {
                        id:
                            "group_signal_run_good",

                        text:
                            "Tout le monde atteint la falaise et distingue clairement le bateau. Pendant quelques secondes, un marin semble regarder vers l'île.",

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
                            },

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
                    },

                    {
                        id:
                            "group_signal_run_bad",

                        text:
                            "La course est épuisante. Lorsque tout le monde arrive à la falaise, le bruit du moteur a déjà disparu.",

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
                                        2
                                }
                            }
                        ],

                        weight:
                            50
                    },

                    {
                        id:
                            "group_signal_run_neutral",

                        text:
                            "Un bateau est visible très loin, mais impossible de savoir s'il se dirige réellement vers l'île.",

                        icon:
                            "🔭",

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
            },


            {
                id:
                    "group_signal_wait",

                title:
                    "🛖 Rester au camp",

                description:
                    "Économiser les forces et espérer que le signal ait été vu.",

                consequences: [

                    {
                        id:
                            "group_signal_wait_good",

                        text:
                            "Le bruit du moteur se rapproche pendant quelques minutes avant de repartir. Quelqu'un a peut-être vu l'île.",

                        icon:
                            "👀",

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
                            20
                    },

                    {
                        id:
                            "group_signal_wait_neutral",

                        text:
                            "Le moteur disparaît progressivement. Personne ne saura jamais exactement où se trouvait le bateau.",

                        icon:
                            "🌊",

                        effects:
                            [],

                        weight:
                            80
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 17 - NOUVEAU : NID DE SERPENTS
    // =========================================================

    {
        id:
            "group_snake_nest",

        type:
            "group_vs_one",

        baseWeight:
            0.9,

        title:
            "{target} marche près d'un nid de serpents",

        category:
            "Danger",

        icon:
            "🐍",

        description:
            "{group} voient plusieurs serpents sortir d'un amas de pierres juste derrière {target}. Lui seul ne semble rien avoir remarqué.",

        choices: [

            {
                id:
                    "group_snake_warn",

                title:
                    "📢 Prévenir {target}",

                description:
                    "Lui faire signe de ne surtout plus bouger.",

                consequences: [

                    {
                        id:
                            "group_snake_warn_good",

                        text:
                            "{target} reste parfaitement immobile. Les serpents finissent par s'éloigner.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target:
                                    "target",

                                status: {
                                    id:
                                        "courage",

                                    duration:
                                        1
                                }
                            }
                        ],

                        weight:
                            40
                    },

                    {
                        id:
                            "group_snake_warn_bad",

                        text:
                            "Le cri fait sursauter {target}, qui pose son pied exactement au mauvais endroit.",

                        icon:
                            "🐍",

                        effects: [
                            {
                                target:
                                    "target",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            45
                    },

                    {
                        id:
                            "group_snake_warn_neutral",

                        text:
                            "{target} s'éloigne très lentement pendant que les serpents restent sous les pierres.",

                        icon:
                            "🥷",

                        effects:
                            [],

                        weight:
                            15
                    }

                ]
            },


            {
                id:
                    "group_snake_distract",

                title:
                    "🪨 Faire diversion",

                description:
                    "Lancer plusieurs pierres loin de {target}.",

                consequences: [

                    {
                        id:
                            "group_snake_distract_good",

                        text:
                            "Les serpents réagissent aux vibrations et s'éloignent dans l'autre direction.",

                        icon:
                            "🎯",

                        effects:
                            [],

                        weight:
                            35
                    },

                    {
                        id:
                            "group_snake_distract_bad",

                        text:
                            "Une pierre tombe beaucoup trop près. Les serpents deviennent agressifs et se dispersent vers tout le monde.",

                        icon:
                            "😱",

                        effects: [
                            {
                                target:
                                    "all",

                                status:
                                    "poisoned"
                            }
                        ],

                        weight:
                            40
                    },

                    {
                        id:
                            "group_snake_distract_neutral",

                        text:
                            "Les serpents restent sur place, mais {target} profite de la diversion pour reculer lentement.",

                        icon:
                            "🐍",

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
    // 18 - NOUVEAU : JOURNÉE DE CONSTRUCTION
    // RESPIRATION / ÉQUILIBRAGE
    // =========================================================

    {
        id:
            "group_build_day",

        type:
            "group_vs_one",

        baseWeight:
            0.8,

        title:
            "{group} organisent une journée de préparation",

        category:
            "Survie",

        icon:
            "🛠️",

        description:
            "Pour une fois, aucun danger immédiat. {group} veulent profiter de la journée pour améliorer le camp. {target} propose une méthode différente.",

        choices: [

            {
                id:
                    "group_build_tools",

                title:
                    "🛠️ Fabriquer des outils",

                description:
                    "Préparer du matériel pour les prochains jours.",

                consequences: [

                    {
                        id:
                            "group_build_tools_good",

                        text:
                            "La journée est productive. Plusieurs outils improvisés sont désormais utilisables.",

                        icon:
                            "🔨",

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
                            55
                    },

                    {
                        id:
                            "group_build_tools_tired",

                        text:
                            "Les outils sont utilisables, mais la journée entière passée à travailler laisse tout le monde épuisé.",

                        icon:
                            "🥵",

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
                            },

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
                    }

                ]
            },


            {
                id:
                    "group_build_rest",

                title:
                    "😴 Faire une journée de repos",

                description:
                    "Les outils attendront demain.",

                consequences: [

                    {
                        id:
                            "group_build_rest_good",

                        text:
                            "Le calme de la journée permet enfin à tout le monde de récupérer correctement.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target:
                                    "all",

                                gauge: {
                                    id:
                                        "fatigue",

                                    amount:
                                        -2
                                }
                            }
                        ],

                        weight:
                            75
                    },

                    {
                        id:
                            "group_build_rest_hungry",

                        text:
                            "Le repos aide, mais le manque de nourriture commence à devenir impossible à ignorer.",

                        icon:
                            "🍖",

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
                            },

                            {
                                target:
                                    "all",

                                status: {
                                    id:
                                        "hungry",

                                    duration:
                                        2
                                }
                            }
                        ],

                        weight:
                            25
                    }

                ]
            }

        ]
    }

];