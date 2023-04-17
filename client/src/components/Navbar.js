import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, FormControl } from "react-bootstrap";
import Logo from "../assets/logo.png";
import defaultUser from "../assets/user.png";
import Create from "../assets/create.png";
import Search from "../assets/search.png";
import userPic from "../assets/loggedin.png";
import Modal from "./Modal";
import React, { useContext, useEffect, useState } from "react";
import CreateContent from "../pages/CreateContent";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navibar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // handle search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      window.location.href = `/redpage?search=${searchQuery}`;
    }
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar className="mx-3 text-center my-3 round-corners" bg="transparent">
        <Link to="/">
          <img src={Logo} alt="Homepage" id="logo-img" />
        </Link>
        <div>
          <div onClick={() => setIsOpen(true)}>
            <img src={Create} alt="Create New" id="create-img" /> <p>Create</p>
          </div>
          {isOpen && (
            <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              container={document.getElementById("modal-root")}
            >
              <CreateContent setIsOpen={setIsOpen} />
            </Modal>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <form onSubmit={handleSearchSubmit}>
            <FormControl
              id="searchbar"
              type="text"
              placeholder="Search..."
              className="searchbar my-2 mb-2 mx-3"
              value={searchQuery}
              onChange={handleSearchChange}
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
          </form>
        </div>

        <img
          src={user ? userPic : defaultUser}
          alt="User"
          id="user-img"
          className="mx-3"
        />
        {user && (
          <button
            type="submit"
            style={{ textDecoration: "none", color: "red" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </Navbar>
    </div>
  );
}

export default Navibar;
