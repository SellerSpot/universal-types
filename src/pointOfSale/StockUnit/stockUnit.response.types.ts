import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utils';

// field names for textFields involved in this API
type fieldNames = 'name';

/**
 * Response when a stockUnit is fetched from server
 */
export type IGetStockUnit = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema;
    error?: string;
};

/**
 * Response when a new stockUnit is created
 */
export type ICreateStockUnit = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema;
    error?: {
        [k in fieldNames]?: string;
    };
};

/**
 * Response when a stockUnit is deleted
 */
export type IDeleteStockUnit = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema;
    error?: string;
};
