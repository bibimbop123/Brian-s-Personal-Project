import React from "react";
import Mickeyds from "../assets/Mickeyds.jpg";
import StrangerThings from "../assets/StrangerThings.jpg";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Portfolio() {
  return (
    //make a portfolio page with links to github and deployed apps
    //change portfolio page to cards
    <div>
      <h1>Portfolio </h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Card>
              <Card.Img
                className="PortfolioPics"
                variant="top"
                src={Mickeyds}
                alt="Mickey-ds"
              />
              <Card.Body>
                <Card.Title>Mickey d's</Card.Title>
                <Card.Text>
                  Engineered Fullstack knock off website of the Mcdonald's app,
                  where user can login, register, and after logging in; will be
                  able to add to shopping cart, add cart items, browse products,
                  browse menu list, and start and checkout order; and a
                  authorized view, where the user will be able to update
                  inventory, update products, add to menu and update the user
                  and delete the user.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://mickey-d.onrender.com/"
                  target="_black"
                >
                  Visit Website
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm">
            <Card>
              <Card.Img
                className="PortfolioPics"
                variant="top"
                src={StrangerThings}
                alt="Stranger Things"
              />
              <Card.Body>
                <Card.Title>Stranger Things</Card.Title>
                <Card.Text>
                  Engineered Forum application like Craigslist, where user can
                  login, register, create post, check out profile with user’s
                  posts, and check out all posts page. Built using Frontend
                  technologies; such as React, BrowserRouter, and AuthProvider.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://celadon-daifuku-95b68a.netlify.app/"
                  target="_blank"
                >
                  Visit Website
                </Button>
              </Card.Body>
            </Card>
          </div>
          <br />
          <br />
          <br />
        </div>
        <footer className="footer">
          <p>Copyright © 2023 Brian Kim</p>
        </footer>
      </div>
    </div>
  );
}
