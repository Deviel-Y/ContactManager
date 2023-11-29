import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow   ">
      <div className="container ">
        <div className="row w-100 ">
          <div className="col d-flex align-items-center">
            <span>My Logo</span>
          </div>
          <div className="col">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
