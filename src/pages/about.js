import React from "react"
import Layout from "../components/Layout"
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Helmet } from "react-helmet"

import HTML from "../images/HTML.svg"
import SCSS from "../images/SCSS.svg"
import JS from "../images/JS.svg"
import PHP from "../images/PHP.svg"
import WORDPRESS from "../images/WORDPRESS.svg"
import WPENGINE from "../images/WPENGINE.svg"
import SHOPIFY from "../images/SHOPIFY.svg"
import REACT from "../images/REACT.svg"
import GATSBY from "../images/GATSBY.svg"
import GRAPHQL from "../images/GRAPHQL.svg"
import NETLIFY from "../images/NETLIFY.svg"
import TERMINAL from "../images/TERMINAL.svg"
import FIGMA from "../images/FIGMA.svg"
import VSCODE from "../images/VSCODE.svg"

const tools = [
  {
    name: "HTML",
    src: HTML,
  },
  {
    name: "SCSS",
    src: SCSS,
  },
  {
    name: "JavaScript",
    src: JS,
  },
  {
    name: "PHP",
    src: PHP,
  },
  {
    name: "WordPress",
    src: WORDPRESS,
  },
  {
    name: "WP Engine",
    src: WPENGINE,
  },
  {
    name: "Shopify",
    src: SHOPIFY,
  },
  {
    name: "React",
    src: REACT,
  },
  {
    name: "Gatsby",
    src: GATSBY,
  },
  {
    name: "GraphQL",
    src: GRAPHQL,
  },
  {
    name: "Netlify",
    src: NETLIFY,
  },
  {
    name: "Terminal",
    src: TERMINAL,
  },
  {
    name: "Figma",
    src: FIGMA,
  },
  {
    name: "VS Code",
    src: VSCODE,
  },
]

export const About = () => {
  const data = useStaticQuery(ABOUT_QUERY)
  const {
    author,
    description,
    image,
    keywords,
    siteUrl,
    title,
  } = data.site.siteMetadata
  const AboutImg = data.file.childImageSharp.fluid
  var settings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false,
  }
  return (
    <>
      <Helmet>
        <title>{`About | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" conetnt={keywords} />
        <meta property="og:title" content={`About | ${title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:local" content="en_US" />
        <meta property="og:url" content={siteUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content={author} />
        <meta property="twitter:title" content={`About | ${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
        <link rel="canonical" href={siteUrl} />
        <html lang="en" />
      </Helmet>
      <Layout>
        <section className="about-container">
          <div className="small-wrapper">
            <h1>About Me</h1>
            <Row>
              <Col lg={6}>
                <div className="about-content">
                  <p>
                    Hey there I'm Joshua, a frontend web developer experienced
                    in creating bespoke WordPress & Shopify themes.
                  </p>
                  <p>
                    Lately I've been extremely interested in the{" "}
                    <a
                      href="https://jamstack.org/"
                      target="blank"
                      rel="noopener no-referer"
                    >
                      JAMstack
                    </a>
                    , and delivering high performance websites by using modern
                    web technologies and architecture.
                  </p>
                  <p>
                    Still using monolithic solution for your website like
                    WordPress? I would love to help your business transition to
                    the JAMstack for a modern website that is faster, more
                    secure, scalable, SEO-friendly and cheaper to host!
                  </p>
                  <p>
                    Feel free to <Link to="/contact">contact</Link> me, or{" "}
                    <a
                      href="https://drive.google.com/file/d/1BG9adqckMTnFpQgfs-jbA3NV2ngfCyS-/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      download
                    </a>{" "}
                    my resume if you wanna hire me, thats cool too.
                  </p>

                  <p>
                    You can check out some of my work{" "}
                    <Link to="/projects">here</Link>.
                  </p>
                  <p>Aside from web development I enjoy:</p>
                  <ul>
                    <li>
                      <span role="img" aria-label="Pants Emoji">
                        👖
                      </span>{" "}
                      Thrift Shoppin’
                    </li>
                    <li>
                      <span role="img" aria-label="Film Emoji">
                        🎞
                      </span>{" "}
                      Film Photography
                    </li>
                    <li>
                      <span role="img" aria-label="Music Emoji">
                        🎵
                      </span>{" "}
                      House Music
                    </li>
                    <li>
                      <span role="img" aria-label="Tacos Emoji">
                        🌮
                      </span>{" "}
                      Tacos... Mmhm
                    </li>
                    <li>
                      <span role="img" aria-label="Travel Emoji">
                        ✈️
                      </span>{" "}
                      Travelling
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-img">
                  <BackgroundImage
                    fluid={AboutImg}
                    className={`img`}
                  ></BackgroundImage>
                  <p className="photo-credit">
                    Photo Credit:
                    <a
                      href="https://www.instagram.com/cascadasto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @cascadasto
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
            <div className="tools-slider">
              <h3>
                <span role="img" aria-label="Tools Emoji">
                  🛠
                </span>{" "}
                Tools & Tech
              </h3>
              <Slider {...settings}>
                {tools.map((tool, i) => (
                  <div className="slide">
                    <img src={tool.src} alt={`${tool.name} Icon`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <LetsWorkTogether />
      </Layout>
    </>
  )
}

export default About

const ABOUT_QUERY = graphql`
  query {
    file(relativePath: { eq: "about-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
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
