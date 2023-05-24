import React from "react";
import './cssFiles/Home.css';
import Popup from "./popup";
import HomeCard from "./HomeCard";
import { useState } from "react";

function Home() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [cards, setCards] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate a unique id for the new card
        const id = Date.now();

        // Create a new card object with the submitted project name
        const newCard = {
            id: id,
            title: title,
            image: image,
            body: body
        };

         // Add the new card to the existing list of cards
        setCards([...cards, newCard]);

        // Clear the input field
        setTitle("");
        setImage("");
        setBody("");

        //Close Popup on submit
        setButtonPopup(false);
    };

    const handleUpdate = (updatedCard) => {
        const updatedCards = cards.map((c) => {
            if (c.id === updatedCard.id) {
                return {
                    ...c,
                    title: updatedCard.title,
                    body: updatedCard.body,
                    image: updatedCard.image
                };
            }
            return c;
        });

        // Update the state or data source with the updated cards
        setCards(updatedCards);

        // Close the update popup
        setButtonPopup(false);
    };

    const handleDelete = (id) => {
        // Remove the card with the given id from the cards array
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
    };

    return (
        <>
            <div className="cards-Container">
                <div className="newCard-container">
                    <h1>Create New Project</h1>
                    <br></br>
                    <button
                        className="createNewProjectButton"
                        onClick={() => setButtonPopup(true)}
                    >
                        +
                    </button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <form onSubmit={handleSubmit}>
                            <h3>Create Project</h3>
                            <label>Project Name</label>
                            <br />
                            <input
                                type="text"
                                value={title}
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <br />
                            <label>Image Url</label>
                            <br />
                            <input
                                type="url"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <br />
                            <label>About this project</label>
                            <br />
                            <textarea
                                required
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                            <br />
                            <input type="submit" value="Create" />
                        </form>
                    </Popup>
                </div>
                <div>
                    {cards.map((card, index) => (
                        <div key={card.id}>
                            <HomeCard
                                card={card}
                                onUpdate={handleUpdate}
                                onDelete={handleDelete}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;