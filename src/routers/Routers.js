import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from '../component/pages/Login'
import SignUp from '../component/pages/SignUp'
export default function Routers() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route  path="/signup" element={<SignUp/>}></Route>
                <Route path="/" exact={true} element={<Login/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
