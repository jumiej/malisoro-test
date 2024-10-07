import React from "react";
import whyInvest from "../../assets/svg/whyInvest.svg";
import bgS from "../../assets/svg/bgS.svg";
import investCard1 from "../../assets/svg/investCard1.svg";
import investCard2 from "../../assets/svg/investCard2.svg";
import investCard3 from "../../assets/svg/investCrad3.svg";
import style from "./style.module.css";
import { Button } from "../buttons";
import arrowUp from "../../assets/svg/arrowUp.svg";

const InvestmentOpportunity = () => {
  return (
    <div className={style.main}>
      <div className={style.sectionWrapper}>
        <h2>
          Investments, Opportunities & <br /> Advantage{" "}
          <span>
            <img src={whyInvest} alt="whyInvest" />
          </span>
        </h2>
        <div className={style.desktop}>
          <p>
            kadnisdvbsonvisndivnsjdbvishvjbsdjbvosdvdivhsidhvioshdivjpdibsdbovuisdjvbsndovinsivozvvjozbxivzixnvka{" "}
          </p>
          <p>
            ncinzicnznckjpichaisnbjabudjaidiaodjvbudvusibdjbdivubdjvbudsvjisdbvjbdsvjbudsbijhabdjvdoivbajdvoiadjo
          </p>
          <p> viaodnvojanjoansknadvjanovanojaidv.</p>
        </div>
        <div className={style.mobile}>
          <p>jdbvishvjbsdjbvosdvdivhsjbudvdsvano</p>
          <p>dhvioshdivjpdibsdbovudbvjisdjvbsn</p>
          <p> sbijhabdjvdoivbajddbdjvbusvjisbvoiad</p>
          <p>joviaodnvojanjoansbudvusibdknadvjano.</p>
          <p> jaidvdovinsivdjvjbdivozvvjozbxivzi</p>
          <p>xnvncinzicnznckjaidiaoupichaisnbj</p>
        </div>
        <img src={bgS} alt="bgS" className={style.bgS} />
        <div className={style.investCards}>
          <img
            src={investCard1}
            alt="investCard1"
            className={style.investCard1}
          />
          <img
            src={investCard2}
            alt="investCard2"
            className={style.investCard2}
          />
          <img
            src={investCard3}
            alt="investCard3"
            className={style.investCard3}
          />
        </div>
        <div className={style.btns}>
          <Button
            children={"Invest in us "}
            onClick={() => console.log("Invest in us ")}
            color="#0CAD8E"
            backgroundColor=" #F1DDC4"
          />{" "}
          <img src={arrowUp} alt="arrowUp" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunity;
