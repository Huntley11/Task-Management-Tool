import React from "react";

import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import Footer from "./Footer";

function HomePage() {
    return (
        <div className="body">
            <Nav className="justify-content-end">
                <Button className="buttons" variant="primary" size="lg">
                    <Link class="whtColor" to='/login'>Login</Link>
                </Button>
                <Nav.Item>
                    <Nav.Link href="/about" className="about-btn">About</Nav.Link>
                </Nav.Item>
            </Nav>
            <h6>Team: Killer Bass</h6>
            <h1>Just Do It App</h1>
            <h3>Struggling with keeping family members accoutable?<br /> Keep family members on track and on board. <br /> No misunderstandings and passing the blame.</h3>
            <div>
                <Button className="buttons" variant="success" size="lg">
                    <Link class="whtColor" to='/get_started'>Getting Started</Link>
                </Button>
                <Button className="buttons" variant="outline-secondary" size="lg">
                    <Link to='/home'>Template</Link>
                </Button>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage