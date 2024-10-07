import React from "react";
import entertainment from "../../assets/svg/entertainment.svg";
import style from "./style.module.css";
import signature from "../../assets/svg/ww.svg";
import collabo from "../../assets/svg/collabo.svg";

const Entertainment = () => {
  return (
    <div className={style.Entertainment}>
      <h2>
        Ada & Sons Entertainment{" "}
        <span>
          <img src={signature} alt={signature} />
        </span>
      </h2>

      <img src={entertainment} alt="entertainment" />
      <div>
        <img src={collabo} alt="collaboration" />
      </div>
    </div>
  );
};

export default Entertainment;
