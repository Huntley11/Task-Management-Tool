import React from 'react'
import './cssFiles/Popup.css'
import Button from "react-bootstrap/Button";

function UpdatePopup (updateProps) {
    return (updateProps.updateTrigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <Button 
                    className='close-btn' 
                    onClick={() => updateProps.setUpdateTrigger(false)}
                >
                    Close
                </Button>
                { updateProps.children }
            </div>
        </div>
    ) : "";
}

export default UpdatePopup