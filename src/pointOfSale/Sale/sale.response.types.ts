import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from 'utils';

/**
 * Response when a sale is fetched from server
 */
export type IGetSale = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
    error?: string;
};

/**
 * Response when a new sale is created
 */
export type ICreateSale = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
    error?: string;
};

/**
 * Response when a sale is deleted
 */
export type IDeleteSale = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
    error?: string;
};
