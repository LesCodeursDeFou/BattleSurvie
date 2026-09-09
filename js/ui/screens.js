import {
    playDamageAnimation,
    playHealAnimation
} from "./animations.js";


import {
    THEMES
} from "../data/themes.js";


import {
    GAME_MODES
} from "../data/gameModes.js";


import {
    getThemeData
} from "../data/themeData.js";

// =====================================
// ÉCRANS
// =====================================

const screens = {

    setup:
        document.getElementById(
            "screenSetup"
        ),

    gameOptions:
        document.getElementById(
            "screenGameOptions"
        ),

    prologue:
        document.getElementById(
            "screenPrologue"
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


export function displayModePrologue(
    game,
    onComplete
) {

    const mode =
        GAME_MODES[
            game.gameMode
        ];


    if (
        !mode ||
        !Array.isArray(
            mode.prologue
        )
    ) {

        onComplete();

        return;

    }


    const screen =
        document.getElementById(
            "screenPrologue"
        );


    const visual =
        document.getElementById(
            "prologueVisual"
        );


    const chapter =
        document.getElementById(
            "prologueChapter"
        );


    const text =
        document.getElementById(
            "prologueText"
        );


    const skipButton =
        document.getElementById(
            "btnSkipPrologue"
        );


    const scenes =
        mode.prologue.map(
            scene => ({

                ...scene,

                text:
                    (
                        scene.text ?? ""
                    )
                    .replaceAll(
                        "{rounds}",
                        String(
                            game.maxRounds ?? ""
                        )
                    )

            })
        );


    let currentScene =
        0;

    let timeout =
        null;

    let finished =
        false;


    function finish() {

        if (
            finished
        ) {

            return;

        }


        finished =
            true;


        clearTimeout(
            timeout
        );


        screen.classList.remove(
            "prologue-final"
        );


        onComplete();

    }


    function showScene() {

        if (
            currentScene >=
            scenes.length
        ) {

            finish();

            return;

        }


        const scene =
            scenes[
                currentScene
            ];


        visual.classList.remove(
            "prologue-appear"
        );

        chapter.classList.remove(
            "prologue-appear"
        );

        text.classList.remove(
            "prologue-appear"
        );


        void text.offsetWidth;


        visual.textContent =
            scene.visual ?? "";

        chapter.textContent =
            scene.chapter ?? "";

        text.textContent =
            scene.text ?? "";


        visual.classList.add(
            "prologue-appear"
        );

        chapter.classList.add(
            "prologue-appear"
        );

        text.classList.add(
            "prologue-appear"
        );


        screen.classList.toggle(
            "prologue-final",
            Boolean(
                scene.final
            )
        );


        currentScene++;


        timeout =
            setTimeout(
                showScene,
                Number(
                    scene.duration
                ) || 2500
            );

    }


    skipButton.onclick =
        finish;


    showScreen(
        "prologue"
    );


    showScene();

}


// =====================================
// GÉNÉRATION DES THÈMES
// =====================================

export function renderThemeOptions() {

    const container =
        document.getElementById(
            "themeContainer"
        );


    if (!container) {

        console.error(
            "themeContainer introuvable"
        );

        return;

    }


    // On supprime les cartes
    // écrites en dur dans le HTML.
    container.innerHTML = "";


    Object.values(
        THEMES
    ).forEach(theme => {


        // =====================================
        // CARTE
        // =====================================

        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "theme-card";


        button.dataset.theme =
            theme.id;


        // =====================================
        // DISPONIBILITÉ
        // =====================================

        if (
            theme.available
        ) {

            button.classList.add(
                "available"
            );

        }

        else {

            button.classList.add(
                "disabled"
            );

            button.disabled =
                true;

        }


        // =====================================
        // THÈME PAR DÉFAUT
        // =====================================

        if (
            theme.id ===
            "desert_island"
        ) {

            button.classList.add(
                "active"
            );

        }


        // =====================================
        // ICÔNE
        // =====================================

        const icon =
            document.createElement(
                "div"
            );


        icon.className =
            "theme-icon";


        icon.textContent =
            theme.icon;


        // =====================================
        // TITRE
        // =====================================

        const title =
            document.createElement(
                "strong"
            );


        title.textContent =
            theme.name;


        // =====================================
        // DESCRIPTION
        // =====================================

        const description =
            document.createElement(
                "p"
            );


        description.textContent =
            theme.description;


        // =====================================
        // STATUT
        // =====================================

        const status =
            document.createElement(
                "span"
            );


        status.className =
            "option-status";


        if (
            theme.available
        ) {

            status.classList.add(
                "available"
            );

            status.textContent =
                "Disponible";

        }

        else {

            status.textContent =
                "Bientôt";

        }


        // =====================================
        // ASSEMBLAGE
        // =====================================

        button.appendChild(
            icon
        );


        button.appendChild(
            title
        );


        button.appendChild(
            description
        );


        button.appendChild(
            status
        );


        container.appendChild(
            button
        );

    });

}


// =====================================
// PROLOGUE
// =====================================

export function displayPrologue(
    game,
    onComplete
) {

    // =====================================
    // ÉLÉMENTS HTML
    // =====================================

    const screen =
        document.getElementById(
            "screenPrologue"
        );


    const visual =
        document.getElementById(
            "prologueVisual"
        );


    const chapter =
        document.getElementById(
            "prologueChapter"
        );


    const text =
        document.getElementById(
            "prologueText"
        );


    const skipButton =
        document.getElementById(
            "btnSkipPrologue"
        );


    // =====================================
    // VÉRIFICATION HTML
    // =====================================

    if (
        !screen ||
        !visual ||
        !chapter ||
        !text ||
        !skipButton
    ) {

        console.error(
            "Éléments du prologue introuvables.",
            {
                screen,
                visual,
                chapter,
                text,
                skipButton
            }
        );

        onComplete();

        return;
    }


    // =====================================
    // DONNÉES DU THÈME
    // =====================================

    const themeData =
        getThemeData(
            game.theme
        );


    if (
        !themeData ||
        !Array.isArray(
            themeData.prologue
        ) ||
        themeData.prologue.length === 0
    ) {

        console.error(
            "Aucun prologue disponible pour le thème :",
            game.theme
        );

        onComplete();

        return;
    }


    // =====================================
    // NOMS DES JOUEURS
    // =====================================

    const playerNames =
        game.players
            .map(
                player =>
                    player.name
            )
            .join("\n");


    // =====================================
    // SCÈNES DU THÈME
    // =====================================

    const scenes =
        themeData.prologue.map(
            scene => {

                return {

                    ...scene,

                    text:
                        (
                            scene.text ?? ""
                        ).replaceAll(
                            "{players}",
                            playerNames
                        )

                };

            }
        );


    // =====================================
    // ÉTAT DU PROLOGUE
    // =====================================

    let currentScene =
        0;


    let timeout =
        null;


    let finished =
        false;


    // =====================================
    // TERMINER LE PROLOGUE
    // =====================================

    function finishPrologue() {

        if (
            finished
        ) {

            return;
        }


        finished =
            true;


        if (
            timeout
        ) {

            clearTimeout(
                timeout
            );

        }


        screen.classList.remove(
            "prologue-final"
        );


        onComplete();

    }


    // =====================================
    // AFFICHER UNE SCÈNE
    // =====================================

    function showScene() {

        if (
            finished
        ) {

            return;
        }


        if (
            currentScene >=
            scenes.length
        ) {

            finishPrologue();

            return;
        }


        const scene =
            scenes[
                currentScene
            ];


        // =====================================
        // RESET ANIMATION
        // =====================================

        visual.classList.remove(
            "prologue-appear"
        );


        chapter.classList.remove(
            "prologue-appear"
        );


        text.classList.remove(
            "prologue-appear"
        );


        // Force le navigateur
        // à recalculer l'animation
        void text.offsetWidth;


        // =====================================
        // CONTENU
        // =====================================

        visual.textContent =
            scene.visual ?? "";


        chapter.textContent =
            scene.chapter ?? "";


        text.textContent =
            scene.text ?? "";


        // =====================================
        // ANIMATION
        // =====================================

        visual.classList.add(
            "prologue-appear"
        );


        chapter.classList.add(
            "prologue-appear"
        );


        text.classList.add(
            "prologue-appear"
        );


        // =====================================
        // SCÈNE FINALE
        // =====================================

        if (
            scene.final
        ) {

            screen.classList.add(
                "prologue-final"
            );

        }

        else {

            screen.classList.remove(
                "prologue-final"
            );

        }


        // =====================================
        // SCÈNE SUIVANTE
        // =====================================

        currentScene++;


        const duration =
            Number(
                scene.duration
            ) || 2800;


        timeout =
            setTimeout(
                showScene,
                duration
            );

    }


    // =====================================
    // BOUTON PASSER
    // =====================================

    skipButton.onclick =
        finishPrologue;


    // =====================================
    // LANCEMENT
    // =====================================

    screen.classList.remove(
        "prologue-final"
    );


    showScreen(
        "prologue"
    );


    console.log(
        "Prologue lancé :",
        {
            theme:
                game.theme,

            scenes:
                scenes.length
        }
    );


    showScene();

}


// =====================================
// CHANGEMENT D'ÉCRAN
// =====================================

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
        screens[
            screenName
        ];


    if (!targetScreen) {

        console.error(
            `Écran introuvable : ${screenName}`
        );

        return;

    }


    // =====================================
    // OPTIONS DE PARTIE
    // =====================================

    if (
        screenName ===
        "gameOptions"
    ) {

        renderThemeOptions();

    }


    targetScreen.classList.add(
        "active"
    );

}


// =====================================
// CRÉATION DES JOUEURS
// =====================================

export function createPlayerInputs(
    count
) {

    const container =
        document.getElementById(
            "playerNames"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        "";


    for (
        let i = 1;
        i <= count;
        i++
    ) {

        const group =
            document.createElement(
                "div"
            );


        group.className =
            "form-group";


        // =====================================
        // LABEL
        // =====================================

        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            `Nom du joueur ${i}`;


        // =====================================
        // INPUT
        // =====================================

        const input =
            document.createElement(
                "input"
            );


        input.type =
            "text";


        input.className =
            "player-name-input";


        input.name =
            `player-${i}`;


        input.autocomplete =
            "off";


        // Champ réellement vide
        input.value =
            "";


        // Nom par défaut visuel
        input.placeholder =
            `Joueur ${i}`;


        // =====================================
        // ASSEMBLAGE
        // =====================================

        group.appendChild(
            label
        );


        group.appendChild(
            input
        );


        container.appendChild(
            group
        );

    }

}


// =====================================
// RÉCUPÉRATION DES NOMS
// =====================================

export function getPlayerNames() {

    const inputs =
        document.querySelectorAll(
            ".player-name-input"
        );


    return Array.from(
        inputs
    ).map(
        (
            input,
            index
        ) => {

            const value =
                input.value.trim();


            if (
                value !== ""
            ) {

                return value;

            }


            return (
                `Joueur ${index + 1}`
            );

        }
    );

}


// =====================================
// ÉCRAN DE JEU
// =====================================

export function displayGame(
    game,
    onChoice
) {

    // =====================================
    // JOUEUR
    // =====================================

    const player =
        game.getCurrentPlayer();


    // =====================================
    // SITUATION
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

    let targetPlayer =
        null;


    if (
        situation.type ===
        "interaction" ||
        situation.type ===
        "group_vs_one"
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

    let groupPlayers =
        [];


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


    // =====================================
    // PARTICIPATION
    // =====================================

    const alreadyPlayed =
        game.currentRound
            .playedPlayerIds
            .length;


    let currentParticipants =
        1;


    if (
        situation.type ===
        "group_vs_one"
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
    // NOM
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
            situation.type ===
            "group_vs_one"
        ) {

            if (
                livesContainer
            ) {

                livesContainer.style.display =
                    "none";

            }

        }

        else {

            if (
                livesContainer
            ) {

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
    // ÉCRAN
    // =====================================

    showScreen(
        "game"
    );

}


// =====================================
// AFFICHAGE DES CHOIX
// =====================================

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


    container.innerHTML =
        "";


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


// =====================================
// CONSÉQUENCE
// =====================================

export function displayConsequence(
    data
) {

    if (!data) {

        console.error(
            "displayConsequence : aucune donnée reçue"
        );

        return;

    }


    const {
        player,
        consequence,
        effects = [],
        result
    } = data;


    if (
        !consequence ||
        !result
    ) {

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


    if (
        consequenceIcon
    ) {

        consequenceIcon.textContent =
            consequence.icon ??
            "🎲";

    }


    // =====================================
    // TEXTE
    // =====================================

    const consequenceText =
        document.getElementById(
            "consequenceText"
        );


    if (
        consequenceText
    ) {

        consequenceText.textContent =
            result.consequenceText ??
            consequence.text ??
            "";

    }


    // =====================================
    // CHANGEMENTS DE VIE
    // =====================================

    const lifeChange =
        document.getElementById(
            "lifeChange"
        );


    if (
        lifeChange
    ) {

        lifeChange.innerHTML =
            "";


        if (
            Array.isArray(
                effects
            ) &&
            effects.length > 0
        ) {

            effects.forEach(
                effect => {

                    const line =
                        document.createElement(
                            "div"
                        );


                    if (
                        effect.difference > 0
                    ) {

                        line.textContent =
                            `${effect.playerName} : +${effect.difference} ❤️`;

                    }

                    else if (
                        effect.difference < 0
                    ) {

                        line.textContent =
                            `${effect.playerName} : ${effect.difference} 💔`;

                    }

                    else {

                        line.textContent =
                            `${effect.playerName} : aucun changement`;

                    }


                    lifeChange.appendChild(
                        line
                    );

                }
            );

        }

        else {

            lifeChange.textContent =
                "Aucune vie perdue";

        }

    }


    // =====================================
    // VIES RESTANTES
    // =====================================

    const newLifeCount =
        document.getElementById(
            "newLifeCount"
        );


    if (
        newLifeCount
    ) {

        newLifeCount.innerHTML =
            "";


        const affectedPlayers =
            [];


        effects.forEach(
            effect => {

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

            }
        );


        if (
            affectedPlayers.length > 0
        ) {

            affectedPlayers.forEach(
                effect => {

                    const line =
                        document.createElement(
                            "div"
                        );


                    line.className =
                        "life-result-line";


                    line.textContent =
                        `${effect.playerName} : ❤️ ${effect.livesAfter} vies restantes`;


                    newLifeCount.appendChild(
                        line
                    );

                }
            );

        }

        else if (
            player
        ) {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "life-result-line";


            line.textContent =
                `${player.name} : ❤️ ${player.lives} vies restantes`;


            newLifeCount.appendChild(
                line
            );

        }

    }


    showScreen(
        "consequence"
    );

}


// =====================================
// RÉCAPITULATIF
// =====================================

export function displayRecap(
    game
) {

    document.getElementById(
        "recapTitle"
    ).textContent =
        `📊 Récapitulatif — Tour ${game.roundNumber}`;


    const container =
        document.getElementById(
            "recapContainer"
        );


    container.innerHTML =
        "";


    // =====================================
    // SURVIVANTS
    // =====================================

    const survivorsSection =
        document.createElement(
            "div"
        );


    survivorsSection.className =
        "survivors-section";


    const survivorsTitle =
        document.createElement(
            "div"
        );


    survivorsTitle.className =
        "survivors-title";


    survivorsTitle.textContent =
        "❤️ État des survivants";


    const survivorsGrid =
        document.createElement(
            "div"
        );


    survivorsGrid.className =
        "survivors-grid";


    const alivePlayers =
        game.players.filter(
            player =>
                player.alive
        );


    alivePlayers.forEach(
        (
            player,
            index
        ) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "survivor-card";


            card.style.animationDelay =
                `${index * 90}ms`;


            const name =
                document.createElement(
                    "div"
                );


            name.className =
                "survivor-name";


            name.textContent =
                player.name;


            const lives =
                document.createElement(
                    "div"
                );


            lives.className =
                "survivor-lives";


            const heart =
                document.createElement(
                    "span"
                );


            heart.className =
                "survivor-heart";


            heart.textContent =
                "❤️";


            const lifeCount =
                document.createElement(
                    "span"
                );


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
    // HISTORIQUE
    // =====================================

    const historyTitle =
        document.createElement(
            "div"
        );


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
        (
            result,
            index
        ) => {

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
                result.situationType ===
                "group_vs_one" &&

                Array.isArray(
                    result.playedPlayerNames
                ) &&

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
                result.choiceTitle;


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
                Array.isArray(
                    result.effects
                ) &&
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


                        let sign =
                            "";


                        if (
                            effect.difference > 0
                        ) {

                            sign =
                                "+";

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


// =====================================
// FIN DE PARTIE
// =====================================

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
    // QUESTIONS ÉPUISÉES
    // =====================================

    if (
        game.areQuestionsExhausted()
    ) {

        text.textContent =
            `Toutes les ${game.getUsedSituationCount()} situations ont été jouées. La survie est terminée !`;

    }


    // =====================================
    // SOLO
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


    container.innerHTML =
        "";


    ranking.forEach(
        (
            player,
            index
        ) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "ranking-player";


            if (
                index === 0
            ) {

                item.classList.add(
                    "winner"
                );

            }


            const position =
                document.createElement(
                    "span"
                );


            let medal =
                "";


            if (
                index === 0
            ) {

                medal =
                    "🥇 ";

            }

            else if (
                index === 1
            ) {

                medal =
                    "🥈 ";

            }

            else if (
                index === 2
            ) {

                medal =
                    "🥉 ";

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