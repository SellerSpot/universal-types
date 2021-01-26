import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utils';

// field names for textFields involved in this API
export type fieldNames =
    | 'status'
    | 'products'
    | 'subTotal'
    | 'discountPercent'
    | 'totalTax'
    | 'grandTotal';

/**
 * Response when all sales are fetched from server
 */
export type IGetSales = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema[];
    error?: string;
};

/**
 * Response when sale is fetched from server
 */
export type IGetSale = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
    error?: string;
};

/**
 * Response when a new sale is created
 */
export type ICreateSale = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a sale is updated
 */
export type IUpdateSale = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a sale is deleted
 */
export type IDeleteSale = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.SaleModel.ISaleSchema;
    error?: string;
};
