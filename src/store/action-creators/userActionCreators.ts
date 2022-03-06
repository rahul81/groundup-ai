import { Dispatch } from 'redux';
import { Action, getUsersSuccess, getUsers, getUsersFailed, createUser, createUserFailed, createUserSuccess, deleteUser, deleteUserFailed, deleteUserSuccess, editUser, editUserFailed, editUserSuccess } from '../actions/userActions';
import axios from 'axios';
import { GET_USERS, CREATE_USER, DELETE_USER ,UPDATE_USER} from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const fetchUsers = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(getUsers());
        return await axios.post(GET_USERS, {})
            .then(response => {
                dispatch(getUsersSuccess(response.data.data));
            }).catch(error => {
                dispatch(getUsersFailed(error.message));
            });
    }
}

export const createNewUser = (email: string, password: string, name: string, role: string | number, company: string | number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createUser());
        return await axios.post(CREATE_USER, { email, name, password, company, role })
            .then(response => {
                dispatch(createUserSuccess());
            }).catch(response => {
                console.log('response')
            });
    }
}

export const removeUser = (userId: number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(deleteUser(userId));
        return await axios.delete(DELETE_USER + userId, {})
            .then(response => {
                dispatch(deleteUserSuccess());
            }).catch(error => {
                dispatch(deleteUserFailed(error));
            });
    }
}

export const updateUser = (userId: number, email: string, name: string, role: string ): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(editUser());
        return await axios.put(UPDATE_USER + userId, { email, name, role })
            .then(response => {
                dispatch(editUserSuccess());
            }).catch(error => {
                dispatch(editUserFailed(error));
            });
    }
}

export const updateDeviceToken = (userId:string, deviceToken:string): AppThunk<void>=> {
    return async (dispatch: Dispatch<Action>) => {
        return await axios.put(UPDATE_USER + userId, { deviceToken: [deviceToken] })
        .then(response => {
            dispatch(editUserSuccess());
        }).catch(error => {
            dispatch(editUserFailed(error));
        })
    }
}
