import { IProductSchema } from 'pointOfSale/databaseModels/Product';

/**
 * Request to get a single product from server
 */
export interface IGetSingleProduct {
    id: string;
}

/**
 * Request to create new product
 */
export type ICreateProduct = Omit<IProductSchema, '_id' | 'createdAt' | 'updatedAt' | '__v'>;

/**
 * Request to update a product data
 */
export interface IUpdateProduct {
    id: string;
    productData: ICreateProduct;
}

/**
 * Request to delete a product
 */
export interface IDeleteProduct {
    id: string;
}

/**
 * Request to search for product
 */
export interface ISearchProduct {
    query: string;
}
