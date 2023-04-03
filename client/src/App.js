import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Redpage from "./components/Redpage";
import Navbar from "./components/Navbar.js";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  useEffect(() => {
    const redDot = document.createElement("div");
    redDot.classList.add("red-dot");
    document.body.appendChild(redDot);

    let delayedMouseX = -100;
    let delayedMouseY = -100;
    let currentMouseX = -100;
    let currentMouseY = -100;

    function updateMousePosition(event) {
      currentMouseX = event.clientX;
      currentMouseY = event.clientY;
    }

    function updateDelayedMousePosition() {
      delayedMouseX += (currentMouseX - delayedMouseX) * 0.03;
      delayedMouseY += (currentMouseY - delayedMouseY) * 0.03;
      redDot.style.left = delayedMouseX + "px";
      redDot.style.top = delayedMouseY + "px";
      requestAnimationFrame(updateDelayedMousePosition);
    }

    document.addEventListener("mousemove", updateMousePosition);
    requestAnimationFrame(updateDelayedMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.body.removeChild(redDot);
    };
  }, []);

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className="page-container">
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/redpage" element={<Redpage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
