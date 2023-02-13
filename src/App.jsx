import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/container/Home/Home.jsx";
import About from "./Components/container/About/About.jsx";
import Skills from "./Components/container/Skills/Skills.jsx";
import Portfolio from "./Components/container/Portfolio/Portfolio.jsx";
import Contact from "./Components/container/Contact/Contact.jsx";
import Footer from "./Components/container/Footer/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
