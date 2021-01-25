import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Request to create new product
 */
export type ICreateProduct = Omit<
    tenantDbModels.pointOfSaleModels.ProductModel.IProductSchema,
    '_id' | 'createdAt' | 'updatedAt'
>;

/**
 * Request to delete a product
 */
export interface IDeleteProduct {
    id: string;
}
