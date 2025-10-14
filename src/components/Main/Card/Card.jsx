import React from "react";
import img from "../../../img/Arrow.svg";
import "./styles.css";

function Card({ card }) {
  return (
    <div className="card">
      <div className="card__image">
        <img className="card__img" src={card.img} alt={card.name} />
      </div>
      <div className="card__info">
        <div className="card__left">
          <div className="card__name">{card.name}</div>
          <div className="card__link">Explore Now!</div>
        </div>
        <div className="card__right">
          <img src={img} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Card;
