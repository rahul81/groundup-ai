import { Dispatch } from 'redux';
import { Action, fetchRole, fetchRoleFailed, fetchRoleSuccess } from '../actions/roleActions';
import axios from 'axios';
import { GET_ROLES } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

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
