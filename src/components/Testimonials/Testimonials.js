import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const data = useStaticQuery(TESTIMONIALS_QUERY)
  console.log(data)
  const testimonials = data.allMdx.edges
  const settings = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7500,
  }
  return (
    <section className="testimonials-container">
      <div className="small-wrapper">
        <div className="testimonial">
          <h3>
            Things people say...{" "}
            <span role="img" aria-label="Shouting Emoji">
              🗣
            </span>
          </h3>
          <Slider {...settings}>
            {testimonials.map((testimonial, i) => (
              <div className="slide" key={i}>
                <p>"{testimonial.node.frontmatter.text}"</p>
                <span className="name">
                  {testimonial.node.frontmatter.name} from{" "}
                  <a
                    href={testimonial.node.frontmatter.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {testimonial.node.frontmatter.company}
                  </a>
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

const TESTIMONIALS_QUERY = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "testimonial" } } }) {
      edges {
        node {
          frontmatter {
            name
            text
            company
            link
          }
        }
      }
    }
  }
`
