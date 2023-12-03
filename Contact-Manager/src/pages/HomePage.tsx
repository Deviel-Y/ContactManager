import { useState } from "react";
import ContactCard, { Contact } from "../Components/ContactCard";
import { Navbar, AddContactButton, CardContainer } from "..";

const HomePage = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      fullname: "Daniel Yadghar",
      phoneNumber: 6498666666,
      emailAddress: "daniel072.dy@gmail.com",
    },
    {
      id: 2,
      fullname: "john Doe",
      phoneNumber: 98666666,
      emailAddress: "john.doe@gmail.com",
    },
  ]);

  return (
    <>
      <Navbar />
      <AddContactButton />
      <CardContainer>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard
              contacts={contact}
              deleteContact={(id) =>
                setContacts(contacts.filter((contact) => contact.id !== id))
              }
              key={contact.id}
            />
          ))
        ) : (
          <p>Nothing Found</p>
        )}
      </CardContainer>
    </>
  );
};

export default HomePage;
