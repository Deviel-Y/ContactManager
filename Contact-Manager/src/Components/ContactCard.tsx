import { useNavigate } from "react-router-dom";
import styles from "../Styles/ContactCard.module.css";
import Contact from "../Entites/Contact";
import useContactsStore from "../contactStore";
import contactService from "../Services/contactService";

interface Props {
  contact: Contact;
}

const ContactCard = ({ contact }: Props) => {
  const deleteContactStore = useContactsStore((s) => s.deleteContact);
  const deleteContact = contactService.delete;

  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <img
        className={styles.contactPhoto}
        src={contact.photo}
        alt={`contact name : ${contact.fullname}`}
      />
      <h2 className={styles.contactName}>{contact.fullname}</h2>
      <ul className={styles.contactInfo}>
        <li className={styles.contactInfoItem}>
          <span className={styles.contactInfoItemSpan}>Phone Number :</span>
          {contact.mobile}
        </li>
        <li className={styles.contactInfoItem}>
          <span className={styles.contactInfoItemSpan}>Email Address :</span>
          {contact.email}
        </li>
        <li className={styles.contactInfoItem}>
          <span className={styles.contactInfoItemSpan}>Job :</span>
          {contact.job}
        </li>
        <li className={styles.contactInfoItem}>
          <span className={styles.contactInfoItemSpan}>Group :</span>
          {contact.group}
        </li>
      </ul>
      <div className={styles.actionButtons}>
        <button
          onClick={() => navigate(`/contacts/${contact.id}`)}
          className={[styles.btn, styles.btnShow].join(" ")}
        >
          Show
        </button>
        <button
          onClick={() => {
            deleteContact(contact.id), deleteContactStore(contact.id);
          }}
          className={[styles.btn, styles.btnDelete].join(" ")}
        >
          Delete
        </button>
        <button className={[styles.btn, styles.btnEdit].join(" ")}>Edit</button>
      </div>
    </div>
  );
};

export default ContactCard;
