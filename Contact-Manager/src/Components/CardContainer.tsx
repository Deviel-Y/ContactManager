import { useLocation, useNavigate } from "react-router-dom";
import { ContactCard } from "..";
import useStore from "../Store";
import styles from "../Styles/CardContainer.module.css";
import useContact from "../hooks/useContacts";
import useGroups from "../hooks/useGroups";

const CardContainer = () => {
  useContact();
  useGroups();

  const navigate = useNavigate();

  const location = useLocation();

  const contacts = useStore((s) => s.contacts);

  const searchedItem = location.search.slice(8);

  const filteredContact = contacts.filter((contact) =>
    contact?.fullname.toLowerCase().includes(searchedItem)
  );

  return (
    <div>
      <div>
        <button
          onClick={() => navigate("contacts/add")}
          className={[styles.btn, styles.addContact].join(" ")}
        >
          Add Contact
        </button>
      </div>
      <section className={styles.cardContainerSection}>
        {filteredContact &&
          filteredContact.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
      </section>
    </div>
  );
};

export default CardContainer;
