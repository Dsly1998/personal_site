import React, { useState } from "react";
import { ReactComponent as Rocket } from "../../images/Rocket.svg";
import "./Contact.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const offsetX = e.clientX - initialPosition.x;
      const offsetY = e.clientY - initialPosition.y;
      // Update position only when dragging
      setPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="contact">
      <div className="contact__rocket-container">
        <button
          className={`contact__rocket-button ${
            isDragging ? "contact__rocket-button--dragging" : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          draggable={false}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          <Rocket className="contact__rocket-icon" />
          <p className="contact__text"> Contact Me</p>
        </button>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={toggleModal}>
                &times;
              </span>
              <h2>Contact Information</h2>
              <p>Email: krave83@gmail.com</p>
              <p>Phone: (415) 377-3261</p>
              {/* Add more contact info as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
