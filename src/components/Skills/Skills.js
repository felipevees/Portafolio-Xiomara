import React, { useState } from "react";
import "./Skills.scss";
import { ModalComponent } from "./modal";

import contadora from "../../assets/icons/xiomara/contador.png";
import libro from "../../assets/icons/xiomara/libro-de-contabilidad.png";
import computador from "../../assets/icons/xiomara/computer.png";
import documento from "../../assets/icons/xiomara/documento.png";

export function Skills() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const handleOpen = (event) => {
    setOpen(true);
    const clickedElement = event.currentTarget.id;
    if (clickedElement === "asesorias") {
      setContent("asesorias");
    } else if (clickedElement === "nomina") {
      setContent("nomina");
    } else if (clickedElement === "gestion") {
      setContent("gestion");
    } else if (clickedElement === "declaraciones") {
      setContent("declaraciones");
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="Skills__content"
          >
            <div className="Skills__content__header">
              <h1 style={{ fontSize: "45px", marginBottom: "20px" }}>
                Servicios
              </h1>
            </div>
            <div className="Skills__skills">
              <div id="asesorias" onClick={handleOpen} className="Skills__card">
                <div className="Skills__card__image">
                  <img
                    style={{ borderRadius: "12px" }}
                    src={contadora}
                    alt="contadora"
                  />
                </div>
                <div className="Skills__card__skill">
                  <h1>Asesoría financiera </h1>
                </div>
              </div>
              <div
                id="declaraciones"
                onClick={handleOpen}
                className="Skills__card"
              >
                <div className="Skills__card__image">
                  <img src={libro} alt="computador" />
                </div>
                <div className="Skills__card__skill">
                  <h1>Declaraciones de renta</h1>
                </div>
              </div>
              <div id="nomina" onClick={handleOpen} className="Skills__card">
                <div className="Skills__card__image">
                  <img src={computador} alt="computador" />
                </div>
                <div className="Skills__card__skill">
                  <h1>Nómina y contabilidad</h1>
                </div>
              </div>
              <div id="gestion" onClick={handleOpen} className="Skills__card">
                <div className="Skills__card__image">
                  <img src={documento} alt="documento" />
                </div>
                <div className="Skills__card__skill">
                  <h1>Gestión administrativa</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
