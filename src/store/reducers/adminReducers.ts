import { AdminActionTypes } from '../action-types/adminActionTypes';
import {Action} from '../actions/adminActions';

interface LoginState {

}

export const initialState: LoginState ={

} 

const adminReducer = (state: LoginState = initialState, action: Action)=>{
    switch(action.type){
        case AdminActionTypes.GET_USERS:
            return {...state };
        default:
            return state;
    }
}

export default adminReducer;