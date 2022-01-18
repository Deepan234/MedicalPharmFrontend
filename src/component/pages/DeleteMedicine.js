import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../actions/EmployeeAction";

export const DeleteMedicine = (props) => {
  const dispatch = useDispatch();

  const deleteMedicines = async () => {
    await axios
      .delete(`http://localhost:9090/MedicineDetail/Delete`)
      .catch((err) => {
        console.log("Error ", err);
      })
      .then(alert("Deleted Successfully"));
    dispatch(deleteEmployee());
  };

  return (
    <div className="container">
      <div className="row">
        <form>
          <h2 className="text-center">do you want to delete it ? </h2>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                DeleteEmployees();
              }}
            >
              Submit
            </button>
            <button
              className="btn btn-secondary ms-5 w-25"
              onClick={() => props.setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
