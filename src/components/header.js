/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {jsx} from 'theme-ui'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0e0e0e`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
