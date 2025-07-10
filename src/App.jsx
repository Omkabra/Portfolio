import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import "./App.css";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("selected-theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
    localStorage.setItem("selected-theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main className="main">
        <Home />
        <About />
        <WorkExperience/>
        <Skills />
        <Qualification />
        <Portfolio/>
        
        
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;


