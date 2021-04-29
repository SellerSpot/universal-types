export interface ISignupTenantRequest {
    name: string;
    email: string;
    password: string;
    storeName: string;
    domainName: string;
}

export type TSigninTenantRequest = Pick<ISignupTenantRequest, 'email' | 'password'>;
