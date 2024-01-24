import * as types from './index';

export const getUsersByName = (params:any) => {
    return ({
        type: types.GET_USERS_BY_NAME,
        params,
    })
};

export const getUserProfile = (params:any) => {
    return ({
        type: types.GET_USER_PROFILE,
        params
    })
};