import React, { useState, useEffect } from "react";
import "../App.css";
import "./HeroLarge.css";

function HeroLarge() {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 865);
  const [isIpadPro, setIsIpadPro] = useState(
    window.innerWidth >= 1024 && window.innerHeight >= 1366
  );

  const updateMed = () => {
    setIsTablet(window.innerWidth < 865);
    setIsIpadPro(window.innerWidth >= 1024 && window.innerHeight >= 1366);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMed);
    return () => window.removeEventListener("resize", updateMed);
  });

  return (
    <div
      className={
        isTablet
          ? "wrapper-tablet"
          : isIpadPro
          ? "wrapper-ipadpro"
          : "wrapper-desktop "
      }
    >
      <img
        className={
          isTablet
            ? "image-tablet"
            : isIpadPro
            ? "image-ipadpro"
            : "image-desktop"
        }
        src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-desktop.jpg"
        alt="closeup of a woman in an orange shirt and a gold bracelet looking at the camera with a large green plant behind her"
      />
    </div>
  );
}

export default HeroLarge;
