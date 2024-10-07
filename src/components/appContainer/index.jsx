import HeroSection from "../hero";
import NavWrapper from "../navs";
import { Outlet } from "react-router-dom";
import TradDrum from "../tradDrum";
import InvestmentOpportunity from "../investmentOpportunity";
import TradMan from "../tradMan";
import Exploration from "../exploration";
import Landmark from "../landmark";
import Entertainment from "../entertainment/entertaiment";
import University from "../university";
import AdaDen from "../adaDen";
import Footer from "../footer";

const AppConatiner = () => {
  return (
    <div>
      <NavWrapper />
      <HeroSection />
      <TradDrum />
      <InvestmentOpportunity />
      <TradMan />
      <Exploration />
      <Landmark />
      <Entertainment />
      <University />
      <AdaDen />
      <Footer />
      <Outlet />
    </div>
  );
};

export default AppConatiner;
