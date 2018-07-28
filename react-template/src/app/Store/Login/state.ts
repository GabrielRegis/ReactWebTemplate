import { HttpRequestStatus } from 'app/Models/HttpRequestStatus';
import { ImmutableObject } from 'seamless-immutable';

export interface LoginState {
    username?: string | null;
    password?: string | null;
    status?: HttpRequestStatus | null;
    name?: string | null;
    identificationNumber?: string | null;
    token?: string | null;
    acceptedTerm?: boolean | null;
    rememberMe?: boolean | null;
}

export type ImmutableLoginState = ImmutableObject<LoginState>;
