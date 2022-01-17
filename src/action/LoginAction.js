
import { ActionTypes } from './ActionsTypes'


export const signUpAccount = (user) =>{
    return{
        type:ActionTypes.CREATE_ACCOUNT,
        payload:user
    }
}

export const loginAccount = (user) => {
    return{
        type:ActionTypes.LOGIN_ACCOUNT,
        payload:user
    }
}

export const addMedicines = (state) => {
    return{
        typr:ActionTypes.ADD_MEDICINES,
        payload:state
    }
}