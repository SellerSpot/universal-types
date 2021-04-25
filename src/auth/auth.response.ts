import { IResponse } from '../utilities';

export interface ISignupTenantResponse extends IResponse {
    data: {
        email: string;
        name: string;
        storeName: string;
        id: string;
        domainName: string;
    };
}

export interface ICurrentUserResponse extends IResponse {
    data: Pick<ISignupTenantResponse, 'data'>[];
}
