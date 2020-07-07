import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaKeywords = keywords || [
          "Web Design",
          "Web Development",
          "Freelance",
          "WordPress",
          "Shopify",
          "Blog",
        ]
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.siteUrl
        const metaImage = image || data.site.siteMetadata.image
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                property: `twitter:creator`,
                content: metaAuthor,
              },
              {
                property: `twitter:title`,
                content: metaTitle,
              },
              {
                property: `twitter:description`,
                content: metaDescription,
              },
              {
                property: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          >
            <html lang="en" />
          </Helmet>
        )
      }}
    ></StaticQuery>
  )
}

export default SEO

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        image
        title
        twitter
        siteUrl
      }
    }
  }
`
