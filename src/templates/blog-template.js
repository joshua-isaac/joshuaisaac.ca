import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      body
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
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <section className="single-blog-container">
        <div className="small-wrapper">
          <span className="date">Posted on: {data.mdx.frontmatter.date}</span>
          <h1>{data.mdx.frontmatter.title}</h1>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate
