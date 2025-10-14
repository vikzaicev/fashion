import React from "react";
import "./styles.css";
import img from "../../../img/explore.png";

function Explore() {
  return (
    <div className="container">
      <div className="blok">
        <div className="info">
          <div className="title1">
            <span className="title1__span">LET’S </span>
            EXPLORE{" "}
            <span className="title1__span title1__span_yelow">UNIQUE </span>
            CLOTHES.
          </div>
          <div className="info__descr">
            Live for Influential and Innovative fashion!
          </div>
          <div className="info__botom">
            <button className="info__btn">Shop Now</button>
          </div>
        </div>
        <div className="foto">
          <img src={img} alt="foto" />
          <span className="star1"></span>
          <span className="star2"></span>
          <span className="star3"></span>
          <span className="star4"></span>
        </div>
      </div>
    </div>
  );
}

export default Explore;
