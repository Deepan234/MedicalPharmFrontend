
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";



const PrivateRoute = (props) => {

  return props.isLoggedIn === "true" ? props.children : <Navigate to="/login" />;

};



const mapStateToProps = (state) => {

    return {

        isLoggedIn : state.AllMedicals.isLoggedIn

    }

  }

 

  export default connect(mapStateToProps)(PrivateRoute);