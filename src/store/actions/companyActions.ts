import { CompanyActionTypes } from '../action-types/companyActionTypes';

// Get Company

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

// Create Company

interface CreateCompanyAction {
    type: CompanyActionTypes.CREATE_COMPANY,
}

interface CreateCompanyFailed {
    type: CompanyActionTypes.CREATE_COMPANY_FAILED,
    payload: string
}

interface CreateCompanySuccess {
    type: CompanyActionTypes.CREATE_COMPANY_SUCCESS,
}

export const createCompanyAction = (): CreateCompanyAction => {
    return {
        type: CompanyActionTypes.CREATE_COMPANY
    }
}

export const createCompanyFailedAction = (message: string): CreateCompanyFailed => {
    return {
        type: CompanyActionTypes.CREATE_COMPANY_FAILED,
        payload: message
    }
}

export const createCompanySuccessAction = (): CreateCompanySuccess => {
    return {
        type: CompanyActionTypes.CREATE_COMPANY_SUCCESS
    }
}

// Delete Company

interface DeleteCompanyAction {
    type: CompanyActionTypes.DELETE_COMPANY,
}

interface DeleteCompanyFailed {
    type: CompanyActionTypes.DELETE_COMPANY_FAILED,
    payload: string
}

interface DeleteCompanySuccess {
    type: CompanyActionTypes.DELETE_COMPANY_SUCCESS,
}

export const deleteCompanyAction = (): DeleteCompanyAction => {
    return {
        type: CompanyActionTypes.DELETE_COMPANY
    }
}

export const deleteCompanyFailedAction = (message: string): DeleteCompanyFailed => {
    return {
        type: CompanyActionTypes.DELETE_COMPANY_FAILED,
        payload: message
    }
}

export const deleteCompanySuccessAction = (): DeleteCompanySuccess => {
    return {
        type: CompanyActionTypes.DELETE_COMPANY_SUCCESS
    }
}

export type Action = DeleteCompanyAction | DeleteCompanySuccess | DeleteCompanyFailed | GetCompanyAction | GetCompanyFailed | GetCompanySuccess | CreateCompanyAction | CreateCompanyFailed | CreateCompanySuccess;