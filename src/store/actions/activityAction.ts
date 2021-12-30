import { LiftypesActionTypes } from '../action-types/activityActionTypes';

// Get LiftTypes

interface GetLiftTypesAction {
    type: LiftypesActionTypes.GET_LIFTTYPES,
}

interface GetLiftTypesFailed {
    type: LiftypesActionTypes.GET_LIFTTYPES_FAILED,
    payload: string
}

interface GetLiftTypesSuccess {
    type: LiftypesActionTypes.GET_LIFTTYPES_SUCCESS,
    payload: []
}


export const getLiftTypes = (): GetLiftTypesAction => {
    return {
        type: LiftypesActionTypes.GET_LIFTTYPES
    }
}

export const getLiftTypesFailed = (message: string): GetLiftTypesFailed => {
    return {
        type: LiftypesActionTypes.GET_LIFTTYPES_FAILED,
        payload: message
    }
}

export const getLiftTypesSuccess = (liftTypes: []): GetLiftTypesSuccess => {
    return {
        type: LiftypesActionTypes.GET_LIFTTYPES_SUCCESS,
        payload: liftTypes
    }
}


export type Action = GetLiftTypesSuccess | GetLiftTypesFailed | GetLiftTypesAction ;