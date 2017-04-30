import React from "react";
import sunWheelImage from "./images/sun-wheel.png";

const SunWheel = (props) => (
  <div>
    <div style={{
      backgroundSize: "cover",
      backgroundImage: `url(${sunWheelImage})`,
      display: "inline-block",
      height: "120px",
      width: "320px"
    }} />
  </div>
);

export default SunWheel