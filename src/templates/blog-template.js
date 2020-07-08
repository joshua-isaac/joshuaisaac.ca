import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        category
      }
    }
    site {
      siteMetadata {
        github
        instagram
        linkedin
        twitter
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

const BlogPostTemplate = ({ data, pageContext }) => {
  console.log(pageContext)
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
        <title>{`${data.mdx.frontmatter.title} | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" conetnt={keywords} />
        <meta
          property="og:title"
          content={`${data.mdx.frontmatter.title} | ${title}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:local" content="en_US" />
        <meta property="og:url" content={siteUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content={author} />
        <meta
          property="twitter:title"
          content={`${data.mdx.frontmatter.title} | ${title}`}
        />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
        <link rel="canonical" href={siteUrl} />
        <html lang="en" />
      </Helmet>
      <Layout>
        <section className="single-blog-container">
          <div className="small-wrapper">
            <div className="top-back-btn">
              <Link to="/blog">
                <span role="img" aria-label="Arrow Emoji">
                  ⬅️
                </span>
                Back to blog
              </Link>
            </div>
            <h1>{data.mdx.frontmatter.title}</h1>
            <span className="date">{data.mdx.frontmatter.date}</span>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            <div className="bottom-back-btn">
              <Link to="/blog">
                <span
                  className="left-arrow"
                  role="img"
                  aria-label="Arrow Emoji"
                >
                  ⬅️
                </span>
                Back to blog
              </Link>
              {pageContext.next ? (
                <Link to={`/blog/${pageContext.next.frontmatter.slug}`}>
                  Next Post
                  <span
                    className="right-arrow"
                    role="img"
                    aria-label="Arrow Emoji"
                  >
                    ➡️
                  </span>
                </Link>
              ) : null}
              {/* {pageContext.next ? (
                <Link to={`blog/${pageContext.next.frontmatter.slug}`}>
                  Next Post
                </Link>
              ) : null} */}
            </div>
          </div>
        </section>
        <LetsWorkTogether />
      </Layout>
    </>
  )
}

export default BlogPostTemplate
