import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Contact from "../Entites/Contact";
import contactService from "../Services/contactService";
import styles from "../Styles/Form.module.css";
import useGroups from "../hooks/useGroups";
import useContact from "../hooks/useContacts";

interface ContactContext {
  backupContacts: Contact[];
}

const EditContact = () => {
  const { id } = useParams();
  const { data: contacts } = useContact();
  const theContact = contacts?.find((contact) => contact.id === parseInt(id!));

  const queryClient = useQueryClient();

  const editContact = useMutation<Contact, Error, Contact, ContactContext>({
    mutationFn: (contact: Contact) =>
      contactService.update(parseInt(id!), contact).then((res) => res.data),

    onSuccess: (savedContact) => {
      queryClient.setQueryData<Contact[]>(["contacts"], (previousContacts) => {
        return previousContacts?.map((contact) =>
          contact.id === parseInt(id!) ? savedContact : contact
        );
      });
      navigate("/");
    },

    onError: (error, _newContact, context) => {
      if (!context) return;

      console.error("Error adding contact:", error);

      queryClient.setQueryData<Contact[]>(["contacts"], context.backupContacts);
    },
  });
  const [formState, setFormState] = useState({} as Contact);

  const { data: groups } = useGroups();

  const navigate = useNavigate();

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
    <section className={styles.formContainer}>
      <form className={styles.formInputs} onSubmit={handleSubmit}>
        <h2 className="mb-3">Edit Contact</h2>
        <div className={["mb-3", styles.inputSection].join(" ")}>
          <label className={styles.formLabel} htmlFor="fullName">
            Full Name
          </label>
          <input
            value={theContact?.fullname}
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
            value={theContact?.mobile}
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
            value={theContact?.email}
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
            value={theContact?.job}
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
            value={theContact?.group}
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
  );
};

export default EditContact;
