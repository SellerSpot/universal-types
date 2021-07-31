import { IResponse } from '../../utilities';

export interface IStockUnitData {
    id: string;
    name: string;
    unit: string;
    isDefault?: boolean;
}

interface IStockUnitRespone extends IResponse {
    data: IStockUnitData;
}

interface IAllStockUnitRespone extends IResponse {
    data: IStockUnitData[];
}

export type IGetAllStockUnitResponse = IAllStockUnitRespone;
export type ISearchStockUnitResponse = IAllStockUnitRespone;
export type IGetStockUnitResponse = IStockUnitRespone;
export type ICreateStockUnitResponse = IStockUnitRespone;
export type IEditStockUnitResponse = IStockUnitRespone;
export type IDeleteStockUnitResponse = IStockUnitRespone;
