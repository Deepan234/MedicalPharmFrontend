import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Login() {


    const[login,setLogin] = useState(
        {
            userId:0,
            password:"",
            userType:"",
        }
    )

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
                   <select name="UserType" onChange={(event)=> setLogin({...login,userType: event.target.value})}>
                    <option value="ADMIN">ADMIN</option>
                    <option value="BUYER">BUYER</option>
                   </select>    
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <Link to="/signup">SignUp</Link>
            </form>
        </div>
    )
}
