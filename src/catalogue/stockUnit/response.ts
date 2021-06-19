import { IResponse } from '../../utilities';

export interface IStockUnitData {
    id: string;
    name: string;
    isDefault: boolean;
}

export interface IGetAllStockUnitResponse extends IResponse {
    data: IStockUnitData[];
}

export interface IGetStockUnitResponse extends IResponse {
    data: IStockUnitData;
}

export interface ICreateStockUnitResponse extends IResponse {
    data: IStockUnitData;
}

export interface IEditStockUnitResponse extends IResponse {
    data: IStockUnitData;
}

export interface IDeleteStockUnitResponse extends IResponse {
    data: IStockUnitData;
}
