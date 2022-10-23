import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  

const handleLogOut = () => {
  logOut()
  .then(() => {})
  .catch((error) => console.error(error))
}


  return (
    <Navbar
      collapseOnSelect
      className="mb-4 py-2"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand className="fw-bold text-info">
          <Link className="text-decoration-none" to="/">
            {" "}
            Dragon News
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >All News</Nav.Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="d-lg-flex align-items-center">
            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName} </span>

                  <button onClick={handleLogOut} className="btn btn-danger rounded ms-3">Log Out</button>
                  
                </>
              ) : (
                <>
                  <Link className="pe-1" to="/login"> 
                  <Button variant="primary">Login</Button>{' '}
                  </Link>

                  <Link to="/register"> 
                  <Button variant="success">Register</Button>{' '}
                  </Link>

                </>
              )}
            </>

            <Link className="ms-3"  to='/profile'>
              {user?.photoURL ? (

                <>
                 <Image
                  style={{ height: "50px" }}
                  roundedCircle
                  src={user?.photoURL} />

                </>
) : (
                <FaUserAlt />
              )}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
