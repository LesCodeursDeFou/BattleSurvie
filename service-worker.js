// =====================================================
// BATTLESURVIE - SERVICE WORKER
// =====================================================

// IMPORTANT :
// Incrémenter cette version à chaque grosse mise à jour
// nécessitant de forcer le renouvellement du cache.
//
// v10 -> v11
//
const CACHE_NAME =
    "battlesurvie-v14";


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
// On met les fichiers en cache.
//
// Contrairement à cache.addAll(), une erreur sur UN fichier
// ne fait pas échouer toute l'installation du Service Worker.
// C'est utile pendant le développement.
// =====================================================

self.addEventListener(
    "install",
    event => {

        console.log(
            `[Service Worker] Installation ${CACHE_NAME}`
        );


        event.waitUntil(

            caches
                .open(
                    CACHE_NAME
                )
                .then(
                    async cache => {

                        await Promise.all(

                            FILES_TO_CACHE.map(
                                async file => {

                                    try {

                                        await cache.add(
                                            file
                                        );


                                        console.log(
                                            `[Service Worker] Cache OK : ${file}`
                                        );

                                    }

                                    catch (
                                        error
                                    ) {

                                        console.warn(
                                            `[Service Worker] Impossible de mettre en cache : ${file}`,
                                            error
                                        );

                                    }

                                }
                            )

                        );

                    }
                )
        );


        // Le nouveau Service Worker n'attend pas que
        // l'ancien soit fermé.
        self.skipWaiting();

    }
);


// =====================================================
// ACTIVATION
// =====================================================
//
// Supprime automatiquement tous les anciens caches
// BattleSurvie.
// =====================================================

self.addEventListener(
    "activate",
    event => {

        console.log(
            `[Service Worker] Activation ${CACHE_NAME}`
        );


        event.waitUntil(

            Promise.all([

                // -----------------------------------------
                // SUPPRESSION DES ANCIENS CACHES
                // -----------------------------------------

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

                        }
                    ),


                // -----------------------------------------
                // PREND IMMÉDIATEMENT LE CONTRÔLE
                // DES PAGES OUVERTES
                // -----------------------------------------

                self.clients.claim()

            ])

        );

    }
);


// =====================================================
// FETCH
// =====================================================
//
// STRATÉGIE : NETWORK FIRST
//
// 1. On essaie TOUJOURS Internet en premier.
// 2. Si la nouvelle version existe, on l'utilise.
// 3. On met à jour le cache.
// 4. Si Internet ne répond pas, on utilise le cache.
//
// C'est volontairement adapté au développement de
// BattleSurvie : l'iPhone récupère la dernière version
// dès qu'il est connecté.
// =====================================================

self.addEventListener(
    "fetch",
    event => {

        const request =
            event.request;


        // -------------------------------------------------
        // NE GÉRER QUE LES GET
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
        // IGNORER LES RESSOURCES D'AUTRES DOMAINES
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
        // FORCER UNE VRAIE REQUÊTE RÉSEAU
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
        // NE METTRE EN CACHE QUE LES RÉPONSES VALIDES
        // -------------------------------------------------

        if (
            networkResponse &&
            networkResponse.ok
        ) {

            const cache =
                await caches.open(
                    CACHE_NAME
                );


            try {

                await cache.put(
                    request,
                    networkResponse.clone()
                );

            }

            catch (
                error
            ) {

                console.warn(
                    "[Service Worker] Cache.put impossible :",
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
            "[Service Worker] Réseau indisponible, recherche cache :",
            request.url
        );


        // -------------------------------------------------
        // ESSAYER LE CACHE
        // -------------------------------------------------

        const cachedResponse =
            await caches.match(
                request
            );


        if (
            cachedResponse
        ) {

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

                return indexFallback;

            }

        }


        // Rien n'est disponible.
        throw error;

    }

}


// =====================================================
// MESSAGE : FORCER UNE MISE À JOUR
// =====================================================
//
// Permet plus tard d'envoyer :
//
// navigator.serviceWorker.controller.postMessage({
//     type: "SKIP_WAITING"
// });
//
// =====================================================

self.addEventListener(
    "message",
    event => {

        if (
            event.data?.type ===
            "SKIP_WAITING"
        ) {

            self.skipWaiting();

        }

    }
);