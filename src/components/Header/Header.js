import React from "react";
import Contact from "../Contact/Contact";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Dallin Sly</h1>
      <Contact />
    </header>
  );
}

export default Header;
