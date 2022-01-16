import React from 'react'
import { ActionTypes } from './ActionsTypes'


export const signUpAccount = (user) =>{
    return{
        type:ActionTypes.CREATE_ACCOUNT,
        payload:user
    }
}
