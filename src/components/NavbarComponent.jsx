import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';





const NavbarComponent = () => {
    return ( 
  < >
    <Navbar bg="danger" variant="dark">
    <Navbar.Brand ><img src="logo.png" alt=""  width="170"height="170"/></Navbar.Brand>
    <Nav className="me-auto">
      </Nav>
    </Navbar>
 </>
 );
}
 
export default NavbarComponent;