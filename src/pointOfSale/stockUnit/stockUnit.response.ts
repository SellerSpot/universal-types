import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utilities';

// field names for textFields involved in this API
export type fieldNames = 'name' | 'id';

/**
 * Response when all stockUnits are fetched from server
 */
export type IGetAllStockUnits = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema[];
    error?: string;
};

/**
 * Response when stockUnit is fetched from server
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
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a stockUnit is updated
 */
export type IUpdateStockUnit = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a stockUnit is deleted
 */
export type IDeleteStockUnit = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema;
    error?: string;
};
