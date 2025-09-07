import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PopupContact from "../PopupContact/PopupContact";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import RocketSvg from "../../images/Rocket.svg?react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header openModal={openModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        {/* Floating Contact Button */}
        <div className="header__contact-container">
          <button
            className={`header__contact-rocket-button${
              isHovering ? " pulse" : ""
            }`}
            onClick={openModal}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <RocketSvg className="header__contact-rocket-icon" />
            <p className="header__contact-text">Contact Me</p>
          </button>
        </div>
        <Footer />
        {isModalOpen && <PopupContact onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
