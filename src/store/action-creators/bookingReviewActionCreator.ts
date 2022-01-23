import { Dispatch } from 'redux';
import { Action, bookingReviewFailed, bookingReviewSuccess, updateBooking, updateBookingSuccess, updateBookingFailed, reqBodyUpdate } from '../actions/bookingReviewAction';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { UPDATE_BOOKING } from '../../constants/Api';
import axios from 'axios';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getBookingReview = (data: {}): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(bookingReviewSuccess(data));
    }
}

export const updateBookingStatus = (data: reqBodyUpdate): AppThunk<void> => {

    const { id, status } = data;

    return async (dispatch: Dispatch<Action>) => {
        dispatch(updateBooking());
        return await axios.put(UPDATE_BOOKING + id, {
            status
        }).then((response) => {
            dispatch(updateBookingSuccess(response.data));
        }).catch((error) => {
            dispatch(updateBookingFailed(error.message));
        })
    }
}