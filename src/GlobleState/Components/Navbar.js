import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Navbars() {
  return (
    <div>
        <Navbar bg="info" expand="lg">
  <Container>
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to={'/'}>Home</Link>
        <Link to={'/counter'}>Counter</Link>
        <Link to = {'/employees'}>Employees</Link>
        <Link to = {'/users'}>users</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbars