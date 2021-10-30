import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" >
            <Container className="nav-bar">
            <Navbar.Brand className="text-dark">Guesterra</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <NavLink to="/myorders">My Orders </NavLink>
                <NavLink to="/manageallorders">Manage All Orders</NavLink>
                <NavLink to="/addnewservice">Add A New Service</NavLink>
                </Nav>
                <Nav>
                {
                    user?.email ?
                    <button onClick={logOut} className="btn rounded-pill">log out</button>
                    :
                    <Link to="/login">
                    <button className="btn btn-regular rounded-pill">log in</button>
                    </Link>
                }
                 <span className="ms-2 me-3 fw-bold fs-5 ">or</span>
                    <Link to="/signup">
                    <button className="btn rounded-pill">Sign-up</button>
                </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;