import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Response when a product is fetched from server
 */
export type IGetProduct = tenantDbModels.pointOfSaleModels.ProductModel.IProductSchema;
