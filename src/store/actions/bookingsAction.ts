import { BookingsActionTypes, RequestNewActionsTypes } from '../action-types/bookingsActionTypes'

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


interface RequestNewAction {
    type : RequestNewActionsTypes.REQUEST_NEW,
    payload: string
}

interface RequestNewFailed {
    type : RequestNewActionsTypes.REQUEST_NEW_FAILED,
    payload: string
}

export const requestNewSuccess = (data:any): RequestNewAction => {
    return{
        type : RequestNewActionsTypes.REQUEST_NEW,
        payload: data
    }
    
}

export const requestNewFailed = (message:string): RequestNewFailed => {
    return{
        type : RequestNewActionsTypes.REQUEST_NEW_FAILED,
        payload: message
    }
    
}

export type Action = BookingsAction | BookingsFailed | RequestNewAction | RequestNewFailed;
