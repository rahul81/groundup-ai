import { LiftActionTypes } from '../action-types/getLiftActionTypes'

interface LiftAction {
    type: LiftActionTypes.GET_ALL_LIFT
    payload: string
}

interface LiftFailed {
    type: LiftActionTypes.LIFT_FAILED,
    payload: string
}

export const liftSuccess = (data: any): LiftAction => {
    return {
        type: LiftActionTypes.GET_ALL_LIFT,
        payload: data
    }
}

export const liftFailed = (message: string): LiftFailed => {
    return {
        type: LiftActionTypes.LIFT_FAILED,
        payload: message
    }
}

export type Action = LiftAction | LiftFailed ;
