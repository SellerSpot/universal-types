import { IResponse } from '../../utilities';
import { IBrandData } from './brand';

interface ISingleBrandResponse extends IResponse {
    data: IBrandData;
}

interface IMultiBrandResponse extends IResponse {
    data: IBrandData;
}

export type IGetAllBrandResponse = IMultiBrandResponse;
export type ISearchBrandResponse = IMultiBrandResponse;
export type IGetBrandResponse = ISingleBrandResponse;
export type ICreateBrandResponse = ISingleBrandResponse;
export type IEditBrandResponse = ISingleBrandResponse;
export type IDeleteBrandResponse = ISingleBrandResponse;
