import React from "react";
import "./styles.css";
import fb from "../../../img/fb.svg";
import inst from "../../../img/inst.svg";
import lin from "../../../img/in.svg";
import tw from "../../../img/tw.svg";

function Social() {
  return (
    <div className="social">
      <div className="social__title">FASHION</div>
      <div className="social__text">
        Complete your style with awesome clothes from us.
      </div>
      <div className="social__meseng">
        <img src={fb} alt="fb" className="social__img" />
        <img src={inst} alt="inst" className="social__img" />
        <img src={tw} alt="tw" className="social__img" />
        <img src={lin} alt="lin" className="social__img" />
      </div>
    </div>
  );
}

export default Social;
