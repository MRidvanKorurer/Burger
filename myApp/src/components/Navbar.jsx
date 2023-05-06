import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import Logo from "../assets/burgerlogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="links">
        <NavLink to={"/"}>ANASAYFA</NavLink>
        <NavLink to={"/menu"}>MENU</NavLink>
        <NavLink to={"/about"}>HAKKIMIZDA</NavLink>
        <NavLink to={"/contact"}>İLETİŞİM</NavLink>
      </div>
    </div>
  );
};
export default Navbar;
