import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../localstorage/Users'
import NavBar from '../layout/NavBar'
import MedicineAddingPage from './MedicineAddingPage'
import MedicineListing from './MedicineListing'
import UserMedicineListing from './UserMedicineListing'
import { useSelector } from 'react-redux'
import "./Homepage.css"
import Footer from '../layout/Footer'
export default function HomePage() {

    const ready = useSelector((state) => state.AllMedicals.user)

    console.log(localStorage.getItem("userType"))

    const homeScreenAdmin = () => {
        return (
            <div>
                <div className='container-bg'>
                 <div className="conatiner pt-3"></div>
                <div className="row mb-5">
                    <div className="pt-4 text-center">
                        <Link to="/disease">
                            <button
                                className="btn btn-outline-primary w-50 "
                            >
                                DISEASE PHASE
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <MedicineListing />
                </div>
            </div>
            </div>
        )
    }




    return (

        <div>
            <NavBar />
            {(localStorage.getItem("userType") === "ADMIN") ?
                <div>
                    <div className='container-bg'>
                    {homeScreenAdmin()}
                    </div></div> :
                <div>
                    <div>
                        <UserMedicineListing />
                    </div>
                </div>
            }
            <Footer/>
        </div>
    )
}
