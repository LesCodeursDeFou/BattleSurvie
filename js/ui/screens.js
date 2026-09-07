import {
    playDamageAnimation,
    playHealAnimation
} from "./animations.js";


const screens = {

    setup:
        document.getElementById(
            "screenSetup"
        ),

    game:
        document.getElementById(
            "screenGame"
        ),

    consequence:
        document.getElementById(
            "screenConsequence"
        ),

    recap:
        document.getElementById(
            "screenRecap"
        ),

    gameOver:
        document.getElementById(
            "screenGameOver"
        )

};


export function showScreen(
    screenName
) {

    Object.values(
        screens
    ).forEach(
        screen => {

            if (screen) {

                screen.classList.remove(
                    "active"
                );

            }

        }
    );


    const targetScreen =
        screens[screenName];


    if (targetScreen) {

        targetScreen.classList.add(
            "active"
        );

    }

}


export function createPlayerInputs(
    count
) {

    const container =
        document.getElementById(
            "playerNames"
        );


    if (!container) {

        console.error(
            "Impossible de trouver #playerNames"
        );

        return;

    }


    container.innerHTML = "";


    for (
        let i = 1;
        i <= count;
        i++
    ) {

        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            `Nom du joueur ${i}`;


        label.setAttribute(
            "for",
            `player-${i}`
        );


        const input =
            document.createElement(
                "input"
            );


        input.type =
            "text";


        input.id =
            `player-${i}`;


        input.className =
            "player-name-input";


        input.placeholder =
            `Joueur ${i}`;


        input.value =
            `Joueur ${i}`;


        container.appendChild(
            label
        );


        container.appendChild(
            input
        );

    }

}


export function getPlayerNames() {

    const inputs =
        document.querySelectorAll(
            ".player-name-input"
        );


    return Array.from(
        inputs
    ).map(
        (input, index) => {

            const value =
                input.value.trim();


            if (value) {

                return value;

            }


            return `Joueur ${index + 1}`;

        }
    );

}


export function displayGame(
    game,
    onChoice
) {

    const player =
        game.getCurrentPlayer();


    const situation =
        game.getCurrentSituation();


    if (
        !player ||
        !situation
    ) {

        console.error(
            "Impossible d'afficher la situation",
            {
                player,
                situation
            }
        );

        return;
    }


    // =====================================
    // CIBLE
    // =====================================

    let targetPlayer = null;


    if (
        situation.type === "interaction" ||
        situation.type === "group_vs_one"
    ) {

        targetPlayer =
            game.players.find(
                item =>
                    item.id ===
                    situation.targetPlayerId
            ) ?? null;

    }


    // =====================================
    // GROUPE
    // =====================================

    let groupPlayers = [];


    if (
        situation.type ===
        "group_vs_one"
    ) {

        groupPlayers =
            game.getSituationGroupPlayers(
                situation
            );

    }


    // =====================================
    // TOUR
    // =====================================

    document.getElementById(
        "roundNumber"
    ).textContent =
        game.roundNumber;


    document.getElementById(
        "playerPosition"
    ).textContent =
        `${game.currentPlayerIndex + 1} / ${game.players.length}`;


    // =====================================
    // À TOI DE JOUER
    // =====================================

    const currentPlayerName =
        document.getElementById(
            "currentPlayerName"
        );


    if (
        situation.type ===
        "group_vs_one"
    ) {

        currentPlayerName.textContent =
            game.formatPlayerGroup(
                groupPlayers
            );

    }

    else {

        currentPlayerName.textContent =
            player.name;

    }


    // =====================================
    // VIES
    // =====================================

    document.getElementById(
        "currentPlayerLives"
    ).textContent =
        player.lives;


    // =====================================
    // SITUATION
    // =====================================

    document.getElementById(
        "situationIcon"
    ).textContent =
        situation.icon;


    document.getElementById(
        "situationCategory"
    ).textContent =
        situation.category;


    document.getElementById(
        "situationTitle"
    ).textContent =
        game.renderPlayerText(
            situation.title,
            player,
            targetPlayer,
            groupPlayers
        );


    document.getElementById(
        "situationDescription"
    ).textContent =
        game.renderPlayerText(
            situation.description,
            player,
            targetPlayer,
            groupPlayers
        );


    // =====================================
    // CHOIX
    // =====================================

    displayChoices(
        situation.choices,
        onChoice,
        game,
        player,
        targetPlayer,
        groupPlayers
    );


    showScreen(
        "game"
    );
}

function displayChoices(
    choices,
    onChoice,
    game,
    actorPlayer,
    targetPlayer,
    groupPlayers = []
) {

    const container =
        document.getElementById(
            "choicesContainer"
        );


    container.innerHTML = "";


    choices.forEach(
        choice => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "choice-button";


            // =====================================
            // TITRE
            // =====================================

            const title =
                document.createElement(
                    "strong"
                );


            title.textContent =
                game.renderPlayerText(
                    choice.title,
                    actorPlayer,
                    targetPlayer,
                    groupPlayers
                );


            // =====================================
            // DESCRIPTION
            // =====================================

            const description =
                document.createElement(
                    "span"
                );


            description.textContent =
                game.renderPlayerText(
                    choice.description,
                    actorPlayer,
                    targetPlayer,
                    groupPlayers
                );


            button.appendChild(
                title
            );


            button.appendChild(
                description
            );


            // =====================================
            // CLIC
            // =====================================

            button.addEventListener(
                "click",
                () => {

                    console.log(
                        "Choix sélectionné :",
                        choice.id
                    );


                    onChoice(
                        choice.id
                    );

                }
            );


            container.appendChild(
                button
            );

        }
    );
}


export function displayConsequence(result) {

    const player =
        result.player;

    const targetPlayer =
        result.targetPlayer ?? null;

    const consequence =
        result.consequence;

    const effects =
        result.effects ?? [];


    // =====================================
    // ICÔNE
    // =====================================

    document.getElementById(
        "consequenceIcon"
    ).textContent =
        consequence.icon;


    // =====================================
    // TEXTE DE CONSÉQUENCE
    // =====================================

    document.getElementById(
        "consequenceText"
    ).textContent =
        result.result.consequenceText;


    // =====================================
    // ZONE DE VARIATION DE VIES
    // =====================================

    const lifeChange =
        document.getElementById(
            "lifeChange"
        );


    lifeChange.className =
        "life-change";


    // =====================================
    // AUCUN EFFET
    // =====================================

    if (effects.length === 0) {

        lifeChange.textContent =
            "Aucune vie perdue";

        lifeChange.classList.add(
            "neutral"
        );

    }

    // =====================================
    // UN OU PLUSIEURS JOUEURS IMPACTÉS
    // =====================================

    else {

        const lines =
            effects.map(effect => {

                const sign =
                    effect.difference > 0
                        ? "+"
                        : "";

                const heart =
                    effect.difference > 0
                        ? "💚"
                        : effect.difference < 0
                            ? "💔"
                            : "❤️";


                return (
                    `${effect.playerName} : ` +
                    `${sign}${effect.difference} ${heart}`
                );

            });


        lifeChange.innerHTML =
            lines.join("<br>");


        // =================================
        // STYLE GLOBAL
        // =================================

        const hasDamage =
            effects.some(
                effect =>
                    effect.difference < 0
            );


        const hasHeal =
            effects.some(
                effect =>
                    effect.difference > 0
            );


        if (
            hasDamage &&
            !hasHeal
        ) {

            lifeChange.classList.add(
                "negative"
            );

        }

        else if (
            hasHeal &&
            !hasDamage
        ) {

            lifeChange.classList.add(
                "positive"
            );

        }

        else {

            lifeChange.classList.add(
                "neutral"
            );

        }

    }


    // =====================================
    // RÉCAP RAPIDE DES VIES
    // =====================================

    const newLifeCount =
        document.getElementById(
            "newLifeCount"
        );


    /*
    Si plusieurs joueurs sont impactés,
    on affiche leurs vies restantes.
    */

    if (effects.length > 0) {

        const recapLives =
            effects.map(effect => {

                return (
                    `${effect.playerName} : ` +
                    `❤️ ${effect.livesAfter}`
                );

            });


        newLifeCount.innerHTML =
            recapLives.join("<br>");

    }

    else {

        /*
        Aucun effet :
        on affiche juste les vies
        du joueur actif.
        */

        newLifeCount.textContent =
            `${player.name} : ❤️ ${player.lives}`;

    }


    showScreen(
        "consequence"
    );

}


export function displayRecap(game) {

    document.getElementById(
        "recapTitle"
    ).textContent =
        `📊 Récapitulatif — Tour ${game.roundNumber}`;


    const container =
        document.getElementById(
            "recapContainer"
        );


    container.innerHTML = "";


    const results =
        game.getRoundResults();


    console.log(
        "Récapitulatif du tour :",
        results
    );


    results.forEach(result => {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "recap-player";


        // =====================================
        // PARTIE GAUCHE
        // =====================================

        const left =
            document.createElement(
                "div"
            );


        // =====================================
        // QUI A JOUÉ ?
        // =====================================

        const name =
            document.createElement(
                "div"
            );


        name.className =
            "recap-player-name";


        /*
        Situation de groupe :
        on affiche TOUS les joueurs
        ayant participé à la décision.

        Exemple :
        Joueur 1, Joueur 2 et Joueur 4
        */

        if (
            result.situationType === "group_vs_one" &&
            Array.isArray(result.playedPlayerNames) &&
            result.playedPlayerNames.length > 0
        ) {

            name.textContent =
                result.playedPlayerNames.join(
                    ", "
                );

        }

        else {

            name.textContent =
                result.playerName;

        }


        // =====================================
        // SITUATION
        // =====================================

        const situation =
            document.createElement(
                "div"
            );


        situation.className =
            "recap-situation";


        situation.textContent =
            `${result.situationIcon} ${result.situationTitle}`;


        // =====================================
        // CHOIX
        // =====================================

        const choice =
            document.createElement(
                "div"
            );


        choice.className =
            "recap-choice";


        choice.textContent =
            `${result.choiceTitle}`;


        left.appendChild(
            name
        );


        left.appendChild(
            situation
        );


        left.appendChild(
            choice
        );


        // =====================================
        // EFFETS
        // =====================================

        if (
            Array.isArray(result.effects) &&
            result.effects.length > 0
        ) {

            const effectsContainer =
                document.createElement(
                    "div"
                );


            effectsContainer.className =
                "recap-effects";


            result.effects.forEach(
                effect => {

                    const effectLine =
                        document.createElement(
                            "div"
                        );


                    let sign = "";


                    if (
                        effect.difference > 0
                    ) {

                        sign = "+";

                    }


                    effectLine.textContent =
                        `${effect.playerName} : ${sign}${effect.difference} ❤️`;


                    effectsContainer.appendChild(
                        effectLine
                    );

                }
            );


            left.appendChild(
                effectsContainer
            );

        }


        item.appendChild(
            left
        );


        container.appendChild(
            item
        );

    });


    showScreen(
        "recap"
    );

}


export function displayGameOver(
    game
) {

    const text =
        document.getElementById(
            "gameOverText"
        );


    const alivePlayers =
        game.getAlivePlayers();

        
    // =====================================
    // FIN PAR ÉPUISEMENT DES QUESTIONS
    // =====================================

    if (
        game.areQuestionsExhausted()
    ) {

        text.textContent =
            `Toutes les ${game.getUsedSituationCount()} situations ont été jouées. ` +
            `La survie est terminée !`;

    }


    // =====================================
    // MODE SOLO
    // =====================================

    else if (
        game.players.length === 1
    ) {

        text.textContent =
            `${game.players[0].name} a survécu ${game.roundNumber} tour(s).`;

    }


    // =====================================
    // DERNIER SURVIVANT
    // =====================================

    else if (
        alivePlayers.length === 1
    ) {

        text.textContent =
            `${alivePlayers[0].name} est le dernier survivant !`;

    }


    else {

        text.textContent =
            "La partie est terminée.";

    }


    // =====================================
    // CLASSEMENT
    // =====================================

    const ranking =
        game.getRanking();


    const container =
        document.getElementById(
            "finalRanking"
        );


    container.innerHTML = "";


    ranking.forEach(
        (player, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "ranking-player";


            if (index === 0) {

                item.classList.add(
                    "winner"
                );

            }


            const position =
                document.createElement(
                    "span"
                );


            let medal = "";


            if (index === 0) {

                medal = "🥇 ";

            }

            else if (index === 1) {

                medal = "🥈 ";

            }

            else if (index === 2) {

                medal = "🥉 ";

            }


            position.textContent =
                `${medal}${player.name}`;


            const lives =
                document.createElement(
                    "strong"
                );


            lives.textContent =
                `❤️ ${player.lives}`;


            item.appendChild(
                position
            );


            item.appendChild(
                lives
            );


            container.appendChild(
                item
            );

        }
    );


    showScreen(
        "gameOver"
    );

}