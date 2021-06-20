import { ICreateStockUnitRequest, IEditStockUnitRequest } from './request';
import {
    ICreateStockUnitResponse,
    IDeleteStockUnitResponse,
    IEditStockUnitResponse,
    IGetAllStockUnitResponse,
    IGetStockUnitResponse,
} from './response';

export enum STOCK_UNIT {
    /**
     * @method GET
     * @type {IGetStockUnitResponse} - responseBody
     */
    GET = '/stockunits/:id',
    /**
     * @method GET
     * @type {IGetAllStockUnitResponse} - responseBody
     */
    GET_ALL = '/stockunits',
    /**
     /**
      * @method POST
      * @type {ICreateStockUnitRequest} - requestBody
      * @type {ICreateStockUnitResponse} - responseBody
      */
    CREATE = '/stockunits',
    /**
     * @method PUT
     * @type {IEditStockUnitRequest} - requestBody
     * @type {IEditStockUnitResponse} - responseBody
     */
    EDIT = '/stockunits/:id',
    /**
     * @method DELETE
     * @type {IDeleteStockUnitResponse} - responseBody
     */
    DELETE = '/stockunits/:id',
}
