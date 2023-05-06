import React from "react";
import "../style/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <button className="btnOrder" onClick={() => navigate("/menu")}>
        SİPARİŞ VER
      </button>
    </div>
  );
};

export default Home;
