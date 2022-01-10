import { Dispatch } from 'redux';
import { Action, fetchPriviledges, fetchPriviledgesFailed, fetchPriviledgesSuccess } from '../actions/priviledgesActions';
import axios from 'axios';
import { GET_PRIVLIEDGES } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getPriviledges = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(fetchPriviledges());
        return await axios.get(GET_PRIVLIEDGES, {})
            .then(response => {
                dispatch(fetchPriviledgesSuccess(response.data.data.priviledge));
            }).catch(error => {
                dispatch(fetchPriviledgesFailed(error.message));
            });
    }
}
