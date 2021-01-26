import { tenantDbModels } from '@sellerspot/database-models';
/**
 * Request to create new brand
 */
export type ICreateBrand = Omit<
    tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema,
    '_id' | 'createdAt' | 'updatedAt' | '__v'
>;

/**
 * Request to delete a brand
 */
export interface IDeleteBrand {
    id: string;
}
