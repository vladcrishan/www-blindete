module.exports = {
  siteMetadata: {
    title: `blindete`,
    description: `Bună, mă numesc Crișan Claudia Georgeta sunt o crescătoare de câini și pisici de rasă și din totdeauna am avut o pasiune pentru animale. Pe acest website veți putea găsi exemplare alese din câteva rase dragi mie.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#C0B283`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    }
  ]
}
