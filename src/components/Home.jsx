import React from "react";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import BrianYouth from "../assets/BrianYouth.jpg";
import ".././App.css";

export function Home() {
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
      <br />
      <br />
      <div className="timeline-wrapper">
        <ul className="timeline">
          <li>
            <span className="title"> Birth</span>
            <div className="data">
              <h3>The day i was born</h3>
              <small> July 13th, 1996</small>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                quos exercitationem recusandae consectetur nam facilis aut atque
                magnam iusto quas laborum delectus inventore voluptatum. Quam
                nemo neque ipsa delectus sequi?
              </p>
              <span className="close">click to close</span>
            </div>
          </li>
          <li>
            <span className="title"> High School</span>
            <div className="data">
              <h3>High School</h3>
              <small> July 13th, 1996</small>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                quos exercitationem recusandae consectetur nam facilis aut atque
                magnam iusto quas laborum delectus inventore voluptatum. Quam
                nemo neque ipsa delectus sequi?
              </p>
              <span className="close">click to close</span>
            </div>
          </li>
          <li>
            <span className="title"> College</span>
            <div className="data">
              <h3>College</h3>
              <small> July 13th, 1996</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas
                tempora reiciendis explicabo minus neque, laboriosam harum
                possimus placeat magni eveniet, sapiente, eligendi distinctio
                animi rerum eaque unde commodi inventore.
              </p>
              <span className="close">click to close</span>
            </div>
          </li>
          <li>
            <span className="title"> Personal Trainer</span>
            <div className="data">
              <h3>Personal Trainer</h3>
              <small> July 13th, 1996</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas
                tempora reiciendis explicabo minus neque, laboriosam harum
                possimus placeat magni eveniet, sapiente, eligendi distinctio
                animi rerum eaque unde commodi inventore.
              </p>
              <span className="close">click to close</span>
            </div>
          </li>
          <li>
            <span className="title"> Restaurant</span>
            <div className="data">
              <h3>Restaurant</h3>
              <small> July 13th, 1996</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas
                tempora reiciendis explicabo minus neque, laboriosam harum
                possimus placeat magni eveniet, sapiente, eligendi distinctio
                animi rerum eaque unde commodi inventore.
              </p>
              <span className="close">click to close</span>
            </div>
          </li>
          <li>
            <span className="title"> Laundry</span>
            <div className="data">
              <h3>Laundry</h3>
              <small> July 13th, 1996</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas
                tempora reiciendis explicabo minus neque, laboriosam harum
                possimus placeat magni eveniet, sapiente, eligendi distinctio
                animi rerum eaque unde commodi inventore.
              </p>
              <span className="close">click to close</span>
            </div>
          </li>
          <li>
            <span className="title"> Software Engineer</span>
            <div className="data">
              <h3>Software Engineer</h3>
              <small> July 13th, 1996</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas
                tempora reiciendis explicabo minus neque, laboriosam harum
                possimus placeat magni eveniet, sapiente, eligendi distinctio
                animi rerum eaque unde commodi inventore.
              </p>
              <span className="close">click to close</span>
            </div>
          </li>
        </ul>
      </div>
      <br />
      <br />

      <br />
      <Contact />
      <Portfolio />
      <Footer key="footer" />
      <br />
      <br />
    </div>
  );
}
