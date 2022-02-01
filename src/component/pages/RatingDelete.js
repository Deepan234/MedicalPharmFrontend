import React from 'react';
import axios  from 'axios';
import { useDispatch } from 'react-redux';
import { deleteRating } from '../../action/LoginAction';

export default function RatingDelete(props) {

    const dispatch = useDispatch();
    const deleteRatings = async () => {
      const result= await axios
        .delete(`http://localhost:9090/rate/delete`,{data:{
            "ratingId": props.ratingId,
            "userId": props.userId,
            "diseaseMap": {
              "entryId": props.entryId,
              "medicineDetails": {
                "medicineId": 0,
                "medicineName": props.medicineName,
                "price": 0,
                "minAge":0,
                "maxAge": 0
              },
              "diseaseName": props.diseaseName
            },
            "rating": props.rating
          }})
        .catch((err) => {
          console.log("Error ", err);
        })
        .then(alert("Deleted Successfully"));
      dispatch(deleteRating(result.data));
    };
  


  return ( 
  <div>
    <div className="container">
      <div className="row">
        <form>
          <h2 className="text-center">do you want to delete it ? </h2>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                deleteRatings();
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
  </div>);
}
