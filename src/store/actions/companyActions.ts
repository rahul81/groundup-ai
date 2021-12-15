import { CompanyActionTypes } from '../action-types/companyActionTypes';

interface GetCompanyAction {
    type: CompanyActionTypes.GET_COMPANY,
}

interface GetCompanyFailed {
    type: CompanyActionTypes.GET_COMPANY_FAILED,
    payload: string
}

interface GetCompanySuccess {
    type: CompanyActionTypes.GET_COMPANY_SUCCESS,
    payload: []
}

export type Action = GetCompanyAction | GetCompanyFailed | GetCompanySuccess;

export const getCompany = (): GetCompanyAction => {
    return {
        type: CompanyActionTypes.GET_COMPANY
    }
}

export const getCompanyFailed = (message: string): GetCompanyFailed => {
    return {
        type: CompanyActionTypes.GET_COMPANY_FAILED,
        payload: message
    }
}

export const getCompanySuccess = (Company: []): GetCompanySuccess => {
    return {
        type: CompanyActionTypes.GET_COMPANY_SUCCESS,
        payload: Company
    }
}