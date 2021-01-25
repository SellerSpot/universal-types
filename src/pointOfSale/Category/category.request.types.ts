import { tenantDbModels } from '@sellerspot/database-models';
/**
 * Request to create new category
 */
export type ICreateCategory = Omit<
    tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema,
    '_id' | 'createdAt' | 'updatedAt'
>;

/**
 * Request to delete a category
 */
export interface IDeleteCategory {
    id: string;
}
