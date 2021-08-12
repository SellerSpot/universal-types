import { IProductData } from './product';

export type IEditProductRequest = Omit<IProductData, 'id'>;

export type ICreateProductRequest = Omit<IProductData, 'id'>;
