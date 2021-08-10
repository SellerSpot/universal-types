import { IResponse } from '../../utilities';
import { IStockUnitData } from './stockUnit';

interface ISingleStockUnitResponse extends IResponse {
    data: IStockUnitData;
}

interface IMultiStockUnitResponse extends IResponse {
    data: IStockUnitData[];
}

export type IGetAllStockUnitResponse = IMultiStockUnitResponse;
export type ISearchStockUnitResponse = IMultiStockUnitResponse;
export type IGetStockUnitResponse = ISingleStockUnitResponse;
export type ICreateStockUnitResponse = ISingleStockUnitResponse;
export type IEditStockUnitResponse = ISingleStockUnitResponse;
export type IDeleteStockUnitResponse = ISingleStockUnitResponse;
