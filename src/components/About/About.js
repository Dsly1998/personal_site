import React from "react";
import headShot from "../../images/avatar.png";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <img src={headShot} alt="Author" className="about__image" />
        <div className="about__info">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
            Hey there! I'm Dallin Sly, a tech enthusiast with a unique journey
            from the driver's seat to the world of software engineering.
            Recently completing the rigorous Triple Ten Bootcamp, I've finely
            tuned my skills in React.js, JavaScript, HTML, CSS, and more, poised
            to ignite innovation in the tech realm. Beyond my technical prowess,
            my role as a devoted father and husband has cultivated qualities of
            patience, unwavering dedication, and a fresh outlook on
            problem-solving. With a deep-seated passion for unraveling
            challenges and a relentless drive to excel, I'm primed to embark on
            this exhilarating career transition. Explore my portfolio to witness
            the fusion of creativity and technical finesse, and let's unite to
            craft something truly extraordinary together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
