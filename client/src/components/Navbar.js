import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, FormControl } from "react-bootstrap";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Message from "../assets/message.png";
import Create from "../assets/create.png";
import Search from "../assets/search.png";
import Modal from "./Modal";
import React, { useState } from "react";
import CreateContent from "../pages/CreateContent";

function Navibar() {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state and setIsOpen function

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar className="mx-3 text-center my-3 round-corners" bg="transparent">
        <a href="/">
          <img src={Logo} alt="Homepage" id="logo-img" />
        </a>
        <div>
          <div onClick={() => setIsOpen(true)}>
            <img src={Create} alt="Create New" id="create-img" />
          </div>
          {isOpen && (
            <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              container={document.getElementById("modal-root")}
            >
              <CreateContent />
            </Modal>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <FormControl
            id="searchbar"
            type="text"
            placeholder="Search..."
            className="searchbar my-2 mb-2 mx-3"
          />
          <img
            src={Search}
            alt="Search"
            id="search-img"
            style={{
              position: "absolute",
              top: "50%",
              right: "30px",
              transform: "translateY(-50%)",
              width: "25px",
            }}
          />
        </div>
        <img src={User} alt="Homepage" id="user-img" className="mx-3" />
        <img src={Message} alt="Homepage" id="message-img" className="mx-1" />
      </Navbar>
    </div>
  );
}

export default Navibar;
