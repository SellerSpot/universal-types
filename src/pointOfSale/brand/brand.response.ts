import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utils';

// field names for textFields involved in this API
export type fieldNames = 'name' | 'id';

/**
 * Response when all brands are fetched from server
 */
export type IGetBrands = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema[];
    error?: string;
};

/**
 * Response when brand is fetched from server
 */
export type IGetBrand = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema;
    error?: string;
};

/**
 * Response when a new brand is created
 */
export type ICreateBrand = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a brand is updated
 */
export type IUpdateBrand = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a brand is deleted
 */
export type IDeleteBrand = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema;
    error?: string;
};
