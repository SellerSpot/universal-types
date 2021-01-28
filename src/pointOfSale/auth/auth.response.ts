import { IResponse } from '../../utils';

export interface IAuth {
    name: string;
    email: string;
    _id: string;
}

export interface ITokenPayload {
    name: string;
    email: string;
    _id: string;
    auth?: IAuth;
}

export type IAuthorizeTenantResponse = IResponse & {
    data?: ITokenPayload & { token: string };
    error?: string;
};

export type IVerifyTokenResponse = IResponse & {
    data?: ITokenPayload;
    error?: string;
};
