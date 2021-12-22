import { CranesActionTypes } from '../action-types/cranesActionTypes'

interface CranesAction {
    type: CranesActionTypes.ALL_CRANES
    payload: string
}

export type Action = CranesAction;

export const cranesSuccess = (data: any): CranesAction => {
    return {
        type: CranesActionTypes.ALL_CRANES,
        payload: data
    }
}