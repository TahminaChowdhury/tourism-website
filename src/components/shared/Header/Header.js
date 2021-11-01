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
            <i class="fas fa-hotel icon me-2 logo"></i>
            <Navbar.Brand className="fw-bold"><span className="logo fs-2">GUEST</span>erra.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="ms-auto text-white">
                <NavLink to="/login">Reservation</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
                {user?.email ? <NavLink to="/mybookings">My Bookings</NavLink>: ""}
                {user?.email ? <NavLink to="/manageallbookings">Manage All Bookings</NavLink> : ""}
                {user?.email ? <NavLink to="/addnewservice">Add New Service</NavLink> : ""}
                </Nav>
                
                <Nav className="ms-auto">
                <Navbar.Text className="me-3 fs-5 fw-bold text-white">
                    Signed in as: <span className="logo">{user?.displayName}</span> 
                </Navbar.Text>
                {
                    user?.email ?
                    <button onClick={logOut} className="rounded-pill px-3 py-2 btn-regular text-white">log out</button>
                    :
                    <Link to="/login">
                    <button className="rounded-pill px-3 py-2 btn-regular text-white">log in</button>
                    </Link>
                }
                 <span className="ms-3 me-3 fw-bold fs-5 text-white">or</span>
                    <Link to="/signup">
                    <button className=" rounded-pill px-3 py-2 btn-regular text-white">Sign-up</button>
                </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;

