export const STATUSES = [

    // =========================================================
    // FAIM
    // =========================================================

    {
        id: "hungry",

        name: "Affamé",

        icon: "🍖",

        category: "physical",

        description:
            "Le joueur manque de nourriture. Les gains de cœurs sont limités.",

        minDuration: 2,

        maxDuration: 3,

        limitHeartGain: 1,

        countsTowardLimit: true
    },


    // =========================================================
    // EMPOISONNÉ
    // =========================================================

    {
        id: "poisoned",

        name: "Empoisonné",

        icon: "☠️",

        category: "physical",

        description:
            "Le joueur perd 1 cœur à la fin de chacun de ses tours.",

        minDuration: 1,

        maxDuration: 2,

        endTurnDamage: 1,

        countsTowardLimit: true
    },


    // =========================================================
    // COURAGE
    // =========================================================

    {
        id: "courage",

        name: "Courage",

        icon: "🛡️",

        category: "mental",

        description:
            "Le joueur peut résister à une conséquence négative et accéder à certains choix spéciaux.",

        minDuration: 1,

        maxDuration: 2,

        cancelDamageOnce: true,

        countsTowardLimit: true
    },


    // =========================================================
    // DÉBROUILLARDISE
    // =========================================================

    {
        id: "resourceful",

        name: "Débrouillard",

        icon: "🛠️",

        category: "mental",

        description:
            "Le joueur peut accéder à certains choix spéciaux ou plus sûrs.",

        minDuration: 2,

        maxDuration: 2,

        countsTowardLimit: true
    },


    // =========================================================
    // ÉPUISEMENT
    // Déclenché par la jauge Fatigue
    // =========================================================

    {
        id: "exhausted",

        name: "Épuisé",

        icon: "🥵",

        category: "physical",

        description:
            "Les conséquences physiques négatives sont aggravées.",

        minDuration: 1,

        maxDuration: 1,

        amplifyPhysicalDamage: 1,

        countsTowardLimit: false
    },


    // =========================================================
    // PROTECTION
    // =========================================================

    {
        id: "protected",

        name: "Protégé",

        icon: "🛡️",

        category: "social",

        description:
            "Le joueur peut éviter une conséquence négative.",

        minDuration: 1,

        maxDuration: 2,

        cancelDamageOnce: true,

        countsTowardLimit: true
    }

];