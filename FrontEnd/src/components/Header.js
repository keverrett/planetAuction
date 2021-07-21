import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" variant='dark'>
                <Navbar.Brand>Planet Auction</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </header>
    )
}

export default Header
