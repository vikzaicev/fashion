import React from "react";
import "./styles.css";
import NavigBlok from "./NavigBlok/NavigBlok";

function Navig() {
  const dataNavig = [
    ["Company", "About", "Contact us", "Support", "Careers"],
    ["Quick Link", "Share Location", "Orders Tracking", "Size Guide", "FAQs"],
    ["Legal", "Terms & condition", "Privacy Policy"],
  ];
  return (
    <div className="navig__blok">
      {dataNavig.map((blok) => {
        return <NavigBlok key={blok} blok={blok} />;
      })}
    </div>
  );
}

export default Navig;
