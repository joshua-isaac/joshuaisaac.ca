import React from "react"
import { Link } from "gatsby"

const LetsWorkTogether = () => {
  return (
    <div className="lets-work-together">
      <div className="small-wrapper">
        <h3>
          Let's Work Together{" "}
          <span role="img" aria-label="Handshake Emoji">
            🤝
          </span>
        </h3>
        <p>
          The key to growing your brand or business starts with it’s online
          presence. Let’s bring it to life with a fast, modern and responsive
          website with remarkable user experience. Here’s how I can help you
          out:
        </p>
        <ul>
          <li>
            <span role="img" aria-label="Web Design & Development">
              🕸
            </span>{" "}
            Web Design & Development
          </li>
          <li>
            <span role="img" aria-label="E-Commerce">
              🛒
            </span>{" "}
            E-Commerce
          </li>
          <li>
            <span role="img" aria-label="Domain & Hosting Setup">
              🖥
            </span>{" "}
            Domain & Hosting Setup
          </li>
          <li>
            <span role="img" aria-label="SSL Certificates">
              🔒
            </span>{" "}
            SSL Certificates
          </li>
          <li>
            <span role="img" aria-label="Email Setup">
              ✉️
            </span>{" "}
            Email Setup
          </li>
          <li>
            <span role="img" aria-label="Search Engine Optimization (SEO)">
              🔍
            </span>{" "}
            Search Engine Optimization (SEO)
          </li>
        </ul>
        <div className="contact-btn">
          <Link to="/contact">Get Free Quote</Link>
        </div>
      </div>
    </div>
  )
}

export default LetsWorkTogether
