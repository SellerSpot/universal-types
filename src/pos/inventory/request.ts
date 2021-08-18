import { IInventoryData } from './inventory';

type IInventoryProductRequest = {
    productId: string;
    outlets: Array<IInventoryData['outlets'][0]>;
};

export type IAddProductToInventoryRequest = IInventoryProductRequest;
export type IEditProductInInventoryRequest = IInventoryProductRequest;
