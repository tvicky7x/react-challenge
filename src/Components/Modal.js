import React from "react";
import styles from "./Model.module.css";

function Modal(props) {
  let errorMassage = [
    { title: "Invalid Input", massage: "Please add valid inputs" },
    {
      title: "Invalid Age",
      massage: "Please make sure your age is above 1",
    },
  ];
  function closeModal() {
    props.onClick();
  }
  return (
    <>
      <div className={styles.shadBackground}>
        <div
          className="h-100 d-flex justify-content-center align-items-center"
          onClick={closeModal}
        >
          <div className={`container card p-0 ${styles.size}`}>
            <div className="card-header">
              <h3>{errorMassage[props.MassageIndex].title}</h3>
            </div>
            <div className="card-body">
              <p>{errorMassage[props.MassageIndex].massage}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-dark btn-sm" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
