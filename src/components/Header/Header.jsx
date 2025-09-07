import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { ReactComponent as Rocket } from "../../images/Rocket.svg";

function Header({ openModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // const [isHovering, setIsHovering] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openResume = () => {
    window.open(
      "https://1drv.ms/w/c/af187325951e3aa1/ETnFCObf9ZNCmkiMzUk3w74BZf_jTgCi7x3Y_mYruJCejQ?e=TmIpwz",
      "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Add the pulsing animation every 10 seconds
    const interval = setInterval(() => {
      const rocketButton = document.querySelector(
        ".header__contact-rocket-button"
      );
      if (rocketButton) {
        rocketButton.classList.add("pulse");
        setTimeout(() => {
          rocketButton.classList.remove("pulse");
        }, 700);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__left">
        <h1 className="header__title">Dallin Sly</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="header__right header__right--desktop">
        {location.pathname !== "/" && (
          <Link to="/" className="header__button header__button-about">
            About
          </Link>
        )}
        {location.pathname !== "/projects" && (
          <Link to="/projects" className="header__button header__button-main">
            Portfolio
          </Link>
        )}
        <a
          href="https://www.linkedin.com/pulse/miles-behind-me-future-front-how-i-rewrote-my-journey-dallin-sly-auwge"
          className="header__button header__button-article"
          target="_blank"
          rel="noopener noreferrer"
        >
          Article
        </a>
        <button
          className="header__button header__button-resume"
          onClick={openResume}
        >
          Resume
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className={`header__hamburger ${
          isMobileMenuOpen ? "header__hamburger--open" : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`header__mobile-menu ${
          isMobileMenuOpen ? "header__mobile-menu--open" : ""
        }`}
      >
        {location.pathname !== "/" && (
          <Link
            to="/"
            className="header__mobile-link"
            onClick={closeMobileMenu}
          >
            About
          </Link>
        )}
        {location.pathname !== "/projects" && (
          <Link
            to="/projects"
            className="header__mobile-link"
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
        )}
        <a
          href="https://www.linkedin.com/pulse/miles-behind-me-future-front-how-i-rewrote-my-journey-dallin-sly-auwge"
          className="header__mobile-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
        >
          Article
        </a>
        <button
          className="header__mobile-link header__mobile-link--button"
          onClick={() => {
            openResume();
            closeMobileMenu();
          }}
        >
          Resume
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="header__mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
}

export default Header;
