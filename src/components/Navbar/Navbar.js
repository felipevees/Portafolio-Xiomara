import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import CV from "../../assets/files/HojaDeVidaXiomaraFranco.pdf";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function Navbar() {
  const [isButtonVisible, setButtonVisibility] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setButtonVisibility(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`Navbar navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}
    >
      <div className="Navbar-apps ">
        <a
          className="wix"
          href="https://francoyeidy1614.wixsite.com/misitio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 style={{ margin: "0", padding: "0" }}>WIX</h1>
        </a>

        <a href={CV} target="_blank" rel="noopener noreferrer">
          <h1 style={{ margin: "0", padding: "0" }}>CV</h1>
        </a>
        {isButtonVisible && (
          <button
            className="navbar toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
      </div>
      <div
        className={`Navbar-sections ${
          isButtonVisible && "collapse navbar-collapse"
        }`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#home">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a style={{whiteSpace:"nowrap"}} className="nav-link active sobre-mi" href="/#about">
              Acerca de
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#servicios">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#contactar">
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
