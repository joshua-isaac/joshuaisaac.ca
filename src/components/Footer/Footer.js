import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(FOOTER_QUERY)
  return (
    <footer>
      <ul>
        <li>
          <a href={data.site.siteMetadata.github} aria-label="Github">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={data.site.siteMetadata.linkedin} aria-label="Linkedin">
            <FaLinkedinIn />
          </a>
        </li>
        {/* <li>
          <a href={data.site.siteMetadata.twitter} aria-label="Twitter">
            <FaTwitter />
          </a>
        </li> */}
        <li>
          <a href={data.site.siteMetadata.instagram} aria-label="Instagram">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <p className="copyright">© 2020 Joshua Isaac</p>
    </footer>
  )
}

export default Footer

const FOOTER_QUERY = graphql`
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
