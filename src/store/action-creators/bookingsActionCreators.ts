import { Dispatch } from 'redux';
import { Action, bookingsSuccess, bookingsFailed, requestNewSuccess, requestNewFailed } from '../actions/bookingsAction';
import axios from 'axios';
import { BOOKINGS, REQUEST_NEW } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getBookings = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        return await axios.post(BOOKINGS, {
            "skip": 0
        })
            .then(response => {
                const { data: { data = [] } = {} } = response || {};
                dispatch(bookingsSuccess(data));
            }).catch(error => {
                dispatch(bookingsFailed(error.message));
            });
    }
}

export const requestNew = (crane_id: string, user_id: string, start_time: string, end_time: string, model_no: number, zone: string, status: string, status_note: string, lifttype_id: string): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {

        return await axios.post(REQUEST_NEW, { crane_id, user_id, start_time, end_time, model_no, zone, status, status_note, lifttype_id })
            .then(response => {
                const { data: { data = [] } = {} } = response || {};
                dispatch(requestNewSuccess(data));
            }).catch(error => {
                dispatch(requestNewFailed(error.message));
            });
    }
}

