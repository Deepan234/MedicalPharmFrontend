import { combineReducers } from "redux";
import  MedicalReducers from "./MedicalReducers";

const rootReducer = combineReducers({
    AllMedicals:MedicalReducers,
  });
  
  export default rootReducer;
  