import { createAction } from 'redux-actions';
import { LoginActionType } from './types';
import { Omit } from 'react-redux';
import { Authentication } from 'app/Models/Authentication';
export const LoginActions = {
    login: createAction<Omit<Authentication, 'id_token'>>(LoginActionType.LOGIN),

    loginSuccess: createAction<Omit<Authentication, 'password'>>(LoginActionType.LOGIN_SUCCESS),

    loginError: createAction(LoginActionType.LOGIN_ERROR),

    cleanState: createAction(LoginActionType.CLEAN_STATE)
};
export type LoginActions = typeof LoginActions;
