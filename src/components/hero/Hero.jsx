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
            <button className="btn1">Latest projects</button>
            <button className="btn2">Contact me</button>
          </div>
          <img src="./scroll.png" alt="scroll" />
        </div>
      </div>
      <div className="slidingTextContainer">Developer Designer Creative</div>
      <div className="imageContainer">
        <img src="/hero.png" alt="profile image" />
      </div>
    </div>
  );
};

export default Hero;
