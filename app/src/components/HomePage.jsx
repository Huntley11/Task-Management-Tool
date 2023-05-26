import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import './cssFiles/Home.css';

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
            <h3>Struggling with keeping family members accountable?</h3>
            <img src="./lazy-woman-mess-around-home.jpg" alt="lazy woman-mess around home"/>
            <br />
            <h3>Now you can keep family members on track and on board with Just Do It.</h3>
            <img src="./family-running-track-composition-vector.jpg" alt="family running on track"/>
            <br />
            <h3>No more misunderstandings and passing the blame.</h3>
            <img src="./family-blaming-eachother.jpg" alt="two people blaming eachother for a broken potted plant"/>
            <div>
                <Button className="buttons" variant="success" size="lg">
                    <Link class="whtColor" to='/get_started'>Getting Started</Link>
                </Button>
                <Button className="buttons" variant="outline-secondary" size="lg">
                    <Link to='/home'>Template</Link>
                </Button>
            </div>
            <br/>
            <Footer />
        </div>
    )
}

export default HomePage