import style from "../style.module.css";
import { NavLink } from "react-router-dom";
import logoMobile from "../../../assets/svg/logoMobile.svg";
import hamburger from "../../../assets/svg/hambuger.svg";
import { useState } from "react";

const MobileNav = () => {
  const [menuDropdown, toggleMenuDropdown] = useState(false);
  return (
    <>
      <div className={["mobile__nav", style.mobile__nav_wrapper].join(" ")}>
        <img src={logoMobile} alt="logoMobile" />
        <button
          onClick={() => toggleMenuDropdown(!menuDropdown)}
          style={{ background: "none", border: "none", padding: 0 }} // Optional: to remove default button styles
        >
          <img src={hamburger} alt="hamburger" />
        </button>
      </div>
      {menuDropdown && (
        <div className={style.menu__dropdown}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? style.active : ""
            }
            onClick={() => toggleMenuDropdown(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? style.active : ""
            }
            onClick={() => toggleMenuDropdown(false)}
          >
            demo
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? style.active : ""
            }
            onClick={() => toggleMenuDropdown(false)}
          >
            demo{" "}
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? style.active : ""
            }
            onClick={() => toggleMenuDropdown(false)}
          >
            demo{" "}
          </NavLink>
        </div>
      )}
    </>
  );
};

export default MobileNav;
