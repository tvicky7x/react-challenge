function Form(props) {
  function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let data = { name: name, age: age };
    props.onSubmit(data);
    e.target.reset();
  }
  return (
    <div className="card card-body mt-3">
      <form action="#" onSubmit={submitForm}>
        <div>
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div>
          <label className="form-label">Age</label>
          <input type="number" className="form-control" id="age" />
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
