import { NotificationActionTypes } from '../action-types/notificationActionTypes';
import { Action } from '../actions/notificationActions';

export interface NotificationState {
    notification: any;
    getNotificationLoading: boolean;
    notificationError: string;
}
export const initialState: NotificationState = {
    notification: [],
    getNotificationLoading: true,
    notificationError: ''
}

const notificationReducer = (state: NotificationState = initialState, action: Action) => {
    console.log('inside notificationReducer actipon creator')
    console.log(action)
    switch (action.type) {
        case NotificationActionTypes.GET_NOTIFICATION:
            return { ...state, getNotificationLoading: true };
        case NotificationActionTypes.GET_NOTIFICATION_FAILED:
            return { ...state, getNotificationLoading: false };
        case NotificationActionTypes.GET_NOTIFICATION_SUCCESS:
            return { ...state, getNotificationLoading: true, notification: [...state.notification, action.payload] };
        case NotificationActionTypes.DELETE_NOTIFICATION:
            return { ...state, notification: action.payload };
        default:
            return state;
    }
}

export default notificationReducer;