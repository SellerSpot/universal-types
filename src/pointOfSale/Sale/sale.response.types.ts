import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Response when a sale is fetched from server
 */
export type IGetSale = tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
