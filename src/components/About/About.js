import React from "react";
import headShot from "../../images/avatar.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={headShot} alt="Author" className="about__image" />
        <div className="about__info">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
            Hey! I'm Dallin Sly, a tech enthusiast and former commercial driver
            transitioning into the exciting world of software engineering.
            Graduating from the Triple Ten Bootcamp, I've honed my skills in
            React.js, JavaScript, and beyond, ready to make an impact in the
            tech industry. With a passion for problem-solving and a drive to
            excel, I thrive on tackling challenges head-on. My experience as a
            father and husband has instilled in me patience, dedication, and a
            fresh perspective on problem-solving. Check out my portfolio to see
            how I blend creativity with technical expertise. Let's collaborate
            and build something extraordinary together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
