import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Response when stock unit is fetched from server
 */
export type IGetStockUnit = tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema;
