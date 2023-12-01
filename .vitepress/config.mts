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
          { text: 'Records file reference', collapsed: true , items: [
              { text: 'Overview', link: '/en/reference/record-file/overview'},
              { text: 'Top-level keywords', collapsed: true, items: [
                  { text: 'Projects top-level keyword', link: '/en/reference/record-file/keywords/projects' },
                  { text: 'Data top-level keyword', link: '/en/reference/record-file/keywords/data' },
                  { text: 'Adapter top-level keyword', link: '/en/reference/record-file/keywords/adapter' },
                  { text: 'Purposes top-level keyword', link: '/en/reference/record-file/keywords/purposes' },
                ]},
            ] }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
