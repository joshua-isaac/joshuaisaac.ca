import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const Error404 = () => {
  const data = useStaticQuery(ERROR_QUERY)
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
        <title>{`Page Not Found | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" conetnt={keywords} />
        <meta property="og:title" content={`Page Not Found | ${title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:local" content="en_US" />
        <meta property="og:url" content={siteUrl} />
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Layout>
        <div className="error-404">
          <h1>404</h1>
          <p>Go home, you're drunk.</p>
          <div className="link">
            <Link to="/">Return Home</Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Error404

const ERROR_QUERY = graphql`
  query {
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
