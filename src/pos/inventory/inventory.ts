import { IProductData } from '../..';
import { ITaxSettingData } from '../../catalogue';
import { IOutletData } from '../../catalogue/outlet/outlet';

export interface IInventoryDataDynamic {
    outlet: string | IOutletData;
    stock: number;
    isActive: boolean;
    isTrack: boolean;
    markup: number;
    mrp: number;
    landingCost: number;
    sellingPrice: number;
    taxSetting: string | ITaxSettingData;
}
export type IInventoryData = IProductData & {
    tags: string[];
    configurations: {
        [key: string]: IInventoryDataDynamic;
    };
};

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
