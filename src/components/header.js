/** @jsx jsx */
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Grid, Box } from "theme-ui"

const Header = ({ siteTitle }) => {

  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <header
      style={{
        background: `#0e0e0e`,
        marginBottom: `1.45rem`,
      }}
    >
      <Grid
        columns={[3, "minmax(640px, 3fr) 0.6fr 0.6fr"]}
        sx={{
          padding: "7vh 7vw 0vh 7vw",
          paddingBottom: ["7vh", "7vh", "7vh", "7vh", "0vh"],
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: ["center", "center", "left", "left", "left"],
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
                color: `#31C38B`,
                textDecoration: `none`,
                fontFamily: "body",
              }}
            >
              {siteTitle}
            </Link>
          </h2>
        </Box>
        {width >= 640 && (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
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
          </>
        )}
      </Grid>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
