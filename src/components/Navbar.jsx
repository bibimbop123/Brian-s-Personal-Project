import React from "react";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <nav className="navbar">
      <Link className="navbar" to="/">
        {" "}
        Home{" "}
      </Link>
      <Link className="navbar" to="/about">
        {" "}
        About{" "}
      </Link>
      <Link className="navbar" to="/portfolio">
        Portfolio
      </Link>
      <Link className="navbar" to="/contact">
        Contact me
      </Link>
    </nav>
  );
}
