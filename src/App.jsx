import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/container/Home/Home";
import About from "./Components/container/About/About";
import Skills from "./Components/container/Skills/Skills";
import Portfolio from "./Components/container/Portfolio/Portfolio";
import Contact from "./Components/container/Contact/Contact";
import Footer from "./Components/container/Footer/Footer";
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
