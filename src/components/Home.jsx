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
      <section>
        Hey there, I'm Brian Kim, and I'm excited to connect with you. I've got
        a background that is a bit diverse – a Bachelor's degree in Kinesiology
        with a minor in Psychology, and yep, I used to be a certified personal
        trainer. But you know what ties it all together? My unwavering passion
        for learning and creating. Currently I work part-time in the restaurant
        industry and laundry cleaning industry while I study data structure and
        algorithm problems, build projects, and apply to Software engineering
        Jobs!
      </section>
      <br />
      <h3>What Do I Do?</h3>
      <section>
        I thrive on solving puzzles and creating real impact. My journey: from
        personal training and restaurant hustle to laundry duty, all part of a
        deliberate path to dive deep into data structures, algorithms, and
        crafting unique projects. Imagine this: a guy serving food and pressing
        laundry, dreaming of elegant code and innovative solutions. That's me.
        Excited to join your team, crafting software that not only solves but
        adds a touch of brightness to people's lives.
      </section>
      <br />
      <h3>What Am I Looking For?</h3>
      <section>
        I'm on the hunt for a software engineering job that's a mix of exciting
        challenges, team collaboration, and meaningful impact. Learning and
        growing together, taking on cool projects, and making a positive
        difference is what I'm after. If there's room for personal development
        and a chance to bring my skills to a company that's all about innovation
        and positivity, I'm all in!
      </section>
      <br />
      <h3>What Are My Hobbies?</h3>
      <section>
        I enjoy playing basketball, playing chess, and learning about web
        development. Most importantly, I'm always looking for ways to improve
        myself and my skills. You can't be the best at everything, but you can
        always be the hardest worker!
      </section>
      <br />
      <h3>What Are My Goals?</h3>
      <section>
        Professionally, my goal is to achieve success, but that's just a natural
        outcome of my ambitious drive. What truly fuels me is the desire to
        create a significant, positive impact in people's lives.
      </section>
      <br />
      <h3>What Are My Strengths?</h3>
      <section>
        I'm a hard worker, a fast learner, and a team player. I'm very
        passionate about what I do.
      </section>
      <br />
      <h3>What Are My Weaknesses?</h3>
      <section>
        There's so much out there to learn it can be overwelming. My list of
        languages, libraries, and frameworks I want to master keeps growing –
        Typescript, Redux, Next.js, MongoDb, Stripe.js, Vitest.js, and many many
        more. I'll admit, it can be a bit overwhelming at times. But you know
        what? That feeling just fuels my determination. I'm excited to take on
        these challenges and keep growing in this ever-evolving field. I'm
        definitely a lifelong learner!
      </section>
      <br />

      <About />
      <Contact />
      <Portfolio />
      <Footer key="footer" />
    </div>
  );
}
