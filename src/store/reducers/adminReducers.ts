import { AdminActionTypes } from '../action-types/adminActionTypes';
import { Action } from '../actions/adminActions';

export interface AdminState {
    users: [],
    loading: boolean,
    error: string
}

export const initialState: AdminState = {
    users: [],
    loading: true,
    error: ''
}

const adminReducer = (state: AdminState = initialState, action: Action) => {
    switch (action.type) {
        case AdminActionTypes.GET_USERS:
            return { ...state, loading: true };

        case AdminActionTypes.GET_USERS_FAILED:
            return { ...state, loading: false, users: [], error: action.payload };

        case AdminActionTypes.GET_USERS_SUCCESS:
            return { ...state, users: action.payload, loading: false, error: '' };
        default:
            return state;
    }
}

export default adminReducer;