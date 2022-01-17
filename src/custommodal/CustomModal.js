import React from "react";
import Modal from "react-modal";
import MedicineAddingPage from "../component/pages/MedicineAddingPage";

const CustomModal = (props) => {
  return (
    <Modal isOpen={props.status} ariaHideApp={false}>
      <div className="titleCloseBtn ">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            props.setModalOpen(false);
          }}
        >
          {" "}
          X
        </button>
      </div>
      <div>{(() => {
        switch (props.element) {

           case  "AddMedicines":
               return<MedicineAddingPage setModalOpen={props.setModalOpen}/>
          
          default:
             break;
        }
      })()}</div>
    </Modal>
  );
};

export default CustomModal;
