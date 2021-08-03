import { IProductData, ITaxBracketData, ITaxGroupData } from '../..';

export interface IInventoryData {
    product: IProductData;
    isActive: boolean;
    tags?: [string];
    stock: number;
    isTrack: boolean;
    markup?: number;
    landingCost?: number;
    maxRetailPrice?: number;
    sellingPrice: number;
    taxSetting?: ITaxBracketData | ITaxGroupData;
}
