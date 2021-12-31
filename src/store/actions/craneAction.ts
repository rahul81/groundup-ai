import { CraneActionTypes } from '../action-types/craneActionTypes';

// Get Crane

interface GetCraneAction {
    type: CraneActionTypes.GET_CRANE,
}

interface GetCraneFailed {
    type: CraneActionTypes.GET_CRANE_FAILED,
    payload: string
}

interface GetCraneSuccess {
    type: CraneActionTypes.GET_CRANE_SUCCESS,
    payload: []
}


export const getCrane = (): GetCraneAction => {
    return {
        type: CraneActionTypes.GET_CRANE
    }
}

export const getCraneFailed = (message: string): GetCraneFailed => {
    return {
        type: CraneActionTypes.GET_CRANE_FAILED,
        payload: message
    }
}

export const getCraneSuccess = (cranes: []): GetCraneSuccess => {
    return {
        type: CraneActionTypes.GET_CRANE_SUCCESS,
        payload: cranes
    }
}

// Create Activity Action

interface CreateCraneAction {
    type: CraneActionTypes.CREATE_CRANE,
}

interface CreateCraneFailed {
    type: CraneActionTypes.CREATE_CRANE_FAILED,
    payload: string
}

interface CreateCraneSuccess {
    type: CraneActionTypes.CREATE_CRANE_SUCCESS,
}


export const createCrane = (): CreateCraneAction => {
    return {
        type: CraneActionTypes.CREATE_CRANE
    }
}

export const createCraneFailed = (message: string): CreateCraneFailed => {
    return {
        type: CraneActionTypes.CREATE_CRANE_FAILED,
        payload: message
    }
}

export const createCraneSuccess = (): CreateCraneSuccess => {
    return {
        type: CraneActionTypes.CREATE_CRANE_SUCCESS,
    }
}


// Update activity

interface EditCrane {
    type: CraneActionTypes.EDIT_CRANE,
}

interface EditCraneFailed {
    type: CraneActionTypes.EDIT_CRANE_FAILED,
    payload: string
}

interface EditCraneSuccess {
    type: CraneActionTypes.EDIT_CRANE_SUCCESS,
}

export const EditCraneAction = (): EditCrane => {
    return {
        type: CraneActionTypes.EDIT_CRANE
    }
}

export const EditCraneFailedAction = (message: string): EditCraneFailed => {
    return {
        type: CraneActionTypes.EDIT_CRANE_FAILED,
        payload: message
    }
}

export const EditCraneSuccessAction = (): EditCraneSuccess => {
    return {
        type: CraneActionTypes.EDIT_CRANE_SUCCESS,
    }
}

// Delete activity

interface DeleteCrane {
    type: CraneActionTypes.DELETE_CRANE,
}

interface DeleteCraneFailed {
    type: CraneActionTypes.DELETE_CRANE_FAILED,
    payload: string
}

interface DeleteCraneSuccess {
    type: CraneActionTypes.DELETE_CRANE_SUCCESS,
}


export const DeleteCraneAction = (): DeleteCrane => {
    return {
        type: CraneActionTypes.DELETE_CRANE
    }
}

export const DeleteCraneFailedAction = (message: string): DeleteCraneFailed => {
    return {
        type: CraneActionTypes.DELETE_CRANE_FAILED,
        payload: message
    }
}

export const DeleteCraneSuccessAction = (): DeleteCraneSuccess => {
    return {
        type: CraneActionTypes.DELETE_CRANE_SUCCESS,
    }
}

export type Action = DeleteCraneSuccess | DeleteCraneFailed | DeleteCrane | EditCrane | EditCraneFailed | EditCraneSuccess | GetCraneSuccess | GetCraneFailed | GetCraneAction | CreateCraneSuccess | CreateCraneFailed | CreateCraneAction;