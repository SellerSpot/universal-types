import {
    ICreateCategoryRequest,
    IEditCategoryRequest,
    IEditCategorySiblingOrderRequest,
} from './category/request';
import {
    ICreateCategoryResponse,
    IEditCategoryResponse,
    IEditCategorySiblingOrderResponse,
    IGetCategoryResponse,
    IGetAllCategoryResponse,
} from './category/response';

export enum CATALOGUE {
    /**
     * catalogue server info
     *
     * @method GET
     */
    INFO = '/info',

    /** Category API starts here */
    /**
     * @method GET
     * @type {IGetAllCategoryResponse} responseBody
     */
    CATEGORY_LIST = '/categories',

    /**
     * @method GET
     * @pathparam catagoryid
     * @type {IGetCategoryResponse} responseBody
     */
    CATAGORY_GET = '/categories/:id',

    /**
     * @method POST
     * @type {ICreateCategoryRequest} requestBody
     * @type {ICreateCategoryResponse} responseBody
     */
    CATAGORY_CREATE = '/categories',

    /**
     * @method PUT
     * @pathparam catagoryid
     * @type {IEditCategoryRequest} requestBody
     * @type {IEditCategoryResponse} responseBody
     */
    CATAGORY_EDIT = '/categories/:id',

    /**
     * @method PUT
     * @pathparam {catagoryid} parent id of the sibling should be sent
     * @type {IEditCategorySiblingOrderRequest} requestBody
     * @type {IEditCategorySiblingOrderResponse} responseBody
     */
    CATAGORY_EDIT_SIBLING_ORDER = '/categories/:id/siblingorder',

    /**
     * @method PUT
     * @pathparam catagoryid
     * @type {IEditCategoryPositionRequest} requestBody
     * @type {IEditCategoryPositionResponse} responseBody
     */
    CATAGORY_EDIT_CATEGORY_POSITION = '/categories/:id/position',

    /**
     * @method DELETE
     * @pathparam catagoryid
     */
    CATAGORY_DELETE = '/categories/:id',
    /** Category API ends here */

    /** Products API starts here */
    /**
     * @method GET
     */
    PRODUCT_LIST = '/products',
    /**
     * @method GET
     */
    PRODUCT_GET = '/products/:id',
    /**
     * @method POST
     */
    PRODUCT_CREATE = '/products',
    /**
     * @method PUT
     */
    PRODUCT_EDIT = '/products/:id',
    /**
     * @method DELETE
     */
    PRODUCT_DELETE = '/products/:id',
    /** Products API ends here */

    /** Brands API starts here */
    /**
     * @method GET
     */
    BRAND_LIST = '/brands',
    /**
     * @method GET
     */
    BRAND_GET = '/brands/:id',
    /**
     * @method POST
     */
    BRAND_CREATE = '/brands',
    /**
     * @method PUT
     */
    BRAND_EDIT = '/brands/:id',
    /**
     * @method DELETE
     */
    BRAND_DELETE = '/brands/:id',
    /** Brands API ends here */
}
