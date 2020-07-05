import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        category
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  return (
    <>
      <SEO title={data.mdx.frontmatter.title} description={`yto`} />
      <Layout>
        <section className="single-blog-container">
          <div className="small-wrapper">
            <h1>{data.mdx.frontmatter.title}</h1>
            <span className="date">{data.mdx.frontmatter.date}</span>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BlogPostTemplate
