import React from 'react'
import User from '../../localstorage/Users'
import MedicineAddingPage from './MedicineAddingPage'
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
                <MedicineAddingPage/>
            </div>
        )
    }




    return (

        <div>
        {(User.getUser().userTypeDto==="BUYER")?
        <div>{homeScreenBuyers()}</div>: 
        <div>
        {homeScreenAdmin()}
        </div>
        }
        </div>
    )
}
