import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/AddContact.module.css";
import useAddContact from "../hooks/useAddContact";
import useGroups from "../hooks/useGroups";
import Contact from "../Entites/Contact";
import { ChangeEvent, useState } from "react";

const AddContact = () => {
  const addContact = useAddContact();
  const { register, handleSubmit } = useForm<Contact>();

  const [photoUrl, setPhotoUrl] = useState<string>();

  const { data: groups, isLoading } = useGroups();

  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    const newContact: Contact = { ...data, id: Date.now() };
    newContact.photo = photoUrl;
    addContact.mutate(newContact);

    navigate("/");
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imageURL = URL.createObjectURL(file!);
    setPhotoUrl(imageURL);
  };

  return (
    <>
      {isLoading && <div className="spinner-grow" />}
      <section className={styles.formContainer}>
        <form className={styles.formInputs} onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-3">Add a contact</h2>
          <div className={["mb-3", styles.inputSection].join(" ")}>
            <label className="form-label" htmlFor="fullName">
              Full Name
            </label>
            <input
              {...register("fullname")}
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
              {...register("mobile")}
              name="mobile"
              required
              maxLength={13}
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
              {...register("email")}
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
              {...register("job")}
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
              onChange={handlePhotoChange}
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
              {...register("group")}
              required
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
            <button className="btn btn-primary px-5 me-3" type="submit">
              Add Contact
            </button>
            <button onClick={() => navigate("/")} className="btn btn-danger">
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddContact;
