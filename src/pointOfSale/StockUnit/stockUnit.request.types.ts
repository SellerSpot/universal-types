import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Request to create new stock unit
 */
export type ICreateStockUnit = Omit<
    tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema,
    '_id' | 'createdAt' | 'updatedAt' | '__v'
>;

/**
 * Request to delete a stock unit
 */
export interface IDeleteStockUnit {
    id: string;
}
