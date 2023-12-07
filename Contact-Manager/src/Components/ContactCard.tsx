import { BsEye, BsPen, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import Contact from "../Entites/Contact";
import { deleteContact } from "../Services/contactsServices";

interface Prop {
  contact: Contact;
}
const ContactCard = ({ contact }: Prop) => {
  return (
    <div className="card_container ">
      <img
        className="contact_picture"
        src={contact.photo}
        alt="contact picture"
      />
      <ul className="contact_info">
        <li>Fullname : {contact.fullname}</li>
        <li>Phone number : {contact.mobile}</li>
        <li>Email Address : {contact.email}</li>
      </ul>
      <div className="action_buttons">
        <Link to={`/contacts/${contact.id}`} className="contact_detail_button">
          <BsEye className="button_icon" fill="orangered" />
        </Link>
        <button className=" contact_edit_button">
          <BsPen className="button_icon" fill="dodgerblue" />
        </button>
        <button
          onClick={() => deleteContact(contact.id)}
          className="contact_remove_button"
        >
          <BsTrash className="button_icon" fill="red" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
