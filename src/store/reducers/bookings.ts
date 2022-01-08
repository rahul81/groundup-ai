import { BookingsActionTypes, RequestNewActionsTypes } from '../action-types/bookingsActionTypes';
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

export const bookingReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case BookingsActionTypes.BOOKINGS_FAILED:
            return { ...state, loading: false, users: [], error: action.payload };
        case BookingsActionTypes.ALL_BOOKINGS:
            return { ...state, loading: false, data: action.payload, error: '' };
        default:
            return state;
    }
}



//Request New 

export interface RequestNewState {
    data : [],
    error : string
}

export const RequestNewinitialState :  RequestNewState = {
    data : [],
    error : ''
}

export const requestNewReducer = (state: any = RequestNewinitialState, action: Action) => {
    switch (action.type) {
        case RequestNewActionsTypes.REQUEST_NEW:
            return { ...state,  data: [], error: action.payload };
        case RequestNewActionsTypes.REQUEST_NEW_FAILED:
            return { ...state,  data: action.payload, error: '' };
        default:
            return state;
    }
}

