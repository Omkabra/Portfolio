import React from "react";

const activities = [
  {
    role: "Captain - Skating Team",
    org: "BITS Pilani",
    period: "Jul 2024 - May 2025",
    desc: "Led the squad to multiple victories. Recognized as MVP (2025). Secured Silver in Roll Ball & Relay, and Bronze in Speed Skating.",
    icon: "uil-trophy"
  },
  {
    role: "Teaching Assistant - Microprocessors & Interfacing",
    org: "BITS Pilani",
    period: "Aug 2024 - Dec 2024",
    desc: "Mentored students in lab sessions, evaluated assignments, and assisted in debugging assembly language & embedded C code for ARM/8086 architectures.",
    icon: "uil-processor"
  },
  {
    role: "Teaching Assistant - TLC",
    org: "BITS Pilani",
    period: "Jan 2025 - May 2025",
    desc: "Assisted faculty in organizing academic events (FDP-PEER, TEACH 2025) and enhanced participants' teaching skills.",
    icon: "uil-book-reader"
  },
  {
    role: "Peer Mentor",
    org: "Peer Mentorship Programme",
    period: "Oct 2023 - May 2024",
    desc: "Guided new students through academic and personal adjustments to college life.",
    icon: "uil-users-alt"
  }
];

function ExtraCurricular() {
  return (
    <section className="section" id="extra-curricular">
      <h2 className="section__title">Leadership & Activities</h2>
      <span className="section__subtitle">Positions of Responsibility</span>
      
      <div className="work__container container grid">
        {activities.map((act, idx) => (
          <div className="work__item" key={idx}>
             <div className="work__header">
                <i className={`uil ${act.icon} work__icon`}></i>
                <div>
                    <h3 className="work__position">{act.role}</h3>
                    <span className="work__company">
                    {act.org} &mdash; <span className="work__period">{act.period}</span>
                    </span>
                </div>
             </div>
            <p className="work__details">
              {act.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtraCurricular;