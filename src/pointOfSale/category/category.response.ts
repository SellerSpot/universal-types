import { ICategorySchema } from 'pointOfSale/databaseModels/Category';
import { IResponse } from '../../utilities';

// field names for textFields involved in this API
export type fieldNames = 'name' | 'id';

/**
 * Response when all categories are fetched from server
 */
export type IGetAllCategories = IResponse & {
    data?: ICategorySchema[];
    error?: string;
};

/**
 * Response when category is fetched from server
 */
export type IGetCategory = IResponse & {
    data?: ICategorySchema;
    error?: string;
};

/**
 * Response when a new category is created
 */
export type ICreateCategory = IResponse & {
    data?: ICategorySchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a category is updated
 */
export type IUpdateCategory = IResponse & {
    data?: ICategorySchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a category is deleted
 */
export type IDeleteCategory = IResponse & {
    data?: ICategorySchema;
    error?: string;
};
