import { Dispatch } from 'redux';
import { Action, liftFailed, liftSuccess } from '../actions/liftAction';
import axios from 'axios';
import { GET_ALL_LIFT } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getLift = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        return await axios.post(GET_ALL_LIFT, {
        
        })
            .then(response => {
                const { data: { data = [] } = {} } = response || {};
                dispatch(liftSuccess(data));
            }).catch(error => {
                dispatch(liftFailed(error.message));
            });
    }
}