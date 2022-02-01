import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getAllMedicines } from '../../action/LoginAction';
import CustomModal from '../../custommodal/CustomModal';
export default function MedicineListing() {
  const [id, setId] = useState(0);
  const medicines = useSelector((state) => state.AllMedicals.medicines)
  console.log(medicines);
  const dispatch = useDispatch();
  const [element, setElement] = useState("");
  const [name,setName] = useState("");
  const [price,setPrice] =  useState(0);
  const [minAge,setMinAge] = useState(0);
  const [maxAge,setMaxAge] = useState(0);
  const [data, setData] = useState(medicines);
  const [modalOpen, setModalOpen] = useState(false);

  const onClickAddFunction = () => {
    setModalOpen(true);
    setElement("AddMedicines");
  };

  const onClickViewFunction = (id) => {
    setModalOpen(true);
    setElement("view");
    setId(id);
  }
  const onClickUpdateFunction = (id) => {
    setModalOpen(true);
    setElement("update");
    setId(id);
  };
  const onClickDeleteFunction = (id,name,price,minAge,maxAge) => {
    setModalOpen(true);
    setElement("delete");
    setId(id);
    setName(name);
    setPrice(price);
    setMinAge(minAge);
    setMaxAge(maxAge);
  };

  const fetchMedicines = async () => {
    const result = await axios
      .get("http://localhost:9090/MedicineDetail/All")
      .catch((err) => {
        console.log("Error ", err);
      });
    dispatch(getAllMedicines(result.data));
    setData(result.data);
    console.log(result.data);
  }

  useEffect(() => {
    fetchMedicines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const medicineListing = (data) => {
    if (data.length !== 0) {
      return (
        <div className="conatiner">
          <div className="row">
            <table className="table table-bordered table-hover m-auto">
              <thead className="table-light ">
                <tr className="table-secondary">
                  <th>Medicine ID</th>
                  <th>Medicine Name</th>
                  <th>Price</th>
                  <th>Min Age</th>
                  <th>Max Age</th>
                  <th>View</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((medi) => {
                    const { medicineId, medicineName, price, minAge, maxAge } = medi;
                    console.log(medi);
                    return (
                      <tr key={medicineId}>
                        <td>{medicineId}</td>
                        <td>{medicineName}</td>
                        <td>{price}</td>
                        <td>{minAge}</td>
                        <td>{maxAge}</td>
                        <td>
                          <button
                            className="btn btn-outline-info "
                            onClick={()=> onClickViewFunction(medicineId)}
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-warning "
                            onClick={()=>onClickUpdateFunction(medicineId)}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger "
                            onClick={()=>onClickDeleteFunction(medicineId,medicineName,price,minAge,maxAge)}
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
        <div className="conatainer">
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <span className="p-3">
              No Medicines is available for Name and Id. You can Add Medicines:
            </span>
            <button
              className="btn btn-outline-primary w-25 "
              onClick={() => onClickAddFunction()}
            >
              Add Medicines
            </button>
          </div>
        </div>
      );
    }
  };






  return (
    <div className='container'>
      <div className="row mb-5">
        <div className="pt-4 text-center">
          <button
            className="btn btn-outline-primary w-50 "
            onClick={() => onClickAddFunction()}
          >
            Add Medicines
          </button>
        </div>
      </div>
      <div>
        {medicineListing(data)}
      </div>
      <CustomModal
        status={modalOpen}
        setModalOpen={setModalOpen}
        element={element}
        id={id}
        name={name}
        price={price}
        minAge={minAge}
        maxAge={maxAge}
      />
      <br/>
      <br/>
    </div>
  )
}
