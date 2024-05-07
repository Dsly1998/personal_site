import React from "react";
import close from "../../images/close.svg";
import "./PopupContact.css";

function PopupContact({ onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close-button" onClick={onClose}>
          <img className="modal__close-image" alt="X" src={close} />
        </button>
        <h2 className="modal__title">Contact Information</h2>
        <div className="modal__contact-info">
          <p>Email: krave83@gmail.com</p>
          <p>Phone: (415) 377-3261</p>
          
        </div>
      </div>
    </div>
  );
}

export default PopupContact;
