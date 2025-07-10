import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", icon: "uil-estate", label: "Home" },
  { href: "#about", icon: "uil-user", label: "About" },
  { href: "#work", icon: "uil-message", label: "Experience" },
  { href: "#skills", icon: "uil-file-alt", label: "Skills" },
  { href: "#qualification", icon: "uil-briefcase-alt", label: "Qualification" },
  { href: "#portfolio", icon: "uil-scenery", label: "Projects" },
  
];

function Header({ darkTheme, setDarkTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Om</a>
        <div className={`nav__menu${showMenu ? " show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            {navLinks.map(link => (
              <li className="nav__item" key={link.href}>
                <a
                  href={link.href}
                  className="nav__link"
                  onClick={() => setShowMenu(false)}
                >
                  <i className={`uil ${link.icon} nav__icon`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={() => setShowMenu(false)}></i>
        </div>
        <div className="nav__btns">
          <i
            className={`uil ${darkTheme ? "uil-sun" : "uil-moon"} change-theme`}
            id="theme-button"
            onClick={() => setDarkTheme((v) => !v)}
            title="Toggle theme"
          ></i>
          <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
