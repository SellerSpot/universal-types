import { IProductData } from '../..';
import { ITaxSettingData } from '../../catalogue';
import { IOutletData } from '../../catalogue/outlet/outlet';

interface IInventoryDataDynamic {
    id?: string;
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
    configurations: IInventoryDataDynamic[];
};
