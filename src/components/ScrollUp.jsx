import React, { useEffect, useState } from "react";

function ScrollUp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY >= 560);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="#" className={`scrollup${show ? " show-scroll" : ""}`} id="scroll-up">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
export default ScrollUp;
