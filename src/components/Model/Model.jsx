import React from 'react'
import "./Model.css"

const Model = ({ show, onClose, children }) => {
    if (!show) return null;
    return (
        <div className="modal-backdrop">
            <div className="modal-box">
                {children}
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Model