import { IResponse, ITenantJWTToken } from '../utilities';

export interface IUserDetails {
    id: string;
    email: string;
    name: string;
}

export interface IStoreDetails {
    id: string;
    storeName: string;
    domainName: string;
}

export interface ISignupTenantResponse extends IResponse {
    data: {
        user: IUserDetails;
        store: IStoreDetails;
    };
}

export type ISigninTenantResposne = ISignupTenantResponse;

export interface ICurrentUserResponse extends IResponse {
    data: ITenantJWTToken;
}
