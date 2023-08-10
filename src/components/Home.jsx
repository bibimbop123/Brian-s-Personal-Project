import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
export function Home() {
  //make it return a div with the text "Welcome to Brian's Project"
  return (
    <div>
      <h3>Welcome to Brian's Project</h3>
      <About />
      <Contact />
      <Portfolio />
    </div>
  );
}
