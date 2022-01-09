import { RolesActionTypes } from '../action-types/roleActionTypes';
import { Action } from '../actions/roleActions';

//get Role

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


//create Role

export interface CreateRoleState {
    createRoleLoading: boolean,
    createRoleError: string
}

export const createInitialState: CreateRoleState = {
    createRoleLoading: true,
    createRoleError: ''
}

export const createRoleReducer = (state: CreateRoleState = createInitialState, action: Action) => {
    switch (action.type) {
        case RolesActionTypes.CREATE_ROLE:
            return { ...state, createRoleLoading: true };

        case RolesActionTypes.CREATE_ROLE_FAILED:
            return { ...state, createRoleLoading: false, createRoleError: action.payload };

        case RolesActionTypes.CREATE_ROLE_SUCCESS:
            return { ...state, createRoleLoading: false, createRoleError: '' };
        default:
            return state;
    }
}

// delete Role

export interface DeleteRoleState {
    deleteRoleLoading: boolean,
    deleteRoleError: string
}

const deleteInitialState: DeleteRoleState = {
    deleteRoleLoading: true,
    deleteRoleError: ''
}

export const deleteRoleReducer = (state: DeleteRoleState = deleteInitialState, action: Action) => {
    switch (action.type) {
        case RolesActionTypes.DELETE_ROLE:
            return { ...state, deleteRoleLoading: true };

        case RolesActionTypes.DELETE_ROLE_FAILED:
            return { ...state, deleteRoleLoading: false, deleteRoleError: action.payload };

        case RolesActionTypes.DELETE_ROLE_SUCCESS:
            return { ...state, deleteRoleLoading: false, deleteRoleError: '' };
        default:
            return state;
    }
}

// update role

export interface UpdateRoleState {
    updateRoleLoading: boolean,
    updateRoleError: string
}

const updateInitialState: UpdateRoleState = {
    updateRoleLoading: true,
    updateRoleError: ''
}

export const updateRoleReducer = (state: UpdateRoleState = updateInitialState, action: Action) => {
    switch (action.type) {
        case RolesActionTypes.DELETE_ROLE:
            return { ...state, updateRoleLoading: true };

        case RolesActionTypes.DELETE_ROLE_FAILED:
            return { ...state, updateRoleLoading: false, updateRoleError: action.payload };

        case RolesActionTypes.DELETE_ROLE_SUCCESS:
            return { ...state, updateRoleLoading: false, updateRoleError: '' };
        default:
            return state;
    }
}