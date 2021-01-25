import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Request to create new stock unit
 */
export type ICreateStockUnit = Pick<
    tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema,
    '_id' | 'createdAt' | 'updatedAt'
>;

/**
 * Request to delete a stock unit
 */
export interface IDeleteStockUnit {
    id: string;
}
