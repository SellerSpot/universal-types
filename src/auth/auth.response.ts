import { IResponse } from '../utilities';

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

/**
 * this response will be sent for both authorize tenant and authenticate user (only differenc is auth property in the payload body differs)
 */
export type IAuthorizeTenantResponse = IResponse & {
    data?: ITokenPayload & { token: string };
    error?: string;
};

export type IVerifyTokenResponse = IResponse & {
    data?: ITokenPayload;
    error?: string;
};
