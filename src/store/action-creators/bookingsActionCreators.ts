import { Dispatch } from 'redux';
import { Action, bookingsSuccess, bookingsFailed } from '../actions/bookingsAction';
import axios from 'axios';
import { BOOKINGS } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getBookings = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        return await axios.post(BOOKINGS, {
            "skip": 0,
        })
            .then(response => {
                const { data: { data = [] } = {} } = response || {};
                dispatch(bookingsSuccess(data));
            }).catch(error => {
                dispatch(bookingsFailed(error.message));
            });
    }
}
