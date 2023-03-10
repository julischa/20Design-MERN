import React from "react";
import ReactDom from "react-dom";
import Create from "../assets/create.png";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-open text-center">
        <button className="modal-close" onClick={onClose}>
          <img src={Create} alt="Create New" id="close-img" />
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
