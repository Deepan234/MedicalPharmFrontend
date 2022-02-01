/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDiseases,getAllDisease } from "../../action/LoginAction";


export const UpdateDiseases = (props) => {
  const dispatch = useDispatch();
  const[state,setState] = useState({
    entryId:props.id,
    medicineDetails:{
      medicineId:props.medicineId,
      medicineName:"",
      price:0,
      minAge:0,
      maxAge:0
    },
    diseaseName:props.diseaseName
 });

  const [msg, setMsg] = useState("");

  const fetchDisease = async () => {
    const result = await axios
      .get("http://localhost:9090/mapDisease/getAll")
      .catch((err) => {
        console.log("Error ", err);
      });
    dispatch(getAllDisease(result.data));
  }

  useEffect(() => {
    fetchDisease();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const updateDisease = async () => {
    await axios
      .put(`http://localhost:9090/mapDisease/update`, state)
      .catch((err) => {
        console.log("Error ", err);
      })
      .then(setMsg("Updated Successfully"));
    dispatch(updateDiseases(state));
  };

  console.log(state);

  return (
    <div className="container">
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="entryId" className="form-label">
              Entry Id
            </label>
            <input
              type="number"
              className="form-control"
              id="entryId"
              value={state.entryId || "" }
              onChange={(e) => setState({ ...state, entryId: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medicineId" className="form-label">
              Medicine Id
            </label>
            <input
              type="number"
              className="form-control"
              id="medicineId"
              value={state.medicineDetails.medicineId || "" }
              onChange={(e) => setState({ ...state,medicineDetails:{...state.medicineDetails,medicineId: e.target.value }})}
            />
          </div>
          <div className="mb-3">
              <label htmlFor="diseaseName" className="form-label">
                 Disease Name
              </label>
              <input
                type="text"
                className="form-control"
                id="diseaseName"
                value={state.diseaseName || ""}
                onChange={(e) => setState({ ...state, diseaseName: e.target.value })}
              />
            </div>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                updateDisease();
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
          <div className="text-center h3">{msg}</div>
        </form>
      </div>
    </div>
  );
};