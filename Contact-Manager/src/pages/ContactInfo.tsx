import { useParams } from "react-router-dom";
import useContactsStore from "../contactStore";

const ContactInfo = () => {
  const { id } = useParams();

  const contacts = useContactsStore((s) => s.contacts);
  const contact = contacts.find((contact) => contact.id === parseInt(id!));

  return (
    <div className="card_container ">
      <img
        className="contact_picture"
        src={contact?.photo}
        alt="contact picture"
      />
      <ul className="contact_info">
        <li>Fullname : {contact?.fullname}</li>
        <li>Phone number : {contact?.mobile}</li>
        <li>Email Address : {contact?.email}</li>
        <li>Job: {contact?.job}</li>
        <li>Group : {contact?.group}</li>
      </ul>
    </div>
  );
};

export default ContactInfo;
