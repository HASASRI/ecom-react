import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
