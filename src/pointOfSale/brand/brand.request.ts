import { IBrandSchema } from 'pointOfSale/databaseModels/Brand';

/**
 * Request to get a single brand from server
 */
export interface IGetSingleBrand {
    id: string;
}

/**
 * Request to create new brand
 */
export type ICreateBrand = Omit<IBrandSchema, '_id' | 'createdAt' | 'updatedAt' | '__v'>;

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
