import { Dispatch } from 'redux';
import { Action, getCompany, getCompanyFailed, getCompanySuccess } from '../actions/companyActions';
import axios from 'axios';
import { GET_COMPANY } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const fetchCompany = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(getCompany());
        return await axios.post(GET_COMPANY, {})
            .then(response => {
                dispatch(getCompanySuccess(response.data.data));
            }).catch(error => {
                dispatch(getCompanyFailed(error.message));
            });
    }
}
