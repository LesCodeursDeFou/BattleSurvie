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
// DÉMARRAGE DE LA PARTIE
// =====================================

function startGame() {

    const playerNames =
        getPlayerNames();


    if (
        playerNames.length === 0
    ) {

        return;

    }


    // Création de la partie
    game.start(
        playerNames
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

    // Réinitialisation du moteur
    game.reset();


    // Recréation des champs joueurs
    refreshPlayerInputs();


    // Texte du bouton par défaut
    btnNextRound.textContent =
        "Tour suivant";


    // Retour accueil
    showScreen(
        "setup"
    );

}


// =====================================
// EVENTS
// =====================================

playerCount.addEventListener(
    "change",
    refreshPlayerInputs
);


btnStartGame.addEventListener(
    "click",
    startGame
);


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