export const INTERACTION_SITUATIONS = [

    // =========================================================
    // 1 - HAMAC + RUCHE
    // =========================================================
    {
        id: "interaction_hammock_bees",
        type: "interaction",
        title: "{target} dort tranquillement sur un hamac",
        category: "Interaction",
        icon: "🐝",

        description:
            "{actor} aperçoit {target} profondément endormi sur un hamac. " +
            "Juste à côté se trouve une énorme ruche. Lui envoyer dessus ?",

        choices: [
            {
                id: "hammock_bees_yes",
                title: "🐝 Oui",
                description: "Prendre la ruche et la lancer sur {target}.",

                consequences: [
                    {
                        id: "hammock_bees_yes_actor",
                        text:
                            "Les abeilles sont dérangées pendant le lancer et se retournent contre {actor}.",
                        icon: "🐝",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    },
                    {
                        id: "hammock_bees_yes_target",
                        text:
                            "Lancer parfait ! La ruche atterrit directement sur {target}, qui se fait piquer de partout.",
                        icon: "😱",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "hammock_bees_no",
                title: "😇 Non",
                description: "Laisser {target} dormir tranquillement.",

                consequences: [
                    {
                        id: "hammock_bees_no_safe",
                        text:
                            "{actor} laisse {target} tranquille. Pour une fois, personne ne souffre.",
                        icon: "😌",
                        effects: []
                    },
                    {
                        id: "hammock_bees_no_rock",
                        text:
                            "{target} se réveille en sursaut et balance une pierre sur {actor}.",
                        icon: "🪨",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 2 - DERNIÈRE NOIX DE COCO
    // =========================================================
    {
        id: "interaction_last_coconut",
        type: "interaction",
        title: "{target} possède la dernière noix de coco",
        category: "Interaction",
        icon: "🥥",

        description:
            "{actor} meurt de faim et aperçoit {target} avec une magnifique noix de coco. " +
            "{target} n'a visiblement aucune intention de partager.",

        choices: [
            {
                id: "coconut_steal",
                title: "🥷 La voler",
                description: "La faim justifie certains crimes.",

                consequences: [
                    {
                        id: "coconut_steal_success",
                        text:
                            "{actor} réalise un vol parfait et dévore une partie de la noix de coco.",
                        icon: "😎",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "coconut_steal_fail",
                        text:
                            "{target} surprend {actor} et lui met une gifle monumentale.",
                        icon: "👋",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "coconut_ask",
                title: "🙏 Demander gentiment",
                description: "Tenter une approche civilisée.",

                consequences: [
                    {
                        id: "coconut_ask_yes",
                        text:
                            "{target} accepte de partager. Cette île possède encore un peu d'humanité.",
                        icon: "🤝",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "coconut_ask_no",
                        text:
                            "{target} refuse et mange lentement la noix de coco devant {actor}.",
                        icon: "😈",
                        effects: []
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 3 - SERPENT PRÈS DU SAC
    // =========================================================
    {
        id: "interaction_snake_bag",
        type: "interaction",
        title: "Un serpent rôde près du sac de {target}",
        category: "Interaction",
        icon: "🐍",

        description:
            "{actor} remarque un serpent juste à côté des affaires de {target}. " +
            "{target} n'a absolument rien vu.",

        choices: [
            {
                id: "snake_warn",
                title: "📢 Prévenir {target}",
                description: "Éviter un potentiel drame.",

                consequences: [
                    {
                        id: "snake_warn_good",
                        text:
                            "{target} remercie {actor}. Ensemble, ils font fuir le serpent.",
                        icon: "🤝",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "snake_warn_bad",
                        text:
                            "{actor} hurle tellement fort que le serpent panique et lui mord la cheville.",
                        icon: "🐍",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "snake_ignore",
                title: "🤫 Ne rien dire",
                description: "Ce n'est pas le sac de {actor}, après tout.",

                consequences: [
                    {
                        id: "snake_ignore_target",
                        text:
                            "{target} ouvre son sac et se fait mordre par le serpent.",
                        icon: "😱",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    },
                    {
                        id: "snake_ignore_escape",
                        text:
                            "Le serpent finit par repartir. Personne ne saura jamais que {actor} n'a rien dit.",
                        icon: "😶",
                        effects: []
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 4 - PONT FRAGILE
    // =========================================================
    {
        id: "interaction_bridge",
        type: "interaction",
        title: "{actor} et {target} arrivent devant un pont fragile",
        category: "Interaction",
        icon: "🌉",

        description:
            "Le vieux pont en bois semble pouvoir s'effondrer à tout moment. " +
            "Quelqu'un doit tester le passage.",

        choices: [
            {
                id: "bridge_actor_first",
                title: "🧗 Passer en premier",
                description: "{actor} prend le risque.",

                consequences: [
                    {
                        id: "bridge_actor_success",
                        text:
                            "{actor} traverse sans problème. Le pont tient bon.",
                        icon: "😎",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "bridge_actor_fail",
                        text:
                            "Le pont casse sous {actor}, qui termine plusieurs mètres plus bas.",
                        icon: "💥",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "bridge_target_first",
                title: "👉 Envoyer {target}",
                description: "Pourquoi prendre le risque soi-même ?",

                consequences: [
                    {
                        id: "bridge_target_success",
                        text:
                            "{target} traverse facilement. Le pont semble finalement assez solide.",
                        icon: "👍",
                        effects: []
                    },
                    {
                        id: "bridge_target_fail",
                        text:
                            "Le pont s'effondre sous {target}, sous le regard légèrement coupable de {actor}.",
                        icon: "🌊",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 5 - POISSON SUSPECT
    // =========================================================
    {
        id: "interaction_fish",
        type: "interaction",
        title: "{target} prépare un poisson très suspect",
        category: "Interaction",
        icon: "🐟",

        description:
            "{target} vient de pêcher un poisson aux couleurs inquiétantes et propose à {actor} de partager le repas.",

        choices: [
            {
                id: "fish_eat",
                title: "🍽️ Accepter",
                description: "La faim est plus forte que la prudence.",

                consequences: [
                    {
                        id: "fish_eat_good",
                        text:
                            "Le poisson est délicieux. {actor} et {target} reprennent des forces.",
                        icon: "😋",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "fish_eat_bad",
                        text:
                            "Le poisson était toxique. Très toxique.",
                        icon: "🤮",
                        effects: [
                            { target: "actor", lives: -1 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "fish_refuse",
                title: "❌ Refuser",
                description: "Ces couleurs n'inspirent vraiment pas confiance.",

                consequences: [
                    {
                        id: "fish_refuse_good",
                        text:
                            "{target} mange seul et tombe malade. Bonne intuition de {actor}.",
                        icon: "🤢",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    },
                    {
                        id: "fish_refuse_bad",
                        text:
                            "Le poisson était parfaitement comestible. {target} se régale seul.",
                        icon: "😒",
                        effects: [
                            { target: "target", lives: 1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 6 - FEU DE CAMP
    // =========================================================
    {
        id: "interaction_campfire",
        type: "interaction",
        title: "{target} s'est endormi près du feu",
        category: "Interaction",
        icon: "🔥",

        description:
            "{actor} remarque que {target} dort beaucoup trop près des flammes.",

        choices: [
            {
                id: "campfire_help",
                title: "🧯 Le réveiller",
                description: "Éviter que {target} ne finisse rôti.",

                consequences: [
                    {
                        id: "campfire_help_good",
                        text:
                            "{actor} réveille {target} juste à temps. Reconnaissant, {target} partage ses provisions.",
                        icon: "🤝",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "campfire_help_bad",
                        text:
                            "{actor} trébuche en voulant aider et tombe dans les braises.",
                        icon: "🔥",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "campfire_ignore",
                title: "😴 Le laisser dormir",
                description: "Après tout, {target} est assez grand.",

                consequences: [
                    {
                        id: "campfire_ignore_safe",
                        text:
                            "Le vent change de direction. Finalement, rien ne se passe.",
                        icon: "😌",
                        effects: []
                    },
                    {
                        id: "campfire_ignore_bad",
                        text:
                            "Une braise brûle {target}, qui se réveille en catastrophe.",
                        icon: "🔥",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 7 - PIÈGE À SANGLIER
    // =========================================================
    {
        id: "interaction_boar_trap",
        type: "interaction",
        title: "{target} marche droit vers un piège",
        category: "Interaction",
        icon: "🪤",

        description:
            "{actor} aperçoit un vieux piège dissimulé sous les feuilles. " +
            "{target} fonce droit dessus sans l'avoir remarqué.",

        choices: [
            {
                id: "trap_warn",
                title: "⚠️ Prévenir {target}",
                description: "L'avertir avant qu'il soit trop tard.",

                consequences: [
                    {
                        id: "trap_warn_success",
                        text:
                            "{target} s'arrête juste à temps et remercie {actor}.",
                        icon: "😮‍💨",
                        effects: []
                    },
                    {
                        id: "trap_warn_fail",
                        text:
                            "{target} sursaute à cause du cri de {actor} et tombe... directement dans le piège.",
                        icon: "🤦",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "trap_silent",
                title: "🤐 Ne rien dire",
                description: "Observer la suite des événements.",

                consequences: [
                    {
                        id: "trap_silent_bad",
                        text:
                            "{target} marche en plein dans le piège.",
                        icon: "🪤",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    },
                    {
                        id: "trap_silent_good",
                        text:
                            "{target} remarque le piège tout seul et l'évite au dernier moment.",
                        icon: "😎",
                        effects: []
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 8 - BANANE VOLÉE
    // =========================================================
    {
        id: "interaction_banana",
        type: "interaction",
        title: "{target} possède une magnifique banane",
        category: "Interaction",
        icon: "🍌",

        description:
            "{actor} n'a rien mangé depuis des heures. La banane de {target} semble incroyablement appétissante.",

        choices: [
            {
                id: "banana_steal",
                title: "🥷 Voler la banane",
                description: "Discrétion maximale.",

                consequences: [
                    {
                        id: "banana_steal_good",
                        text:
                            "{actor} subtilise la banane sans être repéré et la dévore.",
                        icon: "🍌",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "banana_steal_bad",
                        text:
                            "{target} surprend {actor}. La dispute se termine assez mal pour le voleur.",
                        icon: "🥊",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "banana_trade",
                title: "🤝 Proposer un échange",
                description: "Tenter de négocier avec {target}.",

                consequences: [
                    {
                        id: "banana_trade_good",
                        text:
                            "{target} accepte de partager. Tout le monde repart satisfait.",
                        icon: "🤝",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "banana_trade_bad",
                        text:
                            "{target} refuse catégoriquement. Aucun accord ne sera trouvé aujourd'hui.",
                        icon: "🙅",
                        effects: []
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 9 - CHUTE D'UN ARBRE
    // =========================================================
    {
        id: "interaction_falling_tree",
        type: "interaction",
        title: "Un arbre tombe vers {target}",
        category: "Interaction",
        icon: "🌳",

        description:
            "{actor} entend un énorme craquement. Un arbre commence à tomber exactement dans la direction de {target}.",

        choices: [
            {
                id: "tree_save",
                title: "🏃 Sauver {target}",
                description: "Courir pour le pousser hors de la trajectoire.",

                consequences: [
                    {
                        id: "tree_save_good",
                        text:
                            "{actor} pousse {target} juste à temps. Sauvetage héroïque.",
                        icon: "🦸",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "tree_save_bad",
                        text:
                            "{actor} sauve {target}, mais reçoit une grosse branche sur le dos.",
                        icon: "💥",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "tree_shout",
                title: "📢 Crier",
                description: "Prévenir {target} sans prendre de risque.",

                consequences: [
                    {
                        id: "tree_shout_good",
                        text:
                            "{target} entend l'avertissement et plonge sur le côté.",
                        icon: "💨",
                        effects: []
                    },
                    {
                        id: "tree_shout_bad",
                        text:
                            "{target} regarde {actor} sans comprendre... puis reçoit une branche.",
                        icon: "🤕",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 10 - EAU POTABLE
    // =========================================================
    {
        id: "interaction_water",
        type: "interaction",
        title: "{target} possède une gourde presque pleine",
        category: "Interaction",
        icon: "💧",

        description:
            "{actor} est assoiffé tandis que {target} possède encore beaucoup d'eau.",

        choices: [
            {
                id: "water_ask",
                title: "🙏 Demander de l'eau",
                description: "Faire appel à la générosité de {target}.",

                consequences: [
                    {
                        id: "water_ask_good",
                        text:
                            "{target} partage généreusement son eau avec {actor}.",
                        icon: "💧",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "water_ask_bad",
                        text:
                            "{target} refuse. {actor} repart aussi assoiffé qu'avant.",
                        icon: "🏜️",
                        effects: []
                    }
                ]
            },

            {
                id: "water_steal",
                title: "🫳 Voler la gourde",
                description: "Attendre que {target} regarde ailleurs.",

                consequences: [
                    {
                        id: "water_steal_good",
                        text:
                            "{actor} vole quelques gorgées sans être repéré.",
                        icon: "😏",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "water_steal_bad",
                        text:
                            "{target} surprend {actor} et récupère sa gourde à coups de bâton.",
                        icon: "🪵",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 11 - ROCHER EN HAUTEUR
    // =========================================================
    {
        id: "interaction_rock_prank",
        type: "interaction",
        title: "{target} passe sous un rocher",
        category: "Interaction",
        icon: "🪨",

        description:
            "{actor} se trouve en hauteur et remarque une petite pierre juste au-dessus de {target}.",

        choices: [
            {
                id: "rock_push",
                title: "😈 Faire tomber la pierre",
                description: "Une blague totalement raisonnable.",

                consequences: [
                    {
                        id: "rock_push_target",
                        text:
                            "La pierre rebondit et frappe directement {target}.",
                        icon: "🎯",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    },
                    {
                        id: "rock_push_actor",
                        text:
                            "{actor} perd l'équilibre en poussant la pierre et dévale la pente.",
                        icon: "🫨",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "rock_leave",
                title: "😇 Ne rien faire",
                description: "Essayer de devenir quelqu'un de meilleur.",

                consequences: [
                    {
                        id: "rock_leave_good",
                        text:
                            "{target} passe tranquillement. Rien ne se produit.",
                        icon: "😌",
                        effects: []
                    },
                    {
                        id: "rock_leave_bad",
                        text:
                            "La pierre tombe toute seule... sur le pied de {actor}. Karma préventif.",
                        icon: "🦶",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 12 - SANGSUES
    // =========================================================
    {
        id: "interaction_leeches",
        type: "interaction",
        title: "{target} est couvert de sangsues",
        category: "Interaction",
        icon: "🪱",

        description:
            "Après avoir traversé un marécage, {actor} remarque plusieurs sangsues accrochées au dos de {target}.",

        choices: [
            {
                id: "leeches_help",
                title: "🩹 Aider {target}",
                description: "Retirer les sangsues une par une.",

                consequences: [
                    {
                        id: "leeches_help_good",
                        text:
                            "{actor} retire toutes les sangsues. {target} récupère rapidement.",
                        icon: "❤️‍🩹",
                        effects: [
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "leeches_help_bad",
                        text:
                            "Une sangsue décide que {actor} semble également très appétissant.",
                        icon: "🪱",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "leeches_ignore",
                title: "🤫 Ne rien dire",
                description: "Ce problème finira bien par se résoudre tout seul.",

                consequences: [
                    {
                        id: "leeches_ignore_bad",
                        text:
                            "{target} découvre les sangsues beaucoup trop tard.",
                        icon: "😱",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    },
                    {
                        id: "leeches_ignore_good",
                        text:
                            "{target} finit par les remarquer et les retire sans difficulté.",
                        icon: "👍",
                        effects: []
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 13 - FRUITS CACHÉS
    // =========================================================
    {
        id: "interaction_fruit_stash",
        type: "interaction",
        title: "{actor} découvre la réserve secrète de {target}",
        category: "Interaction",
        icon: "🍎",

        description:
            "Derrière quelques pierres, {actor} découvre que {target} cache une réserve entière de fruits.",

        choices: [
            {
                id: "fruit_take",
                title: "🍎 Se servir",
                description: "{target} n'avait qu'à mieux cacher sa réserve.",

                consequences: [
                    {
                        id: "fruit_take_good",
                        text:
                            "{actor} mange plusieurs fruits sans être découvert.",
                        icon: "😋",
                        effects: [
                            { target: "actor", lives: 2 }
                        ]
                    },
                    {
                        id: "fruit_take_bad",
                        text:
                            "{target} surprend {actor} en plein festin. Une bagarre éclate.",
                        icon: "🥊",
                        effects: [
                            { target: "actor", lives: -1 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "fruit_confront",
                title: "🗣️ Confronter {target}",
                description: "Demander pourquoi cette nourriture est cachée.",

                consequences: [
                    {
                        id: "fruit_confront_good",
                        text:
                            "{target} culpabilise et partage toute sa réserve avec {actor}.",
                        icon: "🤝",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "fruit_confront_bad",
                        text:
                            "{target} nie tout en bloc et déplace sa réserve pendant la nuit.",
                        icon: "🤥",
                        effects: []
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 14 - SABLES MOUVANTS
    // =========================================================
    {
        id: "interaction_quicksand",
        type: "interaction",
        title: "{target} est coincé dans des sables mouvants",
        category: "Interaction",
        icon: "🫧",

        description:
            "{actor} entend {target} appeler à l'aide. Il s'enfonce lentement dans des sables mouvants.",

        choices: [
            {
                id: "quicksand_help",
                title: "🪢 Sauver {target}",
                description: "Utiliser une branche pour le sortir.",

                consequences: [
                    {
                        id: "quicksand_help_good",
                        text:
                            "{actor} réussit à sortir {target}. Sauvetage parfait.",
                        icon: "🦸",
                        effects: [
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "quicksand_help_bad",
                        text:
                            "{actor} s'approche trop près et tombe également dans les sables mouvants.",
                        icon: "😱",
                        effects: [
                            { target: "actor", lives: -1 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "quicksand_leave",
                title: "🚶 Continuer son chemin",
                description: "Chacun sa survie.",

                consequences: [
                    {
                        id: "quicksand_leave_bad",
                        text:
                            "{target} réussit finalement à sortir seul, mais complètement épuisé.",
                        icon: "🥵",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    },
                    {
                        id: "quicksand_leave_karma",
                        text:
                            "{actor} repart fièrement... et tombe dans un second trou quelques mètres plus loin.",
                        icon: "🤡",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 15 - MOUSTIQUAIRE
    // =========================================================
    {
        id: "interaction_mosquito_net",
        type: "interaction",
        title: "{target} possède la seule moustiquaire",
        category: "Interaction",
        icon: "🦟",

        description:
            "La nuit tombe et les moustiques envahissent le camp. {target} possède la seule moustiquaire.",

        choices: [
            {
                id: "mosquito_share",
                title: "🙏 Demander à partager",
                description: "Essayer de convaincre {target}.",

                consequences: [
                    {
                        id: "mosquito_share_good",
                        text:
                            "{target} accepte. Les deux passent une excellente nuit.",
                        icon: "😴",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "mosquito_share_bad",
                        text:
                            "{target} refuse. {actor} passe la nuit à servir de buffet aux moustiques.",
                        icon: "🦟",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "mosquito_steal",
                title: "🥷 La voler",
                description: "Attendre que {target} s'endorme.",

                consequences: [
                    {
                        id: "mosquito_steal_good",
                        text:
                            "{actor} récupère discrètement la moustiquaire et passe une nuit parfaite.",
                        icon: "😴",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: -1 }
                        ]
                    },
                    {
                        id: "mosquito_steal_bad",
                        text:
                            "{target} se réveille pendant le vol et repousse violemment {actor}.",
                        icon: "💥",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 16 - COFFRE LOURD
    // =========================================================
    {
        id: "interaction_heavy_chest",
        type: "interaction",
        title: "{actor} et {target} découvrent un coffre",
        category: "Interaction",
        icon: "🧰",

        description:
            "Un coffre très lourd est coincé sous un rocher. Il faudra probablement être deux pour le récupérer.",

        choices: [
            {
                id: "chest_cooperate",
                title: "🤝 Coopérer avec {target}",
                description: "Soulever le rocher ensemble.",

                consequences: [
                    {
                        id: "chest_cooperate_good",
                        text:
                            "Le coffre contient des provisions. {actor} et {target} partagent le butin.",
                        icon: "🎉",
                        effects: [
                            { target: "actor", lives: 2 },
                            { target: "target", lives: 2 }
                        ]
                    },
                    {
                        id: "chest_cooperate_bad",
                        text:
                            "Le rocher glisse pendant l'effort et blesse les deux joueurs.",
                        icon: "💥",
                        effects: [
                            { target: "actor", lives: -1 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "chest_alone",
                title: "💪 Essayer seul",
                description: "{actor} veut garder tout le contenu.",

                consequences: [
                    {
                        id: "chest_alone_good",
                        text:
                            "Contre toute attente, {actor} réussit seul et garde toutes les provisions.",
                        icon: "💪",
                        effects: [
                            { target: "actor", lives: 3 }
                        ]
                    },
                    {
                        id: "chest_alone_bad",
                        text:
                            "{actor} se bloque le dos en essayant de soulever le rocher.",
                        icon: "🤕",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 17 - ARAIGNÉE
    // =========================================================
    {
        id: "interaction_spider",
        type: "interaction",
        title: "Une énorme araignée est sur le dos de {target}",
        category: "Interaction",
        icon: "🕷️",

        description:
            "{target} ne remarque absolument pas l'énorme araignée qui grimpe lentement sur son épaule.",

        choices: [
            {
                id: "spider_remove",
                title: "✋ Retirer l'araignée",
                description: "{actor} tente de l'enlever lui-même.",

                consequences: [
                    {
                        id: "spider_remove_good",
                        text:
                            "{actor} retire l'araignée et la jette au loin. {target} est sauvé.",
                        icon: "😮‍💨",
                        effects: []
                    },
                    {
                        id: "spider_remove_bad",
                        text:
                            "L'araignée saute sur la main de {actor} et le mord.",
                        icon: "🕷️",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "spider_slap",
                title: "👋 Frapper l'araignée",
                description: "Une bonne grosse claque dans le dos de {target}.",

                consequences: [
                    {
                        id: "spider_slap_good",
                        text:
                            "Coup parfait ! L'araignée est projetée au sol.",
                        icon: "🎯",
                        effects: []
                    },
                    {
                        id: "spider_slap_bad",
                        text:
                            "{actor} rate l'araignée mais réussit parfaitement sa claque sur {target}.",
                        icon: "👋",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 18 - RADEAU
    // =========================================================
    {
        id: "interaction_raft",
        type: "interaction",
        title: "{actor} et {target} trouvent un petit radeau",
        category: "Interaction",
        icon: "🛶",

        description:
            "Le radeau semble utilisable mais paraît beaucoup trop fragile pour supporter deux personnes.",

        choices: [
            {
                id: "raft_actor",
                title: "🛶 Prendre le radeau",
                description: "{actor} monte dessus et laisse {target} sur la plage.",

                consequences: [
                    {
                        id: "raft_actor_good",
                        text:
                            "Le radeau fonctionne parfaitement. {actor} trouve des provisions sur une plage voisine.",
                        icon: "🏝️",
                        effects: [
                            { target: "actor", lives: 2 }
                        ]
                    },
                    {
                        id: "raft_actor_bad",
                        text:
                            "Le radeau se désintègre après quelques mètres. {actor} revient à la nage.",
                        icon: "🌊",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "raft_target",
                title: "👉 Laisser {target} partir",
                description: "Donner le radeau à {target}.",

                consequences: [
                    {
                        id: "raft_target_good",
                        text:
                            "{target} revient plus tard avec des provisions et remercie {actor}.",
                        icon: "🤝",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "raft_target_bad",
                        text:
                            "Le radeau casse en mer. {target} doit revenir à la nage.",
                        icon: "🌊",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 19 - PLANTE MÉDICINALE
    // =========================================================
    {
        id: "interaction_medicine",
        type: "interaction",
        title: "{actor} trouve une étrange plante médicinale",
        category: "Interaction",
        icon: "🌿",

        description:
            "{actor} pense avoir reconnu une plante médicinale. {target} se trouve juste à côté.",

        choices: [
            {
                id: "medicine_self",
                title: "🌿 La tester",
                description: "{actor} l'utilise sur lui-même.",

                consequences: [
                    {
                        id: "medicine_self_good",
                        text:
                            "C'était bien une plante médicinale. {actor} se sent immédiatement mieux.",
                        icon: "❤️‍🩹",
                        effects: [
                            { target: "actor", lives: 2 }
                        ]
                    },
                    {
                        id: "medicine_self_bad",
                        text:
                            "Ce n'était absolument pas une plante médicinale.",
                        icon: "🤢",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "medicine_target",
                title: "🧪 La faire tester à {target}",
                description: "La science demande parfois des sacrifices.",

                consequences: [
                    {
                        id: "medicine_target_good",
                        text:
                            "{target} récupère immédiatement de l'énergie. La plante fonctionne !",
                        icon: "✨",
                        effects: [
                            { target: "target", lives: 2 }
                        ]
                    },
                    {
                        id: "medicine_target_bad",
                        text:
                            "{target} devient tout pâle après avoir testé la plante.",
                        icon: "🤮",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 20 - CROCODILE
    // =========================================================
    {
        id: "interaction_crocodile",
        type: "interaction",
        title: "Un crocodile approche derrière {target}",
        category: "Interaction",
        icon: "🐊",

        description:
            "{target} remplit tranquillement sa gourde au bord de l'eau. " +
            "{actor} voit un crocodile se rapprocher lentement derrière lui.",

        choices: [
            {
                id: "crocodile_warn",
                title: "📢 Prévenir {target}",
                description: "Crier avant que le crocodile attaque.",

                consequences: [
                    {
                        id: "crocodile_warn_good",
                        text:
                            "{target} réagit immédiatement et s'éloigne de l'eau.",
                        icon: "🏃",
                        effects: []
                    },
                    {
                        id: "crocodile_warn_bad",
                        text:
                            "{target} panique, trébuche et se blesse en essayant de fuir.",
                        icon: "🤕",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "crocodile_distract",
                title: "🪨 Distraire le crocodile",
                description: "{actor} lui lance une pierre pour attirer son attention.",

                consequences: [
                    {
                        id: "crocodile_distract_good",
                        text:
                            "Le crocodile change de direction. {target} peut s'échapper.",
                        icon: "🎯",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "crocodile_distract_bad",
                        text:
                            "Excellent lancer : le crocodile se retourne maintenant vers {actor}.",
                        icon: "🐊",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 21 - ORAGE
    // =========================================================
    {
        id: "interaction_storm_shelter",
        type: "interaction",
        title: "{target} possède le meilleur abri du camp",
        category: "Interaction",
        icon: "⛈️",

        description:
            "Un violent orage arrive. L'abri de {actor} est catastrophique, tandis que celui de {target} semble parfaitement solide.",

        choices: [
            {
                id: "storm_ask",
                title: "🙏 Demander refuge",
                description: "Demander à {target} de partager son abri.",

                consequences: [
                    {
                        id: "storm_ask_good",
                        text:
                            "{target} accepte. Les deux passent la tempête bien au sec.",
                        icon: "🛖",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "storm_ask_bad",
                        text:
                            "{target} refuse. {actor} passe plusieurs heures sous une pluie torrentielle.",
                        icon: "🌧️",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "storm_force",
                title: "🚪 S'imposer dans l'abri",
                description: "Pas besoin de demander.",

                consequences: [
                    {
                        id: "storm_force_good",
                        text:
                            "{actor} entre de force. {target} râle, mais les deux survivent parfaitement à l'orage.",
                        icon: "😤",
                        effects: [
                            { target: "actor", lives: 1 }
                        ]
                    },
                    {
                        id: "storm_force_bad",
                        text:
                            "La dispute dégénère et détruit une partie de l'abri. Magnifique travail d'équipe.",
                        icon: "💥",
                        effects: [
                            { target: "actor", lives: -1 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 22 - FAUSSE ARAIGNÉE
    // =========================================================
    {
        id: "interaction_fake_spider",
        type: "interaction",
        title: "{target} dort profondément",
        category: "Interaction",
        icon: "😴",

        description:
            "{actor} trouve une énorme araignée morte juste à côté de {target}. " +
            "L'occasion d'une excellente blague se présente.",

        choices: [
            {
                id: "fake_spider_prank",
                title: "🕷️ Poser l'araignée sur {target}",
                description: "Qu'est-ce qui pourrait mal tourner ?",

                consequences: [
                    {
                        id: "fake_spider_prank_good",
                        text:
                            "{target} se réveille, hurle et tombe de son hamac.",
                        icon: "😂",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    },
                    {
                        id: "fake_spider_prank_bad",
                        text:
                            "L'araignée n'était finalement pas morte. Elle mord {actor} pendant la manipulation.",
                        icon: "😱",
                        effects: [
                            { target: "actor", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "fake_spider_leave",
                title: "😇 Être raisonnable",
                description: "Jeter l'araignée loin du camp.",

                consequences: [
                    {
                        id: "fake_spider_leave_good",
                        text:
                            "{actor} jette l'araignée au loin. Tout le monde dort tranquillement.",
                        icon: "😌",
                        effects: []
                    },
                    {
                        id: "fake_spider_leave_bad",
                        text:
                            "{actor} lance l'araignée... directement sur ses propres affaires.",
                        icon: "🤦",
                        effects: [
                            { target: "actor", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 23 - REQUIN ET BARQUE
    // =========================================================
    {
        id: "interaction_shark_boat",
        type: "interaction",
        title: "{target} est dans l'eau et un requin approche",
        category: "Interaction",
        icon: "🦈",

        description:
            "{actor} se trouve dans une petite barque tandis que {target} nage à proximité. " +
            "Un aileron apparaît derrière {target}.",

        choices: [
            {
                id: "shark_rescue",
                title: "🛟 Sauver {target}",
                description: "Ramer immédiatement vers {target}.",

                consequences: [
                    {
                        id: "shark_rescue_good",
                        text:
                            "{actor} récupère {target} juste avant l'arrivée du requin.",
                        icon: "🦸",
                        effects: [
                            { target: "actor", lives: 1 },
                            { target: "target", lives: 1 }
                        ]
                    },
                    {
                        id: "shark_rescue_bad",
                        text:
                            "En remontant {target}, {actor} tombe lui aussi dans l'eau. Les deux doivent rejoindre la plage en catastrophe.",
                        icon: "🌊",
                        effects: [
                            { target: "actor", lives: -1 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "shark_leave",
                title: "🚣 Ramer vers la plage",
                description: "{actor} choisit sa propre survie.",

                consequences: [
                    {
                        id: "shark_leave_target",
                        text:
                            "{target} parvient à rejoindre la plage mais ressort complètement épuisé.",
                        icon: "🥵",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    },
                    {
                        id: "shark_leave_twist",
                        text:
                            "Le prétendu requin était un dauphin. {target} rejoint tranquillement la plage pendant que {actor} fuit au loin.",
                        icon: "🐬",
                        effects: []
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 24 - DERNIÈRES PROVISIONS
    // =========================================================
    {
        id: "interaction_last_supplies",
        type: "interaction",
        title: "{actor} et {target} trouvent les dernières provisions",
        category: "Interaction",
        icon: "🥫",

        description:
            "Une petite caisse contient les dernières provisions visibles dans la zone. " +
            "Il n'y en a pas énormément et les deux joueurs ont faim.",

        choices: [
            {
                id: "supplies_share",
                title: "🤝 Partager avec {target}",
                description: "Diviser équitablement les provisions.",

                consequences: [
                    {
                        id: "supplies_share_good",
                        text:
                            "{actor} et {target} partagent intelligemment la nourriture et reprennent des forces.",
                        icon: "🥫",
                        effects: [
                            { target: "actor", lives: 2 },
                            { target: "target", lives: 2 }
                        ]
                    },
                    {
                        id: "supplies_share_bad",
                        text:
                            "Une partie des conserves était périmée. Les deux joueurs passent un mauvais moment.",
                        icon: "🤢",
                        effects: [
                            { target: "actor", lives: -1 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "supplies_keep",
                title: "😈 Tout garder",
                description: "{actor} tente de partir avec toute la caisse.",

                consequences: [
                    {
                        id: "supplies_keep_good",
                        text:
                            "{actor} réussit à partir avec les provisions avant que {target} ne réagisse.",
                        icon: "🏃",
                        effects: [
                            { target: "actor", lives: 3 }
                        ]
                    },
                    {
                        id: "supplies_keep_bad",
                        text:
                            "{target} rattrape {actor}. La dispute pour la caisse se transforme en bagarre.",
                        icon: "🥊",
                        effects: [
                            { target: "actor", lives: -2 },
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    }

];