import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="input_container">
      <button className="search_button" type="submit">
        <BsSearch size="30px" color="#9DB2BF" />
      </button>
      <input
        className="contact_search"
        type="search"
        placeholder="Contact Search"
      />
    </div>
  );
};

export default SearchBar;
