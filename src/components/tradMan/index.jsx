import React from "react";
import style from "./style.module.css";
import tradMan from "../../assets/svg/tradMan.svg";
import arrowUp from "../../assets/svg/arrowUp.svg";
import { Button } from "../buttons";

const TradMan = () => {
  return (
    <div className={style.sectionWrapper}>
      <img src={tradMan} alt="tradMan" className={style.tradMan} />
      <div>
        <h2>Invest in the Future of Adaobi & Sons</h2>
        <p>
          Be a part of Ada & Sons's remarkable journey towards progress and
          innovation. Here, we showcase a range of transformative projects that
          the Ada & Sons Government is embarking on, offering you a chance to
          invest in these initiatives and reap the rewards of your partnership.
        </p>{" "}
        <div className={style.btns}>
          <Button
            children={"Invest in us "}
            onClick={() => console.log("Invest in us ")}
            color="#0CAD8E"
            backgroundColor=" #F1DDC4"
          />{" "}
          <img src={arrowUp} alt="arrow Up" />
        </div>
      </div>
    </div>
  );
};

export default TradMan;
