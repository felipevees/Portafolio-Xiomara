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
            {content && content === "asesorias"
              ? asesorias.titulo
              : content === "nomina"
              ? nominaYContabilidad.titulo
              : content === "gestion"
              ? gestionAdministrativa.titulo
              : content === "declaraciones"
              ? declaracionesDeRenta.titulo
              : "Sin titulo"}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {content && content === "asesorias"
              ? asesorias.contenido
              : content === "nomina"
              ? nominaYContabilidad.contenido
              : content === "gestion"
              ? gestionAdministrativa.contenido
              : content === "declaraciones"
              ? declaracionesDeRenta.contenido
              : "Sin Contenido"}
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

const asesorias = {
  titulo: "Asesoría financiera y declaraciones de renta",
  contenido:
    "Para personas naturales que están en constante búsqueda de mejorar su situación financiera o deseen empreder un proyecto para el cual requieran proyectar costos.",
};
const gestionAdministrativa = {
  titulo: "Gestión Administrativa",
  contenido:
    "Cuento con la capacidad y disposición para revisar, organizar y almacenar los documentos de la compañía. Brindar acompañamiento en la migración de información de un ERP a Otro y creación de plantillas y macros para optimizar procesos.",
};
const nominaYContabilidad = {
  titulo: "Nómina y contabilidad",
  contenido:
    "Apoyo al personal de la empresa para fortalecer los procesos contables y de nómina de la compañía, garantizando que la información financiera, contable y de nómina sea confiable y oportuna o si su empresa no cuenta con el personal ídoneo podremos desarrollar un convenio para tercerizar el proceso.",
};
const declaracionesDeRenta = {
  titulo: "Declaraciones de renta",
  contenido:
    "Declare correctamente y evite pagar multas, pagar de más o si la declaración de renta sugerida por la DIAN no corresponde con su realidad económica, cuente conmigo para asesorarlo.",
};
