import React from "react";
//Centering a card
import { Container, Row, Col } from 'react-bootstrap'
//Card
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

//Header and Footer
import Navigation from "./Navigation";
import Footer from "./Footer";

//This is the login Page
function LogIn() {
    return (
        <div>
            <Navigation />
            <Container className="d-flex justify-content-center align-items-center">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Card className="mt-5" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title> Log In </Card.Title>
                                <Form>
                                    <Form.Group className='mb-3' controlId="formBasicEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="passwod" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



            <Footer />
        </div>
    )
}

export default LogIn