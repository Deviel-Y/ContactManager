import { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Contact from "../Entites/Contact";
import styles from "../Styles/EditContact.module.css";
import useContact from "../hooks/useContacts";
import useEditContact from "../hooks/useEditContact";
import useGroups from "../hooks/useGroups";

const EditContact = () => {
  const { id } = useParams();
  const contactId = parseInt(id!);
  const { data: contacts, isLoading } = useContact();
  const theContact = contacts?.find((contact) => contact.id === contactId);

  const navigate = useNavigate();

  const { data: groups } = useGroups();

  const editContact = useEditContact();

  const { register, handleSubmit, setValue } = useForm();

  const [contactPhoto, setContactPhoto] = useState<string>(
    theContact?.photo || ""
  );

  useEffect(() => {
    if (theContact) {
      setValue("fullname", theContact.fullname);
      setValue("email", theContact.email);
      setValue("mobile", theContact.mobile);
      setValue("job", theContact.job);
      setValue("group", theContact.group);
      setContactPhoto(theContact.photo || "");
    }
  }, [theContact, setValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imageUrl = URL.createObjectURL(file!);
    setContactPhoto(imageUrl);
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = (data: FieldValues) => {
    const editedContact: Contact = {
      ...data,
      id: contactId,
      photo: contactPhoto,
    };

    editContact.mutate(editedContact);
  };

  return (
    <>
      {isLoading && <div className="spinner-grow" />}

      <section className={styles.formContainer}>
        <form className={styles.formInputs} onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-3">Edit Contact</h2>
          <div className={["mb-3", styles.inputSection].join(" ")}>
            <label className="form-label" htmlFor="fullName">
              Full Name
            </label>
            <input
              {...register("fullname")}
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
              {...register("mobile")}
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
              {...register("email")}
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
              {...register("job")}
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
              {...register("group")}
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
            <button
              className={["btn", "btn-primary", "px-5", "me-3"].join(" ")}
              type="submit"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate("/")}
              className={["btn", "btn-danger"].join(" ")}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditContact;
