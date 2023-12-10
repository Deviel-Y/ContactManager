import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContactCard } from "..";
import contactSevice from "../Services/contactService";
import groupService from "../Services/groupService";
import styles from "../Styles/CardContainer.module.css";
import useContactsStore from "../contactStore";
import Contact from "../Entites/Contact";
import { Group } from "../Entites/Group";

const CardContainer = () => {
  const navigate = useNavigate();
  const contacts = useContactsStore((s) => s.contacts);
  const setContacts = useContactsStore((s) => s.setContacts);
  const setGroups = useContactsStore((s) => s.setGroups);

  const contactHttpService = contactSevice.getAll<Contact[]>();
  const groupHttpSevice = groupService.getAll<Group[]>();

  useEffect(() => {
    contactHttpService.then((res) => setContacts(res.data));

    groupHttpSevice.then((res) => setGroups(res.data));
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
