import { useLocation, useNavigate } from "react-router-dom";
import { ContactCard } from "..";
import styles from "../Styles/CardContainer.module.css";
import useContact from "../hooks/useContacts";

const CardContainer = () => {
  const { data: contacts, isLoading } = useContact();

  const navigate = useNavigate();

  const location = useLocation();

  const searchedItem = location.search.slice(8);

  const filteredContact = contacts?.filter((contact) =>
    contact?.fullname.toLowerCase().includes(searchedItem.toLowerCase())
  );

  return (
    <>
      {isLoading && <div className="spinner-grow" />}
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
          {filteredContact?.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </section>
      </div>
    </>
  );
};

export default CardContainer;
