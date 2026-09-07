import { Game } from "./game/game.js";

import {
    showScreen,
    createPlayerInputs,
    getPlayerNames,
    displayGame,
    displayConsequence,
    displayRecap,
    displayGameOver
} from "./ui/screens.js";


const game =
    new Game();


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
// DÉMARRAGE
// =====================================

function startGame() {

    const playerNames =
        getPlayerNames();


    if (
        playerNames.length === 0
    ) {

        return;

    }


    game.start(
        playerNames
    );


    showCurrentTurn();

}


// =====================================
// TOUR ACTUEL
// =====================================

function showCurrentTurn() {

    displayGame(
        game,
        handleChoice
    );

}


// =====================================
// CHOIX
// =====================================

function handleChoice(
    choiceId
) {

    const result =
        game.makeChoice(
            choiceId
        );


    if (!result) {

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

    /*
    On essaye de passer
    au prochain joueur.

    game.nextPlayer() va également
    tirer sa nouvelle question.
    */

    const hasNextPlayer =
        game.nextPlayer();


    if (hasNextPlayer) {

        showCurrentTurn();

        return;

    }


    /*
    Plus de joueur dans le tour
    OU plus aucune question.

    On affiche toujours le récap.
    */

    displayRecap(
        game
    );


    /*
    Si les questions sont épuisées,
    le bouton devient "Voir le classement".
    */

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
// APRÈS RÉCAP
// =====================================

function nextRound() {

    /*
    Si la partie est déjà terminée,
    on affiche le classement.
    */

    if (
        game.isGameOver()
    ) {

        displayGameOver(
            game
        );

        return;

    }


    /*
    Tentative de démarrer
    un nouveau tour.
    */

    const roundStarted =
        game.startNewRound();


    /*
    Si startNewRound retourne false,
    cela signifie qu'il n'y a pas
    assez de questions pour tous
    les joueurs encore en vie.
    */

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
// RECOMMENCER
// =====================================

function restartGame() {

    game.reset();


    btnNextRound.textContent =
        "Tour suivant";


    refreshPlayerInputs();


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

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register("./service-worker.js")
                .catch(error => {

                    console.error(
                        "Erreur Service Worker :",
                        error
                    );

                });

        }
    );

}