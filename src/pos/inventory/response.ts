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
        inventory?: IInventoryData[];
        catalogue?: IProductData[];
    };
}
