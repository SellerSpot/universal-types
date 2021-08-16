import { ISearchResourceQueryParam } from '../../utilities';
import { IInventoryData } from './inventory';

type IInventoryProductRequest = Omit<IInventoryData, 'id'> & {
    productId: string;
};

export interface ISearchInventoryQueryParam extends ISearchResourceQueryParam {
    /**
     * collections to search for
     * @default all
     */
    lookup?: 'all' | 'inventory' | 'catalogue';
}

export type IAddProductToInventoryRequest = IInventoryProductRequest;
export type IEditProductInInventoryRequest = IInventoryProductRequest;
