import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WiASSUR ERP V2",
  description: "Documentation pour l'ERP WiASSUR ERP V2",

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
                text: "Api Controller",
                collapsed: true,
                items: [
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

    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      title: "WiASSUR ERP V2",
      description: "Documentation for the WiASSUR ERP V2",

      themeConfig: {
        search: {
          provider: "local",
        },
        footer: {
          copyright: "Copyright © 2023 WiASSUR. All rights reserved.",
        },
        sidebar: [
        //   {
        //     text: "Home", 
        //     link: "/en/" ,
        //  },
        //  {
        //  text: "Authentification", 
        //  link: "/en/auth"
        //  },
         {
           text: "Master",
           collapsed: true,
           items: [
            //  {
            //    text: "Branche Configuration",
            //    collapsed: true,
            //    items: [
            //      {
            //        text: "Categorie",
            //        link: "/en/configuration/branche/category",
            //      },
            //      {
            //        text: "Branche",
            //        collapsed: true,
            //        items: [
            //          {
            //            text: "Formulaires",
            //            link: "/en/configuration/branche/branchItems/formulaire",
            //          },
            //          {
            //            text: "Objets",
            //            link: "/en/configuration/branche/branchItems/objet",
            //          },
            //          {
            //            text: "Garanties",
            //            link: "/en/configuration/branche/branchItems/garantie",
            //          },
            //          {
            //            text: "Moteur de calcul",
            //            link: "/en/configuration/branche/branchItems/moteur-calcul",
            //          },
            //          {
            //            text: "Détails de facture",
            //            link: "/en/configuration/branche/branchItems/detail-facture",
            //          },
            //        ],
            //      }
            //    ],
            //  },
            {
              text: "Api Controller",
              link: "/en/master/api-controller",
            },
             {
               text: "Durées",
               link: "/en/master/duree",
             },
             { text: "Platformes", 
               link: "/en/master/platforme" 
             },
             { text: "Assureurs", 
               link: "/en/master/assureur" 
             },
             { text: "Catégories de pack", 
               link: "/en/master/category-pack" 
             },
             { text: "Langues", 
               link: "/en/master/langue" 
             },
             { text: "Paramettre", 
               link: "/en/master/param" 
             },
           ],
         },
         {
           text: "Production",
           collapsed: true,
           items: [
             { 
               text: "Cotations", 
               link: "/en/production/cotation" 
             },
             {
               text: "Comparateur",
               link: "/en/production/comparateur",
             },
             {
               text: "Paiements",
               link: "/en/production/paiement",
             },
             { 
               text: "Livraisons", 
               link: "/en/production/livraison" 
             },
             { 
               text: "Contrats", 
               link: "/en/production/contrat" 
             },
             { 
               text: "Avenants", 
               link: "/en/production/avenant" 
             },
             { 
               text: "Clients", 
               link: "/en/production/client" 
             },
             { 
               text: "Livraison", 
               link: "/en/production/livraison" 
             },
             { 
               text: "Apporteurs", 
               link: "/en/production/apporteur" 
             },
             { 
               text: "Parrainages", 
               link: "/en/production/parrainage" 
             },
             { 
               text: "Methode de paiements", 
               link: "/en/production/methode-paiement" 
             },
             { 
               text: "Etats", 
               link: "/en/production/etat" 
             },
             { 
               text: "Importer", 
               link: "/en/production/import" 
             },
             { 
               text: "Statistic", 
               link: "/en/production/statitic" 
             },
           ],
         },
         {
           text: "Communication",
           collapsed: true,
           items: [
             { 
               text: "Campagne automatique", 
               link: "/en/communication/campagne-auto" 
             },
             {
               text: "Comparateur",
               link: "/en/communication/campagne-manuel",
             },
             {
               text: "Users",
               link: "/en/communication/user",
             }
           ],
         },
         {
           text: "Administration",
           collapsed: true,
           items: [
             { 
               text: "Utilisateurs", 
               link: "/en/administration/user" 
             },
             {
               text: "Tenants",
               link: "/en/administration/tenant",
             },
             {
               text: "Roles",
               link: "/en/administration/role",
             }
           ],
         },
        ],
      },
    },
  },
});
