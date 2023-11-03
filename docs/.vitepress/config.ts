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
              },
              {
                text: "Type de données Controller",
                collapsed: true,
                items: [
                  {
                    text: "POST - Types de données",
                    link: "/master/post-typedata",
                  },
                  {
                    text: "GET -  Types de données",
                    link: "/master/get-generate-typedata",
                  },
                ],
              },
              {
                text: "Durées Controller",
                collapsed: true,
                items: [
                  {
                    text: "GET - Durées",
                    link: "/master/get-durations",
                  },
                  {
                    text: "POST - Durées",
                    link: "/master/post-durations",
                  },
                ],
              },
              {
                text: "Local Controller",
                collapsed: true,
                items: [
                  {
                    text: "GET - Local",
                    link: "/master/get-local",
                  }
                ],
              },
              {
                text: "Uploader Controller",
                collapsed: true,
                items: [
                  {
                    text: "POST - Download fichier",
                    link: "/master/post-uploader",
                  },
                  {
                    text: "POST - Dossier",
                    link: "/master/post-folder",
                  },
                ],
              },
              {
                text: "User Controller",
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
                text: "Description de l'API",
                link: "/core/description",
              },
              {

                text: "Api Controller",
                collapsed: true,
                items: [
                  {
                    text: "GET - Liste des catégories de pack ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  Liste de branches",
                    link: "/core/durations",
                  }, {
                    text: "GET -  Information du partenaire connecté",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Liste des agences du partenaire",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  api_agency_edit",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - Liste des objets par branche",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - Liste des catégories de branche active",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - Recuperer les informations d\'un partenaire via son code",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - init_wave_payment",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - Initier un paiement via orange money",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Initier un paiement via cinetpay",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Créer un contrat externe depuis un devis",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  update_engines",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_contract_files",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_item_printable",
                    link: "/core/durations",
                  }, {
                    text: "GET -  check_payment_status",
                    link: "/core/durations",
                  }

                ]
              },
              {
                text: "Branches",
                collapsed: true,
                items: [

                  {
                    text: "Introduction",
                    link: "/core/branches/introduction",
                  },

                  {
                    text: "GET - Liste complète des branches",
                    link: "/core/branches/liste-des-branches",
                  },
                  {
                    text: "GET -  Activer/Désactiver une branche",
                    link: "/core/branches/activate",
                  }, {
                    text: "POST -  Actualiser l'orde d'affichage des branches",
                    link: "/core/branches/ranking",
                  },
                  {
                    text: "GET -  Récuperer les informations d'une branche",
                    link: "/core/branches/branch-info",
                  },
                  {
                    text: "GET -  Récuperer le moteur de calcul actif d'une branche",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Créer une branche",
                    link: "/core/branches/create-branche",
                  },
                  {
                    text: "GET -  Générer le fichier JSON d'une branche",
                    link: "/core/branches/generateJSON",
                  },
                  {
                    text: "GET -  Liste complète des catégories de branche",
                    link: "/core/branches/liste-des-categories",
                  },
                  {
                    text: "GET -  Modifier les informations d'une catégorie de branche",
                    link: "/core/branches/modify-category",
                  },
                  {
                    text: "GET -  Récuperer les objets d'une branche",
                    link: "/core/branches/get-objects",
                  }

                ]
              },
              {
                text: "Checkouts",
                collapsed: true,
                items: [
                  {
                    text: "GET - Gérer la réponse de paiement Cinetpay",
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
                    text: "GET - Renouveler un contrat",
                    link: "/core/contrats/renew-contract",
                  },
                  {
                    text: "GET -  Sauvegarder l'état d'un contrat",
                    link: "/core/contrats/save-contract-state",
                  },
                  {
                    text: "GET - Supprimer un contrat",
                    link: "/core/contrats/delete-contract",
                  },

                ],
              },
              {
                text: "Customer",
                collapsed: true,
                items: [
                  {
                    text: "GET - list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  search",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - get_data",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  load_account",
                  },
                  {
                    text: "GET - get_account_data",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - get_contrats",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - update",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - get_contrats",
                    link: "/core/durations",
                  },
                  {
                    text: "GET - get_avenant",
                    link: "/core/durations",
                  },

                ],
              },
              {
                text: "Demande d'attestation",
                collapsed: true,
                items: [
                  {
                    text: "GET - new",
                    link: "/core/api-controller",
                  },

                  {
                    text: "GET - new",
                    link: "/core/api-controller",
                  },


                ],
              },
              {
                text: "Engine",
                collapsed: true,
                items: [
                  {
                    text: "GET - edit engine argument",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - list engine ",
                    link: "/core/api-controller",
                  },

                  {
                    text: "GET - edit engine ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - set_active engine ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - generate_js ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - generate_php ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - generate_php_method ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - generate_js_method ",
                    link: "/core/api-controller",
                  },


                ],
              },
              {
                text: "Engine method",
                collapsed: true,
                items: [
                  {
                    text: "GET - set_user_data engine method ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - list global engine method ",
                    link: "/core/api-controller",
                  },

                  {
                    text: "GET - list list_branch_methods engine method ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - llist_branch_and_global_methods ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  /edit/{engineId}/{insurerSlug} ",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - /duplicate/{engineId}/{methodId}/{insurerId} ",
                    link: "/core/api-controller",
                  },

                  {
                    text: "GET - /editor",
                    link: "/core/api-controller",
                  }
                  ,
                  {
                    text: "GET - /remove/line/{id}",
                    link: "/core/api-controller",
                  }
                  , {
                    text: "GET - /toggle/show/in/details/{id}",
                    link: "/core/api-controller",
                  }
                  , {
                    text: "GET - delete_method",
                    link: "/core/api-controller",
                  }, {
                    text: "GET - get_data",
                    link: "/core/api-controller",
                  }
                ]
              },
              {
                text: "Engine method requirement",
                collapsed: true,
                items: [

                  {
                    text: "GET - edit",
                    link: "/core/api-controller",
                  }
                  , {
                    text: "GET - delete",
                    link: "/core/api-controller",
                  },
                ]
              },
              {
                text: "Garantie",
                collapsed: true,
                items: [

                  {
                    text: "GET - guarantee_edit",
                    link: "/core/api-controller",
                  }
                  , {
                    text: "GET - guarantee_update_ranks",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - guarantee_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - guarantee_delete",
                    link: "/core/api-controller",
                  }
                ]
              },

              {
                text: "Insurer",
                collapsed: true,
                items: [

                  {
                    text: "GET - insurer_edit",
                    link: "/core/api-controller",
                  }
                  , {
                    text: "GET - insurer_toggle_activation",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - insurer_get",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - insurer_get_browncards",
                    link: "/core/api-controller",
                  },

                  {
                    text: "GET - insurer_set_browncards_partner",
                    link: "/core/api-controller",
                  },

                  {
                    text: "GET - insurer_import_browcards",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - insurer_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - insurer_list_min",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - insurer_delete",
                    link: "/core/api-controller",
                  },


                ]
              },

              {
                text: "Item",
                collapsed: true,
                items: [
                  {
                    text: "GET - get_data",
                    link: "/core/api-controller",
                  },
                ],
              },

              {
                text: "Item property",
                collapsed: true,
                items: [
                  {
                    text: "GET - toggle_item_property_identifier",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - toggle_model_property_required",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - toggle_model_property_alias",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - toggle_model_property_devis",
                    link: "/core/api-controller",
                  },

                  {
                    text: "GET - edit_item_Property",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - edit_custom_item_Property",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - list_item_Property",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - item_property_update_ranks",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - delete_item_Property",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - item_type_delete_choice",
                    link: "/core/api-controller",
                  }
                ],
              },

              {
                text: "Item type",
                collapsed: true,
                items: [
                  {
                    text: "GET - item_type_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - item_type_property_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - item_type_edit",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - item_type_delete",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - item_update_ranks",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - generate_item_types",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - load_objects",
                    link: "/core/api-controller",
                  },

                ],
              },
              {
                text: "Categories de pack",
                collapsed: true,
                items: [
                  {
                    text: "GET - pack_category_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - pack_category_edit",
                    link: "/core/api-controller",
                  },

                ]
              },
              {
                text: "Pack",
                collapsed: true,
                items: [
                  {
                    text: "GET - one pack",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - pack_toggle_activation",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - pack_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET - pack_edit",
                    link: "/core/api-controller",
                  }
                  , {
                    text: "GET - pack_category_delete",
                    link: "/core/api-controller",
                  }

                ]
              },

              {
                text: "Pack file",
                collapsed: true,
                items: [
                  {
                    text: "GET - pack_file_delete",
                    link: "/core/api-controller",
                  },]
              },
              {
                text: "Partner",
                collapsed: true,
                items: [
                  {
                    text: "GET - partner_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  partner_top_list",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_get_hierarchy",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_agencies_list",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_toggle_activation",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_item_list",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_method_list",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_data",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_edit",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_delete",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  update_property_value",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  partner_generate",
                    link: "/core/durations",
                  }
                ],
              },
              {
                text: "Payment",
                collapsed: true,
                items: [
                  {
                    text: "GET - payment_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  receipt",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  order_list",
                    link: "/core/durations",
                  },

                  {
                    text: "GET -  process",
                    link: "/core/durations",
                  }
                  ,

                  {
                    text: "GET -  force_process",
                    link: "/core/durations",
                  }

                ],
              },
              {
                text: "Payment method",
                collapsed: true,
                items: [
                  {
                    text: "GET - list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  edit",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  toggle",
                    link: "/core/durations",
                  },
                ],
              },
              {
                text: "Premium detail",
                collapsed: true,
                items: [
                  {
                    text: "GET - premium_detail_model_list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  premium_detail_model_update_ranks",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  premium_detail_model_edit",
                    link: "/core/durations",
                  },
                ],
              },
              {
                text: "Printable",
                collapsed: true,
                items: [
                  {
                    text: "GET - preview",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  preview_eattestation",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  download",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  update_contract_policy_number",
                    link: "/core/durations",
                  }, {
                    text: "GET -  update_item_property",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  update_item_browncard",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  download_asaci",
                    link: "/core/durations",
                  }
                ],
              },
              {
                text: "Selfcare",
                collapsed: true,
                items: [
                  {
                    text: "GET - renew_contract_offers",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  renew_contract",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_avenant_payment_link",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_contracts",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_contract",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  /load/engine/{branchSlug}/{version}",
                    link: "/core/durations",
                  }
                ]
              },
              {
                text: "Service",
                collapsed: true,
                items: [
                  {
                    text: "GET - is_pack_category_valid",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  calculate_premium",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  update_versions",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_contract_files",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  save_avenant_signature",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  printable_preview",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_offers",
                    link: "/core/durations",
                  }, {
                    text: "GET -  get_order_data",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  init_data",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_comparator_data",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  get_comparator_datas",
                    link: "/core/durations",
                  }, {
                    text: "GET -  update_schema",
                    link: "/core/durations",
                  }
                ],
              },
              {
                text: "Transtator",
                collapsed: true,
                items: [
                  {
                    text: "GET - langList",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  saveUnknow",
                    link: "/core/durations",
                  },
                ],
              },
              {
                text: "Delivery",
                collapsed: true,
                items: [
                  {
                    text: "GET - list",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  emit",
                    link: "/core/durations",
                  },
                ],
              },
              {
                text: "Partenaire",
                collapsed: true,
                items: [
                  {
                    text: "GET - dashboard",
                    link: "/core/api-controller",
                  },


                ],
              },
              {
                text: "Data",
                collapsed: true,
                items: [
                  {
                    text: "GET - manager_dashboard",
                    link: "/core/api-controller",
                  },


                ],
              },
              {
                text: "Avenants",
                collapsed: true,
                items: [
                  {
                    text: "POST - Emmetre un avenant",
                    link: "/core/api-controller",
                  },
                  {
                    text: "GET -  Liste des avenants emis en une periode",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Liste des objets inclus dans un avenant",
                    link: "/core/durations",
                  },

                  {
                    text: "GET -  Télécharger la version pdf d'un devis d'avenant",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Recuperer les informations d\'un avenant",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Génère un lien de paiement pour un avenant",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  Liste de elements requis pour un contrat",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  contract_search",
                    link: "/core/durations",
                  },
                  {
                    text: "GET -  sendPaymentShort",
                    link: "/core/durations",
                  },



                ]
              },
              {
                text: "Uploader ",
                collapsed: true,
                items: [
                  {
                    text: "POST - File",
                    link: "core/uploader/post-file",
                  },


                ],
              },
            ],
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
                text: "Admin Controller",
                collapsed: true,
                items: [
                  {
                    text: "GET - Endpoints",
                    link: "/form/get-endpoints",
                  },
                ],
              },
              {
                text: "Api Controller",
                collapsed: true,
                items: [
                  {
                    text: "POST - Groupe de reponse",
                    link: "/form/post-cotation",
                  },
                  {
                    text: "GET -  Status GR",
                    link: "/form/get-rgstatus",
                  },
                  {
                    text: "GET -  Groupe de reponse",
                    link: "/form/get-rg",
                  },
                  {
                    text: "PUT - Mise à jour de devis",
                    link: "/form/put-devis",
                  },
                  {
                    text: "GET - Init cotation",
                    link: "/form/get-cotation-init",
                  },
                  {
                    text: "GET - Cotation",
                    link: "/form/get-cotation",
                  },
                  {
                    text: "PUT - Cotation",
                    link: "/form/put-cotation",
                  },
                  {
                    text: "GET - Survey",
                    link: "/form/get-survey",
                  },
                  {
                    text: "POST - Reponse",
                    link: "/form/post-reponse",
                  },
                  {
                    text: "POST - Reponse Groups",
                    link: "/form/post-reponse-groups",
                  },
                  {
                    text: "PUT - Alias",
                    link: "/form/put-alias",
                  },
                  {
                    text: "PUT - Secure Reponse Groups",
                    link: "/form/put-secure-reponse-groups",
                  },
                  {
                    text: "PUT - Cotation Step",
                    link: "/form/put-cotation-step",
                  },
                  {
                    text: "POST - Sub Reponse Groups",
                    link: "/form/post-sub-reponse-groups",
                  },
                  {
                    text: "POST - Sub Reponse Groups avec Id",
                    link: "/form/post-sub-reponse-groups-id",
                  },
                  {
                    text: "DELETE - Sub Reponse Groups avec Id",
                    link: "/form/delete-sub-reponse-groups-id",
                  },
                  {
                    text: "PUT - Cotation basculé vers comparé",
                    link: "/form/put-cotation-compare",
                  },
                  {
                    text: "POST - Devis",
                    link: "/form/post-devis",
                  },
                  {
                    text: "PUT - Devis Check",
                    link: "/form/put-devis-update",
                  },
                  {
                    text: "POST - Devis contrat externe",
                    link: "/form/post-devis-contrat-externe",
                  },
                  {
                    text: "GET - Devis",
                    link: "/form/get-devis-id",
                  },
                  {
                    text: "GET - Devis PDF",
                    link: "/form/get-devis-pdf",
                  },
                  {
                    text: "PUT - Devis Attente Paiement",
                    link: "/form/put-devis-attente-paiement",
                  },
                  {
                    text: "GET - Devis Status",
                    link: "/form/get-devis-status",
                  },
                  {
                    text: "GET - Devis Files",
                    link: "/form/get-devis-files",
                  },
                  {
                    text: "PUT - Devis Signature",
                    link: "/form/put-devis-signature",
                  },
                  {
                    text: "GET - Devis download PDF",
                    link: "/form/get-devis-download-pdf",
                  },
                ],
              },
            ]
          },
        ],
      },
    },

    // en: {
    //   label: "English",
    //   lang: "en",
    //   link: "/en/",
    //   title: "WiASSUR ERP V2",
    //   description: "Documentation for the WiASSUR ERP V2",

    //   themeConfig: {
    //     search: {
    //       provider: "local",
    //     },
    //     footer: {
    //       copyright: "Copyright © 2023 WiASSUR. All rights reserved.",
    //     },
    //     sidebar: [
    //       //   {
    //       //     text: "Home", 
    //       //     link: "/en/" ,
    //       //  },
    //       //  {
    //       //  text: "Authentification", 
    //       //  link: "/en/auth"
    //       //  },
    //       {
    //         text: "Master",
    //         collapsed: true,
    //         items: [
    //           //  {
    //           //    text: "Branche Configuration",
    //           //    collapsed: true,
    //           //    items: [
    //           //      {
    //           //        text: "Categorie",
    //           //        link: "/en/configuration/branche/category",
    //           //      },
    //           //      {
    //           //        text: "Branche",
    //           //        collapsed: true,
    //           //        items: [
    //           //          {
    //           //            text: "Formulaires",
    //           //            link: "/en/configuration/branche/branchItems/formulaire",
    //           //          },
    //           //          {
    //           //            text: "Objets",
    //           //            link: "/en/configuration/branche/branchItems/objet",
    //           //          },
    //           //          {
    //           //            text: "Garanties",
    //           //            link: "/en/configuration/branche/branchItems/garantie",
    //           //          },
    //           //          {
    //           //            text: "Moteur de calcul",
    //           //            link: "/en/configuration/branche/branchItems/moteur-calcul",
    //           //          },
    //           //          {
    //           //            text: "Détails de facture",
    //           //            link: "/en/configuration/branche/branchItems/detail-facture",
    //           //          },
    //           //        ],
    //           //      }
    //           //    ],
    //           //  },
    //           {
    //             text: "Api Controller",
    //             link: "/en/master/api-controller",
    //           },
    //           {
    //             text: "Durées",
    //             link: "/en/master/duree",
    //           },
    //           {
    //             text: "Platformes",
    //             link: "/en/master/platforme"
    //           },
    //           {
    //             text: "Assureurs",
    //             link: "/en/master/assureur"
    //           },
    //           {
    //             text: "Catégories de pack",
    //             link: "/en/master/category-pack"
    //           },
    //           {
    //             text: "Langues",
    //             link: "/en/master/langue"
    //           },
    //           {
    //             text: "Paramettre",
    //             link: "/en/master/param"
    //           },
    //         ],
    //       },
    //       {
    //         text: "Production",
    //         collapsed: true,
    //         items: [
    //           {
    //             text: "Cotations",
    //             link: "/en/production/cotation"
    //           },
    //           {
    //             text: "Comparateur",
    //             link: "/en/production/comparateur",
    //           },
    //           {
    //             text: "Paiements",
    //             link: "/en/production/paiement",
    //           },
    //           {
    //             text: "Livraisons",
    //             link: "/en/production/livraison"
    //           },
    //           {
    //             text: "Contrats",
    //             link: "/en/production/contrat"
    //           },
    //           {
    //             text: "Avenants",
    //             link: "/en/production/avenant"
    //           },
    //           {
    //             text: "Clients",
    //             link: "/en/production/client"
    //           },
    //           {
    //             text: "Livraison",
    //             link: "/en/production/livraison"
    //           },
    //           {
    //             text: "Apporteurs",
    //             link: "/en/production/apporteur"
    //           },
    //           {
    //             text: "Parrainages",
    //             link: "/en/production/parrainage"
    //           },
    //           {
    //             text: "Methode de paiements",
    //             link: "/en/production/methode-paiement"
    //           },
    //           {
    //             text: "Etats",
    //             link: "/en/production/etat"
    //           },
    //           {
    //             text: "Importer",
    //             link: "/en/production/import"
    //           },
    //           {
    //             text: "Statistic",
    //             link: "/en/production/statitic"
    //           },
    //         ],
    //       },
    //       {
    //         text: "Communication",
    //         collapsed: true,
    //         items: [
    //           {
    //             text: "Campagne automatique",
    //             link: "/en/communication/campagne-auto"
    //           },
    //           {
    //             text: "Comparateur",
    //             link: "/en/communication/campagne-manuel",
    //           },
    //           {
    //             text: "Users",
    //             link: "/en/communication/user",
    //           }
    //         ],
    //       },
    //       {
    //         text: "Administration",
    //         collapsed: true,
    //         items: [
    //           {
    //             text: "Utilisateurs",
    //             link: "/en/administration/user"
    //           },
    //           {
    //             text: "Tenants",
    //             link: "/en/administration/tenant",
    //           },
    //           {
    //             text: "Roles",
    //             link: "/en/administration/role",
    //           }
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
