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
      columns={[3, '3fr 0.6fr 0.6fr']}
      sx={{
        padding: '5vh 5vw 5vh 5vw',
        maxWidth: "100%",
      }}
    >
      <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}>
      <h2 sx={{ margin: 0, fontSize: ['0.8rem','0.8rem','0.8rem','1.5rem'] }}>
        <Link
          to="/"
          sx={{
            color: `#31C38B`,
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
        <h3 sx={{ marginBottom: "0px", color: "white", fontFamily: "body", fontSize: ['0.8rem','0.8rem','0.8rem','1.5rem']}}>
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
      <h3 sx={{ marginBottom: "0px", fontFamily: "body", fontSize: ['0.8rem','0.8rem','0.8rem','1.5rem']}}>
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
