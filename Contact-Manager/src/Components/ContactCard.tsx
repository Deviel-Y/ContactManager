import { BsEye, BsPen, BsTrash } from "react-icons/bs";

const ContactCard = () => {
  return (
    <div className="card_container ">
      <img
        className="contact_picture"
        src="https://placehold.co/150"
        alt="contact picture"
      />
      <ul className="contact_info">
        <li>Fullname : Daniel yadghar</li>
        <li>Phone number : +980000000000</li>
        <li>Email Address : Daniel072.dy@gmail.com</li>
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
