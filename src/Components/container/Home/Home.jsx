import React from "react";
import "./Home.scss";
import babe from "../../../assets/babe.jpg";

const Home = () => {
  return (
    <div className="container" id="home">
      <div className="profile">
        <img src={babe} alt="baby" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, i'm <span>Raj Shukla</span>
        </h3>
        <span className="work">Frontend Devloper</span>
        <span className="text">
          Passionate <br />
          to craft innovative <br />
          web products.
        </span>
        <a href="Contact">Connect whith me</a>
        <div className="web">Web Devloper</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelancer">Freelancer</div>
      </div>
    </div>
  );
};

export default Home;
