module.exports = {
  siteMetadata: {
    title: `Sam Leatherdale`,
    subtitle: `Programmer and Web Developer`,
    description: `Portfolio of Sam's web development projects.`,
    author: `Sam Leatherdale`,
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
    `gatsby-plugin-typescript`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `samleatherdale.github.io`,
        start_url: `/`,
        background_color: `#4b6dff`,
        theme_color: `#4b6dff`,
        display: `minimal-ui`,
        icon: `src/images/site-logo.png`, // This path is relative to the root of the site.
      },
    },
      `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     // Override the file regex for SASS
    //     sassRuleTest: /\.global\.s[ac]ss$/,
    //     // Override the file regex for CSS modules
    //     sassRuleModulesTest: /\.module\.s[ac]ss$/,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
