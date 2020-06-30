import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Form, Row, Col } from "react-bootstrap"

const Contact = () => {
  const data = useStaticQuery(CONTACT_QUERY)
  return (
    <Layout>
      <section className="contact-container">
        <div className="small-wrapper">
          <h1>Contact Me</h1>
          <div className="contact-content">
            <p>
              Would you like to know more about me, what I do or how I can help
              you? Even if you just want to say hello, or want to reccomend me a
              good taco joint. Fill out the form below or reach me at any of my
              socials and ill get back to you within 24 hours!
            </p>
            <ul>
              <li>
                <a href={data.site.siteMetadata.github} aria-label="Github">
                  Github
                </a>
              </li>
              <li>
                <a href={data.site.siteMetadata.linkedin} aria-label="Linkedin">
                  Linkedin
                </a>
              </li>
              <li>
                <a href={data.site.siteMetadata.twitter} aria-label="Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={data.site.siteMetadata.instagram}
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <Form>
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
              <Form.Group as={Row}>
                <Col lg={6} md={6}>
                  <Form.Control
                    as="select"
                    defaultValue="Select one"
                    className="select-input"
                  >
                    <option>Select one</option>
                    <option value="Web Design & Development">
                      Web Design & Development
                    </option>
                    <option value="E-commerce">E-Commerce</option>
                    <option value="Domain & Hosting Setup">
                      Domain & Hosting Setup
                    </option>
                    <option value="SSL Certificates">SSL Certificates</option>
                    <option value="Email Setup">Email Setup</option>
                    <option value="Search Engine Optimization (SEO)">
                      Search Engine Optimization (SEO)
                    </option>
                    <option value="Say Hello!">Say Hello!</option>
                    <option value="Reccomend A Taco Joint">
                      Reccomend A Taco Joint
                    </option>
                  </Form.Control>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Control
                  as="textarea"
                  rows="6"
                  name="message"
                  placeholder="Message..."
                />
              </Form.Group>
              <div className="btn">
                <button>Submit</button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
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
