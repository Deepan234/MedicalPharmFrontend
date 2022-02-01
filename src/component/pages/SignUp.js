import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { signUpAccount } from '../../action/LoginAction'

export default function SignUp() {

    const dispatch = useDispatch();

    const[signup,setSignup] = useState({
        userId:0,
        password:"",
        userTypeDto:"BUYER",
    })
    console.log(signup);

    const createAccount = async() => {
        console.log(signup);
       await axios.post(`http://localhost:9090/signup`,signup).then(dispatch(signUpAccount(signup)));
      
    }


    return (
        <section class="container-fluid bg">
        <section class= "row justify-content-center">
        <section class="col-18 col-sm-7 col-md-3"> 
          <form className='form-container'>
            <h3>SignUp</h3>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="Enter UserName" onChange={(event)=> setSignup({...signup, userId: event.target.value}) } />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" onChange={(event)=> setSignup({...signup, password: event.target.value})}/>
                </div>
                <br/>
                <div className='form-group'>
                <button type="submit" className="btn btn-primary btn-lg btn-block"  onClick={()=>{
                    createAccount();
                }}>CREATE</button>
                <Link to="/login">
                <button className='btn btn-secondary btn-lg btn-block'>LOGIN </button>
                </Link>
                </div>
                </form>
        </section>
        </section>
        </section>
    )
}
