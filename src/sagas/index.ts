import { takeLatest, all } from "redux-saga/effects";
import * as types from "./../actions";
import { getUsersByName, getUserProfile } from './userSaga';

function* actionWatcherUser() {
    yield takeLatest(types.GET_USERS_BY_NAME, getUsersByName);
    yield takeLatest(types.GET_USER_PROFILE, getUserProfile); 
}

export default function* rootSaga() {
    yield all([
      actionWatcherUser(),
    ]);
}