import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
  style={{color:'#FF6E40' ,}}
  >
    <Navbar collapseOnSelect expand="lg" 
   >
      <Navbar.Brand href="#home">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "24px",
            letterSpacing: "6px",
            color:'#29434E'
          }}
        >
          GEOTRANS
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              to="/facebook"
              style={{
                color:'#FF6E40',
                textDecoration: `none`,
              }}
            >
              Facebook
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              to="/escritorio4k"
              style={{
                color:'#FF6E40',
                textDecoration: `none`,
              }}
            >
              PC
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              to="/celular"
              style={{
                color:'#FF6E40',
                textDecoration: `none`,
              }}
            >
              Celular
            </Link>
          </Nav.Link>

          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
     
       

        <Link
          to="/escritorios"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        escritorio
        </Link>

        <Link
          to="/celulares"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         celular
        </Link>



   
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
