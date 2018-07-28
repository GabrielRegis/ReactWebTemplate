import { LoginActions } from 'app/Store/Login/actions';
import { put, call } from 'redux-saga/effects';
import { ActionOf } from 'reduxsauce';
import { ApiResponse } from 'apisauce';
import { Authentication } from 'app/Models/Authentication';
import loginApi from 'app/Api/LoginRepository/LoginApi';
import { SagaIterator } from 'redux-saga';
import { setAuthToken } from 'app/Api/api';

export function* login(action: ActionOf<Authentication>): SagaIterator {
    const response: ApiResponse<Authentication> = yield call(loginApi.login, action.payload);
    if (response.ok) {
        setAuthToken(String(response.data!.id_token));
    }

    response.ok ? yield put(LoginActions.loginSuccess(response.data!)) : yield put(LoginActions.loginError());
}
