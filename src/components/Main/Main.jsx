import React, { useEffect, useRef } from "react";
import budgetrImage from "../../images/Budgetr.jpg";
import newsImage from "../../images/news.png";
import aroundus from "../../images/aroundus.png";
import ttwtwr from "../../images/ttwtwr.png";
import coffeeshop from "../../images/coffeeshop.png";
import library from "../../images/library.png";
import pressure from "../../images/Screenshot.png";

function Main() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const cards = cardsRef.current;
    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <main className="main" id="main">
      <h1 className="main__text">Portfolio</h1>
      <div className="main__wrapper">
        <div className="main__card" ref={(el) => (cardsRef.current[0] = el)}>
          <a
            href="https://budgetr-sigma.vercel.app"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={budgetrImage}
              alt="Budgetr - Budget management app for couples"
              className="main__image"
            />
          </a>
          <div className="main__info">
            <h3 className="main__info-title">Budgetr</h3>
            <p className="main__info-description">
              A comprehensive personal and collaborative budget management
              application built with React and Go. Budgetr helps couples and
              individuals track income, expenses, and bills using an innovative
              block system method with an intuitive calendar-based interface.
              Features include budget pods for shared expenses, recurring bill
              tracking, and real-time collaborative budgeting.
            </p>
            <div>
              <a
                href="https://github.com/Dsly1998/Budgetr_Info"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                Documentation
              </a>
              <a
                href="https://budgetr-sigma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                Live Application
              </a>
            </div>
          </div>
        </div>
        <div
          className="main__card main__card-right"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <div className="main__info">
            <h3 className="main__info-title">News Explorer</h3>
            <p className="main__info-description">
              News Explorer is a comprehensive project that employs a full-stack
              approach, leveraging React for the frontend and Node.js for the
              backend. By integrating a third-party API, this application
              enables users to register accounts, conduct keyword searches, and
              save relevant news articles for future reference.
            </p>
            <div>
              <a
                href="https://github.com/Dsly1998/news-explorer-frontend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                https://github.com/Dsly1998/news-explorer-frontend.git
              </a>
              <a
                href="https://github.com/Dsly1998/news-explorer-backend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                https://github.com/Dsly1998/news-explorer-backend.git
              </a>
              <a
                href="https://www.loom.com/share/8b90d964059545c6a7c93d3894efcec9?sid=b7125f6b-f367-41d2-8b98-2720ff6dc20c"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                Project Demo
              </a>
            </div>
          </div>
          <a
            href="https://github.com/Dsly1998/news-explorer-frontend.git"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={newsImage}
              alt="Explore the latest news project"
              className="main__image main__image-us"
            />
          </a>
        </div>
        <div
          className="main__card main__card-right"
          ref={(el) => (cardsRef.current[2] = el)}
        >
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
            <div>
              <a
                href="https://github.com/Dsly1998/se_project_aroundtheus.git"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                GitHub Repository
              </a>
              <a
                href="https://dsly1998.github.io/se_project_aroundtheus/"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                Live Demo
              </a>
            </div>
          </div>
          <a
            href="https://dsly1998.github.io/se_project_aroundtheus/"
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
        <div className="main__card" ref={(el) => (cardsRef.current[3] = el)}>
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
            </p>
            <div>
              <a
                href="https://github.com/Dsly1998/se_project_react.git"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                https://github.com/Dsly1998/se_project_react.git
              </a>
              <a
                href="https://github.com/Dsly1998/se_project_express.git"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                https://github.com/Dsly1998/se_project_express.git
              </a>
            </div>
          </div>
        </div>
        <div
          className="main__card main__card-right"
          ref={(el) => (cardsRef.current[4] = el)}
        >
          <div className="main__info">
            <h3 className="main__info-title">Red Line & Blue</h3>
            <p className="main__info-description">
              Red Line & Blue is a React-based landing page I developed for a
              pressure washing company. The site features a gallery of images
              showcasing the company's work, as well as a list of services and
              contact details. With a clean and user-friendly design, visitors
              can easily browse the services offered and get in touch for
              inquiries, making it an ideal solution for promoting the business
              online.
            </p>
            <div>
              <a
                href="https://redlineandbluepressurewashing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                Live Site
              </a>
            </div>
          </div>
          <a
            href="https://redlineandbluepressurewashing.com"
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pressure}
              alt="Red Line & Blue Pressure Washing"
              className="main__image main__image-us"
            />
          </a>
        </div>
        <div className="main__card" ref={(el) => (cardsRef.current[5] = el)}>
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
            <div>
              <a
                href="https://github.com/Dsly1998/se_project_library.git"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div
          className="main__card main__card-right"
          ref={(el) => (cardsRef.current[6] = el)}
        >
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
            <div>
              <a
                href="https://github.com/Dsly1998/se_project_coffeeshop.git"
                target="_blank"
                rel="noopener noreferrer"
                className="main__description-link"
              >
                GitHub Repository
              </a>
            </div>
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
      </div>
    </main>
  );
}

export default Main;
