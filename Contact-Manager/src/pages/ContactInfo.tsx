import { useNavigate, useParams } from "react-router-dom";
import styles from "../Styles/ContactInfo.module.css";
import useContact from "../hooks/useContacts";

const ContactInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: contacts } = useContact();
  const contact = contacts?.find((contact) => contact.id === parseInt(id!));

  return (
    <div className={styles.mainContainer}>
      <div className={styles.card}>
        {contact?.photo && (
          <div className={styles.photoContainer}>
            <img
              className={styles.contactPhoto}
              src={contact?.photo}
              alt={`contact name : ${contact?.fullname}`}
            />
          </div>
        )}
        {contact?.fullname && (
          <h2 className={styles.contactName}>{contact?.fullname}</h2>
        )}
        {contact?.job && <h3 className={styles.contactJob}>{contact?.job}</h3>}
        <ul className={styles.contactInfo}>
          {contact?.mobile && (
            <li className={styles.contactInfoItem}>
              <span className={styles.contactInfoItemSpan}>Phone Number :</span>
              {contact?.mobile}
            </li>
          )}
          {contact?.group && (
            <li className={styles.contactInfoItem}>
              <span className={styles.contactInfoItemSpan}>Group :</span>
              {contact?.group}
            </li>
          )}
        </ul>
        <div className={styles.actionButtons}>
          <button
            onClick={() => navigate("/")}
            className={[styles.btn, styles.btnBack].join(" ")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
