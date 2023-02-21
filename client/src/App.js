import "./App.css";
import Carddeck from "./components/Carddeck";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignersList from "./components/DesignersList";
import DesignerDetails from "./pages/DesignerDetails";
// import CreateContent from "./pages/CreateContent.js";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import React, { useState } from "react";

//Raul create Register component with own route in app
//Raul create Login component with own route in app
//Raul implement JWT : generate token function, and send the token to the client in login's response
//Raul store token in front end and build function to check if token is stored after every refresh (which will mean that user is logged in)
//Raul server getProfile route , that recieves the Token from client, and cheks it with Passport...
//Raul create User Profile component with own route in app

function App() {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen and setIsOpen using useState

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carddeck />} />
          <Route path="/designers" element={<DesignersList />} />
          <Route
            path="/designers/:designerName"
            element={<DesignerDetails />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<CreateContent />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
