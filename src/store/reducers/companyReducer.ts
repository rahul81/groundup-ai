import { CompanyActionTypes } from '../action-types/companyActionTypes';
import { Action } from '../actions/companyActions';

export interface companyState {
    company: [],
    loading: boolean,
    error: string
}

export const initialState: companyState = {
    company: [],
    loading: true,
    error: ''
}

const companyReducer = (state: companyState = initialState, action: Action) => {
    switch (action.type) {
        case CompanyActionTypes.GET_COMPANY:
            return { ...state, loading: true };

        case CompanyActionTypes.GET_COMPANY_FAILED:
            return { ...state, loading: false, company: [], error: action.payload };

        case CompanyActionTypes.GET_COMPANY_SUCCESS:
            return { ...state, company: action.payload, loading: false, error: '' };
        default:
            return state;
    }
}

export default companyReducer;