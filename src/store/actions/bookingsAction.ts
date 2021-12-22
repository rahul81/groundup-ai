import { BookingsActionTypes } from '../action-types/bookingsActionTypes'

interface BookingsAction {
    type: BookingsActionTypes.ALL_BOOKINGS
    payload: string
}

export type Action = BookingsAction;

export const bookingsSuccess = (data: any): BookingsAction => {
    return {
        type: BookingsActionTypes.ALL_BOOKINGS,
        payload: data
    }
}