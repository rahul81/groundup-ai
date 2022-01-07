import { Dispatch } from 'redux';
import { Action, getLiftTypes, getLiftTypesFailed, getLiftTypesSuccess, createLiftTypes, createLiftTypesFailed, createLiftTypesSuccess, UpdateLiftTypesAction, UpdateLiftTypesFailedAction, UpdateLiftTypesSuccessAction, DeleteLiftTypesAction, DeleteLiftTypesFailedAction, DeleteLiftTypesSuccessAction } from '../actions/activityAction';
import axios from 'axios';
import { GET_LIFTTYPES, CREATE_LIFTTYPES, UPDATE_LIFTTYPES, DELETE_LIFTTYPES } from '../../constants/Api';
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

export const createNewLiftType = (name: string): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(createLiftTypes());
        return await axios.post(CREATE_LIFTTYPES, { name })
            .then(response => {
                dispatch(createLiftTypesSuccess());
            }).catch(error => {
                dispatch(createLiftTypesFailed(error.message));
            });
    }
}

export const updateLiftType = (id: number, name: string): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(UpdateLiftTypesAction());
        return await axios.put(UPDATE_LIFTTYPES + id, { name })
            .then(response => {
                dispatch(UpdateLiftTypesSuccessAction());
            }).catch(error => {
                dispatch(UpdateLiftTypesFailedAction(error.message));
            });
    }
}

export const removeLiftType = (id: number): AppThunk<void> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(DeleteLiftTypesAction());
        return await axios.delete(DELETE_LIFTTYPES + id, {})
            .then(response => {
                dispatch(DeleteLiftTypesSuccessAction());
            }).catch(error => {
                dispatch(DeleteLiftTypesFailedAction(error.message));
            });
    }
}
