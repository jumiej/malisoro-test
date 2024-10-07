import React from "react";
import style from "./style.module.css";
import drummer from "../../assets/svg/traddrummer.svg";
import seventeen from "../../assets/svg/seveteen.svg";
import twentyFive from "../../assets/svg/twentyFive.svg";
import hundredPlus from "../../assets/svg/hundredPlus.svg";

const TradDrum = () => {
  return (
    <div className={style.sectionWrapper}>
      <div className={style.TradDrumText}>
        <h2>
          Lorem Ipsum <br /> asifsdijsjbijsfoi
        </h2>
        <p>
          "Where vibrant culture thrives! Nestled in Nigeria, our rich heritage{" "}
          resonates through traditional dances, captivating festivals, and warm{" "}
          hospitality. Explore landmarks, savour cuisine, and immerse in Ada &{" "}
          Sons's cultural embrace. Discover the magic of our cherished cultural{" "}
          treasure."
        </p>
        <img src={drummer} alt="drummer" />
      </div>
      <div className={style.TradDrumNum}>
        <img src={seventeen} alt="seventeen" />
        <img src={twentyFive} alt="twentyFive" />
        <img src={hundredPlus} alt="hundredPlus" />
      </div>
    </div>
  );
};

export default TradDrum;
