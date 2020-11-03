import React from "react";
import "./Fog.scss";

function Fog() {
  return (
    <div className="Fog">
      <div id="FogLayer1" className="FogLayer">
        <div className="FogImage1"></div>
        <div className="FogImage2"></div>
      </div>
      <div id="FogLayer2" className="FogLayer">
        <div className="FogImage1"></div>
        <div className="FogImage2"></div>
      </div>
      <div id="FogLayer3" className="FogLayer">
        <div className="FogImage1"></div>
        <div className="FogImage2"></div>
      </div>
    </div>
  );
}

export default Fog;
