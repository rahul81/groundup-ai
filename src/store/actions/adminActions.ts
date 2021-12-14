import { AdminActionTypes } from '../action-types/adminActionTypes';

interface GetUsersAction {
    type: AdminActionTypes.GET_USERS,
    payload: []
}

interface GetUsersFailed {
    type: AdminActionTypes.GET_USERS_FAILED,
    payload: string
}

export type Action = GetUsersAction | GetUsersFailed;;

export const getUsersSuccess = (users: []): GetUsersAction => {
    return {
        type: AdminActionTypes.GET_USERS,
        payload: users
    }
}

export const getUsersFailed = (message: string): GetUsersFailed => {
    return {
        type: AdminActionTypes.GET_USERS_FAILED,
        payload: message
    }
}