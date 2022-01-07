import { NotificationActionTypes } from '../action-types/notificationActionTypes'

interface NotificationAction {
    type: NotificationActionTypes.GET_NOTIFICATION
}

interface NotificationActionFailed {
    type: NotificationActionTypes.GET_NOTIFICATION_FAILED
    payload: string
}

interface NotificationActionSuccess {
    type: NotificationActionTypes.GET_NOTIFICATION_SUCCESS
    payload: any
}


export type Action = NotificationAction | NotificationActionFailed | NotificationActionSuccess;

export const getNotification = (): NotificationAction => {
    return {
        type: NotificationActionTypes.GET_NOTIFICATION
    }
}

export const getNotificationSuccess = (notification: any): NotificationActionSuccess => {
    return {
        type: NotificationActionTypes.GET_NOTIFICATION_SUCCESS,
        payload: notification
    }
}

export const getNotificationFailed = (error: string): NotificationActionFailed => {
    return {
        type: NotificationActionTypes.GET_NOTIFICATION_FAILED,
        payload: error
    }
}