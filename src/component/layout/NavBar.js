import { Link } from "react-router-dom";
import { logoutAccount } from "../../action/LoginAction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
   
  const state = useSelector((state) => state.AllMedicals.user);

   const dispatch = useDispatch();

  console.log(state);

  const logout = async() => {
       await axios.post(`http://localhost:9090/logout`,state).then(dispatch(logoutAccount(state)));
  } 
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
                logout();
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
