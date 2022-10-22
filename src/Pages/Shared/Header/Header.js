import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {


const {user} = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect className="mb-4 py-2" expand="lg" bg="light" variant="light">
        <Container> 
          <Navbar.Brand className='fw-bold text-info'>
            <Link className='text-decoration-none' to="/"> Dragon News
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='d-flex align-items-center
            '>
              <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               {user?.photoURL ?
               <Image style={{height: '50px'}} roundedCircle src={user.photoURL} />
             :
              <FaUserAlt />
              }
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
        <LeftSideNav />

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;