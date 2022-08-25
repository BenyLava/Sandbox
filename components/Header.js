import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  
  
  
  
  return (
    <div>
    <Navbar className=" padding-0 bg-green navbar-dark d-flex align-items-start " collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="d-inline-block vertical-align-top padding-0 margin-0" href="/"><h2>Home</h2>{' '}</Navbar.Brand>
        <Navbar.Toggle classname="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className= "navbar-dark" id="basic-navbar-nav">
          <Nav className="ms-auto navbar-dark">
            
            <Nav.Link className="ms-auto text-light" href="/test1">One</Nav.Link>
            <Nav.Link className="ms-auto text-light" href="/test2">Two</Nav.Link>
            <Nav.Link className="ms-auto text-light" href="/test3">Three</Nav.Link>
            <Nav.Link className="ms-auto text-light" href="/test4">Four</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;