import { GetCraneActionTypes } from '../action-types/getCraneActionTypes';
import {Action } from '../actions/GetCranesActions';


export interface getCranesState {
    data: [],
    loading: boolean,
    error: string
}

export const initialState: getCranesState = {
    data: [],
    loading: true,
    error: ''
}

const getCranesReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case GetCraneActionTypes.ALL_CRANES:
            return { ...state, loading: false, users: [], error: action.payload };
        case GetCraneActionTypes.CRANES_FAILED:
            return { ...state, loading: false, data: action.payload, error: '' };
        default:
            return state;
    }
}

export default getCranesReducer;