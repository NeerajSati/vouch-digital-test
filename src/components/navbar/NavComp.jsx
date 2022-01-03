import React from "react";
import "./navcomp.css";
import { Navbar, Nav, Button } from "react-bootstrap";
function NavComp() {
  return (
    <Navbar className="navComp" bg="light" expand="sm">
      <Navbar.Brand href=".">
        <h1 style={{
          color: "#023047", marginLeft: "20px"}}>
          <strong>ATools<span style={{
            color: "red"}}>.</span></strong>
        </h1>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Button
            style={{
              backgroundColor: "#023047",
              border: "none",
              marginRight: "20px",
              width: "180px",
            }}
          >
            Start Free Trial
          </Button>
          <Button
            style={{
              backgroundColor: "#FB8500",
              border: "none",
              marginRight: "20px",
              width: "180px",
            }}
          >
            Login
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavComp;
