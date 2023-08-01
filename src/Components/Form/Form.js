import React, { useRef } from "react";

function Form(props) {
  let inputName = useRef();
  let inputAge = useRef();

  function submitHandler(e) {
    e.preventDefault();
    props.submitData({
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    e.target.reset();
  }

  return (
    <div className="card p-3">
      <form action="#" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" ref={inputName} />
        </div>
        <div>
          <label htmlFor="name" className="form-label">
            Age
          </label>
          <input
            type="text"
            inputMode="numeric"
            className="form-control"
            ref={inputAge}
          />
        </div>
        <div className="d-grid mt-3">
          <button className="btn btn-dark btn-sm">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
