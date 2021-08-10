import { IBrandData, ICategoryData, IStockUnitData } from '..';

export interface IProductData {
    id: string;
    name: string;
    barcode?: string;
    description?: string;
    stockUnit?: string | IStockUnitData;
    brand?: string | IBrandData;
    category?: string | ICategoryData;
}
