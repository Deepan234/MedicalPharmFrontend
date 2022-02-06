import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllDisease, getRatingById, userRatingGetAll } from '../../action/LoginAction';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import "./Homepage.css";
import CustomModal from '../../custommodal/CustomModal';
import User from '../../localstorage/Users';
import CarouselContainer from './CarouselContainer';
export default function UserMedicineListing() {


  const rating = useSelector((state) => state.AllMedicals.rating)

  const ready = useSelector((state) => state.AllMedicals.user)

  const duo = useSelector((state) => state.AllMedicals.ratingsId)

  const medico = useSelector((state) => state.AllMedicals.diseases)

  console.log(ready);
  
  const[en,setEnID] = useState(0);
  const[mediNAme,setMediName] = useState("");
  const[dieName,setDieName] = useState("");
  const [data, setData] = useState(rating);
  const [userData, setUserData] = useState(duo);
  const dispatch = useDispatch();
  const [userId, setUserid] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [element, setElement] = useState("");
   const[uData,setUData] = useState(medico);
   const[ratingInd,setRatingInd] = useState(0);
   const[ratingID,setRatingID] = useState(0);
  console.log(localStorage.getItem("userId"));
  const fetchUserMedicines = async () => {
    const result = await axios.get(`http://localhost:9090/rate/getAll`);
    dispatch(userRatingGetAll(result.data));
    console.log(result.data);
    setData(result.data);
  }



  useEffect(() => {
    fetchUserMedicines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filterByName = (event) => {
    const filterdata = rating.filter((rating) =>
      rating.diseaseMap.diseaseName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setData(filterdata);
  };

  const filterByNameGive = (event) => {
    const filterUdata = medico.filter((medico)=>
    medico.diseaseName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setUData(filterUdata);
  }

  const onClickAddFunction = (userID,enId,medicalName,disName) => {
    setModalOpen(true);
    setElement("AddRating");
    console.log(localStorage.getItem("userId"));
    setUserid(localStorage.getItem("userId"));
    setEnID(enId);
    setMediName(medicalName);
    setDieName(disName);
    console.log(userId)
  }


  const onClickGetFunction = async () => {

    const result = await axios.get(`http://localhost:9090/rate/getAll/${localStorage.getItem("userId")}`);

    dispatch(getRatingById(result.data));
    console.log(result.data);
    setUserData(result.data);

  }

  const onClickUpdateFunction = (ratingId,enId,disName,medicalName,rating) => {
    setModalOpen(true);
    setElement("UpdateRating");
    console.log(localStorage.getItem("userId"));
    setUserid(localStorage.getItem("userId"));
    setEnID(enId);
    setMediName(medicalName);
    setDieName(disName);
    setRatingInd(rating);
    setRatingID(ratingId);
    console.log(userId)
  } 


  const onClickDeleteFunction = (ratingId,enId,disName,medicalName,rating) => {
    setModalOpen(true);
    setElement("DeleteRating");
    console.log(localStorage.getItem("userId"));
    setUserid(localStorage.getItem("userId"));
    setEnID(enId);
    setMediName(medicalName);
    setDieName(disName);
    setRatingInd(rating);
    setRatingID(ratingId);
    console.log(userId)
  } 
  const onClickGetEntryIdFunction = async () => {
    
    const response = await axios.get(`http://localhost:9090/mapDisease/getAll`);
    dispatch(getAllDisease(response.data));
    setUData(response.data);
  }


  const entryIDFunction = (uData) => {
    if(uData.length){
        return(
          <div className="conatiner">
              <div className="row">
              <div className='style'>
              <div className="col-md-10">
               <br /><br />
               <div className="text-center">
                 <h4>ALL ENTRIES ID'S FOR {localStorage.getItem("userId").toUpperCase()} IS HERE:</h4>
               </div>
               <br /><br />
               <input
              type="text"
              className="form-control"
              placeholder="Enter DiseaseName"
              onChange={(event) => {
                filterByNameGive(event);
              }}
            />
            <br/>
            <br/>
                <table className="table table-bordered table-hover m-auto">
                  <thead className="table-light ">
                    <tr className="table-secondary">
                      <th>Entry ID</th>
                      <th>Disease Name</th>
                      <th>Medicine Name</th>
                      <th>Ratings</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {uData &&
                      uData.map((medi) => {
                        const {entryId,medicineDetails,diseaseName } = medi;
                        return (
                          <tr key={entryId}>
                            <td>{entryId}</td>
                            <td>{diseaseName}</td>
                            <td>{medicineDetails.medicineName}</td>
                            <td>
                          <button
                            className="btn btn-outline-danger "
                            onClick={()=>onClickAddFunction(localStorage.getItem("userId"),entryId,medicineDetails.medicineName,diseaseName)}
                          >
                            GIVE RATING
                          </button>
                        </td>

                            </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
            </div>
        )
    }else {

      return (
        <div className="conatiner pt-3">
          <div className="row">
            <div className='style'>
              <div className="col-md-10">
                <br /><br />
                <div className="text-center">
                  <h4>CLICK THE ENTRY BUTTON TO KNOW ABOUT DISEASES ENTRY</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    }

  }


  const userReview = (userData) => {

    if (userData.length) {
      return (
        <div className="conatiner pt-3">
          <div className="row">
            <div className='style'>
              <div className="col-md-10">
                <br /><br />

                <div className="text-center">
                  <h4>ALL ENTRIES OF {localStorage.getItem("userId").toUpperCase()} IS HERE:</h4>
                </div>
                <br /><br />
                <table className="table table-bordered table-hover">
                  <thead className="table-light ">
                    <tr className="table-secondary">
                      <th>ENTRY ID</th>
                      <th>DISEASE NAME</th>
                      <th>MEDICINE</th>
                      <th>RATING</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData &&
                      userData.map((medi) => {
                        const { ratingId, userId, diseaseMap, rating } = medi;
                        return (
                          <tr key={ratingId}>
                            <td>{diseaseMap.entryId}</td>
                            <td>{diseaseMap.diseaseName}</td>
                            <td>{diseaseMap.medicineDetails.medicineName}</td>
                            <td>{rating}</td>
                            <td>
                          <button
                            className="btn btn-outline-warning "
                            onClick={()=>onClickUpdateFunction(ratingId,diseaseMap.entryId,diseaseMap.diseaseName,diseaseMap.medicineDetails.medicineName,rating)}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger "
                            onClick={()=>onClickDeleteFunction(ratingId,diseaseMap.entryId,diseaseMap.diseaseName,diseaseMap.medicineDetails.medicineName,rating)}
                          >
                            Delete
                          </button>
                        </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      )
    } else {

      return (
        <div className="conatiner pt-3">
          <div className="row">
            <div className='style'>
              <div className="col-md-10">
                <br /><br />
                <div className="text-center">
                  <h4>PLEASE CLICK MY OWN RATINGS TO CHECK YOUR RATINGS </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    }


  }

  return (
     <div className='container-bg'>
    <div className="conatiner pt-3">
      <div>
        <CarouselContainer/>
      </div>
      <div className="row">
        <div className='style'>
          <div className="col-md-10">
            <br /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter DiseaseName"
              onChange={(event) => {
                filterByName(event);
              }}
            />
            <br />
            <br />
            <div className="text-center">
              <h4>ALL USERS RATING ON PARTICULAR MEDICINE FOR RESPECTIVE DISEASE:</h4>
            </div>
            <br /><br />
            <table className="table table-bordered table-hover">
              <thead className="table-light ">
                <tr className="table-secondary">
                  <th>ID</th>
                  <th>USER NAME</th>
                  <th>DISEASE NAME</th>
                  <th>MEDICINE NAME</th>
                  <th>PRICE</th>
                  <th>RATING</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((medi) => {
                    const { ratingId, userId, diseaseMap, rating } = medi;
                    return (
                      <tr key={ratingId}>
                        <td>{ratingId}</td>
                        <td>{userId}</td>
                        <td>{diseaseMap.diseaseName}</td>
                        <td>{diseaseMap.medicineDetails.medicineName}</td>
                        <td>{diseaseMap.medicineDetails.price}</td>
                        <td>{rating}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <br /><br />
            <div className='text-center'>
            <button
              className='btn btn-primary  w-25'
              onClick={() => onClickGetFunction()}
            >
              MY OWN RATINGS
            </button>
            
            </div>
            <div>{userReview(userData)}</div>
            <br/><br/>
            <div className='text-center'>
            <button
              className='btn btn-primary  w-25'
              onClick={() => onClickGetEntryIdFunction()}
            >
               GET ENTRY ID
            </button>
            <div>{ entryIDFunction(uData)}</div>
            </div>
          </div>
        </div>
      </div>
      
      <CustomModal
        status={modalOpen}
        setModalOpen={setModalOpen}
        element={element}
        userId={userId}
        entryId={en}
        medicineName={mediNAme}
        diseaseName={dieName}
        rating={ratingInd}
        ratingId={ratingID}
      />

    <br/>
    <br/>
    </div>
    </div>
  )
}
