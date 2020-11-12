/** @jsx jsx */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer
          sx={{
            width: "100vw",
            height: "10vh",
            maxWidth: "100%",
            background: "footer-background",
            marginTop: `2rem`,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "0px",
          }}
        >
          <p
            sx={{
              fontFamily: "body",
              textAlign: "center",
              marginBottom: "0px",
              fontSize: ["0.8rem", "1rem", "1rem", "1rem", "1rem"],
            }}
          >
            An open source project by gojek. Made with ❤️, ⚡️ and ☕️.
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
