import { IStockUnitData } from './stockUnit';

export type ICreateStockUnitRequest = Pick<IStockUnitData, 'name' | 'unit'>;

export type IEditStockUnitRequest = Pick<IStockUnitData, 'name' | 'unit'>;
