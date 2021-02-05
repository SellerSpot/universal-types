import { tenantDbModels } from '@sellerspot/database-models';
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

// IProductSchema modified to accept populated values
type IPopulatedProductSchema = Omit<
    tenantDbModels.pointOfSaleModels.ProductModel.IProductSchema,
    'category' | 'brand' | 'stockInformation' | 'taxBracket'
> & {
    category: tenantDbModels.pointOfSaleModels.CategoryModel.ICategorySchema;
    brand: tenantDbModels.pointOfSaleModels.BrandModel.IBrandSchema;
    stockInformation: {
        availableStock: number;
        stockUnit: tenantDbModels.pointOfSaleModels.StockUnitModel.IStockUnitSchema;
    };
    taxBracket: tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema[];
};

/**
 * Response when all products are fetched from server
 */
export type IGetAllProducts = IResponse & {
    data?: IPopulatedProductSchema[];
    error?: string;
};

/**
 * Response when product is fetched from server
 */
export type IGetProduct = IResponse & {
    data?: IPopulatedProductSchema;
    error?: string;
};

/**
 * Response when a new product is created
 */
export type ICreateProduct = IResponse & {
    data?: IPopulatedProductSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a product is updated
 */
export type IUpdateProduct = IResponse & {
    data?: IPopulatedProductSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a product is deleted
 */
export type IDeleteProduct = IResponse & {
    data?: IPopulatedProductSchema;
    error?: string;
};

/**
 * Respose for when a product is searched for
 */
export type ISearchProduct = IResponse & {
    data?: {
        queryType: 'name' | 'barcode';
        results: IPopulatedProductSchema[];
    };
    error?: string;
};
