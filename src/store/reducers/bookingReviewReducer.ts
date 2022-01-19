import { BookingsReviewActionTypes } from '../action-types/bookingReviewTypes';
import { Action } from '../actions/bookingReviewAction';

export interface BookingReviewData {
    id: string;
    crane: string,
    date: string,
    status: { props : { title: string}},
    tastType: string,
    timeStart: string,
    timeEnd: string,
    zone: string,
    taskType: string
}

export interface BookingReviewState {
    data: BookingReviewData,
    error: string
}

export const initialState: BookingReviewState = {
    data: {
        id: "",
        crane: "",
        date: "",
        status: { props : { title: ""}},
        tastType: "",
        timeStart: "",
        timeEnd: "",
        zone: "",
        taskType: ""
    },
    error: ''
}

export const bookingReviewReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case BookingsReviewActionTypes.BOOKINGS_REVIEW:
            return { ...state, data: action.payload, error: '' };
        case BookingsReviewActionTypes.BOOKINGS_REVIEW_FAILED:
            return { ...state, data: {}, error: action.payload };
        default:
            return state;
    }
}

export interface UpdateBookingsState {
    data: { message: string, success: boolean},
    error: string

}

export const updateBookingsInitialState : UpdateBookingsState = {
    data: { message: '', success: false},
    error: ''
}

export const updateBookingReducer = (state: UpdateBookingsState = updateBookingsInitialState, action: Action) => {
    switch (action.type) {
        case BookingsReviewActionTypes.UPDATE_BOOKING_SUCCESS:
            return { ...state, data: action.payload, error: ''};
        case BookingsReviewActionTypes.UPDATE_BOOKING_FAILED:
            return { ...state, data: { message:'', success: false }, error: action.payload };
        default:
            return state;
    }
}