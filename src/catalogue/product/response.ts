import { IResponse } from '../../utilities';
import { IProductData } from './product';

export interface IGetAllProductResponse extends IResponse {
    data: IProductData[];
}

export interface ISearchProductResponse extends IResponse {
    data: IProductData[];
}

export interface IGetProductResponse extends IResponse {
    data: IProductData;
}

export interface ICreateProductResponse extends IResponse {
    data: IProductData;
}
export interface IEditProductResponse extends IResponse {
    data: IProductData;
}
