import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p> Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
