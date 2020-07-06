import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error404 = () => {
  return (
    <>
      <SEO title={`Page Not Found`} />
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