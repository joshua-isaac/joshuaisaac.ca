import React from "react"
import { motion, useCycle } from "framer-motion"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa"

const Header = () => {
  const data = useStaticQuery(HEADER_QUERY)
  const [open, setOpen] = useCycle(false, true)
  // set up menu
  const menu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/projects",
      title: "Projects",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ]
  // add sticky header
  typeof window !== "undefined" &&
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY
      const header = document.getElementById("header")
      const headerBtn = document.getElementsByClassName("header-btn")
      if (scroll >= 100) {
        header.classList.add("sticky")
        header.classList.add("rm-padding")
      } else {
        header.classList.remove("sticky")
        header.classList.remove("rm-padding")
      }
    })
  return (
    <>
      <motion.header animate={open ? "open" : "closed"} id="header">
        <motion.button
          className="header-btn"
          onClick={() => {
            setOpen()
            document.querySelector("body").classList.toggle("fixed")
          }}
          aria-label="Nav Button"
        >
          <motion.span
            className="menu-bar"
            variants={{
              closed: {
                rotate: 0,
                y: 0,
                transition: {
                  delay: 0.1,
                },
              },
              open: {
                rotate: -45,
                y: 6,
                transition: {
                  delay: 0.3,
                },
              },
            }}
          ></motion.span>
          <motion.span
            className="menu-bar"
            variants={{
              closed: {
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
              open: {
                opacity: 0,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          ></motion.span>
          <motion.span
            className="menu-bar"
            variants={{
              closed: {
                rotate: 0,
                y: 0,
                transition: {
                  delay: 0.1,
                },
              },
              open: {
                rotate: 45,
                y: -9,
                transition: {
                  delay: 0.3,
                },
              },
            }}
          ></motion.span>
        </motion.button>
        <motion.nav
          animate={open ? "open" : "closed"}
          variants={{
            closed: {
              top: "-100vh",
              height: "0",
              transition: {
                delay: 0.3,
                duration: 1,
              },
            },
            open: {
              top: "48px",
              height: "100vh",
              transition: {
                delay: 0.2,
                duration: 0.5,
              },
            },
          }}
        >
          <motion.ul
            variants={{
              open: {
                transition: { delayChildren: 0.5, staggerChildren: 0.25 },
              },
            }}
          >
            {menu.map((menuItem, i) => (
              <motion.li
                key={i}
                variants={{
                  closed: { y: 50, opacity: 0 },
                  open: { y: 0, opacity: 1, transition: { delay: 0.8 } },
                }}
              >
                <Link
                  to={menuItem.path}
                  onClick={() => {
                    setOpen(false)
                    document.querySelector("body").classList.remove("fixed")
                  }}
                >
                  {menuItem.title}
                </Link>
              </motion.li>
            ))}
            <motion.li
              variants={{
                closed: { y: 50, opacity: 0 },
                open: { y: 0, opacity: 1, transition: { delay: 0.8 } },
              }}
            >
              <ul className="socials">
                <li>
                  <a
                    href={data.site.siteMetadata.github}
                    aria-label="Github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href={data.site.siteMetadata.linkedin}
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href={data.site.siteMetadata.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href={data.site.siteMetadata.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </motion.header>
    </>
  )
}

export default Header

const HEADER_QUERY = graphql`
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
