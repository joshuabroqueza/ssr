import React from "react";
import "./SectionGallery.css";
import ScnGlryImage from "./images/Group 82.png";
import "@fontsource/reenie-beanie";

function SectionGallery() {
  return (
    <div className="sectionGlry">
      <img src={ScnGlryImage} alt="ssr-compilation" />
      <div className="imgSectionText">Explore, Enjoy & Chill</div>
    </div>
  );
}

export default SectionGallery;
