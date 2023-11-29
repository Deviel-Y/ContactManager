import SearchBar from "./SearchBar";
import { GrContactInfo } from "react-icons/gr";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col mx-3 d-flex align-items-center justify-content-around ">
            <a href="#">
              <GrContactInfo size="40px" />
            </a>
            <span>Contact Manager Web Application</span>
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
