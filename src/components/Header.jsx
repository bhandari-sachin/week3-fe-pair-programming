import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <div className="nav-header">
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars" />
        </button>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
