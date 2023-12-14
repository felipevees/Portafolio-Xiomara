import React from "react";
import "./Modal.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

export function ModalComponent({ open, handleClose, content }) {
  return (
    <div className="container">
      <Modal
        className="style2"
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className="style">
          <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
            {content && content === "gestionFinanciera"
              ? gestionFinanciera.titulo
              : content === "presupuestos"
              ? presupuestos.titulo
              : content === "asesorias"
              ? asesorias.titulo
              : content === "administracion"
              ? administracion.titulo
              : content === "digitacion"
              ? digitacion.titulo
              : "Sin titulo"}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {content && content === "gestionFinanciera"
              ? gestionFinanciera.contenido
              : content === "presupuestos"
              ? presupuestos.contenido
              : content === "asesorias"
              ? asesorias.contenido
              : content === "administracion"
              ? administracion.contenido
              : content === "digitacion"
              ? digitacion.contenido
              : "Sin contenido"}
          </Typography>

          <button variant="contained">
            <a rel="noreferrer" target="_blank" href="https://wa.link/4u7lz7">
              Contactar
            </a>
          </button>
        </Box>
      </Modal>
    </div>
  );
}

const gestionFinanciera = {
  titulo: "Gestion Financiera",
  contenido:
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
};
const presupuestos = {
  titulo: "Presupuestos",
  contenido:
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
};
const asesorias = {
  titulo: "Asesorias",
  contenido:
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
};
const administracion = {
  titulo: "Administracion",
  contenido:
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
};
const digitacion = {
  titulo: "Digitacion",
  contenido:
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
};
