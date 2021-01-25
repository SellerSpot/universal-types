import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from 'utils';

/**
 * Response when brand is fetched from server
 */

export type IGetBrand = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema;
    error?: string;
};
