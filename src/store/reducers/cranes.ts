import { CranesActionTypes } from '../action-types/cranesActionTypes';
import { Action } from '../actions/cranesActions';


export const initialState: any = {}

const cranesReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case CranesActionTypes.ALL_CRANES:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}

export default cranesReducer;