import React from "react";
import style from "./style.module.css";
import icon from "../../assets/svg/logoMobile.svg";
import facebook from "../../assets/svg/facebook.svg";
import twiter from "../../assets/svg/twiter.svg";
import linkin from "../../assets/svg/linkin.svg";
import insta from "../../assets/svg/instagram.svg";

const Footer = () => {
  return (
    <div className={style.sectionWrapper}>
      <div className={style.footerWrapper}>
        <div className={style.footer}>
          <div>
            <img src={icon} alt="icon" />
            <p>
              Ada & Sons, located in southeastern Nigeria, is renowned for its
              coal mining history and is often referred to as the "Coal City
              State."
            </p>
          </div>{" "}
          <div>
            <h3>Ada & Sons</h3>
            <ul>
              <li>Home</li>
              <li>History</li>
              <li>Market place</li>
              <li>Book Appointment</li>
            </ul>
          </div>
          <div>
            <h3>Ada </h3>
            <ul>
              <li>Ada</li>
              <li>Governor’s Den</li>
              <li>Administration </li>
            </ul>
          </div>
          <div>
            <h3>Invest</h3>
            <ul>
              <li>Tech Ville</li>
              <li>Education</li>
              <li>Real Estate </li>
              <li> Agriculture</li>
              <li> Tourism</li>
            </ul>
          </div>
          {/* <hr /> */}
        </div>
        <hr className={style.divider} />
        <div className={style.footerBottom}>
          <p>
            &copy; <span> Copyright Ada & Sons 2023</span>
          </p>
          <div className={style.socials}>
            <img src={facebook} alt="facebook" />
            <img src={twiter} alt="twiter" />
            <img src={linkin} alt="linkin" />
            <img src={insta} alt="insta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
