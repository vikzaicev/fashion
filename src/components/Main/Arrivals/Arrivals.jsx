import React from "react";
import "./styles.css";
import { dataCard } from "../../../dataCard";
import Card from "../Card/Card";

function Arrivals() {
  const data = dataCard;
  return (
    <div className="container">
      <div className="arrivals__title">NEW ARRIVALS</div>

      <div className="arrivals__cards">
        {data.map((card) => {
          return <Card card={card} key={card.img} />;
        })}
      </div>
    </div>
  );
}

export default Arrivals;
