import { Dispatch } from 'redux';
import { Action, getLiftTypes, getLiftTypesFailed, getLiftTypesSuccess } from '../actions/activityAction';
import axios from 'axios';
import { GET_LIFTTYPES } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const fetchLiftTypes = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(getLiftTypes());
        return await axios.post(GET_LIFTTYPES, {})
            .then(response => {
                dispatch(getLiftTypesSuccess(response.data.data));
            }).catch(error => {
                dispatch(getLiftTypesFailed(error.message));
            });
    }
}
