// Leave it here just in case I change my mind and want to use navbar

import React from 'react'
import * as RbNavbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

const Navbar = () => (
  <BlindeteNavbar fixed="top" variant="dark">
    <Brand>Blindete</Brand>
    <Nav className="justify-content-end">
      <Nav.Link>About</Nav.Link>
    </Nav>
    <RbNavbar.Toggle aria-controls="responsive-navbar-nav" />
    <RbNavbar.Collapse
      id="responsive-navbar-nav"
      className="justify-content-end"
    >
      <Nav className="justify-content-end">
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </RbNavbar.Collapse>
  </BlindeteNavbar>
)

const BlindeteNavbar = styled(RbNavbar)`
  background-color: #723155;
`

const Brand = styled(NavbarBrand)`
  font-family: 'Lobster', cursive;
`

export default Navbar
