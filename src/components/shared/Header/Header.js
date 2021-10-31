import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar">
            <Container>
            <i class="fas fa-hotel icon me-2"></i>
            <Navbar.Brand className="fw-bold"><span>GUEST</span>erra.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="me-auto text-white">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
                {user?.email ? <NavLink to="/mybookings">My Bookings</NavLink>: ""}
                {user?.email ? <NavLink to="/manageallbookings">Manage All Bookings</NavLink> : ""}
                {user?.email ? <NavLink to="/addnewservice">Add A New Service</NavLink> : ""}
                </Nav>
                <Nav className="ms-auto">
                {
                    user?.email ?
                    <button onClick={logOut} className="btn btn-outline-light rounded-pill px-3">log out</button>
                    :
                    <Link to="/login">
                    <button className="btn  btn-outline-light rounded-pill px-3">log in</button>
                    </Link>
                }
                 <span className="ms-3 me-3 fw-bold fs-5 text-white">or</span>
                    <Link to="/signup">
                    <button className="btn btn-outline-light rounded-pill px-3">Sign-up</button>
                </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;

