import { Dispatch } from 'redux';
import { Action, bookingsSuccess, bookingsFailed, requestNewSuccess, requestNewFailed } from '../actions/bookingsAction';
import axios from 'axios';
import { BOOKINGS, REQUEST_NEW, UPDATE_BOOKING } from '../../constants/Api';
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

interface reqBody {
     crane_id: string
     user_id: string 
     start_time: string 
     end_time: string
     model_no?: number 
     status: string
     status_note?: string
     lifttype_id: string
     update?: boolean,
     bookingId?: string
}
export const requestNew = (reqBody: reqBody): any => {

    const { crane_id, user_id, start_time, end_time, model_no = 1900, status, status_note = 'Lazy', lifttype_id,  update=false, bookingId='' } = reqBody

    const URL = update ? UPDATE_BOOKING + bookingId : REQUEST_NEW


    return async (dispatch: Dispatch<Action>) => {

        return await axios({method: update ? 'put':'post', url:URL, data:{ crane_id, user_id, start_time, end_time, model_no, status, status_note, lifttype_id }})
            .then(response => {
                const { data: { data = [] } = {} } = response || {};
                dispatch(requestNewSuccess(data));
                return response
            }).catch(error => {
                dispatch(requestNewFailed(error.message));
                return error;
            });
    }
}

