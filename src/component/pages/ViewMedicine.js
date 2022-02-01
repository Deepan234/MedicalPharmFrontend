import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedicines } from "../../action/LoginAction";
import CustomModal from "../../custommodal/CustomModal";

export const ViewMedicine = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AllMedicals.medi);
  const [element, setElement] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [id,setId] = useState(0);
  const getInduivalMedicines = async () => {
      console.log(props.id);
    const result = await axios
      .get(`http://localhost:9090/MedicineDetail/Id/${props.id}`)
      .catch((err) => {
        console.log("Error ", err);
      });
    dispatch(getMedicines(result.data));
  };
  useEffect(() => {
    getInduivalMedicines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onClickUpdateFunction = (id) => {
    setModalOpen(true);
    setElement("update");
    setId(id);
  };
  const onClickDeleteFunction = (name) => {
    setModalOpen(true);
    setElement("delete");
    setId(id);
  };

  return (
      <div className="container">
      <div className="row p-5">
        <div className="h4 p-2">Medicine Id : {data.medicineId}</div>
        <div className=" h4 p-2">Medicine Name : {data.medicineName}</div>
        <div className="h4 p-2">Price : {data.price}</div>
        <div className="h4 p-2">Minimum age : {data.minAge}</div>
        <div className="h4 p-2">Maximum age : {data.maxAge}</div>
        <button
          className="btn btn-outline-warning  ms-5 w-25 p-3"
          onClick={() => onClickUpdateFunction(props.id)}
        >
          Update
        </button>
        <button
          className="btn btn-outline-danger  ms-5 w-25 p-3"
          onClick={() => onClickDeleteFunction(props.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-outline-secondary ms-5 w-25 p-3"
          onClick={() => {
            props.setModalOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
      <CustomModal
        status={modalOpen}
        setModalOpen={setModalOpen}
        element={element}
        id={id}
      />
    </div>
  );
};
