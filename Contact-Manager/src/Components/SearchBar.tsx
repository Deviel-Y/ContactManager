import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/searchBar.module.css";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.searchContainer}>
      <button className={styles.searchButton} type="submit">
        <BsSearch size="30px" color="#9DB2BF" />
      </button>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => setSearchParams({ filter: event.target.value })}
        className={styles.contactSearch}
        type="search"
        placeholder="Contact Search"
      />
    </div>
  );
};

export default SearchBar;
