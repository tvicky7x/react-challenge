import { useRef } from "react";

function Form(props) {
  const inputName = useRef();
  const inputAge = useRef();
  function submitForm(e) {
    e.preventDefault();
    let data = { name: inputName.current.value, age: inputAge.current.value };
    props.onSubmit(data);
    e.target.reset();
  }
  return (
    <div className="card card-body mt-3">
      <form action="#" onSubmit={submitForm}>
        <div>
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            ref={inputName}
          />
        </div>
        <div>
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            ref={inputAge}
          />
        </div>
        <div className="d-grid mt-3">
          <button className="btn btn-sm btn-dark" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
