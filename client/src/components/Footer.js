import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <footer
        className="bg-transparent text-center mx-3 my-3"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
        }}
      >
        <div className="text-center small">20DESIGN</div>
        <img src={Logo} alt="Homepage" id="logo-img" className="mb-4" />
      </footer>
    </div>
  );
};

export default Footer;
