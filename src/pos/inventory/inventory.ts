import { IProductData } from '../..';
import { ITaxBracketData } from '../../catalogue';
import { IOutletData } from '../../catalogue/outlet/outlet';

export interface IInventoryOutletData {
    outlet: string | IOutletData;
    stock: number;
    isActive: boolean;
    isTrack: boolean;
    markup: number;
    mrp: number;
    landingCost: number;
    sellingPrice: number;
    taxBracket: string | ITaxBracketData;
}

export interface IInventoryData extends IProductData {
    outlets: {
        /**
         * key is the outlet id
         */
        [key: string]: IInventoryOutletData;
    };
}

export interface IDeleteInventoryResourcePathParam {
    productid: string;
    outletid?: string;
}

export interface IInventoryResourcePathParam {
    outletid?: string;
}

export interface IGetProductInventoryResourcePathParam {
    productid?: string;
}

export interface IGetOutletInventoryResourcePathParam {
    outletid?: string;
}
