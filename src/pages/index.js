import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import { Helmet } from "react-helmet"

export default function Home() {
  const data = useStaticQuery(HOME_QUERY)
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
        <title>{`Joshua Isaac | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" conetnt={keywords} />
        <meta property="og:title" content={`Joshua Isaac | ${title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:local" content="en_US" />
        <meta property="og:url" content={siteUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content={author} />
        <meta property="twitter:title" content={`Joshua Isaac | ${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}

const HOME_QUERY = graphql`
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
