import { IResponse } from '../../utilities';
import { IInventoryData } from './inventory';

interface ISingleInventoryProductResponse extends IResponse {
    data: IInventoryData;
}

interface IMultiInventoryProductResponse extends IResponse {
    data: IInventoryData[];
}
export type IGetAllInventoryProductResponse = IMultiInventoryProductResponse;
export type IGetInventoryProductResponse = ISingleInventoryProductResponse;
export type IAddProductToInventoryResponse = IMultiInventoryProductResponse;
export type ISearchInventoryProductsResponse = IMultiInventoryProductResponse;
