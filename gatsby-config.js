/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Joshua Isaac",
    description: "Freelance Web Developer in Toronto",
    url: "https://www.joshuaisaac.ca",
    image: "",
    author: "Joshua Isaac",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
    github: "https://www.github.com",
    linkedin: "https://www.linkedin.com",
  },
  plugins: [
    // pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
      },
    },
    // projects
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects/`,
      },
    },
    // testimonials
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/src/content/testimonials/`,
      },
    },
    // images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // image helpers
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // mdx
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
        ],
      },
    },
    // SASS
    `gatsby-plugin-sass`,
    // PWA Support
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joshua Isaac`,
        short_name: `Joshua Isaac`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#e7301c`,
        display: `standalone`,
      },
    },
  ],
}
