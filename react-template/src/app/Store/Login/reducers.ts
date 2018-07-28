import { AnyAction } from 'redux';
import { createReducer, ActionOf } from 'reduxsauce';
import * as Immutable from 'seamless-immutable';
import { ImmutableLoginState, LoginState } from 'app/Store/Login/state';
import { LoginActionType } from 'app/Store/Login/types';
import { HttpRequestStatus } from 'app/Models/HttpRequestStatus';
import { Authentication } from 'app/Models/Authentication';

const INITIAL_STATE: ImmutableLoginState = Immutable.from<LoginState>({
    status: HttpRequestStatus.NOOP,
    token: null,
    acceptedTerm: false,
    rememberMe: false,
    username: null,
    name: null,
    identificationNumber: null
});

const login = (state: ImmutableLoginState, { payload }: ActionOf<Authentication>) => {
    return payload ? state.merge({ status: HttpRequestStatus.ONGOING, username: payload.username }) : state;
};

const loginSuccess = (state: ImmutableLoginState, { payload }: AnyAction & { payload?: Authentication }) => {
    return payload ? state.merge({ status: HttpRequestStatus.SUCCESS, token: payload.id_token }) : state;
};

const loginError = (state: ImmutableLoginState) => {
    return state.merge({ status: HttpRequestStatus.ERROR });
};

const cleanState = (state: ImmutableLoginState) => {
    return state.merge({ status: HttpRequestStatus.NOOP });
};

const LoginReducer = createReducer<ImmutableLoginState>(INITIAL_STATE, {
    [LoginActionType.LOGIN]: login,
    [LoginActionType.LOGIN_SUCCESS]: loginSuccess,
    [LoginActionType.LOGIN_ERROR]: loginError,
    [LoginActionType.CLEAN_STATE]: cleanState
});

export default LoginReducer;
