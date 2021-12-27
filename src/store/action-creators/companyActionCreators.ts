import { Dispatch } from 'redux';
import {
    Action,
    getCompany, getCompanyFailed, getCompanySuccess,
    createCompanySuccessAction, createCompanyFailedAction, createCompanyAction, deleteCompanySuccessAction, deleteCompanyFailedAction, editCompanySuccessAction, editCompanyFailedAction
} from '../actions/companyActions';
import axios from 'axios';
import { GET_COMPANY, CREATE_COMPANY, DELETE_COMPANY, UPDATE_COMPANY } from '../../constants/Api';
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

export const createCompany = (name: string, address: string, phone: number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createCompanyAction());
        return await axios.post(CREATE_COMPANY, { name, address, 'number': phone })
            .then(response => {
                dispatch(createCompanySuccessAction());
            }).catch(error => {
                dispatch(createCompanyFailedAction(error.message));
            });
    }
}

export const deleteCompany = (_id: number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createCompanyAction());
        return await axios.delete(DELETE_COMPANY + _id, {})
            .then(response => {
                dispatch(deleteCompanySuccessAction());
            }).catch(error => {
                dispatch(deleteCompanyFailedAction(error.message));
            });
    }
}

export const editCompany = (_id: number, name: string, address: string, number: number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createCompanyAction());
        return await axios.put(UPDATE_COMPANY + _id, { name, address, number })
            .then(response => {
                dispatch(editCompanySuccessAction());
            }).catch(error => {
                dispatch(editCompanyFailedAction(error.message));
            });
    }
}

