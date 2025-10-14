import Header from "./components/Header/Header";
import Arrivals from "./components/Main/Arrivals/Arrivals";
import { Download } from "./components/Main/Download/Download";
import { Email } from "./components/Main/Email/Email";
import Explore from "./components/Main/Explore/Explore";
import Favorite from "./components/Main/Favorite/Favorite";
import Label from "./components/Main/Label/Label";
import Paydey from "./components/Main/Payday/Paydey";
import "./reset.css";

function App() {
  return (
    <>
      <Header />
      <Explore />
      <Label />
      <Arrivals />
      <Paydey />
      <Favorite />
      <Download />
      <Email />
    </>
  );
}

export default App;
