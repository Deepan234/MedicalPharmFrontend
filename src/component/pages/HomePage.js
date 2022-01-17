import React from 'react'
import User from '../../localstorage/Users'
import NavBar from '../layout/NavBar'
import MedicineAddingPage from './MedicineAddingPage'
import MedicineListing from './MedicineListing'
export default function HomePage() {


    const homeScreenBuyers = () => {

        return(
            <div>
                HomePage
            </div>
        )
    }
     
    const homeScreenAdmin = () => {

        return(
            
            <div>
                <MedicineListing/>
            </div>
        )
    }




    return (

        <div>
        <NavBar/>
        {(User.getUser().userTypeDto==="BUYER")?
        <div>{homeScreenBuyers()}</div>: 
        <div>
        {homeScreenAdmin()}
        </div>
        }
        </div>
    )
}
