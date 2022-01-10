import { PriviledgesActionTypes } from '../action-types/priviledgesActionTypes';
import { Action } from '../actions/priviledgesActions';

export interface priviledgesState {
    priviledges: [],
    priviledgesLoading: boolean,
    priviledgesError: string
}

export const initialState: priviledgesState = {
    priviledges: [],
    priviledgesLoading: true,
    priviledgesError: ''
}

const priviledgesReducer = (state: priviledgesState = initialState, action: Action) => {
    switch (action.type) {
        case PriviledgesActionTypes.GET_PRIVLIEDGES:
            return { ...state, priviledgesLoading: true };

        case PriviledgesActionTypes.GET_PRIVLIEDGES_FAILED:
            return { ...state, priviledgesLoading: false, priviledges: [], priviledgesError: action.payload };

        case PriviledgesActionTypes.GET_PRIVLIEDGES_SUCCESS:
            return { ...state, priviledges: action.payload, priviledgesLoading: false, priviledgesError: '' };
        default:
            return state;
    }
}

export default priviledgesReducer;