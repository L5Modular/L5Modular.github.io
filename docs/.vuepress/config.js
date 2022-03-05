const { path } = require('@vuepress/utils');

const ogprefix = 'og: http://ogp.me/ns#';
const lang = 'en-US';
const title = 'L5Modular';
const description = 'Keep Your Laravel App Organized';
const color = '#c8edd3';
const author = 'Artem Schander';
const url = 'https://l5modular.com';

module.exports = {
  lang,
  title,
  description,
  // configureWebpack: {
  //     resolve: {
  //         alias: {
  //             "@assets": "assets",
  //         },
  //     },
  // },
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/assets/favicon-vibrant.png` }],
    ['meta', { name: 'theme-color', content: color }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:url', content: url }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: `${url}/assets/og-vibrant.png` }],
    ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/assets/logo-no-borders-bicolor-vibrant.png` }],
    ['link', { rel: 'mask-icon', href: '/assets/logo-no-borders-bicolor-vibrant.svg', color: color }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/tile-vibrant.png' }],
    ['meta', { name: 'msapplication-TileColor', content: color }],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/assets/logo-no-borders-bicolor-vibrant.svg',
    // navbar: [{ text: 'Free Modules', link: 'https://share.l5modular.com' }],
    navbar: [
      // NavbarItem
      {
        text: 'Getting Started',
        link: '/getting-started/',
      },
      {
        text: 'Configuration',
        link: '/configuration/',
      },
    ],
    sidebar: ['/introduction/', '/getting-started/', '/usage/', '/artisan-commands/', '/configuration/'],
    repo: 'L5Modular/L5Modular',
    repoLabel: 'Contribute!',
    docsRepo: 'L5Modular/L5Modular.github.io',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
  },
  markdown: {
    lineNumbers: false,
  },
  alias: {
    '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
  },
  plugins: [
    // ['@vuepress/shiki', { theme: 'dark-plus' }]
    // ['@vuepress/shiki', { theme: 'slack-dark' }]
    ['@vuepress/shiki', { theme: 'one-dark-pro' }],
    // ['@vuepress/shiki', { theme: 'material-palenight' }]
    // ['@vuepress/shiki', { theme: 'dracula-soft' }]
    // ['@vuepress/shiki', { theme: 'nord' }]

    // ['@vuepress/plugin-search', {
    //   isSearchable: (page) => page.path !== '/',
    // }]

    ['@vuepress/docsearch', {
      apiKey: '731cf9a8fe07768e6c141e98be94b288',
      indexName: 'l5modular',
      appId: 'HVLD2HVW31',
      locales: {
        '/': {
          placeholder: 'Search',
          translations: {
            button: {
              buttonText: 'Search',
            },
          },
        },
      },
    }]
  ],
};
