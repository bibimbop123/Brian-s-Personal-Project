import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
export function Home() {
  //make it return a div with the text "Welcome to Brian's Project"
  return (
    <div id="home">
      <h2>Welcome to Brian's Project</h2>
      <br />
      <h3>Who Am I?</h3>
      <section>
        Hi, my name is Brian Kim, and I'm a motivated software engineer
        passionate about changing the world in a meaningful way!
      </section>
      <About />
      <Contact />
      <Portfolio />
      <Footer key="footer" />
    </div>
  );
}
