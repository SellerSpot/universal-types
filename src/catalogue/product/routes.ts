import { ICommonResourcePathParam } from '../../utilities';
import { ICreateProductRequest, IProductSearchPathParam } from './request';
import {
    ICreateProductResponse,
    IGetAllProductResponse,
    IGetProductResponse,
    ISearchProductResponse,
} from './response';

export enum PRODUCT {
    /**
     * @method GET
     * @type {IGetAllProductResponse} responseBody
     */
    GET_ALL = '/products',
    /**
     * @method GET
     * @type {ICommonResourcePathParam} pathParams
     * @type {IGetProductResponse} responseBody
     */
    GET = '/products/:id',
    /**
     * @method GET
     * @type {IProductSearchPathParam} pathParams
     * @type {ISearchProductResponse} responseBody
     */
    SEARCH = '/products/:query',
    /**
     * @method POST
     * @type {ICreateProductRequest} requestBody
     * @type {ICreateProductResponse} responseBody
     */
    CREATE = '/products',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type {IEditProductRequest} requestBody
     * @type {IEditProductResponse} responseBody
     */
    EDIT = '/products/:id',
    /**
     * @method DELETE
     * @type {ICommonResourcePathParam} pathParams
     */
    DELETE = '/products/:id',
}
