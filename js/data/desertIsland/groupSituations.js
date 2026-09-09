export const GROUP_SITUATIONS = [

    // =========================================================
    // 1 - PROVISIONS
    // =========================================================
    {
        id: "group_supplies_exclusion",
        type: "group_vs_one",
        title: "{group} trouvent une caisse de provisions",
        category: "Conflit de groupe",
        icon: "🥫",

        description:
            "{group} découvrent une caisse remplie de nourriture, mais pensent que {target} ne mérite pas d'en avoir.",

        choices: [
            {
                id: "group_supplies_share",
                title: "🤝 Partager quand même",
                description: "Donner une part à {target}.",

                consequences: [
                    {
                        id: "group_supplies_share_good",
                        text:
                            "{target} apprécie le geste et révèle une réserve d'eau qu'il cachait.",
                        icon: "💧",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_supplies_share_bad",
                        text:
                            "{target} prend sa part sans remercier personne. Le groupe regrette son choix.",
                        icon: "😒",
                        effects: [
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_supplies_keep",
                title: "😈 Tout garder",
                description: "Ne rien donner à {target}.",

                consequences: [
                    {
                        id: "group_supplies_keep_good",
                        text:
                            "{group} se partagent les provisions pendant que {target} repart le ventre vide.",
                        icon: "🥫",
                        effects: [
                            { target: "others", lives: 1 },
                            { target: "target", lives: -1 }
                        ]
                    },
                    {
                        id: "group_supplies_keep_bad",
                        text:
                            "{target} revient pendant la nuit et détruit une partie des provisions.",
                        icon: "🔥",
                        effects: [
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 2 - ABRI
    // =========================================================
    {
        id: "group_shelter",
        type: "group_vs_one",
        title: "{group} construisent un abri",
        category: "Conflit de groupe",
        icon: "🛖",

        description:
            "{group} ont construit un excellent abri. {target} demande à venir dormir avec eux.",

        choices: [
            {
                id: "group_shelter_accept",
                title: "🤝 Accepter",
                description: "Faire une place à {target}.",

                consequences: [
                    {
                        id: "group_shelter_accept_good",
                        text:
                            "{target} améliore la toiture et tout le monde passe une excellente nuit.",
                        icon: "😴",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_shelter_accept_bad",
                        text:
                            "{target} prend toute la place et empêche le groupe de dormir correctement.",
                        icon: "😤",
                        effects: [
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_shelter_refuse",
                title: "🚫 Refuser",
                description: "Laisser {target} dormir dehors.",

                consequences: [
                    {
                        id: "group_shelter_refuse_good",
                        text:
                            "La nuit est calme. {group} dorment parfaitement.",
                        icon: "🌙",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_shelter_refuse_bad",
                        text:
                            "Une tempête arrive. {target} souffre toute la nuit dehors.",
                        icon: "⛈️",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 3 - FEU DE CAMP
    // =========================================================
    {
        id: "group_campfire",
        type: "group_vs_one",
        title: "{group} contrôlent le feu de camp",
        category: "Conflit de groupe",
        icon: "🔥",

        description:
            "{target} arrive frigorifié et demande à rejoindre le feu de {group}.",

        choices: [
            {
                id: "group_fire_accept",
                title: "🔥 Le laisser venir",
                description: "Partager la chaleur.",

                consequences: [
                    {
                        id: "group_fire_accept_good",
                        text:
                            "{target} apporte du bois sec et maintient le feu toute la nuit.",
                        icon: "🪵",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_fire_accept_bad",
                        text:
                            "{target} renverse accidentellement de l'eau sur le feu.",
                        icon: "💦",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_fire_refuse",
                title: "❄️ Refuser",
                description: "Garder le feu pour le groupe.",

                consequences: [
                    {
                        id: "group_fire_refuse_good",
                        text:
                            "{group} gardent toute la chaleur et passent une bonne nuit.",
                        icon: "😌",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_fire_refuse_bad",
                        text:
                            "{target} vole du bois pendant la nuit et affaiblit fortement le feu.",
                        icon: "🥷",
                        effects: [
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 4 - SOURCE D'EAU
    // =========================================================
    {
        id: "group_water_source",
        type: "group_vs_one",
        title: "{group} trouvent une source d'eau potable",
        category: "Conflit de groupe",
        icon: "💧",

        description:
            "{group} découvrent une source d'eau potable. {target} arrive avec sa gourde vide.",

        choices: [
            {
                id: "group_water_share",
                title: "💧 Partager",
                description: "Laisser {target} boire.",

                consequences: [
                    {
                        id: "group_water_share_good",
                        text:
                            "{target} aide ensuite à remplir toutes les gourdes.",
                        icon: "🤝",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_water_share_bad",
                        text:
                            "{target} boit beaucoup trop et vide presque toute la réserve.",
                        icon: "😬",
                        effects: [
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_water_block",
                title: "🚫 Interdire l'accès",
                description: "Garder la source pour le groupe.",

                consequences: [
                    {
                        id: "group_water_block_good",
                        text:
                            "{group} conservent suffisamment d'eau pour plusieurs jours.",
                        icon: "💧",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_water_block_bad",
                        text:
                            "{target} trouve une autre source avant tout le monde.",
                        icon: "😏",
                        effects: [
                            { target: "target", lives: 2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 5 - FRUITS
    // =========================================================
    {
        id: "group_fruits",
        type: "group_vs_one",
        title: "{group} trouvent un arbre rempli de fruits",
        category: "Conflit de groupe",
        icon: "🍎",

        description:
            "{group} trouvent des dizaines de fruits. {target} arrive juste au moment de la récolte.",

        choices: [
            {
                id: "group_fruits_share",
                title: "🍎 Partager",
                description: "Donner quelques fruits à {target}.",

                consequences: [
                    {
                        id: "group_fruits_share_good",
                        text:
                            "Les fruits sont délicieux et tout le monde reprend des forces.",
                        icon: "😋",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_fruits_share_bad",
                        text:
                            "Une partie des fruits était pourrie. Tout le monde tombe malade.",
                        icon: "🤢",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_fruits_keep",
                title: "😈 Tout garder",
                description: "Ne rien donner à {target}.",

                consequences: [
                    {
                        id: "group_fruits_keep_good",
                        text:
                            "{group} mangent tous les fruits tranquillement.",
                        icon: "😋",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_fruits_keep_bad",
                        text:
                            "{target} attire une bande de singes vers le stock de fruits.",
                        icon: "🐒",
                        effects: [
                            { target: "others", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 6 - RADEAU
    // =========================================================
    {
        id: "group_raft",
        type: "group_vs_one",
        title: "{group} terminent un radeau",
        category: "Conflit de groupe",
        icon: "🛶",

        description:
            "{group} ont construit un radeau, mais il n'y a presque plus de place pour {target}.",

        choices: [
            {
                id: "group_raft_take",
                title: "🛶 Embarquer {target}",
                description: "Prendre le risque d'être trop nombreux.",

                consequences: [
                    {
                        id: "group_raft_take_good",
                        text:
                            "Le radeau supporte parfaitement tout le monde.",
                        icon: "🌊",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_raft_take_bad",
                        text:
                            "Le poids est trop important et le radeau se retourne.",
                        icon: "💦",
                        effects: [
                            { target: "all", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "group_raft_leave",
                title: "👋 Laisser {target}",
                description: "Partir sans lui.",

                consequences: [
                    {
                        id: "group_raft_leave_good",
                        text:
                            "{group} naviguent sans difficulté.",
                        icon: "😎",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_raft_leave_bad",
                        text:
                            "{target} trouve une barque beaucoup plus solide quelques minutes plus tard.",
                        icon: "🚤",
                        effects: [
                            { target: "target", lives: 2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 7 - GROTTE
    // =========================================================
    {
        id: "group_cave",
        type: "group_vs_one",
        title: "{group} découvrent une grotte sécurisée",
        category: "Conflit de groupe",
        icon: "🪨",

        description:
            "{target} veut rejoindre {group} dans une grotte qui semble parfaitement protégée.",

        choices: [
            {
                id: "group_cave_accept",
                title: "🤝 Accepter",
                description: "Faire entrer {target}.",

                consequences: [
                    {
                        id: "group_cave_accept_good",
                        text:
                            "{target} découvre un passage vers une réserve de nourriture.",
                        icon: "🥫",
                        effects: [
                            { target: "all", lives: 2 }
                        ]
                    },
                    {
                        id: "group_cave_accept_bad",
                        text:
                            "{target} réveille accidentellement une colonie de chauves-souris.",
                        icon: "🦇",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_cave_refuse",
                title: "🚫 Refuser",
                description: "Fermer l'entrée à {target}.",

                consequences: [
                    {
                        id: "group_cave_refuse_good",
                        text:
                            "{group} passent une nuit parfaitement tranquille.",
                        icon: "😴",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_cave_refuse_bad",
                        text:
                            "{target} trouve une autre grotte avec davantage de provisions.",
                        icon: "🎉",
                        effects: [
                            { target: "target", lives: 2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 8 - SANGLIER
    // =========================================================
    {
        id: "group_boar",
        type: "group_vs_one",
        title: "Un sanglier charge {target}",
        category: "Décision de groupe",
        icon: "🐗",

        description:
            "{group} voient un sanglier foncer vers {target}. Ils peuvent intervenir ou le laisser se débrouiller.",

        choices: [
            {
                id: "group_boar_help",
                title: "🛡️ Aider {target}",
                description: "Attaquer le sanglier ensemble.",

                consequences: [
                    {
                        id: "group_boar_help_good",
                        text:
                            "{group} font fuir le sanglier et sauvent {target}.",
                        icon: "🏆",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_boar_help_bad",
                        text:
                            "Le sanglier panique et charge tout le monde.",
                        icon: "💥",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_boar_ignore",
                title: "👀 Regarder",
                description: "Laisser {target} gérer.",

                consequences: [
                    {
                        id: "group_boar_ignore_bad",
                        text:
                            "{target} se fait violemment percuter.",
                        icon: "🐗",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    },
                    {
                        id: "group_boar_ignore_good",
                        text:
                            "{target} esquive parfaitement et impressionne tout le monde.",
                        icon: "😎",
                        effects: [
                            { target: "target", lives: 1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 9 - ORAGE
    // =========================================================
    {
        id: "group_storm",
        type: "group_vs_one",
        title: "Une tempête approche du camp",
        category: "Décision de groupe",
        icon: "⛈️",

        description:
            "{group} sont à l'abri tandis que {target} est encore dehors sous une pluie torrentielle.",

        choices: [
            {
                id: "group_storm_help",
                title: "🛖 Faire entrer {target}",
                description: "Ouvrir l'abri.",

                consequences: [
                    {
                        id: "group_storm_help_good",
                        text:
                            "Tout le monde trouve suffisamment de place.",
                        icon: "😌",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_storm_help_bad",
                        text:
                            "L'abri est trop chargé et une partie du toit s'effondre.",
                        icon: "💥",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_storm_leave",
                title: "🚪 Fermer l'abri",
                description: "Laisser {target} dehors.",

                consequences: [
                    {
                        id: "group_storm_leave_good",
                        text:
                            "{group} restent parfaitement au sec.",
                        icon: "😴",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_storm_leave_bad",
                        text:
                            "{target} passe toute la nuit sous la tempête.",
                        icon: "🌧️",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 10 - MÉDICAMENT
    // =========================================================
    {
        id: "group_medkit",
        type: "group_vs_one",
        title: "{group} trouvent une trousse de secours",
        category: "Décision de groupe",
        icon: "🩹",

        description:
            "{group} trouvent quelques médicaments. {target} demande à en utiliser une partie.",

        choices: [
            {
                id: "group_medkit_share",
                title: "🩹 Donner des médicaments",
                description: "Soigner {target}.",

                consequences: [
                    {
                        id: "group_medkit_share_good",
                        text:
                            "{target} récupère rapidement.",
                        icon: "❤️‍🩹",
                        effects: [
                            { target: "target", lives: 2 }
                        ]
                    },
                    {
                        id: "group_medkit_share_bad",
                        text:
                            "Les médicaments étaient périmés.",
                        icon: "🤢",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_medkit_keep",
                title: "🔒 Garder les médicaments",
                description: "Les conserver pour le groupe.",

                consequences: [
                    {
                        id: "group_medkit_keep_good",
                        text:
                            "{group} utilisent les médicaments pour récupérer.",
                        icon: "❤️‍🩹",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_medkit_keep_bad",
                        text:
                            "{target} vole la trousse pendant la nuit.",
                        icon: "🥷",
                        effects: [
                            { target: "target", lives: 2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 11 - POISSON
    // =========================================================
    {
        id: "group_fish",
        type: "group_vs_one",
        title: "{group} attrapent plusieurs poissons",
        category: "Conflit de groupe",
        icon: "🐟",

        description:
            "{group} ont pêché suffisamment de poissons. {target} n'a participé à aucun effort.",

        choices: [
            {
                id: "group_fish_share",
                title: "🍽️ Partager",
                description: "Donner du poisson à {target}.",

                consequences: [
                    {
                        id: "group_fish_share_good",
                        text:
                            "Le repas est excellent et tout le monde reprend des forces.",
                        icon: "😋",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_fish_share_bad",
                        text:
                            "Les poissons sont contaminés.",
                        icon: "🤮",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_fish_refuse",
                title: "🚫 Ne rien donner",
                description: "Réserver le repas aux pêcheurs.",

                consequences: [
                    {
                        id: "group_fish_refuse_good",
                        text:
                            "{group} se régalent.",
                        icon: "🍽️",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_fish_refuse_bad",
                        text:
                            "{target} vole plusieurs poissons dès que le groupe tourne le dos.",
                        icon: "🥷",
                        effects: [
                            { target: "target", lives: 1 },
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 12 - CROCODILE
    // =========================================================
    {
        id: "group_crocodile",
        type: "group_vs_one",
        title: "{target} est encerclé par un crocodile",
        category: "Décision de groupe",
        icon: "🐊",

        description:
            "{group} voient {target} bloqué près de la rivière par un énorme crocodile.",

        choices: [
            {
                id: "group_crocodile_help",
                title: "🪨 Attaquer le crocodile",
                description: "Le distraire tous ensemble.",

                consequences: [
                    {
                        id: "group_crocodile_help_good",
                        text:
                            "Le crocodile fuit et {target} est sauvé.",
                        icon: "🏃",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_crocodile_help_bad",
                        text:
                            "Le crocodile se retourne contre le groupe.",
                        icon: "🐊",
                        effects: [
                            { target: "others", lives: -2 }
                        ]
                    }
                ]
            },

            {
                id: "group_crocodile_leave",
                title: "🚶 Partir",
                description: "Laisser {target} trouver une solution.",

                consequences: [
                    {
                        id: "group_crocodile_leave_good",
                        text:
                            "{target} parvient miraculeusement à s'enfuir.",
                        icon: "😮‍💨",
                        effects: []
                    },
                    {
                        id: "group_crocodile_leave_bad",
                        text:
                            "{target} est blessé en tentant de fuir.",
                        icon: "💥",
                        effects: [
                            { target: "target", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 13 - BANANES
    // =========================================================
    {
        id: "group_bananas",
        type: "group_vs_one",
        title: "{group} trouvent un énorme régime de bananes",
        category: "Conflit de groupe",
        icon: "🍌",

        description:
            "{target} arrive alors que {group} viennent de récupérer une énorme quantité de bananes.",

        choices: [
            {
                id: "group_bananas_share",
                title: "🍌 Partager",
                description: "Donner quelques bananes à {target}.",

                consequences: [
                    {
                        id: "group_bananas_share_good",
                        text:
                            "Tout le monde mange à sa faim.",
                        icon: "😋",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_bananas_share_bad",
                        text:
                            "Des singes repèrent le groupe et attaquent pour récupérer les bananes.",
                        icon: "🐒",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_bananas_keep",
                title: "😈 Tout garder",
                description: "Ne rien laisser à {target}.",

                consequences: [
                    {
                        id: "group_bananas_keep_good",
                        text:
                            "{group} mangent tranquillement toutes les bananes.",
                        icon: "🍌",
                        effects: [
                            { target: "others", lives: 1 }
                        ]
                    },
                    {
                        id: "group_bananas_keep_bad",
                        text:
                            "{target} provoque une invasion de singes avant de partir.",
                        icon: "🐒",
                        effects: [
                            { target: "others", lives: -2 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 14 - HAMAC
    // =========================================================
    {
        id: "group_hammock",
        type: "group_vs_one",
        title: "{target} dort tranquillement dans un hamac",
        category: "Décision de groupe",
        icon: "😴",

        description:
            "{group} découvrent {target} endormi dans le meilleur hamac du camp.",

        choices: [
            {
                id: "group_hammock_leave",
                title: "😇 Le laisser dormir",
                description: "Respecter le repos de {target}.",

                consequences: [
                    {
                        id: "group_hammock_leave_good",
                        text:
                            "{target} se réveille reposé et aide ensuite tout le groupe.",
                        icon: "🤝",
                        effects: [
                            { target: "all", lives: 1 }
                        ]
                    },
                    {
                        id: "group_hammock_leave_bad",
                        text:
                            "{target} dort toute la journée pendant que les autres travaillent.",
                        icon: "😤",
                        effects: [
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_hammock_prank",
                title: "🐝 Lui faire une blague",
                description: "Secouer violemment le hamac.",

                consequences: [
                    {
                        id: "group_hammock_prank_good",
                        text:
                            "{target} tombe dans le sable. Le groupe trouve ça extrêmement drôle.",
                        icon: "😂",
                        effects: [
                            { target: "target", lives: -1 }
                        ]
                    },
                    {
                        id: "group_hammock_prank_bad",
                        text:
                            "Le hamac casse et frappe plusieurs membres du groupe.",
                        icon: "💥",
                        effects: [
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    },


    // =========================================================
    // 15 - COFFRE
    // =========================================================
    {
        id: "group_treasure",
        type: "group_vs_one",
        title: "{group} trouvent un coffre mystérieux",
        category: "Conflit de groupe",
        icon: "🧰",

        description:
            "{group} découvrent un coffre rempli de matériel. {target} réclame une part du contenu.",

        choices: [
            {
                id: "group_treasure_share",
                title: "🤝 Partager le contenu",
                description: "Donner une part à {target}.",

                consequences: [
                    {
                        id: "group_treasure_share_good",
                        text:
                            "Le coffre contient suffisamment de matériel pour tout le monde.",
                        icon: "🎉",
                        effects: [
                            { target: "all", lives: 2 }
                        ]
                    },
                    {
                        id: "group_treasure_share_bad",
                        text:
                            "Une bouteille à l'intérieur était contaminée. Tout le monde tombe malade.",
                        icon: "🤢",
                        effects: [
                            { target: "all", lives: -1 }
                        ]
                    }
                ]
            },

            {
                id: "group_treasure_keep",
                title: "🔒 Garder le coffre",
                description: "Exclure complètement {target}.",

                consequences: [
                    {
                        id: "group_treasure_keep_good",
                        text:
                            "{group} gardent tout le matériel et améliorent leur équipement.",
                        icon: "🛠️",
                        effects: [
                            { target: "others", lives: 2 }
                        ]
                    },
                    {
                        id: "group_treasure_keep_bad",
                        text:
                            "{target} revient pendant la nuit et vole une partie du contenu.",
                        icon: "🥷",
                        effects: [
                            { target: "target", lives: 2 },
                            { target: "others", lives: -1 }
                        ]
                    }
                ]
            }
        ]
    }

];