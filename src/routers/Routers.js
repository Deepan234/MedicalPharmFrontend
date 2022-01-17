import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from '../component/pages/HomePage'
import Login from '../component/pages/Login'
import SignUp from '../component/pages/SignUp'
import PrivateRoute from './PrivateRoute'
export default function Routers() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route  path="/signup" element={<SignUp/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} exact={true}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
