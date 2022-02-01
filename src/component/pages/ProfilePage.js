import React from 'react';
import { useState } from 'react';
import CustomModal from '../../custommodal/CustomModal';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import "./Profile.css"

export default function ProfilePage() {

    const [state, setState] = useState({
        userId: localStorage.getItem("userID"),
        password: localStorage.getItem("password"),
        userTypeDto: localStorage.getItem("userType")
    });

    const[id,setId] = useState("");

    const[userType,setUserType] = useState("");

    const[element,setElement] = useState("");

    const[modalOpen,setModalOpen] = useState(false);

    const onClickUpdateFunction=()=>{

        setModalOpen(true);
        setElement("UpdatePassword");
        setUserType(localStorage.getItem("userType"));
        setId(localStorage.getItem("userId"));

    }


    return (
        <div className='container-bg'>
            <div>
                <NavBar />

                <div className="container mt-5 mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-4"><img src="https://media.istockphoto.com/photos/pictures-of-friends-picture-id614232404?b=1&k=20&m=614232404&s=170667a&w=0&h=_Y77WVuIcS24kcPUIWVQl1ERgVucmeV_lki4LaZ8UJE=" /></div>
                        <div className="col-md-8 col-lg-8">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                                    <h3 className="display-5">{localStorage.getItem("userId").toUpperCase()}</h3><i class="fa fa-facebook"></i><i class="fa fa-google"></i><i class="fa fa-youtube-play"></i><i class="fa fa-dribbble"></i><i class="fa fa-linkedin"></i>
                                </div>
                                <div className="p-3 bg-black text-white">
                                    <h6>MEDIPHARM</h6>
                                </div>
                                <div className="d-flex flex-row text-white">
                                    <div className="p-4 bg-primary text-center skill-block">
                                        <h4>40%</h4>
                                        <h6>OVERALLRATING</h6>
                                    </div>
                                    <div className="p-3 bg-success text-center skill-block">
                                        <h4>30%</h4>
                                        <h6>PRIME ELIGIBLE</h6>
                                    </div>
                                    <div className="p-3 bg-warning text-center skill-block">
                                        <h4>60%</h4>
                                        <h6>MEDIPHARM PROFICIENCY LEVEL</h6>
                                    </div>
                                    <div className="p-3 bg-danger text-center skill-block">
                                        <h4>95%</h4>
                                        <h6>HEALTHY</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-pt 3">
             <div className="text-center">
                <button className='btn btn-primary w-25' onClick={()=>onClickUpdateFunction()}>UPDATE PASSWORD</button>
             </div>
            </div>
            
            <br/>
            <br/>
            <br/>
            <CustomModal
              status={modalOpen}
              setModalOpen={setModalOpen}
              element={element}
              userId={id}
              userType={userType}
            />
            <Footer/>
        </div>
    );
}
