import { IInventoryData } from './inventory';

type IInventoryProductRequest = Omit<IInventoryData, 'id' | 'configurations'> & {
    configurations: Array<Omit<IInventoryData['configurations'][0], 'id'>>;
};

export type IAddProductToInventoryRequest = IInventoryProductRequest;
