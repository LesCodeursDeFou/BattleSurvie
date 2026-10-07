import { APP_VERSION } from "./version.js";

import { Game } from "./game/game.js";

import {
    showScreen,
    createPlayerInputs,
    getPlayerNames,
    displayGame,
    displayConsequence,
    displayRecap,
    displayGameOver,
    displayPrologue,
    displayModePrologue,
    displaySecretHandoff,
    displaySecretGuess,
    displaySecretIntro,
    displayEffectUpdates
} from "./ui/screens.js";


// =====================================
// DONNÉES TEMPORAIRES AVANT LANCEMENT
// =====================================

let pendingPlayerNames =
    [];

let selectedGameMode =
    "battle_royal";

let selectedTheme =
    "desert_island";

let selectedMaxRounds =
    5;


// =====================================
// JEU
// =====================================

const game =
    new Game();


// =====================================
// ÉLÉMENTS HTML - GÉNÉRAL
// =====================================

const playerCount =
    document.getElementById(
        "playerCount"
    );

const btnStartGame =
    document.getElementById(
        "btnStartGame"
    );

const btnContinue =
    document.getElementById(
        "btnContinue"
    );

const btnNextRound =
    document.getElementById(
        "btnNextRound"
    );

const btnRestart =
    document.getElementById(
        "btnRestart"
    );

const gameVersionElement =
    document.getElementById(
        "gameVersion"
    );


// =====================================
// ÉLÉMENTS HTML - OPTIONS
// =====================================

const btnLaunchAdventure =
    document.getElementById(
        "btnLaunchAdventure"
    );

const btnBackToSetup =
    document.getElementById(
        "btnBackToSetup"
    );

const gameModeContainer =
    document.getElementById(
        "gameModeContainer"
    );

const themeContainer =
    document.getElementById(
        "themeContainer"
    );

const roundConfig =
    document.getElementById(
        "roundConfig"
    );

const roundChoices =
    document.getElementById(
        "roundChoices"
    );

const roundEstimate =
    document.getElementById(
        "roundEstimate"
    );


// =====================================
// VERSION DU JEU
// =====================================
//
// La version est affichée directement depuis
// version.js.
//
// Elle ne dépend PAS du Service Worker.
// Cela évite les problèmes d'affichage sur iOS.
//

function displayGameVersion() {

    if (!gameVersionElement) {

        console.warn(
            "Élément #gameVersion introuvable."
        );

        return;

    }

    gameVersionElement.textContent =
        `v${APP_VERSION}`;

}


// =====================================
// APPARENCE DU THÈME
// =====================================

function applyThemeAppearance(
    themeId
) {

    document.body.dataset.theme =
        themeId;

}


// =====================================
// INPUTS JOUEURS
// =====================================

function refreshPlayerInputs() {

    if (!playerCount) {

        return;

    }

    const count =
        Number(
            playerCount.value
        );

    createPlayerInputs(
        count
    );

}


// =====================================
// CHOIX DU NOMBRE DE TOURS
// =====================================

function selectRoundCount(
    button
) {

    if (
        !button ||
        !roundChoices
    ) {

        return;

    }

    const rounds =
        Number(
            button.dataset.rounds
        );

    if (!rounds) {

        return;

    }

    selectedMaxRounds =
        rounds;


    // =====================================
    // SÉLECTION VISUELLE
    // =====================================

    const buttons =
        roundChoices.querySelectorAll(
            ".round-choice"
        );

    buttons.forEach(
        item => {

            item.classList.remove(
                "active"
            );

        }
    );

    button.classList.add(
        "active"
    );


    // =====================================
    // DESCRIPTIONS
    // =====================================

    const configs = {

        3: {
            name:
                "Partie courte",

            icon:
                "⚡",

            minutes:
                8
        },

        5: {
            name:
                "Partie normale",

            icon:
                "🎮",

            minutes:
                15
        },

        8: {
            name:
                "Partie longue",

            icon:
                "🔥",

            minutes:
                25
        },

        10: {
            name:
                "Marathon",

            icon:
                "🏆",

            minutes:
                35
        }

    };

    const config =
        configs[
            selectedMaxRounds
        ];

    if (
        roundEstimate &&
        config
    ) {

        roundEstimate.textContent =
            `${config.icon} ${config.name} • ${selectedMaxRounds} tours • environ ${config.minutes} min`;

    }

    console.log(
        "Nombre de tours sélectionné :",
        selectedMaxRounds
    );

}


// =====================================
// ÉTAPE 1
// JOUEURS → OPTIONS
// =====================================

function startGame() {

    const playerNames =
        getPlayerNames();

    if (
        !Array.isArray(
            playerNames
        ) ||
        playerNames.length === 0
    ) {

        console.error(
            "Aucun joueur trouvé."
        );

        return;

    }

    pendingPlayerNames =
        playerNames;

    showScreen(
        "gameOptions"
    );

}


// =====================================
// SÉLECTION DU MODE
// =====================================

function selectGameMode(
    modeButton
) {

    if (
        !modeButton ||
        modeButton.disabled ||
        !gameModeContainer
    ) {

        return;

    }

    const mode =
        modeButton.dataset.mode;

    if (!mode) {

        return;

    }

    selectedGameMode =
        mode;


    // =====================================
    // RETIRER ACTIVE PARTOUT
    // =====================================

    const modeButtons =
        gameModeContainer.querySelectorAll(
            ".option-card[data-mode]"
        );

    modeButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    // =====================================
    // ACTIVER LE MODE CHOISI
    // =====================================

    modeButton.classList.add(
        "active"
    );


    // =====================================
    // PANNEAU SURVIVAL PARTY
    // =====================================

    if (roundConfig) {

        if (
            selectedGameMode ===
            "survival_party"
        ) {

            roundConfig.classList.remove(
                "hidden"
            );

        }

        else {

            roundConfig.classList.add(
                "hidden"
            );

        }

    }

    console.log(
        "Mode sélectionné :",
        selectedGameMode
    );

}


// =====================================
// SÉLECTION DU THÈME
// =====================================

function selectTheme(
    themeButton
) {

    if (
        !themeButton ||
        themeButton.disabled ||
        !themeContainer
    ) {

        return;

    }

    const theme =
        themeButton.dataset.theme;

    if (!theme) {

        return;

    }

    selectedTheme =
        theme;


    // =====================================
    // CHANGEMENT IMMÉDIAT DE L'AMBIANCE
    // =====================================

    applyThemeAppearance(
        selectedTheme
    );


    // =====================================
    // RETIRER ACTIVE PARTOUT
    // =====================================

    const themeButtons =
        themeContainer.querySelectorAll(
            ".theme-card[data-theme]"
        );

    themeButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    // =====================================
    // ACTIVER LE THÈME CHOISI
    // =====================================

    themeButton.classList.add(
        "active"
    );

    console.log(
        "Thème sélectionné :",
        selectedTheme
    );

}


// =====================================
// ÉTAPE 2
// OPTIONS → PROLOGUES
// =====================================

function launchAdventure() {

    if (
        pendingPlayerNames.length === 0
    ) {

        console.error(
            "Aucun joueur en attente."
        );

        showScreen(
            "setup"
        );

        return;

    }


    // =====================================
    // DÉMARRAGE RÉEL DU MOTEUR
    // =====================================

    const gameStarted =
        game.start(
            pendingPlayerNames,
            selectedGameMode,
            selectedTheme,
            selectedMaxRounds
        );

    if (!gameStarted) {

        console.error(
            "Impossible de démarrer la partie.",
            {
                players:
                    pendingPlayerNames,

                mode:
                    selectedGameMode,

                theme:
                    selectedTheme,

                rounds:
                    selectedMaxRounds
            }
        );

        return;

    }

    console.log(
        "Partie lancée :",
        {
            players:
                pendingPlayerNames,

            mode:
                selectedGameMode,

            theme:
                selectedTheme,

            rounds:
                selectedMaxRounds,

            situations:
                game.availableSituations.length
        }
    );


    // =====================================
    // PROLOGUE DU THÈME
    // =====================================

    displayPrologue(
        game,
        () => {

            displayModePrologue(
                game,
                () => {

                    showCurrentTurn();

                }
            );

        }
    );

}


// =====================================
// RETOUR OPTIONS → ACCUEIL
// =====================================

function backToSetup() {

    selectedGameMode =
        "battle_royal";

    selectedTheme =
        "desert_island";

    selectedMaxRounds =
        5;

    applyThemeAppearance(
        "desert_island"
    );

    resetGameOptions();

    showScreen(
        "setup"
    );

}


// =====================================
// AFFICHAGE DU TOUR ACTUEL
// =====================================

function showCurrentTurn() {

    const situation =
        game.getCurrentSituation();

    if (!situation) {

        console.error(
            "Aucune situation actuelle."
        );

        return;

    }


    // =====================================
    // CHOIX SECRET
    // =====================================

    if (
        situation.type ===
        "secret_choice"
    ) {

        displaySecretIntro(
            game,
            () => {

                displayGame(
                    game,
                    handleChoice
                );

            }
        );

        return;

    }


    // =====================================
    // SITUATION NORMALE
    // =====================================

    displayGame(
        game,
        handleChoice
    );

}


// =====================================
// CHOIX DU JOUEUR
// =====================================

function handleChoice(
    choiceId
) {

    const data =
        game.makeChoice(
            choiceId
        );

    if (!data) {

        console.error(
            "Impossible d'appliquer le choix :",
            choiceId
        );

        return;

    }

    console.log(
        "Résultat de makeChoice :",
        data
    );


    // =====================================
    // SECRET CHOICE
    // PHASE 1 TERMINÉE
    // =====================================

    if (
        data.phase ===
        "secret_waiting"
    ) {

        displaySecretHandoff(
            data,
            () => {

                displaySecretGuess(
                    game,
                    data,
                    handleSecretGuess
                );

            }
        );

        return;

    }


    // =====================================
    // SITUATION CLASSIQUE
    // =====================================

    displayConsequence(
        data
    );

}


// =====================================
// SECRET CHOICE
// DEVINETTE DES AUTRES JOUEURS
// =====================================

function handleSecretGuess(
    guessId
) {

    const data =
        game.resolveSecretGuess(
            guessId
        );

    if (!data) {

        console.error(
            "Impossible de résoudre la devinette :",
            guessId
        );

        return;

    }

    console.log(
        "Choix secret résolu :",
        data
    );

    displayConsequence(
        data
    );

}


// =====================================
// APRÈS CONSÉQUENCE
// =====================================

function continueAfterConsequence() {

    const events =
        game.processAfterCurrentTurn();

    if (
        Array.isArray(events) &&
        events.length > 0
    ) {

        displayEffectUpdates(
            events,
            continueToNextPlayer
        );

        return;

    }

    continueToNextPlayer();

}


// =====================================
// PASSAGE AU JOUEUR SUIVANT
// =====================================

function continueToNextPlayer() {

    const hasNextPlayer =
        game.nextPlayer();

    if (hasNextPlayer) {

        showCurrentTurn();

        return;

    }


    // =====================================
    // FIN DU TOUR
    // =====================================

    displayRecap(
        game
    );


    // =====================================
    // TEXTE DU BOUTON APRÈS LE RÉCAP
    // =====================================

    if (
        game.isGameOver() ||
        game.areQuestionsExhausted()
    ) {

        if (btnNextRound) {

            btnNextRound.textContent =
                "Voir le classement";

        }

    }

    else {

        if (btnNextRound) {

            btnNextRound.textContent =
                "Tour suivant";

        }

    }

}


// =====================================
// TOUR SUIVANT
// =====================================

function nextRound() {

    if (
        game.isGameOver()
    ) {

        displayGameOver(
            game
        );

        return;

    }

    const roundStarted =
        game.startNewRound();

    if (!roundStarted) {

        displayGameOver(
            game
        );

        return;

    }

    if (btnNextRound) {

        btnNextRound.textContent =
            "Tour suivant";

    }

    showCurrentTurn();

}


// =====================================
// RESET VISUEL DES OPTIONS
// =====================================

function resetGameOptions() {

    // =====================================
    // MODES
    // =====================================

    if (
        gameModeContainer
    ) {

        const modeButtons =
            gameModeContainer.querySelectorAll(
                ".option-card[data-mode]"
            );

        modeButtons.forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );

        const defaultMode =
            gameModeContainer.querySelector(
                '[data-mode="battle_royal"]'
            );

        if (
            defaultMode
        ) {

            defaultMode.classList.add(
                "active"
            );

        }

    }


    // =====================================
    // THÈMES
    // =====================================

    if (
        themeContainer
    ) {

        const themeButtons =
            themeContainer.querySelectorAll(
                ".theme-card[data-theme]"
            );

        themeButtons.forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );

        const defaultTheme =
            themeContainer.querySelector(
                '[data-theme="desert_island"]'
            );

        if (
            defaultTheme
        ) {

            defaultTheme.classList.add(
                "active"
            );

        }

    }


    // =====================================
    // SURVIVAL PARTY
    // =====================================

    if (
        roundConfig
    ) {

        roundConfig.classList.add(
            "hidden"
        );

    }


    // =====================================
    // RESET DU NOMBRE DE TOURS
    // =====================================

    selectedMaxRounds =
        5;

    if (
        roundChoices
    ) {

        const roundButtons =
            roundChoices.querySelectorAll(
                ".round-choice[data-rounds]"
            );

        roundButtons.forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );

        const defaultRound =
            roundChoices.querySelector(
                '[data-rounds="5"]'
            );

        if (
            defaultRound
        ) {

            defaultRound.classList.add(
                "active"
            );

        }

    }

    if (
        roundEstimate
    ) {

        roundEstimate.textContent =
            "🎮 Partie normale • 5 tours • environ 15 min";

    }

}


// =====================================
// RECOMMENCER UNE PARTIE
// =====================================

function restartGame() {

    game.reset();

    pendingPlayerNames =
        [];

    selectedGameMode =
        "battle_royal";

    selectedTheme =
        "desert_island";

    selectedMaxRounds =
        5;

    applyThemeAppearance(
        "desert_island"
    );

    if (btnNextRound) {

        btnNextRound.textContent =
            "Tour suivant";

    }

    resetGameOptions();

    refreshPlayerInputs();

    showScreen(
        "setup"
    );

}


// =====================================
// EVENTS - JOUEURS
// =====================================

if (
    playerCount
) {

    playerCount.addEventListener(
        "change",
        refreshPlayerInputs
    );

}

if (
    btnStartGame
) {

    btnStartGame.addEventListener(
        "click",
        startGame
    );

}


// =====================================
// EVENTS - MODES
// =====================================

if (
    gameModeContainer
) {

    gameModeContainer.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".option-card[data-mode]"
                );

            if (!button) {

                return;

            }

            selectGameMode(
                button
            );

        }
    );

}


// =====================================
// EVENTS - THÈMES
// =====================================

if (
    themeContainer
) {

    themeContainer.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".theme-card[data-theme]"
                );

            if (!button) {

                return;

            }

            selectTheme(
                button
            );

        }
    );

}


// =====================================
// EVENTS - NOMBRE DE TOURS
// =====================================

if (
    roundChoices
) {

    roundChoices.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".round-choice[data-rounds]"
                );

            if (!button) {

                return;

            }

            selectRoundCount(
                button
            );

        }
    );

}


// =====================================
// EVENTS - OPTIONS
// =====================================

if (
    btnLaunchAdventure
) {

    btnLaunchAdventure.addEventListener(
        "click",
        launchAdventure
    );

}

if (
    btnBackToSetup
) {

    btnBackToSetup.addEventListener(
        "click",
        backToSetup
    );

}


// =====================================
// EVENTS - PARTIE
// =====================================

if (
    btnContinue
) {

    btnContinue.addEventListener(
        "click",
        continueAfterConsequence
    );

}

if (
    btnNextRound
) {

    btnNextRound.addEventListener(
        "click",
        nextRound
    );

}

if (
    btnRestart
) {

    btnRestart.addEventListener(
        "click",
        restartGame
    );

}


// =====================================
// SERVICE WORKER
// =====================================

const canUseServiceWorker =

    window.location.hostname.includes(
        "github.io"
    ) ||

    window.location.hostname ===
        "localhost" ||

    window.location.hostname ===
        "127.0.0.1";


// =====================================
// ENREGISTREMENT DU SERVICE WORKER
// =====================================

async function registerServiceWorker() {

    if (
        !("serviceWorker" in navigator) ||
        !canUseServiceWorker
    ) {

        console.log(
            "Service Worker non utilisé dans cet environnement."
        );

        return;

    }

    try {

        const registration =
            await navigator.serviceWorker.register(
                "./service-worker.js",
                {
                    type:
                        "module",

                    updateViaCache:
                        "none"
                }
            );

        console.log(
            `Service Worker enregistré - BattleSurvie v${APP_VERSION}`
        );


        // =================================
        // VÉRIFIER IMMÉDIATEMENT
        // LES MISES À JOUR
        // =================================

        try {

            await registration.update();

        }

        catch (
            error
        ) {

            console.warn(
                "Vérification du Service Worker impossible :",
                error
            );

        }


        // =================================
        // SI UN WORKER ATTEND DÉJÀ
        // =================================

        if (
            registration.waiting
        ) {

            registration.waiting.postMessage({
                type:
                    "SKIP_WAITING"
            });

        }


        // =================================
        // NOUVELLE VERSION DÉTECTÉE
        // =================================

        registration.addEventListener(
            "updatefound",
            () => {

                const newWorker =
                    registration.installing;

                if (!newWorker) {

                    return;

                }

                newWorker.addEventListener(
                    "statechange",
                    () => {

                        if (
                            newWorker.state ===
                            "installed" &&
                            navigator.serviceWorker.controller
                        ) {

                            newWorker.postMessage({
                                type:
                                    "SKIP_WAITING"
                            });

                        }

                    }
                );

            }
        );

    }

    catch (
        error
    ) {

        console.error(
            "Erreur Service Worker :",
            error
        );

    }

}


// =====================================
// INITIALISATION
// =====================================

// Version
displayGameVersion();


// Thème visuel par défaut
applyThemeAppearance(
    selectedTheme
);


// Champs joueurs
refreshPlayerInputs();


// Options par défaut
resetGameOptions();


// Écran initial
showScreen(
    "setup"
);


// =====================================
// SERVICE WORKER APRÈS CHARGEMENT
// =====================================

window.addEventListener(
    "load",
    () => {

        registerServiceWorker();

    }
);