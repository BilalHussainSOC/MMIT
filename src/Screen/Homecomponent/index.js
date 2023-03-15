import Header from "../../Compoent/Header";
import CoinCrypto from "../Home/CoinCrypto";
import Product from "../Home/Product";
import RealMango from "../Home/RealMango";
import Benefits from "../Home/Benefits";
import CryptoCard from "../Home/CryptoCard";
import JournayMaongo from "../Home/JournayMango";
import Avialable from "../Home/Avialable";
import Footer from "../../Compoent/Footer";

const Homecomponent = () => {
  return (
    <div>
      {/* <Coinbiggner /> */}
      <Header />
      <CoinCrypto />
      <Product />
      <Benefits />
      <RealMango />
      <CryptoCard />
      <JournayMaongo />
      <Avialable />
      <Footer />
    </div>
  );
};

export default Homecomponent;
