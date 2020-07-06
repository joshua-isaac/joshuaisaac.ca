import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether"
import Testimonials from "../components/Testimonials/Testimonials"
import SEO from "../components/SEO"

const Projects = () => {
  const data = useStaticQuery(PROJECTS_QUERY)
  const projects = data.allMdx.edges
  return (
    <>
      <SEO
        title={`Projects | Joshua Isaac Freelance Web Developer in Toronto`}
      />
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
        <Testimonials />
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
  }
`
