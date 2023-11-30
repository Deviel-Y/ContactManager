import { BsEye, BsPen, BsTrash } from "react-icons/bs";

export interface Contact {
  id?: number;
  fullname: string;
  phoneNumber: number;
  emailAddress: string;
}

const ContactCard = ({ emailAddress, fullname, phoneNumber }: Contact) => {
  return (
    <div className="card_container ">
      <img
        className="contact_picture"
        src="https://placehold.co/150"
        alt="contact picture"
      />
      <ul className="contact_info">
        <li>Fullname : {fullname}</li>
        <li>Phone number : {phoneNumber}</li>
        <li>Email Address : {emailAddress}</li>
      </ul>
      <div className="action_buttons">
        <button className=" contact_detail_button">
          <BsEye className="button_icon" fill="orangered" />
        </button>
        <button className=" contact_edit_button">
          <BsPen className="button_icon" fill="dodgerblue" />
        </button>
        <button className="contact_remove_button">
          <BsTrash className="button_icon" fill="red" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
