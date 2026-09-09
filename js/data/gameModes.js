export const GAME_MODES = {

    battle_royal: {

        id: "battle_royal",

        name: "Battle Royal",

        icon: "⚔️",

        available: true,

        hasRoundLimit: false,

        description:
            "Survis aux événements, prends les bonnes décisions et reste le dernier joueur encore en vie.",

        prologue: [

            {
                visual: "⚔️",
                chapter: "BATTLE ROYAL",

                text:
                    "Chaque joueur commence avec 10 cœurs.",

                duration: 2200
            },

            {
                visual: "💔",
                chapter: "",

                text:
                    "À 0 cœur, tu es éliminé.",

                duration: 2200
            },

            {
                visual: "👑",
                chapter: "",

                text:
                    "Survis aux autres.\n\nLe dernier survivant remporte la partie.",

                duration: 2800,

                final: true
            }

        ]

    },


    survival_party: {

        id: "survival_party",

        name: "Survival Party",

        icon: "❤️",

        available: true,

        hasRoundLimit: true,

        defaultRounds: 5,

        description:
            "Accumule le plus de cœurs pendant un nombre limité de tours. Des Cœurs Bonus seront distribués à la fin selon tes choix et tes actions.",

        roundOptions: [

            {
                rounds: 3,
                label: "Partie rapide",
                estimatedMinutes: 8
            },

            {
                rounds: 5,
                label: "Partie classique",
                estimatedMinutes: 15
            },

            {
                rounds: 8,
                label: "Partie longue",
                estimatedMinutes: 25
            },

            {
                rounds: 10,
                label: "Grande partie",
                estimatedMinutes: 35
            }

        ],

        prologue: [

            {
                visual: "❤️",
                chapter: "SURVIVAL PARTY",

                text:
                    "Vous avez {rounds} tours pour accumuler le plus de cœurs possible.",

                duration: 2600
            },

            {
                visual: "🎲",
                chapter: "",

                text:
                    "Ici, tomber à 0 cœur ne t'élimine pas.\n\nLa partie continue jusqu'au dernier tour.",

                duration: 2800
            },

            {
                visual: "🎁",
                chapter: "CŒURS BONUS",

                text:
                    "Vos décisions seront observées.\n\nÀ la fin, des Cœurs Bonus pourront complètement bouleverser le classement.",

                duration: 3200
            },

            {
                visual: "🏆",
                chapter: "",

                text:
                    "À la fin des {rounds} tours...\n\nle joueur avec le plus de cœurs gagne.",

                duration: 3000,

                final: true
            }

        ]

    },


    team_survival: {

        id: "team_survival",

        name: "Survie en équipe",

        icon: "🤝",

        available: false,

        description:
            "Formez des alliances et tentez de survivre ensemble jusqu'à la fin."

    },


    traitor: {

        id: "traitor",

        name: "Le Traître",

        icon: "👑",

        available: false,

        description:
            "Un joueur possède un objectif secret et tente de saboter discrètement les autres survivants."

    }

};