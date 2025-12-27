import React, { useState } from "react";

const qualifications = [
  {
    title: "Secondary School (SSC)",
    subtitle: "Rustomjie International School",
    year: "2020",
    modal: [
      "Aggregate Score: 94.4%",
      "Key Subjects: Science, Mathematics, Social Studies, English.",
      "Achieved distinction in Mathematics and Science."
    ],
  },
  {
    title: "Higher Secondary (12th)",
    subtitle: "DNCVPS College",
    year: "2022",
    modal: [
      "Aggregate Score: 87.83%",
      "Stream: Science (PCM)",
      "Key Subjects: Physics, Chemistry, Maths, Electronics.",
    ],
  },
  {
    title: "B.E. (Hons)",
    subtitle: "BITS Pilani, Rajasthan",
    year: "2022 - 2026",
    modal: [
      "Major: Electronics and Instrumentation Engineering",
      "Minor: Finance",
      "Relevant Coursework: Microprocessors, Embedded Systems, C Programming, Financial Management.",
      "Captain of the Skating Team.",
      "Mentored junior teammates and organized sports events."
    ],
  },
];

function Qualification() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Educational Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex qualification__active">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__active">
            {qualifications.map((q, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === qualifications.length - 1;

              return (
                <div className="qualification__data" key={index}>
                  {/* LEFT SIDE (Even items) */}
                  {isEven && (
                    <>
                      <div>
                        <h3 className="qualification__title">{q.title}</h3>
                        <span className="qualification__subtitle">{q.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>
                          {q.year}
                        </div>
                        <span
                          className="button button--flex button--small button--link services__button"
                          onClick={() => setOpenModal(index)}
                        >
                          View Details
                          <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        {!isLast && <span className="qualification__line"></span>}
                      </div>
                    </>
                  )}

                  {/* RIGHT SIDE (Odd items) */}
                  {!isEven && (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        {!isLast && <span className="qualification__line"></span>}
                      </div>
                      <div>
                        <h3 className="qualification__title">{q.title}</h3>
                        <span className="qualification__subtitle">{q.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>
                          {q.year}
                        </div>
                        <span
                          className="button button--flex button--small button--link services__button"
                          onClick={() => setOpenModal(index)}
                        >
                          View Details
                          <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                      </div>
                    </>
                  )}

                  {/* POPUP MODAL */}
                  {openModal === index && (
                    <div className="services__modal active-modal">
                      <div className="services__modal-content">
                        <h4 className="services__modal-title">
                          {q.title} <br />
                          <span style={{ fontSize: "0.9rem", color: "#666", fontWeight: "normal" }}>
                            {q.subtitle}
                          </span>
                        </h4>
                        
                        <i
                          className="uil uil-times services__modal-close"
                          onClick={() => setOpenModal(null)}
                        ></i>

                        <ul className="services__modal-services grid">
                          {q.modal.map((item, i) => (
                            <li className="services__modal-service" key={i}>
                              <i className="uil uil-check-circle services__modal-icon"></i>
                              <p className="services__modal-info">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;