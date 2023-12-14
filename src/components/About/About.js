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
              Líder del grupo ALCÓN COLOMBIA SAS. Contadora Pública, e Ingeniera
              Financiera, especialista en Normas Internacionales de Información
              Financiera, Costos y Presupuestos, Revisoría Fiscal y Auditoría.
              Con amplia experiencia en los sectores financiero y tributario.
              Identifico las necesidades específicas de cada cliente utilizando
              procedimientos metódicos de investigación de mercado y tendencias
              económicas. Me desempeño con un alto nivel de profesionalismo,
              confidencialidad, ética, lealtad y los mayores estándares de
              calidad. Con gusto me reuniré con usted para responder cualquier
              pregunta que pueda tener sobre su situación financiera.
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
