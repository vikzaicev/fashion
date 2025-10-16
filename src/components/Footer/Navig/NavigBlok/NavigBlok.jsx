import React from "react";
import "./styles.css";

function NavigBlok({ blok }) {
  return (
    <div className="navigblok">
      <div className="navigtitle">{blok[0]}</div>
      <div className="naviglinks">
        {blok.map((el, ind) => {
          if (ind > 0) {
            return <div className="naviglink">{el}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default NavigBlok;
