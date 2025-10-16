import Navig from "./Navig/Navig";
import Social from "./Social/Social";
import "./styles.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__blok">
          <Social />
          <Navig />
        </div>
      </div>
    </div>
  );
};
