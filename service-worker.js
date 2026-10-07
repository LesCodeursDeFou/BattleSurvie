// =====================================================
// BATTLESURVIE - SERVICE WORKER
// =====================================================
//
// À CHAQUE GROSSE MISE À JOUR :
// modifier uniquement APP_VERSION.
//
// Exemple :
// "14" -> "15"
//
// Le nom du cache sera automatiquement :
// battlesurvie-v15
// =====================================================


// =====================================================
// VERSION DE L'APPLICATION
// =====================================================

const APP_VERSION =
    "1.0.1";


const CACHE_NAME =
    `version v${APP_VERSION}`;


// =====================================================
// FICHIERS PRINCIPAUX À METTRE EN CACHE
// =====================================================

const FILES_TO_CACHE = [

    // -------------------------------------------------
    // APPLICATION
    // -------------------------------------------------

    "./",
    "./index.html",
    "./manifest.json",


    // -------------------------------------------------
    // CSS
    // -------------------------------------------------

    "./css/style.css",
    "./css/animations.css",
    "./css/mobile.css",


    // -------------------------------------------------
    // JS PRINCIPAL
    // -------------------------------------------------

    "./js/main.js",


    // -------------------------------------------------
    // MOTEUR DU JEU
    // -------------------------------------------------

    "./js/game/game.js",
    "./js/game/player.js",
    "./js/game/round.js",
    "./js/game/effects.js",
    "./js/game/statusManager.js",
    "./js/game/relationshipManager.js",
    "./js/game/conditionManager.js",


    // -------------------------------------------------
    // INTERFACE
    // -------------------------------------------------

    "./js/ui/screens.js",
    "./js/ui/animations.js",
    "./js/ui/sounds.js",


    // -------------------------------------------------
    // DONNÉES GLOBALES
    // -------------------------------------------------

    "./js/data/themes.js",
    "./js/data/gameModes.js",
    "./js/data/themeData.js",
    "./js/data/relationships.js",


    // -------------------------------------------------
    // ÎLE DÉSERTE
    // -------------------------------------------------

    "./js/data/desertIsland/situations.js",
    "./js/data/desertIsland/interactionSituations.js",
    "./js/data/desertIsland/groupSituations.js",
    "./js/data/desertIsland/judgeSituations.js",
    "./js/data/desertIsland/secretSituations.js",
    "./js/data/desertIsland/events.js",
    "./js/data/desertIsland/items.js",
    "./js/data/desertIsland/statuses.js",
    "./js/data/desertIsland/prologue.js",


    // -------------------------------------------------
    // MANOIR HANTÉ
    // -------------------------------------------------

    "./js/data/hauntedMansion/situations.js",
    "./js/data/hauntedMansion/interactionSituations.js",
    "./js/data/hauntedMansion/groupSituations.js",
    "./js/data/hauntedMansion/judgeSituations.js",
    "./js/data/hauntedMansion/secretSituations.js",
    "./js/data/hauntedMansion/events.js",
    "./js/data/hauntedMansion/items.js",
    "./js/data/hauntedMansion/statuses.js",
    "./js/data/hauntedMansion/prologue.js"

];


// =====================================================
// INSTALLATION
// =====================================================
//
// Chaque fichier est ajouté individuellement.
//
// Avantage :
// si un fichier manque temporairement pendant le
// développement, l'installation complète du Service
// Worker ne plante pas.
// =====================================================

self.addEventListener(
    "install",
    event => {

        console.log(
            `[Service Worker] Installation ${CACHE_NAME}`
        );


        event.waitUntil(

            (async () => {

                const cache =
                    await caches.open(
                        CACHE_NAME
                    );


                await Promise.all(

                    FILES_TO_CACHE.map(
                        async file => {

                            try {

                                // ---------------------------------
                                // FORCER LA VERSION RÉSEAU
                                // ---------------------------------

                                const response =
                                    await fetch(
                                        file,
                                        {
                                            cache:
                                                "no-store"
                                        }
                                    );


                                if (
                                    !response ||
                                    !response.ok
                                ) {

                                    throw new Error(
                                        `HTTP ${response?.status ?? "inconnu"}`
                                    );

                                }


                                // ---------------------------------
                                // AJOUT AU CACHE
                                // ---------------------------------

                                await cache.put(
                                    file,
                                    response
                                );


                                console.log(
                                    `[Service Worker] Cache OK : ${file}`
                                );

                            }

                            catch (
                                error
                            ) {

                                console.warn(
                                    `[Service Worker] Cache impossible : ${file}`,
                                    error
                                );

                            }

                        }
                    )

                );


                // -----------------------------------------
                // ACTIVER IMMÉDIATEMENT LE NOUVEAU SW
                // -----------------------------------------

                await self.skipWaiting();

            })()

        );

    }
);


// =====================================================
// ACTIVATION
// =====================================================
//
// 1. Supprime les anciens caches BattleSurvie.
// 2. Le nouveau Service Worker prend immédiatement
//    le contrôle des pages ouvertes.
// =====================================================

self.addEventListener(
    "activate",
    event => {

        console.log(
            `[Service Worker] Activation ${CACHE_NAME}`
        );


        event.waitUntil(

            (async () => {

                const cacheNames =
                    await caches.keys();


                await Promise.all(

                    cacheNames.map(
                        cacheName => {

                            // ---------------------------------
                            // NE SUPPRIMER QUE NOS CACHES
                            // ---------------------------------

                            if (
                                cacheName.startsWith(
                                    "battlesurvie-v"
                                ) &&
                                cacheName !==
                                    CACHE_NAME
                            ) {

                                console.log(
                                    `[Service Worker] Suppression ancien cache : ${cacheName}`
                                );


                                return caches.delete(
                                    cacheName
                                );

                            }


                            return Promise.resolve();

                        }
                    )

                );


                // -----------------------------------------
                // PRENDRE LE CONTRÔLE IMMÉDIATEMENT
                // -----------------------------------------

                await self.clients.claim();


                console.log(
                    `[Service Worker] ${CACHE_NAME} actif`
                );

            })()

        );

    }
);


// =====================================================
// FETCH
// =====================================================
//
// STRATÉGIE : NETWORK FIRST
//
// 1. Internet est essayé en premier.
// 2. La réponse réseau est renvoyée.
// 3. Une copie est enregistrée dans le cache.
// 4. Si Internet ne fonctionne pas : cache.
//
// Cette stratégie est pratique pendant le
// développement de BattleSurvie.
// =====================================================

self.addEventListener(
    "fetch",
    event => {

        const request =
            event.request;


        // -------------------------------------------------
        // UNIQUEMENT LES REQUÊTES GET
        // -------------------------------------------------

        if (
            request.method !==
            "GET"
        ) {

            return;

        }


        const requestUrl =
            new URL(
                request.url
            );


        // -------------------------------------------------
        // IGNORER LES AUTRES DOMAINES
        // -------------------------------------------------

        if (
            requestUrl.origin !==
            self.location.origin
        ) {

            return;

        }


        event.respondWith(

            networkFirst(
                request
            )

        );

    }
);


// =====================================================
// NETWORK FIRST
// =====================================================

async function networkFirst(
    request
) {

    try {

        // -------------------------------------------------
        // RÉCUPÉRER LA DERNIÈRE VERSION RÉSEAU
        // -------------------------------------------------

        const networkResponse =
            await fetch(
                request,
                {
                    cache:
                        "no-store"
                }
            );


        // -------------------------------------------------
        // METTRE À JOUR LE CACHE
        // -------------------------------------------------

        if (
            networkResponse &&
            networkResponse.ok
        ) {

            try {

                const cache =
                    await caches.open(
                        CACHE_NAME
                    );


                await cache.put(
                    request,
                    networkResponse.clone()
                );

            }

            catch (
                error
            ) {

                console.warn(
                    "[Service Worker] Impossible de mettre à jour le cache :",
                    request.url,
                    error
                );

            }

        }


        return networkResponse;

    }

    catch (
        error
    ) {

        console.warn(
            "[Service Worker] Réseau indisponible :",
            request.url
        );


        // -------------------------------------------------
        // RECHERCHER LA RESSOURCE DANS LE CACHE
        // -------------------------------------------------

        const cachedResponse =
            await caches.match(
                request
            );


        if (
            cachedResponse
        ) {

            console.log(
                "[Service Worker] Ressource chargée depuis le cache :",
                request.url
            );


            return cachedResponse;

        }


        // -------------------------------------------------
        // FALLBACK POUR UNE NAVIGATION
        // -------------------------------------------------

        if (
            request.mode ===
            "navigate"
        ) {

            const indexFallback =
                await caches.match(
                    "./index.html"
                );


            if (
                indexFallback
            ) {

                console.log(
                    "[Service Worker] Fallback vers index.html"
                );


                return indexFallback;

            }

        }


        // -------------------------------------------------
        // AUCUNE RESSOURCE DISPONIBLE
        // -------------------------------------------------

        throw error;

    }

}


// =====================================================
// COMMUNICATION AVEC L'APPLICATION
// =====================================================
//
// Messages disponibles :
//
// SKIP_WAITING
//     Force l'activation du Service Worker.
//
// GET_VERSION
//     Retourne la version actuelle de BattleSurvie.
//
// Exemple de réponse :
//
// {
//     version: "14",
//     cacheName: "battlesurvie-v14"
// }
//
// =====================================================

self.addEventListener(
    "message",
    event => {

        const type =
            event.data?.type;


        // -------------------------------------------------
        // FORCER L'ACTIVATION
        // -------------------------------------------------

        if (
            type ===
            "SKIP_WAITING"
        ) {

            console.log(
                "[Service Worker] SKIP_WAITING demandé"
            );


            self.skipWaiting();


            return;

        }


        // -------------------------------------------------
        // ENVOYER LA VERSION À MAIN.JS
        // -------------------------------------------------

        if (
            type ===
            "GET_VERSION"
        ) {

            const response = {

                version:
                    APP_VERSION,

                cacheName:
                    CACHE_NAME

            };


            // ---------------------------------------------
            // RÉPONSE VIA MESSAGECHANNEL
            // ---------------------------------------------

            if (
                event.ports &&
                event.ports[0]
            ) {

                event.ports[0].postMessage(
                    response
                );


                return;

            }


            // ---------------------------------------------
            // FALLBACK
            // ---------------------------------------------

            if (
                event.source
            ) {

                event.source.postMessage({
                    type:
                        "VERSION",

                    ...response
                });

            }

        }

    }
);