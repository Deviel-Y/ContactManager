import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContactCard } from "..";
import contactSevice from "../Services/contactService";
import groupService from "../Services/groupService";
import useContactsStore from "../contactStore";
import styles from "../Styles/CardContainer.module.css";

const CardContainer = () => {
  const navigate = useNavigate();
  const contacts = useContactsStore((s) => s.contacts);
  const setContacts = useContactsStore((s) => s.setContacts);
  const setGroups = useContactsStore((s) => s.setGroups);

  const contactHttpService = contactSevice.getAll();
  const groupHttpSevice = groupService.getAll();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await contactHttpService;
        setContacts(response);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    const fetchGroups = async () => {
      try {
        const response = await groupHttpSevice;
        setGroups(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGroups();
    fetchContacts();
  }, [setContacts, setGroups]);

  const location = useLocation();
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
