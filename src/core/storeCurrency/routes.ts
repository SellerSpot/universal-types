import { IUpdateStoreCurrencyRequest } from './request';
import { IGetAllStoreCurrenciesResponse, IUpdateStoreCurrencyResponse } from './response';

export enum STORE_CURRENCY {
    /**
     * Gives all the store currencies
     * @method GET
     * @type {IGetAllStoreCurrenciesResponse} responseBody
     */
    GET_ALL = '/storecurrency',
    /**
     * Updates the store currency for the currently scoped tenant with passed in currency id
     * @method PUT
     * @type {IUpdateStoreCurrencyRequest} requestBody
     * @type {IUpdateStoreCurrencyResponse} responseBody
     */
    UPDATE = '/storecurrency',
}
