import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utils';

// field names for textFields involved in this API
type fieldNames =
    | 'name'
    | 'category'
    | 'brand'
    | 'gtinNumber'
    | 'mrpPrice'
    | 'landingPrice'
    | 'sellingPrice'
    | 'availableStock'
    | 'stockUnit'
    | 'profitPercent'
    | 'taxBracket';

/**
 * Response when a product is fetched from server
 */
export type IGetProduct = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.ProductModel.IProductSchema;
    error?: string;
};

/**
 * Response when a new product is created
 */
export type ICreateProduct = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.ProductModel.IProductSchema;
    error?: {
        [k in fieldNames]?: string;
    };
};

/**
 * Response when a product is deleted
 */
export type IDeleteProduct = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.ProductModel.IProductSchema;
    error?: string;
};
