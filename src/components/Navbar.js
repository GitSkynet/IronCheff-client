import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withAuth } from "../lib/AuthProvider";

class Navibar extends Component {


  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          {isLoggedin ? (
            <>
              <Nav className="mr-auto">
                <Nav.Link href="/private"> Profile{user.username}</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
            </>
            ) : (
              <>
                <Nav className="mr-auto">
                  <Nav.Link href="/login">Log In</Nav.Link>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
              </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withAuth(Navibar);
