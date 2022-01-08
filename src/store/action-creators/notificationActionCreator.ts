import { Dispatch } from 'redux';
import { getNotification, getNotificationFailed, getNotificationSuccess, Action, deleteNotifcation } from '../actions/notificationActions';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const setNotification = (notification: any): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(getNotificationSuccess(notification));
    }
}


export const resetNotification = (notifications: Array<any>): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(deleteNotifcation(notifications))
    }
}