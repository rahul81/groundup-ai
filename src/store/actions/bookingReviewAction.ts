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


interface UpdateBooking {
    type: BookingsReviewActionTypes.UPDATE_BOOKING
}

interface UpdateBookingSuccess {
    type: BookingsReviewActionTypes.UPDATE_BOOKING_SUCCESS,
    payload: {}
}

interface UpdateBookingFailed {
    type: BookingsReviewActionTypes.UPDATE_BOOKING_FAILED,
    payload: string
}

export interface reqBodyUpdate {
    id: string,
    status: string
}

export const updateBooking = (): UpdateBooking => {
    return {
        type: BookingsReviewActionTypes.UPDATE_BOOKING
    }
}

export const updateBookingSuccess = (data: any): UpdateBookingSuccess => {
    return {
        type: BookingsReviewActionTypes.UPDATE_BOOKING_SUCCESS,
        payload: data
    }
}

export const updateBookingFailed = (message: string): UpdateBookingFailed => {
    return {
        type: BookingsReviewActionTypes.UPDATE_BOOKING_FAILED,
        payload: message
    }
}

export type Action = BookingReviewAction | BookingReviewFailed | UpdateBookingSuccess | UpdateBookingFailed | UpdateBooking