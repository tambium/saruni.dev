module.exports = {
  siteMetadata: {
    siteTitle: `Saruni`,
    siteDescription: `Saruni is a JavaScript web application framework that provides the foundational tooling startups need to write and release apps.`,
    siteUrl: `https://saruni.dev`,
    siteAuthor: `@tambium`,
    siteIcon: `/site-image.png`,
    siteImage: `/site-image.png`,
    siteLanguage: `en`,
    themeColor: `#B5B4FE`,
    basePath: `/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `src/content`,
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
