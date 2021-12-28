import { PriviledgesActionTypes } from '../action-types/priviledgesActionTypes';

interface GetPriviledgesAction {
    type: PriviledgesActionTypes.GET_PRIVLIEDGES,
}

interface GetPriviledgesFailed {
    type: PriviledgesActionTypes.GET_PRIVLIEDGES_FAILED,
    payload: string
}

interface GetPriviledgesSuccess {
    type: PriviledgesActionTypes.GET_PRIVLIEDGES_SUCCESS,
    payload: []
}

export type Action = GetPriviledgesAction | GetPriviledgesFailed | GetPriviledgesSuccess;

export const fetchPriviledges = (): GetPriviledgesAction => {
    return {
        type: PriviledgesActionTypes.GET_PRIVLIEDGES
    }
}

export const fetchPriviledgesFailed = (message: string): GetPriviledgesFailed => {
    return {
        type: PriviledgesActionTypes.GET_PRIVLIEDGES_FAILED,
        payload: message
    }
}

export const fetchPriviledgesSuccess = (Priviledges: []): GetPriviledgesSuccess => {
    return {
        type: PriviledgesActionTypes.GET_PRIVLIEDGES_SUCCESS,
        payload: Priviledges
    }
}