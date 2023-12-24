import { BsSearch } from "react-icons/bs";
import styles from "../Styles/Navbar.module.css";
import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <nav className={styles.navBar}>
      <div className={styles.contactIcon}>
        <Link to="/">
          <BsSearch />
        </Link>
      </div>
      <h1 className={styles.heading}>Contact Manager Web Application</h1>
      <div className={styles.searchMainContainer}>
        <div className={styles.searchContainer}>
          <button className={styles.searchButton} type="submit">
            <BsSearch size="30px" color="#9DB2BF" />
          </button>
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) =>
              setSearchParams({ filter: event.target.value })
            }
            className={styles.contactSearch}
            type="search"
            placeholder="Contact Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
