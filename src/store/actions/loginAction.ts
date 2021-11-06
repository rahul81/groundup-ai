import {LoginActionTypes} from '../action-types/loginActionTypes'

interface LoginAction{
    type: LoginActionTypes.LOGGED_IN_USER
    payload: string
}

interface LoginActionFailed{
    type: LoginActionTypes.LOGGED_IN_USER_FAILED
    payload: string
}

export type Action = LoginAction | LoginActionFailed;

export const loginUserSuccess = (username:string):LoginAction=>{
    return {
        type: LoginActionTypes.LOGGED_IN_USER,
        payload: username
    }
}

export const loginUserFailed = (username:string):LoginActionFailed=>{
    return {
        type: LoginActionTypes.LOGGED_IN_USER_FAILED,
        payload: username
    }
}