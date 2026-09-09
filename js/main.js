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
    displayModePrologue
} from "./ui/screens.js";


// =====================================
// DONNÉES TEMPORAIRES AVANT LANCEMENT
// =====================================

let pendingPlayerNames = [];

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


function selectRoundCount(
    button
) {

    if (!button) {
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
    // DESCRIPTION
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


    roundEstimate.textContent =
        `${config.icon} ${config.name} • ${selectedMaxRounds} tours • environ ${config.minutes} min`;


    console.log(
        "Nombre de tours :",
        selectedMaxRounds
    );

}


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


    if (
        roundConfig
    ) {

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

    function updateRoundEstimate() {

        if (
            !roundCount
        ) {

            return;

        }


        selectedMaxRounds =
            Number(
                roundCount.value
            );


        const estimates = {

            3: 8,
            5: 15,
            8: 25,
            10: 35

        };


        if (
            roundEstimate
        ) {

            roundEstimate.textContent =
                `⏱️ Durée estimée : environ ${estimates[selectedMaxRounds]} minutes`;

        }

    }

    if (
        roundCount
    ) {

        roundCount.addEventListener(
            "change",
            updateRoundEstimate
        );

    }

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

function applyThemeAppearance(
    themeId
) {

    document.body.dataset.theme =
        themeId;

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


    applyThemeAppearance(
        selectedTheme
    );

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


    const gameStarted =
        game.start(
            pendingPlayerNames,
            selectedGameMode,
            selectedTheme,
            selectedMaxRounds
        );


    if (!gameStarted) {

        console.error(
            "Impossible de démarrer la partie",
            {
                mode:
                    selectedGameMode,

                theme:
                    selectedTheme
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

            situations:
                game.availableSituations.length
        }
    );


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
    
    applyThemeAppearance(
        "desert_island"
    );


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
// CHOIX DU NOMBRE DE TOURS
// SURVIVAL PARTY
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
// INITIALISATION
// =====================================

// Applique le thème par défaut
// dès le chargement de la page
applyThemeAppearance(
    selectedTheme
);


// Crée les champs joueurs
refreshPlayerInputs();


// Remet les options visuelles
// sur Battle Royal + Île déserte
resetGameOptions();


// Affiche l'écran d'accueil
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