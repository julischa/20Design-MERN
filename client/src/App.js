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
import Messages from "./pages/Messages";
import CreateContent from "./pages/CreateContent";
import HomePage from "./pages/HomePage";

//Raul server getProfile route , that recieves the Token from client, and cheks it with Passport...
//Raul create User Profile component with own route in app

function App() {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen and setIsOpen using useState

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomePage />
        <Routes>
          <Route path="/designers" element={<DesignersList />} />
          <Route
            path="/designers/:designerName"
            element={<DesignerDetails />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messages" element={<Messages />} />
          {/* <Route path="/" element={<CreateContent />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
