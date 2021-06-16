import { IResponse } from '../../utilities';

export interface IProductData {
    id: string;
    name: string;
    barcode?: string;
    description?: string;
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
