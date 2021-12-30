import { GetLiftypesActionTypes, CreateLiftypesActionTypes, UpdateLiftypesActionTypes, DeleteLiftypesActionTypes } from '../action-types/activityActionTypes';

// Get LiftTypes

interface GetLiftTypesAction {
    type: GetLiftypesActionTypes.GET_LIFTTYPES,
}

interface GetLiftTypesFailed {
    type: GetLiftypesActionTypes.GET_LIFTTYPES_FAILED,
    payload: string
}

interface GetLiftTypesSuccess {
    type: GetLiftypesActionTypes.GET_LIFTTYPES_SUCCESS,
    payload: []
}


export const getLiftTypes = (): GetLiftTypesAction => {
    return {
        type: GetLiftypesActionTypes.GET_LIFTTYPES
    }
}

export const getLiftTypesFailed = (message: string): GetLiftTypesFailed => {
    return {
        type: GetLiftypesActionTypes.GET_LIFTTYPES_FAILED,
        payload: message
    }
}

export const getLiftTypesSuccess = (liftTypes: []): GetLiftTypesSuccess => {
    return {
        type: GetLiftypesActionTypes.GET_LIFTTYPES_SUCCESS,
        payload: liftTypes
    }
}

// Create Activity Action

interface CreateLiftTypesAction {
    type: CreateLiftypesActionTypes.CREATE_LIFTTYPES,
}

interface CreateLiftTypesFailed {
    type: CreateLiftypesActionTypes.CREATE_LIFTTYPES_FAILED,
    payload: string
}

interface CreateLiftTypesSuccess {
    type: CreateLiftypesActionTypes.CREATE_LIFTTYPES_SUCCESS,
}


export const createLiftTypes = (): CreateLiftTypesAction => {
    return {
        type: CreateLiftypesActionTypes.CREATE_LIFTTYPES
    }
}

export const createLiftTypesFailed = (message: string): CreateLiftTypesFailed => {
    return {
        type: CreateLiftypesActionTypes.CREATE_LIFTTYPES_FAILED,
        payload: message
    }
}

export const createLiftTypesSuccess = (): CreateLiftTypesSuccess => {
    return {
        type: CreateLiftypesActionTypes.CREATE_LIFTTYPES_SUCCESS,
    }
}


// Update activity

interface UpdateLiftTypes {
    type: UpdateLiftypesActionTypes.UPDATE_LIFTTYPES,
}

interface UpdateLiftTypesFailed {
    type: UpdateLiftypesActionTypes.UPDATE_LIFTTYPES_FAILED,
    payload: string
}

interface UpdateLiftTypesSuccess {
    type: UpdateLiftypesActionTypes.UPDATE_LIFTTYPES_SUCCESS,
}


export const UpdateLiftTypesAction = (): UpdateLiftTypes => {
    return {
        type: UpdateLiftypesActionTypes.UPDATE_LIFTTYPES
    }
}

export const UpdateLiftTypesFailedAction = (message: string): UpdateLiftTypesFailed => {
    return {
        type: UpdateLiftypesActionTypes.UPDATE_LIFTTYPES_FAILED,
        payload: message
    }
}

export const UpdateLiftTypesSuccessAction = (): UpdateLiftTypesSuccess => {
    return {
        type: UpdateLiftypesActionTypes.UPDATE_LIFTTYPES_SUCCESS,
    }
}

// Delete activity

interface DeleteLiftTypes {
    type: DeleteLiftypesActionTypes.DELETE_LIFTTYPES,
}

interface DeleteLiftTypesFailed {
    type: DeleteLiftypesActionTypes.DELETE_LIFTTYPES_FAILED,
    payload: string
}

interface DeleteLiftTypesSuccess {
    type: DeleteLiftypesActionTypes.DELETE_LIFTTYPES_SUCCESS,
}


export const DeleteLiftTypesAction = (): DeleteLiftTypes => {
    return {
        type: DeleteLiftypesActionTypes.DELETE_LIFTTYPES
    }
}

export const DeleteLiftTypesFailedAction = (message: string): DeleteLiftTypesFailed => {
    return {
        type: DeleteLiftypesActionTypes.DELETE_LIFTTYPES_FAILED,
        payload: message
    }
}

export const DeleteLiftTypesSuccessAction = (): DeleteLiftTypesSuccess => {
    return {
        type: DeleteLiftypesActionTypes.DELETE_LIFTTYPES_SUCCESS,
    }
}

export type Action = DeleteLiftTypesSuccess | DeleteLiftTypesFailed | DeleteLiftTypes | UpdateLiftTypes | UpdateLiftTypesFailed | UpdateLiftTypesSuccess | GetLiftTypesSuccess | GetLiftTypesFailed | GetLiftTypesAction | CreateLiftTypesSuccess | CreateLiftTypesFailed | CreateLiftTypesAction;