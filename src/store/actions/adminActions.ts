import { AdminActionTypes } from '../action-types/adminActionTypes';

interface GetUsersAction{
    type: AdminActionTypes.GET_USERS,
    payload : []
}

export type Action = GetUsersAction ;

export const getUsersSuccess = (users : []):GetUsersAction=>{
    return {
        type: AdminActionTypes.GET_USERS,
        payload : users
    }
}

