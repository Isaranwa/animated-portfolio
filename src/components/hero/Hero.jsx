import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <div>
            <h2>PENINAH ISARANWA</h2>
            <h1>Web developer and UI/UX designer</h1>
          </div>

          <div className="buttons">
            <button>Latest projects</button>
            <button>Contact me</button>
          </div>
          <img src="./scroll.png" alt="scroll" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="profile image" />
      </div>
    </div>
  );
};

export default Hero;
