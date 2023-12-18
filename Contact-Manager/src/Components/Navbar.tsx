import SearchBar from "./SearchBar";
import { GrContactInfo } from "react-icons/gr";
import styles from "../Styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={["navbar", "navbar-expand-lg"].join(" ")}>
      <div className={["container-fluid"].join(" ")}>
        <div className={["row", "w-100"].join(" ")}>
          <div
            className={[
              "col",
              "d-flex",
              "align-items-center",
              "justify-content-around",
            ].join(" ")}
          >
            <a href="#">
              <GrContactInfo size="40px" />
            </a>
            <h1 className={styles.heading}>Contact Manager Web Application</h1>
          </div>
          <div className="col mx-3">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
