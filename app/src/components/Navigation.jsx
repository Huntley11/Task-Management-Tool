import React from "react";
//import { Link } from "react-router-dom";
//==============
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown'; will use for adding action in main
//=============

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src="PlaceHolder" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="/get_started">Get Started</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}
//     <div className="topnav">
    //         <Link>
    //             <img src="https://placehold.co/100x100" alt="Logo"/> {/* Logo image still needed */}
    //         </Link>
    //         <div className="directory">
    //             <Link to="/get_started">Get Started</Link>
    //             <Link to="/home">Home</Link>
    //             <Link to="/about">About</Link>
    //         </div>
            
    //     </div>
    // )
export default Navigation