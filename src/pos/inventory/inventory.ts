import { IProductData, ITaxBracketData, ITaxGroupData } from '../..';
import { IOutletData } from '../../catalogue/outlet/outlet';

export interface IInventoryData {
    product: IProductData;
    isActive: boolean;
    tags?: [string];
    stock: number;
    isTrack: boolean;
    markup?: number;
    landingCost?: number;
    mrp?: number;
    sellingPrice: number;
    outlet: IOutletData;
    taxSetting?: ITaxBracketData | ITaxGroupData;
}
