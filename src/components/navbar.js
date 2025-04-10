import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Mon Planificateur</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/destinations">Destinations</Nav.Link>
                        <Nav.Link href="/contact">Connexion</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
