import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Contact from "../Entites/Contact";
import styles from "../Styles/EditContact.module.css";
import useContact from "../hooks/useContacts";
import useGroups from "../hooks/useGroups";
import { useNavigate, useParams } from "react-router-dom";
import useEditContact from "../hooks/useEditContact";

const EditContact = () => {
  const { id } = useParams();
  const contactId = parseInt(id!);
  const { data: contacts, isLoading } = useContact();
  const theContact = contacts?.find((contact) => contact.id === contactId);

  const navigate = useNavigate();

  const { data: groups } = useGroups();

  const editContact = useEditContact();

  const [formState, setFormState] = useState({} as Contact);

  useEffect(() => {
    if (theContact) setFormState(theContact);
  }, [theContact]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      id: Date.now(),
    };

    editContact.mutate(newContact);
  };

  return (
    <>
      {isLoading && <div className="spinner-grow" />}

      <section className={styles.formContainer}>
        <form className={styles.formInputs} onSubmit={handleSubmit}>
          <h2 className="mb-3">Edit Contact</h2>
          <div className={["mb-3", styles.inputSection].join(" ")}>
            <label className={styles.formLabel} htmlFor="fullName">
              Full Name
            </label>
            <input
              value={formState?.fullname}
              onChange={handleChange}
              name="fullname"
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
              value={formState?.mobile}
              onChange={handleChange}
              name="mobile"
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
              value={formState?.email}
              onChange={handleChange}
              name="email"
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
              value={formState?.job}
              onChange={handleChange}
              name="job"
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
              required
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
              value={formState?.group}
              onChange={handleChange}
              name="group"
              id="group"
              className="form-select"
            >
              <option value="">Select a group</option>
              {groups?.map((group) => (
                <option value={group.name} key={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>
          <div className={["mb-3", styles.inputSection].join(" ")}>
            <button className="btn btn-primary me-3" type="submit">
              Save Changes
            </button>
            <button onClick={() => navigate("/")} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditContact;
