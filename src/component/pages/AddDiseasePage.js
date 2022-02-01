import React,{useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addDisease } from '../../action/LoginAction';

export default function AddDiseasePage(props) {


    const[state,setState] = useState({
       entryId:0,
       medicineDetails:{
         medicineId:0,
         medicineName:"",
         price:0,
         minAge:0,
         maxAge:0
       },
       diseaseName:""
    });

    const dispatch = useDispatch(); 

    const AddDisease = async() =>{
        console.log(state);
        await axios.post("http://localhost:9090/mapDisease/add",state).then((result) => dispatch(addDisease(result.data)));
    }


    return (
        <div className="container">
        <div className="row">
          <form>
            <div className="mb-3">
              <label htmlFor="Medicine ID" className="form-label">
                Entry ID
              </label>
              <input
                type="number"
                className="form-control"
                id="Entry ID"
                value={state.entryId}
                onChange={(e) => setState({ ...state,entryId: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Medicine Id" className="form-label">
                 Medicine ID
              </label>
              <input
                type="number"
                className="form-control"
                id="medicineId"
                value={state.medicineDetails.medicineId}
                onChange={(e) => setState({ ...state,medicineDetails:{...state.medicineDetails,medicineId: e.target.value }})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Disease Name" className="form-label">
                 Disease Name
              </label>
              <input
                type="text"
                className="form-control"
                id="diseaseName"
                value={state.diseaseName}
                onChange={(e) => setState({ ...state, diseaseName : e.target.value })}
              />
            </div>
           


            <div className="text-center mb-3">
              <button
                className="btn btn-primary  w-25"
                onClick={()=>{
                    AddDisease();
                
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}
