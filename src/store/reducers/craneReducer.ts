import { CraneActionTypes } from '../action-types/craneActionTypes';
import { Action } from '../actions/craneAction';

export interface GetCraneState {
    cranes: [];
    craneLoading: boolean;
    craneError: '';
}

export const getCraneInitialState: GetCraneState = {
    cranes: [],
    craneLoading: true,
    craneError: ''
}

const craneReducer = (state: GetCraneState = getCraneInitialState, action: Action) => {
    switch (action.type) {
        case CraneActionTypes.GET_CRANE:
            return { ...state, cranes: [], craneLoading: true };
        case CraneActionTypes.GET_CRANE_FAILED:
            return { ...state, cranes: [], craneLoading: false, craneError: action.payload };
        case CraneActionTypes.GET_CRANE_SUCCESS:
            return { ...state, cranes: action.payload, craneLoading: false, craneError: '' };
        default:
            return state;
    }
}

export default craneReducer;

// Create Crane or Create LiftType

export interface CreateCraneState {
    createCraneLoading: boolean;
    createCraneError: '';
}

export const createCraneInitialState: CreateCraneState = {
    createCraneLoading: true,
    createCraneError: ''
}

export const createCraneReducer = (state: CreateCraneState = createCraneInitialState, action: Action) => {
    switch (action.type) {
        case CraneActionTypes.CREATE_CRANE:
            return { ...state, createCraneLoading: true };
        case CraneActionTypes.CREATE_CRANE_FAILED:
            return { ...state, createCraneLoading: false, createCraneError: action.payload };
        case CraneActionTypes.CREATE_CRANE_SUCCESS:
            return { ...state, createCraneLoading: false, createCraneError: '' };
        default:
            return state;
    }
}

// Update Crane or Update LiftType

export interface EditCraneState {
    editCraneLoading: boolean;
    editCraneError: '';
}

const editCraneInitialState: EditCraneState = {
    editCraneLoading: true,
    editCraneError: ''
}

export const editCraneReducer = (state: EditCraneState = editCraneInitialState, action: Action) => {
    switch (action.type) {
        case CraneActionTypes.EDIT_CRANE:
            return { ...state, editCraneLoading: true };
        case CraneActionTypes.EDIT_CRANE_FAILED:
            return { ...state, editCraneLoading: false, editCraneError: action.payload };
        case CraneActionTypes.EDIT_CRANE_SUCCESS:
            return { ...state, editCraneLoading: false, editCraneError: '' };
        default:
            return state;
    }
}

// Delete Crane or Delete LiftType

export interface DeleteCraneState {
    deleteCraneLoading: boolean;
    deleteCraneError: '';
}

const deleteCraneInitialState: DeleteCraneState = {
    deleteCraneLoading: true,
    deleteCraneError: ''
}

export const deleteCraneReducer = (state: DeleteCraneState = deleteCraneInitialState, action: Action) => {
    switch (action.type) {
        case CraneActionTypes.DELETE_CRANE:
            return { ...state, deleteCraneLoading: true };
        case CraneActionTypes.DELETE_CRANE_FAILED:
            return { ...state, deleteCraneLoading: false, deleteCraneError: action.payload };
        case CraneActionTypes.DELETE_CRANE_SUCCESS:
            return { ...state, deleteCraneLoading: false, deleteCraneError: '' };
        default:
            return state;
    }
}
