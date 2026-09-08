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


export function createPlayerInputs(count) {

    const container =
        document.getElementById("playerNames");

    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {

        const group =
            document.createElement("div");

        group.className = "form-group";


        const label =
            document.createElement("label");

        label.textContent =
            `Nom du joueur ${i}`;


        const input =
            document.createElement("input");

        input.type = "text";

        input.className =
            "player-name-input";

        input.name =
            `player-${i}`;

        input.autocomplete = "off";

        // IMPORTANT :
        // aucune valeur réelle
        input.value = "";

        // Joueur X est uniquement une indication
        input.placeholder =
            `Joueur ${i}`;


        group.appendChild(label);
        group.appendChild(input);

        container.appendChild(group);
    }
}

export function getPlayerNames() {

    const inputs =
        document.querySelectorAll(
            ".player-name-input"
        );

    return Array.from(inputs).map(
        (input, index) => {

            const value =
                input.value.trim();

            if (value !== "") {
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

    // =====================================
    // JOUEUR ACTUEL
    // =====================================

    const player =
        game.getCurrentPlayer();


    // =====================================
    // SITUATION ACTUELLE
    // =====================================

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
        situation.type === "group_vs_one"
    ) {

        groupPlayers =
            game.getSituationGroupPlayers(
                situation
            );

    }


    // =====================================
    // NUMÉRO DU TOUR
    // =====================================

    document.getElementById(
        "roundNumber"
    ).textContent =
        game.roundNumber;


    // =====================================
    // COMPTEUR DE PARTICIPATION
    // =====================================

    const alreadyPlayed =
        game.currentRound.playedPlayerIds.length;


    let currentParticipants = 1;


    if (
        situation.type === "group_vs_one"
    ) {

        currentParticipants =
            groupPlayers.length;

    }


    const participatedCount =
        Math.min(
            alreadyPlayed +
            currentParticipants,
            game.players.length
        );


    document.getElementById(
        "playerPosition"
    ).textContent =
        `${participatedCount} / ${game.players.length}`;


    // =====================================
    // NOM DU JOUEUR / GROUPE
    // =====================================

    const currentPlayerName =
        document.getElementById(
            "currentPlayerName"
        );


    if (
        situation.type === "group_vs_one"
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

    const livesElement =
        document.getElementById(
            "currentPlayerLives"
        );

    if (livesElement) {

        const livesContainer =
            livesElement.closest(
                ".life-counter"
            );


        if (
            situation.type === "group_vs_one"
        ) {

            // Conflit de groupe :
            // on masque complètement
            // le compteur de vie
            if (livesContainer) {
                livesContainer.style.display =
                    "none";
            }

        }

        else {

            // Tour normal / interaction :
            // on réaffiche le compteur
            if (livesContainer) {
                livesContainer.style.display =
                    "flex";
            }

            livesElement.textContent =
                player.lives;

        }

    }


    // =====================================
    // ICÔNE
    // =====================================

    document.getElementById(
        "situationIcon"
    ).textContent =
        situation.icon;


    // =====================================
    // CATÉGORIE
    // =====================================

    document.getElementById(
        "situationCategory"
    ).textContent =
        situation.category;


    // =====================================
    // TITRE
    // =====================================

    document.getElementById(
        "situationTitle"
    ).textContent =
        game.renderPlayerText(
            situation.title,
            player,
            targetPlayer,
            groupPlayers
        );


    // =====================================
    // DESCRIPTION
    // =====================================

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


    // =====================================
    // AFFICHAGE ÉCRAN
    // =====================================

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


export function displayConsequence(data) {

    // =====================================
    // SÉCURITÉ
    // =====================================

    if (!data) {

        console.error(
            "displayConsequence : aucune donnée reçue"
        );

        return;
    }


    const {
        player,
        targetPlayer,
        groupPlayers = [],
        situation,
        choice,
        consequence,
        effects = [],
        result
    } = data;


    if (!consequence || !result) {

        console.error(
            "displayConsequence : données incomplètes",
            data
        );

        return;
    }


    // =====================================
    // ICÔNE
    // =====================================

    const consequenceIcon =
        document.getElementById(
            "consequenceIcon"
        );


    if (consequenceIcon) {

        consequenceIcon.textContent =
            consequence.icon ?? "🎲";

    }


    // =====================================
    // TEXTE DE CONSÉQUENCE
    // =====================================

    const consequenceText =
        document.getElementById(
            "consequenceText"
        );


    if (consequenceText) {

        consequenceText.textContent =
            result.consequenceText ??
            consequence.text ??
            "";

    }


    // =====================================
    // CHANGEMENTS DE VIES
    // =====================================

    const lifeChange =
        document.getElementById(
            "lifeChange"
        );


    if (lifeChange) {

        lifeChange.innerHTML = "";


        if (
            Array.isArray(effects) &&
            effects.length > 0
        ) {

            effects.forEach(effect => {

                const line =
                    document.createElement(
                        "div"
                    );


                let sign = "";


                if (
                    effect.difference > 0
                ) {

                    sign = "+";

                }


                line.textContent =
                    `${effect.playerName} : ${sign}${effect.difference} 💔`;


                // Gain de vie :
                // on affiche un coeur normal
                if (
                    effect.difference > 0
                ) {

                    line.textContent =
                        `${effect.playerName} : +${effect.difference} ❤️`;

                }


                // Aucun changement
                if (
                    effect.difference === 0
                ) {

                    line.textContent =
                        `${effect.playerName} : aucun changement`;

                }


                lifeChange.appendChild(
                    line
                );

            });

        }

        else {

            lifeChange.textContent =
                "Aucune vie perdue";

        }

    }


    // =====================================
    // ÉTAT DES JOUEURS IMPACTÉS
    // =====================================

    const newLifeCount =
        document.getElementById(
            "newLifeCount"
        );


    if (newLifeCount) {

        newLifeCount.innerHTML = "";


        // On récupère une seule fois chaque joueur touché
        const affectedPlayers = [];


        effects.forEach(effect => {

            if (
                !affectedPlayers.some(
                    item =>
                        item.playerId ===
                        effect.playerId
                )
            ) {

                affectedPlayers.push(
                    effect
                );

            }

        });


        // =====================================
        // JOUEURS TOUCHÉS
        // =====================================

        if (
            affectedPlayers.length > 0
        ) {

            affectedPlayers.forEach(
                effect => {

                    const line =
                        document.createElement(
                            "div"
                        );


                    line.textContent =
                        `${effect.playerName} : ❤️ ${effect.livesAfter} vies restantes`;


                    newLifeCount.appendChild(
                        line
                    );

                }
            );

        }

        // =====================================
        // PERSONNE TOUCHÉ
        // =====================================

        else if (player) {

            const line =
                document.createElement(
                    "div"
                );


            line.textContent =
                `${player.name} : ❤️ ${player.lives} vies restantes`;


            newLifeCount.appendChild(
                line
            );

        }

    }


    // =====================================
    // AFFICHER L'ÉCRAN
    // =====================================

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


    // =====================================
    // SURVIVANTS
    // =====================================

    const survivorsSection =
        document.createElement("div");

    survivorsSection.className =
        "survivors-section";


    const survivorsTitle =
        document.createElement("div");

    survivorsTitle.className =
        "survivors-title";

    survivorsTitle.textContent =
        "❤️ État des survivants";


    const survivorsGrid =
        document.createElement("div");

    survivorsGrid.className =
        "survivors-grid";


    const alivePlayers =
        game.players.filter(
            player => player.alive
        );


    alivePlayers.forEach(
        (player, index) => {

            const card =
                document.createElement("div");

            card.className =
                "survivor-card";

            card.style.animationDelay =
                `${index * 90}ms`;


            const name =
                document.createElement("div");

            name.className =
                "survivor-name";

            name.textContent =
                player.name;


            const lives =
                document.createElement("div");

            lives.className =
                "survivor-lives";


            const heart =
                document.createElement("span");

            heart.className =
                "survivor-heart";

            heart.textContent =
                "❤️";


            const lifeCount =
                document.createElement("span");

            lifeCount.className =
                "survivor-life-count";

            lifeCount.textContent =
                player.lives;


            lives.appendChild(
                heart
            );

            lives.appendChild(
                lifeCount
            );


            card.appendChild(
                name
            );

            card.appendChild(
                lives
            );


            survivorsGrid.appendChild(
                card
            );

        }
    );


    survivorsSection.appendChild(
        survivorsTitle
    );

    survivorsSection.appendChild(
        survivorsGrid
    );


    container.appendChild(
        survivorsSection
    );


    // =====================================
    // HISTORIQUE DU TOUR
    // =====================================

    const historyTitle =
        document.createElement("div");

    historyTitle.className =
        "recap-history-title";

    historyTitle.textContent =
        "📝 Historique du tour";


    container.appendChild(
        historyTitle
    );


    const results =
        game.getRoundResults();


    console.log(
        "Récapitulatif du tour :",
        results
    );


    results.forEach(
        (result, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "recap-player";

            item.style.animationDelay =
                `${index * 80}ms`;


            const left =
                document.createElement(
                    "div"
                );


            // =====================================
            // QUI A JOUÉ
            // =====================================

            const name =
                document.createElement(
                    "div"
                );


            name.className =
                "recap-player-name";


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

        }
    );


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