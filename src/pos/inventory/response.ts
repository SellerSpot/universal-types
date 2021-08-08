import { IResponse } from '../../utilities';
import { IInventoryData } from './inventory';

export interface IGetAllInventoryProductResponse extends IResponse {
    data: IInventoryData[];
}

export interface IGetInventoryProductResponse extends IResponse {
    data: IInventoryData[];
}

export interface IAddProductToInventoryResponse extends IResponse {
    data: IInventoryData[];
}

export interface ISearchInventoryProductsResponse extends IResponse {
    data: IInventoryData[];
}
