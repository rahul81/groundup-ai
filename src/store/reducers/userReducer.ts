import { userActionTypes, createUserActionTypes, deleteUserActionTypes, editUserActionTypes } from '../action-types/userActionTypes';
import { Action } from '../actions/userActions';


// Get User

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

// delete User

export interface DeleteUserState {
    deleteLoading: boolean,
    deleteError: string
}

export const deleteInitialState: DeleteUserState = {
    deleteLoading: true,
    deleteError: ''
}

export const deleteUserReducer = (state: DeleteUserState = deleteInitialState, action: Action) => {
    switch (action.type) {
        case deleteUserActionTypes.DELETE_USER:
            return { ...state, deleteLoading: true, deleteError: '', };

        case deleteUserActionTypes.DELETE_USER_FAILED:
            return { ...state, deleteLoading: false, deleteError: action.payload };

        case deleteUserActionTypes.DELETE_USER_SUCCESS:
            return { ...state, deleteLoading: false, deleteError: '' };
            
        default:
            return state;
    }
}

// Edit User

export interface EditUserState {
    editLoading: boolean,
    editLError: string
}

export const editUserInitialState: EditUserState = {
    editLoading: true,
    editLError: ''
}

export const editUserReducer = (state: EditUserState = editUserInitialState, action: Action) => {
    switch (action.type) {
        case editUserActionTypes.EDIT_USER:
            return { ...state, editLoading: true, editLError: '', };

        case editUserActionTypes.EDIT_USER_FAILED:
            return { ...state, editLoading: false, editLError: action.payload };

        case editUserActionTypes.EDIT_USER_SUCCESS:
            return { ...state, editLoading: false, editLError: '' };
            
        default:
            return state;
    }
}