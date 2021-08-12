import { IOutletData } from '..';
import { IResponse } from '../../utilities';

export interface IGetAllOutletResponse extends IResponse {
    data: IOutletData[];
}

export interface IGetOutletResponse extends IResponse {
    data: IOutletData;
}

export interface ISearchOutletResponse extends IResponse {
    data: IOutletData[];
}

export interface ICreateOutletResponse extends IResponse {
    data: IOutletData;
}

export interface IEditOutletResponse extends IResponse {
    data: IOutletData;
}
