import React, { useState, useEffect } from "react";
import './cssFiles/ProjectCard.css';
import UpdatePopup from "./UpdatePopup";

function Card({ card, onUpdate, onDelete }) {
    const [updateButtonPopup, setUpdateButtonPopup] = useState(false);
    const [updateTitle, setUpdateTitle] = useState(card.title);
    const [updateBody, setUpdateBody] = useState(card.body);
    const [updateImage, setUpdateImage] = useState(card.image);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedCard = {
            id: card.id,
            title: updateTitle,
            body: updateBody,
            image: updateImage
        };

        // Handle the update logic within the component
        onUpdate(updatedCard);
        
        // Close the popup on update
        setUpdateButtonPopup(false);
    };

    useEffect(() => {
        setUpdateTitle(card.title);
        setUpdateBody(card.body);
        setUpdateImage(card.image);
    }, [card]);

    return (
        <>
            <div className="homeCard-container">
                <div className="homeCard-image">
                    <img src={card.image} alt="" />
                </div>
                <div className="homeCard-content">
                    <div className="homeCard-title">{card.title}</div>
                    <div className="homeCard-body">
                        <p>{card.body}</p>
                    </div>
                    <div className="viewProject-btn">
                        <button>View Project</button>
                        <br />
                        <button onClick={() => setUpdateButtonPopup(true)}>
                            Edit Project
                        </button>
                        <br />
                        <button onClick={() => onDelete(card.id)}>Delete Project</button>
                    </div>
                </div>
            </div>
            <UpdatePopup
                updateTrigger={updateButtonPopup}
                setUpdateTrigger={setUpdateButtonPopup}
            >
                <form onSubmit={handleUpdate}>
                    <h3>Update Project</h3>
                    <label>Project Name</label>
                    <br />
                    <input
                        type="text"
                        value={updateTitle}
                        required
                        onChange={(e) => setUpdateTitle(e.target.value)}
                    />
                    <br />
                    <label>Image Url</label>
                    <br />
                    <input
                        type="url"
                        value={updateImage}
                        onChange={(e) => setUpdateImage(e.target.value)}
                    />
                    <br />
                    <label>About this project</label>
                    <br />
                    <textarea
                        required
                        value={updateBody}
                        onChange={(e) => setUpdateBody(e.target.value)}
                    ></textarea>
                    <br />
                    <input type="submit" value="Update" />
                </form>
            </UpdatePopup>
        </>
    );
}

export default Card;