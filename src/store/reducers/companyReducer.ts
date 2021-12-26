import { CompanyActionTypes } from '../action-types/companyActionTypes';
import { Action } from '../actions/companyActions';

// Get Comapny
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

// Create Comapny

export interface createCompanyState {
    loading: boolean,
    error: string
}

export const createCompanyInitialState: createCompanyState = {
    loading: true,
    error: ''
}

export const createCompanyReducer = (state: createCompanyState = createCompanyInitialState, action: Action) => {
    switch (action.type) {
        case CompanyActionTypes.CREATE_COMPANY:
            return { ...state, loading: true };

        case CompanyActionTypes.CREATE_COMPANY_FAILED:
            return { ...state, loading: false, error: action.payload };

        case CompanyActionTypes.CREATE_COMPANY_SUCCESS:
            return { ...state, loading: false, error: '' };
        default:
            return state;
    }
}

// Delete Comapny

export interface deleteCompanyState {
    loading: boolean,
    error: string
}

export const deleteCompanyInitialState: deleteCompanyState = {
    loading: true,
    error: ''
}

export const deleteCompanyReducer = (state: deleteCompanyState = deleteCompanyInitialState, action: Action) => {
    switch (action.type) {
        case CompanyActionTypes.DELETE_COMPANY:
            return { ...state, loading: true };

        case CompanyActionTypes.DELETE_COMPANY_FAILED:
            return { ...state, loading: false, error: action.payload };

        case CompanyActionTypes.DELETE_COMPANY_SUCCESS:
            return { ...state, loading: false, error: '' };
        default:
            return state;
    }
}
