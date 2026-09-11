export class RelationshipManager {

    constructor(game) {

        this.game = game;

        this.relations = new Map();

    }


    // =========================================================
    // CLÉ UNIQUE D'UNE RELATION
    // Relation directionnelle :
    // A -> B différent de B -> A
    // =========================================================

    getKey(fromPlayer, toPlayer) {

        if (!fromPlayer || !toPlayer) {
            return null;
        }

        return `${fromPlayer.id}:${toPlayer.id}`;

    }


    // =========================================================
    // CRÉER / RÉCUPÉRER UNE RELATION
    // =========================================================

    getRelation(fromPlayer, toPlayer) {

        const key =
            this.getKey(
                fromPlayer,
                toPlayer
            );


        if (!key) {

            return null;

        }


        if (!this.relations.has(key)) {

            this.relations.set(
                key,
                {
                    fromPlayerId:
                        fromPlayer.id,

                    toPlayerId:
                        toPlayer.id,

                    trust:
                        0,

                    betrayal:
                        0,

                    debt:
                        0,

                    distrustTurns:
                        0,

                    protectionTurns:
                        0,

                    insight:
                        0
                }
            );

        }


        return this.relations.get(key);

    }


    // =========================================================
    // CONFIANCE
    // =========================================================

    changeTrust(
        fromPlayer,
        toPlayer,
        amount
    ) {

        const relation =
            this.getRelation(
                fromPlayer,
                toPlayer
            );


        if (!relation) {
            return null;
        }


        const oldTrust =
            relation.trust;


        relation.trust =
            this.clamp(
                oldTrust + Number(amount || 0),
                -3,
                3
            );


        // Une baisse de confiance crée de la trahison.
        if (Number(amount || 0) < 0) {

            relation.betrayal =
                this.clamp(
                    relation.betrayal + 1,
                    0,
                    3
                );

        }


        // Une amélioration de confiance peut progressivement
        // effacer une ancienne trahison.
        if (
            Number(amount || 0) > 0 &&
            relation.betrayal > 0
        ) {

            relation.betrayal =
                Math.max(
                    0,
                    relation.betrayal - 1
                );

        }


        if (
            relation.trust !== oldTrust &&
            this.game?.pushNotification
        ) {

            const label =
                this.getPublicLabel(
                    fromPlayer,
                    toPlayer
                );


            this.game.pushNotification({
                type:
                    "relationship",

                icon:
                    relation.trust > oldTrust
                        ? "🤝"
                        : "💔",

                title:
                    relation.trust > oldTrust
                        ? "Relation améliorée"
                        : "Relation détériorée",

                text:
                    `${fromPlayer.name} → ${toPlayer.name} : ${label}`
            });

        }


        return relation;

    }


    // =========================================================
    // DETTE
    // debtor doit quelque chose à creditor
    // =========================================================

    addDebt(
        debtor,
        creditor,
        amount = 1
    ) {

        const relation =
            this.getRelation(
                debtor,
                creditor
            );


        if (!relation) {
            return null;
        }


        relation.debt =
            Math.max(
                0,
                relation.debt + Number(amount || 1)
            );


        if (this.game?.pushNotification) {

            this.game.pushNotification({
                type:
                    "relationship",

                icon:
                    "🤝",

                title:
                    "Dette",

                text:
                    `${debtor.name} doit maintenant une faveur à ${creditor.name}.`
            });

        }


        return relation;

    }


    consumeDebt(
        debtor,
        creditor
    ) {

        const relation =
            this.getRelation(
                debtor,
                creditor
            );


        if (
            !relation ||
            relation.debt <= 0
        ) {

            return false;

        }


        relation.debt -= 1;

        return true;

    }


    // =========================================================
    // MÉFIANCE TEMPORAIRE
    // =========================================================

    addDistrust(
        fromPlayer,
        toPlayer,
        turns = 2
    ) {

        const relation =
            this.getRelation(
                fromPlayer,
                toPlayer
            );


        if (!relation) {
            return null;
        }


        relation.distrustTurns =
            Math.max(
                relation.distrustTurns,
                Number(turns || 2)
            );


        if (this.game?.pushNotification) {

            this.game.pushNotification({
                type:
                    "relationship",

                icon:
                    "🤨",

                title:
                    "Méfiance",

                text:
                    `${fromPlayer.name} se méfie maintenant de ${toPlayer.name}.`
            });

        }


        return relation;

    }


    // =========================================================
    // PROTECTION
    // fromPlayer protège toPlayer
    // =========================================================

    addProtection(
        fromPlayer,
        toPlayer,
        turns = 1
    ) {

        const relation =
            this.getRelation(
                fromPlayer,
                toPlayer
            );


        if (!relation) {
            return null;
        }


        relation.protectionTurns =
            Math.max(
                relation.protectionTurns,
                Number(turns || 1)
            );


        if (this.game?.pushNotification) {

            this.game.pushNotification({
                type:
                    "relationship",

                icon:
                    "🛡️",

                title:
                    "Protection",

                text:
                    `${fromPlayer.name} protège temporairement ${toPlayer.name}.`
            });

        }


        return relation;

    }


    // =========================================================
    // INSIGHT
    // =========================================================

    changeInsight(
        fromPlayer,
        toPlayer,
        amount = 1
    ) {

        const relation =
            this.getRelation(
                fromPlayer,
                toPlayer
            );


        if (!relation) {
            return null;
        }


        relation.insight =
            this.clamp(
                relation.insight + Number(amount || 0),
                0,
                3
            );


        return relation;

    }


    // =========================================================
    // LABEL PUBLIC
    // Pas de valeur numérique montrée au joueur.
    // =========================================================

    getPublicLabel(
        fromPlayer,
        toPlayer
    ) {

        const relation =
            this.getRelation(
                fromPlayer,
                toPlayer
            );


        if (!relation) {
            return "Neutres";
        }


        if (relation.trust <= -3) {
            return "Ennemis";
        }

        if (relation.trust === -2) {
            return "Rivaux";
        }

        if (relation.trust === -1) {
            return "Méfiants";
        }

        if (relation.trust === 0) {
            return "Neutres";
        }

        if (relation.trust === 1) {
            return "Bonne entente";
        }

        if (relation.trust === 2) {
            return "Confiance";
        }

        return "Alliance";

    }


    // =========================================================
    // DESCRIPTION PUBLIQUE
    // =========================================================

    getPublicDescription(
        fromPlayer,
        toPlayer
    ) {

        const relation =
            this.getRelation(
                fromPlayer,
                toPlayer
            );


        if (!relation) {
            return "";
        }


        const parts = [
            this.getPublicLabel(
                fromPlayer,
                toPlayer
            )
        ];


        if (
            relation.distrustTurns > 0
        ) {

            parts.push(
                "Méfiance active"
            );

        }


        if (
            relation.protectionTurns > 0
        ) {

            parts.push(
                "Protection active"
            );

        }


        if (
            relation.debt > 0
        ) {

            parts.push(
                "Dette"
            );

        }


        if (
            relation.betrayal >= 2
        ) {

            parts.push(
                "Trahison"
            );

        }


        if (
            relation.insight >= 2
        ) {

            parts.push(
                "Instinct"
            );

        }


        return parts.join(" • ");

    }


    // =========================================================
    // FIN DU TOUR D'UN JOUEUR
    // Décrémenter les relations temporaires depuis ce joueur.
    // =========================================================

    processPlayerTurn(player) {

        if (!player) {
            return [];
        }


        const events = [];


        for (
            const relation
            of this.relations.values()
        ) {

            if (
                relation.fromPlayerId !== player.id
            ) {

                continue;

            }


            // -------------------------
            // MÉFIANCE
            // -------------------------

            if (
                relation.distrustTurns > 0
            ) {

                relation.distrustTurns -= 1;


                if (
                    relation.distrustTurns === 0
                ) {

                    const targetPlayer =
                        this.getPlayerById(
                            relation.toPlayerId
                        );


                    events.push({
                        type:
                            "relationship_expired",

                        icon:
                            "🤨",

                        title:
                            "Méfiance dissipée",

                        text:
                            targetPlayer
                                ? `${player.name} se méfie moins de ${targetPlayer.name}.`
                                : "La méfiance se dissipe."
                    });

                }

            }


            // -------------------------
            // PROTECTION
            // -------------------------

            if (
                relation.protectionTurns > 0
            ) {

                relation.protectionTurns -= 1;


                if (
                    relation.protectionTurns === 0
                ) {

                    const targetPlayer =
                        this.getPlayerById(
                            relation.toPlayerId
                        );


                    events.push({
                        type:
                            "relationship_expired",

                        icon:
                            "🛡️",

                        title:
                            "Protection terminée",

                        text:
                            targetPlayer
                                ? `${player.name} ne protège plus ${targetPlayer.name}.`
                                : "La protection prend fin."
                    });

                }

            }

        }


        return events;

    }


    // =========================================================
    // JOUEUR PAR ID
    // =========================================================

    getPlayerById(playerId) {

        return (
            this.game?.players?.find(
                player =>
                    player.id === playerId
            ) ??
            null
        );

    }


    // =========================================================
    // RESET
    // =========================================================

    reset() {

        this.relations.clear();

    }


    // =========================================================
    // UTILITAIRE
    // =========================================================

    clamp(
        value,
        min,
        max
    ) {

        return Math.min(
            max,
            Math.max(
                min,
                value
            )
        );

    }

}