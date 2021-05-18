export enum CATALOGUE {
    /**
     * catalogue server info
     *
     * @method GET
     */
    INFO = '/info',

    /**
     * @method GET
     * @type {IListCategoryResponse} responseBody
     */
    CATAGORY_LIST = '/categories',

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
}
