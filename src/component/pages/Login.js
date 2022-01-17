import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useDispatch} from 'react-redux';
import { loginAccount } from '../../action/LoginAction';
import User from '../../localstorage/Users';
import {useNavigate} from "react-router-dom";

export default function Login() {

    const dispatch = useDispatch();
   
    let navigate = useNavigate();

    const[login,setLogin] = useState(
        {
            userId:"",
            password:"",
            userTypeDto:"",
        }
    )


    const checkLogin = async() => {
        
      const result = await axios.post(`http://localhost:9090/login`,login)
      if(result.data){
        localStorage.setItem("isLoggedIn","true");
        User.login(login);
        dispatch(loginAccount(login));
        navigate('/');
      }
    }
    console.log(login);
    return (
        <div>
            <form>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="Enter UserName" onChange={(event)=> setLogin({...login, userId: event.target.value}) } />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" onChange={(event)=> setLogin({...login, password: event.target.value})}/>
                </div>
                <div className='form-group'>
                   <select name="UserType" onChange={(event)=> setLogin({...login,userTypeDto: event.target.value})}>
                    <option value="ADMIN">ADMIN</option>
                    <option value="BUYER">BUYER</option>
                   </select>    
                </div>
                <button className="btn btn-primary btn-block" onClick={(event) => {
                   checkLogin();
                   event.preventDefault();
                }}
                >Submit</button>
                <Link to="/signup">SignUp</Link>
            </form>
        </div>
    )
}
