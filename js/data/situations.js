export const SITUATIONS = [

    // =========================================================
    // 1 - HORDE DE SINGES
    // =========================================================

    {
        id: "monkey_horde",
        title: "Une horde de singes arrive !",
        category: "Danger",
        icon: "🐒",

        description:
            "Des cris retentissent derrière toi. Une horde entière de singes fonce dans ta direction.",

        choices: [
            {
                id: "monkey_run",
                title: "🏃 Courir",
                description: "Tes jambes vont devoir faire le travail.",

                consequences: [
                    {
                        id: "monkey_run_bad",
                        text:
                            "Tu découvres brutalement que ton cardio n'est pas au niveau. Les singes te rattrapent.",
                        lives: -1,
                        icon: "🥵"
                    },

                    {
                        id: "monkey_run_good",
                        text:
                            "Tu trouves un trou entre deux rochers et t'y réfugies. Les singes passent sans te voir.",
                        lives: 0,
                        icon: "😎"
                    }
                ]
            },

            {
                id: "monkey_fight",
                title: "💪 Se battre",
                description: "Tu regardes tes biceps. Ça devrait suffire.",

                consequences: [
                    {
                        id: "monkey_fight_win",
                        text:
                            "Contre toute logique, tu mets la horde en déroute. Ton ego devient incontrôlable.",
                        lives: 2,
                        icon: "💪"
                    },

                    {
                        id: "monkey_fight_lose",
                        text:
                            "Les singes étaient plus nombreux, plus rapides et apparemment mieux entraînés.",
                        lives: -2,
                        icon: "💀"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 2 - NOIX DE COCO
    // =========================================================

    {
        id: "coconut",
        title: "Une noix de coco tombe devant toi",
        category: "Survie",
        icon: "🥥",

        description:
            "Tu n'as rien mangé depuis des heures. Une noix de coco vient de tomber à quelques centimètres de toi.",

        choices: [
            {
                id: "coconut_eat",
                title: "😋 La manger",
                description: "De la nourriture gratuite, que demander de plus ?",

                consequences: [
                    {
                        id: "coconut_eat_good",
                        text:
                            "Elle est parfaite. Tu récupères de l'énergie.",
                        lives: 1,
                        icon: "😋"
                    },

                    {
                        id: "coconut_eat_bad",
                        text:
                            "Elle était complètement pourrie. Ton estomac déclare immédiatement la guerre.",
                        lives: -1,
                        icon: "🤢"
                    }
                ]
            },

            {
                id: "coconut_leave",
                title: "🚶 L'ignorer",
                description: "Ça paraît beaucoup trop facile.",

                consequences: [
                    {
                        id: "coconut_leave_good",
                        text:
                            "Bonne intuition : quelques secondes plus tard, un énorme singe vient récupérer sa noix de coco.",
                        lives: 1,
                        icon: "🐒"
                    },

                    {
                        id: "coconut_leave_bad",
                        text:
                            "Tu continues ta route le ventre vide en te demandant pourquoi tu prends toujours de mauvaises décisions.",
                        lives: 0,
                        icon: "🤔"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 3 - GROTTE
    // =========================================================

    {
        id: "cave",
        title: "Tu découvres une grotte",
        category: "Exploration",
        icon: "⛰️",

        description:
            "La nuit approche. Une immense grotte pourrait constituer un abri idéal, mais tu ne vois rien à l'intérieur.",

        choices: [
            {
                id: "cave_enter",
                title: "🔦 Entrer",
                description: "La curiosité prend le dessus.",

                consequences: [
                    {
                        id: "cave_enter_good",
                        text:
                            "Tu découvres une ancienne réserve remplie de nourriture.",
                        lives: 2,
                        icon: "🎉"
                    },

                    {
                        id: "cave_enter_bad",
                        text:
                            "Un sanglier dormait à l'intérieur. Visiblement, tu n'étais pas invité.",
                        lives: -2,
                        icon: "🐗"
                    }
                ]
            },

            {
                id: "cave_outside",
                title: "🏕️ Dormir dehors",
                description: "Tu préfères jouer la sécurité.",

                consequences: [
                    {
                        id: "cave_outside_good",
                        text:
                            "La nuit est douce et parfaitement calme.",
                        lives: 0,
                        icon: "🌙"
                    },

                    {
                        id: "cave_outside_bad",
                        text:
                            "Une pluie torrentielle s'abat toute la nuit. Tu ne dors pas une seconde.",
                        lives: -1,
                        icon: "🌧️"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 4 - RIVIÈRE
    // =========================================================

    {
        id: "river",
        title: "Une rivière bloque ton chemin",
        category: "Exploration",
        icon: "🌊",

        description:
            "Le courant est assez fort mais faire le tour pourrait te faire perdre plusieurs heures.",

        choices: [
            {
                id: "river_swim",
                title: "🏊 Traverser à la nage",
                description: "Quelques mètres seulement... normalement.",

                consequences: [
                    {
                        id: "river_swim_good",
                        text:
                            "Tu traverses sans difficulté. Même toi, tu es impressionné.",
                        lives: 1,
                        icon: "🏊"
                    },

                    {
                        id: "river_swim_bad",
                        text:
                            "Le courant t'emporte et tu finis 200 mètres plus bas contre un rocher.",
                        lives: -2,
                        icon: "🌊"
                    }
                ]
            },

            {
                id: "river_detour",
                title: "🥾 Faire le tour",
                description: "Plus long, mais probablement moins stupide.",

                consequences: [
                    {
                        id: "river_detour_good",
                        text:
                            "Tu découvres un petit pont naturel caché derrière les arbres.",
                        lives: 1,
                        icon: "🌉"
                    },

                    {
                        id: "river_detour_bad",
                        text:
                            "Après deux heures de marche, tu réalises que tu es revenu exactement au même endroit.",
                        lives: -1,
                        icon: "🧭"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 5 - SERPENT
    // =========================================================

    {
        id: "snake",
        title: "Un serpent bloque le passage",
        category: "Danger",
        icon: "🐍",

        description:
            "Un énorme serpent est enroulé juste devant toi et semble particulièrement attentif à tes mouvements.",

        choices: [
            {
                id: "snake_pass",
                title: "🥷 Passer doucement",
                description: "Tu deviens soudainement expert en infiltration.",

                consequences: [
                    {
                        id: "snake_pass_good",
                        text:
                            "Tu passes lentement et le serpent ne bouge même pas.",
                        lives: 0,
                        icon: "😮‍💨"
                    },

                    {
                        id: "snake_pass_bad",
                        text:
                            "Une branche craque sous ton pied. Le serpent apprécie moyennement.",
                        lives: -2,
                        icon: "🐍"
                    }
                ]
            },

            {
                id: "snake_throw",
                title: "⛰️ Lui jeter une pierre",
                description: "La diplomatie ne semble pas être ton fort.",

                consequences: [
                    {
                        id: "snake_throw_good",
                        text:
                            "La pierre tombe juste devant lui et le fait fuir.",
                        lives: 1,
                        icon: "🎯"
                    },

                    {
                        id: "snake_throw_bad",
                        text:
                            "Tu rates le serpent mais réussis parfaitement à l'énerver.",
                        lives: -2,
                        icon: "😬"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 6 - CABANE ABANDONNÉE
    // =========================================================

    {
        id: "abandoned_hut",
        title: "Tu trouves une cabane abandonnée",
        category: "Exploration",
        icon: "🛖",

        description:
            "Une vieille cabane apparaît derrière les arbres. La porte est entrouverte.",

        choices: [
            {
                id: "hut_enter",
                title: "🚪 Entrer",
                description: "Quel est le pire qui puisse arriver ?",

                consequences: [
                    {
                        id: "hut_enter_good",
                        text:
                            "Tu trouves de l'eau potable et quelques conserves encore intactes.",
                        lives: 2,
                        icon: "🥫"
                    },

                    {
                        id: "hut_enter_bad",
                        text:
                            "Le plancher cède sous tes pieds.",
                        lives: -2,
                        icon: "🕳️"
                    }
                ]
            },

            {
                id: "hut_ignore",
                title: "🚶 Continuer",
                description: "Tu as vu suffisamment de films d'horreur.",

                consequences: [
                    {
                        id: "hut_ignore_good",
                        text:
                            "Tu évites probablement quelque chose de très désagréable.",
                        lives: 0,
                        icon: "😌"
                    },

                    {
                        id: "hut_ignore_bad",
                        text:
                            "Quelques minutes plus tard, tu réalises que tu viens peut-être d'abandonner un stock entier de nourriture.",
                        lives: 0,
                        icon: "🤦"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 7 - FRUIT INCONNU
    // =========================================================

    {
        id: "strange_fruit",
        title: "Tu trouves un fruit totalement inconnu",
        category: "Survie",
        icon: "🍈",

        description:
            "Il ressemble vaguement à un mélange entre une mangue et une grenade radioactive.",

        choices: [
            {
                id: "fruit_eat",
                title: "🍴 Le manger",
                description: "Il sent plutôt bon.",

                consequences: [
                    {
                        id: "fruit_eat_good",
                        text:
                            "Incroyable : c'est probablement le meilleur fruit que tu aies mangé.",
                        lives: 2,
                        icon: "🤩"
                    },

                    {
                        id: "fruit_eat_bad",
                        text:
                            "Ton corps te confirme rapidement que cette couleur violette était un avertissement.",
                        lives: -2,
                        icon: "🤮"
                    }
                ]
            },

            {
                id: "fruit_leave",
                title: "❌ Ne pas y toucher",
                description: "Tu fais confiance à ton instinct de survie.",

                consequences: [
                    {
                        id: "fruit_leave_good",
                        text:
                            "Un oiseau en mange un morceau puis tombe de sa branche. Bon choix.",
                        lives: 1,
                        icon: "🐦"
                    },

                    {
                        id: "fruit_leave_bad",
                        text:
                            "Un singe arrive, le mange avec plaisir et repart. Il était apparemment délicieux.",
                        lives: 0,
                        icon: "🐒"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 8 - TEMPÊTE
    // =========================================================

    {
        id: "storm",
        title: "Une énorme tempête approche",
        category: "Météo",
        icon: "⛈️",

        description:
            "Le ciel devient noir et le vent commence à souffler extrêmement fort.",

        choices: [
            {
                id: "storm_tree",
                title: "🌳 S'abriter sous un arbre",
                description: "Ça semble être l'abri le plus proche.",

                consequences: [
                    {
                        id: "storm_tree_good",
                        text:
                            "L'arbre résiste parfaitement et te protège de la pluie.",
                        lives: 0,
                        icon: "🌳"
                    },

                    {
                        id: "storm_tree_bad",
                        text:
                            "Une énorme branche tombe juste à côté de toi. Enfin... presque à côté.",
                        lives: -2,
                        icon: "🪵"
                    }
                ]
            },

            {
                id: "storm_rocks",
                title: "⛰️ Chercher des rochers",
                description: "Tu cours vers une zone rocheuse.",

                consequences: [
                    {
                        id: "storm_rocks_good",
                        text:
                            "Tu trouves une petite cavité parfaitement protégée.",
                        lives: 1,
                        icon: "😌"
                    },

                    {
                        id: "storm_rocks_bad",
                        text:
                            "Tu glisses sur la roche mouillée et dévales quelques mètres.",
                        lives: -1,
                        icon: "🤕"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 9 - SANGLIER
    // =========================================================

    {
        id: "boar",
        title: "Un sanglier te charge",
        category: "Danger",
        icon: "🐗",

        description:
            "Tu entends un grognement puis vois un énorme sanglier foncer droit vers toi.",

        choices: [
            {
                id: "boar_tree",
                title: "🌴 Grimper à un arbre",
                description: "Il faut juste être plus rapide que le sanglier.",

                consequences: [
                    {
                        id: "boar_tree_good",
                        text:
                            "Tu grimpes juste à temps. Le sanglier abandonne quelques minutes plus tard.",
                        lives: 0,
                        icon: "😮‍💨"
                    },

                    {
                        id: "boar_tree_bad",
                        text:
                            "Tu découvres que grimper à un arbre demande un minimum de technique.",
                        lives: -1,
                        icon: "😵"
                    }
                ]
            },

            {
                id: "boar_dodge",
                title: "💨 L'esquiver",
                description: "Tu te prends soudainement pour un torero.",

                consequences: [
                    {
                        id: "boar_dodge_good",
                        text:
                            "Esquive parfaite. Le sanglier termine sa course dans un buisson.",
                        lives: 1,
                        icon: "😎"
                    },

                    {
                        id: "boar_dodge_bad",
                        text:
                            "Tu avais oublié que tu n'étais effectivement pas torero.",
                        lives: -2,
                        icon: "💥"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 10 - FEU
    // =========================================================

    {
        id: "fire",
        title: "Ton camp commence à brûler",
        category: "Urgence",
        icon: "🔥",

        description:
            "Une braise a mis le feu aux feuilles autour de ton camp.",

        choices: [
            {
                id: "fire_water",
                title: "💧 Chercher de l'eau",
                description: "La solution la plus logique.",

                consequences: [
                    {
                        id: "fire_water_good",
                        text:
                            "Tu reviens suffisamment vite et maîtrises l'incendie.",
                        lives: 1,
                        icon: "🪣"
                    },

                    {
                        id: "fire_water_bad",
                        text:
                            "À ton retour, le feu a déjà dévoré une bonne partie de tes affaires.",
                        lives: -1,
                        icon: "🔥"
                    }
                ]
            },

            {
                id: "fire_stomp",
                title: "🥾 Écraser les flammes",
                description: "Tes chaussures devraient survivre... probablement.",

                consequences: [
                    {
                        id: "fire_stomp_good",
                        text:
                            "Aussi étonnant que cela puisse paraître, ton plan fonctionne.",
                        lives: 1,
                        icon: "🥾"
                    },

                    {
                        id: "fire_stomp_bad",
                        text:
                            "Tu découvres pourquoi les pompiers n'éteignent pas les incendies avec leurs chaussures.",
                        lives: -2,
                        icon: "🔥"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 11 - BATEAU AU LOIN
    // =========================================================

    {
        id: "boat",
        title: "Tu aperçois un bateau au loin",
        category: "Espoir",
        icon: "🚢",

        description:
            "Un petit bateau passe au large de l'île. Il pourrait s'agir de ta seule chance de partir.",

        choices: [
            {
                id: "boat_fire",
                title: "🔥 Faire un grand feu",
                description: "Essayer d'attirer son attention avec de la fumée.",

                consequences: [
                    {
                        id: "boat_fire_good",
                        text:
                            "Le bateau semble changer légèrement de direction. Il t'a peut-être repéré.",
                        lives: 2,
                        icon: "🚢"
                    },

                    {
                        id: "boat_fire_bad",
                        text:
                            "Le feu devient beaucoup trop important et tu dois passer ton temps à l'éteindre.",
                        lives: -1,
                        icon: "🔥"
                    }
                ]
            },

            {
                id: "boat_swim",
                title: "🏊 Nager vers lui",
                description: "Une idée objectivement très ambitieuse.",

                consequences: [
                    {
                        id: "boat_swim_good",
                        text:
                            "Le bateau te remarque rapidement et vient dans ta direction.",
                        lives: 2,
                        icon: "🙌"
                    },

                    {
                        id: "boat_swim_bad",
                        text:
                            "Après plusieurs minutes, tu réalises que le bateau est beaucoup plus loin qu'il n'en avait l'air.",
                        lives: -2,
                        icon: "🥵"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 12 - ABEILLES
    // =========================================================

    {
        id: "bees",
        title: "Tu trouves une énorme ruche",
        category: "Nourriture",
        icon: "🐝",

        description:
            "La ruche déborde de miel. Elle déborde également d'abeilles.",

        choices: [
            {
                id: "bees_honey",
                title: "🍯 Prendre du miel",
                description: "Le risque semble acceptable.",

                consequences: [
                    {
                        id: "bees_honey_good",
                        text:
                            "Tu récupères du miel sans provoquer la colonie.",
                        lives: 2,
                        icon: "🍯"
                    },

                    {
                        id: "bees_honey_bad",
                        text:
                            "Les abeilles ne semblent absolument pas d'accord avec le concept de partage.",
                        lives: -2,
                        icon: "🐝"
                    }
                ]
            },

            {
                id: "bees_leave",
                title: "🚶 Partir",
                description: "Tu tiens beaucoup à ton visage actuel.",

                consequences: [
                    {
                        id: "bees_leave_good",
                        text:
                            "Pour une fois, tu prends une décision raisonnable.",
                        lives: 0,
                        icon: "😌"
                    },

                    {
                        id: "bees_leave_bad",
                        text:
                            "Une abeille te suit quand même et te pique juste avant ton départ.",
                        lives: -1,
                        icon: "😑"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 13 - FALAISE
    // =========================================================

    {
        id: "cliff",
        title: "Une falaise coupe ton itinéraire",
        category: "Exploration",
        icon: "⛰️",

        description:
            "Tu dois soit descendre la paroi, soit faire un détour à travers la jungle.",

        choices: [
            {
                id: "cliff_climb",
                title: "🧗 Descendre",
                description: "Tu trouves quelques prises dans la roche.",

                consequences: [
                    {
                        id: "cliff_climb_good",
                        text:
                            "Tu descends parfaitement et gagnes beaucoup de temps.",
                        lives: 1,
                        icon: "🧗"
                    },

                    {
                        id: "cliff_climb_bad",
                        text:
                            "Une pierre se détache et tu termines la descente beaucoup plus vite que prévu.",
                        lives: -2,
                        icon: "😵"
                    }
                ]
            },

            {
                id: "cliff_detour",
                title: "🌿 Faire le détour",
                description: "Long mais rassurant.",

                consequences: [
                    {
                        id: "cliff_detour_good",
                        text:
                            "Le détour est finalement très court.",
                        lives: 0,
                        icon: "👍"
                    },

                    {
                        id: "cliff_detour_bad",
                        text:
                            "Tu passes plusieurs heures à te frayer un passage dans la végétation.",
                        lives: -1,
                        icon: "🌿"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 14 - CRABE GÉANT
    // =========================================================

    {
        id: "giant_crab",
        title: "Un crabe gigantesque protège la plage",
        category: "Danger",
        icon: "🦀",

        description:
            "Un crabe anormalement gros se tient entre toi et une zone remplie de coquillages comestibles.",

        choices: [
            {
                id: "crab_fight",
                title: "🥊 L'affronter",
                description: "Ce n'est qu'un crabe... techniquement.",

                consequences: [
                    {
                        id: "crab_fight_good",
                        text:
                            "Tu remportes ce duel profondément ridicule et récupères de la nourriture.",
                        lives: 2,
                        icon: "🏆"
                    },

                    {
                        id: "crab_fight_bad",
                        text:
                            "Une pince géante se referme sur ton pied. Tu regrettes immédiatement ton arrogance.",
                        lives: -2,
                        icon: "🦀"
                    }
                ]
            },

            {
                id: "crab_distract",
                title: "🥥 Le distraire",
                description: "Tu lui lances une noix de coco.",

                consequences: [
                    {
                        id: "crab_distract_good",
                        text:
                            "Le crabe suit la noix de coco. Tu passes tranquillement.",
                        lives: 1,
                        icon: "😎"
                    },

                    {
                        id: "crab_distract_bad",
                        text:
                            "Le crabe ignore totalement la noix de coco et semble maintenant encore plus énervé.",
                        lives: -1,
                        icon: "😬"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 15 - SAC À DOS
    // =========================================================

    {
        id: "backpack",
        title: "Tu trouves un sac à dos abandonné",
        category: "Mystère",
        icon: "🎒",

        description:
            "Un sac à dos en bon état se trouve au milieu du chemin. Personne autour.",

        choices: [
            {
                id: "backpack_open",
                title: "🎒 L'ouvrir",
                description: "Il pourrait contenir quelque chose d'utile.",

                consequences: [
                    {
                        id: "backpack_open_good",
                        text:
                            "Tu trouves de l'eau, de la nourriture et quelques outils.",
                        lives: 2,
                        icon: "🎉"
                    },

                    {
                        id: "backpack_open_bad",
                        text:
                            "Une colonie entière d'insectes avait décidé d'en faire sa maison.",
                        lives: -1,
                        icon: "🪳"
                    }
                ]
            },

            {
                id: "backpack_leave",
                title: "🚫 Ne pas y toucher",
                description: "Un sac abandonné au milieu de nulle part ? Suspect.",

                consequences: [
                    {
                        id: "backpack_leave_good",
                        text:
                            "Quelques instants plus tard, tu vois un serpent sortir du sac.",
                        lives: 1,
                        icon: "🐍"
                    },

                    {
                        id: "backpack_leave_bad",
                        text:
                            "Tu ne sauras jamais si ce sac contenait exactement ce qu'il te fallait pour survivre.",
                        lives: 0,
                        icon: "🤔"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 16 - CASCADE
    // =========================================================

    {
        id: "waterfall",
        title: "Tu découvres une magnifique cascade",
        category: "Exploration",
        icon: "🏞️",

        description:
            "L'eau semble fraîche et parfaitement claire après plusieurs heures sous le soleil.",

        choices: [
            {
                id: "waterfall_drink",
                title: "💧 Boire",
                description: "Tu es complètement déshydraté.",

                consequences: [
                    {
                        id: "waterfall_drink_good",
                        text:
                            "L'eau est excellente. Tu récupères immédiatement de l'énergie.",
                        lives: 2,
                        icon: "💧"
                    },

                    {
                        id: "waterfall_drink_bad",
                        text:
                            "L'eau était moins pure qu'elle en avait l'air.",
                        lives: -2,
                        icon: "🤢"
                    }
                ]
            },

            {
                id: "waterfall_wait",
                title: "🔥 Faire bouillir l'eau",
                description: "Tu prends quelques précautions.",

                consequences: [
                    {
                        id: "waterfall_wait_good",
                        text:
                            "Tu obtiens de l'eau potable sans aucun problème.",
                        lives: 1,
                        icon: "☕"
                    },

                    {
                        id: "waterfall_wait_bad",
                        text:
                            "Tu renverses accidentellement ton récipient et dois tout recommencer.",
                        lives: 0,
                        icon: "😑"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 17 - BRUIT DANS LES BUISSONS
    // =========================================================

    {
        id: "bush_noise",
        title: "Quelque chose bouge dans les buissons",
        category: "Mystère",
        icon: "🌿",

        description:
            "Les feuilles bougent fortement juste devant toi. Impossible de voir ce qui se cache derrière.",

        choices: [
            {
                id: "bush_check",
                title: "👀 Aller voir",
                description: "La curiosité est visiblement plus forte que ton instinct.",

                consequences: [
                    {
                        id: "bush_check_good",
                        text:
                            "Ce n'était qu'un petit animal qui abandonne derrière lui quelques fruits.",
                        lives: 1,
                        icon: "🐇"
                    },

                    {
                        id: "bush_check_bad",
                        text:
                            "Un énorme varan surgit du buisson et te mord avant de repartir.",
                        lives: -2,
                        icon: "🦎"
                    }
                ]
            },

            {
                id: "bush_run",
                title: "🏃 Partir",
                description: "Tu ne veux absolument pas savoir.",

                consequences: [
                    {
                        id: "bush_run_good",
                        text:
                            "Un gros prédateur sort quelques secondes plus tard. Excellente décision.",
                        lives: 1,
                        icon: "😮‍💨"
                    },

                    {
                        id: "bush_run_bad",
                        text:
                            "Tu trébuches en courant et t'écrases par terre alors qu'il n'y avait qu'un lapin.",
                        lives: -1,
                        icon: "🐇"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 18 - REQUIN
    // =========================================================

    {
        id: "shark",
        title: "Un aileron apparaît près de toi",
        category: "Danger",
        icon: "🦈",

        description:
            "Tu es dans l'eau lorsque tu aperçois un aileron tourner lentement dans ta direction.",

        choices: [
            {
                id: "shark_swim",
                title: "🏊 Nager vers la plage",
                description: "Record personnel de natation en approche.",

                consequences: [
                    {
                        id: "shark_swim_good",
                        text:
                            "Tu atteins la plage à une vitesse que tu ne te connaissais pas.",
                        lives: 1,
                        icon: "🏖️"
                    },

                    {
                        id: "shark_swim_bad",
                        text:
                            "Le requin nage légèrement plus vite qu'un humain. Quelle surprise.",
                        lives: -3,
                        icon: "🦈"
                    }
                ]
            },

            {
                id: "shark_still",
                title: "🧍 Ne plus bouger",
                description: "Peut-être qu'il ne t'a pas remarqué.",

                consequences: [
                    {
                        id: "shark_still_good",
                        text:
                            "L'aileron s'éloigne. C'était probablement un petit requin inoffensif.",
                        lives: 0,
                        icon: "😮‍💨"
                    },

                    {
                        id: "shark_still_bad",
                        text:
                            "Il t'avait parfaitement remarqué.",
                        lives: -2,
                        icon: "😬"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 19 - VIEILLE BARQUE
    // =========================================================

    {
        id: "old_boat",
        title: "Tu découvres une vieille barque",
        category: "Exploration",
        icon: "🛶",

        description:
            "Une petite barque abandonnée se trouve sur la plage. Elle semble encore à peu près utilisable.",

        choices: [
            {
                id: "old_boat_use",
                title: "🛶 Partir avec",
                description: "Peut-être la solution pour quitter l'île.",

                consequences: [
                    {
                        id: "old_boat_use_good",
                        text:
                            "La barque flotte parfaitement et tu explores une nouvelle partie de la côte.",
                        lives: 2,
                        icon: "🌊"
                    },

                    {
                        id: "old_boat_use_bad",
                        text:
                            "Après quelques mètres, tu découvres un trou dans la coque.",
                        lives: -2,
                        icon: "🫧"
                    }
                ]
            },

            {
                id: "old_boat_break",
                title: "🪵 La démonter",
                description: "Le bois pourrait être utile pour ton camp.",

                consequences: [
                    {
                        id: "old_boat_break_good",
                        text:
                            "Tu récupères suffisamment de bois pour améliorer fortement ton abri.",
                        lives: 1,
                        icon: "🛖"
                    },

                    {
                        id: "old_boat_break_bad",
                        text:
                            "Un morceau de bois pourri casse et te tombe dessus.",
                        lives: -1,
                        icon: "🤕"
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 20 - TRÉSOR
    // =========================================================

    {
        id: "treasure",
        title: "Tu découvres un coffre enterré",
        category: "Mystère",
        icon: "🧰",

        description:
            "Un vieux coffre dépasse légèrement du sable. Il semble fermé depuis très longtemps.",

        choices: [
            {
                id: "treasure_open",
                title: "🔓 Forcer le coffre",
                description: "Tu ne vas quand même pas partir maintenant.",

                consequences: [
                    {
                        id: "treasure_open_good",
                        text:
                            "Le coffre contient du matériel, des provisions et une véritable trousse de secours.",
                        lives: 3,
                        icon: "💰"
                    },

                    {
                        id: "treasure_open_bad",
                        text:
                            "Le coffre était rempli de vieux déchets, mais tu réussis quand même à te couper avec une pièce métallique rouillée.",
                        lives: -2,
                        icon: "🩸"
                    }
                ]
            },

            {
                id: "treasure_leave",
                title: "🚶 Le laisser",
                description: "Les coffres mystérieux n'apportent jamais rien de bon dans les films.",

                consequences: [
                    {
                        id: "treasure_leave_good",
                        text:
                            "Quelques minutes plus tard, tu entends un mécanisme se déclencher derrière toi. Très bon choix.",
                        lives: 1,
                        icon: "😎"
                    },

                    {
                        id: "treasure_leave_bad",
                        text:
                            "Tu passes le reste de la journée à penser au trésor que tu viens peut-être d'abandonner.",
                        lives: 0,
                        icon: "😭"
                    }
                ]
            }
        ]
    }

];