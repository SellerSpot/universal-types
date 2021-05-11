import { IResponse } from '../../utilities';

export interface IUserDetails {
    id: string;
    email: string;
    name: string;
}

export interface IDomainDetails {
    domainName: string;
    protocol: 'http' | 'https';
    isCustomDomain: boolean;
    appDomain: string;
}

export interface IStoreDetails {
    id: string;
    storeName: string;
    domainDetails: IDomainDetails;
}

export type IUserJwtTokenPayload = {
    userId: string;
    tenantId: string;
    // below properties will be attached by JWTManager.verify handler
    domainName?: string;
    exp?: number;
    iat?: number;
};

export interface ISignupTenantResponse extends IResponse {
    data: {
        store: IStoreDetails;
    };
}

export interface ISigninTenantResponse extends IResponse {
    data: {
        store: IStoreDetails;
    };
}

export interface ICurrentUserResponse extends IResponse {
    data: {
        store: IStoreDetails;
    };
}
