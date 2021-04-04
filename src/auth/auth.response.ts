import { IResponse } from 'utilities';

export type ISignupTenantResponse = IResponse & {
    data: { id: string; name: string };
    error: string;
};
