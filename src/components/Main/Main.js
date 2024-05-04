import React from "react";
import newsImage from "../../images/news.png";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <p className="main__text">
        This is the main section of my portfolio where I showcase my projects.
      </p>
      <img
        src={newsImage}
        alt="News Explorer Button"
        className="main__image-news"
      />
    </main>
  );
}

export default Main;
