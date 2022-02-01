import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDiseasesAction } from "../../action/LoginAction";

export const DeleteDisease = (props) => {
  const[state,setState] = useState(
    {
      entryId:props.id,
      medicineDetails:{
        medicineId:props.medicineId,
        medicineName:"",
        price:0,
        minAge:0,
        maxAge:0
      },
      diseaseName:props.diseaseName
   }
  )
  const dispatch = useDispatch();
  console.log(state);
  const deleteDiseases = async () => {
    const result= await axios
      .delete(`http://localhost:9090/mapDisease/delete`,{data:{
        entryId:props.id,
        medicineDetails:{
          medicineId:props.medicineId,
          medicineName:"",
          price:0,
          minAge:0,
          maxAge:0
        },
        diseaseName:props.diseaseName
     }})
      .catch((err) => {
        console.log("Error ", err);
      })
      .then(alert("Deleted Successfully"));
    dispatch(deleteDiseasesAction(result.data));
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
                deleteDiseases();
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
