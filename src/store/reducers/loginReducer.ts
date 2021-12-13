import { LoginActionTypes } from '../action-types/loginActionTypes';
import {Action} from '../actions/loginAction';

interface LoginState {
    username: string;
    status: boolean;
}
export const initialState: LoginState ={
    username: '',
    status: false
} 

const loginReducer = (state: LoginState = initialState, action: Action)=>{
    switch(action.type){
        case LoginActionTypes.LOGGED_IN_USER:
            return {...state, username: action.payload, status: "success"};
        case LoginActionTypes.LOGGED_IN_USER_FAILED:
            return {...state, username: action.payload, status: "failed"};
        default:
            return state;
    }
}

export default loginReducer;