import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar navbar-expand navbar-light bg-primary">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => {
                localStorage.setItem("isLoggedIn", false);
                console.log(localStorage.getItem("isLoggedIn"));
              }}
              className="nav-link"
              to="/login"
            >
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
