import { IInventoryData } from './inventory';

type IInventoryProductRequest = Omit<IInventoryData, 'id'> & {
    productId: string;
};

export type IAddProductToInventoryRequest = IInventoryProductRequest;
export type IEditProductInInventoryRequest = Omit<IInventoryProductRequest, 'tags'>;
