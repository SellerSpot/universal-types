import {
    ICreateCategoryRequest,
    IEditCategoryPositionRequest,
    IEditCategoryRequest,
    IEditCategorySiblingOrderRequest,
} from './request';
import {
    ICreateCategoryResponse,
    IEditCategoryPositionResponse,
    IEditCategoryResponse,
    IEditCategorySiblingOrderResponse,
    IGetAllCategoryResponse,
    IGetCategoryResponse,
} from './response';

export enum CATEGORY {
    /**
     * @method GET
     * @type {IGetAllCategoryResponse} responseBody
     */
    GET_ALL = '/categories',

    /**
     * @method GET
     * @pathparam catagoryid
     * @type {IGetCategoryResponse} responseBody
     */
    GET = '/categories/:id',

    /**
     * @method POST
     * @type {ICreateCategoryRequest} requestBody
     * @type {ICreateCategoryResponse} responseBody
     */
    CREATE = '/categories',

    /**
     * @method PUT
     * @pathparam catagoryid
     * @type {IEditCategoryRequest} requestBody
     * @type {IEditCategoryResponse} responseBody
     */
    EDIT = '/categories/:id',

    /**
     * @method PUT
     * @pathparam {catagoryid} parent id of the sibling should be sent
     * @type {IEditCategorySiblingOrderRequest} requestBody
     * @type {IEditCategorySiblingOrderResponse} responseBody
     */
    EDIT_SIBLING_ORDER = '/categories/:id/siblingorder',

    /**
     * @method PUT
     * @pathparam catagoryid
     * @type {IEditCategoryPositionRequest} requestBody
     * @type {IEditCategoryPositionResponse} responseBody
     */
    EDIT_POSITION = '/categories/:id/position',

    /**
     * @method DELETE
     * @pathparam catagoryid
     */
    DELETE = '/categories/:id',
}
