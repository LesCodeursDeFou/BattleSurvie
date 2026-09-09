export const SECRET_SITUATIONS = [

    // =====================================================
    // 1. LA CLÉ DORÉE
    // =====================================================

    {
        id: "mansion_secret_key",
        type: "secret_choice",

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
                    "La cacher et découvrir seul ce qu'elle pourrait ouvrir."
            },

            {
                id:
                    "mansion_key_share",

                secretValue:
                    "share",

                title:
                    "🗣️ Prévenir les autres",

                description:
                    "Montrer immédiatement la clé au groupe."
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

                icon:
                    "👁️",

                title:
                    "Pris sur le fait !",

                text:
                    "{actor} avait gardé la clé secrète. Les autres l'avaient parfaitement deviné.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    },

                    {
                        target:
                            "others",

                        lives:
                            1
                    }
                ]

            },

            hide_wrong: {

                icon:
                    "😈",

                title:
                    "Secret bien gardé",

                text:
                    "{actor} avait caché la clé. Personne ne s'en est rendu compte.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            share_correct: {

                icon:
                    "🤝",

                title:
                    "Confiance récompensée",

                text:
                    "{actor} voulait réellement partager la clé et les autres lui ont fait confiance.",

                effects: [
                    {
                        target:
                            "all",

                        lives:
                            1
                    }
                ]

            },

            share_wrong: {

                icon:
                    "💔",

                title:
                    "Soupçonné à tort",

                text:
                    "{actor} voulait prévenir les autres, mais personne ne l'a cru.",

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
                ]

            }

        }

    },


    // =====================================================
    // 2. LE LIVRE MAUDIT
    // =====================================================

    {
        id: "mansion_secret_book",
        type: "secret_choice",

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
                    "Ignorer l'avertissement et découvrir ce qu'il contient."
            },

            {
                id:
                    "mansion_book_leave",

                secretValue:
                    "leave",

                title:
                    "🔒 Le laisser fermé",

                description:
                    "Décider que certains secrets doivent rester enterrés."
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
                        "📖 Évidemment qu'il l'a ouvert",

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

                icon:
                    "👹",

                title:
                    "Vous le connaissez trop bien",

                text:
                    "{actor} avait bien ouvert le livre. Une présence s'en échappe avant de disparaître dans le manoir.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    }
                ]

            },

            open_wrong: {

                icon:
                    "😈",

                title:
                    "Curiosité bien cachée",

                text:
                    "{actor} avait ouvert le livre sans que personne ne le soupçonne. Il y découvre un rituel de protection.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            leave_correct: {

                icon:
                    "🧠",

                title:
                    "Enfin une décision raisonnable",

                text:
                    "{actor} avait laissé le livre fermé. Pour une fois, tout le monde avait raison de lui faire confiance.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    },

                    {
                        target:
                            "others",

                        lives:
                            1
                    }
                ]

            },

            leave_wrong: {

                icon:
                    "😑",

                title:
                    "Quelle réputation...",

                text:
                    "{actor} n'avait même pas touché au livre, mais tout le monde était persuadé du contraire.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            }

        }

    },


    // =====================================================
    // 3. LE PASSAGE SECRET
    // =====================================================

    {
        id: "mansion_secret_passage",
        type: "secret_choice",

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

                icon:
                    "🕳️",

                title:
                    "Plan démasqué",

                text:
                    "{actor} comptait explorer seul. Le groupe découvre son absence et le retrouve coincé dans le passage.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    }
                ]

            },

            alone_wrong: {

                icon:
                    "🎁",

                title:
                    "Exploration rentable",

                text:
                    "Personne ne soupçonne {actor}, qui découvre seul une réserve oubliée.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            group_correct: {

                icon:
                    "🤝",

                title:
                    "Expédition collective",

                text:
                    "{actor} comptait bien prévenir tout le monde. Le passage mène vers une pièce sûre.",

                effects: [
                    {
                        target:
                            "all",

                        lives:
                            1
                    }
                ]

            },

            group_wrong: {

                icon:
                    "🙄",

                title:
                    "Paranoïa collective",

                text:
                    "{actor} voulait partager sa découverte, mais les autres étaient persuadés qu'il partirait seul.",

                effects: [
                    {
                        target:
                            "others",

                        lives:
                            -1
                    }
                ]

            }

        }

    },


    // =====================================================
    // 4. LE VERRE DE VIN
    // =====================================================

    {
        id: "mansion_secret_wine",
        type: "secret_choice",

        title:
            "{actor} trouve une bouteille encore pleine",

        category:
            "Choix secret",

        icon:
            "🍷",

        description:
            "Une bouteille de vin parfaitement intacte repose sur une table. À côté, plusieurs verres semblent attendre les invités.",

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
                        "🍷 Oui, il a bu",

                    description:
                        "{actor} n'a certainement pas résisté."
                },

                {
                    id:
                        "mansion_wine_guess_refuse",

                    secretValue:
                        "refuse",

                    title:
                        "🚫 Non, il a refusé",

                    description:
                        "Vous pensez qu'il a préféré rester prudent."
                }

            ]

        },

        outcomes: {

            drink_correct: {

                icon:
                    "🤢",

                title:
                    "Prévisible...",

                text:
                    "{actor} avait effectivement bu. Le liquide était beaucoup trop ancien.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    }
                ]

            },

            drink_wrong: {

                icon:
                    "🍷",

                title:
                    "Santé !",

                text:
                    "{actor} avait bu en secret. Étrangement, le vin lui redonne des forces.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            refuse_correct: {

                icon:
                    "🧠",

                title:
                    "Instinct de survie",

                text:
                    "{actor} avait refusé de boire. Quelques secondes plus tard, le liquide devient noir dans la bouteille.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            },

            refuse_wrong: {

                icon:
                    "😅",

                title:
                    "Finalement raisonnable",

                text:
                    "Tout le monde pensait que {actor} boirait, mais il n'avait même pas touché à la bouteille.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            }

        }

    },


    // =====================================================
    // 5. LA POUPÉE
    // =====================================================

    {
        id: "mansion_secret_doll",
        type: "secret_choice",

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
                "Il va falloir décider s'il est courageux... ou inconscient.",

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

                icon:
                    "😱",

                title:
                    "On savait que tu le ferais",

                text:
                    "{actor} avait bien pris la poupée. Elle lui mord violemment la main.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    }
                ]

            },

            take_wrong: {

                icon:
                    "🗝️",

                title:
                    "Personne ne s'en doutait",

                text:
                    "{actor} avait pris la poupée et récupère discrètement la clé cachée dans sa poche.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            leave_correct: {

                icon:
                    "😌",

                title:
                    "Bonne décision",

                text:
                    "{actor} avait laissé la poupée tranquille. Elle tourne la tête quelques secondes après son départ.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            },

            leave_wrong: {

                icon:
                    "😂",

                title:
                    "Vous l'avez sous-estimé",

                text:
                    "{actor} n'avait même pas touché à la poupée. Les autres étaient pourtant certains du contraire.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            }

        }

    },


    // =====================================================
    // 6. LE COFFRE
    // =====================================================

    {
        id: "mansion_secret_chest",
        type: "secret_choice",

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

                icon:
                    "💥",

                title:
                    "Démasqué",

                text:
                    "{actor} avait essayé de forcer le coffre. Le mécanisme se bloque définitivement.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    }
                ]

            },

            force_wrong: {

                icon:
                    "💎",

                title:
                    "Coup parfait",

                text:
                    "{actor} avait ouvert le coffre discrètement et récupère ce qu'il contenait.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            wait_correct: {

                icon:
                    "🤝",

                title:
                    "Travail d'équipe",

                text:
                    "{actor} avait réellement attendu le groupe. Ensemble, vous ouvrez le coffre sans danger.",

                effects: [
                    {
                        target:
                            "all",

                        lives:
                            1
                    }
                ]

            },

            wait_wrong: {

                icon:
                    "😒",

                title:
                    "Encore soupçonné",

                text:
                    "{actor} avait attendu tout le monde, mais personne ne lui faisait confiance.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            }

        }

    },


    // =====================================================
    // 7. LA VOIX DANS LE COULOIR
    // =====================================================

    {
        id: "mansion_secret_voice",
        type: "secret_choice",

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
                "À vous de deviner s'il a choisi la curiosité ou la fuite.",

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

                icon:
                    "👻",

                title:
                    "On le savait",

                text:
                    "{actor} avait suivi la voix. Une silhouette surgit brusquement de l'obscurité.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    }
                ]

            },

            follow_wrong: {

                icon:
                    "🕯️",

                title:
                    "Curiosité récompensée",

                text:
                    "{actor} avait suivi la voix sans que personne ne le soupçonne. Il découvre une pièce protégée.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            run_correct: {

                icon:
                    "🏃",

                title:
                    "Instinct intact",

                text:
                    "{actor} avait choisi de fuir. Quelques secondes plus tard, la porte se referme violemment derrière lui.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            },

            run_wrong: {

                icon:
                    "😂",

                title:
                    "Pas si courageux finalement",

                text:
                    "Tout le monde pensait que {actor} suivrait la voix. Il avait déjà quitté le couloir depuis longtemps.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            1
                    }
                ]

            }

        }

    },


    // =====================================================
    // 8. LE MÉDAILLON
    // =====================================================

    {
        id: "mansion_secret_medallion",
        type: "secret_choice",

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

                icon:
                    "🩸",

                title:
                    "Objet maudit",

                text:
                    "{actor} avait bien gardé le médaillon. L'objet se resserre brutalement autour de son cou.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            -2
                    }
                ]

            },

            keep_wrong: {

                icon:
                    "✨",

                title:
                    "Pouvoir caché",

                text:
                    "{actor} avait conservé le médaillon. Personne ne le savait, et l'objet semble le protéger.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            },

            destroy_correct: {

                icon:
                    "💥",

                title:
                    "Bonne intuition",

                text:
                    "{actor} avait détruit le médaillon. Une fumée noire s'en échappe avant de disparaître.",

                effects: [
                    {
                        target:
                            "all",

                        lives:
                            1
                    }
                ]

            },

            destroy_wrong: {

                icon:
                    "👏",

                title:
                    "Finalement prudent",

                text:
                    "Tout le monde pensait que {actor} garderait le médaillon, mais il l'avait détruit sans hésiter.",

                effects: [
                    {
                        target:
                            "actor",

                        lives:
                            2
                    }
                ]

            }

        }

    }

];