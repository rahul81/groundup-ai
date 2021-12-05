import { Dispatch } from 'redux';
import {Action, loginUserFailed, loginUserSuccess} from '../actions/loginAction';
import axios from 'axios';
import { LOGIN_USER } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

export const loginUser = (email:string, password:string): AppThunk<void> =>{
     return async (dispatch: Dispatch<Action>)=> {
        return await axios.post(LOGIN_USER, {email, password})
        .then(response=>{
            dispatch(loginUserSuccess(email));
        }).catch(error=>{
            dispatch(loginUserFailed(email));
        });
    }
}
