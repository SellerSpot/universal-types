import { IResponse } from '../utilities';
import { coreDbModels } from '@sellerspot/database-models';

export interface ISignupTenantResponse extends IResponse {
    data: Pick<coreDbModels.TenantModel.ITenant, 'email' | 'name' | 'plugins' | 'storeName'> & {
        id: string;
        domainName: string;
    };
}
