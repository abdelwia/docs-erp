import { defineConfig } from 'vitepress'




// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magma OnePay API V1",
  
  // description: "Api documentation",

  lang:'en',

  themeConfig: {

    sidebar: [
      {

        items: [
          { text: 'Introduction', link: '/' },

        ]
      },
      {

        items: [
          { text: 'Auth', link: '/auth' },

        ]
      },
      {
        text: 'Payment',
        collapsed: true,
        items: [
          { text: 'GET: Payment methods', link: '/payment/get-payment-methods' },
          { text: 'POST: Payment initialization', link: '/payment/post-payment-initialization' },
          { text: 'POST: Payment process', link: '/payment/post-payment-process' },
          { text: 'GET: Payment status', link: '/payment/get-payment-status' },

        ]
      },
      {
        text: 'Payout Services',
        collapsed: true,
        items: [
          { text: 'Payout Services', link: '/payout/' },
          { text: 'GET: Available methods', link: '/payout/get-available-methods' },
          { text: 'POST: Execute transfer', link: '/payout/post-execute-transfer' },
          { text: 'GET: Transfer status', link: '/payout/get-transfer-status' },
        ]
      },
      {

        items: [
          { text: 'Webhook', link: '/webhook' },

        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },


  locales:{
  root:{
    label: 'English',
    lang: 'en',

    themeConfig: {

      sidebar: [
        {
  
          items: [
            { text: 'Introduction', link: '/en/' },
  
          ]
        },
        {
  
          items: [
            { text: 'Auth', link: '/en/auth' },
  
          ]
        },
        {
          text: 'Payment',
          collapsed: true,
          items: [
            { text: 'GET: Payment methods', link: '/en/payment/get-payment-methods' },
            { text: 'POST: Payment initialization', link: '/en/payment/post-payment-initialization' },
            { text: 'POST: Payment process', link: '/en/payment/post-payment-process' },
            { text: 'GET: Payment status', link: '/en/payment/get-payment-status' },
  
          ]
        },
        {
          text: 'Payout Services',
          collapsed: true,
          items: [
            { text: 'Payout Services', link: '/en/payout/' },
            { text: 'GET: Available methods', link: '/en/payout/get-available-methods' },
            { text: 'POST: Execute transfer', link: '/en/payout/post-execute-transfer' },
            { text: 'GET: Transfer status', link: '/en/payout/get-transfer-status' },
          ]
        },
        {
  
          items: [
            { text: 'Webhook', link: '/en/webhook' },
  
          ]
        },
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },
  },

  fr:{
    label: 'Français',
    lang: 'fr',
    link: '/fr/',
    themeConfig: {

      sidebar: [
        {
  
          items: [
            { text: 'Introduction', link: '/fr/' },
  
          ]
        },
        {
  
          items: [
            { text: 'Auth', link: '/fr/auth' },
  
          ]
        },
        {
          text: 'Payment',
          collapsed: true,
        
          items: [
            { text: 'GET: Payment methods', link: '/fr/payment/get-payment-methods' },
            { text: 'POST: Payment initialization', link: '/fr/payment/post-payment-initialization' },
            { text: 'POST: Payment process', link: '/fr/payment/post-payment-process' },
            { text: 'GET: Payment status', link: '/fr/payment/get-payment-status' },
  
          ]
        },
        {
          text: 'Payout Services',
          collapsed: true,
          items: [
            { text: 'Payout Services', link: '/fr/payout/' },
            { text: 'GET: Available methods', link: '/fr/payout/get-available-methods' },
            { text: 'POST: Execute transfer', link: '/fr/payout/post-execute-transfer' },
            { text: 'GET: Transfer status', link: '/fr/payout/get-transfer-status' },
          ]
        },
        {
  
          items: [
            { text: 'Webhook', link: '/fr/webhook' },
  
          ]
        },
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },
  }
  }
})
