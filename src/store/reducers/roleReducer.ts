import { RolesActionTypes } from '../action-types/roleActionTypes';
import { Action } from '../actions/roleActions';

export interface roleState {
    roles: [],
    loading: boolean,
    error: string
}

export const initialState: roleState = {
    roles: [],
    loading: true,
    error: ''
}

const roleReducer = (state: roleState = initialState, action: Action) => {
    switch (action.type) {
        case RolesActionTypes.GET_ROLES:
            return { ...state, loading: true };

        case RolesActionTypes.GET_ROLES_FAILED:
            return { ...state, loading: false, roles: [], error: action.payload };

        case RolesActionTypes.GET_ROLES_SUCCESS:
            return { ...state, roles: action.payload, loading: false, error: '' };
        default:
            return state;
    }
}

export default roleReducer;