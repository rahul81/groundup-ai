import {BookingsReviewActionTypes } from '../action-types/bookingReviewTypes'

interface BookingReviewAction {
    type: BookingsReviewActionTypes.BOOKINGS_REVIEW
    payload: {}
}

interface BookingReviewFailed {
    type: BookingsReviewActionTypes.BOOKINGS_REVIEW_FAILED,
    payload: string
}

export const bookingReviewSuccess = (data: {}): BookingReviewAction => {
    return {
        type: BookingsReviewActionTypes.BOOKINGS_REVIEW,
        payload: data
    }
}

export const bookingReviewFailed = (message: string): BookingReviewFailed => {
    return {
        type: BookingsReviewActionTypes.BOOKINGS_REVIEW_FAILED,
        payload: message
    }
}

export type Action = BookingReviewAction | BookingReviewFailed