import { BookingsActionTypes } from '../action-types/bookingsActionTypes'

interface BookingsAction {
    type: BookingsActionTypes.ALL_BOOKINGS
    payload: string
}

interface BookingsFailed {
    type: BookingsActionTypes.BOOKINGS_FAILED,
    payload: string
}

export const bookingsSuccess = (data: any): BookingsAction => {
    return {
        type: BookingsActionTypes.ALL_BOOKINGS,
        payload: data
    }
}

export const bookingsFailed = (message: string): BookingsFailed => {
    return {
        type: BookingsActionTypes.BOOKINGS_FAILED,
        payload: message
    }
}

export type Action = BookingsAction | BookingsFailed;
