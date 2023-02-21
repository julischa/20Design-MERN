import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, FormControl } from "react-bootstrap";
import Logo from "../assets/logo.png";
import Create from "../assets/create.png";
import Search from "../assets/search.png";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import React, { useState } from "react";

function Navibar() {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state and setIsOpen function

  return (
    <Navbar className="mx-3 my-3 round-corners" bg="white">
      <Navbar.Brand>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Homepage" id="logo-img" />
          </a>
          <div>
            <div onClick={() => setIsOpen(true)}>
              <a>
                <img src={Create} alt="Create New" id="create-img" />
              </a>
            </div>
            {isOpen && (
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                container={document.getElementById("modal-root")}
              >
                <h1>Upload assets to create design</h1>
              </Modal>
            )}
          </div>
        </div>
      </Navbar.Brand>
      <FormControl
        id="searchbar"
        type="text"
        placeholder="Search..."
        className="searchbar my-2 mb-2 mx-3"
      />
      <img src={Search} alt="Search" id="search-img" />
      <Nav className="mx-5">
        <Link to="/messagess">Messages</Link>
        <Link to="/account">Account</Link>
        <Link to="/designers">List</Link>
      </Nav>
    </Navbar>
  );
}

export default Navibar;
