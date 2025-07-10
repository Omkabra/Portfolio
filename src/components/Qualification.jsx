import React, { useState } from "react";

const qualifications = [
  {
    title: "SSC",
    subtitle: "Rustomjie International School",
    year: "2020",
    modal: [
      "Subjects studied: Science, Maths, English, Social Studies, Sanskrit.",
      "Scored 94.4%",
    
    ],
  },
  {
    title: "Class 12th",
    subtitle: "DNCVPS College",
    year: "2022",
    modal: [
      "Subjects studied: Physics, Chemistry, Maths, English, Electronics.",
      "Scored 87.83%",
    ],
  },
  {
    title: "College",
    subtitle: "BITS Pilani, Rajasthan",
    year: "2022 - 2026",
    modal: [
      "Captain of the institute's skating team — led the team to multiple inter-college victories, including a gold medal in relay speed skating and bronze in rollball.",
      "Mentored junior teammates and organized college-level sports events.",
      "Interested in the intersection of technology and finance — especially fintech and circuit-based solutions.",
      "Completed a minor in Finance",
      
    ],
  },
];

function Qualification() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="qualification__section service__section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container grid services__container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex qualification__active">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content qualifiation__active services__content">
            {qualifications.map((q, idx) => (
              <div className="qualification__data" key={q.title}>
                <div>
                  <h3 className="qualification__title">{q.title}</h3>
                  <span className="qualification__subtitle">{q.subtitle}</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    {q.year}
                  </div>
                  <span
                    className="button button--flex button--small button--link services__button"
                    onClick={() => setOpenModal(idx)}
                  >
                    View More
                    <i className="uil uil-arrow-right button__icon"></i>
                  </span>
                  {/* Modal */}
                  {openModal === idx && (
                    <div className="services__modal active-modal">
                      <div className="services__modal-content">
                        <h4 className="services__modal-title">{q.title} Summary :</h4>
                        <i className="uil uil-times services__modal-close" onClick={() => setOpenModal(null)}></i>
                        <ul className="services__modal-services grid">
                          {q.modal.map((item, i) => (
                            <li className="services__modal-service" key={i}>
                              <i className="uil uil-check-circle services__modal-icon"></i>
                              <p>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
