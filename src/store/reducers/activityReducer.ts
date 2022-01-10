import { GetLiftypesActionTypes, CreateLiftypesActionTypes, UpdateLiftypesActionTypes, DeleteLiftypesActionTypes } from '../action-types/activityActionTypes';
import { Action } from '../actions/activityAction';

// Activity == LiftYype don't get confused
// Get activities or get LiftTypes

export interface GetActivityState {
    liftTypes: [];
    liftTypesLoading: boolean;
    liftTypesError: '';
}

export const getActivityInitialState: GetActivityState = {
    liftTypes: [],
    liftTypesLoading: true,
    liftTypesError: ''
}

const activityReducer = (state: GetActivityState = getActivityInitialState, action: Action) => {
    switch (action.type) {
        case GetLiftypesActionTypes.GET_LIFTTYPES:
            return { ...state, liftTypesLoading: true };
        case GetLiftypesActionTypes.GET_LIFTTYPES_FAILED:
            return { ...state, liftTypes: [], liftTypesLoading: false, liftTypesError: action.payload };
        case GetLiftypesActionTypes.GET_LIFTTYPES_SUCCESS:
            return { ...state, liftTypes: action.payload, liftTypesLoading: false, liftTypesError: '' };
        default:
            return state;
    }
}

export default activityReducer;

// Create Activity or Create LiftType

export interface CreateActivityState {
    createLiftTypesLoading: boolean;
    createLiftTypesError: '';
}

export const createActivityInitialState: CreateActivityState = {
    createLiftTypesLoading: true,
    createLiftTypesError: ''
}

export const createActivityReducer = (state: CreateActivityState = createActivityInitialState, action: Action) => {
    switch (action.type) {
        case CreateLiftypesActionTypes.CREATE_LIFTTYPES:
            return { ...state, createLiftTypesLoading: true };
        case CreateLiftypesActionTypes.CREATE_LIFTTYPES_FAILED:
            return { ...state, createLiftTypesLoading: false, createLiftTypesError: action.payload };
        case CreateLiftypesActionTypes.CREATE_LIFTTYPES_SUCCESS:
            return { ...state, createLiftTypesLoading: false, createLiftTypesError: '' };
        default:
            return state;
    }
}

// Update Activity or Update LiftType

export interface UpdateActivityState {
    updateLiftTypesLoading: boolean;
    updateLiftTypesError: '';
}

const updateActivityInitialState: UpdateActivityState = {
    updateLiftTypesLoading: true,
    updateLiftTypesError: ''
}

export const updateActivityReducer = (state: UpdateActivityState = updateActivityInitialState, action: Action) => {
    switch (action.type) {
        case UpdateLiftypesActionTypes.UPDATE_LIFTTYPES:
            return { ...state, updateLiftTypesLoading: true };
        case UpdateLiftypesActionTypes.UPDATE_LIFTTYPES_FAILED:
            return { ...state, updateLiftTypesLoading: false, updateLiftTypesError: action.payload };
        case UpdateLiftypesActionTypes.UPDATE_LIFTTYPES_SUCCESS:
            return { ...state, updateLiftTypesLoading: false, updateLiftTypesError: '' };
        default:
            return state;
    }
}

// Delete Activity or Delete LiftType

export interface DeleteActivityState {
    deleteLiftTypesLoading: boolean;
    deleteLiftTypesError: '';
}

const deleteActivityInitialState: DeleteActivityState = {
    deleteLiftTypesLoading: true,
    deleteLiftTypesError: ''
}

export const deleteActivityReducer = (state: DeleteActivityState = deleteActivityInitialState, action: Action) => {
    switch (action.type) {
        case DeleteLiftypesActionTypes.DELETE_LIFTTYPES:
            return { ...state, deleteLiftTypesLoading: true };
        case DeleteLiftypesActionTypes.DELETE_LIFTTYPES_FAILED:
            return { ...state, deleteLiftTypesLoading: false, deleteLiftTypesError: action.payload };
        case DeleteLiftypesActionTypes.DELETE_LIFTTYPES_SUCCESS:
            return { ...state, deleteLiftTypesLoading: false, deleteLiftTypesError: '' };
        default:
            return state;
    }
}
