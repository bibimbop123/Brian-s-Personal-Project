import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
export function Home() {
  //make it return a div with the text "Welcome to Brian's Project"
  return (
    <div>
      Welcome to Brian's Project
      <About />
      <Contact />
      <Portfolio />
    </div>
  );
}
