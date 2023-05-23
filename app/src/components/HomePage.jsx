import React from "react";

import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import Footer from "./Footer";
// I beleive Huntly is in charge of this page

function HomePage() {
    return (
        <div>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
            </Nav>
            <h6>Team: Killer Bass</h6>
            <h1>Just Do It App</h1>
            <h3>Struggling with keeping family members accoutable.<br /> Keep family members on track and on board. <br /> No misunderstandings and passing the blame.</h3>
            <div>
                <Button variant="primary" size="lg">
                    <Link to='/login'>Login</Link>
                </Button>
                <Button variant="outline-secondary" size="lg">
                    <Link to='/home'>Template</Link>
                </Button>
            </div>
            <Button variant="success" size="lg">
                <Link to='/get_started'>Getting Started</Link>
            </Button>


            <Footer />
        </div>
    )
}

export default HomePage