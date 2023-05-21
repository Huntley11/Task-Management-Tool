import React from "react";
import './cssFiles/HomeCard.css'

export default function HomeCard({ title, image, body }) {
    
    return (
        <div className="homeCard-container">
            <div className="homeCard-image ">
                <img src={image} alt='' />
            </div>
            <div className="homeCard-content">
                <div className="homeCard-title">
                    {title}
                </div>
                <div className="homeCard-body">
                    <p>{body}</p>
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
                    <button>
                            Delete Project
                    </button>
                </div>
            </div>
        </div>
    )
}
