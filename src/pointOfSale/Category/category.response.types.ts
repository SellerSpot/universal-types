import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Response when category is fetched from server
 */
export type IGetCategory = tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema;
