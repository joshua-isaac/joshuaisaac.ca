import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Row, Col } from "react-bootstrap"
import SEO from "../components/SEO"

const Contact = () => {
  const data = useStaticQuery(CONTACT_QUERY)
  return (
    <>
      <SEO
        title={`Contact | Joshua Isaac Freelance Web Developer in Toronto`}
      />
      <Layout>
        <section className="contact-container">
          <div className="small-wrapper">
            <h1>Contact Me</h1>
            <div className="contact-content">
              <p>
                Would you like to know more about me, what I do or how I can
                help you? Fill out the form below or reach me at any of my
                socials and ill get back to you within 24 hours!
              </p>
              <ul>
                <li>
                  <a
                    href={data.site.siteMetadata.github}
                    aria-label="Github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href={data.site.siteMetadata.linkedin}
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href={data.site.siteMetadata.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={data.site.siteMetadata.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
              <Form
                name="contact"
                method="post"
                data-netlify="true"
                onSubmit="submit"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group as={Row}>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="name-input"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea">
                  <Form.Control
                    as="textarea"
                    rows="6"
                    name="message"
                    placeholder="Message..."
                    required
                  />
                </Form.Group>
                <div className="btn">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact

const CONTACT_QUERY = graphql`
  query {
    site {
      siteMetadata {
        github
        instagram
        linkedin
        twitter
      }
    }
  }
`
