import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WiASSUR ERP V2",
  description: "Documentation des API de l'entreprise WiASSUR ",

  lang: "fr",

  themeConfig: {
    footer: {
      copyright: "Copyright © 2023 WiASSUR. All rights reserved.",
    },
    search: {
      provider: "local",
    },
    logo: "/logo.png",
    siteTitle: "WiASSUR ERP V2",

    sidebar: [
      {
        text: "API Master",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "GET - Types de données",
                link: "/master/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/master/durations",
              },
            ],
          }
        ]
      },
      {
        text: "API Core",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "Description de l'API",
                link: "/core/description",
              },
              {
                text: "GET - Types de données",
                link: "/core/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/core/durations",
              },
            ],
          }
        ]
      },
      {
        text: "API Authentification",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "GET - Types de données",
                link: "/auth/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/auth/durations",
              },
            ],
          }
        ]
      },
      {
        text: "API Form",
        collapsed: true,
        items: [
          {
            text: "Api Controller",
            collapsed: true,
            items: [
              {
                text: "GET - Types de données",
                link: "/form/api-controller",
              },
              {
                text: "GET -  Durées",
                link: "/form/durations",
              },
            ],
          }
        ]
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  locales: {
    root: {
      title: "WiASSUR ERP V2",
      description: "Documentation pour l'ERP WiASSUR ERP V2",
      label: "Français",
      lang: "fr",
      themeConfig: {
        search: {
          provider: "local",
        },
        footer: {
          copyright: "Copyright © 2023 WiASSUR. All rights reserved.",
        },
        sidebar: [
          {
            text: "API Authentification",
            collapsed: true,
            items: [
              {
                text: "Description de l'API Authentication",
                link: "/auth/description",
              },
              {
                text: "Api",
                collapsed: true,
                items: [
                  {
                    text: "GET - Récupérer tous les managers d'une zone",
                    link: "/auth/api/get-manager",
                  },
                  {
                    text: "GET -  Récupérer un utilisateur d'une zone",
                    link: "/auth/api/get-user",
                  },
                  {
                    text: "GET -  Récupérer un utilisateur selon son code et son mail",
                    link: "/auth/api/get-user-code",
                  },
                  {
                    text: "GET -  Vérifier si un utilisateur GodFather",
                    link: "/auth/api/get-user-status-gf",
                  },
                  {
                    text: "GET -  Réinitialiser un mot de passe",
                    link: "/auth/api/get-pwd",
                  },
                  {
                    text: "PUT -  Mettre à jour un mot de passe",
                    link: "/auth/api/put-pwd",
                  },
                  {
                    text: "GET -  Récupérer tous les codes erreurs",
                    link: "/auth/api/get-error-codes",
                  },
                ],
              },
              {
                text: "Parrainage",
                collapsed: true,
                items: [
                  {
                    text: "POST - Récupérer tous les parrainages",
                    link: "/auth/parrainage/post-parrainage",
                  },
                ],
              },
              {
                text: "Partner Api",
                collapsed: true,
                items: [
                  {
                    text: "GET -  Récupérer un partenaire d'une zone",
                    link: "/auth/partner-api/get-user",
                  },
                  {
                    text: "GET - Récupérer tous les partenaires d'une zone",
                    link: "/auth/partner-api/get-partner",
                  },
                  {
                    text: "GET - Récupérer tous les partenaires d'une agence",
                    link: "/auth/partner-api/get-partner-agence",
                  },
                  {
                    text: "POST - Créer ou modifier un partenaire",
                    link: "/auth/partner-api/post-partner",
                  },
                ],
              },
              {
                text: "Partner",
                collapsed: true,
                items: [
                  {
                    text: "POST - Créer ou modifier un partenaire",
                    link: "/auth/partner/post-partner",
                  },
                  {
                    text: "GET - Récupérer tous les partenaires selon un code",
                    link: "/auth/partner/get-partner",
                  },
                ],
              },
              {
                text: "Role",
                collapsed: true,
                items: [
                  {
                    text: "GET - Récupérer un role",
                    link: "/auth/role/get-role",
                  },
                  {
                    text: "POST - Créer ou modifier un role",
                    link: "/auth/role/post-role",
                  },
                ],
              },
              {
                text: "Selfcare",
                collapsed: true,
                items: [
                  {
                    text: "POST - Créer un compte",
                    link: "/auth/selfcare/post-compte",
                  },
                  {
                    text: "GET - Vérifier si un compte est affilié",
                    link: "/auth/selfcare/get-check-affiliation",
                  },
                  {
                    text: "POST - Enregistrer un appareil",
                    link: "/auth/selfcare/post-device",
                  },
                  {
                    text: "GET - Récupérer un role",
                    link: "/auth/selfcare/get-role",
                  },
                  {
                    text: "GET - Récupérer le code d'un compte",
                    link: "/auth/selfcare/get-code-account",
                  },
                  {
                    text: "GET - Vérifier si un compte existe",
                    link: "/auth/selfcare/get-check-account",
                  },
                  {
                    text: "GET - Régénérer le code d'un compte",
                    link: "/auth/selfcare/get-refresh-code-account",
                  },
                  {
                    text: "GET - Réinitialiser le mot de passe",
                    link: "/auth/selfcare/get-reset-pwd",
                  },
                  {
                    text: "GET - Mettre à jour le mot de passe",
                    link: "/auth/selfcare/get-pwd",
                  },
                  {
                    text: "POST - Se connecter à un compte",
                    link: "/auth/selfcare/post-login",
                  },
                  {
                    text: "GET - Mot de passe oublié ",
                    link: "/auth/selfcare/get-fg-pwd",
                  },
                  {
                    text: "PUT - Mettre à jour le profile",
                    link: "/auth/selfcare/put-profil",
                  },
                ],
              },
            ]
          },
          {
            text: "API Master",
            collapsed: true,
            items: [
              {
                text: "Description de l'API Master",
                link: "/master/description",
              },
              {
                text: "Api",
                collapsed: true,
                items: [
                  {
                    text: "GET - Lister de Type de données",
                    link: "/master/get-type-data",
                  },
                  {
                    text: "GET -  Lister des  Durées",
                    link: "/master/durations",
                  },
                ],
              },
              {
                text: "Type de données",
                collapsed: true,
                items: [
                  {
                    text: "POST - Sauvegarder une listte de types de données",
                    link: "/master/post-typedata",
                  },
                  {
                    text: "GET -  Générer un fichier de Types de données",
                    link: "/master/get-generate-typedata",
                  },
                ],
              },
              {
                text: "Durées",
                collapsed: true,
                items: [
                  {
                    text: "GET - Lister des  Durées",
                    link: "/master/get-durations",
                  },
                  {
                    text: "POST/PUT - Créer/Modifier une Durée",
                    link: "/master/post-durations",
                  },
                ],
              },
              {
                text: "Uploader",
                collapsed: true,
                items: [
                  {
                    text: "POST - Upload de fichier",
                    link: "/master/post-uploader",
                  },
                  {
                    text: "POST - Création de dossier",
                    link: "/master/post-folder",
                  },
                ],
              },
              {
                text: "User",
                collapsed: true,
                items: [
                  {
                    text: "GET - User",
                    link: "/master/get-user",
                  }
                ],
              },
            ]
          },
          {
            text: "API Core",
            collapsed: true,
            items: [

              {
                text: "Description de l'API CORE",
                link: "/core/description",
              },
              // {

              //   text: "Api Controller",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "GET - Liste des catégories de pack ",
              //       link: "/core/api-controller",
              //     },
              //     {
              //       text: "GET -  Liste de branches",
              //       link: "/core/durations",
              //     }, {
              //       text: "GET -  Information du partenaire connecté",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Liste des agences du partenaire",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  api_agency_edit",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET - Liste des objets par branche",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET - Liste des catégories de branche active",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET - Recuperer les informations d\'un partenaire via son code",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET - init_wave_payment",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET - Initier un paiement via orange money",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Initier un paiement via cinetpay",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Créer un contrat externe depuis un devis",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  update_engines",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  get_contract_files",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  get_item_printable",
              //       link: "/core/durations",
              //     }, {
              //       text: "GET -  check_payment_status",
              //       link: "/core/durations",
              //     }

              //   ]
              // },
              // {
              //   text: "Branches",
              //   collapsed: true,
              //   items: [

              //     {
              //       text: "Introduction",
              //       link: "/core/branches/introduction",
              //     },

              //     {
              //       text: "GET - Liste complète des branches",
              //       link: "/core/branches/liste-des-branches",
              //     },
              //     {
              //       text: "GET -  Activer/Désactiver une branche",
              //       link: "/core/branches/activate",
              //     }, {
              //       text: "POST -  Actualiser l'orde d'affichage des branches",
              //       link: "/core/branches/ranking",
              //     },
              //     {
              //       text: "GET -  Récuperer les informations d'une branche",
              //       link: "/core/branches/branch-info",
              //     },
              //     {
              //       text: "GET -  Récuperer le moteur de calcul actif d'une branche",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Créer une branche",
              //       link: "/core/branches/create-branche",
              //     },
              //     {
              //       text: "GET -  Générer le fichier JSON d'une branche",
              //       link: "/core/branches/generateJSON",
              //     },
              //     {
              //       text: "GET -  Liste complète des catégories de branche",
              //       link: "/core/branches/liste-des-categories",
              //     },
              //     {
              //       text: "GET -  Modifier les informations d'une catégorie de branche",
              //       link: "/core/branches/modify-category",
              //     },
              //     {
              //       text: "GET -  Récuperer les objets d'une branche",
              //       link: "/core/branches/get-objects",
              //     }

              //   ]
              // },
              {
                text: "Checkouts",
                collapsed: true,
                items: [
                  {
                    text: "PUT - Gérer la réponse de paiement Cinetpay",
                    link: "/core/checkouts/manage-response-cinetpay",
                  },
                  {
                    text: "GET -  Gérer la réponse de paiement Orange",
                    link: "/core/checkouts/manage-response-orange",
                  },
                  {
                    text: "GET - Gérer la réponse de paiement Wave",
                    link: "/core/checkouts/manage-response-wave",
                  },
                  {
                    text: "GET -  Forcer le paiement d\'un avenant par un manager",
                    link: "/core/checkouts/force-payment",
                  },
                ],
              },
              {
                text: "Contrat",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des informations nécéssaire pour créer un contrat",
                    link: "/core/contrats/list-infos-for-create-contract",
                  },
                  {
                    text: "GET -  Recuperer les données d'un contrat",
                    link: "/core/contrats/get-contract-data",
                  },
                  {
                    text: "GET - Rechercher un contrat",
                    link: "/core/contrats/search-contract",

                  },
                  {
                    text: "POST -  Créer un contrat",
                    link: "/core/contrats/create-contract",
                  },
                  {
                    text: "PUT - Renouveler un contrat",
                    link: "/core/contrats/renew-contract",
                  },
                  {
                    text: "PUT -  Sauvegarder l'état d'un contrat",
                    link: "/core/contrats/save-contract-state",
                  },
                  {
                    text: "DELETE - Supprimer un contrat",
                    link: "/core/contrats/delete-contract",
                  },

                ],
              },
              {
                text: "Customer",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des customer",
                    link: "/core/customer/customer-list",
                  },
                  {
                    text: "GET -  Rechercher un customer",
                    link: "/core/customer/search-customer",
                  },
                  {
                    text: "GET - Recuperer les données d'un customer",
                    link: "/core/customer/get-data-customer",
                  },
                  {
                    text: "GET -  Recuperer les informations du compte d'un customer",
                    link: "/core/customer/load_account",
                  },
                  {
                    text: "GET - Recuperer les contrat du compte d'un customer",
                    link: "/core/customer/get-contrat-customer",
                  },
                  {
                    text: "PUT - Modifier les information d'un consumer",
                    link: "/core/customer/edit-customer",
                  },
                  {
                    text: "GET -  Recuperer les avenants d'un customer",
                    link: "/core/customer/get-avenant-customer",
                  },

                ],
              },
              {
                text: "Demande d'attestation",
                collapsed: true,
                items: [
                  {
                    text: "GET - Nouvelle demande d'attestation",
                    link: "/core/demande-attestation/new-request",
                  },

                ],
              },
              {
                text: "Engine",
                collapsed: true,
                items: [
                  {
                    text: "PUT - Modifier l'argument d'un moteur ",
                    link: "/core/engine/edit-engine-argument",
                  },
                  {
                    text: "GET - Recuperer la liste des moteurs ",
                    link: "/core/engine/get-list-engine",
                  },
                  {
                    text: "PUT - Modifier un moteur ",
                    link: "/core/engine/edit-engine",
                  },
                  {
                    text: "PUT - Activer/Desactiver un moteur ",
                    link: "/core/engine/activate-engine",
                  },
                  {
                    text: "POST - Construire un moteur en JS ",
                    link: "/core/engine/generatejs",
                  },
                  {
                    text: "POST -  Construire un moteur en PHP  ",
                    link: "/core/engine/generatephp",
                  },
                  {
                    text: "POST - Construire une methode en PHP ",
                    link: "/core/engine/generate-method-php",
                  },
                  {
                    text: "POST - Construire une methode en JS ",
                    link: "/core/engine/generate-method-js",
                  },


                ],
              },
              {
                text: "Engine method",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des methode des moteurs  ",
                    link: "/core/engine-method/list-method",
                  },
                  {
                    text: "GET - Liste global des methodes des moteurs  ",
                    link: "/core/engine-method/list-method-global",
                  },

                  {
                    text: "GET - Liste des branches des methodes ",
                    link: "/core/engine-method/list-branch-method",
                  },
                  {
                    text: "GET - Liste des branches des methodes globales ",
                    link: "/core/engine-method/list-branch-method-globlal",
                  },
                  {
                    text: "PUT - Modifier une methode",
                    link: "/core/engine-method/edit-methods",
                  },
                  {
                    text: "POST - Dupliquer une methode",
                    link: "/core/engine-method/duplicate-methods",
                  },

                  {
                    text: "POST - Editeur de methode",
                    link: "/core/engine-method/editor-method",
                  }
                  ,
                  {
                    text: "PUT - Retirer une ligne d'une methode",
                    link: "/core/engine-method/remove-line",
                  }
                  , {
                    text: "GET - Afficher les informations d'une methode",
                    link: "/core/engine-method/toggle-details",
                  }
                  , {
                    text: "DELETE - Supprimer une methode",
                    link: "/core/engine-method/delete-methods",
                  }, {
                    text: "GET - Information d'une methode",
                    link: "/core/engine-method/get-methods",
                  }
                ]
              },
              {
                text: "Engine method requirement",
                collapsed: true,
                items: [

                  {
                    text: "PUT - Modifier une exigence de methode",
                    link: "/core/engine-method-requirement/edit",
                  }
                  , {
                    text: "DELETE - Supprimer une exigence de methode",
                    link: "/core/engine-method-requirement/delete",
                  },
                ]
              },
              {
                text: "Garantie",
                collapsed: true,
                items: [

                  {
                    text: "PUT - Creer / Modifier une garantie",
                    link: "/core/garantee/edit",
                  }
                  , {
                    text: "PUT - Ordonner des garantie",
                    link: "/core/garantee/ranking",
                  },
                  {
                    text: "GET - Recuperer une liste de garantie",
                    link: "/core/garantee/list",
                  },
                  {
                    text: "DELETE - Supprimer une garantie",
                    link: "/core/garantee/delete",
                  }
                ]
              },

              {
                text: "Assureur",
                collapsed: true,
                items: [

                  {
                    text: "POST - Creer / Modifier un Assureur",
                    link: "/core/insurer/edit",
                  }
                  , {
                    text: "GET - Activer / Desactiver un Assureur",
                    link: "/core/insurer/activate",
                  },
                  {
                    text: "GET - Information de l'assureur",
                    link: "/core/insurer/info",
                  },
                  {
                    text: "GET - Get browncards insurer",
                    link: "/core/insurer/getbrowncards",
                  },

                  {
                    text: "PUT - Set browncards insurer partner",
                    link: "/core/insurer/set-brownscard-partner",
                  },

                  {
                    text: "GET - Import browncards for insurer",
                    link: "/core/insurer/import-browncard",
                  },
                  {
                    text: "GET - Liste des assureurs",
                    link: "/core/insurer/list",
                  },
                  {
                    text: "GET - Liste minimale des assureurs",
                    link: "/core/insurer/list-ranged",
                  },
                  {
                    text: "DELETE - Supprimer un assureur",
                    link: "/core/insurer/delete",
                  },


                ]
              },

              {
                text: "Item",
                collapsed: true,
                items: [
                  {
                    text: "GET - Information sur l'item",
                    link: "/core/item/get-data",
                  },
                ],
              },

              {
                text: "Item property",
                collapsed: true,
                items: [
                  {
                    text: "GET - Basculer l'Identifiant de la Propriété",
                    link: "/core/item-property/activate-identifier",
                  },
                  {
                    text: "GET - Basculer la nécessité de la propriété",
                    link: "/core/item-property/toggle-mode-required",
                  },
                  {
                    text: "GET - Basculer l'Alias de la Propriété",
                    link: "/core/item-property/toggle-model-alias",
                  },
                  {
                    text: "GET - Basculer l'Affichage sur les Devis",
                    link: "/core/item-property/toggle-model-devis",
                  },

                  {
                    text: "POST - Éditer la Propriété de l'Item",
                    link: "/core/item-property/edit-item-property",
                  },
                  {
                    text: "POST - Éditer la Propriété Personnalisée de l'Item",
                    link: "/core/item-property/edit-item-custom-property",
                  },
                  {
                    text: "GET -  Liste des Propriétés de l'Item",
                    link: "/core/item-property/list-item-property",
                  },
                  {
                    text: "POST - Mettre à Jour les Classements des Propriétés",
                    link: "/core/item-property/ranking",
                  },
                  {
                    text: "DELETE - Supprimer la Propriété de l'Item",
                    link: "/core/item-property/delete-item-property",
                  },
                  {
                    text: "DELETE - Supprimer le Choix de Propriété",
                    link: "/core/item-property/item-type-delete-choice",
                  }
                ],
              },

              {
                text: "Item type",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des Types d'Item",
                    link: "/core/item-type/item-type-list",
                  },
                  {
                    text: "GET - Liste des Propriétés du Type d'Item",
                    link: "/core/item-type/list-item-type-property",
                  },
                  {
                    text: "PUT - Modifier le Type d'Item",
                    link: "/core/item-type/edit-item-type",
                  },
                  {
                    text: "DELETE - Supprimer le Type d'Item",
                    link: "/core/item-type/delete-item-type",
                  },
                  {
                    text: "PUT - Mettre à Jour les Classements des Types d'Item",
                    link: "/core/item-type/ranking",
                  },
                  {
                    text: "POST - Générer les Types d'Item",
                    link: "/core/item-type/generate-item-type",
                  },
                  {
                    text: "GET - Charger les Objets",
                    link: "/core/item-type/load-object",
                  },

                ],
              },
              {
                text: "Categories de pack",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des Catégories de Pack",
                    link: "/core/pack-category/list",
                  },
                  {
                    text: "GET - pack_category_edit",
                    link: "/core/pack-category/edit",
                  },

                ]
              },
              {
                text: "Pack",
                collapsed: true,
                items: [
                  {
                    text: "GET - Informations sur le Pack",
                   link: "/core/pack/one-pack",
                  },
                  {
                    text: "PUT - Activer/Désactiver le Pack",
                   link: "/core/pack/pack-toggle-activation",
                  },
                  {
                    text: "GET - Liste des Packs",
                   link: "/core/pack/list",
                  },
                  {
                    text: "PUT - Modifier un Pack",
                   link: "/core/pack/edit",
                  }
                  , {
                    text: "DELETE - Supprimer un Pack",
                   link: "/core/pack/delete",
                  }

                ]
              },

              {
                text: "Fichier de pack",
                collapsed: true,
                items: [
                  {
                    text: "GET - Supprimer un Fichier de Pack",
                    link: "/core/pack-file/delete",
                  },]
              },
              {
                text: "Partenaire",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des Partenaires Actifs",
                    link: "/core/partner/list",
                  },
                  {
                    text: "GET -  Liste des Partenaires Principaux",
                    link: "/core/partner/top-list",
                  },
                  {
                    text: "GET -  Hiérarchie du Partenaire",
                    link: "/core/partner/list-hierarchy",
                  },
                  {
                    text: "GET -  Liste des Agences du Partenaire",
                    link: "/core/partner/partner-list-agencies",
                  },
                  {
                    text: "PUT -  Activer/Désactiver le Partenaire",
                    link: "/core/partner/partner-toggle-activate",
                  },
                  {
                    text: "GET -  Liste des Articles de Partenaires",
                    link: "/core/partner/partner-item-list",
                  },
                  {
                    text: "GET -  Liste des Méthodes de Paiement du Partenaire",
                    link: "/core/partner/partner-method-list",
                  },
                  {
                    text: "GET -  Données du Partenaire",
                    link: "/core/partner/info",
                  },
                  {
                    text: "POST -  Créer/Modifier un Partenaire",
                    link: "/core/partner/edit",
                  },
                  {
                    text: "DELETE -  Supprimer un Partenaire",
                    link: "/core/partner/delete",
                  },
                  {
                    text: "PUT -  Mettre à Jour la Valeur d'une Propriété",
                    link: "/core/partner/update-property-value",
                  },
                  {
                    text: "POST - Générer des Partenaires",
                    link: "/core/partner/partner-generate",
                  }
                ],
              },
              {
                text: "Paiement",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des Transactions de Paiement",
                    link: "/core/payment/list",
                  },
                  {
                    text: "GET -  Reçu",
                    link: "/core/payment/receipt",
                  },
                  {
                    text: "GET -  Liste des Paiements pour une Commande",
                    link: "/core/payment/order-list",
                  },

                  {
                    text: "POST -  Traitement de la Transaction",
                    link: "/core/payment/process",
                  }
                  ,

                  {
                    text: "POST -  Forcer le Traitement de la Transaction",
                    link: "/core/payment/force-process",
                  }

                ],
              },
              {
                text: "Listes des Methodes de Paiement",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des Méthodes de Paiement",
                    link: "/core/payment-method/list",
                  },
                  {
                    text: "POST -  Ajouter / Éditer une Méthode de Paiement",
                    link: "/core/payment-method/edit",
                  },
                  {
                    text: "PUT -  Activer/Désactiver la Méthode de Paiement",
                    link: "/core/payment-method/activate",
                  },
                ],
              },
              {
                text: "Premium detail",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des Modèles de Détails Premium",
                    link: "/core/premium-detail/list",
                  },
                  {
                    text: "POST -  Mettre à Jour les Classements des Modèles de Détails Premium",
                    link: "/core/premium-detail/rank",
                  },
                  {
                    text: "POST -  Modifier un Modèle de Détail Premium",
                    link: "/core/premium-detail/edit",
                  },
                ],
              },
              {
                text: "Impression",
                collapsed: true,
                items: [
                  {
                    text: "GET - Aperçu de l'Impression",
                    link: "/core/printable/preview",
                  },
                  {
                    text: "GET -  Aperçu de l'e-Attestation",
                     link: "/core/printable/preview-attestation",
                  },
                  {
                    text: "GET -  Télécharger le Fichier Imprimable",
                     link: "/core/printable/download",
                  },
                  {
                    text: "POST -  Mettre à Jour le Numéro de Police du Contrat",
                     link: "/core/printable/update-contract-number",
                  }, {
                    text: "POST -  Mettre à Jour la Propriété de l'Élément",
                     link: "/core/printable/update-item-property",
                  },
                  {
                    text: "POST -  Mettre à Jour la Carte Brune de l'Élément",
                     link: "/core/printable/update-item-brownc",
                  },
                  {
                    text: "GET -  Télécharger le document dans le format Asaci",
                     link: "/core/printable/download-asaci",
                  }
                ],
              },
              {
                text: "Selfcare",
                collapsed: true,
                items: [
                  {
                    text: "GET - Renouveler les offres de contrat",
                    link: "/core/selfcare/renew-contrat-offers",
                  },
                  {
                    text: "GET - Renouveler le contrat",
                    link: "/core/selfcare/renew-contrat",
                  },
                  {
                    text: "GET - Obtenir le lien de paiement pour l'avenant",
                    link: "/core/selfcare/get-avenant-payment-link",
                  },
                  {
                    text: "GET - Obtenir les contrats",
                    link: "/core/selfcare/get-contrats",
                  },
                  {
                    text: "GET - Obtenir un contrat ",
                    link: "/core/selfcare/get-contrat",
                  },
                  {
                    text: "GET - Charger le moteur",
                    link: "/core/selfcare/charge-engine",
                  }
                ]
              },
              // {
              //   text: "Service",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "GET - is_pack_category_valid",
              //       link: "/core/api-controller",
              //     },
              //     {
              //       text: "GET -  calculate_premium",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  update_versions",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  get_contract_files",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  save_avenant_signature",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  printable_preview",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  get_offers",
              //       link: "/core/durations",
              //     }, {
              //       text: "GET -  get_order_data",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  init_data",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  get_comparator_data",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  get_comparator_datas",
              //       link: "/core/durations",
              //     }, {
              //       text: "GET -  update_schema",
              //       link: "/core/durations",
              //     }
              //   ],
              // },
              // {
              //   text: "Transtator",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "GET - langList",
              //       link: "/core/api-controller",
              //     },
              //     {
              //       text: "GET -  saveUnknow",
              //       link: "/core/durations",
              //     },
              //   ],
              // },
              // {
              //   text: "Delivery",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "GET - list",
              //       link: "/core/api-controller",
              //     },
              //     {
              //       text: "GET -  emit",
              //       link: "/core/durations",
              //     },
              //   ],
              // },
              // {
              //   text: "Partenaire",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "GET - dashboard",
              //       link: "/core/api-controller",
              //     },


              //   ],
              // },
              // {
              //   text: "Data",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "GET - manager_dashboard",
              //       link: "/core/api-controller",
              //     },


              //   ],
              // },
              // {
              //   text: "Avenants",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "POST - Emmetre un avenant",
              //       link: "/core/api-controller",
              //     },
              //     {
              //       text: "GET -  Liste des avenants emis en une periode",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Liste des objets inclus dans un avenant",
              //       link: "/core/durations",
              //     },

              //     {
              //       text: "GET -  Télécharger la version pdf d'un devis d'avenant",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Recuperer les informations d\'un avenant",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Génère un lien de paiement pour un avenant",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  Liste de elements requis pour un contrat",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  contract_search",
              //       link: "/core/durations",
              //     },
              //     {
              //       text: "GET -  sendPaymentShort",
              //       link: "/core/durations",
              //     },



              //   ]
              // },
              // {
              //   text: "Uploader ",
              //   collapsed: true,
              //   items: [
              //     {
              //       text: "GET - dashbard",
              //       link: "/core/api-controller",
              //     },


              //   ],
              // },
            ],
          },
         
          {
            text: "API Form",
            collapsed: true,
            items: [
              {
                text: "Description de l'API Form",
                link: "/form/description",
              },
              {
                text: "Admin",
                collapsed: true,
                items: [
                  {
                    text: "GET - Endpoints",
                    link: "/form/admin/get-endpoints",
                  },
                ],
              },
              {
                text: "Api",
                collapsed: true,
                items: [
                  {
                    text: "POST - Groupe de reponse",
                    link: "/form/api/post-cotation",
                  },
                  {
                    text: "GET -  Status GR",
                    link: "/form/api/get-rgstatus",
                  },
                  {
                    text: "GET -  Groupe de reponse",
                    link: "/form/api/get-rg",
                  },
                  {
                    text: "PUT - Mise à jour de devis",
                    link: "/form/api/put-devis",
                  },
                  {
                    text: "GET - Init cotation",
                    link: "/form/api/get-cotation-init",
                  },
                  {
                    text: "GET - Cotation",
                    link: "/form/api/get-cotation",
                  },
                  {
                    text: "PUT - Cotation",
                    link: "/form/api/put-cotation",
                  },
                  {
                    text: "GET - Survey",
                    link: "/form/api/get-survey",
                  },
                  {
                    text: "POST - Reponse",
                    link: "/form/api/post-reponse",
                  },
                  {
                    text: "POST - Reponse Groups",
                    link: "/form/api/post-reponse-groups",
                  },
                  {
                    text: "PUT - Alias",
                    link: "/form/api/put-alias",
                  },
                  {
                    text: "PUT - Secure Reponse Groups",
                    link: "/form/api/put-secure-reponse-groups",
                  },
                  {
                    text: "PUT - Cotation Step",
                    link: "/form/api/put-cotation-step",
                  },
                  {
                    text: "POST - Sub Reponse Groups",
                    link: "/form/api/post-sub-reponse-groups",
                  },
                  {
                    text: "POST - Sub Reponse Groups avec Id",
                    link: "/form/api/post-sub-reponse-groups-id",
                  },
                  {
                    text: "DELETE - Sub Reponse Groups avec Id",
                    link: "/form/api/delete-sub-reponse-groups-id",
                  },
                  {
                    text: "PUT - Cotation basculé vers comparé",
                    link: "/form/api/put-cotation-compare",
                  },
                  {
                    text: "POST - Devis",
                    link: "/form/api/post-devis",
                  },
                  {
                    text: "PUT - Devis Check",
                    link: "/form/api/put-devis-update",
                  },
                  {
                    text: "POST - Devis contrat externe",
                    link: "/form/api/post-devis-contrat-externe",
                  },
                  {
                    text: "GET - Devis",
                    link: "/form/api/get-devis-id",
                  },
                  {
                    text: "GET - Devis PDF",
                    link: "/form/api/get-devis-pdf",
                  },
                  {
                    text: "PUT - Devis Attente Paiement",
                    link: "/form/api/put-devis-attente-paiement",
                  },
                  {
                    text: "GET - Devis Status",
                    link: "/form/api/get-devis-status",
                  },
                  {
                    text: "GET - Devis Files",
                    link: "/form/api/get-devis-files",
                  },
                  {
                    text: "PUT - Devis Signature",
                    link: "/form/api/put-devis-signature",
                  },
                  {
                    text: "GET - Devis download PDF",
                    link: "/form/api/get-devis-download-pdf",
                  },
                  {
                    text: "PUT - Livraison",
                    link: "/form/api/put-livraison",
                  },
                  {
                    text: "GET - Devis Online",
                    link: "/form/api/get-devis-online",
                  },
                  {
                    text: "GET - PDF",
                    link: "/form/api/get-pdf",
                  },
                ],
              },
              {
                text: "Data",
                collapsed: true,
                items: [
                  {
                    text: "GET - Groupe de reponse",
                    link: "/form/data/get-response-groupe",
                  },
                ],
              },
              {
                text: "Data Partner",
                collapsed: true,
                items: [
                  {
                    text: "GET - Groupe de reponse Partner",
                    link: "/form/data-partner/get-response-groupe",
                  },
                ],
              },
              {
                text: "Data Type",
                collapsed: true,
                items: [
                  {
                    text: "GET - Data Type",
                    link: "/form/data-type/get-data-type",
                  },
                ],
              },
              {
                text: "Mapping",
                collapsed: true,
                items: [
                  {
                    text: "GET - Lien",
                    link: "/form/mapping/get-lien",
                  },
                ],
              },
              {
                text: "Order",
                collapsed: true,
                items: [
                  {
                    text: "DELETE - Paiement",
                    link: "/form/order/delete-paiement",
                  },
                  {
                    text: "GET -  Livraison Paiement",
                    link: "/form/order/get-paiement-livraison",
                  },
                  {
                    text: "GET -  Livraison Paiement Current user",
                    link: "/form/order/get-paiement-livraison-current-user",
                  },
                  {
                    text: "GET -  Paiement",
                    link: "/form/order/get-paiement",
                  },
                  {
                    text: "PUT -  Annulation Paiement",
                    link: "/form/order/put-revoke-paiement",
                  },
                  {
                    text: "POST -  Envoi lien de Paiement",
                    link: "/form/order/post-send-link-paiement",
                  },
                ],
              },
              {
                text: "Plateforme",
                collapsed: true,
                items: [
                  {
                    text: "GET -  Plateforme",
                    link: "/form/platform/get-platform",
                  },
                  {
                    text: "GET -  Plateforme Formulaire",
                    link: "/form/platform/get-platform-formulaire",
                  },
                  {
                    text: "PUT -  Plateforme",
                    link: "/form/platform/put-platform",
                  },
                ],
              },
              {
                text: "Question",
                collapsed: true,
                items: [
                  {
                    text: "POST - Question Export",
                    link: "/form/question/post-question-export",
                  },
                  {
                    text: "GET -  Livraison Paiement",
                    link: "/form/question/get-paiement-livraison",
                  },
                  {
                    text: "GET -  Livraison Paiement Current user",
                    link: "/form/question/get-paiement-livraison-current-user",
                  },
                  {
                    text: "GET -  Paiement",
                    link: "/form/question/get-paiement",
                  },
                  {
                    text: "PUT -  Annulation Paiement",
                    link: "/form/question/put-revoke-paiement",
                  },
                  {
                    text: "POST -  Envoi lien de Paiement",
                    link: "/form/question/post-send-link-paiement",
                  },
                ],
              },
            ]
          },
        ],
      },
    },

  },
});
