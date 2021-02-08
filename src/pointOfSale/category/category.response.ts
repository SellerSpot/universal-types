import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utilities';

// field names for textFields involved in this API
export type fieldNames = 'name';

/**
 * Response when all categories are fetched from server
 */
export type IGetAllCategories = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema[];
    error?: string;
};

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
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a category is updated
 */
export type IUpdateCategory = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a category is deleted
 */
export type IDeleteCategory = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema;
    error?: string;
};
