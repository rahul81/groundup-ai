import { Dispatch } from 'redux';
import { Action, getUsersSuccess, getUsers, getUsersFailed } from '../actions/adminActions';
import axios from 'axios';
import { GET_USERS } from '../../constants/Api';
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
