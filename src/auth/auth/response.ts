import { IResponse } from '../../utilities';

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
