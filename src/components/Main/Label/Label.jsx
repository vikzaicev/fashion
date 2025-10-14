import React from "react";
import img1 from "../../../img/label1.jpg";
import img2 from "../../../img/label22.png";
import img3 from "../../../img/label3.png";
import img4 from "../../../img/label4.png";
import img5 from "../../../img/label5.png";
import img6 from "../../../img/label6.png";

import "./styles.css";

function Label() {
  return (
    <section className="label">
      <div className="container">
        <ul className="label__list">
          <li className="label__item">
            <img className="label__img" src={img1} alt="H&M" />
          </li>
          <li className="label__item">
            <img src={img2} alt="OBEY" />
          </li>
          <li className="label__item">
            <img src={img3} alt="shopify" />
          </li>
          <li className="label__item">
            <img src={img4} alt="Lacoste" />
          </li>
          <li className="label__item">
            <img src={img5} alt="Levis" />
          </li>
          <li className="label__item">
            <img src={img6} alt="Amazon" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Label;
