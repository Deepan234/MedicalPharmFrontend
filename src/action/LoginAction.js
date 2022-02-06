
import { ActionTypes } from './ActionsTypes'
import { useNavigate } from 'react-router-dom'

export const signUpAccount = (user) =>{
    
    return{
        type:ActionTypes.CREATE_ACCOUNT,
        payload:user
    }
}

export const loginAccount = (user) => {
    console.log(user);
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

export const deleteMedicinesAction = (medicines) => {
     return{
         type:ActionTypes.DELETE_MEDICINES,
         payload:medicines
     }   
}

export const getAllDisease = (disease) => {
     return{
         type:ActionTypes.GET_ALL_DISEASE,
         payload:disease
     }
}

export const addDisease = (disease) => {
    return{
        type:ActionTypes.ADD_DISEASE,
        payload:disease
    }
}

export const updateDiseases = (disease) => {
    return{
        type:ActionTypes.UPDATE_DISEASE,
        payload:disease
    }
}

export const deleteDiseasesAction = (disease) => {
    return{
        type:ActionTypes.DELETE_DISEASE,
        payload:disease
    }
}

export const userRatingGetAll = (rating) => {
    return{
        type:ActionTypes.USER_RATING_GETALL,
        payload:rating
    }
}

export const addRatings = (rating) => {
    return{
        type:ActionTypes.ADD_RATINGS,
        payload:rating
    }
} 

export const getRatingById = (rating) => {
    return{
        type:ActionTypes.GET_RATINGS_BY_ID,
        payload:rating
    }
}

export const updateRating = (rating) => {
    return{
        type:ActionTypes.UPDATE_RATINGS,
        payload:rating
    }
}

export const deleteRating =(rating) => {
    return{
        type:ActionTypes.DELETE_RATINGS,
        payload:rating
    }
}

export const updatePasswords = (user) => {
    return{
        type:ActionTypes.UPDATE_PASSWORD,
        payload:user
    }
}