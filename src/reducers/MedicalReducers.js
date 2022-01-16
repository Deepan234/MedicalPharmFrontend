import { ActionTypes } from "../action/ActionsTypes";

const intialStates = {
    users:[]
}

export const MedicalReducers = (state=intialStates,action) =>{
    switch(action.type){
        case ActionTypes.CREATE_ACCOUNT:
            return{...state,users:action.payload};
        
        default:
            return state;
    }
}