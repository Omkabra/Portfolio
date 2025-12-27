import React from "react";

const experiences = [
  {
    position: "Full Stack Intern",
    company: "NetNet Fintech Pvt Ltd",
    period: "Jul 2025 - Dec 2025",
    location: "Bengaluru",
    details: [
      "Migrated Quartr API from V1 to V3 and redesigned webhook workflows, reducing ingestion errors by ~90%.",
      "Built the AlphaPro.ai Blog Platform using Next.js & Sanity CMS, boosting content publishing speed by 40%.",
      "Developed an AI-driven transcript analysis pipeline and shipped major product pages (Overview, EPS vs Guidance), increasing user interaction by ~30%.",
      "Built automated trading workflows using n8n for rule-based trade execution."
    ]
  },
  {
    position: "SDE Intern",
    company: "Bellurbis Technologies",
    period: "May 2024 - Jul 2024",
    location: "Remote",
    details: [
      "Contributed to Rudhira, a blood donation platform, focusing on real-time donor-request matching.",
      "Collaborated with design teams using Figma to translate business requirements into UI/UX components."
    ]
  },
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