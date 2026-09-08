import { Game } from "./game/game.js";

import {
    showScreen,
    createPlayerInputs,
    getPlayerNames,
    displayGame,
    displayConsequence,
    displayRecap,
    displayGameOver,
    displayPrologue
} from "./ui/screens.js";


// =====================================
// DONNÉES TEMPORAIRES AVANT LANCEMENT
// =====================================

let pendingPlayerNames = [];

let selectedGameMode =
    "battle_royal";

let selectedTheme =
    "desert_island";


// =====================================
// JEU
// =====================================

const game =
    new Game();


// =====================================
// ÉLÉMENTS HTML
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


// =====================================
// ÉLÉMENTS OPTIONS
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


// =====================================
// INPUTS JOUEURS
// =====================================

function refreshPlayerInputs() {

    const count =
        Number(
            playerCount.value
        );


    createPlayerInputs(
        count
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
        playerNames.length === 0
    ) {

        return;

    }


    /*
    On ne démarre PAS encore
    réellement la partie.

    On mémorise simplement
    les joueurs.
    */

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
        modeButton.disabled
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


    /*
    On enlève "active"
    des autres modes.
    */

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


    /*
    On active le mode choisi.
    */

    modeButton.classList.add(
        "active"
    );


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
        themeButton.disabled
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


    /*
    On enlève "active"
    des autres thèmes.
    */

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


    /*
    On active le thème choisi.
    */

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
// OPTIONS → PROLOGUE
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
    // CRÉATION RÉELLE DE LA PARTIE
    // =====================================

    game.start(
        pendingPlayerNames
    );


    // =====================================
    // MODE CHOISI
    // =====================================

    game.gameMode =
        selectedGameMode;


    // =====================================
    // THÈME CHOISI
    // =====================================

    game.theme =
        selectedTheme;


    console.log(
        "Partie lancée :",
        {
            players:
                pendingPlayerNames,

            mode:
                selectedGameMode,

            theme:
                selectedTheme
        }
    );


    // =====================================
    // PROLOGUE
    // =====================================

    displayPrologue(
        game,
        () => {

            showCurrentTurn();

        }
    );

}


// =====================================
// RETOUR OPTIONS → ACCUEIL
// =====================================

function backToSetup() {

    showScreen(
        "setup"
    );

}


// =====================================
// AFFICHAGE TOUR ACTUEL
// =====================================

function showCurrentTurn() {

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

    const result =
        game.makeChoice(
            choiceId
        );


    if (!result) {

        console.error(
            "Impossible d'appliquer le choix",
            choiceId
        );

        return;

    }


    displayConsequence(
        result
    );

}


// =====================================
// APRÈS CONSÉQUENCE
// =====================================

function continueAfterConsequence() {

    const hasNextPlayer =
        game.nextPlayer();


    // =====================================
    // ENCORE UN JOUEUR À FAIRE JOUER
    // =====================================

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
    // QUESTIONS ÉPUISÉES
    // =====================================

    if (
        game.areQuestionsExhausted()
    ) {

        btnNextRound.textContent =
            "Voir le classement";

    }

    else {

        btnNextRound.textContent =
            "Tour suivant";

    }

}


// =====================================
// TOUR SUIVANT
// =====================================

function nextRound() {

    // =====================================
    // PARTIE TERMINÉE
    // =====================================

    if (
        game.isGameOver()
    ) {

        displayGameOver(
            game
        );

        return;

    }


    // =====================================
    // NOUVEAU TOUR
    // =====================================

    const roundStarted =
        game.startNewRound();


    // =====================================
    // PLUS ASSEZ DE QUESTIONS
    // =====================================

    if (!roundStarted) {

        displayGameOver(
            game
        );

        return;

    }


    btnNextRound.textContent =
        "Tour suivant";


    showCurrentTurn();

}


// =====================================
// RECOMMENCER UNE PARTIE
// =====================================

function restartGame() {

    // =====================================
    // RESET MOTEUR
    // =====================================

    game.reset();


    // =====================================
    // RESET DONNÉES TEMPORAIRES
    // =====================================

    pendingPlayerNames = [];


    selectedGameMode =
        "battle_royal";


    selectedTheme =
        "desert_island";


    // =====================================
    // RESET BOUTON RÉCAP
    // =====================================

    btnNextRound.textContent =
        "Tour suivant";


    // =====================================
    // RESET OPTIONS VISUELLES
    // =====================================

    resetGameOptions();


    // =====================================
    // RECRÉATION DES JOUEURS
    // =====================================

    refreshPlayerInputs();


    // =====================================
    // RETOUR ACCUEIL
    // =====================================

    showScreen(
        "setup"
    );

}


// =====================================
// RESET VISUEL DES OPTIONS
// =====================================

function resetGameOptions() {

    // =====================================
    // MODES
    // =====================================

    if (gameModeContainer) {

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


        if (defaultMode) {

            defaultMode.classList.add(
                "active"
            );

        }

    }


    // =====================================
    // THÈMES
    // =====================================

    if (themeContainer) {

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


        if (defaultTheme) {

            defaultTheme.classList.add(
                "active"
            );

        }

    }

}


// =====================================
// EVENTS - JOUEURS
// =====================================

playerCount.addEventListener(
    "change",
    refreshPlayerInputs
);


btnStartGame.addEventListener(
    "click",
    startGame
);


// =====================================
// EVENTS - OPTIONS
// =====================================

if (gameModeContainer) {

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


if (themeContainer) {

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


if (btnLaunchAdventure) {

    btnLaunchAdventure.addEventListener(
        "click",
        launchAdventure
    );

}


if (btnBackToSetup) {

    btnBackToSetup.addEventListener(
        "click",
        backToSetup
    );

}


// =====================================
// EVENTS - PARTIE
// =====================================

btnContinue.addEventListener(
    "click",
    continueAfterConsequence
);


btnNextRound.addEventListener(
    "click",
    nextRound
);


btnRestart.addEventListener(
    "click",
    restartGame
);


// =====================================
// INITIALISATION
// =====================================

refreshPlayerInputs();

resetGameOptions();

showScreen(
    "setup"
);


// =====================================
// SERVICE WORKER
// =====================================

const isGitHubPages =
    window.location.hostname.includes(
        "github.io"
    );


if (
    "serviceWorker" in navigator &&
    isGitHubPages
) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register(
                    "./service-worker.js"
                )
                .then(() => {

                    console.log(
                        "Service Worker enregistré"
                    );

                })
                .catch(error => {

                    console.error(
                        "Erreur Service Worker :",
                        error
                    );

                });

        }
    );

}