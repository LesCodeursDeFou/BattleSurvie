const CACHE_NAME =
    "battlesurvie-v9";


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

    "./js/ui/screens.js",
    "./js/ui/animations.js",
    "./js/ui/sounds.js",

    "./js/data/themes.js",
    "./js/data/gameModes.js",
    "./js/data/themeData.js",

    "./js/data/desertIsland/situations.js",
    "./js/data/desertIsland/interactionSituations.js",
    "./js/data/desertIsland/groupSituations.js",
    "./js/data/desertIsland/judgeSituations.js",
    "./js/data/desertIsland/secretSituations.js",
    "./js/data/desertIsland/prologue.js",

    "./js/data/hauntedMansion/situations.js",
    "./js/data/hauntedMansion/interactionSituations.js",
    "./js/data/hauntedMansion/groupSituations.js",
    "./js/data/hauntedMansion/judgeSituations.js",
    "./js/data/hauntedMansion/secretSituations.js",
    "./js/data/hauntedMansion/prologue.js",

    "./js/game/statusManager.js",
    "./js/game/relationshipManager.js",
    "./js/game/conditionManager.js",
    "./js/data/relationships.js",
    "./js/data/desertIsland/statuses.js",
    "./js/data/hauntedMansion/statuses.js",

    "./manifest.json"

];


// =====================================
// INSTALLATION
// =====================================

self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches
                .open(
                    CACHE_NAME
                )
                .then(
                    cache =>
                        cache.addAll(
                            FILES_TO_CACHE
                        )
                )

        );


        self.skipWaiting();

    }
);


// =====================================
// ACTIVATION
// =====================================

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches
                .keys()
                .then(
                    cacheNames => {

                        return Promise.all(

                            cacheNames.map(
                                cacheName => {

                                    if (
                                        cacheName !==
                                        CACHE_NAME
                                    ) {

                                        return caches.delete(
                                            cacheName
                                        );

                                    }

                                }
                            )

                        );

                    }
                )

        );


        self.clients.claim();

    }
);


// =====================================
// FETCH
// =====================================

self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            fetch(
                event.request
            )
            .then(
                response => {

                    const copy =
                        response.clone();


                    caches
                        .open(
                            CACHE_NAME
                        )
                        .then(
                            cache => {

                                cache.put(
                                    event.request,
                                    copy
                                );

                            }
                        );


                    return response;

                }
            )
            .catch(
                () => {

                    return caches.match(
                        event.request
                    );

                }
            )

        );

    }
);