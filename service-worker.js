// =====================================================
// BATTLESURVIE - SERVICE WORKER
// =====================================================

import {
    APP_VERSION
} from "./js/version.js";


// =====================================================
// CACHE
// =====================================================

const CACHE_PREFIX =
    "battlesurvie-v";

const CACHE_NAME =
    `${CACHE_PREFIX}${APP_VERSION}`;


// =====================================================
// FICHIERS À METTRE EN CACHE
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

    "./js/version.js",
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

                                // =================================
                                // TOUJOURS PRENDRE LA VERSION
                                // DISPONIBLE SUR LE SERVEUR
                                // =================================

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

                                await cache.put(
                                    file,
                                    response.clone()
                                );

                                console.log(
                                    `[Service Worker] Cache OK : ${file}`
                                );

                            }

                            catch (
                                error
                            ) {

                                // Un fichier manquant ne doit pas
                                // empêcher toute l'application
                                // de s'installer.

                                console.warn(
                                    `[Service Worker] Cache impossible : ${file}`,
                                    error
                                );

                            }

                        }
                    )

                );


                // =================================
                // NE PAS ATTENDRE L'ANCIEN SW
                // =================================

                await self.skipWaiting();

            })()

        );

    }
);


// =====================================================
// ACTIVATION
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


                // =================================
                // SUPPRIMER LES ANCIENNES VERSIONS
                // =================================

                await Promise.all(

                    cacheNames.map(
                        cacheName => {

                            if (
                                cacheName.startsWith(
                                    CACHE_PREFIX
                                ) &&
                                cacheName !==
                                    CACHE_NAME
                            ) {

                                console.log(
                                    `[Service Worker] Suppression : ${cacheName}`
                                );

                                return caches.delete(
                                    cacheName
                                );

                            }

                            return Promise.resolve();

                        }
                    )

                );


                // =================================
                // CONTRÔLER IMMÉDIATEMENT
                // LES PAGES OUVERTES
                // =================================

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
// Pendant le développement :
// - réseau en priorité
// - cache mis à jour
// - cache utilisé uniquement hors ligne
//
// =====================================================

self.addEventListener(
    "fetch",
    event => {

        const request =
            event.request;


        // =================================
        // UNIQUEMENT GET
        // =================================

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


        // =================================
        // UNIQUEMENT NOTRE DOMAINE
        // =================================

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

        // =================================
        // FORCER LE RÉSEAU
        // =================================

        const networkResponse =
            await fetch(
                request,
                {
                    cache:
                        "no-store"
                }
            );


        // =================================
        // ERREUR HTTP
        // =================================

        if (
            !networkResponse ||
            !networkResponse.ok
        ) {

            throw new Error(
                `HTTP ${networkResponse?.status ?? "inconnu"}`
            );

        }


        // =================================
        // METTRE À JOUR LE CACHE
        // =================================

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
            cacheError
        ) {

            console.warn(
                "[Service Worker] Mise à jour cache impossible :",
                request.url,
                cacheError
            );

        }


        // =================================
        // RÉPONSE RÉSEAU
        // =================================

        return networkResponse;

    }

    catch (
        networkError
    ) {

        console.warn(
            "[Service Worker] Réseau indisponible, utilisation du cache :",
            request.url
        );


        // =================================
        // RECHERCHER EXACTEMENT
        // CETTE RESSOURCE
        // =================================

        const cachedResponse =
            await caches.match(
                request
            );

        if (
            cachedResponse
        ) {

            return cachedResponse;

        }


        // =================================
        // FALLBACK INDEX.HTML
        // UNIQUEMENT POUR NAVIGATION
        // =================================

        if (
            request.mode ===
            "navigate"
        ) {

            const cache =
                await caches.open(
                    CACHE_NAME
                );

            const indexFallback =
                await cache.match(
                    "./index.html"
                );

            if (
                indexFallback
            ) {

                return indexFallback;

            }

        }


        throw networkError;

    }

}


// =====================================================
// MESSAGES
// =====================================================

self.addEventListener(
    "message",
    event => {

        const type =
            event.data?.type;


        // =================================
        // FORCER L'ACTIVATION
        // =================================

        if (
            type ===
            "SKIP_WAITING"
        ) {

            console.log(
                `[Service Worker] Activation forcée de ${CACHE_NAME}`
            );

            self.skipWaiting();

        }

    }
);