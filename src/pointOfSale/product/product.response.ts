import { IProductSchema } from 'pointOfSale/databaseModels/Product';
import { IResponse } from '../../utilities';

/**
 * * Field names for textFields involved in this API used to send field based errors
 */
export type fieldNames =
    | 'name'
    | 'category'
    | 'product'
    | 'gtinNumber'
    | 'mrpPrice'
    | 'landingPrice'
    | 'sellingPrice'
    | 'availableStock'
    | 'stockUnit'
    | 'profitPercent'
    | 'taxBracket';

/**
 * Response when all products are fetched from server
 */
export type IGetAllProducts = IResponse & {
    data?: IProductSchema[];
    error?: string;
};

/**
 * Response when product is fetched from server
 */
export type IGetProduct = IResponse & {
    data?: IProductSchema;
    error?: string;
};

/**
 * Response when a new product is created
 */
export type ICreateProduct = IResponse & {
    data?: IProductSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a product is updated
 */
export type IUpdateProduct = IResponse & {
    data?: IProductSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a product is deleted
 */
export type IDeleteProduct = IResponse & {
    data?: IProductSchema;
    error?: string;
};

/**
 * Respose for when a product is searched for
 */
export type ISearchProduct = IResponse & {
    data?: {
        queryType: 'name' | 'barcode';
        results: IProductSchema[];
    };
    error?: string;
};
