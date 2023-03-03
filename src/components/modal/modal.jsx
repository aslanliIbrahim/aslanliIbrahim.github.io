import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const Modal = ({ handleCloseBtnClick, title, children }) => {
  return createPortal(
    <div
      aria-modal={true}
      aria-labelledby="heading"
      role="dialog"
      className={styles.modalView}
    >
      <div className={styles.modalContainer}>
        <div className={styles.heading}>{title}</div>

        <button
          aria-label="Close Modal Button"
          className={styles.closeBtn}
          onClick={handleCloseBtnClick}
        >
          Close
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
