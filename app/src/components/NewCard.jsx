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
            <button className="createNewProjectButton" onClick={() => setButtonPopup(true)}>+</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form>
                    <h3>Create Project</h3>
                    <label>Project Name</label>
                    <br/>
                    <input type="text"/>
                    <br/>
                    <label>Image Url</label>
                    <br/>
                    <input type="url" />
                    <br/>
                    <label>About this project</label>
                    <br/>
                    <input />
                    <br/>
                    <input type="submit"/>
                </form>
            </Popup>
        </div>
    )
}