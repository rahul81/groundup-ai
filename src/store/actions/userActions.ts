import { userActionTypes, createUserActionTypes } from '../action-types/userActionTypes';

// getUser

interface GetUsersAction {
    type: userActionTypes.GET_USERS,
}

interface GetUsersFailed {
    type: userActionTypes.GET_USERS_FAILED,
    payload: string
}

interface GetUsersSuccess {
    type: userActionTypes.GET_USERS_SUCCESS,
    payload: []
}

export const getUsers = (): GetUsersAction => {
    return {
        type: userActionTypes.GET_USERS
    }
}

export const getUsersFailed = (message: string): GetUsersFailed => {
    return {
        type: userActionTypes.GET_USERS_FAILED,
        payload: message
    }
}

export const getUsersSuccess = (users: []): GetUsersSuccess => {
    return {
        type: userActionTypes.GET_USERS_SUCCESS,
        payload: users
    }
}

// createUser

interface CreateUserAction {
    type: createUserActionTypes.CREATE_USER,
}

interface CreateUserFailed {
    type: createUserActionTypes.CREATE_USER_FAILED,
    payload: string
}

interface CreateUserSuccess {
    type: createUserActionTypes.CREATE_USER_SUCCESS
}


export const createUser = (): CreateUserAction => {
    return {
        type: createUserActionTypes.CREATE_USER,
    }
}


export const createUserFailed = (message: string): CreateUserFailed => {
    return {
        type: createUserActionTypes.CREATE_USER_FAILED,
        payload: message
    }
}

export const createUserSuccess = (): CreateUserSuccess => {
    return {
        type: createUserActionTypes.CREATE_USER_SUCCESS,
    }
}

export type Action = GetUsersAction | GetUsersFailed | GetUsersSuccess | CreateUserSuccess | CreateUserFailed | CreateUserAction;
