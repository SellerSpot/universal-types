import { IResponse } from '../../utils';

export interface ITokenPayload {
    name: string;
    email: string;
    _id: string;
}

export type IAuthorizeTenantResponse = IResponse & {
    data?: ITokenPayload & { tenantAppToken: string };
    error?: string;
};

export type IVerifyTokenResponse = IResponse & {
    data?: ITokenPayload;
    error?: string;
};
