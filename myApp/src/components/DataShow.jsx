import React from "react";
import "../style/menu.css";

const DataShow = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt="menuImage" />
      <h3>{item.name}</h3>
      <p>{item.content}</p>
      <p className="price">{item.price} TL</p>
    </div>
  );
};

export default DataShow;
