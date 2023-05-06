import React from "react";
import "../style/menu.css";
import { Data } from "../Data.js";
import DataShow from "./DataShow";
const Menu = () => {
  return (
    <>
      <div className="menuHead">
        <h2>BURGERLARIMIZ</h2>
      </div>
      <div className="menu">
        {Data.map((item, index) => {
          return <DataShow key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Menu;
