import { defineConfig } from 'vitepress'




// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magma OnePay API V1",
  // description: "Api documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

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
  }
})
