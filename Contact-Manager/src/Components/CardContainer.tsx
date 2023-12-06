import axios from "axios";
import { useEffect } from "react";
import { ContactCard } from "..";
import Contact from "../Entites/Contact";
import useContactsStore from "../contactStore";

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

  return (
    <section className="card_container_section">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </section>
  );
};

export default CardContainer;
