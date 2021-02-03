import { ISaleSchema } from 'pointOfSale/databaseModels/Sale';
import { IResponse } from '../../utilities';

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
export type IGetAllSales = IResponse & {
    data?: ISaleSchema[];
    error?: string;
};

/**
 * Response when sale is fetched from server
 */
export type IGetSale = IResponse & {
    data?: ISaleSchema;
    error?: string;
};

/**
 * Response when a new sale is created
 */
export type ICreateSale = IResponse & {
    data?: ISaleSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a sale is updated
 */
export type IUpdateSale = IResponse & {
    data?: ISaleSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a sale is deleted
 */
export type IDeleteSale = IResponse & {
    data?: ISaleSchema;
    error?: string;
};
