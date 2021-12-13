import { Dispatch } from 'redux';
import {Action, getUsersSuccess  } from '../actions/adminActions';
import axios from 'axios';
import { GET_USERS } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const getUsers = (): AppThunk<void> =>{
     return async (dispatch: Dispatch<Action>)=> {
        return await axios.post(GET_USERS, {})
        .then(response=>{
            dispatch(getUsersSuccess(response.data.data));
        }).catch(error=>{
            console.error('Something happened')
        });
    }
}
