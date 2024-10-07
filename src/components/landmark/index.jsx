import React from "react";
import style from "./style.module.css";
import questionMark from "../../assets/svg/questionMark.svg";
import popolarStadium from "../../assets/svg/popularStadium.svg";
import landmark from "../../assets/svg/landmark.svg";
import rectangle from "../../assets/svg/greenRectangle.svg";
import slandmark from "../../assets/svg/sOnlandmark.svg";

const Landmark = () => {
  return (
    <div className={style.sectionWrapper}>
      <div className={style.adaLandmark}>
        <div className={style.questionLandmark}>
          <img src={questionMark} alt="questionMark" />
          <h2>Landmarks in Ada & Sons</h2>
        </div>

        <div className={style.popularLandmark}>
          <div className={style.popolarStadium}>
            <img src={popolarStadium} alt="popolarStadium" />
            <img src={landmark} alt="landmark" />
            <img src={slandmark} alt="rectangle" />
          </div>
          <img src={rectangle} alt="rectangle" className={style.rec} />
        </div>
      </div>
    </div>
  );
};

export default Landmark;
