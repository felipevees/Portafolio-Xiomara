import React from "react";
import "./Contact.scss";

import whatsapp from "../../assets/icons/whatsapp-lg.png";
import gmail from "../../assets/icons/gmail-lg.png";

export function Contact() {
  return (
    <div className="Contact text-center mb-5" id="contactar">
      <div className="Contact__container container">
        <div className="d-flex justify-content-center p-5">
          <h1>Contactar</h1>
        </div>
        <div className="Contact__container__links row mb-5">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
            <figure>
              <a href="https://wa.link/4u7lz7" target="_blank" rel="noreferrer">
                <img className="icon" src={whatsapp} alt="whatsapp" />
                <h1>Whatsapp</h1>
              </a>
            </figure>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
            <figure>
              <a href="mailto:francoyeidy1614@americana.edu.co">
                <img className="icon" src={gmail} alt="gmail" />
                <h1>Email</h1>
              </a>
            </figure>
          </div>
          <div className="wixC col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
            <a
              className="wix"
              href="https://francoyeidy1614.wixsite.com/misitio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 style={{ margin: "0", padding: "0" }}>WIX</h1>
            </a>
          </div>
          <div className="wixC col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
            <a href="#home">
              <h1>Home</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
