import React,{useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMedicines } from '../../action/LoginAction';

export default function MedicineAddingPage(props) {


    const[state,setState] = useState({
       medicineId:0,
       medicineName:"",
       price:0,
       minAge:0,
       maxAge:0
    });

    const dispatch = useDispatch(); 

    const AddMedicines = async() =>{
        await axios.post("http://localhost:9090/MedicineDetail/Add",state).then((result) => dispatch(addMedicines(result.data)));
    }


    return (
      <div className='container-bg'>
        <div className="container">
        <div className="row">
          <form>
            <div className="mb-3">
              <label htmlFor="Medicine ID" className="form-label">
                Medicine ID
              </label>
              <input
                type="number"
                className="form-control"
                id="Medicine ID"
                value={state.medicineId}
                onChange={(e) => setState({ ...state,medicineId: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Medicine Name" className="form-label">
                 Medicine Name
              </label>
              <input
                type="text"
                className="form-control"
                id="MedicineName"
                value={state.medicineName}
                onChange={(e) => setState({ ...state, medicineName: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="PRICE" className="form-label">
                 Price
              </label>
              <input
                type="number"
                className="form-control"
                id="Price"
                value={state.price}
                onChange={(e) => setState({ ...state, price: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Minage" className="form-label">
                 Min Age
              </label>
              <input
                type="number"
                className="form-control"
                id="Minage"
                value={state.minAge}
                onChange={(e) => setState({ ...state,  minAge: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Maxage" className="form-label">
                 Max Age
              </label>
              <input
                type="number"
                className="form-control"
                id="Maxage"
                value={state.maxAge}
                onChange={(e) => setState({ ...state,maxAge: e.target.value })}
              />
            </div>


            <div className="text-center mb-3">
              <button
                className="btn btn-primary  w-25"
                onClick={()=>{
                    AddMedicines();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    )
}
