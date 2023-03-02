import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="bg-transparent text-center mx-3 my-3">
        <a class="btn btn-floating m-1" href="#!" role="button">
          <i class="fab fa-google"></i>
        </a>

        <a class="btn btn-floating m-1" href="#!" role="button">
          <i class="fab fa-instagram"></i>
        </a>

        <div class="text-center p-3"></div>
        <img src={Logo} alt="Homepage" id="logo-img" className="mb-4" />
      </footer>
    </div>
  );
};

export default Footer;
