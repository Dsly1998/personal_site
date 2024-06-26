import React, { useEffect } from "react";
import { ReactComponent as Rocket } from "../../images/Rocket.svg";
import "./Header.css";

function Header({ openModal }) {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMain = () => {
    const mainSection = document.getElementById("main");
    mainSection.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/1Kik7RVE9IoyRWurswGECNxk805-w4hnN/edit?usp=sharing&ouid=112251850382172380878&rtpof=true&sd=true",
      "_blank"
    );
  };

  useEffect(() => {
    // Add the pulsing animation every 10 seconds
    const interval = setInterval(() => {
      const rocketButton = document.querySelector(
        ".header__contact-rocket-button"
      );
      rocketButton.classList.add("pulse");
      setTimeout(() => {
        rocketButton.classList.remove("pulse");
      }, 700);
    }, 7000);

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">Dallin Sly</h1>
      </div>
      <div className="header__right">
        <button
          className="header__button header__button-about"
          onClick={scrollToAbout}
        >
          About
        </button>
        <button
          className="header__button header__button-main"
          onClick={scrollToMain}
        >
          Portfolio
        </button>
        <button
          className="header__button header__button-resume"
          onClick={openResume}
        >
          Resume
        </button>
        <div className="header__contact">
          <div className="header__contact-container">
            <button
              className="header__contact-rocket-button"
              onClick={openModal}
            >
              <Rocket className="header__contact-rocket-icon" />
              <p className="header__contact-text"> Contact Me</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
