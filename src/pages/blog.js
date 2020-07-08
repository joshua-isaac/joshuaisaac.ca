import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Helmet } from "react-helmet"

const Blog = () => {
  const data = useStaticQuery(BLOG_QUERY)
  const posts = data.allMdx.edges
  const {
    author,
    description,
    image,
    keywords,
    siteUrl,
    title,
  } = data.site.siteMetadata
  return (
    <>
      <Helmet>
        <title>{`Blog | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" conetnt={keywords} />
        <meta property="og:title" content={`Blog | ${title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:local" content="en_US" />
        <meta property="og:url" content={siteUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content={author} />
        <meta property="twitter:title" content={`Blog | ${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
        <link rel="canonical" href={siteUrl} />
        <html lang="en" />
      </Helmet>
      <Layout>
        <section className="blogs-container">
          <div className="small-wrapper">
            <h1>Blog Posts</h1>
            <div className="posts-list">
              {posts.map((post, i) => (
                <article key={i}>
                  <span className="date">
                    Posted on: {post.node.frontmatter.date}
                  </span>
                  <Link to={`/blog/${post.node.frontmatter.slug}`}>
                    <h3>{post.node.frontmatter.title}</h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Blog

const BLOG_QUERY = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            category
            image {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 90) {
                  src
                }
              }
            }
          }
          body
        }
      }
    }
    site {
      siteMetadata {
        description
        title
        siteUrl
        image
        keywords
        author
      }
    }
  }
`
