import { IResponse } from '../../utilities';

export interface IStockUnitData {
    id: string;
    name: string;
    isDefault: boolean;
}

interface IStockUnitRespone extends IResponse {
    data: IStockUnitData;
}

export interface IGetAllStockUnitResponse extends IResponse {
    data: IStockUnitData[];
}

export type IGetStockUnitResponse = IStockUnitRespone;
export type ICreateStockUnitResponse = IGetStockUnitResponse;
export type IEditStockUnitResponse = IGetStockUnitResponse;
export type IDeleteStockUnitResponse = IGetStockUnitResponse;
