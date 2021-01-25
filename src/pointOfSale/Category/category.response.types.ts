import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from 'utils';

// field names for textFields involved in this API
type fieldNames = 'name';

/**
 * Response when category is fetched from server
 */
export type IGetCategory = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema;
    error?: string;
};

/**
 * Response when a new category is created
 */
export type ICreateCategory = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema;
    error?: {
        [k in fieldNames]?: string;
    };
};

/**
 * Response when a new category is created
 */
export type IDeleteCategory = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema;
    error?: string;
};
