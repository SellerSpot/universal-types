import { IGetAllSalesHistoryQueryParams } from './request';
import { IGetAllSalesHistoryResponse } from './response';

export enum SALES {
    /**
     * get all search history with query filter
     * @method GET
     * @type {IGetAllSalesHistoryQueryParams} - queryParams
     * @type {IGetAllSalesHistoryResponse} - response body
     */
    GET_ALL = '/sales',
}
