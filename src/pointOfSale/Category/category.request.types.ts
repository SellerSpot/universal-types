import { tenantDbModels } from '@sellerspot/database-models';
/**
 * Request to get a single category from server
 */
export interface IGetSingleCategory {
    id: string;
}

/**
 * Request to create new category
 */
export type ICreateCategory = Omit<
    tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema,
    '_id' | 'createdAt' | 'updatedAt' | '__v'
>;

/**
 * Request to update a category data
 */
export interface IUpdateCategory {
    id: string;
    categoryData: ICreateCategory;
}

/**
 * Request to delete a category
 */
export interface IDeleteCategory {
    id: string;
}
