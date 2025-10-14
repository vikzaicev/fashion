import "./styles.css";
import img from "../../../img/download.png";
import imgBtn1 from "../../../img/google-play.png";
import imgBtn2 from "../../../img/app-store.png";

export const Download = () => {
  return (
    <div className="container">
      <div className="down__blok">
        <div className="down__info">
          <div className="down__title">DOWNLOAD APP & GET THE VOUCHER!</div>
          <div className="down__text">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </div>
          <div className="down__btn">
            <div className="down__btn1">
              <img className="down__img" src={imgBtn1} alt="google-play" />
            </div>
            <div className="down__btn1">
              <img className="down__img" src={imgBtn2} alt="app-store" />
            </div>
          </div>
        </div>
        <div className="dowd__foto">
          <img src={img} alt="foto" />
        </div>
      </div>
    </div>
  );
};
