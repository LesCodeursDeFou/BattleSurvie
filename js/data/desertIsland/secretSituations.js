export const SECRET_SITUATIONS = [

    // =====================================================
    // 1. RÉSERVE DE NOURRITURE
    // =====================================================

    {
        id: "desert_secret_food",
        type: "secret_choice",

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
                id: "desert_food_keep",
                secretValue: "keep",

                title:
                    "😈 Tout garder",

                description:
                    "Cacher les provisions et ne rien dire."
            },

            {
                id: "desert_food_share",
                secretValue: "share",

                title:
                    "🤝 Partager",

                description:
                    "Prévenir les autres et partager les provisions."
            }

        ],

        guess: {

            title:
                "Qu'a choisi {actor} ?",

            description:
                "Les autres survivants doivent maintenant deviner la décision de {actor}.",

            choices: [

                {
                    id: "desert_food_guess_keep",
                    secretValue: "keep",

                    title:
                        "😈 Tout garder",

                    description:
                        "Vous pensez que {actor} a caché la nourriture."
                },

                {
                    id: "desert_food_guess_share",
                    secretValue: "share",

                    title:
                        "🤝 Partager",

                    description:
                        "Vous pensez que {actor} a décidé de partager."
                }

            ]

        },

        outcomes: {

            keep_correct: {

                icon: "🎯",
                title: "Démasqué !",

                text:
                    "{actor} avait gardé toute la nourriture, mais les autres l'ont parfaitement deviné.",

                effects: [
                    { target: "actor", lives: -2 },
                    { target: "others", lives: 1 }
                ]

            },

            keep_wrong: {

                icon: "😏",
                title: "Bluff réussi !",

                text:
                    "{actor} avait tout gardé et personne ne s'en est rendu compte.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            },

            share_correct: {

                icon: "🤝",
                title: "Confiance !",

                text:
                    "{actor} voulait réellement partager et les autres lui ont fait confiance.",

                effects: [
                    { target: "all", lives: 1 }
                ]

            },

            share_wrong: {

                icon: "💔",
                title: "Accusé à tort !",

                text:
                    "{actor} voulait partager, mais les autres étaient persuadés du contraire.",

                effects: [
                    { target: "actor", lives: -1 },
                    { target: "others", lives: -1 }
                ]

            }

        }
    },


    // =====================================================
    // 2. SOURCE D'EAU
    // =====================================================

    {
        id: "desert_secret_water",
        type: "secret_choice",

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
                id: "desert_water_hide",
                secretValue: "hide",

                title:
                    "🤫 Garder l'endroit secret",

                description:
                    "Profiter seul de la source."
            },

            {
                id: "desert_water_reveal",
                secretValue: "reveal",

                title:
                    "📣 Prévenir les autres",

                description:
                    "Ramener tout le monde jusqu'à la source."
            }

        ],

        guess: {

            title:
                "{actor} vous a-t-il parlé de la source ?",

            description:
                "À vous de deviner ce que {actor} a réellement décidé.",

            choices: [

                {
                    id: "desert_water_guess_hide",
                    secretValue: "hide",

                    title:
                        "🤫 Il l'a cachée",

                    description:
                        "{actor} comptait garder l'eau pour lui."
                },

                {
                    id: "desert_water_guess_reveal",
                    secretValue: "reveal",

                    title:
                        "💧 Il voulait partager",

                    description:
                        "{actor} comptait vous montrer la source."
                }

            ]

        },

        outcomes: {

            hide_correct: {

                icon: "👀",
                title: "Pris sur le fait",

                text:
                    "Personne n'était dupe. Les autres découvrent que {actor} voulait garder la source secrète.",

                effects: [
                    { target: "actor", lives: -2 }
                ]

            },

            hide_wrong: {

                icon: "😎",
                title: "Personne n'a rien vu",

                text:
                    "{actor} conserve tranquillement sa source secrète.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            },

            reveal_correct: {

                icon: "💦",
                title: "Bonne intuition",

                text:
                    "{actor} comptait bien partager l'eau. Tout le monde en profite.",

                effects: [
                    { target: "all", lives: 1 }
                ]

            },

            reveal_wrong: {

                icon: "😒",
                title: "Quelle confiance...",

                text:
                    "Les autres soupçonnaient {actor}, alors qu'il comptait réellement partager la source.",

                effects: [
                    { target: "actor", lives: 1 },
                    { target: "others", lives: -1 }
                ]

            }

        }
    },


    // =====================================================
    // 3. SAC À DOS
    // =====================================================

    {
        id: "desert_secret_backpack",
        type: "secret_choice",

        title:
            "{actor} découvre le sac d'un ancien naufragé",

        category:
            "Choix secret",

        icon:
            "🎒",

        description:
            "À moitié enterré dans le sable, un vieux sac contient encore quelques objets utiles.",

        choices: [

            {
                id: "desert_backpack_search",
                secretValue: "search",

                title:
                    "🎒 Fouiller le sac",

                description:
                    "Prendre discrètement ce qui pourrait servir."
            },

            {
                id: "desert_backpack_call",
                secretValue: "call",

                title:
                    "📣 Appeler les autres",

                description:
                    "Attendre tout le monde avant de l'ouvrir."
            }

        ],

        guess: {

            title:
                "Qu'a fait {actor} avec le sac ?",

            description:
                "Le groupe doit décider s'il fait confiance à {actor}.",

            choices: [

                {
                    id: "desert_backpack_guess_search",
                    secretValue: "search",

                    title:
                        "🎒 Il l'a fouillé",

                    description:
                        "Vous pensez que {actor} s'est servi avant vous."
                },

                {
                    id: "desert_backpack_guess_call",
                    secretValue: "call",

                    title:
                        "📣 Il vous a appelés",

                    description:
                        "Vous pensez que {actor} a attendu le groupe."
                }

            ]

        },

        outcomes: {

            search_correct: {

                icon: "🫵",
                title: "Grillé !",

                text:
                    "Le groupe comprend immédiatement que {actor} a fouillé le sac en cachette.",

                effects: [
                    { target: "actor", lives: -2 }
                ]

            },

            search_wrong: {

                icon: "🎁",
                title: "Butin discret",

                text:
                    "Personne ne soupçonne {actor}, qui avait déjà récupéré le meilleur du sac.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            },

            call_correct: {

                icon: "👏",
                title: "Esprit d'équipe",

                text:
                    "{actor} avait réellement décidé d'attendre tout le monde.",

                effects: [
                    { target: "all", lives: 1 }
                ]

            },

            call_wrong: {

                icon: "😑",
                title: "Sympa la confiance",

                text:
                    "{actor} n'avait rien pris, mais personne ne voulait le croire.",

                effects: [
                    { target: "actor", lives: 1 }
                ]

            }

        }
    },


    // =====================================================
    // 4. RADEAU
    // =====================================================

    {
        id: "desert_secret_raft",
        type: "secret_choice",

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
                id: "desert_raft_escape",
                secretValue: "escape",

                title:
                    "🏃 Partir seul",

                description:
                    "Construire discrètement un radeau pour tenter sa chance."
            },

            {
                id: "desert_raft_team",
                secretValue: "team",

                title:
                    "🪵 Construire ensemble",

                description:
                    "Présenter l'idée au groupe."
            }

        ],

        guess: {

            title:
                "Quel était le plan de {actor} ?",

            description:
                "Tentative d'évasion en solitaire ou véritable projet collectif ?",

            choices: [

                {
                    id: "desert_raft_guess_escape",
                    secretValue: "escape",

                    title:
                        "🏃 Partir seul",

                    description:
                        "{actor} comptait vous abandonner."
                },

                {
                    id: "desert_raft_guess_team",
                    secretValue: "team",

                    title:
                        "🤝 Construire ensemble",

                    description:
                        "{actor} comptait proposer son idée au groupe."
                }

            ]

        },

        outcomes: {

            escape_correct: {

                icon: "🌊",
                title: "Plan découvert",

                text:
                    "Le groupe découvre le projet d'évasion de {actor} et démonte son radeau.",

                effects: [
                    { target: "actor", lives: -2 }
                ]

            },

            escape_wrong: {

                icon: "⛵",
                title: "Plan parfait",

                text:
                    "Personne ne soupçonne les véritables intentions de {actor}.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            },

            team_correct: {

                icon: "🪵",
                title: "Tous ensemble",

                text:
                    "Le groupe avait raison de faire confiance à {actor}. Le projet avance rapidement.",

                effects: [
                    { target: "all", lives: 1 }
                ]

            },

            team_wrong: {

                icon: "🤦",
                title: "Paranoïa collective",

                text:
                    "{actor} voulait aider tout le monde, mais le groupe l'accuse de préparer sa fuite.",

                effects: [
                    { target: "others", lives: -1 }
                ]

            }

        }
    },


    // =====================================================
    // 5. FRUITS ÉTRANGES
    // =====================================================

    {
        id: "desert_secret_fruit",
        type: "secret_choice",

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
                id: "desert_fruit_eat",
                secretValue: "eat",

                title:
                    "😋 En manger",

                description:
                    "Tester personnellement les fruits."
            },

            {
                id: "desert_fruit_others",
                secretValue: "others",

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
                    id: "desert_fruit_guess_eat",
                    secretValue: "eat",

                    title:
                        "😋 Lui-même",

                    description:
                        "{actor} comptait goûter les fruits."
                },

                {
                    id: "desert_fruit_guess_others",
                    secretValue: "others",

                    title:
                        "😈 Les autres",

                    description:
                        "{actor} comptait vous laisser tester."
                }

            ]

        },

        outcomes: {

            eat_correct: {

                icon: "🍈",
                title: "Courage reconnu",

                text:
                    "{actor} avait réellement décidé de tester les fruits lui-même. Ils sont délicieux.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            },

            eat_wrong: {

                icon: "😤",
                title: "Injustement soupçonné",

                text:
                    "{actor} était prêt à prendre le risque, mais personne ne le croyait.",

                effects: [
                    { target: "actor", lives: 1 },
                    { target: "others", lives: -1 }
                ]

            },

            others_correct: {

                icon: "🫵",
                title: "On te connaît trop bien",

                text:
                    "Tout le monde avait compris que {actor} cherchait un cobaye.",

                effects: [
                    { target: "actor", lives: -2 }
                ]

            },

            others_wrong: {

                icon: "🤢",
                title: "Le piège parfait",

                text:
                    "Le groupe faisait confiance à {actor}. Mauvaise idée : les fruits étaient toxiques.",

                effects: [
                    { target: "others", lives: -2 }
                ]

            }

        }
    },


    // =====================================================
    // 6. SIGNAL DE DÉTRESSE
    // =====================================================

    {
        id: "desert_secret_flare",
        type: "secret_choice",

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
                id: "desert_flare_now",
                secretValue: "now",

                title:
                    "🚨 La tirer maintenant",

                description:
                    "Tenter immédiatement d'attirer l'attention."
            },

            {
                id: "desert_flare_save",
                secretValue: "save",

                title:
                    "🤫 La conserver",

                description:
                    "La cacher pour attendre une meilleure occasion."
            }

        ],

        guess: {

            title:
                "Qu'a décidé {actor} ?",

            description:
                "Utiliser la seule fusée ou la conserver ?",

            choices: [

                {
                    id: "desert_flare_guess_now",
                    secretValue: "now",

                    title:
                        "🚨 La tirer",

                    description:
                        "{actor} voulait l'utiliser immédiatement."
                },

                {
                    id: "desert_flare_guess_save",
                    secretValue: "save",

                    title:
                        "📦 La conserver",

                    description:
                        "{actor} voulait la garder pour plus tard."
                }

            ]

        },

        outcomes: {

            now_correct: {

                icon: "✨",
                title: "Même idée",

                text:
                    "Le groupe avait parfaitement compris l'intention de {actor}. La fusée illumine le ciel.",

                effects: [
                    { target: "all", lives: 1 }
                ]

            },

            now_wrong: {

                icon: "💥",
                title: "Surprise !",

                text:
                    "Alors que personne ne s'y attendait, {actor} tire soudainement la fusée.",

                effects: [
                    { target: "actor", lives: 1 }
                ]

            },

            save_correct: {

                icon: "📦",
                title: "Décision prévisible",

                text:
                    "Le groupe avait compris que {actor} préférait conserver la fusée.",

                effects: [
                    { target: "actor", lives: 1 }
                ]

            },

            save_wrong: {

                icon: "🤐",
                title: "Secret bien gardé",

                text:
                    "Personne ne sait que {actor} possède désormais la seule fusée de détresse.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            }

        }
    },


    // =====================================================
    // 7. ABRI POUR LA NUIT
    // =====================================================

    {
        id: "desert_secret_shelter",
        type: "secret_choice",

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
                id: "desert_shelter_keep",
                secretValue: "keep",

                title:
                    "😴 Dormir seul",

                description:
                    "Garder cet endroit confortable pour soi."
            },

            {
                id: "desert_shelter_group",
                secretValue: "group",

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
                    id: "desert_shelter_guess_keep",
                    secretValue: "keep",

                    title:
                        "😴 Certainement pas",

                    description:
                        "{actor} comptait dormir tranquillement seul."
                },

                {
                    id: "desert_shelter_guess_group",
                    secretValue: "group",

                    title:
                        "🤝 Évidemment",

                    description:
                        "{actor} comptait accueillir tout le monde."
                }

            ]

        },

        outcomes: {

            keep_correct: {

                icon: "😡",
                title: "Sans surprise",

                text:
                    "Le groupe connaissait visiblement bien {actor} et retrouve son abri.",

                effects: [
                    { target: "actor", lives: -1 },
                    { target: "others", lives: 1 }
                ]

            },

            keep_wrong: {

                icon: "😴",
                title: "Bonne nuit",

                text:
                    "Personne ne retrouve {actor}, qui profite seul d'une excellente nuit.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            },

            group_correct: {

                icon: "🏕️",
                title: "Une nuit au sec",

                text:
                    "{actor} comptait bien inviter tout le monde. Le groupe passe une nuit confortable.",

                effects: [
                    { target: "all", lives: 1 }
                ]

            },

            group_wrong: {

                icon: "🙄",
                title: "Vous êtes sérieux ?",

                text:
                    "{actor} voulait partager son abri. Le groupe avait visiblement une autre opinion de lui.",

                effects: [
                    { target: "actor", lives: 1 }
                ]

            }

        }
    },


    // =====================================================
    // 8. DERNIER MÉDICAMENT
    // =====================================================

    {
        id: "desert_secret_medicine",
        type: "secret_choice",

        title:
            "{actor} trouve le dernier médicament",

        category:
            "Choix secret",

        icon:
            "💊",

        description:
            "Au fond d'une trousse de secours, {actor} découvre un unique médicament encore utilisable.",

        choices: [

            {
                id: "desert_medicine_take",
                secretValue: "take",

                title:
                    "💊 Le prendre",

                description:
                    "Le conserver pour sa propre survie."
            },

            {
                id: "desert_medicine_give",
                secretValue: "give",

                title:
                    "❤️ Le donner",

                description:
                    "Le garder pour quelqu'un qui en aurait davantage besoin."
            }

        ],

        guess: {

            title:
                "Que ferait {actor} du dernier médicament ?",

            description:
                "Cette fois, la décision pourrait en dire long sur lui.",

            choices: [

                {
                    id: "desert_medicine_guess_take",
                    secretValue: "take",

                    title:
                        "💊 Le prendre",

                    description:
                        "{actor} privilégierait sa propre survie."
                },

                {
                    id: "desert_medicine_guess_give",
                    secretValue: "give",

                    title:
                        "❤️ Le donner",

                    description:
                        "{actor} le réserverait à quelqu'un d'autre."
                }

            ]

        },

        outcomes: {

            take_correct: {

                icon: "😬",
                title: "Prévisible",

                text:
                    "{actor} comptait effectivement garder le médicament. Le groupe avait vu juste.",

                effects: [
                    { target: "actor", lives: -1 }
                ]

            },

            take_wrong: {

                icon: "💊",
                title: "Personne ne le saura",

                text:
                    "Le groupe faisait confiance à {actor}, qui avait pourtant choisi de garder le médicament.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            },

            give_correct: {

                icon: "❤️",
                title: "Belle confiance",

                text:
                    "Le groupe avait raison : {actor} comptait réserver le médicament à quelqu'un qui en aurait besoin.",

                effects: [
                    { target: "actor", lives: 2 },
                    { target: "others", lives: 1 }
                ]

            },

            give_wrong: {

                icon: "🥺",
                title: "Quelle réputation...",

                text:
                    "{actor} était prêt à sacrifier son avantage, mais personne ne l'en croyait capable.",

                effects: [
                    { target: "actor", lives: 2 }
                ]

            }

        }
    }

];