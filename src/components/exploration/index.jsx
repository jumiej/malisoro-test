import React from "react";
import style from "./style.module.css";
import explorationDesign from "../../assets/svg/explorationDesign.svg";
import { Button } from "../buttons";
import playBtn from "../../assets/svg/playBtn.svg";

const Exploration = () => {
  return (
    <div className={style.sectionWrapper}>
      <h2>
        A Brief Exploration of Adaobi & Sons
        <span>
          <img src={explorationDesign} alt="explorationDesign" />
        </span>
      </h2>

      <div className={style.desktop}>
        <p>
          Adaobi & Sons,ijbdfoinsdionskodnnuidjwdjfnsdfjndfoianjfonad jaocjonasj
          ajs janoscajscoja sc as
          cjascjasinaosndoansojansinoiasninasjfnaisfnoasonoasdpoasdnasinopas
        </p>
      </div>
      <div className={style.mobile}>
        <p>Adaobi&Sons,ijbdfoinsdionskodncjascjaooa</p>
        <p>nuidjwdjfnsdfjndfoianjfonadjaocjonasndsj</p>
        <p>ajsjanoscajscojansojansinoiasninscsinaas</p>
        <p>asjfnaisfnoasonoasdpoasdnasinopas</p>
      </div>
      <div className={style.playSection}>
        <div className={style.play}>
          <Button
            children={"Play "}
            onClick={() => console.log("Invest in us ")}
            color="#FFFFF"
            backgroundColor=" #0CAD8E"
            image={playBtn}
          />
        </div>
        <div className={style.pause}>
          <Button
            children={"Pause"}
            onClick={() => console.log("Invest in us ")}
            color="#FFFFF"
            backgroundColor=" #0CAD8E"
            image={playBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Exploration;
