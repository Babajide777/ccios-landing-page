"use client";

import React from "react";
import { Herostyled } from "../Styles/Components/Hero.styled";

const Hero: React.FC = () => {
  return (
    <Herostyled>
      <div className="hero-content">
        <h1>Ccios</h1>
        <p>Master the art of artisan bread baking</p>
        <div className="button">
          <a href="#" className="cta-button" id="get-started-button">
            Get Started
          </a>
        </div>
      </div>
    </Herostyled>
  );
};

export default Hero;
