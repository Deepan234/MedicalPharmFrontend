import { Link } from "react-router-dom";
import { logoutAccount } from "../../action/LoginAction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react"
import * as Icons from "react-icons/fa"
import "./Navbar.css";

function NavBar() {
   
    const[state,setState] = useState({
        userId:localStorage.getItem("userId"),
        password:localStorage.getItem("password"),
        userTypeDto:localStorage.getItem("userType")
    })

   const dispatch = useDispatch();

  console.log(state);

  const logout = async() => {
       await axios.post(`http://localhost:9090/logout`,state).then(dispatch(logoutAccount(state)));
  } 
  return (
    <div className="navbar navbar-expand navbar-light  bg-light">
      <div className="collapse navbar-collapse">
        <div>
        <Link to="/" className="navbar-logo">
              MEDIPHARM
              <Icons.FaMedkit/>
        </Link>
        </div>
        <ul className="naviblue">
          <li className="navigreen">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="navigreen">
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="navigreen">
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => {
                localStorage.setItem("isLoggedIn", false);
                localStorage.setItem("userId","");
                localStorage.setItem("password","");
                localStorage.setItem("userType","");
                console.log(localStorage.getItem("isLoggedIn"));
                logout();
              }}
              className="nav-link"
              to="/login"
            ><button className="btns">
              LOGOUT
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">
              <button className="btns">
                PROFILE
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
