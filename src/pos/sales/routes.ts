import {
    ICreateNewSaleRequest,
    IDeleteParkedSalePathParams,
    IGetAllSalesHistoryQueryParams,
    IParkSaleRequest,
    IRetrieveSalePathParams,
} from './request';
import {
    ICreateNewSaleResponse,
    IDeleteParkedSaleResponse,
    IGetAllSalesHistoryResponse,
    IParkSaleResponse,
    IRetrieveSaleResponse,
} from './response';

export enum SALES {
    /**
     * get all search history with query filter
     * @method GET
     * @type {IGetAllSalesHistoryQueryParams} - queryParams
     * @type {IGetAllSalesHistoryResponse} - responseBody
     */
    GET_ALL = '/sales',
    /**
     * get all search history with query filter
     * @method POST
     * @type {ICreateNewSaleRequest} - requestBody
     * @type {ICreateNewSaleResponse} - responseBody
     */
    CREATE_NEW_SALE = '/sales',
    /**
     * Park a sale by passing the saleData payload
     * @method POST
     * @type {IParkSaleRequest} - requestBody
     * @type {IParkSaleResponse} - responseBody
     */
    PARK_SALE = '/sales/park',
    /**
     * Park a sale by passing the saleData payload
     * @method DELETE
     * @type {IDeleteParkedSalePathParams} - pathParams
     * @type {IDeleteParkedSaleResponse} - responseBody
     */
    DELETE_PARKED_SALE = '/sales/park/:id',
    /**
     * Park a sale by passing the saleData payload
     * @method GET
     * @type {IRetrieveSalePathParams} - pathParams
     * @type {IRetrieveSaleResponse} - responseBody
     */
    RETRIEVE_SALE = '/sales/retrieve/:id',
}
