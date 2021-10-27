import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { NavHashLink } from 'react-router-hash-link';

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavHashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#experts">Experts</Nav.Link>
                        {user.email ? <button onClick={logOut} className="btn btn-danger me-2">Log Out</button>
                            : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.email && user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;