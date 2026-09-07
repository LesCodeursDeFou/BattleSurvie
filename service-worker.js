const CACHE_NAME = "battlesurvie-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",

    "./css/style.css",
    "./css/animations.css",
    "./css/mobile.css",

    "./js/main.js",

    "./js/game/game.js",
    "./js/game/player.js",
    "./js/game/round.js",
    "./js/game/effects.js",

    "./js/data/situations.js",
    "./js/data/interactionSituations.js",
    "./js/data/groupSituations.js",
    "./js/data/events.js",
    "./js/data/statuses.js",
    "./js/data/items.js",
    "./js/data/themes.js",

    "./js/ui/screens.js",
    "./js/ui/animations.js",
    "./js/ui/sounds.js"
];


self.addEventListener(
    "install",
    event => {

        event.waitUntil(
            caches
                .open(CACHE_NAME)
                .then(cache =>
                    cache.addAll(FILES_TO_CACHE)
                )
        );

    }
);


self.addEventListener(
    "fetch",
    event => {

        event.respondWith(
            caches
                .match(event.request)
                .then(response =>
                    response ||
                    fetch(event.request)
                )
        );

    }
);