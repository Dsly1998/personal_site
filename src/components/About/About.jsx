import React from "react";
import headShot from "../../images/Dallin_Sly.png";

function About() {
  return (
    <>
      {/* About Me Section */}
      <section className="about" id="about">
        <div className="about__container">
          <img
            src={headShot}
            alt="Dallin Sly - Software Engineer"
            className="about__image"
          />
          <div className="about__info">
            <h2 className="about__title">About Me</h2>
            <p className="about__text">
              Full Stack Developer at Polk County Board of County Commissioners
              with expertise in modern web technologies. I build scalable
              applications using React, Node.js, Go, and cloud platforms, while
              mentoring developers at Triple Ten Bootcamp.
            </p>
            <p className="about__text">
              Passionate about clean code, user experience, and delivering
              solutions that make a real impact. I thrive in collaborative
              environments and enjoy solving complex technical challenges.
            </p>
            <p className="about__text about__text--cta">
              Let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies">
        <div className="technologies__container">
          <h2 className="technologies__title">Technical Skills</h2>
          <div className="technologies__grid">
            <div className="technologies__category">
              <h3 className="technologies__category-title">Front-End</h3>
              <div className="technologies__items">
                <span className="technologies__item">JavaScript</span>
                <span className="technologies__item">TypeScript</span>
                <span className="technologies__item">React</span>
                <span className="technologies__item">Next.js</span>
                <span className="technologies__item">Tailwind CSS</span>
              </div>
            </div>

            <div className="technologies__category">
              <h3 className="technologies__category-title">Back-End</h3>
              <div className="technologies__items">
                <span className="technologies__item">Node.js</span>
                <span className="technologies__item">Express</span>
                <span className="technologies__item">REST APIs</span>
                <span className="technologies__item">Go</span>
              </div>
            </div>

            <div className="technologies__category">
              <h3 className="technologies__category-title">Databases</h3>
              <div className="technologies__items">
                <span className="technologies__item">PostgreSQL</span>
                <span className="technologies__item">MongoDB</span>
              </div>
            </div>

            <div className="technologies__category">
              <h3 className="technologies__category-title">Cloud/DevOps</h3>
              <div className="technologies__items">
                <span className="technologies__item">Google Cloud</span>
                <span className="technologies__item">Azure</span>
                <span className="technologies__item">Docker</span>
              </div>
            </div>

            <div className="technologies__category">
              <h3 className="technologies__category-title">Tools/Other</h3>
              <div className="technologies__items">
                <span className="technologies__item">Git</span>
                <span className="technologies__item">GitHub</span>
                <span className="technologies__item">Jest</span>
                <span className="technologies__item">NPM</span>
                <span className="technologies__item">Webpack</span>
                <span className="technologies__item">Babel</span>
                <span className="technologies__item">React Native</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
