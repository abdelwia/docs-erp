import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magma OnePay API V1",
  description: "API Documentation for Magma OnePay",

  lang: "en",

  themeConfig: {
    footer: {
      copyright: "Copyright © 2023 Magmasend. All rights reserved.",
    },
    search: {
      provider: "local",
    },
    logo: "/logo.png",
    siteTitle: "Magma OnePay API V1",

    sidebar: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Auth",
        link: "/auth",
      },


      {
        text: "Payment",
        collapsed: true,
        items: [
          {
            text: "GET: Payment methods",
            link: "/payment/get-payment-methods",
          },
          {
            text: "POST: Payment initialization",
            link: "/payment/post-payment-initialization",
          },
          {
            text: "POST: Payment process",
            link: "/payment/post-payment-process",
          },
          { text: "GET: Payment status", link: "/payment/get-payment-status" },
        ],
      },
      {
        text: "Payout Services",
        collapsed: true,
        items: [
          { text: "Payout Services", link: "/payout/" },
          {
            text: "GET: Available methods",
            link: "/payout/get-available-methods",
          },
          {
            text: "POST: Execute transfer",
            link: "/payout/post-execute-transfer",
          },
          { text: "GET: Transfer status", link: "/payout/get-transfer-status" },
        ],
      },
      {
        text: "Webhook", link: "/webhook" 
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "Magma OnePay API V1",
      description: "API Documentation for Magma OnePay",

      themeConfig: {
        search: {
          provider: "local",
        },
        footer: {
          copyright: "Copyright © 2023 Magmasend. All rights reserved.",
        },
        sidebar: [
         {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Auth",
        link: "/auth",
      },

          {
            text: "Payment",
            collapsed: true,
            items: [
              {
                text: "GET: Payment methods",
                link: "/payment/get-payment-methods",
              },
              {
                text: "POST: Payment initialization",
                link: "/payment/post-payment-initialization",
              },
              {
                text: "POST: Payment process",
                link: "/payment/post-payment-process",
              },
              {
                text: "GET: Payment status",
                link: "/payment/get-payment-status",
              },
            ],
          },
          {
            text: "Payout Services",
            collapsed: true,
            items: [
              { text: "Payout Services", link: "/payout/" },
              {
                text: "GET: Available methods",
                link: "/payout/get-available-methods",
              },
              {
                text: "POST: Execute transfer",
                link: "/payout/post-execute-transfer",
              },
              {
                text: "GET: Transfer status",
                link: "/payout/get-transfer-status",
              },
            ],
          },
          {
           text: "Webhook", link: "/webhook" 
          },
        ],
      },
    },

    fr: {
      title: "Magma OnePay API V1",
      description: "Documentation de l'API Magma OnePay",
      label: "Français",
      lang: "fr",
      link: "/fr/",
      themeConfig: {
        search: {
          provider: "local",
        },
        footer: {
          copyright: "Copyright © 2023 Magmasend. All rights reserved.",
        },
        sidebar: [

    

          {
             text: "Introduction", link: "/fr/" ,
          },
          {
          text: "Authentification", link: "/fr/auth"
          },
          {
            text: "Paiement",
            collapsed: true,

            items: [
              {
                text: "GET: Méthodes de paiement",
                link: "/fr/payment/get-payment-methods",
              },
              {
                text: "POST: Initialisation du paiement",
                link: "/fr/payment/post-payment-initialization",
              },
              {
                text: "POST: Traitement du paiement",
                link: "/fr/payment/post-payment-process",
              },
              {
                text: "GET: Statut du paiement",
                link: "/fr/payment/get-payment-status",
              },
            ],
          },
          {
            text: "Services de Paiement",
            collapsed: true,
            items: [
              { text: "Services de Paiement", link: "/fr/payout/" },
              {
                text: "GET: Méthodes disponibles",
                link: "/fr/payout/get-available-methods",
              },
              {
                text: "POST: Effectuer un transfert",
                link: "/fr/payout/post-execute-transfer",
              },
              {
                text: "GET: Statut du transfert",
                link: "/fr/payout/get-transfer-status",
              },
            ],
          },
          {
             text: "Webhook", link: "/fr/webhook" 
          },
        ],
      },
    },
  },
});
