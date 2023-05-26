import React from "react";
import Navbar from 'react-bootstrap/Navbar'

export default function Footer () {
    return (
        <div >
            <Navbar fixed='bottom' bg='dark' variant='dark' className="text-center">
                <Navbar.Text className="mx-auto">
                    <h6>Killer Bass 2023 © -All Rights Reserved</h6>
                </Navbar.Text>
            </Navbar>
        </div>
    )
}