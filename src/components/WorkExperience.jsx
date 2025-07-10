import React from "react";

const experiences = [
  {
    position: "Intern",
    company: "Bellurbis Tech Pvt. Ltd.",
    period: "May 2024 - July 2024",
    location: "Remote",
    details: [
      "Developed responsive web interfaces using React, JavaScript, and CSS.",
      "Collaborated with backend team to integrate REST APIs.",
      "Made Rudhira from Scratch."
    ]
  },
  // Add more experiences as needed
];

function WorkExperience() {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">Work Experience</h2>
      <span className="section__subtitle">My professional journey</span>
      <div className="work__container container">
        {experiences.map((exp, idx) => (
          <div className="work__item" key={idx}>
            <h3 className="work__position">{exp.position}</h3>
            <span className="work__company">
              {exp.company} &mdash; <span className="work__period">{exp.period}</span>
            </span>
            <div className="work__location">{exp.location}</div>
            <ul className="work__details">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
