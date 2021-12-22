import { BookingsActionTypes } from '../action-types/bookingsActionTypes';
import { Action } from '../actions/bookingsAction';


export interface BookingsState {
    data: [],
    loading: boolean,
    error: string
}

export const initialState: BookingsState = {
    data: [],
    loading: true,
    error: ''
}

const bookingReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case BookingsActionTypes.BOOKINGS_FAILED:
            return { ...state, loading: false, users: [], error: action.payload };
        case BookingsActionTypes.ALL_BOOKINGS:
            return { ...state, loading: false, data: action.payload, error: '' };
        default:
            return state;
    }
}

export default bookingReducer;