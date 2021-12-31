import { Dispatch } from 'redux';
import { Action, getCrane, getCraneFailed, getCraneSuccess, createCrane, createCraneFailed, createCraneSuccess, EditCraneAction, EditCraneFailedAction, EditCraneSuccessAction, DeleteCraneAction, DeleteCraneFailedAction, DeleteCraneSuccessAction } from '../actions/craneAction';
import axios from 'axios';
import { GET_CRANE, EDIT_CRANE, DELETE_CRANE, CREATE_CRANE } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const fetchCrane = (): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(getCrane());
        return await axios.post(GET_CRANE, {})
            .then(response => {
                dispatch(getCraneSuccess(response.data.data));
            }).catch(error => {
                dispatch(getCraneFailed(error.message));
            });
    }
}

export const createNewCrane = ( available_start_time: string, available_end_time: string): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createCrane());
        return await axios.post(CREATE_CRANE, { model_no: "1000", available_start_time, available_end_time })
            .then(response => {
                dispatch(createCraneSuccess());
            }).catch(error => {
                dispatch(createCraneFailed(error.message));
            });
    }
}

export const updateCrane = (id: number, model_no: string, available_start_time: string, available_end_time: string, weekdays: []): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(EditCraneAction());
        return await axios.put(EDIT_CRANE + id, { model_no, available_start_time, available_end_time, weekdays })
            .then(response => {
                dispatch(EditCraneSuccessAction());
            }).catch(error => {
                dispatch(EditCraneFailedAction(error.message));
            });
    }
}

export const removeCrane = (id: number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(DeleteCraneAction());
        return await axios.delete(DELETE_CRANE + id, {})
            .then(response => {
                dispatch(DeleteCraneSuccessAction());
            }).catch(error => {
                dispatch(DeleteCraneFailedAction(error.message));
            });
    }
}
