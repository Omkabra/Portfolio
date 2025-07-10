import React, { useState } from "react";

const skillsData = [
  {
    title: "Programming Languages",
    icon: "fas fa-pencil-ruler",
    skills: ["C","C++" ,"Java", "JavaScript", "Python" ],
  },
  {
    title: "IT Constructs",
    icon: "fas fa-code",
    skills: ["DBMS", "DS & Algorithms", "OOP"],
  },
  {
    title: "Technologies",
    icon: "fas fa-swatchbook",
    skills: ["MongoDB", "MySQL", "ReactJs","ExpressJs", "NodeJs", "Tailwind"],
  },
];

function Skills() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
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
