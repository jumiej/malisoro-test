import React from "react";
import style from "./style.module.css";
import mainDen from "../../assets/svg/mainDen.svg";
import den1 from "../../assets/svg/den1.svg";
import den2 from "../../assets/svg/den2.svg";
import den3 from "../../assets/svg/den4.svg";
import den4 from "../../assets/svg/den4.svg";
import straightArrow from "../../assets/svg/viewArrow.svg";
import circleArrow from "../../assets/svg/circleArrowUp.svg";
const AdaDen = () => {
  return (
    <div className={style.sectionWrapper}>
      <h2>
        ADA <br /> Den
      </h2>
      <div className={style.AdaDen}>
        <img src={mainDen} alt="Governor Compliment" />
        <div className={style.smallDens}>
          <img src={den1} alt="" />
          <img src={den2} alt="" />
          <img src={den3} alt="" />
          <img src={den4} alt="" />
          <img
            src={straightArrow}
            alt="straightArrow"
            className={style.straightArrow}
          />
        </div>
      </div>
      <img src={circleArrow} alt="circleArrow" className={style.circleArrow} />
    </div>
  );
};

export default AdaDen;
