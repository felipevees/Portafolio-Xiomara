import React, { useState } from "react";
import "./Skills.scss";
import { ModalComponent } from "./modal";

import contadora from "../../assets/icons/xiomara/contador.png";
import costos from "../../assets/icons/xiomara/presupuesto.png";
import presupuestos from "../../assets/icons/xiomara/contabilidad.png";
import computador from "../../assets/icons/xiomara/computer.png";
import documento from "../../assets/icons/xiomara/documento.png";

export function Skills() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const handleOpen = (event) => {
    setOpen(true);
    const clickedElement = event.currentTarget.id;
    if (clickedElement == "gestionFinanciera") {
      setContent("gestionFinanciera");
    } else if (clickedElement == "presupuestos") {
      setContent("presupuestos");
    } else if (clickedElement == "asesorias") {
      setContent("asesorias");
    } else if (clickedElement == "administracion") {
      setContent("administracion");
    } else if (clickedElement == "digitacion") {
      setContent("digitacion");
    }
    console.log(content);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      {" "}
      <ModalComponent open={open} handleClose={handleClose} content={content} />
      <div className="Skills" id="servicios">
        <div className="Skills__container">
          <div className="Skills__content">
            <div className="Skills__content__header">
              <h1 style={{ fontSize: "45px", marginBottom: "20px" }}>
                Servicios
              </h1>
              <p>
                Como contadora profesional con amplia experiencia en el campo
                financiero, ofrezco una gama integral de servicios para
                satisfacer las necesidades contables de mi distinguida
                clientela. Con habilidades especializadas y un profundo
                conocimiento en la gestión financiera, tengo la capacidad de
                brindar servicios tales como:
              </p>
            </div>
            <div className="Skills__skills">
              <div
                id="gestionFinanciera"
                onClick={handleOpen}
                className="Skills__card"
              >
                <div className="Skills__card__image">
                  <img className="django" src={costos} alt="costos" />
                </div>
                <div className="Skills__card__skill">
                  <h1>Gestion financiera y tributaria</h1>
                </div>
              </div>
              <div
                id="presupuestos"
                onClick={handleOpen}
                className="Skills__card"
              >
                <div className="Skills__card__image">
                  <img src={presupuestos} alt="presupuestos" />
                </div>
                <div className="Skills__card__skill">
                  <h1>Presupuestos</h1>
                </div>
              </div>
              <div id="asesorias" onClick={handleOpen} className="Skills__card">
                <div className="Skills__card__image">
                  <img
                    style={{ borderRadius: "12px" }}
                    src={contadora}
                    alt="contadora"
                  />
                </div>
                <div className="Skills__card__skill">
                  <h1>Asesorias financieras</h1>
                </div>
              </div>
              <div
                id="administracion"
                onClick={handleOpen}
                className="Skills__card"
              >
                <div className="Skills__card__image">
                  <img src={computador} alt="computador" />
                </div>
                <div className="Skills__card__skill">
                  <h1>Administracion de documentos</h1>
                </div>
              </div>
              <div
                id="digitacion"
                onClick={handleOpen}
                className="Skills__card"
              >
                <div className="Skills__card__image">
                  <img src={documento} alt="documento" />
                </div>
                <div className="Skills__card__skill">
                  <h1>Digitacion de documentos de contabilidad</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
