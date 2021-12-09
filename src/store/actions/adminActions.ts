import { AdminActionTypes } from '../action-types/adminActionTypes';

interface GetUsersAction{
    type: AdminActionTypes.GET_USERS
}

export type Action = GetUsersAction ;

export const getUsersSuccess = ():GetUsersAction=>{
    return {
        type: AdminActionTypes.GET_USERS
    }
}

