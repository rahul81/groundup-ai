import { BookingsReviewActionTypes } from '../action-types/bookingReviewTypes';
import { Action } from '../actions/bookingReviewAction';

export interface BookingReviewData {
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