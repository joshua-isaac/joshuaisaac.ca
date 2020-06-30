import React from "react"
import "../styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
