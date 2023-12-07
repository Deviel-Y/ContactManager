import { Link } from "react-router-dom";

const AddContactButton = () => {
  return (
    <section>
      <Link to={"contacts/add"} className="add_contact">
        Add Contact
      </Link>
    </section>
  );
};

export default AddContactButton;
