import React, { useEffect } from "react";
import close from "../../images/close.svg";
import phone from "../../images/phone.svg";
import mail from "../../images/mail.svg";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin-square.svg";

function PopupContact({ onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlayClick = (event) => {
    // Check if the click is on the modal's direct container to prevent closing when clicking inside the modal content
    if (event.target.className === "modal") {
      onClose();
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-button" onClick={onClose}>
          <img className="modal__close-image" alt="close" src={close} />
        </button>
        <h2 className="modal__title">Get in Touch</h2>
        <div className="modal__contact-info">
          <p
            className="modal__personals"
            onClick={() => handleCopy("krave83@gmail.com")}
            title="Click to copy"
          >
            <img src={mail} alt="Email" className="modal__icon" />
            krave83@gmail.com
          </p>
          <p
            className="modal__personals"
            onClick={() => handleCopy("(415) 377-3261")}
            title="Click to copy"
          >
            <img src={phone} alt="Phone" className="modal__icon" />
            (415) 377-3261
          </p>
        </div>
        <div className="modal__social-links">
          <a
            href="https://www.linkedin.com/in/dallin-sly-software-engineer"
            className="modal__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="modal__icon-wrapper">
              <img src={linkedin} alt="LinkedIn" className="modal__icon" />
              <p className="modal__icon-label">LinkedIn</p>
            </div>
          </a>
          <a
            href="https://github.com/Dsly1998"
            className="modal__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="modal__icon-wrapper">
              <img src={github} alt="GitHub" className="modal__icon" />
              <p className="modal__icon-label">GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopupContact;
