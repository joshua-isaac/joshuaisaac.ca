import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
      <SEO title={`Home`} />
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
