import { all, takeLatest } from 'redux-saga/effects';
import { LoginActions } from 'app/Store/Login/actions';
import { login } from 'app/Store/Login/sagas';

export default function* rootSagas() {
    yield all([takeLatest(LoginActions.login, login)]);
}
