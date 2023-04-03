import React from "react";
import Gitcat from "../assets/github.png";

const Footer = () => {
  return (
    <div>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://github.com/julischa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "red",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Gitcat}
              alt="Github"
              id="github"
              className="github-icon"
              style={{
                width: "30px",
                marginRight: "10px",
                marginBottom: "7px",
              }}
            />
            <span style={{ marginRight: "10px" }}>
              {new Date().getFullYear()}
            </span>
            <span>juli schawert</span>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
