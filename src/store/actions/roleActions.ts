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

// Create Role

interface CreateRoleAction {
    type: RolesActionTypes.CREATE_ROLE,
}

interface CreateRoleFailed {
    type: RolesActionTypes.CREATE_ROLE_FAILED,
    payload: string
}

interface CreateRoleSuccess {
    type: RolesActionTypes.CREATE_ROLE_SUCCESS
}

export const createRole = (): CreateRoleAction => {
    return {
        type: RolesActionTypes.CREATE_ROLE
    }
}

export const createRoleFailed = (message: string): CreateRoleFailed => {
    return {
        type: RolesActionTypes.CREATE_ROLE_FAILED,
        payload: message
    }
}

export const createRoleSuccess = (): CreateRoleSuccess => {
    return {
        type: RolesActionTypes.CREATE_ROLE_SUCCESS
    }
}

// delete role

interface DeleteRoleAction {
    type: RolesActionTypes.DELETE_ROLE,
}

interface DeleteRoleFailed {
    type: RolesActionTypes.DELETE_ROLE_FAILED,
    payload: string
}

interface DeleteRoleSuccess {
    type: RolesActionTypes.DELETE_ROLE_SUCCESS
}

export const deleteRole = (): DeleteRoleAction => {
    return {
        type: RolesActionTypes.DELETE_ROLE
    }
}

export const deleteRoleFailed = (message: string): DeleteRoleFailed => {
    return {
        type: RolesActionTypes.DELETE_ROLE_FAILED,
        payload: message
    }
}

export const deleteRoleSuccess = (): DeleteRoleSuccess => {
    return {
        type: RolesActionTypes.DELETE_ROLE_SUCCESS
    }
}

export type Action = DeleteRoleSuccess | DeleteRoleFailed | DeleteRoleAction | CreateRoleAction | CreateRoleFailed | CreateRoleSuccess | GetRoleAction | GetRoleFailed | GetRoleSuccess;
