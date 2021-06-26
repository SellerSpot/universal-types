import { ICreateBrandRequest, IEditBrandRequest } from './request';
import {
    ICreateBrandResponse,
    IEditBrandResponse,
    IGetAllBrandResponse,
    IGetBrandResponse,
} from './response';

export enum BRAND {
    /**
     * @method GET
     * @type {IGetBrandResponse} - responseBody
     */
    GET = '/brands/:id',
    /**
     * @method GET
     * @type {IGetAllBrandResponse} - responseBody
     */
    GET_ALL = '/brands',
    /**
     * @method POST
     * @type {ICreateBrandRequest} - requestBody
     * @type {ICreateBrandResponse} - responseBody
     */
    CREATE = '/brands',
    /**
     * @method PUT
     * @type {IEditBrandRequest} - requestBody
     * @type {IEditBrandResponse} - responseBody
     */
    EDIT = '/brands/:id',
    /**
     * @method DELETE
     * @type {IDeleteBrandResponse} - responseBody
     */
    DELETE = '/brands/:id',
}
