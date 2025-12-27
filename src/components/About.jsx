import React from "react";
import aboutImg from "../Assets/img/Pro.png";


function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={aboutImg} alt="About" className="about__img" />
        <div className="about__data">
          <p className="about__description">
           Currently pursuing my final year in Electronics and Instrumentation Engineering with a minor in Finance, I'm a tech-enthusiast with a keen interest in frontend development, cloud technologies, and practical problem-solving. I bring a self-motivated, can-do attitude and thrive in fast-paced, dynamic environments. Whether it's building intuitive interfaces, exploring AI fundamentals, or upskilling through real-world projects, I’m always eager to learn and grow. I'm actively looking for impactful opportunities where I can apply my skills, expand my expertise, and contribute meaningfully to a forward-thinking tech team.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">07.00+</span>
              <span className="about__info-name">Aggregate <br />CGPA</span>
            </div>
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">Projects</span>
            </div>
            <div>
              <span className="about__info-title">07+</span>
              <span className="about__info-name">Months <br />experience</span>
            </div>
          </div>
          {/*<div className="about__buttons">
            <a download href={cvPdf} className="button button--flex">
              Download CV<i className="fas fa-download button__icon"></i>
            </a>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
export default About;
