import React from "react";
import "./Clients.scss";

import brand1 from "../../assets/img/xiomara/brand1.jpg";
import brand2 from "../../assets/img/xiomara/brand2.jpg";
import brand3 from "../../assets/img/xiomara/brand3.jpg";
import brand4 from "../../assets/img/xiomara/brand4.jpg";

export function Clients() {
  return (
    <div className="Clients-container">
      <div className="Clients-container__title">
        <h1>Clientes</h1>
      </div>
      <div className="Clients-container__content">
        <div>
          <img alt="brand1" src={brand1}></img>
        </div>
        <div>
          <img alt="brand2" src={brand2}></img>
        </div>
        <div>
          <img alt="brand3" src={brand3}></img>
        </div>
        <div>
          <img alt="brand4" src={brand4}></img>
        </div>
      </div>
    </div>
  );
}
