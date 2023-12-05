import axios from "axios";
import { useEffect, useState } from "react";
import { ContactCard } from "..";
import Contact from "../Entites/Contact";

const CardContainer = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

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
  }, []);

  return (
    <section className="card_container_section">
      {contacts.map((contact) => (
        <ContactCard
          contacts={contact}
          deleteContact={(id) =>
            setContacts(contacts.filter((contact) => contact.id !== id))
          }
          key={contact.id}
        />
      ))}
    </section>
  );
};

export default CardContainer;
