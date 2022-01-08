import { LiftActionTypes } from '../action-types/getLiftActionTypes';
import { Action } from '../actions/liftAction';


export interface getLiftState {
    liftdata: [],
    liftloading: boolean,
    lifterror: string
}

export const initialState: getLiftState = {
    liftdata: [],
    liftloading: true,
    lifterror: ''
}

const liftReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case LiftActionTypes.GET_ALL_LIFT:
            return { ...state, liftloading: false, liftdata: action.payload , lifterror: ''};
        case LiftActionTypes.LIFT_FAILED:
            return { ...state, liftloading: false, liftdata: [], lifterror: action.payload  };
        default:
            return state;
    }
}

export default liftReducer;