module.exports = {
  siteMetadata: {
    siteTitle: `Saruni Docs`,
    defaultTitle: `Saruni Docs`,
    siteTitleShort: `saruni-docs`,
    siteDescription: `Saruni is a Javascript web framework for progressive teams.`,
    siteUrl: `https://saruni.dev`,
    siteAuthor: `@tambium`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#D44F3E`,
    basePath: `/`,
    footer: `Enjoy Saruni!`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `src/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `src/config`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `SidebarItems`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
      },
    },
  ].filter(Boolean),
};
