import React from "react";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <nav id="navbar">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact me</Link>
    </nav>
  );
}
