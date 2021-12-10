import { Dispatch } from 'redux';
import {Action, getUsersSuccess  } from '../actions/adminActions';
import axios from 'axios';
import { GET_USERS } from '../../constants/Api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export type AppThunk<R> = ThunkAction<R, RootState, null, Action>;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFmMzYzYTJlNWU5NDZjZTlmYWNjZmMiLCJpYXQiOjE2MzkwMjAxNjV9.PTbWO3_X7a6HifMX9nPQmflxSFbXgEl3nHn_3fW0bLY"

const config = {
    headers: {  
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` }
}
const bodyParameters = { };

export const getUsers = (): AppThunk<void> =>{
     return async (dispatch: Dispatch<Action>)=> {
        return await axios.post(GET_USERS, bodyParameters, config)
        .then(response=>{
            dispatch(getUsersSuccess(response.data.data));
        }).catch(error=>{
            console.error('Something happened')
        });
    }
}
