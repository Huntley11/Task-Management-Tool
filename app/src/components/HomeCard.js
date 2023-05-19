import React from "react";
import './HomeCard.css'

export default function HomeCard({ title, imageUrl, body }) {
    return (
        <div className="homeCard-container">
            <div className="homeCard-image ">
                <img src={imageUrl} alt='' />
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
                        <a>
                            View Project
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
