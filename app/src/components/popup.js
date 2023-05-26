import React from 'react'
import './cssFiles/Popup.css'
import Button from "react-bootstrap/Button";

function popup (props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <Button 
                    className='close-btn' 
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </Button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default popup