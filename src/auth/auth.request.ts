export interface ISignupTenantRequest {
    name: string;
    email: string;
    password: string;
    storeName: string;
    domainName: string;
}

export type ISigninTenantRequest = Pick<ISignupTenantRequest, 'email' | 'password'>;
