import React from "react";
import './cssFiles/HomeCard.css'
import UpdatePopup from "./UpdatePopup";
import { useState, Fragment } from "react";

function HomeCard({ card, onDelete }) {
    const [updateButtonPopup, setUpdateButtonPopup] = useState(false);
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateBody, setUpdateBody] = useState('');
    const [updateImage, setUpdateImage] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
    
        // Clear the input field
        setUpdateTitle('');
        setUpdateImage('');
        setUpdateBody('');


        //Close Popup on update
        setUpdateButtonPopup(false);
      };

    return (
        <Fragment>
            <div className="homeCard-container">
            <div className="homeCard-image ">
                <img src={card.image} alt='' />
            </div>
            <div className="homeCard-content">
                <div className="homeCard-title">
                    {card.title}
                </div>
                <div className="homeCard-body">
                    <p>{card.body}</p>
                </div>
                <div className="viewProject-btn">
                    <button>
                        View Project
                    </button>
                    <br />
                    <button onClick={() => setUpdateButtonPopup(true)}>
                        Edit Project
                    </button>
                    <br />
                    <button onClick={() => onDelete(card.id)}>
                        Delete Project
                    </button>
                </div>
            </div>
        </div>
        <UpdatePopup updateTrigger={updateButtonPopup} setUpdateTrigger={setUpdateButtonPopup}>
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
        </Fragment>
        
    )
}

export default HomeCard