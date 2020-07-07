import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
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
  }
`

const BlogPostTemplate = ({ data, pageContext }) => {
  console.log(pageContext)
  return (
    <>
      <SEO title={data.mdx.frontmatter.title} description={`yto`} />
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
