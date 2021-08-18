import { ISearchResourceQueryParam } from '../../utilities';
import { IInventoryData } from './inventory';

type IInventoryProductRequest = {
    productId: string;
    outlets: Array<IInventoryData['outlets'][0]>;
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
