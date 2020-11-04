module.exports = {
  pathPrefix: "/ziggurat-web",
  siteMetadata: {
    title: `Ziggurat`,
    description: `Redefining how you work with real time events, powering more than 250 applications at Gojek.`,
    author: `@rohanlekhwani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#54b67d`,
        theme_color: `#54b67d`,
        display: `minimal-ui`,
        icon: `src/images/logo-ziggurat.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
