import { IResponse } from '../../utilities';
import { ISaleData } from './sales';

export interface IGetAllSalesHistoryResponse extends IResponse {
    data: {
        salesHistory: ISaleData[];
        // pagination might be added here in the future
    };
}

export interface ICreateNewSaleResponse extends IResponse {
    data: ISaleData;
}

export interface IParkSaleResponse extends IResponse {
    data: ISaleData;
}
export interface IRetrieveSaleResponse extends IResponse {
    data: ISaleData;
}

export interface IVoidSaleResponse extends IResponse {
    data: ISaleData;
}

export interface IDeleteParkedSaleResponse extends IResponse {
    data: ISaleData;
}
