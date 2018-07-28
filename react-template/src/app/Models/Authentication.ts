import { ImmutableObject } from 'seamless-immutable';

export interface Authentication {
    identificationNumber?: string | null;
    username?: string | null;
    password?: string | null;
    id_token?: string | null;
    rememberMe?: boolean | null;
}

export type ImmutableAuthentication = ImmutableObject<Authentication>;
