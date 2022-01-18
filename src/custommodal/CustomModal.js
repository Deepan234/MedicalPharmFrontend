import React from "react";
import Modal from "react-modal";
import MedicineAddingPage from "../component/pages/MedicineAddingPage";
import { UpdateMedicines } from "../component/pages/UpdateMedicine";
import { ViewMedicine } from "../component/pages/ViewMedicine";
const CustomModal = (props) => {
  console.log(props.id);
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

          case "AddMedicines":
            return <MedicineAddingPage setModalOpen={props.setModalOpen} />

          case 'view':
            return <ViewMedicine setModalOpen={props.setModalOpen} id={props.id} />

          case 'update':
            return <UpdateMedicines setModalOpen={props.setModalOpen} id={props.id} />


          default:
            break;
        }
      })()}</div>
    </Modal>
  );
};

export default CustomModal;
