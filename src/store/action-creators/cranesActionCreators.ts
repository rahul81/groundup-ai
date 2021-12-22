import { Dispatch } from 'redux';
import { Action, cranesSuccess } from '../actions/cranesActions';
import axios from 'axios';
import { CRANES } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getCranes = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        return await axios.post(CRANES, {
            "skip": 0,
        })
            .then(response => {
                const { data: { data = [] } = {} } = response || {};
                dispatch(cranesSuccess(data));
            }).catch(error => {
                console.log('error in getting all cranes', error);
            });
    }
}
