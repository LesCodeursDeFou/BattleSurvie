export const GROUP_SITUATIONS = [

    // =========================================================
    // 1 - CHAMBRE SÉCURISÉE
    // =========================================================

    {
        id: "mansion_group_safe_room",
        type: "group_vs_one",

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
                id: "mansion_group_room_accept",

                title:
                    "🤝 Accepter {target}",

                description:
                    "Faire une place supplémentaire.",

                consequences: [

                    {
                        id: "mansion_group_room_accept_good",

                        text:
                            "{target} découvre une seconde serrure et sécurise parfaitement la pièce.",

                        icon:
                            "🔒",

                        effects: [
                            {
                                target: "all",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_room_accept_bad",

                        text:
                            "{target} ouvre accidentellement une armoire contenant une présence hostile.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_group_room_refuse",

                title:
                    "🚫 Refuser",

                description:
                    "Verrouiller la porte sans {target}.",

                consequences: [

                    {
                        id: "mansion_group_room_refuse_good",

                        text:
                            "{group} passent un moment parfaitement tranquilles.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "others",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_room_refuse_bad",

                        text:
                            "{target} reste seul dans le couloir et est attaqué par quelque chose dans l'obscurité.",

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
            }

        ]
    },


    // =========================================================
    // 2 - RITUEL
    // =========================================================

    {
        id: "mansion_group_ritual",
        type: "group_vs_one",

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
                id: "mansion_group_ritual_target",

                title:
                    "😈 Envoyer {target}",

                description:
                    "Quelqu'un doit tester le rituel.",

                consequences: [

                    {
                        id: "mansion_group_ritual_target_good",

                        text:
                            "Le rituel fonctionne et {target} reçoit une étrange énergie.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "target",
                                lives: 3
                            }
                        ]
                    },

                    {
                        id: "mansion_group_ritual_target_bad",

                        text:
                            "Une présence frappe violemment {target} au centre du cercle.",

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
            },


            {
                id: "mansion_group_ritual_destroy",

                title:
                    "🔥 Détruire le cercle",

                description:
                    "Personne ne participera à ce rituel.",

                consequences: [

                    {
                        id: "mansion_group_ritual_destroy_good",

                        text:
                            "Les symboles disparaissent et l'atmosphère du manoir devient légèrement plus calme.",

                        icon:
                            "😌",

                        effects: [
                            {
                                target: "all",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_ritual_destroy_bad",

                        text:
                            "Briser le cercle libère brutalement ce qu'il contenait.",

                        icon:
                            "💀",

                        effects: [
                            {
                                target: "all",
                                lives: -2
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 3 - NOURRITURE
    // =========================================================

    {
        id: "mansion_group_food",
        type: "group_vs_one",

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
                id: "mansion_group_food_share",

                title:
                    "🍽️ Partager",

                description:
                    "Donner également une part à {target}.",

                consequences: [

                    {
                        id: "mansion_group_food_share_good",

                        text:
                            "Les provisions sont parfaitement consommables et tout le monde reprend des forces.",

                        icon:
                            "😋",

                        effects: [
                            {
                                target: "all",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_group_food_share_bad",

                        text:
                            "Une partie de la nourriture était contaminée.",

                        icon:
                            "🤢",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_group_food_keep",

                title:
                    "🔒 Garder pour le groupe",

                description:
                    "Ne rien donner à {target}.",

                consequences: [

                    {
                        id: "mansion_group_food_keep_good",

                        text:
                            "{group} récupèrent suffisamment d'énergie pour poursuivre l'exploration.",

                        icon:
                            "💪",

                        effects: [
                            {
                                target: "others",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_group_food_keep_bad",

                        text:
                            "{target} trouve ailleurs une réserve encore meilleure.",

                        icon:
                            "😏",

                        effects: [
                            {
                                target: "target",
                                lives: 2
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 4 - FANTÔME
    // =========================================================

    {
        id: "mansion_group_ghost_attack",
        type: "group_vs_one",

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
                id: "mansion_group_ghost_help",

                title:
                    "🛡️ Aider {target}",

                description:
                    "Attirer l'attention de l'apparition.",

                consequences: [

                    {
                        id: "mansion_group_ghost_help_good",

                        text:
                            "{group} parviennent à faire disparaître le spectre.",

                        icon:
                            "✨",

                        effects: [
                            {
                                target: "all",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_ghost_help_bad",

                        text:
                            "Le spectre se divise en plusieurs silhouettes et attaque tout le monde.",

                        icon:
                            "👻",

                        effects: [
                            {
                                target: "all",
                                lives: -2
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_group_ghost_ignore",

                title:
                    "👀 Ne pas intervenir",

                description:
                    "Laisser {target} gérer seul.",

                consequences: [

                    {
                        id: "mansion_group_ghost_ignore_good",

                        text:
                            "{target} traverse courageusement l'apparition, qui disparaît immédiatement.",

                        icon:
                            "😎",

                        effects: [
                            {
                                target: "target",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_group_ghost_ignore_bad",

                        text:
                            "L'apparition frappe violemment {target}.",

                        icon:
                            "🥶",

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
    // 5 - SORTIE
    // =========================================================

    {
        id: "mansion_group_exit",
        type: "group_vs_one",

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
                id: "mansion_group_exit_together",

                title:
                    "🤝 Attendre {target}",

                description:
                    "Essayer de sortir tous ensemble.",

                consequences: [

                    {
                        id: "mansion_group_exit_together_good",

                        text:
                            "La porte mène vers une cour extérieure sécurisée.",

                        icon:
                            "🌙",

                        effects: [
                            {
                                target: "all",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_group_exit_together_bad",

                        text:
                            "La porte était un piège. Le couloir se referme derrière tout le monde.",

                        icon:
                            "🧱",

                        effects: [
                            {
                                target: "all",
                                lives: -1
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_group_exit_leave",

                title:
                    "🏃 Partir sans {target}",

                description:
                    "Ne pas perdre de temps.",

                consequences: [

                    {
                        id: "mansion_group_exit_leave_good",

                        text:
                            "{group} atteignent une zone relativement sûre.",

                        icon:
                            "😮‍💨",

                        effects: [
                            {
                                target: "others",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_group_exit_leave_bad",

                        text:
                            "{target} découvre que la véritable sortie était dans la direction opposée.",

                        icon:
                            "😏",

                        effects: [
                            {
                                target: "target",
                                lives: 3
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 6 - MÉDICAMENTS
    // =========================================================

    {
        id: "mansion_group_medkit",
        type: "group_vs_one",

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
                id: "mansion_group_medkit_share",

                title:
                    "🩹 Soigner {target}",

                description:
                    "Utiliser une partie des médicaments.",

                consequences: [

                    {
                        id: "mansion_group_medkit_share_good",

                        text:
                            "Les médicaments fonctionnent parfaitement.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target: "target",
                                lives: 3
                            }
                        ]
                    },

                    {
                        id: "mansion_group_medkit_share_bad",

                        text:
                            "Les médicaments sont beaucoup trop anciens et rendent {target} malade.",

                        icon:
                            "🤢",

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
                id: "mansion_group_medkit_keep",

                title:
                    "🔒 Garder les médicaments",

                description:
                    "Les conserver pour {group}.",

                consequences: [

                    {
                        id: "mansion_group_medkit_keep_good",

                        text:
                            "{group} utilisent les soins pour récupérer.",

                        icon:
                            "❤️‍🩹",

                        effects: [
                            {
                                target: "others",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_medkit_keep_bad",

                        text:
                            "{target} vole discrètement la trousse quelques minutes plus tard.",

                        icon:
                            "🥷",

                        effects: [
                            {
                                target: "target",
                                lives: 2
                            },

                            {
                                target: "others",
                                lives: -1
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 7 - PORTE MAUDITE
    // =========================================================

    {
        id: "mansion_group_cursed_door",
        type: "group_vs_one",

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
                id: "mansion_group_door_target",

                title:
                    "👉 Laisser {target} ouvrir",

                description:
                    "Une idée parfaitement équitable.",

                consequences: [

                    {
                        id: "mansion_group_door_target_good",

                        text:
                            "{target} ouvre la porte et découvre une pièce sécurisée.",

                        icon:
                            "🎉",

                        effects: [
                            {
                                target: "all",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_door_target_bad",

                        text:
                            "Une décharge surnaturelle traverse {target} lorsqu'il touche la poignée.",

                        icon:
                            "⚡",

                        effects: [
                            {
                                target: "target",
                                lives: -3
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_group_door_together",

                title:
                    "🤝 Ouvrir ensemble",

                description:
                    "Partager le risque.",

                consequences: [

                    {
                        id: "mansion_group_door_together_good",

                        text:
                            "La porte s'ouvre sans incident et révèle un passage utile.",

                        icon:
                            "🗝️",

                        effects: [
                            {
                                target: "all",
                                lives: 2
                            }
                        ]
                    },

                    {
                        id: "mansion_group_door_together_bad",

                        text:
                            "Une onde surnaturelle frappe toutes les personnes présentes.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "all",
                                lives: -2
                            }
                        ]
                    }

                ]
            }

        ]
    },


    // =========================================================
    // 8 - BIBLIOTHÈQUE EN FEU
    // =========================================================

    {
        id: "mansion_group_library_fire",
        type: "group_vs_one",

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
                id: "mansion_group_fire_save",

                title:
                    "🧯 Retourner chercher {target}",

                description:
                    "Ne pas l'abandonner.",

                consequences: [

                    {
                        id: "mansion_group_fire_save_good",

                        text:
                            "{group} retrouvent {target} et tout le monde quitte la bibliothèque à temps.",

                        icon:
                            "🏃",

                        effects: [
                            {
                                target: "all",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_fire_save_bad",

                        text:
                            "Une poutre enflammée s'effondre pendant le sauvetage.",

                        icon:
                            "💥",

                        effects: [
                            {
                                target: "others",
                                lives: -2
                            }
                        ]
                    }

                ]
            },


            {
                id: "mansion_group_fire_leave",

                title:
                    "🚪 Fermer la porte",

                description:
                    "Sauver le groupe et laisser {target} trouver une autre sortie.",

                consequences: [

                    {
                        id: "mansion_group_fire_leave_good",

                        text:
                            "{target} découvre une fenêtre et parvient miraculeusement à s'échapper.",

                        icon:
                            "🪟",

                        effects: [
                            {
                                target: "target",
                                lives: 1
                            }
                        ]
                    },

                    {
                        id: "mansion_group_fire_leave_bad",

                        text:
                            "{target} reste bloqué au milieu de la fumée.",

                        icon:
                            "🔥",

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
    }

];