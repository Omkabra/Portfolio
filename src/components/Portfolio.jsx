import React from "react";
import rudhiraImg1 from "../Assets/img/Rudhira1.png";
import rudhiraImg2 from "../Assets/img/Rudhira2.png";
import rudhiraImg3 from "../Assets/img/Rudhira3.png";
import rudhiraImg4 from "../Assets/img/Rudhira4.png";
//import tasksyncImg1 from "../Assets/img/tasksync1.png";
///import tasksyncImg2 from "../Assets/img/tasksync2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        className="portfolio__container container"
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {/* Project 1 - Rudhira */}
        <SwiperSlide>
          <div className="portfolio__content grid">
            {/* Inner Swiper for images */}
            <Swiper
              className="portfolio__img-swiper"
            modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              Navigation
              autoplay={{
            delay: 2000, // 2.5 seconds between slides
            disableOnInteraction: false, // keeps autoplay after manual navigation
  }}
              //style={{ width: 310, height: 200, marginBottom: 16 }}
            >
              <SwiperSlide>
                <img src={rudhiraImg1} className="portfolio__img" alt="Rudhira Screenshot 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rudhiraImg2} className="portfolio__img" alt="Rudhira Screenshot 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rudhiraImg3} className="portfolio__img" alt="Rudhira Screenshot 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rudhiraImg4} className="portfolio__img" alt="Rudhira Screenshot 4" />
              </SwiperSlide>
            </Swiper>
            <div className="portfolio__data">
              <h3 className="portfolio__title">Rudhira</h3>
              <p className="portfolio__description">
                Rudhira is a web-based platform designed to streamline blood donation and management. It connects donors, recipients, hospitals, and blood banks to enable faster access to life-saving blood.
              </p>
              <div className="portfolio__tech">
                <strong>Tech Stack:</strong>
                <ul>
                  <li>React.js</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>Figma</li>
                  <li>MongoDb</li>
                </ul>
              </div>
              <a
                href="https://github.com/agrawalanshika307/Rudhira"
                className="button button--flex button--small portfolio__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
                <i className="uil uil-external-link-alt button__icon"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Project 2 - TaskSync */}
      {/*  <SwiperSlide>
          <div className="portfolio__content grid">
            {/*<Swiper
              className="portfolio__img-swiper"
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              style={{ width: 310, height: 200, marginBottom: 16 }}
            >
             <SwiperSlide>
                <img src={tasksyncImg1} className="portfolio__img" alt="TaskSync Screenshot 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={tasksyncImg2} className="portfolio__img" alt="TaskSync Screenshot 2" />
              </SwiperSlide>
            </Swiper>
            <div className="portfolio__data">
              <h3 className="portfolio__title">TaskSync</h3>
              <p className="portfolio__description">
                TaskSync is a to-do list and productivity app that helps users manage tasks, set deadlines, and track their progress with a clean and responsive UI.
              </p>
              <div className="portfolio__tech">
                <strong>Tech Stack:</strong>
                <ul>
                  <li>React.js</li>
                  <li>CSS3 (Flexbox & Grid)</li>
                  <li>LocalStorage</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <a
                href="https://github.com/yourusername/tasksync"
                className="button button--flex button--small portfolio__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
                <i className="uil uil-external-link-alt button__icon"></i>
              </a>
              <a
                href="https://tasksync-app.netlify.app"
                className="button button--flex button--small portfolio__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live
                <i className="uil uil-external-link-alt button__icon"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>*/}
      </Swiper>
    </section>
  );
}

export default Portfolio;
