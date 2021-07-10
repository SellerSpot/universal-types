import { IResponse } from '../../utilities';

export interface IProductData {
    id: string;
    name: string;
    barcode?: string;
    description?: string;
    stockUnit?: {
        id: string;
        name: string;
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
export interface IProductResponse extends IResponse {
    data: IProductData;
}

export interface IGetAllProductResponse extends IResponse {
    data: IProductData[];
}
