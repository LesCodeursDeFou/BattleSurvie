// =====================================
// ÎLE DÉSERTE
// =====================================

import {
    SITUATIONS as DESERT_SITUATIONS
} from "./desertIsland/situations.js";

import {
    INTERACTION_SITUATIONS as DESERT_INTERACTIONS
} from "./desertIsland/interactionSituations.js";

import {
    GROUP_SITUATIONS as DESERT_GROUP_SITUATIONS
} from "./desertIsland/groupSituations.js";

import {
    SECRET_SITUATIONS as DESERT_SECRET_SITUATIONS
} from "./desertIsland/secretSituations.js";

import {
    PROLOGUE as DESERT_PROLOGUE
} from "./desertIsland/prologue.js";


// =====================================
// MANOIR HANTÉ
// =====================================

import {
    SITUATIONS as MANSION_SITUATIONS
} from "./hauntedMansion/situations.js";

import {
    INTERACTION_SITUATIONS as MANSION_INTERACTIONS
} from "./hauntedMansion/interactionSituations.js";

import {
    GROUP_SITUATIONS as MANSION_GROUP_SITUATIONS
} from "./hauntedMansion/groupSituations.js";

import {
    SECRET_SITUATIONS as MANSION_SECRET_SITUATIONS
} from "./hauntedMansion/secretSituations.js";

import {
    PROLOGUE as MANSION_PROLOGUE
} from "./hauntedMansion/prologue.js";


// =====================================
// DONNÉES
// =====================================

export const THEME_DATA = {

    desert_island: {

        situations:
            DESERT_SITUATIONS,

        interactionSituations:
            DESERT_INTERACTIONS,

        groupSituations:
            DESERT_GROUP_SITUATIONS,

        secretSituations:
            DESERT_SECRET_SITUATIONS,

        prologue:
            DESERT_PROLOGUE

    },


    haunted_mansion: {

        situations:
            MANSION_SITUATIONS,

        interactionSituations:
            MANSION_INTERACTIONS,

        groupSituations:
            MANSION_GROUP_SITUATIONS,

        secretSituations:
            MANSION_SECRET_SITUATIONS,

        prologue:
            MANSION_PROLOGUE

    }

};


// =====================================
// RÉCUPÉRATION
// =====================================

export function getThemeData(
    themeId
) {

    const theme =
        THEME_DATA[
            themeId
        ];


    if (!theme) {

        console.error(
            `Thème inconnu : ${themeId}`
        );

        return null;

    }


    return theme;

}