import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, FormControl } from "react-bootstrap";
import Logo from "../assets/logo.png";
import Create from "../assets/create.png";
import Search from "../assets/search.png";
// import Message from "../assets/message.png";
// import User from "../assets/user.png";

function Navibar() {
  return (
    <Navbar className="mx-3 my-3 round-corners" bg="white">
      <Navbar.Brand href="/">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Homepage" id="logo-img" />
          </a>
          <a href="/create">
            <img src={Create} alt="Create New" id="create-img" />
          </a>
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
        <Nav.Link id="navlink" href="#">
          {/* <img src={Message} alt="Messages" id="message-img" /> */}
          Messages
        </Nav.Link>
        <Nav.Link id="navlink" href="#">
          {/* <img src={User} alt="Account" id="user-img" /> */}
          Account
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navibar;
