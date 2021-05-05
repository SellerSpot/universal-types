export interface ISignupTenantRequest {
    name: string;
    email: string;
    password: string;
    storeName: string;
    domainName: string;
}

export interface ISigninTenantRequest {
    tenantId: string;
    email: string;
    password: string;
}
