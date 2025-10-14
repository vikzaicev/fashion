import React from "react";
import { dataCard2 } from "../../../dataCard";
import Card2 from "../Card2/Card2";

function Favorite() {
  const data = dataCard2;
  return (
    <div className="container">
      <div className="arrivals__title">Young’s Favourite</div>

      <div className="arrivals__cards">
        {data.map((card) => {
          return <Card2 card={card} key={card.img} />;
        })}
      </div>
    </div>
  );
}

export default Favorite;
