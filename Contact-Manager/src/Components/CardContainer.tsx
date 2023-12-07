import axios from "axios";
import { useEffect } from "react";
import { ContactCard } from "..";
import Contact from "../Entites/Contact";
import useContactsStore from "../contactStore";
import { useLocation } from "react-router-dom";

const CardContainer = () => {
  const contacts = useContactsStore((s) => s.contacts);
  const setContacts = useContactsStore((s) => s.setContacts);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get<Contact[]>(
          "http://localhost:8000/contacts"
        );
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
