import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../Entites/Contact";
import styles from "../Styles/addContact.module.css";
import useContactsStore from "../contactStore";
import contactService from "../Services/contactService";

const AddContact = () => {
  const [formState, setFormState] = useState({} as Contact);
  const contacts = useContactsStore((store) => store.contacts);
  const groups = useContactsStore((store) => store.groups);
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    if (type === "file") {
      const file = target.files?.[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormState((prevState) => ({
          ...prevState,
          photo: imageUrl,
        }));
      }
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact = {
      ...formState,
      id: contacts.length + 1,
    };
    contactService.create(newContact);

    navigate("/");
  };

  return (
    <section className={styles.formContainer}>
      <form className={styles.formInputs} onSubmit={handleSubmit}>
        <h2 className="mb-3">Add a contact</h2>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <label className={styles.formLabel} htmlFor="fullName">
            Full Name
          </label>
          <input
            onChange={handleChange}
            name="fullname"
            required
            maxLength={35}
            type="text"
            id="fullName"
            className="form-control"
          />
        </div>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <label className="form-label" htmlFor="mobile">
            Phone Number
          </label>
          <input
            onChange={handleChange}
            name="mobile"
            required
            maxLength={20}
            type="number"
            id="mobile"
            className="form-control"
          />
        </div>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            onChange={handleChange}
            name="email"
            required
            maxLength={35}
            type="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <label className="form-label" htmlFor="Job">
            Job
          </label>
          <input
            onChange={handleChange}
            name="job"
            required
            maxLength={35}
            type="text"
            id="Job"
            className="form-control"
          />
        </div>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <label htmlFor="photo" className="form-label">
            Photo
          </label>
          <input
            onChange={handleChange}
            name="photo"
            type="file"
            accept="image/*"
            id="photo"
            className="form-control"
          />
        </div>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <label htmlFor="group" className="form-label">
            Group
          </label>
          <select
            onChange={handleChange}
            required
            name="group"
            id="group"
            className="form-select"
          >
            <option value="">Select a group</option>
            {groups.map((group) => (
              <option value={group.name} key={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
          <button className="btn btn-danger mx-3" type="reset">
            Reset
          </button>
          <button onClick={() => navigate("/")} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddContact;
