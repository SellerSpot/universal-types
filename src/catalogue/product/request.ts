import { IProductData } from './product';

export interface IProductSearchPathParam {
    query: string;
}

export type IEditProductRequest = Omit<IProductData, 'id'>;

export type ICreateProductRequest = Omit<IProductData, 'id'>;
