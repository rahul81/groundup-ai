import { userActionTypes, createUserActionTypes } from '../action-types/userActionTypes';
import { Action } from '../actions/userActions';

export interface UserState {
    users: [],
    loading: boolean,
    error: string
}

export const initialState: UserState = {
    users: [],
    loading: true,
    error: ''
}

const UserReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case userActionTypes.GET_USERS:
            return { ...state, loading: true };

        case userActionTypes.GET_USERS_FAILED:
            return { ...state, loading: false, users: [], error: action.payload };

        case userActionTypes.GET_USERS_SUCCESS:
            return { ...state, users: action.payload, loading: false, error: '' };
        default:
            return state;
    }
}

export default UserReducer;


// Create User

export interface CreateUserState {
    loading: boolean,
    error: string
}

export const createUserInitialState: CreateUserState = {
    loading: true,
    error: '',
}

export const createUserReducer = (state: CreateUserState = createUserInitialState, action: Action) => {
    switch (action.type) {
        case createUserActionTypes.CREATE_USER:
            return { ...state, loading: true, error: '', };

        case createUserActionTypes.CREATE_USER_FAILED:
            return { ...state, loading: false, error: action.payload };

        case createUserActionTypes.CREATE_USER_SUCCESS:
            return { ...state, loading: false, error: '' };
        default:
            return state;
    }
}

