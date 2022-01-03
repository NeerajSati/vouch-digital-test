import React from 'react'
import './navcomp.css'
import { Navbar, Nav, Button } from 'react-bootstrap';
function NavComp() {
    return (
        <Navbar className="navComp" bg="light" expand="sm">
    <Navbar.Brand href="." className="ml-5"><h1 className="brand">ATools<span className='red'>.</span></h1></Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Button style={{backgroundColor:"#023047", border: "none"}}>Start Free Trial</Button>
      <Button style={{backgroundColor:"#FB8500", border: "none"}}>Login</Button>
      </Nav>
    </Navbar.Collapse>
</Navbar>
    )
}

export default NavComp
