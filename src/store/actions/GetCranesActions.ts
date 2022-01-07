import { GetCraneActionTypes } from '../action-types/getCraneActionTypes'

interface GetCranesAction {
    type: GetCraneActionTypes.ALL_CRANES,
    payload: string
}

interface GetCranesFailed {
    type: GetCraneActionTypes.CRANES_FAILED,
    payload: string
}

export const getCranesSuccess = (data: any): GetCranesAction => {
    return {
        type: GetCraneActionTypes.ALL_CRANES,
        payload: data
    }
}

export const getCranesFailed = (message: string): GetCranesFailed => {
    return {
        type: GetCraneActionTypes.CRANES_FAILED,
        payload: message
    }
}

export type Action = GetCranesAction | GetCranesFailed ;
