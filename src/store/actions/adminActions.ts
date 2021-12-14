import { AdminActionTypes } from '../action-types/adminActionTypes';

interface GetUsersAction {
    type: AdminActionTypes.GET_USERS,
}

interface GetUsersFailed {
    type: AdminActionTypes.GET_USERS_FAILED,
    payload: string
}

interface GetUsersSuccess {
    type: AdminActionTypes.GET_USERS_SUCCESS,
    payload: []
}

export type Action = GetUsersAction | GetUsersFailed | GetUsersSuccess;

export const getUsers = (): GetUsersAction => {
    return {
        type: AdminActionTypes.GET_USERS
    }
}

export const getUsersFailed = (message: string): GetUsersFailed => {
    return {
        type: AdminActionTypes.GET_USERS_FAILED,
        payload: message
    }
}

export const getUsersSuccess = (users: []): GetUsersSuccess => {
    return {
        type: AdminActionTypes.GET_USERS_SUCCESS,
        payload: users
    }
}