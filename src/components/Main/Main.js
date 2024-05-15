import React from "react";
import newsImage from "../../images/news.png";
import aroundus from "../../images/aroundus.png";
import ttwtwr from "../../images/ttwtwr.png";
import coffeeshop from "../../images/coffeeshop.png";
import library from "../../images/library.png";
import "./Main.css";

function Main() {
  return (
    <main className="main" id="main">
      <h1 className="main__text">Portfolio</h1>
      <div className="main__wrapper">
        <div className="main__card">
          <a
            href="https://articlelist.ignorelist.com"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={newsImage}
              alt="Explore the latest news project"
              className="main__image"
            />
          </a>
          <div className="main__info">
            <h3 className="main__info-title">News Explorer</h3>
            <p className="main__info-description">
              News Explorer is a comprehensive project that employs a full-stack
              approach, leveraging React for the frontend and Node.js for the
              backend. By integrating a third-party API, this application
              enables users to register accounts, conduct keyword searches, and
              save relevant news articles for future reference.
              https://github.com/Dsly1998/news-explorer-frontend.git
              https://github.com/Dsly1998/news-explorer-backend.git
            </p>
          </div>
        </div>
        <div className="main__card main__card-right">
          <div className="main__info">
            <h3 className="main__info-title">Around the USA</h3>
            <p className="main__info-description">
              Around the USA is a dynamic front-end project developed using
              JavaScript, HTML, and CSS. It incorporates a third-party API to
              introduce a social dimension to the application, allowing users to
              create profiles and share posts consisting of places and images.
              Peers can engage with these posts by liking and interacting with
              other users' content, fostering a vibrant community experience.
            </p>
          </div>
          <a
            href=" https://dsly1998.github.io/se_project_aroundtheus/"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={aroundus}
              alt="Explore around the US project"
              className="main__image main__image-us"
            />
          </a>
        </div>
        <div className="main__card">
          <a
            href="https://github.com/Dsly1998/se_project_react.git"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ttwtwr}
              alt="Travel the world with TTWTWR project"
              className="main__image"
            />
          </a>
          <div className="main__info">
            <h3 className="main__info-title">WTWR</h3>
            <p className="main__info-description">
              WTWR (What to Wear) is a comprehensive full-stack application
              developed with React and Node.js. Users can create profiles and
              save clothing articles within the platform. Leveraging a weather
              API, the application dynamically tracks and displays suitable
              clothing options based on the prevailing weather conditions at the
              user's location. This intuitive feature ensures users are always
              well-prepared and stylish, regardless of the forecast.
              https://github.com/Dsly1998/se_project_react.git
              https://github.com/Dsly1998/se_project_express.git
            </p>
          </div>
        </div>
        <div className="main__card main__card-right">
          <div className="main__info">
            <h3 className="main__info-title">Coffee Shop</h3>
            <p className="main__info-description">
              The Coffee Shop Project is a captivating landing page designed
              using HTML and CSS specifically for the Practicum cafe. This
              engaging platform boasts a seamless navigation bar, an enticing
              menu section, and insightful video tutorials. Additionally,
              visitors can conveniently make reservations through the website,
              enhancing their overall experience. With its dynamic and visually
              appealing elements, the Coffee Shop Project effectively showcases
              the charm and offerings of the Practicum cafe while providing
              users with an immersive online experience.
            </p>
          </div>
          <a
            href="https://github.com/Dsly1998/se_project_coffeeshop.git"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={coffeeshop}
              alt="Discover local coffee shops project"
              className="main__image"
            />
          </a>
        </div>
        <div className="main__card">
          <a
            href="https://github.com/Dsly1998/se_project_library.git"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={library}
              alt="Browse online library project"
              className="main__image"
            />
          </a>
          <div className="main__info">
            <h3 className="main__info-title">Practicum Library</h3>
            <p className="main__info-description">
              The Practicum Library stands as my inaugural project, crafted with
              HTML and CSS, meticulously adhering to industry best coding
              practices. This landing page serves as a comprehensive repository,
              brimming with invaluable information and insights into the
              Practicum Library. Offering a seamless user experience, it
              provides visitors with a wealth of resources and knowledge about
              the library's offerings, further accentuating its significance as
              a vital academic resource.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
