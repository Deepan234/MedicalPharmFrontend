/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedicines, updateMedicines } from "../../action/LoginAction";

export const UpdateMedicines = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    medicineId: props.id,
    medicineName: "",
    price: 0,
    minAge:0,
    maxAge:0
  });
  const data = useSelector((state) => state.AllMedicals.medi);
  const [msg, setMsg] = useState("");
  const getMedicineListing = async () => {
    const result = await axios
      .get(`http://localhost:9090/MedicineDetail/Id/${props.id}`)
      .catch((err) => {
        console.log("Error ", err);
      });
    dispatch(getMedicines(result.data));
  };

  useEffect(() => {
    getMedicineListing();
  }, []);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  const UpdateMedicines = async () => {
    await axios
      .put(`http://localhost:9090/MedicineDetail/Update`, state)
      .catch((err) => {
        console.log("Error ", err);
      })
      .then(setMsg("Updated Successfully"));
    dispatch(updateMedicines(state));
  };

  console.log(state);

  return (
    <div className="container">
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="medicineid" className="form-label">
              Medicine Id
            </label>
            <input
              type="number"
              className="form-control"
              id="medicineId"
              value={state.medicineId || "" }
              onChange={(e) => setState({ ...state, medicineId: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medicineName" className="form-label">
              Medicine Name
            </label>
            <input
              type="text"
              className="form-control"
              id="medicineName"
              value={state.medicineName || "" }
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
                value={state.price || ""}
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
                value={state.minAge || ""}
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
                value={state.maxAge || ""}
                onChange={(e) => setState({ ...state,maxAge: e.target.value })}
              />
            </div>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                UpdateMedicines();
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
