import React from "react";
import "./Banner.scss";
import presupuesto from "../../assets/icons/xiomara/presupuesto.png";
import engranaje from "../../assets/icons/xiomara/dinero.png";
import estadisticas from "../../assets/icons/xiomara/estadisticas.png";
import libro from "../../assets/icons/xiomara/libro-de-contabilidad2.png";

export function Banner() {
  return (
    <div className="Banner" id="home">
      <div className="Banner__div px-5">
        <h1>
          Xiomara
          <br />
          Franco
        </h1>
        <p>
          Contadora <br /> Especialista financiera
        </p>
      </div>
      <div>
        <div className="container">
          <div className="box1">
            <div className="box1__content">
              <div>
                <img src={engranaje} alt="engranaje" />
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="box2__content">
              <div>
                <img className="django" src={estadisticas} alt="estadisticas" />
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="box3__content">
              <div>
                <img src={presupuesto} alt="presupuesto" />
              </div>
            </div>
          </div>
          <div className="box4">
            <div className="box4__content">
              <div>
                <img src={libro} alt="libro" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
