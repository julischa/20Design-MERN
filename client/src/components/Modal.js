import React from "react";
import ReactDom from "react-dom";
import "../components/Modal/Modal.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-open text-center">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
