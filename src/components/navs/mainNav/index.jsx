import style from "../style.module.css";
import { NavLink } from "react-router-dom";
// import { Button } from "../../buttons";
import logoMobile from "../../../assets/svg/logoMobile.svg";
import EN from "../../../assets/svg/enWorld.svg";
const MainNav = () => {
  return (
    <nav className={["main__nav", style.main__nav_wrapper].join(" ")}>
      <img src={logoMobile} alt="logoMobile" />

      <ul>
        <NavLink
          // to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          demo{" "}
        </NavLink>
        <NavLink
          // to="/about-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          demo{" "}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          demo{" "}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          demo{" "}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          demo{" "}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          demo{" "}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? style.active : ""
          }
        >
          demo{" "}
        </NavLink>
      </ul>
      <img src={EN} alt="EN" />
      {/* <Button children={"Get a Quote"} onClick={() => console.log("first")} /> */}
    </nav>
  );

  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink to="/">Home</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/about">About</NavLink>
  //       </li>
  //       {/* Add more NavLinks as needed */}
  //     </ul>
  //   </nav>
  // );
};

export default MainNav;
