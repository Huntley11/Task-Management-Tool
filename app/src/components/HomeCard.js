import React from "react";
import './cssFiles/HomeCard.css'

function HomeCard({ card, onDelete }) {

    return (
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
                    <br/>
                    <button>
                            Edit Project
                    </button>
                    <br/>
                    <button onClick={() => onDelete(card.id)}>
                            Delete Project
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeCard