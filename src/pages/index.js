import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Joshua Isaac</title>
        <meta name="description" content="Freelance Web Developer Based in Toronto" />
      </Helmet>
      {/* <SEO title={`Joshua Isaac | Freelance Web Developer in Toronto`} image={} /> */}
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
