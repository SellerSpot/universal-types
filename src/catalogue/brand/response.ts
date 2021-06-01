import { IResponse } from '../../utilities';

interface IBrandData {
    id: string;
    name: string;
}

export interface IListBrandResponse extends IResponse {
    data: IBrandData[];
}

export interface IGetBrandResponse extends IResponse {
    data: IBrandData[];
}

export interface ICreateBrandResponse extends IResponse {
    data: IBrandData;
}

export interface IEditBrandResponse extends IResponse {
    data: IBrandData;
}

export interface IDeleteBrandResponse extends IResponse {
    data: IBrandData;
}
