import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
     backgroundColor:'orange',
      marginBottom: `1.45rem`,
    }}
  >
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">

  <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily:'Montserrat',
            fontWeight:'bold',
            fontSize:'24px',
            letterSpacing:'6px'
          }}
        >
        GEOTRANS
  </Link>

    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
     
     
    </Nav>


     <Nav.Link>
    
      <Link
          to="/escritorios"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        escritorio
        </Link>

     
      </Nav.Link>
      <Nav.Link >
    
      <Link
          to="/celulares"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         celular
        </Link>

       
       

        </Nav.Link>
        <Nav.Link>
        <Link
          to="/sitioweb"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         sitioweb
        </Link>
        </Nav.Link>
        <Nav.Link>
        <Link
          to="/facebook"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         facebook
        </Link>
        </Nav.Link>
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
