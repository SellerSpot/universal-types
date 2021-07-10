export enum PRODUCT {
    /**
     * @method GET
     * @type {IGetAllProductResponse} responseBody
     */
    GET_ALL = '/products',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type {IProductResponse} responseBody
     */
    GET = '/products/:id',
    /**
     * @method POST
     * @type {IProductRequest} requestBody
     * @type {IProductResponse} responseBody
     */
    CREATE = '/products',
    /**
     * @type { ICommonResourcePathParam } pathParams
     * @type {IEditProductRequest} requestBody
     * @type {IProductResponse} responseBody
     * @method PUT
     */
    EDIT = '/products/:id',
    /**
     * @type { ICommonResourcePathParam } pathParams
     * @method DELETE
     */
    DELETE = '/products/:id',
}
