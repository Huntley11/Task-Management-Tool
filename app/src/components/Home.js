import React from "react";
import './cssFiles/Home.css';
import Popup from "./popup";
import HomeCard from "./HomeCard";
import { useState } from "react";

export default function Home() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [cards, setCards] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Create a new card object with the submitted project name
        const newCard = {
          title: title,
          image: image,
          body: body
        };
    
        // Add the new card to the existing list of cards
        setCards([...cards, newCard]);
    
        // Clear the input field
        setTitle('');
        setImage('');
        setBody('');
      };
      
    return (
        <>
        <div className="cards-Container">
            <div className="newCard-container">
                <h1>Create New Project</h1>
                <br></br>
                {/*This opens the Popup*/}
                <button className="createNewProjectButton" onClick={() => setButtonPopup(true)}>+</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <form onSubmit={handleSubmit}>
                        <h3>Create Project</h3>
                        <label>Project Name</label>
                            <br/>
                        <input 
                            type="text"
                            value={ title }
                            required
                            onChange= {(e) => setTitle(e.target.value)}
                        />
                        <br/>
                        <label>Image Url</label>
                        <br/>
                        <input 
                            type="url"
                            value={ image }
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <br/>
                        <label>About this project</label>
                        <br/>
                        <textarea
                            required
                            value={ body }
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <br/>
                        <input type="submit" value="Create"/>
                    </form>
                    </Popup>
                </div>
                <div>
                    {/* Render the generated cards */}
                    {cards.map((card, index) => (
                    <div key={index}>
                    <HomeCard title={card.title} image={card.image} body={card.body}/>
                </div>
                ))}
            </div>
        </div> 
        </>
    )
}
