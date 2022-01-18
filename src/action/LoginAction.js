
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
        type:ActionTypes.ADD_MEDICINES,
        payload:state
    }
}

export const getAllMedicines = (medicines) => {
    return{
        type:ActionTypes.GET_ALL_MEDICINES,
        payload:medicines
    }
}

export const getMedicines = (medicines) =>{
    return{
        type:ActionTypes.GET_MEDICINES,
        payload:medicines
    }
}

export const updateMedicines = (medicines) => {
    return{
        type:ActionTypes.UPDATE_MEDICINES,
        payload:medicines
    }
}

export const logoutAccount = (user) => {
    return{
        type:ActionTypes.LOGOUT,
        payload:user
    }
}