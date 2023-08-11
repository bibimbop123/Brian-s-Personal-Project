import React from "react";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <nav className="navbar">
      <Link class="navbar" to="/">
        {" "}
        Home{" "}
      </Link>
      <Link class="navbar" to="/about">
        {" "}
        About{" "}
      </Link>
      <Link class="navbar" to="/portfolio">
        Portfolio
      </Link>
      <Link class="navbar" to="/contact">
        Contact me
      </Link>
    </nav>
  );
}
