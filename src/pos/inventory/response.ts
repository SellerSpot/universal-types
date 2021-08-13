import { IProductData } from '../..';
import { IResponse } from '../../utilities';
import { IInventoryData } from './inventory';

interface ISingleInventoryProductResponse extends IResponse {
    data: IInventoryData;
}

interface IMultiInventoryProductResponse extends IResponse {
    data: IInventoryData[];
}
export type IGetAllInventoryProductResponse = IMultiInventoryProductResponse;
export type IGetProductInventoryProductResponse = ISingleInventoryProductResponse;
export type IGetOutletInventoryProductResponse = IMultiInventoryProductResponse;
export type IEditInventoryProductResponse = ISingleInventoryProductResponse;
export type IAddProductToInventoryResponse = IMultiInventoryProductResponse;
export interface ISearchInventoryProductsResponse extends IResponse {
    data: {
        products: {
            // send both so that the api can show prods in inventory
            // as well as prods that match but not in inventory
            inventoryProducts?: IInventoryData[];
            catalogueProducts?: IProductData[];
        };
        // used to indicate if there was a problem in
        // getting the inventories for the search query
        searchStatus: boolean;
        error?: 'nonExistingProduct' | 'nonExistingInventory';
    };
}
