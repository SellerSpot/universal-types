import { IBrandSchema } from './Brand';
import { ICategorySchema } from './Category';
import { IStockUnitSchema } from './StockUnit';
import { ITaxBracketSchema } from './TaxBracket';

export interface IProductSchema {
    _id?: string;
    name: string;
    category: ICategorySchema;
    brand: IBrandSchema;
    gtinNumber?: string;
    mrpPrice?: number;
    landingPrice?: number;
    sellingPrice: number;
    stockInformation: {
        availableStock: number;
        stockUnit: IStockUnitSchema;
    };
    profitPercent?: number;
    taxBracket: ITaxBracketSchema[];
    createdAt?: string;
    updatedAt?: string;
    __v?: string;
}
