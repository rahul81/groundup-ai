import { Dispatch } from 'redux';
import { Action, bookingReviewFailed, bookingReviewSuccess } from '../actions/bookingReviewAction';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getBookingReview = (data: {}): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(bookingReviewSuccess(data));
    }
}