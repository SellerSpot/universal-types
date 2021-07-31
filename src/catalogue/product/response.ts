import { IResponse } from '../../utilities';

export interface IProductData {
    id: string;
    name: string;
    barcode?: string;
    description?: string;
    stockUnit?: {
        id: string;
        name: string;
        unit: string;
    };
    brand?: {
        id: string;
        name: string;
    };
    category?: {
        id: string;
        title: string;
    };
}

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
