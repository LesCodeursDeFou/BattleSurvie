export const INTERACTION_SITUATIONS = [

    // =========================================================
    // 1 - FANTÔME DERRIÈRE LA CIBLE
    // =========================================================

    {
        id: "mansion_interaction_ghost",
        type: "interaction",

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
                        id: "mansion_ghost_warn_good",

                        text:
                            "{target} se retourne à temps et les deux joueurs parviennent à fuir.",

                        icon:
                            "🏃",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_ghost_warn_bad",

                        text:
                            "{actor} hurle tellement fort que {target} panique et tombe dans l'escalier.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            }
                        ]
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
                        id: "mansion_ghost_silent_good",

                        text:
                            "La silhouette disparaît avant d'atteindre {target}. Personne ne saura jamais ce qu'elle voulait.",

                        icon:
                            "🌫️",

                        effects: []
                    },

                    {
                        id: "mansion_ghost_silent_bad",

                        text:
                            "Le fantôme traverse {target}, qui s'effondre de froid.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 2 - CLÉ
    // =========================================================

    {
        id: "mansion_interaction_key",
        type: "interaction",

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

                consequences: [

                    {
                        id: "mansion_key_give_good",

                        text:
                            "{target} ouvre une pièce contenant du matériel utile et partage sa découverte avec {actor}.",

                        icon:
                            "🎁",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_key_give_bad",

                        text:
                            "{target} ouvre une porte derrière laquelle quelque chose attendait depuis longtemps.",

                        icon:
                            "👹",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_key_keep",

                title:
                    "🔒 Garder la clé",

                description:
                    "Tu préfères décider toi-même où l'utiliser.",

                consequences: [

                    {
                        id: "mansion_key_keep_good",

                        text:
                            "{actor} découvre plus tard une petite armoire contenant des médicaments.",

                        icon:
                            "🩹",

                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_key_keep_bad",

                        text:
                            "{target} avait raison. Sans la clé, les deux joueurs restent bloqués dans cette aile du manoir pendant des heures.",

                        icon:
                            "😩",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            },

                            {
                                target: "target",
                                lives: -1
                            }
                        ]
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
                            "La poupée brûle et un cri surnaturel résonne dans le manoir. Le calme revient.",

                        icon:
                            "🔥",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            }
                        ]
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
                                lives: -2
                            }
                        ]
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
                        id: "mansion_doll_keep_good",

                        text:
                            "La poupée semble mystérieusement guider {target} vers une pièce sécurisée.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "target",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_doll_keep_bad",

                        text:
                            "La poupée mord soudainement la main de {target}.",

                        icon:
                            "🩸",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            }
                        ]
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
                id: "mansion_trapdoor_target",

                title:
                    "👇 Laisser {target} descendre",

                description:
                    "Quelqu'un doit bien y aller.",

                consequences: [

                    {
                        id: "mansion_trapdoor_target_good",

                        text:
                            "{target} trouve une réserve de nourriture et appelle {actor}.",

                        icon:
                            "🥫",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 2
                            }
                        ]
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
                                lives: -2
                            }
                        ]
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
                            "{actor} découvre un passage menant directement à une autre aile du manoir.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            }
                        ]
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
                                lives: -2
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 5 - LIVRE MAUDIT
    // =========================================================

    {
        id: "mansion_interaction_book",
        type: "interaction",

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
                    "Cela semble être une excellente idée.",

                consequences: [

                    {
                        id: "mansion_book_stop_good",

                        text:
                            "{actor} referme le livre juste avant qu'une forme noire n'en sorte complètement.",

                        icon:
                            "📕",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_book_stop_bad",

                        text:
                            "{target} refuse de lâcher le livre et frappe accidentellement {actor}.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "actor",
                                lives: -1
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_book_continue",

                title:
                    "👀 Le laisser continuer",

                description:
                    "Peut-être que le livre contient une information utile.",

                consequences: [

                    {
                        id: "mansion_book_continue_good",

                        text:
                            "Le livre révèle l'emplacement d'une sortie secrète.",

                        icon:
                            "🗺️",

                        effects: [
                            {
                                target: "actor",
                                lives: 1
                            },

                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_book_continue_bad",

                        text:
                            "Une présence prend brièvement possession de {target}.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "target",
                                lives: -3
                            }
                        ]
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
                        id: "mansion_chandelier_save_good",

                        text:
                            "{actor} pousse {target} juste à temps. Le chandelier explose au sol.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_chandelier_save_bad",

                        text:
                            "{actor} pousse {target}, mais reçoit lui-même une partie du chandelier.",

                        icon:
                            "🤕",

                        effects: [
                            {
                                target: "actor",
                                lives: -2
                            }
                        ]
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
                        id: "mansion_chandelier_shout_good",

                        text:
                            "{target} bondit sur le côté au dernier moment.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_chandelier_shout_bad",

                        text:
                            "{target} regarde vers le plafond au lieu de bouger. Mauvaise idée.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            }
                        ]
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
                        id: "mansion_room_break_good",

                        text:
                            "La porte cède et {target} est libéré.",

                        icon:
                            "🚪",

                        effects: [
                            {
                                target: "target",
                                lives: 2
                            }
                        ]
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
                                lives: -2
                            }
                        ]
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
                        id: "mansion_room_key_good",

                        text:
                            "{actor} trouve rapidement la clé sous un vieux vase et libère {target}.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_room_key_bad",

                        text:
                            "La recherche dure trop longtemps et {target} souffre du froid.",

                        icon:
                            "🥶",

                        effects: [
                            {
                                target: "target",
                                lives: -2
                            }
                        ]
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
                            "{actor} et {target} trouvent une pièce protégée contenant de nombreuses provisions.",

                        icon:
                            "🎁",

                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            },

                            {
                                target: "target",
                                lives: 2
                            }
                        ]
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
                        ]
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
                            "{actor} trouve une petite cache remplie de médicaments.",

                        icon:
                            "🩹",

                        effects: [
                            {
                                target: "actor",
                                lives: 2
                            }
                        ]
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
                                lives: -2
                            }
                        ]
                    }

                ]
            }

        ]
    }

];