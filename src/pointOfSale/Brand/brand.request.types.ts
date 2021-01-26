import { tenantDbModels } from '@sellerspot/database-models';
/**
 * Request to get a single brand from server
 */
export interface IGetSingleBrand {
    id: string;
}

/**
 * Request to create new brand
 */
export type ICreateBrand = Omit<
    tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema,
    '_id' | 'createdAt' | 'updatedAt' | '__v'
>;

/**
 * Request to update a brand data
 */
export interface IUpdateBrand {
    id: string;
    brandData: ICreateBrand;
}

/**
 * Request to delete a brand
 */
export interface IDeleteBrand {
    id: string;
}
