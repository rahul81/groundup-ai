import { AdminActionTypes } from '../action-types/adminActionTypes';
import {Action} from '../actions/adminActions';

interface AdminState {
    users : []
}

export const initialState: AdminState ={
    users : []
} 

const adminReducer = (state: AdminState = initialState, action: Action)=>{
    switch(action.type){
        case AdminActionTypes.GET_USERS:
            return {...state, users : action.payload };
        default:
            return state;
    }
}

export default adminReducer;