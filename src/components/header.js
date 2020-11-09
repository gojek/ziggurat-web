/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {jsx, Grid, Box} from 'theme-ui'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0e0e0e`,
      marginBottom: `1.45rem`,
    }}
  >
    <Grid
      columns={[3, '3fr 0.3fr 0.3fr']}
      style={{
        padding: "40px",
        maxWidth: "100%",
      }}
    >
      <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `#54b67d`,
            textDecoration: `none`,
            fontFamily: "body"
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      </Box>
      <Box 
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
      }}>
        <h3 style={{ marginBottom: "0px", color: "white", fontFamily: "body"}}>
      <a href="#description"
        style={{
          textDecoration: "none",
          color: "white"
        }}>About</a>
        </h3>
      </Box>
      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
      }}>
      <h3 style={{ marginBottom: "0px", fontFamily: "body"}}>
        <a target="_blank" rel="noreferrer" href="https://github.com/gojek/ziggurat"
        style={{
          color: "white",
          textDecoration: "none",
        }}>Source</a>
        
      </h3>
      </Box>
    </Grid>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
