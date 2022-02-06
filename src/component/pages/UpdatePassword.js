import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updatePasswords } from '../../action/LoginAction';

export default function UpdatePassword(props) {

    const[state,setState] = useState({
        userId:props.userId,
        password:"",
        userTypeDto:props.userType
    })
  
    const dispatch = useDispatch();

    const updatePassword = async()  =>{
          const result = await axios.put(`http://localhost:3000/updatePass`);
          console.log(result.data);
          localStorage.setItem("password",state.password);
          dispatch(updatePasswords(state));
       
    }


    return (<div>
         <div className="container">
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="User Id" className="form-label">
              USER ID
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              value={ state.userId|| "" }
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              PASSWORD
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              value={ state.password|| "" }
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
              <label htmlFor="USER TYPE" className="form-label">
                 USER TYPE
              </label>
              <input
                type="text"
                className="form-control"
                id="userType"
                value={state.userTypeDto || ""}
                readOnly
              />
            </div>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                 updatePassword();
              }}
            >
              Submit
            </button>
            <button
              className="btn btn-secondary ms-5 w-25"
              onClick={() => {
                props.setModalOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>);
}
