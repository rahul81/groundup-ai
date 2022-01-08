import { GetCraneActionTypes } from '../action-types/getCraneActionTypes';
import {Action } from '../actions/getCranesActions';


export interface getCranesState {
    cranedata: [],
    craneloading: boolean,
    craneerror: string
}

export const initialState: getCranesState = {
    cranedata: [],
    craneloading: true,
    craneerror: ''
}

const getCranesReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case GetCraneActionTypes.ALL_CRANES:
            return { ...state, craneloading: false, cranedata: action.payload, craneerror: '' };
        case GetCraneActionTypes.CRANES_FAILED:
            return { ...state, craneloading: false, cranedata: [], craneerror: action.payload };
        default:
            return state;
    }
}

export default getCranesReducer;