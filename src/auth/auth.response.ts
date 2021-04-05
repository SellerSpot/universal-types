import { IResponse } from 'utilities';
import { coreDbModels } from '@sellerspot/database-models';

export type ISignupTenantResponse = IResponse & {
    data: coreDbModels.TenantModel.ITenant;
    error: string;
};
