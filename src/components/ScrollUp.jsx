import React, { useEffect, useState } from "react";
import "./scrollup.css"; // Assuming you have a CSS file for this

function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY >= 560);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to handle the scroll logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };

  return (
    <button 
      className={`scrollup${show ? " show-scroll" : ""}`} 
      onClick={scrollToTop}
      type="button" // Explicitly define button type
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
}

export default ScrollUp;