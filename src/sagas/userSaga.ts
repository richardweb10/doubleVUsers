import { call } from 'redux-saga/effects'
import * as types from '../actions/index'
import config from '../../config';
import API from '../services'
import { queryOk, querError } from './utilSaga';

export function* getUsersByName(action: any): Generator {
  try {
    const { params } = action
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const api = API.create(headers, config.URL_API_GITHUB);

    let data: any = yield call(
      api.users.getUsersByName,
      params)
    
    yield queryOk(data.data, types.GET_USERS_BY_NAME_FAILED, types.GET_USERS_BY_NAME_RECEIVED);
  } catch (error: any) {
    yield querError(error, types.GET_USERS_BY_NAME_FAILED);
  }
}

export function* getUserProfile(action: any): Generator {
    try {
      const { params } = action
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
  
  
      const api = API.create(headers, config.URL_API_GITHUB);
  
      let data: any = yield call(
        api.users.getUserProfile,
        params)
  
      yield queryOk(data.data, types.GET_USER_PROFILE_FAILED, types.GET_USER_PROFILE_RECEIVED);
    } catch (error: any) {
      yield querError(error, types.GET_USER_PROFILE_FAILED);
    }
  }