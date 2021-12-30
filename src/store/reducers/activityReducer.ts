import { LiftypesActionTypes } from '../action-types/activityActionTypes';
import { Action } from '../actions/activityAction';

export interface ActivityState {
    liftTypes: [];
    liftTypesLoading: boolean;
    liftTypesError: '';
}

export const activityInitialState: ActivityState = {
    liftTypes: [],
    liftTypesLoading: true,
    liftTypesError: ''
}

const activityReducer = (state: ActivityState = activityInitialState, action: Action) => {
    switch (action.type) {
        case LiftypesActionTypes.GET_LIFTTYPES:
            return { ...state, liftTypesLoading: true };
        case LiftypesActionTypes.GET_LIFTTYPES_FAILED:
            return { ...state, liftTypes: [], liftTypesLoading: false, liftTypesError: action.payload };
        case LiftypesActionTypes.GET_LIFTTYPES_SUCCESS:
            return { ...state, liftTypes: action.payload, liftTypesLoading: false, liftTypesError: '' };
        default:
            return state;
    }
}

export default activityReducer;