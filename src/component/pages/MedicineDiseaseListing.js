import React from 'react'
import { getAllDisease } from '../../action/LoginAction';
import NavBar from '../layout/NavBar'
import { useState,useEffect } from 'react';
import CustomModal from '../../custommodal/CustomModal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import "./Homepage.css"
import Footer from '../layout/Footer';

export default function MedicineDiseaseListing() {
     

  const disea = useSelector((state) => state.AllMedicals.diseases)
  console.log(disea);
  const dispatch = useDispatch();
  const [element, setElement] = useState("");
  const [id,setId] = useState(0);
  const [medicineId,setMedicineId] =  useState(0);
  const [disease,setDisease] = useState("");
  const [data, setData] = useState(disea);
  const [modalOpen, setModalOpen] = useState(false);

  const onClickAddFunction = () => {
    setModalOpen(true);
    setElement("AddDisease");
  };

  const onClickUpdateFunction = (id,medicineId,diseaseName) => {
    setModalOpen(true);
    setElement("UpdateDisease");
    setId(id);
    setMedicineId(medicineId);
    setDisease(diseaseName);
  };
  const onClickDeleteFunction = (entryId,medicineId,diseaseName) => {
    setModalOpen(true);
    setElement("DeleteDisease");
    setId(entryId);
    setMedicineId(medicineId);
    setDisease(diseaseName);

  };

  const fetchDisease = async () => {
    const result = await axios
      .get("http://localhost:9090/mapDisease/getAll")
      .catch((err) => {
        console.log("Error ", err);
      });
    dispatch(getAllDisease(result.data));
    setData(result.data);
  }

  useEffect(() => {
    fetchDisease();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


    
    const diseaseListing = (data) => {
        if (data.length !== 0) {
          return (
            <div className="container pt-3">
              <div className="row">
                <table className="table table-bordered table-hover m-auto">
                  <thead className="table-light ">
                    <tr className="table-secondary">
                      <th>Entry ID</th>
                      <th>Medicine ID</th>
                      <th>Disease Name</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((medi) => {
                        const {entryId,medicineDetails,diseaseName } = medi;
                        return (
                          <tr key={entryId}>
                            <td>{entryId}</td>
                            <td>{medicineDetails.medicineId}</td>
                            <td>{diseaseName}</td>
                            <td>
                              <button
                                className="btn btn-outline-warning "
                                onClick={()=>onClickUpdateFunction(entryId,medicineDetails.medicineId,diseaseName)}
                              >
                                Update
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-outline-danger "
                                onClick={()=>onClickDeleteFunction(entryId,medicineDetails.medicineId,diseaseName)}
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
          );
        } else {
          return (
            <div className="conatainer pt-3">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <span className="p-3">
                  No Patients is available please add details:
                </span>
                <button
                  className="btn btn-outline-primary w-25 "
                  onClick={() => onClickAddFunction()}
                >
                  Add Disease
                </button>
              </div>
            </div>
          );
        }
      };
    

    return (
      <div  className='container-bg'>
        <div>
           <NavBar/>
           <div className="row mb-5">
        <div className="pt-4 text-center">
          <button
            className="btn btn-outline-primary w-50 "
            onClick={() => onClickAddFunction()}
          >
            Add Diseases
          </button>
        </div>
      </div>           
        <div>
            {diseaseListing(data)}
        </div>
        <CustomModal
        status={modalOpen}
        setModalOpen={setModalOpen}
        element={element}
        id={id}
        medicineId={medicineId}
        diseaseName={disease}        
      />
      <br/>
      <br/>
      <Footer/>
        </div>
        </div>
    )
}
