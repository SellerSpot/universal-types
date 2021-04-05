import { coreDbModels } from '@sellerspot/database-models';

export type ISignupTenantRequest = Pick<
    coreDbModels.TenantModel.ITenant,
    'name' | 'email' | 'password' | 'storeName'
>;
