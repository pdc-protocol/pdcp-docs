import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Personal data control protocol",
  description: "The official PDCP documentation",
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
  },
  themeConfig: {
    siteTitle: 'PDCP Documentation',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/en/reference/introduction' },
    ],

    sidebar: [
      {
        text: 'Reference',
        items: [
          { text: 'Introduction', link: '/en/reference/introduction' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
