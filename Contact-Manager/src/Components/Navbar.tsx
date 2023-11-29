import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col mx-3 d-flex align-items-center justify-content-around ">
            <span>My Logo</span>
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
