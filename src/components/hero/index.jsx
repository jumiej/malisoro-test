import React from "react";
import style from "./style.module.css";
import { Button } from "../buttons";
import desert1 from "../../assets/svg/desert1.svg";
import desert2 from "../../assets/svg/desert2.svg";
import governorInCard from "../../assets/svg/governorInCard.svg";
import girlsINCard from "../../assets/svg/girlsInCard.svg";

const HeroSection = () => {
  return (
    <div className={style.sectionWrapper}>
      <div className={style.HeroSection}>
        <div className={style.heroContent}>
          <h1>
            Welcome to <br />
            Ada-obi & SOns
          </h1>
          <Button
            children={"Invest in us "}
            onClick={() => console.log("Invest in us ")}
            color="#0CAD8E"
            backgroundColor=" #F1DDC4"
          />
        </div>
        <div className={style.cardWrapper}>
          <div className={style.heroCards}>
            <div className={style.textCard}>
              <div>
                <div className={style.text1}>
                  <h4>loremipsum</h4>
                  <p>Created</p>
                </div>
                <div className={style.text1} style={{ marginTop: "13px" }}>
                  <h4>loremipsum</h4>
                  <p>State GDP</p>
                </div>
              </div>
              <div className={style.bottom}>
                <div className={style.text1}>
                  <h4>loremipsum</h4>
                  <p>Proposed IGR</p>
                </div>
                <div className={style.text1} style={{ marginTop: "13px" }}>
                  <h4>loremipsum</h4>
                  <p>Land Area</p>
                </div>
              </div>
            </div>
            <img src={desert1} alt="desert1" />
            <img src={desert2} alt="desert2" />{" "}
            <img src={governorInCard} alt="governorInCard" />
            <img src={girlsINCard} alt="girlsINCard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
