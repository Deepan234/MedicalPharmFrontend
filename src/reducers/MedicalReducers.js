import { ActionTypes } from "../action/ActionsTypes";

const intialStates = {
    users:[],
    user:[],
    isLoggedIn: localStorage.getItem("isLoggedIn"),
}

const MedicalReducers = (state=intialStates,action) =>{
    let newState = {...state};
    switch (action.type) {
        case ActionTypes.LOGIN_ACCOUNT:
          newState.user = action.payload;
          newState.isLoggedIn=localStorage.getItem("isLoggedIn");
          break;
        case ActionTypes.CREATE_ACCOUNT:
          newState.user = action.payload;
          newState.isLoggedIn=localStorage.getItem("isLoggedIn");
          break;
        default:
          newState = state;
      }
    return newState;
}
  
  export default MedicalReducers