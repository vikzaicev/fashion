import React, { useState, useEffect } from "react";
import "./styles.css";
import img from "../../img/logo.svg";
// import burger from "../../img/burger.svg";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <div className="container header">
      <div className="logo">
        <div className="icon">
          <img src={img} alt="logo" />
        </div>
        <div className="title">FASHION</div>
      </div>
      <div className="nav">
        <span
          onClick={() => setOpen((open) => !open)}
          className={`nav__span ${open ? "activ" : ""}`}
        ></span>
        <ul className={`nav_list ${open ? "activ" : ""}`}>
          <li className="nav_item">
            <a href="!#" className="nav_link">
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
        <div className="nav__burger" onClick={() => setOpen((open) => !open)}>
          {/* <img src={burger} alt="burger" /> */}
          <div className={`burger ${open ? "activ" : ""}`}>
            <span className="burger__span1"></span>
            <span className="burger__span2"></span>
            <span className="burger__span3"></span>
          </div>
          {/* <div className={`close ${open ? "activ" : ""}`}></div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
