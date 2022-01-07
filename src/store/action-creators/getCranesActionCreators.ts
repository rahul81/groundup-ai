import { Dispatch } from 'redux';
import { Action, getCranesSuccess, getCranesFailed } from '../actions/GetCranesActions';
import axios from 'axios';
import { GET_ALL_CRANES } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getCranes = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        return await axios.post(GET_ALL_CRANES, {
        })
            .then(response => {
                const { data: { data = [] } = {} } = response || {};
                dispatch(getCranesSuccess(data));
            }).catch(error => {
                dispatch(getCranesFailed(error.message));
            });
    }
}