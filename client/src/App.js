import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignersList from "./components/DesignersList";
import DesignerDetails from "./pages/DesignerDetails";
import Footer from "./components/Footer";
import Register from "./components/Register";
import React, { useState } from "react";
import Messages from "./pages/Messages";
import HomePage from "./pages/HomePage";
import Redpage from "./components/Redpage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar.js";

function App() {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen and setIsOpen using useState

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/redpage" element={<Redpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/designers" element={<DesignersList />} />
          <Route
            path="/designers/:designerName"
            element={<DesignerDetails />}
          />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
