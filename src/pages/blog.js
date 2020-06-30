import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(BLOG_QUERY)
  console.log(data)
  const posts = data.allMdx.edges
  return (
    <Layout>
      <section className="blogs-container">
        <div className="small-wrapper">
          <h1>Blog Posts</h1>
          <div className="posts-list">
            {posts.map((post, i) => (
              <article>
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
  }
`
