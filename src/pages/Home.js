import React from "react";
import { About, Banner, Skills, Clients, Contact } from "../components";

export function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Clients />
      <Contact />
    </div>
  );
}
