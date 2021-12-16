import { Dispatch } from 'redux';
import { Action, getUsersSuccess, getUsers, getUsersFailed, createUser, createUserFailed, createUserSuccess } from '../actions/userActions';
import axios from 'axios';
import { GET_USERS, CREATE_USER } from '../../constants/Api';
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

export const createNewUser = (email: string, password: string, name: string): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createUser());
        return await axios.post(CREATE_USER, { email, name, password })
            .then(response => {
                dispatch(createUserSuccess());
            }).catch(error => {
                dispatch(createUserFailed(error));
            });
    }
}
