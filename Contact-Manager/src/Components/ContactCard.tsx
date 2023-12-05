import { BsEye, BsPen, BsTrash } from "react-icons/bs";
import ContactData from "../Entites/Contact";

interface Props {
  contacts: ContactData;
  deleteContact: (id: number) => void;
}

const ContactCard = ({ contacts, deleteContact }: Props) => {
  return (
    <div className="card_container ">
      <img
        className="contact_picture"
        src={contacts.photo}
        alt="contact picture"
      />
      <ul className="contact_info">
        <li>Fullname : {contacts.fullname}</li>
        <li>Phone number : {contacts.mobile}</li>
        <li>Email Address : {contacts.email}</li>
      </ul>
      <div className="action_buttons">
        <button className=" contact_detail_button">
          <BsEye className="button_icon" fill="orangered" />
        </button>
        <button className=" contact_edit_button">
          <BsPen className="button_icon" fill="dodgerblue" />
        </button>
        <button
          onClick={() => deleteContact(contacts.id)}
          className="contact_remove_button"
        >
          <BsTrash className="button_icon" fill="red" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
