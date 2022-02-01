import React from "react";
import Modal from "react-modal";
import AddDiseasePage from "../component/pages/AddDiseasePage";
import { DeleteDisease } from "../component/pages/DeleteDiseases";
import { DeleteMedicine } from "../component/pages/DeleteMedicine";
import MedicineAddingPage from "../component/pages/MedicineAddingPage";
import RatingAdd from "../component/pages/RatingAdd";
import RatingDelete from "../component/pages/RatingDelete";
import RatingUpdate from "../component/pages/RatingUpdate";
import { UpdateDiseases } from "../component/pages/UpdateDisease";
import { UpdateMedicines } from "../component/pages/UpdateMedicine";
import UpdatePassword from "../component/pages/UpdatePassword";
import { ViewMedicine } from "../component/pages/ViewMedicine";
const CustomModal = (props) => {
  console.log(props.userId);
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

          case 'delete':
            return <DeleteMedicine setModalOpen={props.setModalOpen} id={props.id} name={props.name} price={props.price} minAge={props.minAge} maxAge={props.maxAge}/>

          case 'AddDisease':
            return <AddDiseasePage    setModalOpen={props.setModalOpen}/>

          case 'UpdateDisease':
             return <UpdateDiseases setModalOpen={props.setModalOpen} id={props.id} medicineId={props.medicineId} diseaseName={props.diseaseName}/>

          case 'DeleteDisease':
             return <DeleteDisease setModalOpen={props.setModalOpen} id={props.id} medicineId={props.medicineId}  diseaseName={props.diseaseName}/>

          case 'AddRating':
             return<RatingAdd setModalOpen={props.setModalOpen} userId={props.userId} entryId={props.entryId} medicineName={props.medicineName} diseaseName={props.diseaseName} />
          
          case 'UpdateRating':
             return<RatingUpdate setModalOpen={props.setModalOpen} ratingId={props.ratingId} userId={props.userId} entryId={props.entryId} medicineName={props.medicineName} diseaseName={props.diseaseName} rating={props.rating} />
           
          case 'DeleteRating':
            return<RatingDelete setModalOpen={props.setModalOpen} ratingId={props.ratingId} userId={props.userId} entryId={props.entryId} medicineName={props.medicineName} diseaseName={props.diseaseName} rating={props.rating} />
 
          case 'UpdatePassword':
            return<UpdatePassword  setModalOpen={props.setModalOpen} userId={props.userId} userType={props.userType}/>;
            
          

          default:
            break;
        }
      })()}</div>
    </Modal>
  );
};

export default CustomModal;
