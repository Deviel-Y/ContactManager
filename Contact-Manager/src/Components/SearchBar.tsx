import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-primary" type="submit">
        <AiOutlineSearch size="20px" />
      </button>
    </form>
  );
};

export default SearchBar;
