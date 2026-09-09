export const SITUATIONS = [

    // =========================================================
    // 1 - PORTE QUI CLAQUE
    // =========================================================

    {
        id: "mansion_slammed_door",
        title: "Une porte claque derrière toi",
        category: "Paranormal",
        icon: "🚪",

        description:
            "Tu viens d'entrer dans un long couloir lorsque la porte derrière toi se ferme brutalement toute seule.",

        choices: [
            {
                id: "mansion_door_open",
                title: "🚪 Essayer de la rouvrir",
                description:
                    "Tu refuses d'être enfermé ici.",

                consequences: [
                    {
                        id: "mansion_door_open_good",
                        text:
                            "La porte s'ouvre sans résistance. Tu trouves même une petite trousse de secours derrière.",
                        lives: 2,
                        icon: "🩹"
                    },

                    {
                        id: "mansion_door_open_bad",
                        text:
                            "La poignée devient glaciale et quelque chose te saisit le poignet de l'autre côté.",
                        lives: -2,
                        icon: "👻"
                    }
                ]
            },

            {
                id: "mansion_door_continue",
                title: "🕯️ Continuer dans le couloir",
                description:
                    "Tu préfères ne pas savoir ce qu'il y a derrière.",

                consequences: [
                    {
                        id: "mansion_door_continue_good",
                        text:
                            "Tu trouves rapidement un escalier menant vers une partie éclairée du manoir.",
                        lives: 1,
                        icon: "🪜"
                    },

                    {
                        id: "mansion_door_continue_bad",
                        text:
                            "Le couloir semble s'allonger à mesure que tu avances. Tu finis complètement épuisé.",
                        lives: -1,
                        icon: "🌀"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 2 - MIROIR
    // =========================================================

    {
        id: "mansion_mirror",
        title: "Ton reflet ne reproduit plus tes mouvements",
        category: "Paranormal",
        icon: "🪞",

        description:
            "Tu passes devant un immense miroir. Ton reflet reste immobile alors que tu continues d'avancer.",

        choices: [
            {
                id: "mansion_mirror_touch",
                title: "✋ Toucher le miroir",
                description:
                    "Tu veux vérifier si tu hallucines.",

                consequences: [
                    {
                        id: "mansion_mirror_touch_good",
                        text:
                            "Le miroir redevient normal et révèle derrière lui une cache contenant des provisions.",
                        lives: 2,
                        icon: "🎁"
                    },

                    {
                        id: "mansion_mirror_touch_bad",
                        text:
                            "Ton reflet pose sa main contre la tienne puis te tire violemment vers la glace.",
                        lives: -2,
                        icon: "😱"
                    }
                ]
            },

            {
                id: "mansion_mirror_leave",
                title: "🏃 Partir immédiatement",
                description:
                    "Il existe des situations où la curiosité est clairement une mauvaise idée.",

                consequences: [
                    {
                        id: "mansion_mirror_leave_good",
                        text:
                            "Tu quittes la pièce avant que quoi que ce soit d'autre ne se produise.",
                        lives: 0,
                        icon: "😮‍💨"
                    },

                    {
                        id: "mansion_mirror_leave_bad",
                        text:
                            "En partant, tu vois ton reflet sourire alors que tu ne souris pas. Tu paniques et chutes dans l'escalier.",
                        lives: -1,
                        icon: "💥"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 3 - PIANO
    // =========================================================

    {
        id: "mansion_piano",
        title: "Un piano se met à jouer tout seul",
        category: "Mystère",
        icon: "🎹",

        description:
            "Une mélodie résonne dans le salon. Les touches du vieux piano bougent alors que personne n'est assis devant.",

        choices: [
            {
                id: "mansion_piano_play",
                title: "🎹 Jouer quelques notes",
                description:
                    "Peut-être que quelqu'un essaie de communiquer.",

                consequences: [
                    {
                        id: "mansion_piano_play_good",
                        text:
                            "La mélodie change et un compartiment secret s'ouvre dans le piano.",
                        lives: 2,
                        icon: "🔑"
                    },

                    {
                        id: "mansion_piano_play_bad",
                        text:
                            "Une note extrêmement grave retentit et le couvercle du piano se referme violemment sur tes doigts.",
                        lives: -2,
                        icon: "🤕"
                    }
                ]
            },

            {
                id: "mansion_piano_stop",
                title: "🛑 Refermer le piano",
                description:
                    "Cette musique commence sérieusement à t'agacer.",

                consequences: [
                    {
                        id: "mansion_piano_stop_good",
                        text:
                            "La musique s'arrête. Le silence revient enfin.",
                        lives: 1,
                        icon: "😌"
                    },

                    {
                        id: "mansion_piano_stop_bad",
                        text:
                            "La musique continue alors que le clavier est fermé. Tu recules et renverses une lourde statue.",
                        lives: -1,
                        icon: "🗿"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 4 - ESCALIER
    // =========================================================

    {
        id: "mansion_stairs",
        title: "Un escalier descend vers une cave plongée dans le noir",
        category: "Exploration",
        icon: "🪜",

        description:
            "Une odeur humide remonte du sous-sol. Tu entends également quelque chose gratter contre le sol.",

        choices: [
            {
                id: "mansion_stairs_down",
                title: "🔦 Descendre",
                description:
                    "Tu veux savoir ce que le manoir cache sous terre.",

                consequences: [
                    {
                        id: "mansion_stairs_down_good",
                        text:
                            "Tu découvres une ancienne réserve remplie de bouteilles d'eau et de nourriture.",
                        lives: 3,
                        icon: "🥫"
                    },

                    {
                        id: "mansion_stairs_down_bad",
                        text:
                            "Une marche pourrie cède sous tes pieds et tu dévales une partie de l'escalier.",
                        lives: -2,
                        icon: "💥"
                    }
                ]
            },

            {
                id: "mansion_stairs_block",
                title: "🪑 Bloquer la porte",
                description:
                    "Ce qui vit en dessous peut très bien y rester.",

                consequences: [
                    {
                        id: "mansion_stairs_block_good",
                        text:
                            "Tu condamnes parfaitement l'accès et te sens immédiatement plus en sécurité.",
                        lives: 1,
                        icon: "🔒"
                    },

                    {
                        id: "mansion_stairs_block_bad",
                        text:
                            "Quelques secondes plus tard, quelque chose frappe violemment la porte et te fait tomber.",
                        lives: -1,
                        icon: "👊"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 5 - POUPÉE
    // =========================================================

    {
        id: "mansion_doll",
        title: "Une vieille poupée est assise au milieu du couloir",
        category: "Mystère",
        icon: "🧸",

        description:
            "La poupée semble t'observer. Tu es presque certain qu'elle n'était pas là il y a une minute.",

        choices: [
            {
                id: "mansion_doll_take",
                title: "🧸 La ramasser",
                description:
                    "Tu veux comprendre pourquoi elle est là.",

                consequences: [
                    {
                        id: "mansion_doll_take_good",
                        text:
                            "Sous la poupée se trouvait une petite clé ancienne.",
                        lives: 1,
                        icon: "🗝️"
                    },

                    {
                        id: "mansion_doll_take_bad",
                        text:
                            "La poupée tourne brusquement la tête vers toi et pousse un cri strident.",
                        lives: -2,
                        icon: "😱"
                    }
                ]
            },

            {
                id: "mansion_doll_ignore",
                title: "🚶 Passer à côté",
                description:
                    "Tu n'as aucune intention de toucher ça.",

                consequences: [
                    {
                        id: "mansion_doll_ignore_good",
                        text:
                            "Tu quittes le couloir sans incident.",
                        lives: 0,
                        icon: "😌"
                    },

                    {
                        id: "mansion_doll_ignore_bad",
                        text:
                            "Quelques mètres plus loin, la poupée est de nouveau devant toi. Tu sursautes et te blesses contre le mur.",
                        lives: -1,
                        icon: "🧱"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 6 - TABLE SERVIE
    // =========================================================

    {
        id: "mansion_dinner",
        title: "Un immense dîner est servi dans la salle à manger",
        category: "Survie",
        icon: "🍽️",

        description:
            "Une table entière est couverte de nourriture encore chaude, alors que le manoir semble abandonné depuis des décennies.",

        choices: [
            {
                id: "mansion_dinner_eat",
                title: "🍗 Manger",
                description:
                    "Tu commences vraiment à avoir faim.",

                consequences: [
                    {
                        id: "mansion_dinner_eat_good",
                        text:
                            "Le repas est excellent et tu retrouves immédiatement des forces.",
                        lives: 3,
                        icon: "😋"
                    },

                    {
                        id: "mansion_dinner_eat_bad",
                        text:
                            "La nourriture se transforme en matière noire et visqueuse dès que tu l'avales.",
                        lives: -3,
                        icon: "🤮"
                    }
                ]
            },

            {
                id: "mansion_dinner_refuse",
                title: "🚫 Ne rien toucher",
                description:
                    "Un repas chaud dans un manoir abandonné ? Beaucoup trop suspect.",

                consequences: [
                    {
                        id: "mansion_dinner_refuse_good",
                        text:
                            "Les aliments pourrissent entièrement sous tes yeux quelques secondes plus tard.",
                        lives: 1,
                        icon: "😮‍💨"
                    },

                    {
                        id: "mansion_dinner_refuse_bad",
                        text:
                            "Tu continues l'exploration le ventre vide et ton énergie diminue.",
                        lives: -1,
                        icon: "🥱"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 7 - PORTRAIT
    // =========================================================

    {
        id: "mansion_portrait",
        title: "Les yeux d'un portrait semblent te suivre",
        category: "Paranormal",
        icon: "🖼️",

        description:
            "Un homme sévère est représenté sur un immense tableau. Ses yeux suivent chacun de tes déplacements.",

        choices: [
            {
                id: "mansion_portrait_remove",
                title: "🖼️ Décrocher le tableau",
                description:
                    "Tu veux voir ce qu'il cache.",

                consequences: [
                    {
                        id: "mansion_portrait_remove_good",
                        text:
                            "Tu découvres un coffre mural contenant du matériel utile.",
                        lives: 2,
                        icon: "🎁"
                    },

                    {
                        id: "mansion_portrait_remove_bad",
                        text:
                            "Le portrait tombe brutalement sur toi. Il est beaucoup plus lourd qu'il n'en avait l'air.",
                        lives: -2,
                        icon: "💥"
                    }
                ]
            },

            {
                id: "mansion_portrait_talk",
                title: "🗣️ Lui parler",
                description:
                    "À ce stade, pourquoi pas.",

                consequences: [
                    {
                        id: "mansion_portrait_talk_good",
                        text:
                            "Une voix murmure : « Bibliothèque... troisième livre... ». Cette indication pourrait être utile.",
                        lives: 1,
                        icon: "📚"
                    },

                    {
                        id: "mansion_portrait_talk_bad",
                        text:
                            "Le personnage hurle soudainement depuis le tableau et tu tombes en arrière.",
                        lives: -1,
                        icon: "😱"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 8 - BIBLIOTHÈQUE
    // =========================================================

    {
        id: "mansion_library",
        title: "Un livre semble avoir été volontairement laissé ouvert",
        category: "Mystère",
        icon: "📖",

        description:
            "Au milieu d'une immense bibliothèque poussiéreuse, un seul livre est parfaitement propre et ouvert sur une page remplie de symboles.",

        choices: [
            {
                id: "mansion_library_read",
                title: "📖 Lire à voix haute",
                description:
                    "Les symboles ressemblent étrangement à une phrase.",

                consequences: [
                    {
                        id: "mansion_library_read_good",
                        text:
                            "Une bibliothèque coulisse et révèle un passage secret.",
                        lives: 2,
                        icon: "🚪"
                    },

                    {
                        id: "mansion_library_read_bad",
                        text:
                            "Toutes les bougies s'éteignent et quelque chose commence à respirer derrière toi.",
                        lives: -2,
                        icon: "🌑"
                    }
                ]
            },

            {
                id: "mansion_library_close",
                title: "📕 Refermer le livre",
                description:
                    "Tu as lu suffisamment d'histoires pour savoir comment ça finit.",

                consequences: [
                    {
                        id: "mansion_library_close_good",
                        text:
                            "Rien ne se produit. C'était probablement la meilleure décision possible.",
                        lives: 1,
                        icon: "😌"
                    },

                    {
                        id: "mansion_library_close_bad",
                        text:
                            "Le livre se rouvre tout seul et une étagère s'effondre derrière toi.",
                        lives: -1,
                        icon: "📚"
                    }
                ]
            }
        ]
    }

];