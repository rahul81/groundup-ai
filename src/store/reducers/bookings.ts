import { BookingsActionTypes } from '../action-types/bookingsActionTypes';
import { Action } from '../actions/bookingsAction';


export const initialState: any = {}

const bookingReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case BookingsActionTypes.ALL_BOOKINGS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}

export default bookingReducer;