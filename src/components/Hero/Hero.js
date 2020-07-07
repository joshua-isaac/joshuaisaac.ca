import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(HERO_IMG_QUERY)
  const HeroImg = data.file.childImageSharp.fluid
  return (
    <BackgroundImage fluid={HeroImg} className={`hero`}>
      <div className="overlay">
        <div className="main-wrapper">
          <h1>
            Hey, I'm Joshua{" "}
            <span role="img" aria-label="waving emoji">
              👋🏽
            </span>
          </h1>
          <div className="tagline">
            <span>
              Frontend developer
              <Typist blink={true} startDelay={900}>
                breaking
                <Typist.Backspace count={8} delay={150} />
                building <span className="red">modern</span> websites.
              </Typist>
            </span>
          </div>
          <div className="actions">
            <div className="contact-btn">
              <Link to="/contact">Get In Touch</Link>
            </div>
            <div className="about-btn">
              <Link to="/about">About Me</Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero

const HERO_IMG_QUERY = graphql`
  query {
    file(relativePath: { eq: "hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
