import React, { useState } from "react";

const skillsData = [
  {
    title: "Frontend Development",
    icon: "fas fa-laptop-code",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Figma"],
  },
  {
    title: "Backend & Database",
    icon: "fas fa-server",
    skills: ["Node.js", "Express.js", "Redis", "MongoDB", "SQL", "Sanity CMS"],
  },
  {
    title: "Tools & Core",
    icon: "fas fa-cogs",
    skills: ["C/C++", "DSA", "Git/GitHub", "n8n Automation", "BullMQ", "Matlab"],
  },
];

function Skills() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Technical Skills</h2>
      <span className="section__subtitle">My technical proficiency</span>
      <div className="skills__container container grid">
        {skillsData.map((cat, idx) => (
          <div key={cat.title}>
            <div className={`skills__content ${openIdx === idx ? "skills__open" : "skills__close"}`}>
              <div className="skills__header" onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}>
                <i className={`${cat.icon} skills__icon`}></i>
                <div><h1 className="skills__title">{cat.title}</h1></div>
                <i className="uil uil-angle-down skills__arrow"></i>
              </div>
              <div className="skills__list grid">
                {cat.skills.map(skill => (
                  <div className="skills__data" key={skill}>
                    <div className="skills__titles">
                      <i className="uil uil-check-circle skills__name-icon" style={{marginRight: '0.5rem', color: 'var(--first-color)'}}></i>
                      <h3 className="skills__name">{skill}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;