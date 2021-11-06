import { LoginActionTypes } from '../action-types/loginActionTypes';
import {Action} from '../actions/loginAction';

interface LoginState {
    username: string;
    password:string;
}
export const initialState: LoginState ={
    username: '',
    password: ''
} 

const loginReducer = (state: LoginState = initialState, action: Action)=>{
    switch(action.type){
        case LoginActionTypes.LOGGED_IN_USER:
            return {...state, username: action.payload};
        case LoginActionTypes.LOGGED_IN_USER_FAILED:
            return {...state, username: action.payload};
        default:
            return state;
    }
}

export default loginReducer;