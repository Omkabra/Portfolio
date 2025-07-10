import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Om</h1>
            <span className="footer__subtitle">
              Engineering Student
            </span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#qualification" className="footer__link">Qualification</a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
            {/* Removed Contact-Me link */}
          </ul>
          {/* Contact Info Block */}
          <div className="footer__contact">
            <div className="contact__information">
              <i className="uil uil-calling contact__icon"></i>
              <span className="contact__subtitle">
                <a href="tel:9860222493">9860222493</a>
              </span>
            </div>
            <div className="contact__information">
              <i className="uil uil-envelope-minus contact__icon"></i>
              <span className="contact__subtitle">
                ommkabra@gmail.com
              </span>
            </div>
            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <span className="contact__subtitle">
                Jalgaon, Maharashtra, India
              </span>
            </div>
          </div>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/omkabra777"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://x.com/OmKabra777"
              target="_blank"
              className="footer__social"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; OM. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
