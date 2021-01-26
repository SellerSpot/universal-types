import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Request to create new sale
 */
export type ICreateSale = Omit<
    tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema,
    '_id' | 'createdAt' | 'updatedAt' | '__v'
>;

/**
 * Request to delete a sale
 */
export interface IDeleteSale {
    id: string;
}
