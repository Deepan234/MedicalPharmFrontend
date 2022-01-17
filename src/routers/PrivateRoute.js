import User from "../localstorage/Users"
import {Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
    return(
                User.getLoggedIn() ? children : <Navigate to="/login" />
            )
}

export default PrivateRoute;