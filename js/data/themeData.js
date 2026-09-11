// =====================================
// ÎLE DÉSERTE
// =====================================

import {
    SITUATIONS as DESERT_SITUATIONS
} from "./desertIsland/situations.js";

import {
    INTERACTION_SITUATIONS as DESERT_INTERACTION_SITUATIONS
} from "./desertIsland/interactionSituations.js";

import {
    GROUP_SITUATIONS as DESERT_GROUP_SITUATIONS
} from "./desertIsland/groupSituations.js";

import {
    SECRET_SITUATIONS as DESERT_SECRET_SITUATIONS
} from "./desertIsland/secretSituations.js";

import {
    JUDGE_SITUATIONS as DESERT_JUDGE_SITUATIONS
} from "./desertIsland/judgeSituations.js";

import {
    EVENTS as DESERT_EVENTS
} from "./desertIsland/events.js";

import {
    ITEMS as DESERT_ITEMS
} from "./desertIsland/items.js";

import {
    STATUSES as DESERT_STATUSES
} from "./desertIsland/statuses.js";

import {
    PROLOGUE as DESERT_PROLOGUE
} from "./desertIsland/prologue.js";


// =========================================
// MANOIR HANTÉ
// =========================================

import {
    SITUATIONS as MANSION_SITUATIONS
} from "./hauntedMansion/situations.js";

import {
    INTERACTION_SITUATIONS as MANSION_INTERACTION_SITUATIONS
} from "./hauntedMansion/interactionSituations.js";

import {
    GROUP_SITUATIONS as MANSION_GROUP_SITUATIONS
} from "./hauntedMansion/groupSituations.js";

import {
    SECRET_SITUATIONS as MANSION_SECRET_SITUATIONS
} from "./hauntedMansion/secretSituations.js";

import {
    JUDGE_SITUATIONS as MANSION_JUDGE_SITUATIONS
} from "./hauntedMansion/judgeSituations.js";

import {
    EVENTS as MANSION_EVENTS
} from "./hauntedMansion/events.js";

import {
    ITEMS as MANSION_ITEMS
} from "./hauntedMansion/items.js";

import {
    STATUSES as MANSION_STATUSES
} from "./hauntedMansion/statuses.js";

import {
    PROLOGUE as MANSION_PROLOGUE
} from "./hauntedMansion/prologue.js";

// =====================================
// DONNÉES
// =====================================

const THEME_DATA = {

    desert_island: {

        situations:
            DESERT_SITUATIONS,

        interactionSituations:
            DESERT_INTERACTION_SITUATIONS,

        groupSituations:
            DESERT_GROUP_SITUATIONS,

        secretSituations:
            DESERT_SECRET_SITUATIONS,

        judgeSituations:
            DESERT_JUDGE_SITUATIONS,

        events:
            DESERT_EVENTS,

        items:
            DESERT_ITEMS,

        statuses:
            DESERT_STATUSES,

        prologue:
            DESERT_PROLOGUE
    },


    haunted_mansion: {

        situations:
            MANSION_SITUATIONS,

        interactionSituations:
            MANSION_INTERACTION_SITUATIONS,

        groupSituations:
            MANSION_GROUP_SITUATIONS,

        secretSituations:
            MANSION_SECRET_SITUATIONS,

        judgeSituations:
            MANSION_JUDGE_SITUATIONS,

        events:
            MANSION_EVENTS,

        items:
            MANSION_ITEMS,

        statuses:
            MANSION_STATUSES,

        prologue:
            MANSION_PROLOGUE
    }

};

// =====================================
// RÉCUPÉRATION
// =====================================

export function getThemeData(themeId) {

    return (
        THEME_DATA[themeId] ??
        null
    );

}