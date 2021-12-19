import { RolesActionTypes } from '../action-types/roleActionTypes';

interface GetRoleAction {
    type: RolesActionTypes.GET_ROLES,
}

interface GetRoleFailed {
    type: RolesActionTypes.GET_ROLES_FAILED,
    payload: string
}

interface GetRoleSuccess {
    type: RolesActionTypes.GET_ROLES_SUCCESS,
    payload: []
}

export type Action = GetRoleAction | GetRoleFailed | GetRoleSuccess;

export const fetchRole = (): GetRoleAction => {
    return {
        type: RolesActionTypes.GET_ROLES
    }
}

export const fetchRoleFailed = (message: string): GetRoleFailed => {
    return {
        type: RolesActionTypes.GET_ROLES_FAILED,
        payload: message
    }
}

export const fetchRoleSuccess = (roles: []): GetRoleSuccess => {
    return {
        type: RolesActionTypes.GET_ROLES_SUCCESS,
        payload: roles
    }
}