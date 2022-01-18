import { ActionTypes } from "../action/ActionsTypes";


const intialStates = {
    users:[],
    user:[],
    medicine:[],
    medicines:[],
    medi:[],
    isLoggedIn: localStorage.getItem("isLoggedIn")
}

// export const MedicalReducers = (state=intialStates,action) =>{
//     switch(action.type){
//         case ActionTypes.CREATE_ACCOUNT:
//             return{...state,users:action.payload};

//         case ActionTypes.LOGIN_ACCOUNT:
//             return{...state,user:action.payload,isLoggedIn:localStorage.getItem("isLoggedIn")};

//         default:
//             return state;
//     }
// }

const MedicalReducers = (state = intialStates, action) => {

    let newState = {...state};
  
    switch (action.type) {
  
      case ActionTypes.LOGIN_ACCOUNT:
  
        newState.user = action.payload;
  
        newState.isLoggedIn=localStorage.getItem("isLoggedIn");
  
        break;
  
      case ActionTypes.CREATE_ACCOUNT:
  
        newState.users = action.payload;
  
        // newState.isLoggedIn=localStorage.getItem("isLoggedIn");
  
        break;
  
    //   case ActionType.LOGOUT:
  
    //     newState.user=[];
  
    //     newState.isLoggedIn=localStorage.getItem("isLoggedIn");
  
    //     break;


    case ActionTypes.ADD_MEDICINES:

        newState.medicines = action.payload;
  
        break;

    case ActionTypes.GET_ALL_MEDICINES:

         newState.medicines =action.payload;

         break;

    case ActionTypes.GET_MEDICINES:

         newState.medi = action.payload;
         break;

    case ActionTypes.UPDATE_MEDICINES:

        newState.medicines = action.payload;
        break;

    case ActionTypes.LOGOUT:

        newState.user = [];
        break;
    default:
  
        newState = state;
  
    }
  
    return newState;
  
  };

  export default MedicalReducers;