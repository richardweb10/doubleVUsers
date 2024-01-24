import * as type from '../actions/index';

const userReducer = (state = {
    isLoading: false,
    data: [],
}, action: any) => {
    switch (action.type) {
        case type.GET_USERS_BY_NAME:
            return { ...state, isLoading: true };
        case type.GET_USERS_BY_NAME_RECEIVED:
            return { ...state, data: action.data, isLoading: false, error: false, };
        case type.GET_USERS_BY_NAME_FAILED:
            return { ...state, error: action.error, isLoading: false, };
        case type.GET_USER_PROFILE:
            return { ...state, isLoadingProfile: true };
        case type.GET_USER_PROFILE_RECEIVED:
            return { ...state, dataProfile: action.data, isLoadingProfile: false, errorProfile: false};
        case type.GET_USER_PROFILE_FAILED:
            return { ...state, errorProfile: action.error, isLoadingProfile: false, };
        default:
            return state;
    }
}

export default userReducer;