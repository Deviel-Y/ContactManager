import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactCard } from "..";
import contactSevice from "../Services/contactService";
import useContactsStore from "../contactStore";
import groupService from "../Services/groupService";

const CardContainer = () => {
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
    <section className="card_container_section">
      {filteredContact &&
        filteredContact.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
    </section>
  );
};

export default CardContainer;
