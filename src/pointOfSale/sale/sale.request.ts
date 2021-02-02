import { ISaleSchema } from 'pointOfSale/databaseModels/Sale';

/**
 * Request to get a single sale from server
 */
export interface IGetSingleSale {
    id: string;
}

/**
 * Request to create new sale
 */
export type ICreateSale = Omit<ISaleSchema, '_id' | 'createdAt' | 'updatedAt' | '__v'>;

/**
 * Request to update a sale data
 */
export interface IUpdateSale {
    id: string;
    saleData: ICreateSale;
}

/**
 * Request to delete a sale
 */
export interface IDeleteSale {
    id: string;
}
