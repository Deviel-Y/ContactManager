import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="input_container">
      <button className="search_button" type="submit">
        <BsSearch size="30px" color="#9DB2BF" />
      </button>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => setSearchParams({ filter: event.target.value })}
        className="contact_search"
        type="search"
        placeholder="Contact Search"
      />
    </div>
  );
};

export default SearchBar;
