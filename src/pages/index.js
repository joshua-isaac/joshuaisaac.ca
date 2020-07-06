import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
      <SEO title={`Joshua Isaac | Freelance Web Developer in Toronto`} />
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
