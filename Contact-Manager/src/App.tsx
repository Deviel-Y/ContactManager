import { useState } from "react";
import AddContactButton from "./Components/AddContactButton";
import ContactCard, { Contact } from "./Components/ContactCard";
import Navbar from "./Components/Navbar";
import CardContainer from "./Components/CardContainer";

const App = () => {
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
              key={contact.id}
              emailAddress={contact.emailAddress}
              fullname={contact.fullname}
              phoneNumber={contact.phoneNumber}
            />
          ))
        ) : (
          <p>Nothing Found</p>
        )}
      </CardContainer>
    </>
  );
};

export default App;
