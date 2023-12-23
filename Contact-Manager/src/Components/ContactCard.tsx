import { useNavigate } from "react-router-dom";
import Contact from "../Entites/Contact";
import styles from "../Styles/ContactCard.module.css";
import useDeleteContact from "../hooks/useDeleteContact";

interface Props {
  contact: Contact;
}

const ContactCard = ({ contact }: Props) => {
  const deleteContact = useDeleteContact();

  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      {contact.photo && (
        <>
          <img
            className={styles.contactPhoto}
            src={contact.photo}
            alt={`contact name : ${contact.fullname}`}
          />
        </>
      )}
      {contact.fullname && (
        <h2 className={styles.contactName}>{contact.fullname}</h2>
      )}
      <ul className={styles.contactInfo}>
        <li className={styles.contactInfoItem}>
          {contact.mobile && (
            <>
              <span className={styles.contactInfoItemSpan}>Phone Number :</span>
              {contact.mobile}
            </>
          )}
        </li>
        <li className={styles.contactInfoItem}>
          {contact.email && (
            <>
              <span className={styles.contactInfoItemSpan}>
                Email Address :
              </span>
              {contact.email}
            </>
          )}
        </li>
        <li className={styles.contactInfoItem}>
          {contact.job && (
            <>
              <span className={styles.contactInfoItemSpan}>Job :</span>
              {contact.job}
            </>
          )}
        </li>
        <li className={styles.contactInfoItem}>
          <span className={styles.contactInfoItemSpan}>Group :</span>
          {contact.group}
        </li>
      </ul>
      <div className={styles.actionButtons}>
        <button
          onClick={() => navigate(`/contacts/contactInfo/${contact.id}`)}
          className={[styles.btn, styles.btnShow].join(" ")}
        >
          Show
        </button>
        <button
          onClick={() => deleteContact.mutate(contact.id)}
          className={[styles.btn, styles.btnDelete].join(" ")}
        >
          Delete
        </button>
        <button
          className={[styles.btn, styles.btnEdit].join(" ")}
          onClick={() => navigate(`/contacts/contactEdit/${contact.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
