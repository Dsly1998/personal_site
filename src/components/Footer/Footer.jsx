import React from "react";
import linkedin from "../../images/linkedin-square.svg";
import github from "../../images/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">© 2025 by Dallin Sly created with React.</p>
      </div>
      <div className="footer__right">
        <a
          href="https://github.com/Dsly1998"
          className="footer__icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer__icon-wrapper">
            <img src={github} alt="LinkedIn" className="footer__icon" />
            <p className="footer__icon-label">Git Hub</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/dallin-sly-software-engineer"
          className="footer__icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer__icon-wrapper">
            <img src={linkedin} alt="LinkedIn" className="footer__icon" />
            <p className="footer__icon-label">LinkedIn</p>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
