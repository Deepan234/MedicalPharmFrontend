import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from '../component/pages/HomePage'
import Login from '../component/pages/Login'
import SignUp from '../component/pages/SignUp'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'
import MedicineDiseaseListing from '../component/pages/MedicineDiseaseListing'
import ProfilePage from '../component/pages/ProfilePage'
import About from '../component/pages/About'
import WithNavigate from '../component/pages/WithNavigate'
import Contact from '../component/pages/Contact'
export function Routers() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route  path="/signup" element={<SignUp/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} exact={true}/>
                <Route path="/disease" element={<PrivateRoute><MedicineDiseaseListing/></PrivateRoute>}/>
                <Route path="/profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
                <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>}/>
                <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
const mapStateToProps = (state) => {

    return {

        isLoggedIn : state.AllMedicals.isLoggedIn

    }

  }



export default connect(mapStateToProps)(Routers)