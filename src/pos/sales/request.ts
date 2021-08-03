import { ESaleStatus } from './sales';

export interface IGetAllSalesHistoryQueryParams {
    type?: ESaleStatus;
    // pagination will be included here
}
