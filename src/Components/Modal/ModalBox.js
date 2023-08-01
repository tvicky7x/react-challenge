import React from "react";
import ModalOverLay from "./ModalOverLay";
import styles from "./ModalBox.module.css";

function ModalBox(props) {
  return (
    <>
      <ModalOverLay closeModal={props.closeModal} />
      <div
        className={`container ${styles[`modal-box`]}`}
        style={{ maxWidth: "500px" }}
      >
        <div className="card">
          <div className="card-header">{props.error.title}</div>
          <div className="card-body p-3">
            <p>{props.error.massage}</p>
            <button className="btn btn-sm btn-dark" onClick={props.closeModal}>
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalBox;
