/** @jsx jsx */
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Box, Flex } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      sx={{
        padding: "7vh 7vw 0vh 7vw",
        paddingBottom: ["7vh", "7vh", "7vh", "7vh", "0vh"],
        maxWidth: "100%",
        justifyContent: ["center", "center", "left", "left", "left"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: ["center", "center", "left", "left", "left"],
          width: "65%",
        }}
      >
        <h2
          sx={{
            margin: 0,
            fontSize: ["1.7rem", "2rem", "1.5rem", "2rem", "1.8rem"],
          }}
        >
          <Link
            to="/"
            sx={{
              color: "primary",
              textDecoration: `none`,
              fontFamily: "body",
            }}
          >
            {siteTitle}
          </Link>
        </h2>
      </Box>
      <Box
        sx={{
          display: ["none", "none", "flex", "flex", "flex"],
          alignItems: "center",
          justifyContent: "flex-end",
          width: "10%",
        }}
      >
        <h3
          sx={{
            marginBottom: "0px",
            color: "white",
            fontFamily: "body",
            fontSize: ["0.8rem", "0.8rem", "1rem", "1.2rem", "1.3rem"],
          }}
        >
          <a
            href="#description"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            About
          </a>
        </h3>
      </Box>
      <Box
        sx={{
          display: ["none", "none", "flex", "flex", "flex"],
          alignItems: "center",
          justifyContent: "flex-end",
          width: "12%",
        }}
      >
        <h3
          sx={{
            marginBottom: "0px",
            fontFamily: "body",
            fontSize: ["0.8rem", "0.8rem", "1rem", "1.2rem", "1.3rem"],
          }}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gojek/ziggurat"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Source
          </a>
        </h3>
      </Box>
      <Box
        sx={{
          display: ["none", "none", "flex", "flex", "flex"],
          alignItems: "center",
          justifyContent: "flex-end",
          width: "10%",
        }}
      >
        <h3
          sx={{
            marginBottom: "0px",
            color: "white",
            fontFamily: "body",
            fontSize: ["0.8rem", "0.8rem", "1rem", "1.2rem", "1.3rem"],
          }}
        >
          <a
            href="/docs/concepts"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Docs
          </a>
        </h3>
      </Box>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
