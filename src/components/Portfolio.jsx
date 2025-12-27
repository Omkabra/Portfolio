import React, { useState, useEffect } from "react";

// --- IMAGE IMPORTS ---
import alpha1 from "../Assets/img/alphapro1.png";
import alpha2 from "../Assets/img/alphapro2.png";
import alpha3 from "../Assets/img/alphapro3.png";

import n8n1 from "../Assets/img/n8n1.png";
import n8n2 from "../Assets/img/n8n2.png";

import rudhira1 from "../Assets/img/Rudhira1.png";
import rudhira2 from "../Assets/img/Rudhira2.png";
import rudhira3 from "../Assets/img/Rudhira3.png";
import rudhira4 from "../Assets/img/Rudhira4.png";

// IMAGE GROUPS
const projects = [
  {
    title: "Financial Analytics Dashboard",
    desc:
      "Built a financial dashboard combining Overview, EPS vs Guidance, and News. Integrated Quartr API (V3) & FMP APIs to fetch historical data and reduce ingestion errors by 90%.",
    tech: "Next.js, TypeScript, Recharts, Node.js, Quartr API",
    link: "https://www.alphapro.ai",
    images: [alpha1, alpha2, alpha3],
  },
  {
    title: "Algo-Trading Automation",
    desc:
      "Built automated workflows in n8n to streamline trading operations and trigger automated sell alerts based on defined trading logic.",
    tech: "n8n, Webhooks, JavaScript, Excel Integration",
    images: [n8n1, n8n2],
  },
  {
    title: "Rudhira",
    desc:
      "A health-tech solution to streamline donor-recipient interactions with secure authentication and analytics dashboards.",
    tech: "MERN Stack, Figma",
    link: "https://github.com/agrawalanshika307/Rudhira",
    images: [rudhira1, rudhira2, rudhira3, rudhira4],
  },
];

// ---------- SMALL AUTO ROTATOR ----------
const ImageSlider = ({ images, interval = 2500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((p) => (p + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: ".5rem",
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src={images[index]}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

function Portfolio() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Recent Development Work</span>

      {/* ---------- GRID ---------- */}
      <div
        className="portfolio__container container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="portfolio__content grid"
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              cursor: "pointer",
            }}
            onClick={() => setOpenProject(p)}
          >
            <ImageSlider images={p.images} />

            <div className="portfolio__data">
              <h3 className="portfolio__title">{p.title}</h3>
              <p className="portfolio__description">{p.desc}</p>
              <div className="portfolio__tech">
                <strong>Stack:</strong> {p.tech}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- POPUP MODAL ---------- */}
      {openProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
          onClick={() => setOpenProject(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "1rem",
              padding: "2rem",
              maxWidth: "900px",
              width: "95%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: "1rem" }}>{openProject.title}</h2>

            <ImageSlider images={openProject.images} interval={2000} />

            <p style={{ marginTop: "1rem" }}>{openProject.desc}</p>

            <p>
              <strong>Stack:</strong> {openProject.tech}
            </p>

            {openProject.link && (
              <a
                href={openProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--flex button--small"
                style={{ marginTop: "1rem" }}
              >
                Open Link
              </a>
            )}

            <button
              className="button button--flex button--small"
              style={{ marginTop: "1rem", background: "#444", color: "#fff" }}
              onClick={() => setOpenProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
