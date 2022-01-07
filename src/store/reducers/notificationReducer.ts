import { NotificationActionTypes } from '../action-types/notificationActionTypes';
import { Action } from '../actions/notificationActions';

export interface NotificatioState {
    notification: any;
    getNotificationLoading: boolean;
    notificationError: string;
}
export const initialState: NotificatioState = {
    notification: [],
    getNotificationLoading: true,
    notificationError: ''
}

const notificationReducer = (state: NotificatioState = initialState, action: Action) => {
    console.log('inside notificationReducer actipon creator')
    console.log(action)
    switch (action.type) {
        case NotificationActionTypes.GET_NOTIFICATION:
            return { ...state, getNotificationLoading: true };
        case NotificationActionTypes.GET_NOTIFICATION_FAILED:
            return { ...state, getNotificationLoading: false };
        case NotificationActionTypes.GET_NOTIFICATION_SUCCESS:
            return { ...state, getNotificationLoading: true, notification: [...state.notification, action.payload] };
        default:
            return state;
    }
}

export default notificationReducer;