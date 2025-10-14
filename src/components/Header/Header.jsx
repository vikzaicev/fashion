import React from "react";
import "./styles.css";
import img from "../../img/logo.svg";

function Header() {
  return (
    <div className="container header">
      <div className="logo">
        <div className="icon">
          <img src={img} alt="logo" />
        </div>
        <div className="title">FASHION</div>
      </div>
      <div className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <a href="#" className="nav_link">
              CATALOGUE
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              FASHION
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              FAVOURITE
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              LIFESTYLE
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link_sing">
              SIGN UP
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
