import { ActionTypes } from "../action/ActionsTypes";


const intialStates = {
    users:[],
    rating:[],
    user:[],
    diseases:[],
    medicine:[],
    medicines:[],
    medi:[],
    ratingsId:[],
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
  
      case ActionTypes.LOGOUT:
  
        newState.user=[];
  
        newState.isLoggedIn=localStorage.getItem("isLoggedIn");
  
        break;


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

   

    case ActionTypes.DELETE_MEDICINES:
        
        break;

    case ActionTypes.GET_ALL_DISEASE:

       newState.diseases =  action.payload;
       break;

    case ActionTypes.ADD_DISEASE:

       newState.diseases = action.payload;
       break;


    case ActionTypes.UPDATE_DISEASE:
      
    newState.diseases = action.payload;
    break;

    case ActionTypes.DELETE_DISEASE:

    break;

    case ActionTypes.USER_RATING_GETALL:
    newState.rating = action.payload;
    break;

    case ActionTypes.ADD_RATINGS:

    newState.rating = action.payload;
    break;

    case ActionTypes.GET_RATINGS_BY_ID:

    newState.ratingsId =action.payload;
    break;

    case ActionTypes.UPDATE_RATINGS:
    
    newState.rating = action.payload;
    break;

    case ActionTypes.DELETE_RATINGS:
    break;


    case ActionTypes.UPDATE_PASSWORD:

    newState.user = action.payload;
    break;

    default:
  
        newState = state;
  
    }
  
    return newState;
  
  };

  export default MedicalReducers;