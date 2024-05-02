import React from "react";
import headShot from "../../images/Headshot.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={headShot} alt="Author" className="about__image" />
        <div className="about__info">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">Here is a little bit about myself...</p>
        </div>
      </div>
    </section>
  );
}

export default About;
