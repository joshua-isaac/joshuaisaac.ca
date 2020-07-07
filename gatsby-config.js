/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Joshua Isaac",
    description: "Freelance Web Developer in Toronto",
    siteUrl: "https://www.joshuaisaac.ca",
    image: "src/images/site-img.png",
    author: "Joshua Isaac",
    twitter: "https://twitter.com/joshuaisaaac",
    instagram: "https://www.instagram.com/joshu.a/",
    github: "https://github.com/joshua-isaac",
    linkedin: "https://www.linkedin.com/in/joshua-isaac/",
  },
  plugins: [
    // google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171781633-1",
        head: false,
        anonymize: true,
      },
    },
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
        remarkPlugins: [
          // Add target _blank to external links and defines an appropriate
          // link type of 'nofollow noopener noreferrer'
          require("remark-external-links"),
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
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
