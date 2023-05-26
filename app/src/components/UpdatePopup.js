import React from 'react'
import './cssFiles/Popup.css'

function UpdatePopup (updateProps) {
    return (updateProps.updateTrigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button 
                    className='close-btn' 
                    onClick={() => updateProps.setUpdateTrigger(false)}
                >
                    Close
                </button>
                { updateProps.children }
            </div>
        </div>
    ) : "";
}

export default UpdatePopup