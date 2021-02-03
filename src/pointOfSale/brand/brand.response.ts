import { IBrandSchema } from 'pointOfSale/databaseModels/Brand';
import { IResponse } from '../../utilities';

// field names for textFields involved in this API
export type fieldNames = 'name' | 'id';

/**
 * Response when all brands are fetched from server
 */
export type IGetAllBrands = IResponse & {
    data?: IBrandSchema[];
    error?: string;
};

/**
 * Response when brand is fetched from server
 */
export type IGetBrand = IResponse & {
    data?: IBrandSchema;
    error?: string;
};

/**
 * Response when a new brand is created
 */
export type ICreateBrand = IResponse & {
    data?: IBrandSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a brand is updated
 */
export type IUpdateBrand = IResponse & {
    data?: IBrandSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a brand is deleted
 */
export type IDeleteBrand = IResponse & {
    data?: IBrandSchema;
    error?: string;
};
