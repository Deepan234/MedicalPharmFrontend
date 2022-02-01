import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginAccount } from '../../action/LoginAction';
import User from '../../localstorage/Users';
import { useNavigate } from "react-router-dom";
import "./Login.css"

export default function Login() {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [login, setLogin] = useState(
        {
            userId: "",
            password: "",
            userTypeDto: "",
        }
    )





    const checkLogin = async () => {

        const result = await axios.post(`http://localhost:9090/login`, login, {
            headers: {
                'Access-Control-Allow-Origin': true
            }
        })
        console.log(result);
        if (result.data) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userId", login.userId);
            localStorage.setItem("password", login.password);
            localStorage.setItem("userType", login.userTypeDto);
            User.login(login);
            dispatch(loginAccount(login));
            navigate('/');
        }
    }
    console.log(login);
    return (
        <section class="container-fluid bg">
        <section class= "row justify-content-center">
        <section class="col-18 col-sm-7 col-md-3"> 
                    <form className='form-container'>
                        <h3>LOG IN</h3>
                        <div className="form-group">
                            <label>USERNAME</label>
                            <input type="text" className="form-control" placeholder="Enter UserName" onChange={(event) => setLogin({ ...login, userId: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={(event) => setLogin({ ...login, password: event.target.value })} />
                        </div>
                        <div className='form-group'>
                            <label for="sel1">USERTYPE</label>
                            <div class="input-group">
                                <select class="form-select" id="inputGroupSelect02" onChange={(event) => setLogin({ ...login, userTypeDto: event.target.value })}>
                                    <option defaultValue={"USER"}>Choose...</option>
                                    <option value="BUYER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
    
                                </select>
                                <div class="input-group-append">
                                    <label class="input-group-text" for="inputGroupSelect02">TYPE</label>
                                </div>
                            </div>
                        </div>
                        <br/>
                        
                        <button className="btn btn-primary btn-lg btn-block" onClick={(event) => {
                            checkLogin();
                            event.preventDefault();
                        }}
                        >SUBMIT</button>
                    
                        <Link to="/signup">
                        <button className="btn btn-secondary btn-lg btn-block">
                        SIGN UP
                        </button>
                        </Link>
                    </form>
                
          </section>
       </section>
    </section>
    )
}
