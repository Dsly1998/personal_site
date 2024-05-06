import React from "react";
import newsImage from "../../images/news.png";
import aroundus from "../../images/aroundus.png";
import ttwtwr from "../../images/ttwtwr.png";
import coffeeshop from "../../images/coffeeshop.png";
import library from "../../images/library.png";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <h1 className="main__text">Portfolio</h1>
      <div className="main__wrapper">
        <div className="main__card">
          <button className="main__button">
            <img
              src={newsImage}
              alt="Explore the latest news project"
              className="main__image"
            />
          </button>
          <div className="main__info">
            <p className="main__description">News Explorer project</p>
            <p>Description of the News Explorer project.</p>
          </div>
        </div>
        <div className="main__card main__card-right">
          <div className="main__info">
            <p className="main__description">Around the US project</p>
            <p>Description of the Around the US project.</p>
          </div>
          <button className="main__button">
            <img
              src={aroundus}
              alt="Explore around the US project"
              className="main__image main__image-us"
            />
          </button>
        </div>
        <div className="main__card">
          <button className="main__button">
            <img
              src={ttwtwr}
              alt="Travel the world with TTWTWR project"
              className="main__image"
            />
          </button>
          <div className="main__info">
            <p className="main__description">TTWTWR project</p>
            <p>Description of the Travel the World project.</p>
          </div>
        </div>
        <div className="main__card main__card-right">
          <div className="main__info">
            <p className="main__description">Coffee Shop project</p>
            <p>Description of the Coffee Shop project.</p>
          </div>
          <button className="main__button">
            <img
              src={coffeeshop}
              alt="Discover local coffee shops project"
              className="main__image"
            />
          </button>
        </div>
        <div className="main__card">
          <button className="main__button">
            <img
              src={library}
              alt="Browse online library project"
              className="main__image"
            />
          </button>
          <div className="main__info">
            <p className="main__description">Online Library project</p>
            <p>Description of the Online Library project.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
