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
    displaySecretIntro
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


    // On ne démarre pas encore
    // réellement le moteur.

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

            // =================================
            // PROLOGUE DU MODE
            // =================================

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

    // =====================================
    // RESET DES CHOIX
    // =====================================

    selectedGameMode =
        "battle_royal";


    selectedTheme =
        "desert_island";


    selectedMaxRounds =
        5;


    // =====================================
    // RETOUR AU VERT
    // =====================================

    applyThemeAppearance(
        "desert_island"
    );


    // =====================================
    // RESET VISUEL
    // =====================================

    resetGameOptions();


    // =====================================
    // RETOUR ACCUEIL
    // =====================================

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


    // =====================================
    // AFFICHAGE DE LA RÉVÉLATION
    // =====================================

    displayConsequence(
        data
    );

}


// =====================================
// APRÈS CONSÉQUENCE
// =====================================

function continueAfterConsequence() {

    const hasNextPlayer =
        game.nextPlayer();


    // =====================================
    // ENCORE UN JOUEUR
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
    // BOUTON APRÈS RÉCAP
    // =====================================

    if (
        game.isGameOver()
    ) {

        btnNextRound.textContent =
            "Voir le classement";

    }

    else if (
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
    // DÉMARRAGE NOUVEAU TOUR
    // =====================================

    const roundStarted =
        game.startNewRound();


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

    // =====================================
    // RESET MOTEUR
    // =====================================

    game.reset();


    // =====================================
    // RESET TEMPORAIRE
    // =====================================

    pendingPlayerNames =
        [];


    selectedGameMode =
        "battle_royal";


    selectedTheme =
        "desert_island";


    selectedMaxRounds =
        5;


    // =====================================
    // RETOUR THÈME ÎLE
    // =====================================

    applyThemeAppearance(
        "desert_island"
    );


    // =====================================
    // RESET BOUTON
    // =====================================

    btnNextRound.textContent =
        "Tour suivant";


    // =====================================
    // RESET OPTIONS
    // =====================================

    resetGameOptions();


    // =====================================
    // RECRÉER LES INPUTS
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
// INITIALISATION
// =====================================

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
                .catch(
                    error => {

                        console.error(
                            "Erreur Service Worker :",
                            error
                        );

                    }
                );

        }
    );

}