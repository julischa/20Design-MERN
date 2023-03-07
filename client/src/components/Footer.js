import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer
        className="bg-transparent text-center mx-3 my-3"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <a className="btn btn-floating m-1" href="#!" role="button">
          <i className="fab fa-google"></i>
        </a>

        <a className="btn btn-floating m-1" href="#!" role="button">
          <i className="fab fa-instagram"></i>
        </a>

        <div className="text-center p-3"></div>
        <img src={Logo} alt="Homepage" id="logo-img" className="mb-4" />
      </footer>
    </div>
  );
};

export default Footer;
