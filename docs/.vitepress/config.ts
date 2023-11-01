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
