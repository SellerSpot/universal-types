import { ESaleStatus, ISaleData } from './sales';

export interface IGetAllSalesHistoryQueryParams {
    type?: ESaleStatus;
    // pagination will be included here
}

export interface ICreateNewSaleRequest {
    payload?: ISaleData;
}

export interface IParkSaleRequest {
    payload?: ISaleData;
}
export interface IRetrieveSalePathParams {
    /**
     *  sale id
     */
    id?: string;
}

export interface IDeleteParkedSalePathParams {
    /**
     *  sale id
     */
    id?: string;
}
