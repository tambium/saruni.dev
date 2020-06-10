const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://saruni.dev',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://saruni.dev/',
    title: 'Saruni Docs',
    githubUrl: 'https://github.com/tambium/saruni.dev',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Saruni', link: 'https://saruni.dev' }],
    frontline: false,
    ignoreIndex: true,
    title: 'Saruni',
  },
  siteMetadata: {
    title: 'Saruni',
    description: 'JavaScript web framework for progressive teams.',
    ogImage: null,
    docsLocation: 'https://github.com/tambium/saruni.dev/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Saruni Docs',
      short_name: 'SaruniDocs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
