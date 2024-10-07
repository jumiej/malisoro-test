import React from "react";
import triangle from "../../assets/svg/triangle.svg";
import style from "./style.module.css";
import entrance1 from "../../assets/svg/entrance1.svg";
import entrance2 from "../../assets/svg/entrance2.svg";
import entrance3 from "../../assets/svg/entrance3.svg";
import entrance4 from "../../assets/svg/entrance4.svg";
import halfUni from "../../assets/svg/halfUni.svg";
import yelo from "../../assets/svg/yeloSportRec.svg";
import uniTesxt from "../../assets/svg/UniText.svg";

const University = () => {
  return (
    <div className={style.sectionWrapper}>
      <div className={style.University}>
        <div className={style.uniHeader}>
          <h2>Top Universities in Ada & Sons</h2>
          <img src={triangle} alt="triangle" />
        </div>
        <div className={style.complex}>
          <div>
            <div className={style.entrance}>
              <img src={entrance1} alt="entrance1" />
              <div className={style.smallEntrace}>
                <img src={entrance2} alt="entrance2" />
                <img src={entrance3} alt="entrance3" />
                <img src={entrance4} alt="entrance4" />
              </div>
            </div>
            <img src={uniTesxt} alt="uniTesxt" className={style.uniTesxt} />
          </div>
          <img src={halfUni} alt="halfUni" className={style.halfUni} />
        </div>
      </div>
      <div className={style.yelo}>
        <img src={yelo} alt="yelo" className={style.yelo} />
      </div>
    </div>
  );
};

export default University;
