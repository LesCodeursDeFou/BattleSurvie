import {
    THEMES
} from "../data/themes.js";


import {
    GAME_MODES
} from "../data/gameModes.js";


import {
    getThemeData
} from "../data/themeData.js";


// =====================================================
// TIMER DES CHOIX
// =====================================================

let activeChoiceTimer =
    null;


// =====================================================
// ÉCRANS
// =====================================================

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

    secretHandoff:
        document.getElementById(
            "screenSecretHandoff"
        ),

    secretGuess:
        document.getElementById(
            "screenSecretGuess"
        ),

    consequence:
        document.getElementById(
            "screenConsequence"
        ),

    effects:
        document.getElementById(
            "screenEffects"
        ),

    recap:
        document.getElementById(
            "screenRecap"
        ),

    gameOver:
        document.getElementById(
            "screenGameOver"
        ),

    secretIntro:
        document.getElementById(
            "screenSecretIntro"
        )

};


// =====================================================
// SECRET CHOICE : INTRO
// =====================================================

export function displaySecretIntro(
    game,
    onReady
) {

    const player =
        game.getCurrentPlayer();


    const title =
        document.getElementById(
            "secretIntroTitle"
        );


    const text =
        document.getElementById(
            "secretIntroText"
        );


    const button =
        document.getElementById(
            "btnSecretStart"
        );


    if (
        !player ||
        !title ||
        !text ||
        !button
    ) {

        console.error(
            "Écran secretIntro incomplet."
        );

        return;

    }


    title.textContent =
        `${player.name}, garde ton choix pour toi`;


    text.textContent =
        "Les autres joueurs ne doivent pas regarder l'écran pendant ta décision.";


    button.onclick =
        onReady;


    showScreen(
        "secretIntro"
    );

}


// =====================================================
// PROLOGUE DU MODE
// =====================================================

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
        ) ||
        mode.prologue.length ===
            0
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


    if (
        !screen ||
        !visual ||
        !chapter ||
        !text ||
        !skipButton
    ) {

        onComplete();

        return;

    }


    const scenes =
        mode.prologue.map(
            scene => ({

                ...scene,

                text:
                    (
                        scene.text ??
                        ""
                    )
                    .replaceAll(
                        "{rounds}",
                        String(
                            game.maxRounds ??
                            ""
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
            scene.visual ??
            "";

        chapter.textContent =
            scene.chapter ??
            "";

        text.textContent =
            scene.text ??
            "";


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
                ) ||
                2500
            );

    }


    skipButton.onclick =
        finish;


    showScreen(
        "prologue"
    );


    showScene();

}


// =====================================================
// GÉNÉRATION DES THÈMES
// =====================================================

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


    container.innerHTML =
        "";


    Object.values(
        THEMES
    ).forEach(
        theme => {

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


            if (
                theme.id ===
                "desert_island"
            ) {

                button.classList.add(
                    "active"
                );

            }


            const icon =
                document.createElement(
                    "div"
                );


            icon.className =
                "theme-icon";


            icon.textContent =
                theme.icon;


            const title =
                document.createElement(
                    "strong"
                );


            title.textContent =
                theme.name;


            const description =
                document.createElement(
                    "p"
                );


            description.textContent =
                theme.description;


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

        }
    );

}


// =====================================================
// PROLOGUE DU THÈME
// =====================================================

export function displayPrologue(
    game,
    onComplete
) {

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


    if (
        !screen ||
        !visual ||
        !chapter ||
        !text ||
        !skipButton
    ) {

        console.error(
            "Éléments du prologue introuvables."
        );

        onComplete();

        return;

    }


    const themeData =
        getThemeData(
            game.theme
        );


    if (
        !themeData ||
        !Array.isArray(
            themeData.prologue
        ) ||
        themeData.prologue.length ===
            0
    ) {

        console.error(
            "Aucun prologue disponible pour :",
            game.theme
        );

        onComplete();

        return;

    }


    const playerNames =
        game.players
            .map(
                player =>
                    player.name
            )
            .join(
                "\n"
            );


    const scenes =
        themeData.prologue.map(
            scene => ({

                ...scene,

                text:
                    (
                        scene.text ??
                        ""
                    ).replaceAll(
                        "{players}",
                        playerNames
                    )

            })
        );


    let currentScene =
        0;

    let timeout =
        null;

    let finished =
        false;


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
            scene.visual ??
            "";

        chapter.textContent =
            scene.chapter ??
            "";

        text.textContent =
            scene.text ??
            "";


        visual.classList.add(
            "prologue-appear"
        );

        chapter.classList.add(
            "prologue-appear"
        );

        text.classList.add(
            "prologue-appear"
        );


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


        currentScene++;


        timeout =
            setTimeout(
                showScene,
                Number(
                    scene.duration
                ) ||
                2800
            );

    }


    skipButton.onclick =
        finishPrologue;


    screen.classList.remove(
        "prologue-final"
    );


    showScreen(
        "prologue"
    );


    showScene();

}


// =====================================================
// CHANGEMENT D'ÉCRAN
// =====================================================

export function showScreen(
    screenName
) {

    if (
        screenName !==
            "game" &&
        activeChoiceTimer
    ) {

        clearInterval(
            activeChoiceTimer
        );

        activeChoiceTimer =
            null;

    }


    Object.values(
        screens
    ).forEach(
        screen => {

            if (
                screen
            ) {

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


    if (
        !targetScreen
    ) {

        console.error(
            `Écran introuvable : ${screenName}`
        );

        return;

    }


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


// =====================================================
// CRÉATION DES JOUEURS
// =====================================================

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


        const label =
            document.createElement(
                "label"
            );


        label.textContent =
            `Nom du joueur ${i}`;


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


        input.value =
            "";


        input.placeholder =
            `Joueur ${i}`;


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


// =====================================================
// RÉCUPÉRATION DES NOMS
// =====================================================

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
                value !==
                ""
            ) {

                return value;

            }


            return (
                `Joueur ${index + 1}`
            );

        }
    );

}


// =====================================================
// BADGES D'ÉTAT DU JOUEUR
// =====================================================

function displayPlayerStatusBadges(
    game,
    player
) {

    const container =
        document.getElementById(
            "playerStatusBadges"
        );


    if (
        !container
    ) {

        return;

    }


    container.innerHTML =
        "";


    if (
        !player
    ) {

        return;

    }


    // =================================================
    // ÉTATS ACTIFS
    // =================================================

    if (
        Array.isArray(
            player.statuses
        )
    ) {

        player.statuses.forEach(
            status => {

                const definition =
                    game.statusManager
                        ?.getDefinition(
                            status.id
                        );


                if (
                    !definition
                ) {

                    return;

                }


                const badge =
                    document.createElement(
                        "button"
                    );


                badge.type =
                    "button";


                badge.className =
                    "status-badge";


                badge.textContent =
                    definition.icon;


                let details =
                    `${definition.name}\n${definition.description}`;


                if (
                    typeof status
                        .turnsRemaining ===
                    "number"
                ) {

                    details +=
                        `\nEncore ${status.turnsRemaining} tour(s)`;

                }

                else if (
                    definition
                        .permanentUntilRemoved
                ) {

                    details +=
                        "\nDurée : jusqu'à dissipation";

                }


                badge.title =
                    details;


                badge.setAttribute(
                    "aria-label",
                    definition.name
                );


                badge.addEventListener(
                    "click",
                    () => {

                        alert(
                            details
                        );

                    }
                );


                container.appendChild(
                    badge
                );

            }
        );

    }


    // =================================================
    // FATIGUE — ÎLE DÉSERTE
    // =================================================

    if (
        game.theme ===
        "desert_island"
    ) {

        const level =
            player.getGauge(
                "fatigue"
            );


        const badge =
            document.createElement(
                "button"
            );


        badge.type =
            "button";


        badge.className =
            "status-badge gauge-badge";


        badge.textContent =
            `🥱 ${level}/3`;


        badge.title =
            game.statusManager
                .getGaugeLabel(
                    "fatigue",
                    level
                );


        badge.addEventListener(
            "click",
            () => {

                alert(
                    `Fatigue : ${
                        game.statusManager
                            .getGaugeLabel(
                                "fatigue",
                                level
                            )
                    }\nNiveau : ${level}/3`
                );

            }
        );


        container.appendChild(
            badge
        );

    }


    // =================================================
    // PEUR — MANOIR HANTÉ
    // =================================================

    if (
        game.theme ===
        "haunted_mansion"
    ) {

        const level =
            player.getGauge(
                "fear"
            );


        const badge =
            document.createElement(
                "button"
            );


        badge.type =
            "button";


        badge.className =
            "status-badge gauge-badge";


        badge.textContent =
            `😰 ${level}/3`;


        badge.title =
            game.statusManager
                .getGaugeLabel(
                    "fear",
                    level
                );


        badge.addEventListener(
            "click",
            () => {

                alert(
                    `Peur : ${
                        game.statusManager
                            .getGaugeLabel(
                                "fear",
                                level
                            )
                    }\nNiveau : ${level}/3`
                );

            }
        );


        container.appendChild(
            badge
        );

    }

}


// =====================================================
// INFO : QUI PREND LA DÉCISION ?
// =====================================================

function displayDecisionPlayerInfo(
    game,
    player
) {

    const container =
        document.getElementById(
            "decisionPlayerInfo"
        );


    if (
        !container
    ) {

        return;

    }


    container.textContent =
        "";


    container.classList.remove(
        "active"
    );


    if (
        !player
    ) {

        return;

    }


    const decisionPlayer =
        game.getDecisionPlayer(
            player
        );


    if (
        !decisionPlayer ||
        decisionPlayer.id ===
            player.id
    ) {

        return;

    }


    container.textContent =
        `👿 ${decisionPlayer.name} prend la décision à la place de ${player.name}`;


    container.classList.add(
        "active"
    );

}


// =====================================================
// ÉCRAN DE JEU
// =====================================================

export function displayGame(
    game,
    onChoice
) {

    if (
        activeChoiceTimer
    ) {

        clearInterval(
            activeChoiceTimer
        );

        activeChoiceTimer =
            null;

    }


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


    // =================================================
    // CIBLE
    // =================================================

    let targetPlayer =
        null;


    if (
        situation.type ===
            "interaction" ||
        situation.type ===
            "group_vs_one"
    ) {

        targetPlayer =
            game.getSituationTargetPlayer(
                situation
            );

    }


    // =================================================
    // GROUPE
    // =================================================

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

    else if (
        situation.type ===
        "judge_choice"
    ) {

        groupPlayers =
            game.getOtherAlivePlayers(
                player
            );

    }


    // =================================================
    // TOUR
    // =================================================

    const roundNumber =
        document.getElementById(
            "roundNumber"
        );


    if (
        roundNumber
    ) {

        roundNumber.textContent =
            game.roundNumber;

    }


    // =================================================
    // PARTICIPATION
    // =================================================

    const alreadyPlayed =
        game.currentRound
            ?.playedPlayerIds
            ?.length ??
        0;


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


    const playerPosition =
        document.getElementById(
            "playerPosition"
        );


    if (
        playerPosition
    ) {

        playerPosition.textContent =
            `${participatedCount} / ${game.players.length}`;

    }


    // =================================================
    // NOM DU JOUEUR / GROUPE
    // =================================================

    const currentPlayerName =
        document.getElementById(
            "currentPlayerName"
        );


    if (
        currentPlayerName
    ) {

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

    }


    // =================================================
    // BADGES + POSSESSION
    // =================================================

    if (
        situation.type ===
        "group_vs_one"
    ) {

        const badges =
            document.getElementById(
                "playerStatusBadges"
            );


        const decisionInfo =
            document.getElementById(
                "decisionPlayerInfo"
            );


        if (
            badges
        ) {

            badges.innerHTML =
                "";

        }


        if (
            decisionInfo
        ) {

            decisionInfo.textContent =
                "";

            decisionInfo.classList.remove(
                "active"
            );

        }

    }

    else {

        displayPlayerStatusBadges(
            game,
            player
        );


        displayDecisionPlayerInfo(
            game,
            player
        );

    }


    // =================================================
    // VIES
    // =================================================

    const livesElement =
        document.getElementById(
            "currentPlayerLives"
        );


    if (
        livesElement
    ) {

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


    // =================================================
    // SITUATION
    // =================================================

    const situationIcon =
        document.getElementById(
            "situationIcon"
        );


    if (
        situationIcon
    ) {

        situationIcon.textContent =
            situation.icon ??
            "🎲";

    }


    const situationCategory =
        document.getElementById(
            "situationCategory"
        );


    if (
        situationCategory
    ) {

        situationCategory.textContent =
            situation.category ??
            "Situation";

    }


    const situationTitle =
        document.getElementById(
            "situationTitle"
        );


    if (
        situationTitle
    ) {

        situationTitle.textContent =
            game.renderPlayerText(
                situation.title,
                player,
                targetPlayer,
                groupPlayers
            );

    }


    const situationDescription =
        document.getElementById(
            "situationDescription"
        );


    if (
        situationDescription
    ) {

        situationDescription.textContent =
            game.renderPlayerText(
                situation.description,
                player,
                targetPlayer,
                groupPlayers
            );

    }


    // =================================================
    // CHOIX CONDITIONNELS
    // =================================================

    const availableChoices =
        game.getAvailableChoices(
            situation,
            player,
            targetPlayer
        );


    displayChoices(
        availableChoices,
        onChoice,
        game,
        player,
        targetPlayer,
        groupPlayers
    );


    showScreen(
        "game"
    );


    startPanicTimerIfNeeded(
        game,
        player,
        availableChoices,
        onChoice
    );

}


// =====================================================
// AFFICHAGE DES CHOIX
// =====================================================

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


    if (
        !container
    ) {

        console.error(
            "choicesContainer introuvable."
        );

        return;

    }


    container.innerHTML =
        "";


    if (
        !Array.isArray(
            choices
        ) ||
        choices.length ===
            0
    ) {

        const message =
            document.createElement(
                "p"
            );


        message.textContent =
            "Aucun choix n'est actuellement disponible.";


        container.appendChild(
            message
        );


        return;

    }


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


            const description =
                document.createElement(
                    "span"
                );


            description.textContent =
                game.renderPlayerText(
                    choice.description ??
                        "",
                    actorPlayer,
                    targetPlayer,
                    groupPlayers
                );


            button.appendChild(
                title
            );


            if (
                description.textContent !==
                ""
            ) {

                button.appendChild(
                    description
                );

            }


            // =================================================
            // LUCIDITÉ
            // =================================================

            if (
                actorPlayer
                    ?.hasStatus(
                        "lucid"
                    ) &&
                Array.isArray(
                    choice.consequences
                ) &&
                choice.consequences.length >
                    0
            ) {

                const possible =
                    choice.consequences[
                        Math.floor(
                            Math.random() *
                            choice.consequences.length
                        )
                    ];


                const hint =
                    document.createElement(
                        "small"
                    );


                hint.className =
                    "lucidity-hint";


                hint.textContent =
                    `👁️ Vision possible : ${
                        possible.icon ??
                        "?"
                    } ${
                        game.renderPlayerText(
                            possible.text ??
                                "",
                            actorPlayer,
                            targetPlayer,
                            groupPlayers
                        )
                    }`;


                button.appendChild(
                    hint
                );

            }


            button.addEventListener(
                "click",
                () => {

                    if (
                        activeChoiceTimer
                    ) {

                        clearInterval(
                            activeChoiceTimer
                        );

                        activeChoiceTimer =
                            null;

                    }


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


// =====================================================
// TIMER PANIQUE
// =====================================================

function startPanicTimerIfNeeded(
    game,
    player,
    availableChoices,
    onChoice
) {

    const timerElement =
        document.getElementById(
            "panicTimer"
        );


    if (
        !timerElement
    ) {

        return;

    }


    timerElement.classList.add(
        "hidden"
    );


    timerElement.textContent =
        "";


    if (
        !player ||
        !player.hasStatus(
            "panic"
        )
    ) {

        return;

    }


    if (
        !Array.isArray(
            availableChoices
        ) ||
        availableChoices.length ===
            0
    ) {

        return;

    }


    const panicStatus =
        player.getStatus(
            "panic"
        );


    const panicDefinition =
        game.statusManager
            ?.getDefinition(
                "panic"
            );


    let seconds =
        Number(
            panicDefinition
                ?.timedChoice ??
            panicStatus
                ?.metadata
                ?.timedChoice ??
            5
        );


    if (
        !Number.isFinite(
            seconds
        ) ||
        seconds <= 0
    ) {

        seconds =
            5;

    }


    timerElement.classList.remove(
        "hidden"
    );


    timerElement.textContent =
        `😱 Panique : ${seconds}s`;


    activeChoiceTimer =
        setInterval(
            () => {

                seconds--;


                timerElement.textContent =
                    `😱 Panique : ${Math.max(seconds, 0)}s`;


                if (
                    seconds <=
                    0
                ) {

                    clearInterval(
                        activeChoiceTimer
                    );


                    activeChoiceTimer =
                        null;


                    timerElement.classList.add(
                        "hidden"
                    );


                    const randomChoice =
                        availableChoices[
                            Math.floor(
                                Math.random() *
                                availableChoices.length
                            )
                        ];


                    if (
                        randomChoice
                    ) {

                        onChoice(
                            randomChoice.id
                        );

                    }

                }

            },
            1000
        );

}


// =====================================================
// SECRET CHOICE : PASSAGE DU TÉLÉPHONE
// =====================================================

export function displaySecretHandoff(
    data,
    onReady
) {

    const text =
        document.getElementById(
            "secretHandoffText"
        );


    const button =
        document.getElementById(
            "btnSecretReady"
        );


    if (
        !text ||
        !button
    ) {

        console.error(
            "Écran SecretHandoff incomplet."
        );

        return;

    }


    const otherPlayers =
        data.otherPlayers ??
        [];


    const names =
        otherPlayers.map(
            player =>
                player.name
        );


    let groupText =
        "aux autres joueurs";


    if (
        names.length ===
        1
    ) {

        groupText =
            `à ${names[0]}`;

    }

    else if (
        names.length ===
        2
    ) {

        groupText =
            `à ${names[0]} et ${names[1]}`;

    }

    else if (
        names.length >
        2
    ) {

        groupText =
            `à ${
                names
                    .slice(
                        0,
                        -1
                    )
                    .join(
                        ", "
                    )
            } et ${
                names[
                    names.length -
                    1
                ]
            }`;

    }


    text.textContent =
        `Passe maintenant le téléphone ${groupText}.`;


    button.onclick =
        onReady;


    showScreen(
        "secretHandoff"
    );

}


// =====================================================
// SECRET CHOICE : DEVINETTE
// =====================================================

export function displaySecretGuess(
    game,
    data,
    onGuess
) {

    if (
        !game ||
        !data ||
        !data.situation
    ) {

        console.error(
            "displaySecretGuess : données invalides",
            data
        );

        return;

    }


    const {
        player,
        situation,
        otherPlayers = []
    } = data;


    const icon =
        document.getElementById(
            "secretGuessIcon"
        );


    const title =
        document.getElementById(
            "secretGuessTitle"
        );


    const description =
        document.getElementById(
            "secretGuessDescription"
        );


    const container =
        document.getElementById(
            "secretGuessChoices"
        );


    if (
        !icon ||
        !title ||
        !description ||
        !container
    ) {

        console.error(
            "Écran SecretGuess incomplet."
        );

        return;

    }


    icon.textContent =
        "🕵️";


    title.textContent =
        game.renderPlayerText(
            situation.guess?.title ??
                `Qu'a choisi ${player.name} ?`,
            player,
            null,
            otherPlayers
        );


    description.textContent =
        game.renderPlayerText(
            situation.guess
                ?.description ??
                "À vous de deviner.",
            player,
            null,
            otherPlayers
        );


    container.innerHTML =
        "";


    const guesses =
        situation.guess
            ?.choices ??
        [];


    guesses.forEach(
        guess => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "choice-button";


            const buttonTitle =
                document.createElement(
                    "strong"
                );


            buttonTitle.textContent =
                game.renderPlayerText(
                    guess.title,
                    player,
                    null,
                    otherPlayers
                );


            const buttonDescription =
                document.createElement(
                    "span"
                );


            buttonDescription.textContent =
                game.renderPlayerText(
                    guess.description ??
                        "",
                    player,
                    null,
                    otherPlayers
                );


            button.appendChild(
                buttonTitle
            );


            if (
                buttonDescription.textContent !==
                ""
            ) {

                button.appendChild(
                    buttonDescription
                );

            }


            button.addEventListener(
                "click",
                () => {

                    onGuess(
                        guess.id
                    );

                }
            );


            container.appendChild(
                button
            );

        }
    );


    showScreen(
        "secretGuess"
    );

}


// =====================================================
// CONSÉQUENCE
// =====================================================

export function displayConsequence(
    data
) {

    if (
        !data
    ) {

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


    // =================================================
    // ICÔNE
    // =================================================

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


    // =================================================
    // TEXTE
    // =================================================

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


    // =================================================
    // CHANGEMENTS DE VIES
    // =================================================

    const lifeChange =
        document.getElementById(
            "lifeChange"
        );


    if (
        lifeChange
    ) {

        lifeChange.innerHTML =
            "";


        const lifeEffects =
            effects.filter(
                effect =>
                    typeof effect
                        ?.difference ===
                    "number"
            );


        if (
            lifeEffects.length >
            0
        ) {

            lifeEffects.forEach(
                effect => {

                    const line =
                        document.createElement(
                            "div"
                        );


                    if (
                        effect.difference >
                        0
                    ) {

                        line.textContent =
                            `${effect.playerName} : +${effect.difference} ❤️`;

                    }

                    else if (
                        effect.difference <
                        0
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


    // =================================================
    // VIES RESTANTES
    // =================================================

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


        effects
            .filter(
                effect =>
                    typeof effect
                        ?.difference ===
                    "number"
            )
            .forEach(
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
            affectedPlayers.length >
            0
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


    // =================================================
    // NOUVEAUX ÉTATS / JAUGES / RELATIONS
    // =================================================

    displayConsequenceStateChanges(
        data.stateEvents ??
        result.stateEvents ??
        [],
        data
    );


    showScreen(
        "consequence"
    );

}


// =====================================================
// RÉCUPÉRER LE NOM DU JOUEUR D'UN ÉVÉNEMENT
// =====================================================

function getEventPlayerName(
    event,
    context = {}
) {

    // =================================================
    // FORMAT DIRECT
    // =================================================

    if (
        event?.playerName
    ) {

        return event.playerName;

    }


    // =================================================
    // OBJET PLAYER DIRECT
    // =================================================

    if (
        event?.player?.name
    ) {

        return event.player.name;

    }


    // =================================================
    // PAS D'ID = IMPOSSIBLE DE RETROUVER LE JOUEUR
    // =================================================

    if (
        !event?.playerId
    ) {

        return "";

    }


    // =================================================
    // RECHERCHE DANS LES JOUEURS CONNUS DU CONTEXTE
    // =================================================

    const knownPlayers =
        [
            context.player,
            context.targetPlayer,

            ...(
                Array.isArray(
                    context.groupPlayers
                )
                    ? context.groupPlayers
                    : []
            ),

            ...(
                Array.isArray(
                    context.players
                )
                    ? context.players
                    : []
            )
        ]
        .filter(
            Boolean
        );


    const matchingPlayer =
        knownPlayers.find(
            player =>
                player.id ===
                event.playerId
        );


    return (
        matchingPlayer?.name ??
        ""
    );

}


// =====================================================
// ÉVÉNEMENTS LIÉS À LA CONSÉQUENCE
// =====================================================

function displayConsequenceStateChanges(
    events,
    context = {}
) {

    const container =
        document.getElementById(
            "consequenceStateChanges"
        );


    if (
        !container
    ) {

        return;

    }


    container.innerHTML =
        "";


    if (
        !Array.isArray(
            events
        ) ||
        events.length ===
            0
    ) {

        return;

    }


    events.forEach(
        event => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "consequence-state-line";


            const playerName =
                getEventPlayerName(
                    event,
                    context
                );


            const icon =
                event.icon ??
                "✨";


            const title =
                event.title ??
                "";


            // =================================================
            // AVEC NOM DU JOUEUR
            //
            // Exemple :
            // Nico — 😥 Très fatigué
            // =================================================

            if (
                playerName
            ) {

                line.textContent =
                    `${playerName} — ${icon} ${title}`;

            }


            // =================================================
            // ANCIEN FORMAT
            //
            // Certains événements ont le nom du joueur
            // directement dans event.text.
            // =================================================

            else if (
                event.text
            ) {

                line.textContent =
                    `${icon} ${event.text}`;

            }


            // =================================================
            // FALLBACK
            // =================================================

            else {

                line.textContent =
                    `${icon} ${title}`;

            }


            if (
                event.text
            ) {

                line.title =
                    event.text;

            }


            container.appendChild(
                line
            );

        }
    );

}


// =====================================================
// ÉCRAN D'ÉVOLUTION APRÈS LE TOUR
// =====================================================

export function displayEffectUpdates(
    events,
    onContinue
) {

    if (
        !Array.isArray(
            events
        ) ||
        events.length ===
            0
    ) {

        if (
            typeof onContinue ===
            "function"
        ) {

            onContinue();

        }


        return;

    }


    const icon =
        document.getElementById(
            "effectUpdateIcon"
        );


    const title =
        document.getElementById(
            "effectUpdateTitle"
        );


    const container =
        document.getElementById(
            "effectUpdateList"
        );


    const button =
        document.getElementById(
            "btnEffectContinue"
        );


    if (
        !icon ||
        !title ||
        !container ||
        !button
    ) {

        console.error(
            "Écran screenEffects incomplet."
        );


        if (
            typeof onContinue ===
            "function"
        ) {

            onContinue();

        }


        return;

    }


    icon.textContent =
        events[0].icon ??
        "✨";


    title.textContent =
        events.length ===
        1
            ? (
                events[0].title ??
                "Évolution"
            )
            : "Plusieurs choses évoluent";


    container.innerHTML =
        "";


    events.forEach(
        (
            event,
            index
        ) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "effect-update-item";


            item.style.animationDelay =
                `${index * 90}ms`;


            const itemIcon =
                document.createElement(
                    "span"
                );


            itemIcon.className =
                "effect-update-item-icon";


            itemIcon.textContent =
                event.icon ??
                "✨";


            const content =
                document.createElement(
                    "div"
                );


            const itemTitle =
                document.createElement(
                    "strong"
                );


            const eventPlayerName =
                getEventPlayerName(
                    event
                );


            itemTitle.textContent =
                eventPlayerName
                    ? `${eventPlayerName} — ${event.title ?? "Évolution"}`
                    : (
                        event.title ??
                        "Évolution"
                    );


            const itemText =
                document.createElement(
                    "p"
                );


            itemText.textContent =
                event.text ??
                "";


            content.appendChild(
                itemTitle
            );


            if (
                itemText.textContent !==
                ""
            ) {

                content.appendChild(
                    itemText
                );

            }


            item.appendChild(
                itemIcon
            );


            item.appendChild(
                content
            );


            container.appendChild(
                item
            );

        }
    );


    button.onclick =
        () => {

            if (
                typeof onContinue ===
                "function"
            ) {

                onContinue();

            }

        };


    showScreen(
        "effects"
    );

}


// =====================================================
// RÉCAPITULATIF
// =====================================================

export function displayRecap(
    game
) {

    const recapTitle =
        document.getElementById(
            "recapTitle"
        );


    if (
        recapTitle
    ) {

        recapTitle.textContent =
            `📊 Récapitulatif — Tour ${game.roundNumber}`;

    }


    const container =
        document.getElementById(
            "recapContainer"
        );


    if (
        !container
    ) {

        return;

    }


    container.innerHTML =
        "";


    // =================================================
    // ÉTAT DES JOUEURS
    // =================================================

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
        game.gameMode ===
            "survival_party"
            ? "❤️ État des joueurs"
            : "❤️ État des survivants";


    const survivorsGrid =
        document.createElement(
            "div"
        );


    survivorsGrid.className =
        "survivors-grid";


    const visiblePlayers =
        game.gameMode ===
            "survival_party"
            ? game.players
            : game.players.filter(
                player =>
                    player.alive
            );


    visiblePlayers.forEach(
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


            // =============================================
            // PETIT RÉSUMÉ DES ÉTATS
            // =============================================

            const statuses =
                document.createElement(
                    "div"
                );


            statuses.className =
                "recap-statuses";


            if (
                Array.isArray(
                    player.statuses
                )
            ) {

                player.statuses.forEach(
                    status => {

                        const definition =
                            game.statusManager
                                ?.getDefinition(
                                    status.id
                                );


                        if (
                            definition
                        ) {

                            const icon =
                                document.createElement(
                                    "span"
                                );


                            icon.textContent =
                                definition.icon;


                            icon.title =
                                definition.name;


                            statuses.appendChild(
                                icon
                            );

                        }

                    }
                );

            }


            if (
                statuses.children.length >
                0
            ) {

                card.appendChild(
                    statuses
                );

            }


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


    // =================================================
    // HISTORIQUE
    // =================================================

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
                result.playedPlayerNames.length >
                    0
            ) {

                name.textContent =
                    result.playedPlayerNames
                        .join(
                            ", "
                        );

            }

            else {

                name.textContent =
                    result.playerName;

            }


            const situation =
                document.createElement(
                    "div"
                );


            situation.className =
                "recap-situation";


            situation.textContent =
                `${result.situationIcon ?? "🎲"} ${result.situationTitle ?? ""}`;


            const choice =
                document.createElement(
                    "div"
                );


            choice.className =
                "recap-choice";


            choice.textContent =
                result.choiceTitle ??
                "";


            left.appendChild(
                name
            );


            left.appendChild(
                situation
            );


            left.appendChild(
                choice
            );


            // =============================================
            // VIES
            // =============================================

            if (
                Array.isArray(
                    result.effects
                )
            ) {

                const lifeEffects =
                    result.effects.filter(
                        effect =>
                            typeof effect
                                ?.difference ===
                            "number" &&
                            effect.difference !==
                            0
                    );


                if (
                    lifeEffects.length >
                    0
                ) {

                    const effectsContainer =
                        document.createElement(
                            "div"
                        );


                    effectsContainer.className =
                        "recap-effects";


                    lifeEffects.forEach(
                        effect => {

                            const effectLine =
                                document.createElement(
                                    "div"
                                );


                            const sign =
                                effect.difference >
                                    0
                                    ? "+"
                                    : "";


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

            }


            // =============================================
            // ÉTATS / RELATIONS
            // =============================================

            if (
                Array.isArray(
                    result.stateEvents
                ) &&
                result.stateEvents.length >
                    0
            ) {

                const eventsContainer =
                    document.createElement(
                        "div"
                    );


                eventsContainer.className =
                    "recap-state-events";


                result.stateEvents.forEach(
                    event => {

                        const line =
                            document.createElement(
                                "div"
                            );


                        const eventPlayerName =
                            getEventPlayerName(
                                event
                            );


                        line.textContent =
                            eventPlayerName
                                ? `${eventPlayerName} — ${event.icon ?? "✨"} ${event.title ?? ""}`
                                : (
                                    event.text
                                        ? `${event.icon ?? "✨"} ${event.text}`
                                        : `${event.icon ?? "✨"} ${event.title ?? ""}`
                                );


                        eventsContainer.appendChild(
                            line
                        );

                    }
                );


                left.appendChild(
                    eventsContainer
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


// =====================================================
// FIN DE PARTIE
// =====================================================

export function displayGameOver(
    game
) {

    const text =
        document.getElementById(
            "gameOverText"
        );


    const alivePlayers =
        game.getAlivePlayers();


    if (
        text
    ) {

        if (
            game.gameMode ===
            "survival_party"
        ) {

            text.textContent =
                `Les ${game.maxRounds} tours sont terminés. Voici le classement final !`;

        }

        else if (
            game.areQuestionsExhausted()
        ) {

            text.textContent =
                `La réserve de situations ne permet plus de lancer un tour complet. La survie est terminée !`;

        }

        else if (
            game.players.length ===
            1
        ) {

            text.textContent =
                `${game.players[0].name} a survécu ${game.roundNumber} tour(s).`;

        }

        else if (
            alivePlayers.length ===
            1
        ) {

            text.textContent =
                `${alivePlayers[0].name} est le dernier survivant !`;

        }

        else {

            text.textContent =
                "La partie est terminée.";

        }

    }


    const ranking =
        game.getRanking();


    const container =
        document.getElementById(
            "finalRanking"
        );


    if (
        !container
    ) {

        return;

    }


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
                index ===
                0
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
                index ===
                0
            ) {

                medal =
                    "🥇 ";

            }

            else if (
                index ===
                1
            ) {

                medal =
                    "🥈 ";

            }

            else if (
                index ===
                2
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