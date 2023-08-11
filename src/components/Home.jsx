import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import BrianYouth from "../assets/BrianYouth.jpg";
export function Home() {
  //make it return a div with the text "Welcome to Brian's Project"
  return (
    <div id="home">
      <h2>Welcome to Brian's Project</h2>
      <br />
      <h3>Who Am I?</h3>
      <div className="center">
        <img className="Pictures" src={BrianYouth} alt="Brian Kim" />
      </div>
      <br />
      <section>
        Hey there, I'm Brian Kim, and I'm excited to connect with you. I've got
        a background that is a bit diverse – a Bachelor's degree in Kinesiology
        with a minor in Psychology, and yep, I used to be a certified personal
        trainer. But you know what ties it all together? My unwavering passion
        for learning and creating. Currently I work part-time in the restaurant
        industry and laundry cleaning industry while I study data structure and
        algorithm problems, building projects, and applying to Software
        engineering Jobs!
      </section>

      <br />

      <Contact />
      <Portfolio />
      <Footer key="footer" />
      <br />
      <br />
    </div>
  );
}
