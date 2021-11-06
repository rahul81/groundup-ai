import { Dispatch } from 'redux';
import {Action, loginUserFailed, loginUserSuccess} from '../actions/loginAction';
import axios from 'axios';
import { LOGIN_USER } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const loginUser = (username:string, password:string): AppThunk<void> =>{
     return async (dispatch: Dispatch<Action>)=> {
        return await axios.post(LOGIN_USER, {username, password})
        .then(response=>{
            dispatch(loginUserSuccess(username));
        }).catch(error=>{
            dispatch(loginUserFailed(username));
        });
    }
}
