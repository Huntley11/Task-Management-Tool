import React from "react";
import './CreateCard.css'
import Popup from "./popup";
import { useState } from "react";

export default function NewCard () {
    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className="newCard-container">
            <h1>Create New Project</h1>
            <br></br>
            <button onClick={() => setButtonPopup(true)}>+</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
                <p>This is my button triggered popup</p>
            </Popup>
        </div>
    )
}