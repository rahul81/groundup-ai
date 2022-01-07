import { Dispatch } from 'redux';
import { Action, fetchRole, fetchRoleFailed, fetchRoleSuccess, createRole, createRoleFailed, createRoleSuccess, deleteRole, deleteRoleFailed, deleteRoleSuccess, editRole, editRoleFailed, editRoleSuccess } from '../actions/roleActions';
import axios from 'axios';
import { GET_ROLES, CREATE_ROLE, DELETE_ROLE, UPDATE_ROLE } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { parseJsonText } from 'typescript';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const fetchRoles = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(fetchRole());
        return await axios.get(GET_ROLES, {})
            .then(response => {
                dispatch(fetchRoleSuccess(response.data.data));
            }).catch(error => {
                dispatch(fetchRoleFailed(error.message));
            });
    }
}

export const createNewRole = (name: string, priviledges: []): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createRole());
        return await axios.post(CREATE_ROLE, { name, priviledges })
            .then(response => {
                dispatch(createRoleSuccess());
            }).catch(error => {
                dispatch(createRoleFailed(error.message));
                console.log(error.request.response.json())
                console.log('work   ing')
            });
    }
}

export const removeRole = (id: number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(deleteRole());
        return await axios.delete(DELETE_ROLE + id, {})
            .then(response => {
                dispatch(deleteRoleSuccess());
            }).catch(error => {
                dispatch(deleteRoleFailed(error.message));
            });
    }
}

export const updateRole = (id: number, name: string, priviledges: []): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(editRole());
        return await axios.put(UPDATE_ROLE + id, { name, priviledges })
            .then(response => {
                dispatch(editRoleSuccess());
            }).catch(error => {
                dispatch(editRoleFailed(error.message));
            });
    }
}

