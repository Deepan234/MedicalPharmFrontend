import React,{useState} from 'react';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { updateRating } from '../../action/LoginAction';


export default function RatingUpdate(props) {

    const dispatch = useDispatch();

    const[state,setState] = useState({
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
      });


   const updateRatings = async() => {
    await axios.put("http://localhost:9090/rate/update",state).then((result) => dispatch(updateRating(result.data)));
   } 


    return (
        <div>
            <div className="container">
                <div className="row">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Entry ID" className="form-label">
                                Entry ID
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="Entry ID"
                                value={state.diseaseMap.entryId}
                                onChange={(e) => setState({ ...state, diseaseMap: { ...state.diseaseMap, entryId: e.target.value } })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Disease Name" className="form-label">
                                Disease Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="Disease Name"
                                value={state.diseaseMap.diseaseName}
                                onChange={(e) => setState({ ...state, diseaseMap: { ...state.diseaseMap, diseaseName: e.target.value } })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Rating" className="form-label">
                                Rating
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="Rating"
                                value={state.rating}
                                onChange={(e) => setState({ ...state, rating: e.target.value })}
                            />
                        </div>

                        <div className="text-center mb-3">
                            <button
                                className="btn btn-primary  w-25"
                                onClick={() => {
                                    updateRatings();
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
}
