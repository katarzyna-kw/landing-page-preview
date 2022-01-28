import React from "react";
import "../App.css";
import "./HeroSmall.css";

function HeroSmall() {
  return (
    <div className="image-wrapper">
      <img
        className="image"
        src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-mobile.jpg"
        alt="closeup of a woman in an orange shirt and a gold bracelet looking at the camera with a large green plant behind her"
      />
    </div>
  );
}

export default HeroSmall;
