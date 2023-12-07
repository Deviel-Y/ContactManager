const AddContact = () => {
  return (
    <section className="form_container">
      <form className="form_inputs">
        <h2 className="mb-3">Add a contact</h2>
        <div className="mb-4 input_section">
          <label className="form-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            required
            maxLength={35}
            type="text"
            id="fullName"
            className="form-control"
          />
        </div>
        <div className="mb-4 input_section">
          <label className="form-label" htmlFor="mobile">
            Phone Number
          </label>
          <input
            required
            maxLength={20}
            type="number"
            id="mobile"
            className="form-control"
          />
        </div>
        <div className="mb-4 input_section">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            required
            maxLength={35}
            type="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="mb-4 input_section">
          <label className="form-label" htmlFor="Job">
            Job
          </label>
          <input
            required
            maxLength={35}
            type="text"
            id="Job"
            className="form-control"
          />
        </div>
        <div className="mb-4 input_section">
          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
          <button className="btn btn-danger mx-3" type="reset">
            Reset
          </button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </section>
  );
};

export default AddContact;
