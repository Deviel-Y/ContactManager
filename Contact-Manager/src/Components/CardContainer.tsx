import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactCard } from "..";
import { getAllContacts } from "../Services/contactsServices";
import useContactsStore from "../contactStore";

const CardContainer = () => {
  const contacts = useContactsStore((s) => s.contacts);
  const setContacts = useContactsStore((s) => s.setContacts);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getAllContacts();
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [setContacts]);

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
