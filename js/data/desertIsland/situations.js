export const SITUATIONS = [

    // =====================================================
    // 1. HORDE DE SINGES
    // =====================================================

    {
        id: "monkey_horde",
        type: "classic",
        category: "danger",
        icon: "🐒",
        title: "Une horde de singes arrive !",
        description:
            "Des dizaines de singes surgissent de la végétation et foncent droit sur toi.",

        choices: [

            {
                id: "monkey_run",
                title: "Courir",
                consequences: [

                    {
                        id: "monkey_run_damage",
                        text:
                            "Tu réussis à t'échapper, mais pas sans quelques blessures.",
                        icon: "💥",
                        weight: 60,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ]
                    },

                    {
                        id: "monkey_run_fatigue",
                        text:
                            "Tu distances finalement la horde, complètement essoufflé.",
                        icon: "😥",
                        weight: 40,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "monkey_fight",
                title: "Se battre",
                consequences: [

                    {
                        id: "monkey_fight_win",
                        text:
                            "Contre toute attente, tu fais fuir la horde. Cette victoire te donne confiance.",
                        icon: "💪",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "monkey_fight_lose",
                        text:
                            "Ils sont beaucoup trop nombreux. Tu ressors sérieusement amoché.",
                        icon: "🐒",
                        weight: 80,
                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            },

            {
                id: "monkey_trap",
                title: "🛠️ Improviser un piège",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "monkey_trap_success",
                        text:
                            "Ton piège détourne complètement la horde. Tu passes sans subir le moindre dégât.",
                        icon: "🛠️",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 2. NOIX DE COCO
    // =====================================================

    {
        id: "coconut",
        type: "classic",
        category: "resource",
        icon: "🥥",
        title: "Une noix de coco tombe devant toi",
        description:
            "Elle semble encore fraîche. Mais sur cette île, même un repas peut réserver une mauvaise surprise.",

        choices: [

            {
                id: "coconut_eat",
                title: "La manger",
                consequences: [

                    {
                        id: "coconut_good",
                        text:
                            "La noix est excellente et te redonne des forces.",
                        icon: "😋",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    },

                    {
                        id: "coconut_bad",
                        text:
                            "Mauvaise idée. Elle était presque pourrie et ton estomac ne l'apprécie pas.",
                        icon: "🤢",
                        weight: 40,
                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "hungry",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "coconut_neutral",
                        text:
                            "Elle n'est ni bonne ni mauvaise. Au moins, rien ne t'arrive.",
                        icon: "🥥",
                        weight: 30,
                        effects: []
                    }

                ]
            },

            {
                id: "coconut_ignore",
                title: "L'ignorer",
                consequences: [

                    {
                        id: "coconut_ignore_nothing",
                        text:
                            "Tu continues ton chemin sans y toucher.",
                        icon: "🚶",
                        weight: 80,
                        effects: []
                    },

                    {
                        id: "coconut_ignore_resourceful",
                        text:
                            "En observant la noix et les fibres autour, une idée te vient. Tout peut servir ici.",
                        icon: "🛠️",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "coconut_resourceful",
                title: "🛠️ Récupérer la noix et ses fibres",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "coconut_resourceful_success",
                        text:
                            "Tu récupères proprement ce qui peut être utile sans prendre de risque.",
                        icon: "🛠️",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 3. GROTTE — DÉBUT
    // =====================================================

    {
        id: "cave",
        type: "classic",
        category: "exploration",
        icon: "🕳️",
        title: "Tu découvres une immense grotte",
        description:
            "Une ouverture béante s'enfonce sous la roche. L'air froid qui en sort contraste avec la chaleur de l'île.",

        choices: [

            {
                id: "cave_enter",
                title: "Entrer",
                consequences: [

                    {
                        id: "cave_enter_success",
                        text:
                            "Tu progresses dans l'obscurité. Le terrain est éprouvant, mais un passage continue plus profondément.",
                        icon: "🔦",
                        weight: 80,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_started"
                            ],
                            forceNextSituation:
                                "cave_deeper"
                        }
                    },

                    {
                        id: "cave_enter_fail",
                        text:
                            "Tu glisses sur la roche et te blesses. Tu préfères abandonner l'exploration.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_closed"
                            ],
                            removeFlags: [
                                "cave_started",
                                "cave_deeper_reached"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "cave_stay_out",
                title: "Rester dehors",
                consequences: [

                    {
                        id: "cave_stay_out_safe",
                        text:
                            "Tu décides que cette grotte ne mérite pas le risque.",
                        icon: "🌴",
                        weight: 80,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "cave_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "cave_stay_out_fatigue",
                        text:
                            "Tu contournes la zone rocheuse. Le détour est plus fatigant que prévu.",
                        icon: "😥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_closed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "cave_resourceful",
                title: "🛠️ Fabriquer une torche et explorer",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "cave_resourceful_success",
                        text:
                            "Avec une torche improvisée, tu peux avancer sans difficulté dans l'obscurité.",
                        icon: "🔥",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "cave_started"
                            ],
                            forceNextSituation:
                                "cave_deeper"
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 4. SERPENT
    // =====================================================

    {
        id: "snake",
        type: "classic",
        category: "danger",
        icon: "🐍",
        title: "Un serpent bloque le passage",
        description:
            "Le reptile se dresse devant toi et semble prêt à frapper au moindre mouvement.",

        choices: [

            {
                id: "snake_slow",
                title: "Passer doucement",
                consequences: [

                    {
                        id: "snake_slow_success",
                        text:
                            "Tu observes ses mouvements et réussis à passer. Cette expérience t'apprend à mieux improviser.",
                        icon: "🛠️",
                        weight: 70,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "snake_slow_fail",
                        text:
                            "Le serpent frappe plus vite que prévu.",
                        icon: "☠️",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "poisoned"
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "snake_stone",
                title: "Lui jeter une pierre",
                consequences: [

                    {
                        id: "snake_stone_success",
                        text:
                            "Ton lancer est parfait. Le serpent prend la fuite et tu te sens invincible.",
                        icon: "💪",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "snake_stone_fail",
                        text:
                            "La pierre le rend agressif. Il bondit et te mord.",
                        icon: "☠️",
                        weight: 70,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "poisoned"
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "snake_diversion",
                title: "🛠️ Créer une diversion",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "snake_diversion_success",
                        text:
                            "Tu détournes son attention et passes tranquillement.",
                        icon: "🛠️",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 5. CABANE — DÉBUT
    // =====================================================

    {
        id: "abandoned_hut",
        type: "classic",
        category: "exploration",
        icon: "🛖",
        title: "Tu trouves une cabane abandonnée",
        description:
            "À moitié dissimulée par la végétation, une vieille cabane semble abandonnée depuis des années.",

        choices: [

            {
                id: "hut_enter",
                title: "Entrer",
                consequences: [

                    {
                        id: "hut_enter_good",
                        text:
                            "Tu trouves quelques provisions encore utilisables. Quelque chose dans le plancher attire ensuite ton attention.",
                        icon: "❤️",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_started"
                            ],
                            forceNextSituation:
                                "hut_inside"
                        }
                    },

                    {
                        id: "hut_enter_bad",
                        text:
                            "Une planche cède sous ton poids. Blessé, tu quittes immédiatement la cabane.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "hut_enter_neutral",
                        text:
                            "L'intérieur semble vide, mais certaines lames du plancher paraissent étrangement récentes.",
                        icon: "🔎",
                        weight: 50,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_started"
                            ],
                            forceNextSituation:
                                "hut_inside"
                        }
                    }

                ]
            },

            {
                id: "hut_continue",
                title: "Continuer ton chemin",
                consequences: [

                    {
                        id: "hut_continue_safe",
                        text:
                            "Tu laisses la cabane derrière toi.",
                        icon: "🚶",
                        weight: 80,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "hut_continue_tired",
                        text:
                            "Tu contournes la végétation autour de la cabane et perds beaucoup d'énergie.",
                        icon: "😥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "hut_window",
                title: "🛠️ Inspecter par la fenêtre avant d'entrer",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "hut_window_success",
                        text:
                            "Tu repères les planches fragiles avant d'entrer et explores la cabane sans danger.",
                        icon: "🔎",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_started"
                            ],
                            forceNextSituation:
                                "hut_inside"
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 6. TEMPÊTE
    // =====================================================

    {
        id: "storm",
        type: "classic",
        category: "weather",
        icon: "⛈️",
        title: "Une énorme tempête approche",
        description:
            "Le ciel devient noir en quelques minutes. Le vent secoue déjà violemment les arbres.",

        choices: [

            {
                id: "storm_tree",
                title: "S'abriter sous le premier arbre",
                consequences: [

                    {
                        id: "storm_tree_good",
                        text:
                            "L'arbre résiste à la tempête. Tu traverses l'épreuve avec une confiance nouvelle.",
                        icon: "🛡️",
                        weight: 35,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "storm_tree_bad",
                        text:
                            "Une énorme branche s'effondre près de toi et te frappe.",
                        icon: "🌳",
                        weight: 65,
                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            },

            {
                id: "storm_rock",
                title: "Chercher un abri rocheux",
                consequences: [

                    {
                        id: "storm_rock_good",
                        text:
                            "Tu trouves une cavité parfaitement protégée du vent et récupères un peu.",
                        icon: "🪨",
                        weight: 60,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "storm_rock_bad",
                        text:
                            "La recherche est difficile, mais tu finis par trouver un abri après quelques blessures.",
                        icon: "💥",
                        weight: 40,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "storm_resourceful",
                title: "🛠️ Construire un abri rapide",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "storm_resourceful_success",
                        text:
                            "Ton abri improvisé tient suffisamment longtemps pour laisser passer le plus violent de la tempête.",
                        icon: "🛖",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 7. RIVIÈRE — DÉBUT
    // =====================================================

    {
        id: "river",
        type: "classic",
        category: "exploration",
        icon: "🌊",
        title: "Une rivière bloque ton chemin",
        description:
            "Le courant est puissant. Tu peux tenter de traverser ou suivre la rivière vers l'intérieur de l'île.",

        choices: [

            {
                id: "river_cross",
                title: "Traverser",
                consequences: [

                    {
                        id: "river_cross_tired",
                        text:
                            "Tu atteins l'autre rive, épuisé par le courant.",
                        icon: "😥",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "river_cross_hurt",
                        text:
                            "Le courant te projette contre les rochers avant que tu atteignes l'autre rive.",
                        icon: "💥",
                        weight: 70,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_closed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "river_follow",
                title: "Suivre la rivière",
                consequences: [

                    {
                        id: "river_follow_tired",
                        text:
                            "Le trajet est fatigant, mais un grondement immense apparaît au loin.",
                        icon: "🌊",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_started"
                            ],
                            forceNextSituation:
                                "waterfall"
                        }
                    },

                    {
                        id: "river_follow_fail",
                        text:
                            "Tu glisses sur la berge et te blesses. Tu décides d'abandonner ce chemin.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "river_follow_good",
                        text:
                            "Tu suis tranquillement la berge. Le bruit d'une immense cascade devient de plus en plus puissant.",
                        icon: "💧",
                        weight: 50,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "river_started"
                            ],
                            forceNextSituation:
                                "waterfall"
                        }
                    }

                ]
            },

            {
                id: "river_raft",
                title: "🛠️ Fabriquer un petit radeau",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "river_raft_success",
                        text:
                            "Ton radeau fonctionne. Tu traverses directement jusqu'à l'autre rive sans te blesser.",
                        icon: "🛶",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "river_closed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 8. SANGLIER
    // =====================================================

    {
        id: "boar",
        type: "classic",
        category: "danger",
        icon: "🐗",
        title: "Un sanglier te charge",
        description:
            "Un énorme sanglier surgit des buissons et fonce droit sur toi.",

        choices: [

            {
                id: "boar_tree",
                title: "Grimper à un arbre",
                consequences: [

                    {
                        id: "boar_tree_tired",
                        text:
                            "Tu échappes au sanglier, mais l'ascension t'épuise.",
                        icon: "😥",
                        weight: 40,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "boar_tree_hurt",
                        text:
                            "Le sanglier te percute avant que tu sois suffisamment haut.",
                        icon: "💥",
                        weight: 25,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ]
                    },

                    {
                        id: "boar_tree_safe",
                        text:
                            "Tu atteins une branche juste à temps. Le sanglier finit par partir.",
                        icon: "🌳",
                        weight: 35,
                        effects: []
                    }

                ]
            },

            {
                id: "boar_dodge",
                title: "L'esquiver",
                consequences: [

                    {
                        id: "boar_dodge_success",
                        text:
                            "Tu esquives la charge au dernier instant. Cette réussite te galvanise.",
                        icon: "🛡️",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "boar_dodge_fail",
                        text:
                            "Le sanglier anticipe ton mouvement et te percute violemment.",
                        icon: "🐗",
                        weight: 80,
                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            },

            {
                id: "boar_resourceful",
                title: "🛠️ Se faire passer pour un sanglier",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "boar_resourceful_success",
                        text:
                            "Personne ne sait vraiment pourquoi ça fonctionne, mais le sanglier hésite puis s'en va. Tu peux enfin souffler.",
                        icon: "🐗",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 9. CABANE — INTÉRIEUR
    // =====================================================

    {
        id: "hut_inside",
        type: "classic",
        category: "exploration",
        icon: "🛖",
        title: "Tu explores plus sérieusement la cabane",
        description:
            "Certaines lames du plancher semblent avoir été déplacées récemment.",

        requirements: {
            all: [
                "hut_started"
            ],
            not: [
                "hut_closed"
            ]
        },

        choices: [

            {
                id: "hut_floor",
                title: "Inspecter le plancher",
                consequences: [

                    {
                        id: "hut_floor_success",
                        text:
                            "Sous une vieille natte, tu découvres les contours d'une trappe.",
                        icon: "🔎",
                        weight: 60,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_trapdoor_found"
                            ],
                            forceNextSituation:
                                "hut_trapdoor"
                        }
                    },

                    {
                        id: "hut_floor_resourceful",
                        text:
                            "Après une longue inspection, tu comprends comment le mécanisme du plancher fonctionne.",
                        icon: "🛠️",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_trapdoor_found"
                            ],
                            forceNextSituation:
                                "hut_trapdoor"
                        }
                    },

                    {
                        id: "hut_floor_fail",
                        text:
                            "Une lame pourrie cède et te blesse. Tu préfères quitter définitivement la cabane.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "hut_leave",
                title: "Quitter la cabane",
                consequences: [

                    {
                        id: "hut_leave_safe",
                        text:
                            "Tu quittes la cabane et reprends ton exploration de l'île.",
                        icon: "🚶",
                        weight: 90,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "hut_leave_bad",
                        text:
                            "Une planche te blesse au moment de sortir.",
                        icon: "💥",
                        weight: 10,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "hut_floor_key",
                title: "🛠️ Chercher un mécanisme d'ouverture",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "hut_floor_key_success",
                        text:
                            "Tu trouves une vieille clé cachée entre deux lames. Elle semble correspondre à la serrure de la trappe.",
                        icon: "🗝️",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_trapdoor_found",
                                "hut_key"
                            ],
                            forceNextSituation:
                                "hut_trapdoor"
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 10. RUCHE
    // =====================================================

    {
        id: "bees",
        type: "classic",
        category: "resource",
        icon: "🐝",
        title: "Tu trouves une énorme ruche",
        description:
            "Une quantité impressionnante de miel est visible, mais des centaines d'abeilles protègent la ruche.",

        choices: [

            {
                id: "bees_honey",
                title: "Prendre du miel",
                consequences: [

                    {
                        id: "bees_honey_success",
                        text:
                            "Tu récupères une belle quantité de miel sans trop déranger les abeilles.",
                        icon: "🍯",
                        weight: 40,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "bees_honey_fail",
                        text:
                            "La ruche entière se retourne contre toi.",
                        icon: "🐝",
                        weight: 60,
                        effects: [
                            {
                                target: "actor",
                                lives: -2,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            },

            {
                id: "bees_leave",
                title: "Partir",
                consequences: [

                    {
                        id: "bees_leave_safe",
                        text:
                            "Tu t'éloignes prudemment.",
                        icon: "🚶",
                        weight: 90,
                        effects: []
                    },

                    {
                        id: "bees_leave_bad",
                        text:
                            "Quelques abeilles t'ont déjà repéré et te poursuivent.",
                        icon: "🐝",
                        weight: 10,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ]
                    }

                ]
            },

            {
                id: "bees_smoke",
                title: "🛠️ Fabriquer de la fumée",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "bees_smoke_success",
                        text:
                            "La fumée calme suffisamment les abeilles pour récupérer du miel sans danger.",
                        icon: "🍯",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ]
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 11. GROTTE — PASSAGE PROFOND
    // =====================================================

    {
        id: "cave_deeper",
        type: "classic",
        category: "exploration",
        icon: "🔦",
        title: "Un passage s'enfonce plus profondément dans la grotte",
        description:
            "La lumière extérieure disparaît derrière toi. Le bruit régulier de gouttes d'eau résonne dans les profondeurs.",

        requirements: {
            all: [
                "cave_started"
            ],
            not: [
                "cave_closed"
            ]
        },

        choices: [

            {
                id: "cave_deeper_continue",
                title: "Continuer",
                consequences: [

                    {
                        id: "cave_deeper_continue_safe",
                        text:
                            "Le passage débouche finalement sur une immense cavité.",
                        icon: "🕳️",
                        weight: 55,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "cave_deeper_reached"
                            ],
                            forceNextSituation:
                                "cave_lake"
                        }
                    },

                    {
                        id: "cave_deeper_continue_tired",
                        text:
                            "La progression est difficile, mais tu découvres plusieurs repères naturels qui t'aident à avancer.",
                        icon: "🛠️",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_deeper_reached"
                            ],
                            forceNextSituation:
                                "cave_lake"
                        }
                    },

                    {
                        id: "cave_deeper_continue_fail",
                        text:
                            "Une chute de pierres te blesse. Tu rebrousses chemin avant que le passage ne devienne trop dangereux.",
                        icon: "💥",
                        weight: 15,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_closed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "cave_deeper_back",
                title: "Faire demi-tour",
                consequences: [

                    {
                        id: "cave_deeper_back_safe",
                        text:
                            "Tu retrouves la sortie sans difficulté.",
                        icon: "🌴",
                        weight: 90,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "cave_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "cave_deeper_back_bad",
                        text:
                            "Tu te blesses légèrement en remontant vers la sortie.",
                        icon: "💥",
                        weight: 10,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_closed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "cave_deeper_resourceful",
                title: "🛠️ Se repérer au bruit des gouttes d'eau",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "cave_deeper_resourceful_success",
                        text:
                            "Tu suis méthodiquement l'écho de l'eau jusqu'à une immense cavité.",
                        icon: "💧",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "cave_deeper_reached"
                            ],
                            forceNextSituation:
                                "cave_lake"
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 12. GROTTE — LAC SOUTERRAIN
    // FIN DE L'HISTOIRE
    // =====================================================

    {
        id: "cave_lake",
        type: "classic",
        category: "exploration",
        icon: "💧",
        title: "Tu découvres un lac souterrain",
        description:
            "Une eau parfaitement calme s'étend sous la roche. Après cette longue exploration, tu as enfin atteint le cœur de la grotte.",

        requirements: {
            all: [
                "cave_deeper_reached"
            ],
            not: [
                "cave_closed"
            ]
        },

        choices: [

            {
                id: "cave_lake_drink",
                title: "Boire",
                consequences: [

                    {
                        id: "cave_lake_drink_good",
                        text:
                            "L'eau est fraîche et parfaitement potable. Tu récupères énormément d'énergie.",
                        icon: "❤️",
                        weight: 60,
                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "cave_lake_drink_poison",
                        text:
                            "L'eau semblait pure, mais quelque chose ne va pas...",
                        icon: "☠️",
                        weight: 15,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "poisoned"
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "cave_lake_drink_neutral",
                        text:
                            "L'eau n'a rien d'exceptionnel, mais elle calme ta faim.",
                        icon: "💧",
                        weight: 25,
                        effects: [
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_completed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "cave_lake_leave",
                title: "Ne rien toucher",
                consequences: [
                    {
                        id: "cave_lake_leave_success",
                        text:
                            "Tu résistes à la tentation. Être arrivé jusqu'ici suffit à renforcer ton courage.",
                        icon: "🛡️",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 2
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            },

            {
                id: "cave_lake_filter",
                title: "🛠️ Filtrer l'eau avec une chaussette",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "cave_lake_filter_success",
                        text:
                            "Ce n'est pas très élégant, mais ça fonctionne. L'eau te redonne toutes tes forces.",
                        icon: "🧦",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "cave_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 13. RIVIÈRE — CASCADE
    // =====================================================

    {
        id: "waterfall",
        type: "classic",
        category: "exploration",
        icon: "🌊",
        title: "Le bruit d'une immense cascade se rapproche",
        description:
            "La rivière se jette soudainement dans le vide. En contrebas, tu aperçois un bassin turquoise.",

        requirements: {
            all: [
                "river_started"
            ],
            not: [
                "river_closed"
            ]
        },

        choices: [

            {
                id: "waterfall_descend",
                title: "Descendre la paroi",
                consequences: [

                    {
                        id: "waterfall_descend_tired",
                        text:
                            "La descente est éprouvante, mais tu atteins le pied de la cascade.",
                        icon: "😥",
                        weight: 50,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "waterfall_descended"
                            ],
                            forceNextSituation:
                                "waterfall_pool"
                        }
                    },

                    {
                        id: "waterfall_descend_fail",
                        text:
                            "Une prise casse sous ta main. Tu chutes et renonces à descendre plus bas.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "waterfall_descend_courage",
                        text:
                            "Tu maîtrises parfaitement la descente. L'expérience te donne confiance.",
                        icon: "🛡️",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "waterfall_descended"
                            ],
                            forceNextSituation:
                                "waterfall_pool"
                        }
                    }

                ]
            },

            {
                id: "waterfall_back",
                title: "Rebrousser chemin",
                consequences: [
                    {
                        id: "waterfall_back_success",
                        text:
                            "Tu préfères ne pas risquer la descente et retournes vers la forêt.",
                        icon: "🚶",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "river_closed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            },

            {
                id: "waterfall_rope",
                title: "🛠️ Fabriquer une corde",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "waterfall_rope_success",
                        text:
                            "Ta corde improvisée rend la descente presque facile.",
                        icon: "🪢",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "waterfall_descended"
                            ],
                            forceNextSituation:
                                "waterfall_pool"
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 14. RIVIÈRE — BASSIN
    // FIN DE L'HISTOIRE
    // =====================================================

    {
        id: "waterfall_pool",
        type: "classic",
        category: "resource",
        icon: "🏞️",
        title: "Un bassin turquoise s'étend sous la cascade",
        description:
            "Après avoir suivi la rivière jusqu'ici, tu découvres un endroit presque paradisiaque.",

        requirements: {
            all: [
                "waterfall_descended"
            ],
            not: [
                "river_closed"
            ]
        },

        choices: [

            {
                id: "pool_fish",
                title: "Essayer de pêcher",
                consequences: [

                    {
                        id: "pool_fish_success",
                        text:
                            "Tu attrapes finalement un poisson. Un vrai festin.",
                        icon: "🐟",
                        weight: 50,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "pool_fish_tired",
                        text:
                            "Les poissons sont beaucoup plus rapides que toi. Tu t'épuises pour rien.",
                        icon: "😥",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "pool_fish_nothing",
                        text:
                            "Après une longue attente, tu abandonnes.",
                        icon: "💧",
                        weight: 20,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "river_completed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "pool_rest",
                title: "Se reposer",
                consequences: [
                    {
                        id: "pool_rest_success",
                        text:
                            "Le bruit de la cascade et l'eau fraîche te permettent de récupérer pleinement.",
                        icon: "😴",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -2
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            },

            {
                id: "pool_harpoon",
                title: "🛠️ Fabriquer un harpon avec des pierres",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "pool_harpoon_success",
                        text:
                            "Ton harpon improvisé fonctionne étonnamment bien.",
                        icon: "🐟",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "river_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 15. CABANE — TRAPPE
    // =====================================================

    {
        id: "hut_trapdoor",
        type: "classic",
        category: "exploration",
        icon: "🚪",
        title: "Une trappe est cachée sous le plancher",
        description:
            "La vieille trappe est solidement fermée. Quelque chose se trouve forcément en dessous.",

        requirements: {
            all: [
                "hut_trapdoor_found"
            ],
            not: [
                "hut_closed"
            ]
        },

        choices: [

            {
                id: "trapdoor_force",
                title: "Forcer la trappe",
                consequences: [

                    {
                        id: "trapdoor_force_fail",
                        text:
                            "Le bois casse brutalement et te blesse. Impossible de continuer.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "trapdoor_force_resourceful",
                        text:
                            "Tu finis par comprendre comment faire levier sur le mécanisme.",
                        icon: "🛠️",
                        weight: 25,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_cellar_open"
                            ],
                            forceNextSituation:
                                "hut_cellar"
                        }
                    },

                    {
                        id: "trapdoor_force_success",
                        text:
                            "Après plusieurs efforts, la serrure cède. Un escalier descend dans l'obscurité.",
                        icon: "🕳️",
                        weight: 55,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_cellar_open"
                            ],
                            forceNextSituation:
                                "hut_cellar"
                        }
                    }

                ]
            },

            {
                id: "trapdoor_leave",
                title: "Laisser la trappe",
                consequences: [
                    {
                        id: "trapdoor_leave_success",
                        text:
                            "Tu décides que ce qui se trouve dessous peut très bien y rester.",
                        icon: "🚶",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_closed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            },

            {
                id: "trapdoor_key",
                title: "🗝️ Utiliser la clé",
                condition: {
                    all: [
                        {
                            type: "status",
                            id: "resourceful"
                        }
                    ]
                },
                consequences: [
                    {
                        id: "trapdoor_key_success",
                        text:
                            "La clé tourne parfaitement dans la serrure. La trappe s'ouvre sans effort.",
                        icon: "🗝️",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_cellar_open"
                            ],
                            forceNextSituation:
                                "hut_cellar"
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 16. CABANE — CAVE
    // FIN DE L'HISTOIRE
    // =====================================================

    {
        id: "hut_cellar",
        type: "classic",
        category: "exploration",
        icon: "🕯️",
        title: "Une petite cave se trouve sous la cabane",
        description:
            "Des caisses, de vieux outils et plusieurs étagères remplissent cette pièce oubliée.",

        requirements: {
            all: [
                "hut_cellar_open"
            ],
            not: [
                "hut_closed"
            ]
        },

        choices: [

            {
                id: "cellar_search",
                title: "Fouiller la cave",
                consequences: [

                    {
                        id: "cellar_search_resourceful",
                        text:
                            "Tu récupères plusieurs objets qui pourront t'être utiles.",
                        icon: "🛠️",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "cellar_search_food",
                        text:
                            "Tu trouves quelques conserves encore mangeables.",
                        icon: "🥫",
                        weight: 60,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "cellar_search_poison",
                        text:
                            "Tu respires la poussière d'un vieux produit renversé. Tu ne te sens pas bien.",
                        icon: "☠️",
                        weight: 10,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "poisoned"
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_completed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "cellar_leave",
                title: "Remonter",
                consequences: [
                    {
                        id: "cellar_leave_success",
                        text:
                            "Tu remontes dans la cabane et reprends ton exploration.",
                        icon: "🚶",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "hut_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            },

            {
                id: "cellar_wall",
                title: "🛠️ Inspecter le faux mur",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "cellar_wall_success",
                        text:
                            "Derrière le faux mur, tu découvres une réserve parfaitement conservée.",
                        icon: "🎁",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "hut_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 17. CHALEUR
    // =====================================================

    {
        id: "desert_heatwave",
        type: "classic",
        category: "weather",
        icon: "☀️",
        title: "La chaleur devient insupportable",
        description:
            "Le soleil frappe sans relâche et chaque pas devient plus difficile.",

        choices: [

            {
                id: "heatwave_continue",
                title: "Continuer d'avancer",
                consequences: [

                    {
                        id: "heatwave_continue_tired",
                        text:
                            "Tu forces beaucoup trop et sens tes forces disparaître.",
                        icon: "🥵",
                        weight: 60,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "heatwave_continue_good",
                        text:
                            "Tu trouves finalement une zone plus fraîche et récupères en chemin.",
                        icon: "❤️",
                        weight: 40,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "heatwave_shadow",
                title: "Chercher de l'ombre",
                consequences: [

                    {
                        id: "heatwave_shadow_rest",
                        text:
                            "Tu trouves un arbre immense et récupères à l'ombre.",
                        icon: "🌴",
                        weight: 75,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "heatwave_shadow_hungry",
                        text:
                            "Tu récupères un peu, mais la pause te rappelle à quel point tu as faim.",
                        icon: "🍖",
                        weight: 25,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "hungry",
                                    duration: 2
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "heatwave_resourceful",
                title: "🛠️ Extraire l'eau contenue dans un arbre",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "heatwave_resourceful_success",
                        text:
                            "Tu récupères suffisamment d'eau pour te rafraîchir et reprendre des forces.",
                        icon: "💧",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 18. FRUITS INCONNUS
    // =====================================================

    {
        id: "desert_unknown_fruits",
        type: "classic",
        category: "resource",
        icon: "🍈",
        title: "Tu découvres des fruits inconnus",
        description:
            "Ils sont colorés, juteux... et absolument impossibles à identifier au premier regard.",

        choices: [

            {
                id: "unknown_fruits_eat",
                title: "En goûter un",
                consequences: [

                    {
                        id: "unknown_fruits_good",
                        text:
                            "Ils sont délicieux et parfaitement comestibles.",
                        icon: "😋",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "courage",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "unknown_fruits_poison",
                        text:
                            "Quelques minutes plus tard, ton ventre commence à se retourner.",
                        icon: "☠️",
                        weight: 50,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "poisoned"
                                }
                            }
                        ]
                    },

                    {
                        id: "unknown_fruits_neutral",
                        text:
                            "Le goût est étrange, mais rien ne semble se produire.",
                        icon: "🤨",
                        weight: 20,
                        effects: []
                    }

                ]
            },

            {
                id: "unknown_fruits_leave",
                title: "Continuer",
                consequences: [
                    {
                        id: "unknown_fruits_leave_safe",
                        text:
                            "Tu préfères ne pas tester ta chance.",
                        icon: "🚶",
                        weight: 100,
                        effects: []
                    }
                ]
            },

            {
                id: "unknown_fruits_resourceful",
                title: "🛠️ Identifier les fruits",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "unknown_fruits_resourceful_success",
                        text:
                            "Tu reconnais l'espèce : ils sont parfaitement comestibles.",
                        icon: "🍈",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            }
                        ]
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 19. ÉPAVE — DÉBUT
    // =====================================================

    {
        id: "desert_shipwreck",
        type: "classic",
        category: "exploration",
        icon: "🚢",
        title: "Une épave apparaît à marée basse",
        description:
            "La marée découvre la carcasse d'un vieux bateau. Une partie du pont est encore accessible.",

        choices: [

            {
                id: "shipwreck_explore",
                title: "Explorer l'épave",
                consequences: [

                    {
                        id: "shipwreck_explore_resourceful",
                        text:
                            "Tu comprends rapidement comment te déplacer dans la structure instable et repères un accès vers la cale.",
                        icon: "🛠️",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "shipwreck_started"
                            ],
                            forceNextSituation:
                                "desert_shipwreck_hold"
                        }
                    },

                    {
                        id: "shipwreck_explore_fail",
                        text:
                            "Une partie du pont s'effondre. Tu te blesses et quittes l'épave avant qu'elle ne devienne trop dangereuse.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "shipwreck_closed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "shipwreck_explore_safe",
                        text:
                            "Tu traverses le pont avec prudence et découvres un escalier menant sous le navire.",
                        icon: "🔎",
                        weight: 50,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "shipwreck_started"
                            ],
                            forceNextSituation:
                                "desert_shipwreck_hold"
                        }
                    }

                ]
            },

            {
                id: "shipwreck_stay",
                title: "Rester sur la plage",
                consequences: [
                    {
                        id: "shipwreck_stay_safe",
                        text:
                            "Tu regardes la mer reprendre lentement possession de l'épave.",
                        icon: "🏝️",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "shipwreck_closed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            },

            {
                id: "shipwreck_resourceful",
                title: "🛠️ Chercher un accès sécurisé",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "shipwreck_resourceful_success",
                        text:
                            "Tu repères une petite trappe intacte qui permet de descendre directement vers la cale.",
                        icon: "🚪",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "shipwreck_started"
                            ],
                            forceNextSituation:
                                "desert_shipwreck_hold"
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 20. ÉPAVE — CALE
    // FIN DE L'HISTOIRE
    // =====================================================

    {
        id: "desert_shipwreck_hold",
        type: "classic",
        category: "exploration",
        icon: "⚓",
        title: "Une cale sombre se trouve sous le pont de l'épave",
        description:
            "L'eau s'infiltre lentement entre les planches. Il vaut mieux ne pas rester ici trop longtemps.",

        requirements: {
            all: [
                "shipwreck_started"
            ],
            not: [
                "shipwreck_closed"
            ]
        },

        choices: [

            {
                id: "shipwreck_hold_search",
                title: "Fouiller rapidement",
                consequences: [

                    {
                        id: "shipwreck_hold_food",
                        text:
                            "Tu trouves quelques provisions encore protégées dans une caisse étanche.",
                        icon: "🥫",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "shipwreck_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "shipwreck_hold_tools",
                        text:
                            "Tu récupères plusieurs outils encore utilisables.",
                        icon: "🛠️",
                        weight: 50,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "shipwreck_completed"
                            ],
                            cancelStory: true
                        }
                    },

                    {
                        id: "shipwreck_hold_danger",
                        text:
                            "Une caisse tombe brutalement. Tu es blessé, mais l'adrénaline te pousse à sortir rapidement.",
                        icon: "💥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                lives: -1,
                                tags: ["physical"]
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
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
                        narrative: {
                            setFlags: [
                                "shipwreck_completed"
                            ],
                            cancelStory: true
                        }
                    }

                ]
            },

            {
                id: "shipwreck_hold_leave",
                title: "Sortir immédiatement",
                consequences: [
                    {
                        id: "shipwreck_hold_leave_safe",
                        text:
                            "Tu remontes avant que la marée ne rende la sortie dangereuse.",
                        icon: "🚶",
                        weight: 100,
                        effects: [],
                        narrative: {
                            setFlags: [
                                "shipwreck_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            },

            {
                id: "shipwreck_hold_resourceful",
                title: "🛠️ Inspecter les compartiments cachés",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "shipwreck_hold_resourceful_success",
                        text:
                            "Tu découvres une petite trappe contenant des provisions parfaitement protégées.",
                        icon: "🎁",
                        weight: 100,
                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },
                            {
                                target: "actor",
                                removeStatus: "hungry"
                            }
                        ],
                        narrative: {
                            setFlags: [
                                "shipwreck_completed"
                            ],
                            cancelStory: true
                        }
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 21. NUIT FROIDE
    // =====================================================

    {
        id: "desert_cold_night",
        type: "classic",
        category: "weather",
        icon: "🌙",
        title: "La température chute brutalement pendant la nuit",
        description:
            "La chaleur tropicale disparaît avec le soleil. Le froid devient rapidement difficile à supporter.",

        choices: [

            {
                id: "cold_night_fire",
                title: "Entretenir un feu",
                consequences: [

                    {
                        id: "cold_night_fire_tired",
                        text:
                            "Tu maintiens le feu toute la nuit, mais tu ne dors presque pas.",
                        icon: "🔥",
                        weight: 55,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "cold_night_fire_rest",
                        text:
                            "Le feu tient parfaitement et tu réussis à récupérer.",
                        icon: "😴",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    },

                    {
                        id: "cold_night_fire_bad",
                        text:
                            "Le feu s'éteint en pleine nuit. Le froid te fait passer une nuit terrible.",
                        icon: "🥶",
                        weight: 15,
                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "cold_night_sleep",
                title: "Essayer de dormir",
                consequences: [

                    {
                        id: "cold_night_sleep_bad",
                        text:
                            "Le froid t'empêche complètement de dormir.",
                        icon: "🥶",
                        weight: 50,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "cold_night_sleep_hungry",
                        text:
                            "Tu dors par intermittence et te réveilles épuisé et affamé.",
                        icon: "🍖",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            },
                            {
                                target: "actor",
                                status: {
                                    id: "hungry",
                                    duration: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "cold_night_sleep_safe",
                        text:
                            "Contre toute attente, tu trouves une position suffisamment confortable pour dormir.",
                        icon: "😴",
                        weight: 20,
                        effects: []
                    }

                ]
            },

            {
                id: "cold_night_resourceful",
                title: "🛠️ Fabriquer un abri isolé",
                condition: {
                    type: "status",
                    id: "resourceful"
                },
                consequences: [
                    {
                        id: "cold_night_resourceful_success",
                        text:
                            "Avec des feuilles et du bois sec, tu construis un abri qui conserve suffisamment la chaleur.",
                        icon: "🛖",
                        weight: 100,
                        effects: []
                    }
                ]
            }

        ]
    },


    // =====================================================
    // 22. JOURNÉE CALME
    // =====================================================

    {
        id: "desert_quiet_day",
        type: "classic",
        category: "rest",
        icon: "🌴",
        title: "Pour une fois, l'île semble calme",
        description:
            "Aucun danger immédiat, aucun bruit inquiétant. Une occasion rare de souffler ou de préparer la suite.",

        choices: [

            {
                id: "quiet_day_rest",
                title: "Se reposer",
                consequences: [

                    {
                        id: "quiet_day_rest_good",
                        text:
                            "Tu profites pleinement de cette accalmie.",
                        icon: "😴",
                        weight: 70,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -2
                                }
                            }
                        ]
                    },

                    {
                        id: "quiet_day_rest_small",
                        text:
                            "Tu récupères un peu avant de repartir.",
                        icon: "🌴",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: -1
                                }
                            }
                        ]
                    }

                ]
            },

            {
                id: "quiet_day_prepare",
                title: "Préparer du matériel",
                consequences: [

                    {
                        id: "quiet_day_prepare_good",
                        text:
                            "Tu prends le temps de fabriquer et organiser du matériel utile.",
                        icon: "🛠️",
                        weight: 50,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 2
                                }
                            }
                        ]
                    },

                    {
                        id: "quiet_day_prepare_tired",
                        text:
                            "Tu fabriques quelques outils, mais tu y dépenses beaucoup d'énergie.",
                        icon: "😥",
                        weight: 20,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            },
                            {
                                target: "actor",
                                gauge: {
                                    id: "fatigue",
                                    amount: 1
                                }
                            }
                        ]
                    },

                    {
                        id: "quiet_day_prepare_normal",
                        text:
                            "Tu prépares quelques outils simples pour la suite.",
                        icon: "🛠️",
                        weight: 30,
                        effects: [
                            {
                                target: "actor",
                                status: {
                                    id: "resourceful",
                                    duration: 1
                                }
                            }
                        ]
                    }

                ]
            }

        ]
    }

];