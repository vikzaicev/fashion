import React from "react";
import img from "../../../img/payday.jpg";
import "./styles.css";

function Paydey() {
  return (
    <div className="paydey">
      <div className="container paydey__blok">
        <div className="foto">
          <img src={img} className="foto2" alt="foto" />
          <span className="star1"></span>
          <span className="star2"></span>
          <span className="star3"></span>
          <span className="star4"></span>
        </div>
        <div className="info1">
          <div className="title1">
            <span className="title1__span">PAYDAY </span>
            SALE NOW
          </div>
          <div className="info__descr">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </div>
          <div className="info__descr2">1 June - 10 June 2021</div>
          <div className="info__descr2">*Terms & Conditions apply</div>
          <div className="info__botom">
            <button className="info__btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paydey;
