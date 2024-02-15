import React from "react";
import "./About.scss";
import person from "../../assets/icons/xiomara/xiomara foto.webp";
import wave2 from "../../assets/img/waveyellow.png";

export function About() {
  return (
    <div className="About" id="about">
      <div className="About__top">
        <img src={wave2} alt="wave" />
      </div>
      <div className="About__container">
        <div className="About__content">
          <div className="About__div1">
            <h1>Sobre mi</h1>
            <p>
              Responsable, con alto sentido de pertenencia, ordenada, amable y
              con capacidad para resolver problemas. Actualizo constantemente
              mis conocimientos en las áreas contable y de seguridad social.
              Cuento con conocimientos en costos, manejo de presupuestos,
              inventarios, ejecución del ciclo contable, procesos de nómina,
              facturación, cartera, tesorería y documentos electrónicos; además
              de habilidades básicas en parametrización de software contable.
              Con gusto me reuniré con usted para responder cualquier pregunta
              que pueda tener .
              <span style={{ fontWeight: "bold" }}> ¡Contácteme!</span>
            </p>
          </div>
          <div className="About__separator"></div>
          <div className="About__div2">
            <div>
              <img src={person} alt="person" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
