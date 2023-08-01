import React from "react";
import styles from "./ModalOverlay.module.css";

function ModalOverLay(props) {
  return (
    <div
      className={`w-100 h-100 opacity-25 bg-dark ${styles.overlay}`}
      onClick={props.closeModal}
    ></div>
  );
}

export default ModalOverLay;
