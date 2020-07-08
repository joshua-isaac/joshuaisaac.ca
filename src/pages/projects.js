import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether"
import Testimonials from "../components/Testimonials/Testimonials"
import { Helmet } from "react-helmet"

const Projects = () => {
  const data = useStaticQuery(PROJECTS_QUERY)
  const projects = data.allMdx.edges
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
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" conetnt={keywords} />
        <meta property="og:title" content={`Projects | ${title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:local" content="en_US" />
        <meta property="og:url" content={siteUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content={author} />
        <meta property="twitter:title" content={`Projects | ${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
        <link rel="canonical" href={siteUrl} />
        <html lang="en" />
      </Helmet>
      <Layout>
        <section className="projects-container">
          <div className="small-wrapper">
            <h1>Projects</h1>
            <div className="projects-list">
              {projects.map((project, i) => (
                <div className="project" key={i}>
                  <Row>
                    <Col lg={6}>
                      <div className="project-content">
                        <a
                          href={project.node.frontmatter.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4>{project.node.frontmatter.title}</h4>
                        </a>
                        <span>{project.node.frontmatter.tools}</span>
                        <p>{project.node.frontmatter.description}</p>
                        <div className="link">
                          <a
                            href={project.node.frontmatter.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Site
                          </a>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="project-img">
                        <a
                          href={project.node.frontmatter.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Img
                            fluid={
                              project.node.frontmatter.image.childImageSharp
                                .fluid
                            }
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <Testimonials /> */}
        <LetsWorkTogether />
      </Layout>
    </>
  )
}

export default Projects

const PROJECTS_QUERY = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          frontmatter {
            title
            description
            tools
            link
            image {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 95) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
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
