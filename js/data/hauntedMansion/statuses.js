export const STATUSES = [

    // =========================================================
    // COURAGE
    // =========================================================

    {
        id: "courage",

        name: "Courage",

        icon: "🛡️",

        category: "mental",

        description:
            "Le joueur résiste mieux à la peur et peut accéder à certains choix spéciaux.",

        minDuration: 1,

        maxDuration: 2,

        cancelDamageOnce: true,

        countsTowardLimit: true
    },


    // =========================================================
    // PANIQUE
    // Déclenchée par la jauge de peur
    // =========================================================

    {
        id: "panic",

        name: "Panique",

        icon: "😱",

        category: "mental",

        description:
            "Le joueur doit choisir rapidement sous la pression.",

        minDuration: 1,

        maxDuration: 1,

        timedChoice: 5,

        countsTowardLimit: false
    },


    // =========================================================
    // POSSESSION
    // =========================================================

    {
        id: "possessed",

        name: "Possédé",

        icon: "👿",

        category: "mental",

        description:
            "Un autre joueur peut prendre la décision à la place du joueur possédé.",

        minDuration: 1,

        maxDuration: 2,

        countsTowardLimit: true
    },


    // =========================================================
    // LUCIDITÉ
    // =========================================================

    {
        id: "lucid",

        name: "Lucide",

        icon: "👁️",

        category: "mental",

        description:
            "Le joueur peut percevoir des indices ou accéder à certains choix spéciaux.",

        minDuration: 1,

        maxDuration: 2,

        countsTowardLimit: true
    },


    // =========================================================
    // MALÉDICTION
    // =========================================================

    {
        id: "cursed",

        name: "Maudit",

        icon: "☠️",

        category: "mental",

        description:
            "À la fin de chaque tour, le joueur subit un effet aléatoire.",

        permanent: true,

        countsTowardLimit: true
    },


    // =========================================================
    // DÉTERMINATION
    // =========================================================

    {
        id: "determined",

        name: "Déterminé",

        icon: "🔥",

        category: "mental",

        description:
            "Le joueur a surmonté sa peur et bénéficie temporairement d'un regain de confiance.",

        minDuration: 1,

        maxDuration: 1,

        countsTowardLimit: false
    }

];