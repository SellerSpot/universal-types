export enum CATEGORY {
    /**
     * @method GET
     * @type {IGetAllCategoryResponse} responseBody
     */
    GET_ALL = '/categories',

    /**
     * @method GET
     * @type {ICommonResourcePathParam} pathParams
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
     * @type {ICommonResourcePathParam} pathParams
     * @type {IEditCategoryRequest} requestBody
     * @type {IEditCategoryResponse} responseBody
     */
    EDIT = '/categories/:id',

    /**
     * @method PUT
     * @type {ICommonResourcePathParam} pathParams
     * @type {IEditCategorySiblingOrderRequest} requestBody
     * @type {IEditCategorySiblingOrderResponse} responseBody
     */
    EDIT_SIBLING_ORDER = '/categories/:id/siblingorder',

    /**
     * @method PUT
     * @type {ICommonResourcePathParam} pathParams
     * @type {IEditCategoryPositionRequest} requestBody
     * @type {IEditCategoryPositionResponse} responseBody
     */
    EDIT_POSITION = '/categories/:id/position',

    /**
     * @method DELETE
     * @type {ICommonResourcePathParam} pathParams
     */
    DELETE = '/categories/:id',
}
