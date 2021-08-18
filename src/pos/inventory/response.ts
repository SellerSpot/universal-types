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
export type IGetInventoryByProductIdResponse = ISingleInventoryProductResponse;
export type IGetInventoryByOutletIdResponse = IMultiInventoryProductResponse;
export type IEditProductInInventoryResponse = ISingleInventoryProductResponse;
export type IAddProductToInventoryResponse = IMultiInventoryProductResponse;
export interface ISearchInventoryProductsResponse extends IResponse {
    data: {
        inventory?: IInventoryData[];
        catalogue?: IProductData[];
    };
}
